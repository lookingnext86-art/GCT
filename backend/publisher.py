import os
from datetime import datetime
from xml.sax.saxutils import escape

from generator import CATEGORIES, render_markdown

INDEX_KEYS = ("slug", "href", "title", "excerpt", "category", "categoryLabel", "readTime", "date", "dateISO", "author", "image", "imageAlt")


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
        "image": f"/api/public/images/{a['slug']}.webp?v={a['updated_at'][:19].replace(':', '')}",
        "imageAlt": a.get("image_alt") or a["title"],
        "html": html,
        "toc": toc,
    }


def index_payload(articles: list[dict]) -> dict:
    ordered = sorted(articles, key=lambda a: a["published_at"], reverse=True)
    return {"articles": [{k: article_payload(a)[k] for k in INDEX_KEYS} for a in ordered]}


def sitemap_xml(articles: list[dict]) -> str:
    site = os.environ["SITE_URL"].rstrip("/")
    entries = "".join(
        "  <url>\n"
        f"    <loc>{escape(site)}/travel-guide/{escape(a['slug'])}</loc>\n"
        f"    <lastmod>{a['updated_at'][:10]}</lastmod>\n"
        "    <changefreq>monthly</changefreq>\n"
        "    <priority>0.7</priority>\n"
        "  </url>\n"
        for a in articles
    )
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{entries}</urlset>\n'
