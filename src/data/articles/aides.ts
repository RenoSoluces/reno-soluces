import type { ArticleSource } from '../articleTypes';
import Exterieur2 from '../../assets/Exterieur2.webp';
import CEE1 from '../../assets/CEE1.webp';

export const aidesArticles: ArticleSource[] = [
  {
    slug: 'maprimerenov-comment-lire-les-taux-d-aide-sans-se-tromper',
    title: 'MaPrimeRénov’ : comment lire les taux d’aide sans se tromper',
    seoTitle: 'MaPrimeRénov’ 2026 : comment lire les taux d’aide',
    excerpt:
      'Parcours par geste ou rénovation d’ampleur, catégories de revenus, plafonds de dépenses, écrêtement : les clés pour comprendre ce que MaPrimeRénov’ financera vraiment en 2026.',
    category: 'Aides et financement',
    date: '03/10/2026',
    updated: '27/10/2026',
    image: Exterieur2,
    tags: ['MaPrimeRénov’', 'Aides', 'Anah'],
    related: 'ma-prime-renov',
  },
  {
    slug: 'cee-pourquoi-le-montant-ne-doit-pas-etre-annonce-sans-etude',
    title: 'CEE : pourquoi le montant de la prime ne doit pas être annoncé sans étude',
    seoTitle: 'Prime CEE : pourquoi le montant dépend d’une étude',
    excerpt:
      'Zone climatique, surface, performance, revenus, coups de pouce, prix du marché : la prime CEE se calcule au cas par cas. Ce qu’il faut vérifier avant de signer.',
    category: 'Aides et financement',
    date: '03/07/2026',
    updated: '27/10/2026',
    image: CEE1,
    tags: ['CEE', 'Prime énergie', 'Aides'],
    related: 'cee',
  },
];
