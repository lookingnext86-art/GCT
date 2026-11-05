"""Pre-render every public route of the CRA build into static HTML for one.com.

Usage (from /app/frontend):  python3 scripts/prerender.py
Requires a fresh `yarn build` in ./build. Produces pre-rendered pages, sitemap.xml,
.htaccess and public/greencontinenttours-build.zip.
"""
import datetime
import os
import re
import shutil
import subprocess
import sys
import time
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = os.path.join(ROOT, 'build')
PUBLIC = os.path.join(ROOT, 'public')
SITE = 'https://www.greencontinenttours.com'
PORT = 5077

TOP = ['about', 'services', 'for-travel-agencies', 'gallery', 'travel-guide', 'contact']
ARTICLES = ['halal-tourism', '3-days-in-krakow-itinerary', 'christmas-markets-poland',
            'hidden-gems', 'avoid-mistakes', 'family-summer-poland-itinerary']
PRIORITY = {'': '1.0', 'services': '0.9', 'for-travel-agencies': '0.9', 'contact': '0.8',
            'about': '0.7', 'travel-guide': '0.8', 'gallery': '0.6'}


def routes():
    yield '/', 'index.html'
    for r in TOP:
        yield f'/{r}', f'{r}.html'
    for a in ARTICLES:
        yield f'/travel-guide/{a}', f'travel-guide--{a}.html'
    yield '/__not-found__', '404.html'


def snapshot(url):
    out = subprocess.run([
        'google-chrome', '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
        '--window-size=1366,900', '--virtual-time-budget=5000', '--run-all-compositor-stages-before-draw',
        '--dump-dom', url,
    ], capture_output=True, text=True, timeout=90).stdout
    html = re.sub(r'<link rel="preload" as="image"[^>]*>', '', out)
    html = re.sub(r'<script[^>]+src="https://www\.(?:googletagmanager|google-analytics)\.com[^"]*"[^>]*></script>', '', html)
    html = re.sub(r'<iframe[^>]+googletagmanager[^>]*>.*?</iframe>', '', html, flags=re.S)
    html = html.replace(TEXT_SEPARATOR_JS, '')
    # Add React's Suspense markers around the routed page so hydration matches App.js
    start = html.index('<div class="App">') + len('<div class="App">')
    end = html.rindex('<div class="fixed bottom-6 right-6 z-50 flex items-center gap-3">')
    html = html[:start] + '<!--$-->' + html[start:end] + '<!--/$-->' + html[end:]
    html = html.replace('<div id="root">', '<div id="root" data-prerendered="true">', 1)
    return '<!DOCTYPE html>' + html


def check(path, html):
    problems = [msg for ok, msg in [
        (html.count('<h1') == 1, 'H1 count != 1'),
        ('rel="canonical"' in html or 'noindex' in html, 'no canonical'),
        ('Loading page' not in html, 'route loader still visible'),
    ] if not ok]
    if problems:
        sys.exit(f'Pre-render failed for {path}: {", ".join(problems)}')


def sitemap():
    old = open(os.path.join(PUBLIC, 'sitemap.xml')).read()
    lastmods = dict(re.findall(r'<loc>([^<]+)</loc>\s*<lastmod>([^<]+)</lastmod>', old))
    today = datetime.date.today().isoformat()
    urls = [''] + TOP + [f'travel-guide/{a}' for a in ARTICLES]
    rows = []
    for u in urls:
        loc = f'{SITE}/{u}'
        pr = PRIORITY.get(u, '0.7')
        rows.append(f'  <url>\n    <loc>{loc}</loc>\n    <lastmod>{lastmods.get(loc, today)}</lastmod>\n'
                    f'    <changefreq>monthly</changefreq>\n    <priority>{pr}</priority>\n  </url>')
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(rows) + '\n</urlset>\n'
    for d in (PUBLIC, BUILD):
        open(os.path.join(d, 'sitemap.xml'), 'w').write(xml)


def htaccess():
    lines = []
    for r in TOP:
        lines += [f'RewriteCond %{{REQUEST_URI}} !^/{r}$', f'RewriteRule ^{r}/?$ /{r} [NC,R=301,L]']
    for a in ARTICLES:
        lines += [f'RewriteCond %{{REQUEST_URI}} !^/travel-guide/{a}$', f'RewriteRule ^travel-guide/{a}/?$ /travel-guide/{a} [NC,R=301,L]']
    serve = [f'RewriteRule ^{r}$ {r}.html [L]' for r in TOP]
    serve += [f'RewriteRule ^travel-guide/{a}$ travel-guide--{a}.html [L]' for a in ARTICLES]
    tpl = open(os.path.join(ROOT, 'scripts', 'htaccess.template')).read()
    txt = tpl.replace('{{CANONICAL_RULES}}', '\n'.join(lines)).replace('{{PRERENDER_RULES}}', '\n'.join(serve))
    for d in (PUBLIC, BUILD):
        open(os.path.join(d, '.htaccess'), 'w').write(txt)


TEXT_SEPARATOR_JS = (
    "<script>setTimeout(function(){var w=document.createTreeWalker(document.getElementById('root'),NodeFilter.SHOW_TEXT),n,l=[];"
    "while((n=w.nextNode())){if(n.previousSibling&&n.previousSibling.nodeType===3)l.push(n)}"
    "l.forEach(function(t){t.parentNode.insertBefore(document.createComment(' '),t)})},2500)</script>"
)


def main():
    src = '/tmp/prerender-src'
    shutil.rmtree(src, ignore_errors=True)
    shutil.copytree(BUILD, src)
    shell = os.path.join(src, 'index.html')
    shell_html = open(shell).read()
    open(shell, 'w').write(shell_html.replace('</body>', TEXT_SEPARATOR_JS + '</body>'))
    server = subprocess.Popen(['npx', '-y', 'serve', '-s', src, '-l', str(PORT)],
                              stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
    try:
        for _ in range(60):
            try:
                urllib.request.urlopen(f'http://localhost:{PORT}/', timeout=2)
                break
            except Exception:
                time.sleep(1)
        pages = {}
        for path, name in routes():
            html = snapshot(f'http://localhost:{PORT}{path}')
            check(path, html)
            pages[name] = html
            print(f'rendered {path:45s} -> {name} ({len(html)//1024} KB)')
    finally:
        os.killpg(server.pid, 15)
    for name, html in pages.items():
        open(os.path.join(BUILD, name), 'w').write(html)
    sitemap()
    htaccess()
    zpath = os.path.join(PUBLIC, 'greencontinenttours-build.zip')
    if os.path.exists(zpath):
        os.remove(zpath)
    bz = os.path.join(BUILD, 'greencontinenttours-build.zip')
    if os.path.exists(bz):
        os.remove(bz)
    shutil.make_archive(zpath[:-4], 'zip', BUILD)
    print('zip ready:', zpath)


if __name__ == '__main__':
    main()
