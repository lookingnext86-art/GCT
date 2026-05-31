/**
 * Post-build script — generates static folders for every route so the site
 * works on hosts that DO NOT support .htaccess / mod_rewrite (e.g. one.com Basic).
 *
 * For each route in ROUTES below, it copies `build/index.html` to
 * `build/<route>/index.html`. After deployment, visiting
 * https://example.com/about loads `build/about/index.html` directly
 * (no SPA fallback needed), then React Router takes over.
 *
 * Run automatically via `yarn build` (added to package.json).
 */
const fs = require('fs');
const path = require('path');

const ROUTES = [
  'about',
  'services',
  'gallery',
  'contact',
  'travel-guide',
  'travel-guide/halal-tourism',
  'travel-guide/hidden-gems',
  'travel-guide/avoid-mistakes',
  'travel-guide/family-summer-poland-itinerary',
];

const BUILD_DIR = path.join(__dirname, '..', 'build');
const SOURCE_INDEX = path.join(BUILD_DIR, 'index.html');

if (!fs.existsSync(SOURCE_INDEX)) {
  console.error(`✗ Build not found at ${SOURCE_INDEX}. Run \`yarn build\` first.`);
  process.exit(1);
}

const html = fs.readFileSync(SOURCE_INDEX, 'utf8');

let created = 0;
for (const route of ROUTES) {
  const target = path.join(BUILD_DIR, route, 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html, 'utf8');
  console.log(`✓ /${route}/index.html`);
  created += 1;
}

console.log(`\n✅ Created ${created} static route files. Ready for upload.`);
