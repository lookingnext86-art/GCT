import hmac
import re
import io
import logging
import os
import uuid
from datetime import datetime, timezone
from typing import Literal, Optional

from fastapi import APIRouter, BackgroundTasks, Depends, File, HTTPException, Request, UploadFile
from fastapi.responses import Response
from PIL import Image
from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError

import publisher
import storage
from auth import get_current_admin
from db import db
from email_service import send_draft_ready_alert
from generator import CATEGORIES, STATIC_ARTICLES, generate_article, model_label, read_time, render_markdown, slugify

logger = logging.getLogger(__name__)
admin = APIRouter(prefix="/api/admin", dependencies=[Depends(get_current_admin)])
cron = APIRouter(prefix="/api/cron")

DEFAULT_SETTINGS = {"default_model": "claude", "auto_generate": True}
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[a-z]{2,}$", re.I)
LIST_FIELDS = {"_id": 0, "body_md": 0}


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


class GenerateInput(BaseModel):
    topic: Optional[str] = None
    model: Optional[Literal["claude", "gpt"]] = None


class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None
    excerpt: Optional[str] = None
    category: Optional[str] = None
    keywords: Optional[list[str]] = None
    image_alt: Optional[str] = None
    body_md: Optional[str] = None


class SettingsInput(BaseModel):
    default_model: Literal["claude", "gpt"]
    auto_generate: bool
    alert_email: Optional[str] = None


async def get_settings() -> dict:
    doc = await db.settings.find_one({"key": "blog"}, {"_id": 0, "key": 0})
    return {**DEFAULT_SETTINGS, "alert_email": os.environ["ADMIN_ALERT_EMAIL"], **(doc or {})}


async def get_article_or_404(article_id: str) -> dict:
    a = await db.articles.find_one({"id": article_id}, {"_id": 0})
    if not a:
        raise HTTPException(status_code=404, detail="Article not found")
    return a


async def unique_slug(base: str, exclude_id: str | None = None) -> str:
    base = slugify(base) or "travel-guide"
    taken = {s for s, _ in STATIC_ARTICLES}
    slug, n = base, 2
    while slug in taken or await db.articles.find_one({"slug": slug, "id": {"$ne": exclude_id}, "status": {"$ne": "rejected"}}):
        slug, n = f"{base}-{n}", n + 1
    return slug


async def run_generation(article_id: str, model_key: str, topic: str | None):
    try:
        titles = [t for _, t in STATIC_ARTICLES] + [
            a["title"] async for a in db.articles.find({"status": {"$in": ["draft", "published"]}}, {"title": 1})
        ]
        data = await generate_article(model_key, topic, titles)
        data["slug"] = await unique_slug(data.pop("slug_hint"), article_id)
        data["read_time"] = read_time(data["body_md"])
        await db.articles.update_one({"id": article_id}, {"$set": {**data, "status": "draft", "updated_at": now_iso()}})
        article = await db.articles.find_one({"id": article_id}, {"_id": 0})
        to = (await get_settings())["alert_email"]
        try:
            email_id, err = await send_draft_ready_alert(article, to)
        except Exception as e:
            email_id, err = None, str(e)
        await db.articles.update_one({"id": article_id}, {"$set": {"alert_sent": bool(email_id), "alert_error": err, "alert_to": to}})
    except Exception as e:
        logger.exception("Article generation failed")
        await db.articles.update_one({"id": article_id}, {"$set": {"status": "failed", "error": str(e)[:300], "updated_at": now_iso()}})


async def start_generation(background: BackgroundTasks, model_key: str, topic: str | None, source: str) -> dict:
    article = {
        "id": str(uuid.uuid4()), "status": "generating", "title": topic or "New travel guide article",
        "topic": topic, "model": model_key, "model_label": model_label(model_key), "source": source,
        "created_at": now_iso(), "updated_at": now_iso(), "cover_image_path": None,
    }
    await db.articles.insert_one(dict(article))
    background.add_task(run_generation, article["id"], model_key, topic)
    return article


async def published_articles() -> list[dict]:
    return await db.articles.find({"status": "published"}, {"_id": 0}).to_list(1000)


async def mark_interrupted():
    await db.articles.update_many({"status": "generating"}, {"$set": {"status": "failed", "error": "Generation was interrupted. Please try again."}})
    await db.articles.create_index("id", unique=True)
    await db.cron_runs.create_index("run_id", unique=True)


@admin.get("/articles")
async def list_articles(status: Optional[str] = None):
    query = {"status": status} if status else {}
    return await db.articles.find(query, LIST_FIELDS).sort("created_at", -1).to_list(500)


@admin.get("/articles/{article_id}")
async def get_article(article_id: str):
    a = await get_article_or_404(article_id)
    if a.get("body_md"):
        a["body_html"], a["toc"] = render_markdown(a["body_md"])
    return a


@admin.post("/articles/generate")
async def generate(data: GenerateInput, background: BackgroundTasks):
    model_key = data.model or (await get_settings())["default_model"]
    topic = (data.topic or "").strip() or None
    return await start_generation(background, model_key, topic, "manual")


@admin.put("/articles/{article_id}")
async def update_article(article_id: str, data: ArticleUpdate):
    a = await get_article_or_404(article_id)
    if a["status"] == "generating":
        raise HTTPException(status_code=400, detail="Article is still being written")
    updates = {k: v for k, v in data.model_dump().items() if v is not None}
    if "category" in updates and updates["category"] not in CATEGORIES:
        raise HTTPException(status_code=400, detail="Unknown category")
    if "slug" in updates:
        if a["status"] == "published" and slugify(updates["slug"]) != a["slug"]:
            raise HTTPException(status_code=400, detail="The web address can't change after publishing")
        updates["slug"] = await unique_slug(updates["slug"], article_id)
    if "body_md" in updates:
        updates["read_time"] = read_time(updates["body_md"])
    updates["updated_at"] = now_iso()
    await db.articles.update_one({"id": article_id}, {"$set": updates})
    return await get_article(article_id)


@admin.post("/articles/{article_id}/image")
async def upload_image(article_id: str, file: UploadFile = File(...)):
    await get_article_or_404(article_id)
    if file.content_type not in ("image/jpeg", "image/png", "image/webp"):
        raise HTTPException(status_code=400, detail="Please upload a JPG, PNG or WebP image")
    raw = await file.read()
    if len(raw) > 15 * 1024 * 1024:
        raise HTTPException(status_code=400, detail="Image must be under 15 MB")
    try:
        img = Image.open(io.BytesIO(raw)).convert("RGB")
    except Exception:
        raise HTTPException(status_code=400, detail="This file could not be read as an image")
    img.thumbnail((1600, 1600))
    out = io.BytesIO()
    img.save(out, "WEBP", quality=80, method=6)
    path = f"{storage.APP_NAME}/covers/{article_id}/{uuid.uuid4()}.webp"
    result = storage.put_object(path, out.getvalue(), "image/webp")
    await db.articles.update_one({"id": article_id}, {"$set": {
        "cover_image_path": result["path"], "cover_width": img.width, "cover_height": img.height,
        "cover_original_name": file.filename, "updated_at": now_iso(),
    }})
    return {"ok": True, "width": img.width, "height": img.height}


@admin.get("/articles/{article_id}/image")
async def get_image(article_id: str):
    a = await get_article_or_404(article_id)
    if not a.get("cover_image_path"):
        raise HTTPException(status_code=404, detail="No cover image")
    return Response(content=storage.get_object(a["cover_image_path"]), media_type="image/webp")


@admin.post("/articles/{article_id}/publish")
async def publish(article_id: str):
    a = await get_article_or_404(article_id)
    if a["status"] not in ("draft", "published"):
        raise HTTPException(status_code=400, detail="Only drafts can be published")
    if not a.get("cover_image_path"):
        raise HTTPException(status_code=400, detail="Add a cover photo before publishing")
    if not publisher.targets():
        raise HTTPException(status_code=400, detail="Website connection is not set up yet")
    a = {**a, "status": "published", "published_at": a.get("published_at") or now_iso(), "updated_at": now_iso()}
    others = [p for p in await published_articles() if p["id"] != article_id]
    files = {publisher.image_path(a["slug"]): storage.get_object(a["cover_image_path"]), **publisher.article_file(a), **publisher.site_files(others + [a])}
    try:
        pushed = await publisher.push(files)
    except Exception as e:
        logger.exception("Publish failed")
        raise HTTPException(status_code=502, detail=f"Could not upload to your website: {e}")
    await db.articles.update_one({"id": article_id}, {"$set": {
        "status": "published", "published_at": a["published_at"], "updated_at": a["updated_at"],
        "live_url": f"{os.environ['SITE_URL'].rstrip('/')}/travel-guide/{a['slug']}", "pushed_to": pushed,
    }})
    return await get_article(article_id)


@admin.post("/articles/{article_id}/unpublish")
async def unpublish(article_id: str):
    a = await get_article_or_404(article_id)
    if a["status"] != "published":
        raise HTTPException(status_code=400, detail="Article is not published")
    remaining = [p for p in await published_articles() if p["id"] != article_id]
    try:
        await publisher.push(publisher.site_files(remaining), [f"blog-data/articles/{a['slug']}.json", publisher.image_path(a["slug"])])
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Could not update your website: {e}")
    await db.articles.update_one({"id": article_id}, {"$set": {"status": "draft", "updated_at": now_iso()}, "$unset": {"live_url": ""}})
    return await get_article(article_id)


@admin.post("/articles/{article_id}/reject")
async def reject(article_id: str):
    a = await get_article_or_404(article_id)
    if a["status"] not in ("draft", "failed"):
        raise HTTPException(status_code=400, detail="Only drafts can be rejected")
    await db.articles.update_one({"id": article_id}, {"$set": {"status": "rejected", "updated_at": now_iso()}})
    return {"ok": True}


@admin.post("/articles/{article_id}/restore")
async def restore(article_id: str):
    a = await get_article_or_404(article_id)
    if a["status"] != "rejected" or not a.get("body_md"):
        raise HTTPException(status_code=400, detail="Only rejected drafts can be restored")
    await db.articles.update_one({"id": article_id}, {"$set": {"status": "draft", "updated_at": now_iso()}})
    return {"ok": True}


@admin.get("/settings")
async def read_settings():
    return {**await get_settings(), "targets": publisher.targets(), "sftp_configured": publisher.sftp_configured(),
            "site_url": os.environ["SITE_URL"]}


@admin.put("/settings")
async def write_settings(data: SettingsInput):
    updates = data.model_dump(exclude_none=True)
    if "alert_email" in updates:
        updates["alert_email"] = updates["alert_email"].strip().lower()
        if not EMAIL_RE.match(updates["alert_email"]):
            raise HTTPException(status_code=400, detail="Please enter a valid email address")
    await db.settings.update_one({"key": "blog"}, {"$set": updates}, upsert=True)
    return await read_settings()


@admin.post("/settings/test-email")
async def test_email():
    to = (await get_settings())["alert_email"]
    sample = {"id": "test", "title": "Test alert from your Travel Guide Studio", "excerpt": "If you can read this, draft alerts will reach this inbox."}
    email_id, err = await send_draft_ready_alert(sample, to)
    return {"ok": bool(email_id), "message": f"Test email sent to {to}" if email_id else f"Could not deliver to {to}: {err}"}


@admin.post("/site/test")
async def test_site():
    try:
        return {"ok": True, "message": await publisher.test_connection()}
    except Exception as e:
        return {"ok": False, "message": f"Connection failed: {e}"}


@admin.post("/site/resync")
async def resync():
    published = await published_articles()
    if not publisher.targets():
        raise HTTPException(status_code=400, detail="Website connection is not set up yet")
    files = publisher.site_files(published)
    for a in published:
        files.update(publisher.article_file(a))
        files[publisher.image_path(a["slug"])] = storage.get_object(a["cover_image_path"])
    try:
        pushed = await publisher.push(files)
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Could not upload to your website: {e}")
    return {"ok": True, "files": len(files), "pushed_to": pushed}


@cron.post("/generate-article")
async def cron_generate(request: Request, background: BackgroundTasks):
    # Cron endpoints must ack 2xx immediately; enqueue/background the actual work.
    header = request.headers.get("Authorization", "")
    token = header[7:] if header.startswith("Bearer ") else ""
    if not token or not hmac.compare_digest(token, os.environ["WEBHOOK_CRON_SECRET"]):
        raise HTTPException(status_code=401, detail="Unauthorized")
    try:
        body = await request.json()
    except Exception:
        body = {}
    if not isinstance(body, dict):
        raise HTTPException(status_code=400, detail="Invalid body")
    run_id = request.headers.get("X-Webhook-Id") or body.get("run_id") or str(uuid.uuid4())
    try:
        await db.cron_runs.insert_one({"run_id": run_id, "received_at": now_iso()})
    except DuplicateKeyError:
        return {"status": "duplicate"}
    settings = await get_settings()
    if not settings["auto_generate"]:
        return {"status": "skipped"}
    article = await start_generation(background, settings["default_model"], None, "schedule")
    return {"status": "accepted", "article_id": article["id"]}
