import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const distSsrDir = path.join(projectRoot, 'dist-ssr');
const manifestPath = path.join(projectRoot, 'src', 'ssg', 'manifest.json');
const headPlaceholder = '<!--ssg-head-->';
const rootPlaceholder = '<div id="root"></div>';

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const entryServerUrl = pathToFileURL(path.join(distSsrDir, 'entry-server.js')).href;
const { render } = await import(entryServerUrl);

if (typeof render !== 'function') {
  throw new Error('SSR bundle must export a render() function.');
}

const normalizePath = (routePath) => {
  if (routePath === '/') return '';
  return routePath.replace(/^\//, '');
};

for (const route of manifest.routes) {
  const url = route.path;
  const { appHtml, headTags } = await render(url, { route });
  let pageHtml = template.replace(
    rootPlaceholder,
    `<div id="root">${appHtml}</div>`,
  );
  pageHtml = pageHtml.replace(headPlaceholder, headTags ?? '');

  const outputDir = normalizePath(route.path)
    ? path.join(distDir, normalizePath(route.path))
    : distDir;
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), pageHtml, 'utf8');
}

const sitemapRoutes = manifest.routes.filter(
  (route) => route.excludeFromSitemap !== true,
);
const isoNow = new Date().toISOString();
const sitemapEntries = sitemapRoutes
  .map((route) => {
    const loc = new URL(normalizePath(route.path), manifest.siteUrl).toString();
    const changefreq = route.changefreq ?? 'monthly';
    const priority = route.priority ?? 0.5;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${isoNow}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', manifest.siteUrl).toString()}\n`;
await writeFile(path.join(distDir, 'robots.txt'), robots, 'utf8');
