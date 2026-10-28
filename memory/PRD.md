# Green Continent Tours — PRD

## Original Problem Statement
Build a pixel-perfect replica of `https://greencontinenttours.com` — preserve structure, copy the original logo, dark-green theme (`#0f4f47`) with mint accent (`#4dd4ac`). Optimize copy for SEO to attract travelers to Krakow, Poland, and Europe.

## Design Philosophy (USER-MANDATED)
- "Editorial / Cinematic / Premium Magazine" styling. NO "AI-looking" content.
- Use real photos with CSS filmic grading or custom CSS graphics — never AI-generated imagery.
- Never overwrite or rephrase the user's exact copy under the guise of "grammar passes."
- Colors: dark green `#0f4f47`, mint `#4dd4ac`.

## Architecture
- **Frontend**: React SPA (CRA), React Router DOM with lazy-loaded routes, Tailwind CSS, lucide-react icons.
- **Backend**: FastAPI scaffolded but not wired (no endpoints yet).
- **DB**: MongoDB available, not yet used.
- **Routes**: Home, About, Services, Gallery, Travel Guide (4 articles), Contact.

## What's Implemented
- 3-panel CSS triptych hero (real photos, cinematic grading)
- 4 premium articles: FamilySummerItinerary, AvoidMistakes, HiddenGems, HalalTourism — each with cinematic design + WhatsApp CTA pills
- Editorial Masonry Gallery (15 real photos, no filters/tags)
- Services page with custom CSS dark-green graphic card headers + mint icons
- About page: Mission/Vision cards + stats section
- Contact page: premium dark-green hero (form is mocked — uses `alert()`)
- Footer: 50% shorter, premium inline SEO keyword links
- React.lazy for all routes
- Static SEO HTML fallback injected into `public/index.html` (full crawlability without JS)
- Explicit `width`/`height` on all images (no CLS)
- **2026-05-31**: Synced compressed image set + matching source from user's GitHub branch `1-reduce-image-qulity` (lookingnext86-art/GCT). 50 local images now live in `/app/frontend/public/{images,GCT-asset}`; 38 source refs use local paths; 13 remaining CDN refs preserved (branch state).
- **2026-05-31**: Minimal `.htaccess` (4 lines) restored for one.com Apache deep-link routing — no caching/gzip modules.
- **2026-06-13**: Comprehensive SEO fix — Google Search Console errors addressed:
  - `.htaccess` hardened: forces `https://www.` canonical host + strips `.html` + SPA fallback (mod_rewrite only, no modules that triggered prior 503)
  - `sitemap.xml` rewritten to `https://www.` URLs, `lastmod` added, typo fixed
  - `robots.txt` simplified to exactly the user-specified format
  - Installed `react-helmet-async` + built `/src/components/SEO.jsx` — every page now emits unique self-referencing canonical + unique title + unique description (120–155 chars) + matching og:url/twitter:url
  - Removed static `<title>`, `<meta name="description">`, `<link rel="canonical">`, `og:url`, `twitter:url` from `index.html` (Helmet is single source of truth; eliminates duplicate-canonical "Google chose different canonical" reports)
  - Homepage title set to user-specified: "Green Continent Tours – Travel Agency & Tour Operator in Krakow, Poland"
  - Verified runtime: all 10 pages show exactly 1 of each meta tag, 10/10 unique canonicals + titles + descriptions

- **2026-06 (this session)**: Automated Travel Guide pipeline ("Travel Guide Studio")
  - Backend (FastAPI + Mongo): `auth.py` (single admin, bcrypt, JWT Bearer 12h, 5-try lockout), `blog_routes.py` (admin CRUD, generate, cover upload, publish/unpublish/reject/restore, settings, site test/resync, cron), `generator.py` (Claude Sonnet 5.5 `claude-sonnet-5-5` / GPT 6 Luna `gpt-6-luna` via Emergent LLM key, JSON article + markdown→HTML + TOC), `publisher.py` (writes `blog-data/index.json`, `blog-data/articles/{slug}.json`, `images/blog/{slug}.webp`, regenerated `sitemap.xml` from `base_sitemap.xml`; targets = one.com SFTP (paramiko) when SFTP_* set + local dir PUBLISH_LOCAL_DIR for preview), `storage.py` (Emergent object storage for cover photos, converted to WebP ≤1600px), `email_service.py` (Emergent managed email draft-ready alert).
  - Cron: `.emergent/crons.yml` `biweekly-article` 08:00 UTC on 1st & 15th → POST /api/cron/generate-article (WEBHOOK_CRON_SECRET, idempotent by run id, respects auto_generate setting).
  - Frontend: `/admin` (login, dashboard with tabs, generate card, settings card: auto drafts toggle, scheduled writer, alert email + test alert, website connection test/resync), `/admin/articles/:id` editor (SEO fields w/ counters, markdown edit/preview, cover upload required to publish). Public `/travel-guide/:slug` (GuideArticle.jsx) reads static JSON; TravelGuide.jsx merges `/blog-data/index.json` with the 4 static articles. robots.txt disallows /admin. WhatsApp button hidden on /admin. craco devServer static watch disabled (no preview reload on publish).
  - Tested: iteration_1 (26 backend tests, frontend flows) + fixes verified.
  - Known: info@greencontinenttours.com is rejected by the email provider as "undeliverable" → user must set a working alert email in admin settings. SFTP credentials pending from user. ADMIN_PANEL_URL currently = preview URL (update to deployed URL after deploy).

- **2026-06**: Google tag (GA4 G-N32XZMRBL1) added to public/index.html head; verified page_view hits on load + SPA navigation. Note: craco static watch is off → restart frontend after editing public/index.html in preview.

- **2026-06**: one.com plan has no SFTP → switched to LIVE LOADING. Removed SFTP/local publishing (paramiko uninstalled, craco watch tweak reverted, public/blog-data removed, sitemap.xml restored). Publish = status change only. Public API (no auth, CORS *): GET /api/public/articles, /api/public/articles/{slug}, /api/public/images/{slug}.webp (from object storage), /api/public/sitemap-articles.xml. TravelGuide.jsx + GuideArticle.jsx fetch from REACT_APP_BACKEND_URL. ADMIN_PANEL_URL = https://www.greencontinenttours.com/admin.
  - TODO at final ZIP build: build with REACT_APP_BACKEND_URL = deployed Emergent URL and add `Sitemap: <deployed>/api/public/sitemap-articles.xml` to public/robots.txt; submit it in Search Console.

## Files of Reference
- `/app/frontend/public/.htaccess` — minimal React Router fallback for one.com Apache
- `/app/frontend/public/_redirects` — Netlify fallback
- `/app/frontend/public/vercel.json` — Vercel fallback
- `/app/frontend/public/index.html` — branch version (local /images og:image, no CDN preloads)
- `/app/frontend/public/images/` + `/app/frontend/public/GCT-asset/` — 50 resized local images
- `/app/frontend/src/App.js` — lazy routes

## 3rd-Party Integrations
- Google Maps — frontend iframe (active)
- Resend — pending user API key for `/api/contact` lead capture
- WhatsApp — floating button + article CTAs (active, no API)

## Roadmap (Prioritized)

### P0 — Active / Blocked on user
- Confirm minimal `.htaccess` (4 lines) works on one.com Apache; if still 500, switch to `FallbackResource /index.html` or `ErrorDocument 404`.

### P0 — Travel Guide Studio go-live
- Deploy backend on Emergent (cron + admin must run 24/7); set ADMIN_PANEL_URL to deployed URL; rebuild ZIP with REACT_APP_BACKEND_URL = deployed URL and upload once to one.com.
- Set a deliverable alert email in admin settings.

### P1 — Next
- Wire Contact Form → FastAPI `/api/contact` → MongoDB + Resend email to `info@greencontinenttours.com`. Requires user Resend API key.
- Migrate the 13 remaining CDN image refs to local resized versions if user supplies them.

### P2 — Backlog
- Move articles/gallery/services data from hardcoded JSX → MongoDB-backed APIs.
- Admin panel: manage articles + view contact leads.
- Newsletter signup (Resend audiences).
- Multilingual support (PL/EN).

## Health
- Broken: none currently (deployment fix shipped, awaiting user retest on live host).
- Mocked: Contact form (`alert()`), all content data (hardcoded in JSX).
- Tests: none yet.

## Credentials
See /app/memory/test_credentials.md (admin info@greencontinenttours.com).
