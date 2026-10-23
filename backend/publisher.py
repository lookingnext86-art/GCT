import asyncio
import json
import os
import posixpath
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

import paramiko

from generator import CATEGORIES, render_markdown

BASE_SITEMAP = Path(__file__).parent / "base_sitemap.xml"


def sftp_configured() -> bool:
    return all(os.environ.get(k) for k in ("SFTP_HOST", "SFTP_USERNAME", "SFTP_PASSWORD"))


def targets() -> list[str]:
    result = []
    if sftp_configured():
        result.append("sftp")
    if os.environ.get("PUBLISH_LOCAL_DIR"):
        result.append("local")
    return result


def image_path(slug: str) -> str:
    return f"images/blog/{slug}.webp"


def article_payload(a: dict) -> dict:
    html, toc = render_markdown(a["body_md"])
    published = datetime.fromisoformat(a["published_at"])
    return {
        "slug": a["slug"],
        "href": f"/travel-guide/{a['slug']}",
        "title": a["title"],
        "metaTitle": a["meta_title"],
        "metaDescription": a["meta_description"],
        "excerpt": a["excerpt"],
        "category": a["category"],
        "categoryLabel": CATEGORIES.get(a["category"], "Poland Tips"),
        "keywords": a.get("keywords", []),
        "readTime": a["read_time"],
        "date": published.strftime("%B %-d, %Y"),
        "dateISO": published.date().isoformat(),
        "updatedISO": a["updated_at"][:10],
        "author": "Green Continent Tours",
        "image": f"/{image_path(a['slug'])}",
        "imageAlt": a.get("image_alt") or a["title"],
        "html": html,
        "toc": toc,
    }


def index_payload(articles: list[dict]) -> dict:
    keys = ("slug", "href", "title", "excerpt", "category", "categoryLabel", "readTime", "date", "dateISO", "author", "image", "imageAlt")
    items = sorted((article_payload(a) for a in articles), key=lambda x: x["dateISO"], reverse=True)
    return {"articles": [{k: i[k] for k in keys} for i in items], "generatedAt": datetime.now(timezone.utc).isoformat()}


def sitemap_xml(articles: list[dict]) -> str:
    site = os.environ["SITE_URL"].rstrip("/")
    entries = []
    for a in articles:
        p = article_payload(a)
        entries.append(
            "  <url>\n"
            f"    <loc>{site}{p['href']}</loc>\n"
            f"    <lastmod>{p['updatedISO']}</lastmod>\n"
            "    <changefreq>monthly</changefreq>\n"
            "    <priority>0.7</priority>\n"
            "    <image:image>\n"
            f"      <image:loc>{site}{p['image']}</image:loc>\n"
            f"      <image:title>{escape(p['title'])}</image:title>\n"
            "    </image:image>\n"
            "  </url>\n"
        )
    base = BASE_SITEMAP.read_text()
    return base.replace("</urlset>", "".join(entries) + "\n</urlset>")


def _sftp_mkdirs(sftp, path: str):
    parts, current = path.strip("/").split("/"), "/" if path.startswith("/") else ""
    for part in parts:
        current = posixpath.join(current, part) if current else part
        try:
            sftp.stat(current)
        except IOError:
            sftp.mkdir(current)


def _sftp_sync(files: dict[str, bytes], deletes: list[str]):
    transport = paramiko.Transport((os.environ["SFTP_HOST"], int(os.environ.get("SFTP_PORT") or 22)))
    try:
        transport.connect(username=os.environ["SFTP_USERNAME"], password=os.environ["SFTP_PASSWORD"])
        sftp = paramiko.SFTPClient.from_transport(transport)
        root = (os.environ.get("SFTP_REMOTE_ROOT") or "").rstrip("/")
        for rel, data in files.items():
            remote = posixpath.join(root, rel) if root else rel
            parent = posixpath.dirname(remote)
            if parent:
                _sftp_mkdirs(sftp, parent)
            with sftp.open(remote, "wb") as fh:
                fh.write(data)
        for rel in deletes:
            try:
                sftp.remove(posixpath.join(root, rel) if root else rel)
            except IOError:
                pass
        sftp.close()
    finally:
        transport.close()


def _sftp_test() -> str:
    transport = paramiko.Transport((os.environ["SFTP_HOST"], int(os.environ.get("SFTP_PORT") or 22)))
    try:
        transport.connect(username=os.environ["SFTP_USERNAME"], password=os.environ["SFTP_PASSWORD"])
        sftp = paramiko.SFTPClient.from_transport(transport)
        root = os.environ.get("SFTP_REMOTE_ROOT") or "."
        names = sorted(sftp.listdir(root))[:12]
        sftp.close()
        return f"Connected. Folder '{root}' contains: {', '.join(names) or '(empty)'}"
    finally:
        transport.close()


def _local_sync(files: dict[str, bytes], deletes: list[str]):
    root = Path(os.environ["PUBLISH_LOCAL_DIR"])
    for rel, data in files.items():
        dest = root / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
    for rel in deletes:
        (root / rel).unlink(missing_ok=True)


async def push(files: dict[str, bytes], deletes: list[str] | None = None) -> list[str]:
    deletes = deletes or []
    done = []
    for t in targets():
        if t == "sftp":
            await asyncio.to_thread(_sftp_sync, files, deletes)
        else:
            await asyncio.to_thread(_local_sync, files, deletes)
        done.append(t)
    return done


async def test_connection() -> str:
    if not sftp_configured():
        return "Website connection details are not added yet."
    return await asyncio.to_thread(_sftp_test)


def site_files(published: list[dict]) -> dict[str, bytes]:
    return {
        "blog-data/index.json": json.dumps(index_payload(published), ensure_ascii=False).encode(),
        "sitemap.xml": sitemap_xml(published).encode(),
    }


def article_file(a: dict) -> dict[str, bytes]:
    return {f"blog-data/articles/{a['slug']}.json": json.dumps(article_payload(a), ensure_ascii=False).encode()}
