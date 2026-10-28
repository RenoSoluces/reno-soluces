/**
 * Données structurées (schema.org) propres à chaque page, ajoutées au HTML prérendu.
 * Les informations sur l'entreprise elle-même sont dans index.html (#organization).
 */
import { findArticleBySlug, articleImage, articleIsoDate } from '../data/blogArticles';
import { PAGE_META, PAGE_ROUTES, SITE_URL, pathFor } from './routes';
import type { SiteLocation } from './routes';

const ORG_ID = `${SITE_URL}/#organization`;

/** Page parente utilisée pour le fil d'Ariane. */
const PARENT: Record<string, string> = {
  'panneaux-photovoltaiques': 'solutions',
  'parcours-photovoltaiques': 'panneaux-photovoltaiques',
  batterie: 'solutions',
  'isolation-exterieur': 'solutions',
  'isolation-combles': 'solutions',
  'isolation-sous-sol': 'solutions',
  'chauffe-eau-thermodynamique': 'solutions',
  'pompe-chaleur-air-eau': 'solutions',
  'pompe-chaleur-air-air': 'solutions',
  'fonctionnement-panneau-solaire': 'notre-blog',
  'installation-panneaux-solaires': 'notre-blog',
  'fonctionnement-pac-air-eau': 'notre-blog',
  'installation-pac-air-eau': 'notre-blog',
  'cee-isolation-exterieure': 'notre-blog',
  'tout-savoir-renovation-energetique': 'notre-blog',
  'prix-panneaux-solaires': 'notre-blog',
  'prix-isolation-exterieure': 'notre-blog',
  'prix-chauffe-eau-thermodynamique': 'notre-blog',
  'rentabilite-chauffe-eau-thermodynamique': 'notre-blog',
  'passoires-thermiques': 'notre-blog',
  'notre-histoire': 'notre-identite',
};

const DEPARTMENTS: Record<string, string> = {
  'renovation-energetique-aude': 'Aude',
  'renovation-energetique-herault': 'Hérault',
  'renovation-energetique-pyrenees-orientales': 'Pyrénées-Orientales',
  'renovation-energetique-haute-garonne': 'Haute-Garonne',
  'renovation-energetique-arriege': 'Ariège',
};

const shortName = (page: string): string => {
  if (page === 'home') return 'Accueil';
  if (page === 'notre-blog') return 'Guides';
  if (page === 'solutions') return 'Solutions';
  return (PAGE_META[page]?.title ?? page).split(' | ')[0].split(' : ')[0].trim();
};

function breadcrumb(location: SiteLocation, currentName: string) {
  const chain: { name: string; path: string }[] = [];
  let page: string | undefined = location.articleSlug ? 'notre-blog' : PARENT[location.page];
  while (page) {
    chain.unshift({ name: shortName(page), path: PAGE_ROUTES[page] });
    page = PARENT[page];
  }
  chain.unshift({ name: 'Accueil', path: '/' });
  chain.push({ name: currentName, path: pathFor(location) });

  return {
    '@type': 'BreadcrumbList',
    itemListElement: chain.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Renvoie l'objet JSON-LD de la page, ou null s'il n'y a rien à ajouter. */
export function buildStructuredData(location: SiteLocation): object | null {
  if (location.page === 'not-found') return null;
  const url = `${SITE_URL}${pathFor(location)}`;
  const graph: object[] = [];

  if (location.page === 'home') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Reno Soluces',
      inLanguage: 'fr-FR',
      publisher: { '@id': ORG_ID },
    });
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  if (location.articleSlug) {
    const article = findArticleBySlug(location.articleSlug);
    if (!article) return null;
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: url,
      headline: article.title,
      description: article.excerpt,
      image: articleImage(article),
      datePublished: articleIsoDate(article.date),
      dateModified: articleIsoDate(article.updated ?? article.date),
      inLanguage: 'fr-FR',
      articleSection: article.category,
      keywords: article.tags.join(', '),
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
    });
    graph.push(breadcrumb(location, article.title));
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  const department = DEPARTMENTS[location.page];
  if (department) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `Rénovation énergétique – ${department}`,
      serviceType: 'Mise en relation pour travaux de rénovation énergétique',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'AdministrativeArea', name: department },
      url,
    });
  }

  graph.push(breadcrumb(location, shortName(location.page)));
  return { '@context': 'https://schema.org', '@graph': graph };
}
