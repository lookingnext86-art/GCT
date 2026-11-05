# Static (no-JS) SEO checks against the production build served by Apache at :8088
import re
import html as H
import json
import pytest
import requests

BASE = "http://localhost:8088"
PAGES = ["/", "/about", "/services", "/for-travel-agencies", "/gallery", "/travel-guide", "/contact",
         "/travel-guide/halal-tourism", "/travel-guide/3-days-in-krakow-itinerary",
         "/travel-guide/christmas-markets-poland", "/travel-guide/hidden-gems",
         "/travel-guide/avoid-mistakes", "/travel-guide/family-summer-poland-itinerary"]
SITE = "https://www.greencontinenttours.com"
FORBIDDEN = ["net rate", "discount", "commission", "cheap", "best price"]


def get(p):
    return requests.get(BASE + p, allow_redirects=False, timeout=10)


def visible_text(h):
    body = h.split("<body", 1)[1]
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>", " ", body, flags=re.S)
    return H.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", body)))


@pytest.mark.parametrize("path", PAGES)
def test_raw_html_seo(path):
    r = get(path)
    assert r.status_code == 200
    h = r.content.decode('utf-8')
    titles = re.findall(r"<title[^>]*>(.*?)</title>", h, re.S)
    assert len(titles) == 1, titles
    t = H.unescape(titles[0])
    limit = 82 if path == "/for-travel-agencies" else 60
    assert len(t) <= limit, (t, len(t))
    descs = re.findall(r'<meta[^>]+name="description"[^>]*content="([^"]*)"', h)
    assert len(descs) == 1, descs
    assert 50 <= len(H.unescape(descs[0])) <= 155, (descs[0], len(descs[0]))
    canon = re.findall(r'<link[^>]+rel="canonical"[^>]*href="([^"]*)"', h)
    assert canon == [SITE + (path if path != "/" else "/")], canon
    assert len(re.findall(r'property="og:title"', h)) == 1
    assert len(re.findall(r'name="twitter:title"', h)) == 1
    assert h.count("<h1") == 1
    txt = visible_text(h)
    assert len(txt.split()) > 250, len(txt.split())
    low = txt.lower()
    for w in FORBIDDEN:
        assert w not in low, (path, w)
    print(f"{path}: title={len(t)} '{t}' desc={len(descs[0])} words={len(txt.split())}")
    for blk in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, re.S):
        json.loads(blk)


@pytest.mark.parametrize("src,dst", [
    ("/Home", "/"), ("/home", "/"), ("/Contact-us", "/contact"), ("/contact-us", "/contact"),
    ("/About", "/about"), ("/about/", "/about"), ("/Travel-Guide/Halal-Tourism", "/travel-guide/halal-tourism"),
    ("/index.html", "/"), ("/contact.html", "/contact"), ("/SERVICES", "/services"),
    ("/For-Travel-Agencies/", "/for-travel-agencies"),
])
def test_redirects(src, dst):
    r = get(src)
    assert r.status_code == 301, r.status_code
    loc = r.headers["Location"]
    assert loc in (dst, BASE + dst), loc
    # final target must be 200 in one hop
    assert get(dst).status_code == 200


def test_404():
    r = get("/old-page")
    h = r.content.decode('utf-8')
    print("404 status", r.status_code)
    assert "Page Not Found" in re.findall(r"<title[^>]*>(.*?)</title>", h, re.S)[0]
    assert re.search(r'<meta[^>]+name="robots"[^>]+noindex', h)
    for href in ['href="/"', 'href="/services"', 'href="/contact"']:
        assert href in h, href


def test_sitemap_robots():
    s = get("/sitemap.xml").text
    locs = re.findall(r"<loc>([^<]+)</loc>", s)
    assert len(locs) == 13
    assert set(locs) == {SITE + p if p != "/" else SITE + "/" for p in PAGES}
    rb = get("/robots.txt").text
    assert "Sitemap: https://www.greencontinenttours.com/sitemap.xml" in rb
