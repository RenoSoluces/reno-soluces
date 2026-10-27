/**
 * Texte des articles (src/content/articles/<slug>.md).
 * Ce module n'est importé que par la page du blog : le texte des articles n'alourdit
 * donc pas le code chargé sur les autres pages.
 */
const files = import.meta.glob('../content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const CONTENT: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, text]) => [path.split('/').pop()!.replace(/\.md$/, ''), text])
);

export const getArticleContent = (slug: string): string => CONTENT[slug] ?? '';

export const wordCount = (slug: string): number => getArticleContent(slug).split(/\s+/).filter(Boolean).length;

/** Temps de lecture estimé, par exemple « 5 min ». */
export const readTime = (slug: string): string => `${Math.max(2, Math.round(wordCount(slug) / 200))} min`;
