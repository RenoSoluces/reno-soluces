import { findArticleBySlug, isArticleIndexable } from '../data/blogArticles';
import { SITE_URL } from './site';

export { SITE_URL };
export const GUIDES_PREFIX = '/guides/';

/** Clé de page interne -> URL publique. Source unique pour l'application, le sitemap et le pré-rendu. */
export const PAGE_ROUTES: Record<string, string> = {
  home: '/',
  solutions: '/solutions',
  'panneaux-photovoltaiques': '/panneaux-photovoltaiques',
  'parcours-photovoltaiques': '/parcours-photovoltaiques',
  batterie: '/batterie',
  'isolation-exterieur': '/isolation-exterieur',
  'isolation-combles': '/isolation-combles',
  'isolation-sous-sol': '/isolation-sous-sol',
  'chauffe-eau-thermodynamique': '/chauffe-eau-thermodynamique',
  'pompe-chaleur-air-eau': '/pompe-a-chaleur-air-eau',
  'pompe-chaleur-air-air': '/pompe-a-chaleur-air-air',
  'ma-prime-renov': '/aides/maprimerenov',
  cee: '/aides/cee',
  'coup-de-pouce-chauffage': '/aides/coup-de-pouce-chauffage',
  tva: '/aides/tva',
  'eco-pret-taux-zero': '/aides/eco-pret-taux-zero',
  'fonctionnement-panneau-solaire': '/guides/fonctionnement-panneau-solaire',
  'installation-panneaux-solaires': '/guides/installation-panneaux-solaires',
  'fonctionnement-pac-air-eau': '/guides/fonctionnement-pac-air-eau',
  'installation-pac-air-eau': '/guides/installation-pac-air-eau',
  'cee-isolation-exterieure': '/guides/cee-isolation-exterieure',
  'tout-savoir-renovation-energetique': '/guides/renovation-energetique',
  'prix-panneaux-solaires': '/guides/prix-panneaux-solaires',
  'prix-isolation-exterieure': '/guides/prix-isolation-exterieure',
  'prix-chauffe-eau-thermodynamique': '/guides/prix-chauffe-eau-thermodynamique',
  'rentabilite-chauffe-eau-thermodynamique': '/guides/rentabilite-chauffe-eau-thermodynamique',
  'passoires-thermiques': '/guides/passoires-thermiques',
  'notre-identite': '/a-propos',
  'notre-histoire': '/a-propos/notre-histoire',
  'nos-temoignages': '/avis',
  'nos-partenaires': '/partenaires',
  faq: '/faq',
  'notre-blog': '/guides',
  lexique: '/lexique',
  parrainage: '/parrainage',
  'renovation-energetique-arriege': '/renovation-energetique/ariege',
  'renovation-energetique-pyrenees-orientales': '/renovation-energetique/pyrenees-orientales',
  'renovation-energetique-haute-garonne': '/renovation-energetique/haute-garonne',
  'renovation-energetique-herault': '/renovation-energetique/herault',
  'renovation-energetique-aude': '/renovation-energetique/aude',
  'mentions-legales': '/mentions-legales',
  'politique-confidentialite': '/politique-confidentialite',
  'politique-cookies': '/politique-cookies',
  'conditions-generales-vente': '/conditions-generales-vente',
  contact: '/contact',
};

export interface PageMeta {
  title: string;
  description: string;
  /** true = la page ne doit pas être proposée par les moteurs de recherche. */
  noindex?: boolean;
}

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'Rénovation énergétique en Occitanie | Reno Soluces',
    description:
      'Panneaux solaires, pompe à chaleur, isolation : décrivez votre projet et soyez mis en relation avec un professionnel partenaire en Occitanie. Gratuit.',
  },
  solutions: {
    title: 'Nos solutions de rénovation énergétique | Reno Soluces',
    description:
      'Panneaux solaires, batterie, pompe à chaleur, isolation, chauffe-eau thermodynamique : trouvez la solution adaptée à votre logement et au bon professionnel.',
  },
  'panneaux-photovoltaiques': {
    title: 'Panneaux photovoltaïques : projet et mise en relation | Reno Soluces',
    description:
      'Autoconsommation, vente du surplus, dimensionnement : comprenez votre projet solaire et échangez avec un professionnel partenaire près de chez vous.',
  },
  'parcours-photovoltaiques': {
    title: 'Parlons de votre projet photovoltaïque | Reno Soluces',
    description:
      'Décrivez votre projet de panneaux solaires et échangez avec un professionnel partenaire pour l’étudier concrètement.',
  },
  batterie: {
    title: 'Batterie solaire : fonctionnement, prix et intérêt | Reno Soluces',
    description:
      'Quand une batterie de stockage a-t-elle du sens avec des panneaux solaires ? Types, prix, installation : les points à vérifier avant de décider.',
  },
  'isolation-exterieur': {
    title: 'Isolation thermique par l’extérieur (ITE) | Reno Soluces',
    description:
      'Techniques, avantages et points de vigilance de l’isolation des façades. Préparez votre projet et échangez avec un professionnel partenaire.',
  },
  'isolation-combles': {
    title: 'Isolation des combles : techniques et matériaux | Reno Soluces',
    description:
      'Combles perdus ou aménagés, laine de verre ou ouate de cellulose : les éléments à connaître avant de lancer votre isolation.',
  },
  'isolation-sous-sol': {
    title: 'Isolation du sous-sol et du plancher bas | Reno Soluces',
    description:
      'Comprenez l’intérêt d’isoler un plancher bas ou un sous-sol, les techniques possibles et les points à vérifier avant les travaux.',
  },
  'chauffe-eau-thermodynamique': {
    title: 'Chauffe-eau thermodynamique : guide | Reno Soluces',
    description:
      'Principe, types de chauffe-eau thermodynamiques, installation et aides possibles : les critères à étudier pour votre logement.',
  },
  'pompe-chaleur-air-eau': {
    title: 'Pompe à chaleur air/eau : guide | Reno Soluces',
    description:
      'Comprendre la pompe à chaleur air/eau, son dimensionnement, ses aides possibles et les points à vérifier avant de demander un devis.',
  },
  'pompe-chaleur-air-air': {
    title: 'Climatisation réversible (pompe à chaleur air-air) | Reno Soluces',
    description:
      'Chauffer et rafraîchir avec une pompe à chaleur air-air : fonctionnement, types d’installation et points à étudier pour votre logement.',
  },
  'ma-prime-renov': {
    title: 'MaPrimeRénov’ : conditions et fonctionnement | Reno Soluces',
    description:
      'Comprendre MaPrimeRénov’ : travaux concernés, conditions et démarches. L’éligibilité dépend de votre situation et des règles en vigueur.',
  },
  cee: {
    title: 'Primes CEE : comment ça marche ? | Reno Soluces',
    description:
      'Les primes CEE expliquées simplement : principe, travaux concernés et précautions avant de signer un devis.',
  },
  'coup-de-pouce-chauffage': {
    title: 'Coup de pouce chauffage : ce qu’il faut savoir | Reno Soluces',
    description:
      'Remplacement d’un ancien système de chauffage : principe du coup de pouce, conditions et points de vigilance.',
  },
  tva: {
    title: 'TVA réduite sur les travaux de rénovation | Reno Soluces',
    description:
      'TVA à taux réduit : quels travaux sont concernés, sous quelles conditions et comment vérifier votre devis.',
  },
  'eco-pret-taux-zero': {
    title: 'Éco-PTZ : financer ses travaux de rénovation | Reno Soluces',
    description:
      'À quoi sert l’éco-prêt à taux zéro, quels travaux il peut financer et quelles conditions vérifier avant de faire une demande.',
  },
  'fonctionnement-panneau-solaire': {
    title: 'Comment fonctionne un panneau solaire ? | Reno Soluces',
    description:
      'Production d’électricité, onduleur, autoconsommation : le fonctionnement d’une installation solaire expliqué simplement.',
  },
  'installation-panneaux-solaires': {
    title: 'Installer des panneaux solaires : les étapes | Reno Soluces',
    description:
      'Étude de toiture, démarches, raccordement, qualification de l’installateur : le déroulement d’une installation photovoltaïque.',
  },
  'fonctionnement-pac-air-eau': {
    title: 'Comment choisir une pompe à chaleur air/eau ? | Reno Soluces',
    description:
      'Fonctionnement, performances et critères de choix d’une pompe à chaleur air/eau adaptée à votre logement.',
  },
  'installation-pac-air-eau': {
    title: 'Installer une pompe à chaleur air/eau : les étapes | Reno Soluces',
    description:
      'Étude préalable, choix de l’emplacement, qualification RGE, mise en service : tout savoir avant l’installation.',
  },
  'cee-isolation-exterieure': {
    title: 'CEE et isolation extérieure : ce qu’il faut savoir | Reno Soluces',
    description:
      'Primes CEE et isolation par l’extérieur : conditions, démarches et précautions avant de signer.',
  },
  'tout-savoir-renovation-energetique': {
    title: 'Rénovation énergétique : par où commencer ? | Reno Soluces',
    description:
      'Les grandes étapes d’un projet de rénovation énergétique : diagnostic, priorités de travaux, aides et choix des professionnels.',
  },
  'prix-panneaux-solaires': {
    title: 'Prix des panneaux solaires : comprendre le coût | Reno Soluces',
    description:
      'Ce qui fait varier le prix d’une installation photovoltaïque et les points à vérifier avant de comparer des devis.',
  },
  'prix-isolation-exterieure': {
    title: 'Prix de l’isolation extérieure : le devis | Reno Soluces',
    description:
      'Surface, matériaux, finition, contraintes du bâtiment : les éléments qui influencent le coût d’une isolation par l’extérieur.',
  },
  'prix-chauffe-eau-thermodynamique': {
    title: 'Prix d’un chauffe-eau thermodynamique | Reno Soluces',
    description:
      'Type d’appareil, capacité, pose et adaptations du logement : comprendre le prix d’un chauffe-eau thermodynamique.',
  },
  'rentabilite-chauffe-eau-thermodynamique': {
    title: 'Un chauffe-eau thermodynamique est-il rentable ? | Reno Soluces',
    description:
      'Les critères à étudier pour évaluer l’intérêt économique d’un chauffe-eau thermodynamique dans votre logement.',
  },
  'passoires-thermiques': {
    title: 'Passoires thermiques : définition, DPE et obligations | Reno Soluces',
    description:
      'Logement classé F ou G : ce que cela signifie, les échéances réglementaires pour la location et les premières pistes de travaux.',
  },
  'notre-identite': {
    title: 'À propos de Reno Soluces | Mise en relation en Occitanie',
    description:
      'Reno Soluces, basé à Trausse (Aude), vous met en relation avec des professionnels partenaires pour vos projets de rénovation énergétique.',
  },
  'notre-histoire': {
    title: 'Notre histoire | Reno Soluces',
    description:
      'Découvrez comment est né Reno Soluces et notre démarche d’accompagnement des projets de rénovation en Occitanie.',
  },
  'nos-temoignages': {
    title: 'Avis clients Reno Soluces',
    description:
      'Les avis publiés sur Google par les clients qui ont fait appel à Reno Soluces pour leur projet de rénovation énergétique.',
  },
  'nos-partenaires': {
    title: 'Nos partenaires de confiance | Reno Soluces',
    description:
      'Le rôle de nos partenaires dans l’étude, le devis et la réalisation de votre chantier de rénovation.',
  },
  faq: {
    title: 'FAQ rénovation énergétique | Reno Soluces',
    description:
      'Réponses aux questions fréquentes : aides, devis, choix du professionnel et fonctionnement de la mise en relation.',
  },
  'notre-blog': {
    title: 'Guides et conseils rénovation énergétique | Reno Soluces',
    description:
      'Guides pratiques sur le solaire, les pompes à chaleur, l’isolation et les aides, pour comprendre avant de décider.',
  },
  lexique: {
    title: 'Lexique de la rénovation énergétique | Reno Soluces',
    description:
      'RGE, CEE, DPE et autres termes de la rénovation énergétique expliqués simplement.',
  },
  parrainage: {
    title: 'Parrainage | Reno Soluces',
    description: 'Parrainez un proche qui a un projet de rénovation énergétique : découvrez le fonctionnement du programme de parrainage Reno Soluces.',
  },
  'renovation-energetique-arriege': {
    title: 'Rénovation énergétique en Ariège (09) | Reno Soluces',
    description:
      'Isolation, chauffage, photovoltaïque en Ariège : décrivez votre projet et soyez mis en relation avec un professionnel partenaire.',
  },
  'renovation-energetique-pyrenees-orientales': {
    title: 'Rénovation énergétique Pyrénées-Orientales (66) | Reno Soluces',
    description:
      'Isolation, chauffage, photovoltaïque dans les Pyrénées-Orientales : décrivez votre projet et soyez mis en relation avec un professionnel partenaire.',
  },
  'renovation-energetique-haute-garonne': {
    title: 'Rénovation énergétique en Haute-Garonne (31) | Reno Soluces',
    description:
      'Isolation, chauffage, photovoltaïque en Haute-Garonne : décrivez votre projet et soyez mis en relation avec un professionnel partenaire.',
  },
  'renovation-energetique-herault': {
    title: 'Rénovation énergétique dans l’Hérault (34) | Reno Soluces',
    description:
      'Isolation, chauffage, photovoltaïque dans l’Hérault : décrivez votre projet et soyez mis en relation avec un professionnel partenaire.',
  },
  'renovation-energetique-aude': {
    title: 'Rénovation énergétique dans l’Aude (11) | Reno Soluces',
    description:
      'Panneaux solaires, pompe à chaleur, isolation dans l’Aude : Reno Soluces, basé à Trausse, vous met en relation avec un professionnel partenaire.',
  },
  'mentions-legales': {
    title: 'Mentions légales | Reno Soluces',
    description: 'Mentions légales du site Reno Soluces : éditeur, hébergement, propriété intellectuelle et coordonnées de contact.',
  },
  'politique-confidentialite': {
    title: 'Politique de confidentialité | Reno Soluces',
    description: 'Politique de confidentialité et traitement des données personnelles de Reno Soluces.',
  },
  'politique-cookies': {
    title: 'Politique de cookies | Reno Soluces',
    description: 'Informations sur les cookies et les traceurs utilisés sur le site Reno Soluces.',
  },
  'conditions-generales-vente': {
    title: 'Conditions générales | Reno Soluces',
    description: 'Conditions générales d’utilisation des services de Reno Soluces.',
  },
  'not-found': {
    title: 'Page introuvable | Reno Soluces',
    description: 'Cette page n’existe pas ou a été déplacée. Retrouvez nos solutions, nos guides et le formulaire de demande.',
    noindex: true,
  },
  contact: {
    title: 'Décrire mon projet de rénovation | Reno Soluces',
    description:
      'Décrivez votre projet de rénovation énergétique : demande gratuite et sans engagement, mise en relation avec un professionnel partenaire en Occitanie.',
  },
};

/** Ajoute « | Reno Soluces » au titre si la longueur totale reste lisible dans Google. */
const withBrand = (title: string): string => (title.length + 15 <= 65 ? `${title} | Reno Soluces` : title);

/** Métadonnées d'un article du blog. */
export function getArticleMeta(slug: string): PageMeta | undefined {
  const article = findArticleBySlug(slug);
  if (!article) return undefined;
  const excerpt = article.excerpt.length > 160 ? `${article.excerpt.slice(0, 157).trimEnd()}…` : article.excerpt;
  return {
    title: withBrand(article.seoTitle ?? article.title),
    description: excerpt,
    noindex: !isArticleIndexable(article),
  };
}

export const articleUrl = (slug: string): string => `${GUIDES_PREFIX}${slug}`;

// ---------------------------------------------------------------------------
// Résolution d'une URL en page à afficher
// ---------------------------------------------------------------------------

export interface SiteLocation {
  page: string;
  articleSlug: string | null;
}

const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_ROUTES).map(([key, path]) => [path, key])
);

/** Détermine la page (et l'éventuel article) correspondant à une URL. Les URL inconnues mènent à la page 404. */
export function resolveLocation(pathname: string): SiteLocation {
  const path = pathname.replace(/\/$/, '') || '/';
  const page = PATH_TO_PAGE[path];
  if (page) return { page, articleSlug: null };
  if (path.startsWith(GUIDES_PREFIX)) {
    const slug = path.slice(GUIDES_PREFIX.length);
    if (findArticleBySlug(slug)) return { page: 'notre-blog', articleSlug: slug };
  }
  return { page: 'not-found', articleSlug: null };
}

export function getPageMeta(location: SiteLocation): PageMeta {
  return (
    (location.articleSlug ? getArticleMeta(location.articleSlug) : undefined) ||
    PAGE_META[location.page] ||
    PAGE_META['not-found']
  );
}

export function pathFor(location: SiteLocation): string {
  if (location.articleSlug) return articleUrl(location.articleSlug);
  return PAGE_ROUTES[location.page] ?? '/';
}

export const canonicalUrl = (location: SiteLocation): string => `${SITE_URL}${pathFor(location)}`;
