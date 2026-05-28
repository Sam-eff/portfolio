import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist');
const routes = ['/', '/about', '/portfolio', '/contact'];
const fallbackSiteUrl = 'http://localhost:4173';

const readEnvFileValue = (key) => {
  const envPath = resolve(process.cwd(), '.env');

  if (!existsSync(envPath)) return '';

  const line = readFileSync(envPath, 'utf8')
    .split(/\r?\n/)
    .find((entry) => entry.trim().startsWith(`${key}=`));

  if (!line) return '';

  return line.slice(line.indexOf('=') + 1).trim().replace(/^['"]|['"]$/g, '');
};

const envSiteUrl = (process.env.VITE_SITE_URL || readEnvFileValue('VITE_SITE_URL')).trim();

if (!envSiteUrl && process.env.CF_PAGES) {
  throw new Error('VITE_SITE_URL is required for Cloudflare Pages builds.');
}

const siteUrl = (envSiteUrl || fallbackSiteUrl).replace(/\/+$/, '');

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${siteUrl}${route === '/' ? '/' : route}</loc>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(resolve(distDir, 'robots.txt'), robots);
writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap);

const indexPath = resolve(distDir, 'index.html');

if (existsSync(indexPath)) {
  const html = readFileSync(indexPath, 'utf8')
    .replaceAll('__SITE_URL__', siteUrl)
    .replaceAll('%VITE_SITE_URL%', siteUrl);
  writeFileSync(indexPath, html);
}
