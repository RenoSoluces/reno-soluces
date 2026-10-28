import { SITE_URL } from '../seo/site';
import type { ArticleSource } from './articleTypes';
import { photovoltaiqueArticles } from './articles/photovoltaique';
import { chauffageArticles } from './articles/chauffage';
import { isolationArticles } from './articles/isolation';
import { aidesArticles } from './articles/aides';
import { reglementationArticles } from './articles/reglementation';
import { conseilsArticles } from './articles/conseils';

export type { ArticleCategory } from './articleTypes';
export { ARTICLE_CATEGORIES } from './articleTypes';

export type BlogArticle = ArticleSource;

const toTimestamp = (date: string): number => {
  const [day, month, year] = date.split('/').map(Number);
  return Date.UTC(year, month - 1, day);
};

/** Tous les articles, du plus récent au plus ancien. */
export const blogArticles: BlogArticle[] = [
  ...photovoltaiqueArticles,
  ...chauffageArticles,
  ...isolationArticles,
  ...aidesArticles,
  ...reglementationArticles,
  ...conseilsArticles,
]
  .sort((a, b) => toTimestamp(b.updated ?? b.date) - toTimestamp(a.updated ?? a.date) || toTimestamp(b.date) - toTimestamp(a.date));

/**
 * Anciennes adresses d'articles fusionnés ou remplacés -> nouvelle adresse.
 * Les redirections permanentes correspondantes sont déclarées dans vercel.json
 * (le build vérifie que les deux listes concordent).
 */
export const ARTICLE_REDIRECTS: Record<string, string> = {
  '/guides/maprimerenov-ce-que-change-la-nouvelle-reglementation-pour-les-mandataires-des-juillet-2025':
    '/guides/maprimerenov-comment-lire-les-taux-d-aide-sans-se-tromper',
  '/guides/canicule-2025-pourquoi-une-maison-bien-isolee-protege-aussi-de-la-chaleur':
    '/guides/confort-d-ete-l-isolation-ne-sert-pas-qu-en-hiver',
  '/guides/panneaux-solaires-les-nouveautes-technologiques-2025':
    '/guides/panneaux-solaires-technologies-et-evolutions-du-marche',
  '/guides/panneaux-photovoltaiques-les-tendances-2025-qui-revolutionnent-le-marche':
    '/guides/panneaux-solaires-technologies-et-evolutions-du-marche',
  '/guides/rentree-2025-le-moment-ideal-pour-lancer-votre-projet-de-renovation-energetique':
    '/guides/renovation-energetique-par-quoi-commencer-quand-tout-semble-prioritaire',
  '/guides/audit-energetique-la-cle-d-une-renovation-reussie':
    '/guides/audit-energetique-a-quoi-sert-il-dans-un-projet-ambitieux',
  '/guides/eco-ptz-a-quoi-sert-ce-financement': '/aides/eco-pret-taux-zero',
  '/guides/tva-a-taux-reduit-quels-travaux-peuvent-en-beneficier': '/aides/tva',
};

export const articleSlug = (article: Pick<ArticleSource, 'slug'>): string => article.slug;

export const findArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find((article) => article.slug === slug);

/** Un article est proposé aux moteurs de recherche sauf s'il est marqué comme incomplet. */
export const isArticleIndexable = (article: BlogArticle): boolean => !article.noindex;

/** Articles de la même catégorie, puis les plus récents, pour les suggestions de lecture. */
export function relatedArticles(article: BlogArticle, count = 3): BlogArticle[] {
  const others = blogArticles.filter((a) => a.slug !== article.slug);
  const sameCategory = others.filter((a) => a.category === article.category);
  const rest = others.filter((a) => a.category !== article.category);
  return [...sameCategory, ...rest].slice(0, count);
}

/** Convertit une date JJ/MM/AAAA au format ISO AAAA-MM-JJ. */
export function articleIsoDate(date: string): string {
  const [day, month, year] = date.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

/** URL absolue de l'image de l'article (pour les réseaux sociaux et les données structurées). */
export const articleImage = (article: Pick<ArticleSource, 'image'>): string =>
  article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`;
