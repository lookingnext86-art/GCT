import json
import os
import re
import uuid

import markdown
from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

MODELS = {
    "claude": ("anthropic", "claude-sonnet-5-5", "Claude Sonnet 5.5"),
    "gpt": ("openai", "gpt-6-luna", "GPT 6 Luna"),
}

CATEGORIES = {
    "krakow": "Krakow",
    "family-travel": "Family Travel",
    "poland-tips": "Poland Tips",
    "winter-travel": "Winter Travel",
    "europe": "Europe",
}

STATIC_ARTICLES = [
    ("halal-tourism", "Discover the Best Halal Food in Krakow"),
    ("hidden-gems", "Hidden Gems in Poland: 15 Secret Places Tourists Miss"),
    ("avoid-mistakes", "What to Avoid in Poland: 10 Common Tourist Mistakes & Scams"),
    ("family-summer-poland-itinerary", "Family Summer in Poland: A Relaxed 10-Day Travel Itinerary"),
]

SYSTEM_PROMPT = """You are the senior travel writer for Green Continent Tours, a destination management company (DMC) and tour operator based in Krakow, Poland. The company designs private tours, group trips, airport transfers, family holidays, halal-friendly travel and multi-country itineraries across Poland and Central Europe.

Write like a knowledgeable local who plans these trips every week: warm, specific, practical and confident. Use concrete place names, realistic travel times, seasonal advice and insider tips. Never invent exact prices, phone numbers, opening hours or statistics; when cost matters, give a sensible range and advise checking current rates.

Avoid generic AI phrasing. Do not use words or phrases like: delve, tapestry, nestled, vibrant tapestry, hidden gem (more than once), embark, bustling, testament, in conclusion, in today's world, whether you're, unlock, elevate. Keep sentences varied and natural.

SEO rules: target one clear primary keyword for travelers searching about Poland/Krakow/Central Europe. Use it in the title, the first paragraph, at least one H2 and the meta description. Use related secondary keywords naturally."""

USER_PROMPT = """Write one new long-form travel guide article for our website's Travel Guide.

{topic_line}

Articles we already have (do NOT repeat these topics or titles):
{existing}

Return ONLY a valid JSON object, no code fences, with exactly these keys:
{{
  "title": "Compelling SEO headline, 50-70 characters",
  "slug": "short SEO URL slug, 3-6 words, lowercase-with-hyphens, built around the primary keyword",
  "meta_title": "SEO title tag, max 60 characters",
  "meta_description": "Meta description, 140-155 characters, includes primary keyword and a benefit",
  "excerpt": "One or two sentence card teaser, max 160 characters",
  "category": "one of: krakow, family-travel, poland-tips, winter-travel, europe",
  "keywords": ["primary keyword", "4-7 secondary keywords"],
  "image_alt": "Descriptive, keyword-rich alt text for a cover photo that fits this article",
  "body_markdown": "The full article body in Markdown"
}}

Body requirements:
- 1,400 to 2,000 words. Start with a 2-3 sentence intro paragraph (no heading). Do NOT include an H1.
- Use ## for main sections (5-8 of them) and ### for sub-points. Use short paragraphs, bullet lists and at least one numbered list where helpful.
- Include a "## Frequently Asked Questions" section with 4-5 questions as ### headings, each followed by a concise answer.
- Naturally include 2-3 internal Markdown links chosen from: [our Poland tours](/services), [contact our Krakow team](/contact), [hidden gems in Poland](/travel-guide/hidden-gems), [mistakes to avoid in Poland](/travel-guide/avoid-mistakes), [family summer itinerary](/travel-guide/family-summer-poland-itinerary), [halal food in Krakow](/travel-guide/halal-tourism).
- End with a short closing section inviting readers to plan their trip with Green Continent Tours' Krakow team.
- No raw HTML, no images, no tables."""


def model_label(key: str) -> str:
    return MODELS.get(key, MODELS["claude"])[2]


def slugify(text: str) -> str:
    text = re.sub(r"[^a-z0-9\s-]", "", text.lower())
    return re.sub(r"[\s-]+", "-", text).strip("-")[:80].strip("-")


def render_markdown(md_text: str) -> tuple[str, list[dict]]:
    md = markdown.Markdown(extensions=["extra", "sane_lists", "toc"], extension_configs={"toc": {"toc_depth": "2"}})
    safe = re.sub(r"<(https?://[^\s>]+)>", r"[\1](\1)", md_text).replace("<", "&lt;")
    html = md.convert(safe)
    toc = [{"id": t["id"], "title": t["name"]} for t in md.toc_tokens if t["level"] == 2]
    return html, toc


def read_time(md_text: str) -> str:
    words = len(re.findall(r"\w+", md_text))
    return f"{max(3, round(words / 220))} min read"


def _parse_json(raw: str) -> dict:
    raw = raw.strip()
    raw = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw)
    start, end = raw.find("{"), raw.rfind("}")
    return json.loads(raw[start:end + 1])


async def generate_article(model_key: str, topic: str | None, existing_titles: list[str]) -> dict:
    provider, model, _ = MODELS.get(model_key, MODELS["claude"])
    chat = LlmChat(
        api_key=os.environ["EMERGENT_LLM_KEY"],
        session_id=f"article-{uuid.uuid4()}",
        system_message=SYSTEM_PROMPT,
    ).with_model(provider, model).with_params(max_tokens=8000)
    topic_line = (
        f"Topic requested by the editor: {topic}"
        if topic else
        "Choose a fresh, high-search-intent topic for international travelers planning trips to Krakow, Poland or Central Europe "
        "(e.g. day trips from Krakow, seasonal guides, city comparisons, group or family travel, food, culture, practical logistics)."
    )
    prompt = USER_PROMPT.format(topic_line=topic_line, existing="\n".join(f"- {t}" for t in existing_titles) or "- none")
    chunks = []
    async for ev in chat.stream_message(UserMessage(text=prompt)):
        if isinstance(ev, TextDelta):
            chunks.append(ev.content)
        elif isinstance(ev, StreamDone):
            break
    data = _parse_json("".join(chunks))
    category = data.get("category") if data.get("category") in CATEGORIES else "poland-tips"
    return {
        "title": data["title"].strip(),
        "slug_hint": (data.get("slug") or data["title"]).strip(),
        "meta_title": data.get("meta_title", data["title"]).strip()[:70],
        "meta_description": data.get("meta_description", "").strip(),
        "excerpt": data.get("excerpt", "").strip(),
        "category": category,
        "keywords": [k.strip() for k in data.get("keywords", []) if isinstance(k, str)],
        "image_alt": data.get("image_alt", data["title"]).strip(),
        "body_md": data["body_markdown"].strip(),
    }
