import type { ArticleSource } from '../articleTypes';
import Processus3 from '../../assets/Processus3.webp';
import AirAir3 from '../../assets/AirAir3.webp';
import HauteGaronne from '../../assets/HauteGaronne.webp';
import Projet1 from '../../assets/Projet1.webp';
import Caroussel1 from '../../assets/Caroussel1.webp';
import Panneaux1 from '../../assets/Panneaux1.webp';

export const conseilsArticles: ArticleSource[] = [
  {
    slug: 'pourquoi-un-devis-de-renovation-doit-etre-lu-ligne-par-ligne',
    title: 'Pourquoi un devis de rénovation doit être lu ligne par ligne',
    seoTitle: 'Devis de rénovation : la check-list avant de signer',
    excerpt:
      'Mentions obligatoires, matériel exact, performances, TVA, aides, acompte, déchets : la check-list pour relire un devis de rénovation énergétique avant de le signer.',
    category: 'Conseils travaux',
    date: '24/09/2026',
    updated: '27/10/2026',
    image: Processus3,
    tags: ['Devis', 'Conseils', 'Travaux'],
    related: 'contact',
  },
  {
    slug: 'rge-ce-que-cette-qualification-signifie-reellement',
    title: 'RGE : ce que cette qualification signifie réellement',
    excerpt:
      'À quoi sert la mention RGE, comment la vérifier, pourquoi elle doit correspondre aux travaux réalisés, et ce qu’elle ne garantit pas.',
    category: 'Conseils travaux',
    date: '18/09/2026',
    updated: '27/10/2026',
    image: AirAir3,
    tags: ['RGE', 'Qualification', 'Artisans'],
    related: 'nos-partenaires',
  },
  {
    slug: 'comment-preparer-une-demande-de-renovation-energetique',
    title: 'Comment préparer une demande de rénovation énergétique ?',
    seoTitle: 'Préparer sa demande de rénovation énergétique',
    excerpt:
      'DPE, factures, photos, objectifs, contraintes, budget : les informations à rassembler pour obtenir rapidement une étude et des devis comparables.',
    category: 'Conseils travaux',
    date: '19/06/2026',
    updated: '27/10/2026',
    image: HauteGaronne,
    tags: ['Rénovation énergétique', 'Préparation', 'Conseils'],
    related: 'contact',
  },
  {
    slug: 'les-erreurs-frequentes-quand-on-commence-une-renovation',
    title: 'Les erreurs fréquentes quand on commence une rénovation',
    seoTitle: 'Rénovation : les erreurs fréquentes à éviter',
    excerpt:
      'Commencer par le chauffage, signer trop vite, oublier la ventilation, se fier à des aides « garanties » : les erreurs classiques et comment les éviter.',
    category: 'Conseils travaux',
    date: '12/06/2026',
    updated: '27/10/2026',
    image: Projet1,
    tags: ['Rénovation', 'Erreurs', 'Conseils'],
    related: 'tout-savoir-renovation-energetique',
  },
  {
    slug: 'pourquoi-le-choix-d-un-professionnel-doit-venir-apres-la-definition-du-besoin',
    title: 'Pourquoi le choix d’un professionnel doit venir après la définition du besoin',
    seoTitle: 'Définir son besoin avant de choisir un professionnel',
    excerpt:
      'Commencer par définir son besoin plutôt que par choisir un équipement ou une entreprise permet d’obtenir une solution adaptée et des devis vraiment comparables.',
    category: 'Conseils travaux',
    date: '15/05/2026',
    updated: '27/10/2026',
    image: Caroussel1,
    tags: ['Conseils', 'Méthode', 'Professionnels'],
    related: 'nos-partenaires',
  },
  {
    slug: 'renovation-energetique-par-quoi-commencer-quand-tout-semble-prioritaire',
    title: 'Rénovation énergétique : par quoi commencer quand tout semble prioritaire ?',
    seoTitle: 'Rénovation énergétique : par quoi commencer ?',
    excerpt:
      'Toiture, chauffage, fenêtres, murs : une méthode simple pour prioriser les travaux de rénovation énergétique et éviter les mauvais enchaînements.',
    category: 'Conseils travaux',
    date: '01/05/2026',
    updated: '27/10/2026',
    image: Panneaux1,
    tags: ['Rénovation énergétique', 'Priorités', 'Méthode'],
    related: 'tout-savoir-renovation-energetique',
  },
];
