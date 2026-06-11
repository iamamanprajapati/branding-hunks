import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from '../src/lib/blogPosts';
import { SITE_ORIGIN } from '../src/lib/site';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const DIST_DIR = path.resolve(__dirname, '../dist');

function generateSitemap() {
  const urls = [
    { loc: `${SITE_ORIGIN}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${SITE_ORIGIN}/blog`, changefreq: 'weekly', priority: '0.9' },
    ...BLOG_POSTS.map(post => ({
      loc: `${SITE_ORIGIN}/blog/${post.slug}`,
      lastmod: post.publishedAt,
      changefreq: 'monthly',
      priority: '0.8'
    }))
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    if (url.lastmod) {
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';
  return xml;
}

function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
}

function main() {
  console.log('Generating SEO files (sitemap.xml and robots.txt)...');
  
  const sitemapXml = generateSitemap();
  const robotsTxt = generateRobots();

  // Write to public
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt, 'utf-8');
  console.log(`Successfully wrote SEO files to: ${PUBLIC_DIR}`);

  // Write to dist if dist exists (i.e. post-build)
  if (fs.existsSync(DIST_DIR)) {
    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
    fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf-8');
    console.log(`Successfully wrote SEO files to: ${DIST_DIR}`);
  }
}

main();
