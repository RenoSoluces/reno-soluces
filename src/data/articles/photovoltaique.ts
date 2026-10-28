import type { ArticleSource } from '../articleTypes';
import Panneaux2 from '../../assets/Panneaux2.webp';
import PanneauxPV from '../../assets/PanneauxPV.webp';
import Panneaux4 from '../../assets/Panneaux4.webp';
import Batterie4 from '../../assets/Batterie4.webp';

export const photovoltaiqueArticles: ArticleSource[] = [
  {
    slug: 'photovoltaique-autoconsommation-ou-vente-du-surplus',
    title: 'Photovoltaïque : autoconsommation ou vente du surplus, que choisir en 2026 ?',
    seoTitle: 'Autoconsommation ou vente du surplus : que choisir en 2026 ?',
    excerpt:
      'Fin de la prime, rachat du surplus à environ 1,1 c€/kWh : pourquoi un projet solaire se juge désormais sur la part d’électricité que vous consommez vous-même.',
    category: 'Photovoltaïque',
    date: '31/07/2026',
    updated: '27/10/2026',
    image: Panneaux2,
    tags: ['Photovoltaïque', 'Autoconsommation', 'EDF OA'],
    related: 'panneaux-photovoltaiques',
  },
  {
    slug: 'batterie-solaire-dans-quels-cas-le-stockage-peut-il-avoir-du-sens',
    title: 'Batterie solaire : dans quels cas le stockage peut-il avoir du sens ?',
    seoTitle: 'Batterie solaire : quand le stockage est-il rentable ?',
    excerpt:
      'Une batterie augmente l’autoconsommation, mais son coût doit être comparé aux économies réelles. Les situations où le stockage se justifie, et celles où il vaut mieux attendre.',
    category: 'Photovoltaïque',
    date: '24/07/2026',
    updated: '27/10/2026',
    image: Batterie4,
    tags: ['Photovoltaïque', 'Batterie', 'Stockage'],
    related: 'batterie',
  },
  {
    slug: 'projet-solaire-quelles-informations-donner-des-le-premier-echange',
    title: 'Projet solaire : quelles informations donner dès le premier échange ?',
    seoTitle: 'Projet solaire : les infos à donner au premier échange',
    excerpt:
      'Consommation, toiture, équipements, projets à venir : les informations qui permettent d’obtenir une étude photovoltaïque juste dès le premier contact.',
    category: 'Photovoltaïque',
    date: '08/05/2026',
    updated: '27/10/2026',
    image: Panneaux4,
    tags: ['Photovoltaïque', 'Devis', 'Étude'],
    related: 'panneaux-photovoltaiques',
  },
  {
    slug: 'panneaux-solaires-technologies-et-evolutions-du-marche',
    title: 'Panneaux solaires : les technologies et évolutions du marché à connaître',
    seoTitle: 'Panneaux solaires : technologies et évolutions du marché',
    excerpt:
      'TOPCon, hétérojonction, micro-onduleurs, pilotage, bilan carbone : ce qui distingue vraiment les installations solaires résidentielles aujourd’hui.',
    category: 'Photovoltaïque',
    date: '27/10/2026',
    image: PanneauxPV,
    tags: ['Photovoltaïque', 'Technologie', 'Marché'],
    related: 'panneaux-photovoltaiques',
  },
];
