/**
 * Étape exécutée après `vite build`.
 *
 * Le site est une application monopage : sans cette étape, toutes les URL renvoient le même
 * index.html (même titre, même description). Ici, on génère pour chaque page un index.html
 * dont l'en-tête (titre, description, canonical, Open Graph, robots) est propre à la page,
 * et on régénère le sitemap à partir de la liste des routes. Le contenu de la page reste
 * affiché par React, comme avant.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { blogArticles, articleSlug, isArticleIndexable } from '../src/data/blogArticles';
import { PAGE_META, PAGE_ROUTES, SITE_URL, articleUrl, getArticleMeta } from '../src/seo/routes';
import type { PageMeta } from '../src/seo/routes';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escapeAttr = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function replaceOnce(html: string, pattern: RegExp, replacement: string, label: string): string {
  if (!pattern.test(html)) {
    throw new Error(`Prérendu : balise introuvable dans index.html (${label}). Vérifiez le format de index.html.`);
  }
  return html.replace(pattern, () => replacement);
}

function render(meta: PageMeta, path: string): string {
  const url = `${SITE_URL}${path}`;
  const robots = meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  let html = template;
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`, 'title');
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttr(meta.description)}" />`, 'description');
  html = replaceOnce(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`, 'robots');
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, 'canonical');
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(meta.title)}" />`, 'og:title');
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttr(meta.description)}" />`, 'og:description');
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  return html;
}

function write(path: string, html: string): void {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

const sitemapUrls: string[] = [];
let pages = 0;

for (const [key, path] of Object.entries(PAGE_ROUTES)) {
  const meta = PAGE_META[key];
  if (!meta) throw new Error(`Prérendu : aucune métadonnée pour la page « ${key} » (src/seo/routes.ts).`);
  write(path, render(meta, path));
  pages += 1;
  if (!meta.noindex) sitemapUrls.push(path);
}

let articles = 0;
for (const article of blogArticles) {
  const slug = articleSlug(article);
  const path = articleUrl(slug);
  const meta = getArticleMeta(slug);
  if (!meta) continue;
  write(path, render(meta, path));
  articles += 1;
  if (isArticleIndexable(article)) sitemapUrls.push(path);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...[...new Set(sitemapUrls)].sort().map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

console.log(`Prérendu : ${pages} pages, ${articles} articles, ${sitemapUrls.length} URL dans le sitemap.`);
