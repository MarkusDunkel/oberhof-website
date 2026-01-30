// scripts/prerender.js
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const distSsrDir = path.join(projectRoot, 'dist-ssr');

const headPlaceholder = '<!--ssg-head-->';
const htmlAttrPlaceholder = 'data-html-attrs-placeholder';
const rootPlaceholder = '<div id="root"></div>';

const manifestPath = path.join(projectRoot, 'src', 'ssg', 'manifest.json');

// --- helpers ---
function normalizePath(routePath) {
  // filesystem path segment for dist output
  if (routePath === '/') return '';
  return routePath.replace(/^\//, '');
}

function ensureLeadingSlash(p) {
  if (!p) return '/';
  return p.startsWith('/') ? p : `/${p}`;
}

function normalizeDeRoute(p) {
  // Keep DE routes without trailing slash except root
  let out = ensureLeadingSlash(p).replace(/\/{2,}/g, '/');
  if (out !== '/') out = out.replace(/\/+$/, '');
  return out === '' ? '/' : out;
}

function withLang(p, lang) {
  // Robust prefixing, avoids double /en and keeps /en/ for root
  let pathIn = ensureLeadingSlash(p);

  // strip any existing /en prefix
  const unprefixed =
    pathIn === '/en' ? '/' : pathIn.replace(/^\/en(?=\/|$)/, '');
  const clean = unprefixed === '' ? '/' : unprefixed;

  if (lang === 'en') return clean === '/' ? '/en/' : `/en${clean}`;
  return clean;
}

function absoluteUrl(routePath, siteUrl) {
  // siteUrl should be like "https://oberhof-lunz.at"
  const base = siteUrl.replace(/\/+$/, '') + '/';
  const clean = routePath === '/' ? '' : routePath.replace(/^\//, '');
  return new URL(clean, base).toString();
}

function uniqueStrings(list) {
  return Array.from(new Set(list));
}

// --- load manifest ---
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const SITE_URL = manifest.siteUrl ?? 'https://oberhof-lunz.at';

// Manifest is DE-only in your example; we generate EN variants in code.
const manifestRoutes = Array.isArray(manifest.routes) ? manifest.routes : [];

// We generally don’t want to prerender the not-found page unless you explicitly want it.
const prerenderBaseRoutes = manifestRoutes
  .filter((r) => r && typeof r.path === 'string')
  .filter((r) => r.path !== '/404') // optional: skip generating a static /404 page
  .map((r) => normalizeDeRoute(r.path));

const routesDe = prerenderBaseRoutes;
const routesEn = routesDe.map((p) => withLang(p, 'en'));

const routesToPrerender = uniqueStrings([...routesDe, ...routesEn]);

// --- load SSR renderer + template ---
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const entryServerUrl = pathToFileURL(
  path.join(distSsrDir, 'entry-server.js'),
).href;

const { render } = await import(entryServerUrl);
if (typeof render !== 'function') {
  throw new Error('SSR bundle must export a render() function.');
}

// --- prerender pages ---
for (const url of routesToPrerender) {
  const { appHtml, headTags, htmlAttrs } = await render(url);

  let pageHtml = template.replace(
    rootPlaceholder,
    `<div id="root">${appHtml}</div>`,
  );

  pageHtml = pageHtml.replace(headPlaceholder, headTags ?? '');

  // If Helmet didn't provide html attributes, pick based on URL prefix
  const fallbackLang = url === '/en/' || url.startsWith('/en/') ? 'en' : 'de';
  const attrs =
    htmlAttrs && htmlAttrs.trim().length > 0
      ? htmlAttrs
      : `lang="${fallbackLang}"`;
  pageHtml = pageHtml.replace(htmlAttrPlaceholder, attrs);

  const outputDir = normalizePath(url)
    ? path.join(distDir, normalizePath(url))
    : distDir;

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), pageHtml, 'utf8');
}

// --- sitemap.xml ---
// Respect excludeFromSitemap on the DE manifest route, and generate both DE+EN entries.
const sitemapBaseRoutes = manifestRoutes
  .filter((r) => r && typeof r.path === 'string')
  .filter((r) => r.excludeFromSitemap !== true)
  .map((r) => ({
    path: normalizeDeRoute(r.path),
    changefreq: r.changefreq ?? 'monthly',
    priority: r.priority ?? 0.5,
  }));

const sitemapRoutes = uniqueStrings([
  ...sitemapBaseRoutes.map((r) => r.path),
  ...sitemapBaseRoutes.map((r) => withLang(r.path, 'en')),
]);

const isoNow = new Date().toISOString();

function lookupMeta(routePath) {
  // Find the DE route entry for metadata; EN gets same values.
  const isEn = routePath === '/en/' || routePath.startsWith('/en/');
  const dePath = isEn ? withLang(routePath, 'de') : routePath;
  const found = sitemapBaseRoutes.find((r) => r.path === dePath);
  return found ?? { changefreq: 'monthly', priority: 0.5 };
}

const sitemapEntries = sitemapRoutes
  .map((routePath) => {
    const meta = lookupMeta(routePath);
    const loc = absoluteUrl(routePath, SITE_URL);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${isoNow}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');

// --- robots.txt ---
const robots = `User-agent: *
Allow: /
Sitemap: ${absoluteUrl('/sitemap.xml', SITE_URL)}
`;

await writeFile(path.join(distDir, 'robots.txt'), robots, 'utf8');
