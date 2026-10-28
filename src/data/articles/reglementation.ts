import type { ArticleSource } from '../articleTypes';
import Caroussel2 from '../../assets/Caroussel2.webp';
import Herault from '../../assets/Herault.webp';
import Processus2 from '../../assets/Processus2.webp';
import Exterieur1 from '../../assets/Exterieur1.webp';

export const reglementationArticles: ArticleSource[] = [
  {
    slug: 'dpe-ce-qu-il-faut-regarder-au-dela-de-la-lettre',
    title: 'DPE : ce qu’il faut regarder au-delà de la lettre',
    excerpt:
      'Double étiquette, réforme de 2026, estimation des factures, recommandations de travaux, confort d’été : comment lire un DPE pour en tirer un vrai plan d’action.',
    category: 'Réglementation',
    date: '05/06/2026',
    updated: '27/10/2026',
    image: Caroussel2,
    tags: ['DPE', 'Diagnostic', 'Réglementation'],
    related: 'passoires-thermiques',
  },
  {
    slug: 'maison-classee-e-f-ou-g-quelles-premieres-questions-poser',
    title: 'Maison classée E, F ou G : quelles premières questions se poser ?',
    seoTitle: 'Maison classée E, F ou G : les premières questions',
    excerpt:
      'Location, vente, aides, priorités de travaux : ce qu’implique réellement une étiquette E, F ou G, et par où commencer pour améliorer le logement.',
    category: 'Réglementation',
    date: '29/09/2026',
    updated: '27/10/2026',
    image: Herault,
    tags: ['DPE', 'Passoire thermique', 'Rénovation'],
    related: 'passoires-thermiques',
  },
  {
    slug: 'audit-energetique-a-quoi-sert-il-dans-un-projet-ambitieux',
    title: 'Audit énergétique : à quoi sert-il dans un projet ambitieux ?',
    seoTitle: 'Audit énergétique : à quoi sert-il pour vos travaux ?',
    excerpt:
      'Différence avec le DPE, contenu, scénarios de travaux, obligation à la vente, rôle dans MaPrimeRénov’ : l’audit énergétique expliqué simplement.',
    category: 'Réglementation',
    date: '29/05/2026',
    updated: '27/10/2026',
    image: Processus2,
    tags: ['Audit énergétique', 'Diagnostic', 'Rénovation'],
    related: 'tout-savoir-renovation-energetique',
  },
  {
    slug: 'qu-est-ce-que-la-renovation-performante',
    title: 'Qu’est-ce que la rénovation performante ?',
    excerpt:
      'Ce que recouvre la notion de rénovation énergétique performante et globale, les six postes de travaux concernés et pourquoi l’approche globale évite les mauvaises surprises.',
    category: 'Réglementation',
    date: '12/06/2025',
    updated: '27/10/2026',
    image: Exterieur1,
    tags: ['Rénovation', 'Performance', 'Rénovation globale'],
    related: 'tout-savoir-renovation-energetique',
  },
];
