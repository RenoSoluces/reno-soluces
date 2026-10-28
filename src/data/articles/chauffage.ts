import type { ArticleSource } from '../articleTypes';
import AirEau1 from '../../assets/AirEau1.webp';
import AirEau2 from '../../assets/AirEau2.webp';
import AirEau3 from '../../assets/AirEau3.webp';
import AirAir2 from '../../assets/AirAir2.webp';
import BallonThermo3 from '../../assets/BallonThermo3.webp';

export const chauffageArticles: ArticleSource[] = [
  {
    slug: 'pompe-a-chaleur-bien-choisir-selon-son-logement',
    title: 'Pompe à chaleur : comment bien la choisir selon son logement ?',
    seoTitle: 'Pompe à chaleur : bien la choisir selon son logement',
    excerpt:
      'Air/eau, air/air ou géothermie : le bon choix dépend de vos émetteurs, de l’isolation et de vos besoins en eau chaude. La méthode pour ne pas se tromper.',
    category: 'Chauffage',
    date: '15/05/2025',
    updated: '27/10/2026',
    image: AirEau3,
    tags: ['Pompe à chaleur', 'Chauffage', 'Guide'],
    related: 'pompe-chaleur-air-eau',
  },
  {
    slug: 'pac-air-eau-les-elements-qui-influencent-le-dimensionnement',
    title: 'PAC air/eau : les éléments qui influencent le dimensionnement',
    seoTitle: 'Dimensionnement d’une PAC air/eau : ce qui compte',
    excerpt:
      'Déperditions, température de base, émetteurs, eau chaude : comment se calcule la puissance d’une pompe à chaleur air/eau, et pourquoi trop puissante est aussi un problème.',
    category: 'Chauffage',
    date: '11/09/2026',
    updated: '27/10/2026',
    image: AirEau2,
    tags: ['Pompe à chaleur', 'Dimensionnement', 'Air/eau'],
    related: 'pompe-chaleur-air-eau',
  },
  {
    slug: 'pac-air-air-dans-quels-logements-cette-solution-peut-elle-etre-pertinente',
    title: 'PAC air/air : dans quels logements cette solution peut-elle être pertinente ?',
    seoTitle: 'PAC air/air : pour quels logements est-elle adaptée ?',
    excerpt:
      'Climatisation réversible, monosplit, multisplit ou gainable : les logements où la pompe à chaleur air/air fonctionne bien, ses limites et les aides possibles.',
    category: 'Chauffage',
    date: '04/09/2026',
    updated: '27/10/2026',
    image: AirAir2,
    tags: ['Pompe à chaleur', 'Climatisation réversible', 'Air/air'],
    related: 'pompe-chaleur-air-air',
  },
  {
    slug: 'comment-comparer-deux-devis-de-pompe-a-chaleur',
    title: 'Comment comparer deux devis de pompe à chaleur ?',
    excerpt:
      'Puissance, performances saisonnières, régulation, eau chaude, aides déduites : la grille de lecture pour comparer deux devis de pompe à chaleur à prestations égales.',
    category: 'Chauffage',
    date: '26/06/2026',
    updated: '27/10/2026',
    image: AirEau1,
    tags: ['Pompe à chaleur', 'Devis', 'Comparatif'],
    related: 'pompe-chaleur-air-eau',
  },
  {
    slug: 'chauffe-eau-thermodynamique-que-faut-il-verifier-avant-l-installation',
    title: 'Chauffe-eau thermodynamique : que faut-il vérifier avant l’installation ?',
    seoTitle: 'Chauffe-eau thermodynamique : à vérifier avant d’installer',
    excerpt:
      'Volume, emplacement, prise d’air, bruit, pilotage solaire : les vérifications à faire avant d’installer un chauffe-eau thermodynamique.',
    category: 'Chauffage',
    date: '07/08/2026',
    updated: '27/10/2026',
    image: BallonThermo3,
    tags: ['Eau chaude', 'Chauffe-eau thermodynamique', 'Installation'],
    related: 'chauffe-eau-thermodynamique',
  },
];
