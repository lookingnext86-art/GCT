# Backend regression tests: auth, admin articles, settings, site, cron (Green Continent Tours Travel Guide Studio)
import os
import uuid
import pytest
import requests
from dotenv import load_dotenv

load_dotenv("/app/frontend/.env")
load_dotenv("/app/backend/.env")
BASE_URL = os.environ.get("REACT_APP_BACKEND_URL").rstrip("/")
CRON_SECRET = os.environ.get("WEBHOOK_CRON_SECRET")
ADMIN_EMAIL = "info@greencontinenttours.com"
ADMIN_PASSWORD = "GCT-iMyf-aKP51zV51Kb"
AUSCHWITZ_ID = "15ddf3d3-2413-4082-ba8b-00806f420553"
RUN_REAL_CRON = os.environ.get("RUN_REAL_CRON") == "1"


@pytest.fixture(scope="session")
def token():
    r = requests.post(f"{BASE_URL}/api/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
    if r.status_code != 200:
        pytest.skip(f"login failed {r.status_code} {r.text}")
    return r.json()["token"]


@pytest.fixture(scope="session")
def h(token):
    return {"Authorization": f"Bearer {token}"}


# --- Auth
class TestAuth:
    def test_login_ok(self):
        r = requests.post(f"{BASE_URL}/api/auth/login", json={"email": ADMIN_EMAIL.upper(), "password": ADMIN_PASSWORD})
        assert r.status_code == 200
        d = r.json()
        assert isinstance(d["token"], str) and d["user"]["email"] == ADMIN_EMAIL and d["user"]["role"] == "admin"

    def test_login_wrong_password(self):
        r = requests.post(f"{BASE_URL}/api/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong"},
                          headers={"X-Forwarded-For": f"10.9.{uuid.uuid4().int % 250}.1"})
        assert r.status_code == 401
        assert r.json()["detail"] == "Invalid email or password"

    def test_bruteforce_lockout(self):
        ip = f"10.66.{uuid.uuid4().int % 250}.7"
        email = f"test_{uuid.uuid4().hex[:6]}@example.com"
        codes = [requests.post(f"{BASE_URL}/api/auth/login", json={"email": email, "password": "x"},
                               headers={"X-Forwarded-For": ip}).status_code for _ in range(6)]
        assert codes[:5] == [401] * 5
        assert codes[5] == 429

    def test_me(self, h):
        r = requests.get(f"{BASE_URL}/api/auth/me", headers=h)
        assert r.status_code == 200 and r.json()["email"] == ADMIN_EMAIL and "password_hash" not in r.json()

    @pytest.mark.parametrize("path", ["/api/admin/articles", "/api/admin/settings", f"/api/admin/articles/{AUSCHWITZ_ID}"])
    def test_admin_requires_token(self, path):
        assert requests.get(f"{BASE_URL}{path}").status_code == 401
        assert requests.get(f"{BASE_URL}{path}", headers={"Authorization": "Bearer garbage"}).status_code == 401


# --- Articles
class TestArticles:
    def test_list(self, h):
        r = requests.get(f"{BASE_URL}/api/admin/articles", headers=h)
        assert r.status_code == 200
        items = r.json()
        assert any(a["id"] == AUSCHWITZ_ID for a in items)
        assert all("_id" not in a and "body_md" not in a for a in items)
        r2 = requests.get(f"{BASE_URL}/api/admin/articles?status=published", headers=h)
        assert all(a["status"] == "published" for a in r2.json())

    def test_get_detail(self, h):
        r = requests.get(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h)
        assert r.status_code == 200
        a = r.json()
        assert a["body_md"] and "<h2" in a["body_html"] and len(a["toc"]) > 0

    def test_get_404(self, h):
        assert requests.get(f"{BASE_URL}/api/admin/articles/nope", headers=h).status_code == 404

    def test_update_and_revert(self, h):
        orig = requests.get(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h).json()
        r = requests.put(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h,
                         json={"excerpt": "TEST_excerpt", "keywords": ["a", "b"]})
        assert r.status_code == 200 and r.json()["excerpt"] == "TEST_excerpt"
        g = requests.get(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h).json()
        assert g["excerpt"] == "TEST_excerpt" and g["keywords"] == ["a", "b"] and g["title"] == orig["title"]
        requests.put(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h,
                     json={"excerpt": orig["excerpt"], "keywords": orig["keywords"]})

    def test_update_bad_category(self, h):
        r = requests.put(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h, json={"category": "mars"})
        assert r.status_code == 400

    def test_slug_conflict_with_static(self, h):
        orig = requests.get(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h).json()["slug"]
        r = requests.put(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h, json={"slug": "hidden-gems"})
        assert r.status_code == 200 and r.json()["slug"] == "hidden-gems-2"
        r = requests.put(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h, json={"slug": orig})
        assert r.json()["slug"] == orig

    def test_upload_invalid_type(self, h):
        r = requests.post(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}/image", headers=h,
                          files={"file": ("x.txt", b"hello", "text/plain")})
        assert r.status_code == 400

    def test_upload_corrupt_image(self, h):
        r = requests.post(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}/image", headers=h,
                          files={"file": ("x.jpg", b"notreallyjpeg", "image/jpeg")})
        assert r.status_code == 400

    def test_publish_without_cover(self, h):
        a = requests.get(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}", headers=h).json()
        if a.get("cover_image_path"):
            pytest.skip("Auschwitz already has a cover")
        r = requests.post(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}/publish", headers=h)
        assert r.status_code == 400 and r.json()["detail"] == "Add a cover photo before publishing"

    def test_unpublish_draft_400(self, h):
        assert requests.post(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}/unpublish", headers=h).status_code == 400

    def test_restore_non_rejected_400(self, h):
        assert requests.post(f"{BASE_URL}/api/admin/articles/{AUSCHWITZ_ID}/restore", headers=h).status_code == 400


# --- Settings / site
class TestSettings:
    def test_settings_roundtrip(self, h):
        s = requests.get(f"{BASE_URL}/api/admin/settings", headers=h).json()
        assert s["sftp_configured"] is False and "local" in s["targets"]
        r = requests.put(f"{BASE_URL}/api/admin/settings", headers=h, json={"default_model": "gpt", "auto_generate": False})
        assert r.status_code == 200
        g = requests.get(f"{BASE_URL}/api/admin/settings", headers=h).json()
        assert g["default_model"] == "gpt" and g["auto_generate"] is False
        requests.put(f"{BASE_URL}/api/admin/settings", headers=h,
                     json={"default_model": s["default_model"], "auto_generate": s["auto_generate"]})

    def test_settings_invalid(self, h):
        r = requests.put(f"{BASE_URL}/api/admin/settings", headers=h, json={"default_model": "llama", "auto_generate": True})
        assert r.status_code == 422

    def test_site_test(self, h):
        r = requests.post(f"{BASE_URL}/api/admin/site/test", headers=h)
        assert r.status_code == 200 and "not added" in r.json()["message"]

    def test_resync(self, h):
        r = requests.post(f"{BASE_URL}/api/admin/site/resync", headers=h)
        assert r.status_code == 200 and r.json()["pushed_to"] == ["local"] and r.json()["files"] >= 2


# --- Cron
class TestCron:
    def test_no_auth(self):
        assert requests.post(f"{BASE_URL}/api/cron/generate-article").status_code == 401

    def test_wrong_auth(self):
        assert requests.post(f"{BASE_URL}/api/cron/generate-article", headers={"Authorization": "Bearer wrong"}).status_code == 401

    def test_skipped_and_duplicate(self, h):
        s = requests.get(f"{BASE_URL}/api/admin/settings", headers=h).json()
        requests.put(f"{BASE_URL}/api/admin/settings", headers=h, json={"default_model": s["default_model"], "auto_generate": False})
        try:
            rid = f"TEST_{uuid.uuid4()}"
            hd = {"Authorization": f"Bearer {CRON_SECRET}", "X-Webhook-Id": rid}
            r1 = requests.post(f"{BASE_URL}/api/cron/generate-article", headers=hd)
            assert r1.status_code == 200 and r1.json()["status"] == "skipped"
            r2 = requests.post(f"{BASE_URL}/api/cron/generate-article", headers=hd)
            assert r2.json()["status"] == "duplicate"
        finally:
            requests.put(f"{BASE_URL}/api/admin/settings", headers=h, json={"default_model": s["default_model"], "auto_generate": s["auto_generate"]})

    @pytest.mark.skipif(not RUN_REAL_CRON, reason="real LLM generation; set RUN_REAL_CRON=1")
    def test_accepted_real(self, h):
        requests.put(f"{BASE_URL}/api/admin/settings", headers=h, json={"default_model": "claude", "auto_generate": True})
        rid = f"TEST_{uuid.uuid4()}"
        hd = {"Authorization": f"Bearer {CRON_SECRET}", "X-Webhook-Id": rid}
        r = requests.post(f"{BASE_URL}/api/cron/generate-article", headers=hd, json={})
        assert r.status_code == 200 and r.json()["status"] == "accepted" and r.json()["article_id"]
        a = requests.get(f"{BASE_URL}/api/admin/articles/{r.json()['article_id']}", headers=h).json()
        assert a["status"] == "generating" and a["source"] == "schedule"
        assert requests.post(f"{BASE_URL}/api/cron/generate-article", headers=hd).json()["status"] == "duplicate"
