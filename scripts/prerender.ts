/**
 * Prérendu, exécuté après les deux builds Vite (client puis serveur).
 *
 * Pour chaque page du site et chaque article, on écrit un fichier HTML qui contient :
 *   - le contenu complet de la page (rendu React côté serveur), lisible par tous les robots ;
 *   - un en-tête propre à la page : titre, description, canonical, Open Graph, robots ;
 *   - les données structurées schema.org de la page.
 * Le navigateur « hydrate » ensuite ce HTML (src/main.tsx).
 *
 * Fichiers produits (servis par Vercel avec "cleanUrls") :
 *   /            -> dist/index.html
 *   /guides/x    -> dist/guides/x.html
 *   page 404     -> dist/404.html
 * Le sitemap est généré à partir des mêmes routes.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const serverEntry = join(root, 'dist-ssr', 'entry-server.js');

if (!existsSync(serverEntry)) {
  throw new Error('Prérendu : dist-ssr/entry-server.js introuvable. Lancez « npm run build ».');
}

// Rendu en mode production (React plus rapide et sans avertissements de développement).
process.env.NODE_ENV = 'production';
const server = await import(pathToFileURL(serverEntry).href);
const {
  render,
  blogArticles,
  isArticleIndexable,
  ARTICLE_REDIRECTS,
  articleImage,
  articleIsoDate,
  PAGE_ROUTES,
  SITE_URL,
  articleUrl,
  getPageMeta,
  resolveLocation,
  buildStructuredData,
  PAGE_MODULES,
  wordCount,
} = server;

const template = readFileSync(join(dist, 'index.html'), 'utf8');

// Table des fichiers produits par Vite : permet de précharger le code de la page affichée.
interface ManifestChunk { file: string; imports?: string[]; isEntry?: boolean }
const manifestPath = join(dist, '.vite', 'manifest.json');
const manifest: Record<string, ManifestChunk> = JSON.parse(readFileSync(manifestPath, 'utf8'));

function chunkFiles(key: string, seen = new Set<string>()): string[] {
  const chunk = manifest[key];
  if (!chunk || seen.has(key) || chunk.isEntry) return [];
  seen.add(key);
  return [chunk.file, ...(chunk.imports ?? []).flatMap((imported) => chunkFiles(imported, seen))];
}

function modulePreloads(pageKey: string): string {
  const source = PAGE_MODULES[pageKey];
  if (!source) return '';
  return [...new Set(chunkFiles(`src/${source}`))]
    .map((file) => `<link rel="modulepreload" crossorigin href="/${file}">`)
    .join('');
}

// Polices affichées dès l'ouverture de la page (évite le décalage du texte au chargement).
const fontFiles = readdirSync(join(dist, 'assets')).filter((file) =>
  /^(dm-sans-latin-400-normal|playfair-display-latin-700-normal)-.*\.woff2$/.test(file)
);
const fontPreloads = fontFiles
  .map((file) => `<link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/${file}">`)
  .join('');

const escapeAttr = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function replaceOnce(html: string, pattern: RegExp, replacement: string, label: string): string {
  if (!pattern.test(html)) {
    throw new Error(`Prérendu : élément introuvable dans index.html (${label}).`);
  }
  return html.replace(pattern, () => replacement);
}

interface PageOptions {
  path: string;
  /** Image principale à précharger (améliore l'affichage du premier écran). */
  preloadImage?: string;
  /** Chemin réellement rendu (diffère pour la page 404). */
  renderPath?: string;
  ogImage?: string;
  ogType?: string;
}

async function buildPage({ path, renderPath = path, ogImage, ogType = 'website', preloadImage }: PageOptions): Promise<{ html: string; noindex: boolean }> {
  const location = resolveLocation(renderPath);
  const meta = getPageMeta(location);
  const url = `${SITE_URL}${path}`;
  const robots = meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  const appHtml: string = await render(renderPath);
  const structuredData = buildStructuredData(location);

  let html = template;
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`, 'title');
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttr(meta.description)}" />`, 'description');
  html = replaceOnce(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`, 'robots');
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, meta.noindex ? '' : `<link rel="canonical" href="${url}" />`, 'canonical');
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(meta.title)}" />`, 'og:title');
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttr(meta.description)}" />`, 'og:description');
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, 'og:url');
  html = replaceOnce(html, /<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${ogType}" />`, 'og:type');
  if (ogImage) {
    html = replaceOnce(html, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${escapeAttr(ogImage)}" />`, 'og:image');
  }
  const preloads = [
    fontPreloads,
    preloadImage ? `<link rel="preload" as="image" href="${escapeAttr(preloadImage)}" fetchpriority="high">` : '',
    modulePreloads(location.page),
  ].join('');
  html = html.replace('</head>', () => `    ${preloads}\n  </head>`);
  if (structuredData) {
    const json = JSON.stringify(structuredData).replace(/</g, '\\u003c');
    html = html.replace('</head>', () => `    <script type="application/ld+json">${json}</script>\n  </head>`);
  }
  html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, 'root');
  return { html, noindex: Boolean(meta.noindex) };
}

function write(path: string, html: string): void {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, `${path}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

const sitemap: { path: string; lastmod?: string }[] = [];

// 1. Pages
for (const path of Object.values(PAGE_ROUTES) as string[]) {
  const { html, noindex } = await buildPage({ path });
  write(path, html);
  if (!noindex) sitemap.push({ path });
}

// 2. Articles
for (const article of blogArticles) {
  const path = articleUrl(article.slug);
  const { html } = await buildPage({
    path,
    ogImage: articleImage(article),
    ogType: 'article',
    preloadImage: article.image.startsWith('http') ? undefined : article.image,
  });
  if (wordCount(article.slug) < 300 && !article.noindex) {
    console.warn(`Attention : l'article « ${article.slug} » compte moins de 300 mots.`);
  }
  write(path, html);
  if (isArticleIndexable(article)) {
    sitemap.push({ path, lastmod: articleIsoDate(article.updated ?? article.date) });
  }
}

// 3. Page 404 (servie par Vercel avec le statut 404)
writeFileSync(join(dist, '404.html'), (await buildPage({ path: '/404', renderPath: '/__page-introuvable__' })).html);

// 4. Sitemap
const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemap
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(({ path, lastmod }) =>
      `  <url><loc>${SITE_URL}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
    ),
  '</urlset>',
  '',
].join('\n');
writeFileSync(join(dist, 'sitemap.xml'), sitemapXml);

// 5. Cohérence des redirections déclarées dans vercel.json
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const declared = new Map<string, string>(
  (vercel.redirects ?? []).map((r: { source: string; destination: string }) => [r.source, r.destination])
);
const knownPaths = new Set<string>([...(Object.values(PAGE_ROUTES) as string[]), ...sitemap.map((s) => s.path)]);
for (const [from, to] of Object.entries(ARTICLE_REDIRECTS as Record<string, string>)) {
  if (declared.get(from) !== to) {
    throw new Error(`Prérendu : la redirection ${from} -> ${to} doit être déclarée dans vercel.json.`);
  }
  if (!knownPaths.has(to)) {
    throw new Error(`Prérendu : la redirection ${from} pointe vers une page inexistante (${to}).`);
  }
}

// La table des fichiers n'a pas à être publiée.
rmSync(join(dist, '.vite'), { recursive: true, force: true });

console.log(
  `Prérendu : ${Object.keys(PAGE_ROUTES).length} pages, ${blogArticles.length} articles, page 404, ` +
    `${sitemap.length} URL dans le sitemap, ${Object.keys(ARTICLE_REDIRECTS).length} redirections vérifiées.`
);
