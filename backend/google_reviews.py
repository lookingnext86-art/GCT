import os
import time

import httpx
from fastapi import APIRouter

router = APIRouter(prefix="/api/public")
PLACES = "https://places.googleapis.com/v1"
CACHE_SECONDS = 6 * 3600
_cache = {"at": 0, "data": None, "place_id": None}


async def _place_id(client, key):
    if os.environ.get("GOOGLE_PLACE_ID"):
        return os.environ["GOOGLE_PLACE_ID"]
    if _cache["place_id"]:
        return _cache["place_id"]
    r = await client.post(f"{PLACES}/places:searchText", headers={
        "X-Goog-Api-Key": key, "X-Goog-FieldMask": "places.id",
    }, json={"textQuery": os.environ["GOOGLE_PLACE_QUERY"]})
    r.raise_for_status()
    _cache["place_id"] = r.json()["places"][0]["id"]
    return _cache["place_id"]


def _shape(data):
    reviews = [{
        "author": (rv.get("authorAttribution") or {}).get("displayName", "Google user"),
        "authorUrl": (rv.get("authorAttribution") or {}).get("uri"),
        "photo": (rv.get("authorAttribution") or {}).get("photoUri"),
        "rating": rv.get("rating", 5),
        "text": (rv.get("originalText") or rv.get("text") or {}).get("text", ""),
        "when": rv.get("relativePublishTimeDescription", ""),
        "url": rv.get("googleMapsUri"),
    } for rv in data.get("reviews", []) if rv.get("rating", 0) >= 4]
    return {
        "rating": data.get("rating"),
        "count": data.get("userRatingCount"),
        "mapsUrl": data.get("googleMapsUri"),
        "reviews": [r for r in reviews if r["text"]],
    }


@router.get("/google-reviews")
async def google_reviews():
    key = os.environ.get("GOOGLE_PLACES_API_KEY")
    if not key:
        return {"reviews": []}
    if _cache["data"] and time.time() - _cache["at"] < CACHE_SECONDS:
        return _cache["data"]
    try:
        async with httpx.AsyncClient(timeout=10) as client:
            pid = await _place_id(client, key)
            r = await client.get(f"{PLACES}/places/{pid}", headers={
                "X-Goog-Api-Key": key,
                "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
            })
            r.raise_for_status()
    except (httpx.HTTPError, KeyError, IndexError):
        return _cache["data"] or {"reviews": []}
    _cache.update(at=time.time(), data=_shape(r.json()))
    return _cache["data"]
