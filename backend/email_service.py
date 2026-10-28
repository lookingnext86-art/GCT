import os
import re
import ipaddress
import logging
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse

import httpx

logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str) -> tuple[str | None, str | None]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": os.environ["EMAIL_FROM_NAME"]}
    if os.environ.get("EMAIL_REPLY_TO"):
        payload["contact_email"] = os.environ["EMAIL_REPLY_TO"]
    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": os.environ["EMERGENT_EMAIL_KEY"]},
            json=payload,
        )
    if resp.status_code >= 400:
        logger.warning(f"Email send failed: {resp.status_code} {resp.text}")
        try:
            return None, resp.json().get("error") or resp.text[:200]
        except ValueError:
            return None, resp.text[:200]
    return resp.json().get("id"), None


async def send_draft_ready_alert(article: dict, to: str) -> tuple[str | None, str | None]:
    brand = os.environ["EMAIL_FROM_NAME"]
    link = f"{os.environ['ADMIN_PANEL_URL'].rstrip('/')}/articles/{article['id']}"
    subject = f"New travel guide draft ready for review: {article['title']}"
    html = (
        '<table role="presentation" width="100%" style="background:#f4f7f6"><tr><td style="padding:32px;font-family:Arial,sans-serif">'
        '<table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px">'
        '<tr><td style="background:#0f4f47;padding:20px 28px;border-radius:12px 12px 0 0;color:#4dd4ac;font-size:12px;letter-spacing:3px;text-transform:uppercase">'
        f'{escape(brand)} &middot; Travel Guide</td></tr>'
        '<tr><td style="padding:28px;color:#334155;font-size:15px;line-height:1.6">'
        '<p style="margin:0 0 12px">A new article draft has been written and is waiting for your approval:</p>'
        f'<p style="margin:0 0 6px;font-size:19px;font-weight:bold;color:#0f4f47">{escape(article["title"])}</p>'
        f'<p style="margin:0 0 22px;color:#64748b">{escape(article.get("excerpt", ""))}</p>'
        f'<p style="margin:0 0 22px"><a href="{escape(link)}" style="background:#4dd4ac;color:#0f4f47;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:bold">Review the draft</a></p>'
        '<p style="margin:0;color:#64748b;font-size:13px">Add a cover photo, make any edits, then approve to publish it on your Travel Guide.</p>'
        '</td></tr>'
        f'<tr><td style="padding:16px 28px;color:#94a3b8;font-size:12px;border-top:1px solid #eef2f1">Sent by {escape(brand)} admin. Nothing is published without your approval.</td></tr>'
        '</table></td></tr></table>'
    )
    return await send_email(to=to, subject=subject, html=html)
