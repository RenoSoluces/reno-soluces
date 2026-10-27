export type ArticleCategory =
  | 'Photovoltaïque'
  | 'Chauffage'
  | 'Isolation'
  | 'Aides et financement'
  | 'Réglementation'
  | 'Conseils travaux';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  'Photovoltaïque',
  'Chauffage',
  'Isolation',
  'Aides et financement',
  'Réglementation',
  'Conseils travaux',
];

/**
 * Fiche d'un article. Le texte de l'article se trouve dans
 * src/content/articles/<slug>.md, avec un balisage léger :
 *   ## Intertitre   ### Sous-intertitre   - liste   1. liste numérotée
 *   > encadré       **gras**              [texte](/lien-interne)
 */
export interface ArticleSource {
  /** Adresse de l'article (/guides/<slug>) et nom du fichier .md. Ne jamais la modifier une fois publiée. */
  slug: string;
  title: string;
  /** Titre plus court pour Google (60 caractères maximum), si le titre de l'article est long. */
  seoTitle?: string;
  /** Résumé d'environ 150 caractères, utilisé aussi comme description pour Google. */
  excerpt: string;
  category: ArticleCategory;
  /** Date de publication, JJ/MM/AAAA. */
  date: string;
  /** Date de dernière mise à jour, JJ/MM/AAAA. */
  updated?: string;
  image: string;
  tags: string[];
  /** Page de solution ou d'aide à mettre en avant à la fin de l'article (clé de src/seo/routes.ts). */
  related?: string;
  /** true pour un article encore incomplet, à ne pas proposer aux moteurs de recherche. */
  noindex?: boolean;
}
