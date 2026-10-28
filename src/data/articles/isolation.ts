import type { ArticleSource } from '../articleTypes';
import Combles1 from '../../assets/Combles1.webp';
import Projet4 from '../../assets/Projet4.webp';
import Exterieur3 from '../../assets/Exterieur3.webp';
import PlancherBas3 from '../../assets/PlancherBas3.webp';
import Caroussel3 from '../../assets/Caroussel3.webp';

export const isolationArticles: ArticleSource[] = [
  {
    slug: 'isolation-des-combles-laine-de-verre-ou-ouate-de-cellulose',
    title: 'Isolation des combles : laine de verre, laine de roche ou ouate de cellulose ?',
    seoTitle: 'Isolation des combles : laine de verre, roche ou ouate ?',
    excerpt:
      'Performance, confort d’été, tassement, prix : les différences entre les isolants les plus utilisés pour les combles, et comment choisir selon votre maison.',
    category: 'Isolation',
    date: '02/05/2025',
    updated: '27/10/2026',
    image: Combles1,
    tags: ['Isolation', 'Combles', 'Matériaux'],
    related: 'isolation-combles',
  },
  {
    slug: 'isolation-des-combles-pourquoi-l-etat-de-l-existant-compte-autant',
    title: 'Isolation des combles : pourquoi l’état de l’existant compte autant',
    seoTitle: 'Isoler ses combles : pourquoi l’état de l’existant compte',
    excerpt:
      'Ancien isolant tassé, humidité, ventilation, conduits, électricité : les vérifications à faire dans les combles avant de souffler un nouvel isolant.',
    category: 'Isolation',
    date: '28/08/2026',
    updated: '27/10/2026',
    image: Projet4,
    tags: ['Isolation', 'Combles', 'Diagnostic'],
    related: 'isolation-combles',
  },
  {
    slug: 'isolation-exterieure-facade-ponts-thermiques-et-contraintes-du-batiment',
    title: 'Isolation extérieure : façade, ponts thermiques et contraintes du bâtiment',
    seoTitle: 'Isolation extérieure : ponts thermiques et contraintes',
    excerpt:
      'L’isolation par l’extérieur traite les ponts thermiques sans réduire la surface habitable, mais touche à la façade. Les techniques, contraintes et autorisations à connaître.',
    category: 'Isolation',
    date: '21/08/2026',
    updated: '27/10/2026',
    image: Exterieur3,
    tags: ['Isolation', 'Isolation extérieure', 'Façade'],
    related: 'isolation-exterieur',
  },
  {
    slug: 'plancher-bas-quand-cette-isolation-apporte-t-elle-un-vrai-gain-de-confort',
    title: 'Plancher bas : quand cette isolation apporte-t-elle un vrai gain de confort ?',
    seoTitle: 'Isolation du plancher bas : quand est-elle efficace ?',
    excerpt:
      'Sol froid au-dessus d’un garage, d’une cave ou d’un vide sanitaire : dans quels cas isoler le plancher bas est efficace, et comment se déroulent les travaux.',
    category: 'Isolation',
    date: '14/08/2026',
    updated: '27/10/2026',
    image: PlancherBas3,
    tags: ['Isolation', 'Plancher bas', 'Sous-sol'],
    related: 'isolation-sous-sol',
  },
  {
    slug: 'confort-d-ete-l-isolation-ne-sert-pas-qu-en-hiver',
    title: 'Confort d’été : l’isolation ne sert pas qu’en hiver',
    excerpt:
      'Toiture, isolants denses, protections solaires, ventilation nocturne : comment garder une maison fraîche pendant les épisodes de chaleur, avant de penser climatisation.',
    category: 'Isolation',
    date: '22/05/2026',
    updated: '27/10/2026',
    image: Caroussel3,
    tags: ['Isolation', 'Confort d’été', 'Canicule'],
    related: 'isolation-combles',
  },
];
