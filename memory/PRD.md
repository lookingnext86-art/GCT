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

- **2026-06 Live-site sync audit**: Compared live greencontinenttours.com (index.html, sitemap.xml, robots.txt, manifest.json, main.js + 9 lazy chunks, main.css, 40 images) against local source. Result: page code, text, SEO meta, JSON-LD, CSS and images all identical. Only diff: live sitemap had absolute URL for family-summer image (synced locally). Fixed broken sitemap image path /images/xml/wawel-castle-sunrise.webp → /images/travel-guide/wawel-castle-sunrise.webp. .htaccess not downloadable (403) — local copy assumed current. Local robots.txt adds `Disallow: /admin` (intentional, not yet live).

- **2026-06 Tracking + ZIP**: Added Google Tag Manager GTM-PM3XV4TV (official head snippet + body noscript) alongside direct GA4 gtag G-N32XZMRBL1 (GTM container currently has no GA4 tag; if user adds GA4 inside GTM, remove direct gtag to avoid double counting). Built production ZIP with REACT_APP_BACKEND_URL="" (no preview URL in bundle; Travel Guide falls back to static articles; /admin non-functional on one.com until backend deployed) → /app/frontend/public/greencontinenttours-build.zip. Download: <preview>/greencontinenttours-build.zip. Build cmd: `REACT_APP_BACKEND_URL="" GENERATE_SOURCEMAP=false yarn build` (remove old zip from public first). Dev server needs frontend restart after public/index.html edits.

- **2026-06 PageSpeed pass** (live mobile: Perf 67, A11y 88, BP 100, SEO 100): slots images resized to 640h q86 (-35%), krakow-travel-hero recompressed (157->65KB), phone-only centre crops hero/krakow-market-mobile.webp + hero/zakopane-mobile.webp chosen via matchMedia in HeroSlider (no double download; <picture> caused React double fetch), all 3 hero panels eager+high, home-only hero preload script in index.html, partner logos self-hosted in /images/partners (Hotelbeds 455->62KB) with width/height, Morskie Oko CTA image self-hosted, header logos relative (no non-www redirect), unused preconnects removed, Google Font non-render-blocking, GTM+GA4 loaded after page load (+1.5s) or first interaction. A11y: stars role=img, menu/close button labels, WhatsApp sr-only label + badge aria-hidden, footer text-white/70, why-us line full mint. Local Lighthouse a11y 88->96 (remaining: white on WhatsApp green bottom bar – brand colour, left as is). .htaccess untouched per user. Originals backed up in /app/memory/img_backup.

- **2026-06 Enquiry tracking + bar contrast**: src/lib/analytics.js (trackEvent -> gtag event w/ beacon + dataLayer push for GTM). whatsapp_click (param link_location) via global capture listener for wa.me links (installed in App.js) + WhatsAppButton floating/mobile bar. generate_lead (form_name=contact_form) on successful web3forms submit in Contact.jsx. Verified GA collect hits in preview (test hits went to real GA property). Mobile WhatsApp bar #25D366 -> #15803D (hover #166534), contrast 5.0:1. User must mark whatsapp_click + generate_lead as Key events in GA4 Admin. Known pre-existing: floating WhatsApp button overlaps the mobile bar text.

- **2026-06 New article**: /travel-guide/3-days-in-krakow-itinerary (pages/articles/ThreeDaysInKrakow.jsx) from user-supplied text, same layout as other static articles (hero, overview bar, day timeline w/ stops, local-tip callouts, practical tips, where to stay, private tour CTA, FAQ, continue reading, sticky TOC, WhatsApp CTA, Article + FAQPage JSON-LD). Image: user photo cropped 16:10 -> /images/articles/3-days-in-krakow-itinerary/krakow-old-town-3-day-itinerary.webp (1333x833, 223KB). Added to App.js route, TravelGuide staticArticles (first), sitemap.xml, backend STATIC_ARTICLES + generator internal links. Date June 20, 2026. Duplicate AI draft "3 Days in Krakow" still in admin drafts -> should be rejected.

- **2026-06 Article #6**: /travel-guide/christmas-markets-poland (pages/articles/ChristmasMarketsPoland.jsx), user text, category Winter Travel, date June 24 2026. New shared components/article/ArticleParts.jsx (ArticleHero, OverviewBar, TermList, Callout, FaqList, ContinueReading, TocAside, WhatsAppCta, articleJsonLd) — use for future static articles. Image cropped 16:10 to remove a "The Forum Shopping" sign (photo is not from Poland) -> /images/articles/christmas-markets-poland/christmas-market-poland-festive-stall.webp (1600x1000, 293KB). Route, TravelGuide card (first), sitemap, backend STATIC_ARTICLES updated.

- **2026-06 SEO/image audit**: Removed "Which Market Is Best" section from Christmas article. Resized oversized images in place (same filenames; originals in /app/memory/img_backup2): halal-food-krakow.webp 7952px->1200 (499->103KB), halal-food-krakow-restaurant.webp ->2560 (489->272KB), about-us/wawel-castle.webp 7930->1920 (482->324KB), hidden-gems off-the-beaten-path ->1536 (459->374KB), Home-Gallery poland-hidden-gems-travel-guide.jpg ->1100 (452->292KB), gallery/krakow_pl.jpg ->1000 (357->183KB). SEO: home title shortened to 60 chars; 4 older articles now pass their own hero as og/twitter image + absolute JSON-LD image; twitter:card fixed to name=; removed wrong og:image:width/height + Malbork alt defaults; width/height added to header logos, WhyUs slots, booking banner; sitemap lastmod for / and /travel-guide = 2026-06-24. NOTE: do NOT add a static <title> to index.html (creates duplicate with Helmet). Local Lighthouse on home build: SEO 100, A11y 100, Best Practices 100.

- **2026-06 Agentic browsing**: Added public/llms.txt (H1, summary, markdown links to all pages/articles) and public/.well-known/ai-catalog.json (specVersion 1.0, one text/markdown entry -> llms.txt) — previously SPA fallback returned index.html for these, failing Lighthouse 13 Agentic Browsing. Removed 7-day four-cities itinerary from Christmas article. At 14:19 container time the LIVE site showed the one.com placeholder (all files 404) — user was told to re-upload full ZIP. Cache-lifetime audit needs .htaccess mod_headers (user declined).

- **2026-06 Halal page -> sales page + tour-operator wording**: /travel-guide/halal-tourism rewritten (user text) as "Private Halal & Muslim-Friendly Tours of Krakow" using ArticleParts: 1 H1, 6 H2s, tours table, included list, food & prayer section keeping all 8 restaurants + 3 meat shops under H3 "Halal restaurants we use on our tours" (H4 groups, H5 names), how-to-book steps, 7-question FAQ + FAQPage JSON-LD, WhatsApp buttons top (halal-contact-top) and bottom (halal-contact-bottom). Old file backup /app/memory/HalalTourism.backup.jsx. Travel Guide card renamed. Home WhyUs eyebrow/H1/para now say Krakow tour operator & travel agency; Services eyebrow + subtitle + SEO title "Krakow Tour Operator: Private Tours & Travel in Poland". Sitemap lastmod /, /services, halal = 2026-06-25; llms.txt updated. Tested iteration_2 (100%).

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

- **2026-06 Halal page trim**: Removed "Who our private halal tours suit, and how to book" section (+TOC link) from HalalTourism.jsx; added "Enquire now" (/contact) button next to bottom WhatsApp button. Title tag shortened to 53 chars ("Private Halal Tours of Krakow | Green Continent Tours"), read time 7 min. FAQ JSON-LD, single H1, sitemap entry intact. ZIP rebuilt.
- **2026-06 Halal CTA cleanup + ARD fix**: Removed top WhatsApp button, bottom WhatsApp+number button and Enquire now from Halal page (only WhatsAppCta banner remains). Created public/.well-known/ard.json (Lighthouse ARD audit was getting index.html = malformed JSON); ai-catalog.json kept identical. Validated with official ards-project conformance-test: PASS (1 non-blocking media-type warning). ZIP rebuilt.
- **2026-11-02 SEO report fixes**: index.html TravelAgency schema: geo moved to Nowohucka 46 (50.0602, 20.0021), added email + hasMap, REMOVED self-served aggregateRating/review. Sitemap lastmod / and halal = 2026-11-02; halal MODIFIED updated. User declined prerendering (so no-JS checkers still see empty shell). Live Google reviews: backend/google_reviews.py GET /api/public/google-reviews (Places API New, max 5 reviews, 6h in-memory cache, place id via GOOGLE_PLACE_ID or text search GOOGLE_PLACE_QUERY); ReviewsSection.jsx fetches and falls back to static reviews. Needs GOOGLE_PLACES_API_KEY (pending from user) AND a deployed backend — on one.com ZIP (REACT_APP_BACKEND_URL="") fallback reviews show. ZIP rebuilt.
- **2026-11-02 Meta audit**: All 12 routes verified (title, desc, canonical, OG, Twitter, robots, 1 H1, JSON-LD, img alts). Shortened 5 titles to <=60 chars and halal description to 152. ZIP rebuilt.
- **2026-11-02 Static Google reviews**: User chose to bake the 5 real Google reviews into the build (no live fetch on one.com). Data: src/data/googleReviews.json (rating 5.0, 12 reviews, mapsUrl, per-review Maps link); avatars saved to public/images/reviews/. Fake reviews removed. To refresh: curl /api/public/google-reviews (backend endpoint kept) and regenerate the JSON. ZIP rebuilt.
- **2026-11-02 SEO round (approved items)**: NotFound page (noindex, no canonical) replaces redirect-to-home catch-all + unknown CMS slugs; robots meta now only via SEO.jsx (static robots/googlebot removed from index.html). .htaccess: /index.html->/ 301 + IfModule mod_expires cache rules (if one.com 500s, delete block 6). Titles: Home "Kraków Tour Operator & Private Tours of Poland", Services "Travel Services in Kraków & Poland | ..." (H1 "Travel Services in Kraków and Across Poland"), About "About Us – Our Kraków Team | ...". New ServicesDetails section (6 H3 blocks) + Service ItemList JSON-LD. Internal links: home-services-links (View all services + Popular guides), RelatedGuides on all articles/About/Gallery/404. Schema: single @graph TravelAgency(#organization)+WebSite, ItemList nav removed, BreadcrumbList via SEO.jsx on inner pages, publisher logo PNG GCT-asset/logo-512.png. Speed: GA/GTM load on interaction or 4s after load; resized hero (-960 / -m), slots (-400), b2b banner (-760), halal (-1280/-768). Local Lighthouse mobile: perf 54->88 (localhost, not live), a11y 100. GSC data: only 9 linking sites to home; no old URLs needing redirects. Tested iteration_3 (96%, fixes applied). ZIP rebuilt.
- Backlog: 3 new money pages (Private Kraków Tours, Private Tours of Poland, B2B/DMC) + 10 proposed articles; prerendering (declined twice); real contact form.
- **2026-11-05 Full SEO brief (B2B page + prerender)**: NEW /for-travel-agencies (ForTravelAgencies.jsx, 800+ words, FAQPage, PartnerInquiryForm via Web3Forms same key as Contact). Header: Register -> "Agency Login" (lib/links.js AGENCY_PORTAL_URL https://www.gct.travel/agent_registration.php, new tab rel=noopener), "For Travel Agencies" menu item; desktop nav now xl:flex (hamburger below 1280px). Footer links. /services B2B block removed -> one line link; card headings H2 on /services. Group Tours text updated. Home agencies + contact links. Halal CTA blocks top/bottom. JSON-LD @type [Organization, TravelAgency], removed unverified fields (priceRange, hours, languages). PRE-RENDERING: build pipeline = `cd /app/frontend && REACT_APP_BACKEND_URL="" GENERATE_SOURCEMAP=false yarn build && python3 scripts/prerender.py` (snapshots 13 routes + 404 with headless Chrome, adds Suspense markers + text separators for hydration, writes build/<route>.html & travel-guide--<slug>.html, generates sitemap.xml and .htaccess from scripts/htaccess.template, zips). index.js hydrates when #root[data-prerendered] and drops duplicate head SEO tags first. Verified with real local Apache (:8088, /tmp/site): all redirects (Home, Contact-us, uppercase, trailing slash, index.html, .html) + 404 fallback. Lighthouse mobile (local): / 90, services 98, agencies 98, halal 97; CLS 0; no hydration errors. Tested iteration_4 (all pass after nav fix). NOTE: About meta says "12+ years" vs user-provided "17+ years" on agencies page — asked user.
- **2026-11-05 /for-travel-agencies redesign**: Rebuilt from pitch-deck copy (components/agencies/AgencyParts.jsx + AgencySections.jsx): hero (Krakow Market photo placeholder — user will send own hero photo), stats strip, portal card, Why Partner, Thoughtful (4), What We Handle (7), Why Poland (6), Seasons (4, icons only), Sample Programs (3 + featured Krakow+Zakopane + tailor-made note), How We Work (8 steps), FAQ (FAQPage), partner contact w/ address+NIP+WhatsApp. Removed Group tours section and 17+ years. Meta desc says since 2015; index.html schema foundingDate 2015. 853 words, 1 H1, 10 H2, no overflow at 390, no console errors. ZIP rebuilt.
- **2026-11-05**: /for-travel-agencies portal card replaced with the same yellow GCT B2B banner as home (links to AGENCY_PORTAL_URL agent_registration.php, new tab). ZIP rebuilt.
- **2026-11-05**: Agency banner centered; removed "Every program includes..." line. Reviews refreshed from Google (15 reviews, 5 shown: Ramin, Wik, Feri Abadi, Khawaja Ali, mohamad keshavarz; source /app/memory/rv_latest.json). Tripadvisor + Google Business Profile icons (components/SocialIcons.jsx, URLs in lib/links.js) added to footer + home hero; added to schema sameAs. ZIP rebuilt.
- **2026-11-05**: About "12+ years" -> "since 2015" (meta desc + stat "Since 2015 / Local Expertise"); llms.txt adds /for-travel-agencies; deleted scripts/generate-static-routes.js (prerender.py is the only build step). ZIP rebuilt.
- **2026-11-05**: Groups served unified to 160+ (agency page stats + Why Partner card). ZIP rebuilt.
- **2026-11-05**: htaccess.template rule 7 now real 404: ErrorDocument 404 /404.html + RewriteRule ^ - [R=404,L]. Verified on local Apache (unknown URLs 404 + 404.html page, all real pages 200, redirects intact). ZIP rebuilt.
