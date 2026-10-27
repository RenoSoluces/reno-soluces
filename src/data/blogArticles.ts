export interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "MaPrimeRénov' : ce que change la nouvelle réglementation pour les mandataires dès juillet 2025",
    excerpt: "Découvrez les principales évolutions de MaPrimeRénov' et leur impact sur vos projets de rénovation énergétique.",
    content: `La réglementation MaPrimeRénov' évolue constamment pour s'adapter aux enjeux de la transition énergétique. Les dernières modifications apportent des clarifications importantes sur les conditions d'éligibilité et les montants accordés.

- L’accompagnement adapté aux projets de rénovation

Ces changements visent à améliorer l'efficacité du dispositif et à mieux cibler les ménages qui en ont le plus besoin.`,
    category: "Actualités",
    date: "07/07/2025",
    readTime: "3mn",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["MaPrimeRénov'", "Réglementation", "Aides"]
  },
  {
    id: 2,
    title: "Canicule 2025 : pourquoi une maison bien isolée protège aussi de la chaleur",
    excerpt: "L'isolation ne sert pas qu'en hiver ! Découvrez comment une bonne isolation vous protège également des fortes chaleurs estivales.",
    content: `Contrairement aux idées reçues, l'isolation thermique n'est pas seulement utile en hiver. Elle joue un rôle crucial pour maintenir la fraîcheur en été et vous protéger des canicules.

Une maison bien isolée :
- Limite les apports de chaleur extérieure
- Maintient une température stable à l'intérieur
- Réduit le besoin de climatisation
- Améliore le confort thermique global

Les matériaux isolants agissent comme une barrière thermique bidirectionnelle, empêchant la chaleur de sortir en hiver et d'entrer en été. C'est pourquoi investir dans l'isolation est rentable toute l'année.`,
    category: "Conseils énergétiques",
    date: "16/06/2025",
    readTime: "3mn",
    image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Isolation", "Confort", "Été"]
  },
  {
    id: 3,
    title: "Qu'est-ce que la rénovation performante ?",
    excerpt: "Comprendre les enjeux et les critères de la rénovation performante pour optimiser votre projet de rénovation énergétique.",
    content: `La rénovation performante vise à atteindre un niveau de performance énergétique élevé en combinant plusieurs actions de rénovation. Elle se distingue de la rénovation classique par ses objectifs ambitieux.

Les critères d'une rénovation performante :
- Gain énergétique à apprécier selon les caractéristiques du projet
- Atteinte d'un niveau BBC rénovation
- Traitement global des déperditions
- Utilisation d'équipements performants

Cette approche permet de bénéficier d'aides financières majorées et d'obtenir des résultats durables en termes de confort et d'économies d'énergie.

L'accompagnement par un professionnel qualifié est essentiel pour réussir ce type de projet et optimiser les performances énergétiques de votre logement.`,
    category: "Rénovation énergétique",
    date: "12/06/2025",
    readTime: "4mn",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Rénovation", "Performance", "BBC"]
  },
  {
    id: 4,
    title: "Panneaux solaires : les nouveautés technologiques 2025",
    excerpt: "Les dernières innovations en matière de panneaux photovoltaïques qui révolutionnent le marché du solaire.",
    content: `L'année 2025 marque un tournant dans l'industrie photovoltaïque avec l'arrivée de nouvelles technologies plus performantes et accessibles.

Les principales innovations :
- Différentes technologies de cellules existent ; leurs performances doivent être vérifiées dans les fiches fabricants
- Panneaux bifaciaux qui captent la lumière des deux côtés
- Intégration de micro-onduleurs pour optimiser la production
- Nouvelles solutions de stockage plus compactes

Ces avancées permettent d'augmenter la production d'électricité tout en réduisant l'espace nécessaire sur votre toiture. La rentabilité des installations solaires s'en trouve considérablement améliorée.`,
    category: "Photovoltaïque",
    date: "28/05/2025",
    readTime: "5mn",
    image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Photovoltaïque", "Innovation", "Technologie"]
  },
  {
    id: 5,
    title: "Pompe à chaleur : bien choisir selon son logement",
    excerpt: "Guide complet pour choisir la pompe à chaleur la mieux adaptée à votre habitation et vos besoins.",
    content: `Le choix d'une pompe à chaleur dépend de nombreux facteurs liés à votre logement et à vos habitudes de consommation.

Critères de choix principaux :
- Type de logement (maison, appartement)
- Surface à chauffer
- Isolation existante
- Système de chauffage actuel
- Budget disponible

Les différents types :
- PAC Air/Air : idéale pour la climatisation réversible
- PAC Air/Eau : parfaite pour remplacer une chaudière
- PAC géothermique : très performante mais plus coûteuse

Un dimensionnement précis par un professionnel RGE est essentiel pour optimiser les performances et la rentabilité de votre installation.`,
    category: "Chauffage",
    date: "15/05/2025",
    readTime: "6mn",
    image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Pompe à chaleur", "Chauffage", "Guide"]
  },
  {
    id: 6,
    title: "Isolation des combles : laine de verre ou ouate de cellulose ?",
    excerpt: "Comparatif détaillé entre les deux matériaux isolants les plus utilisés pour l'isolation des combles.",
    content: `Le choix du matériau isolant pour vos combles est crucial pour l'efficacité et la durabilité de votre isolation.

**Laine de verre :**
- Excellent rapport qualité/prix
- Bonne résistance thermique
- Installation facile
- Durée de vie importante

**Ouate de cellulose :**
- Matériau biosourcé et écologique
- Excellente protection contre la chaleur estivale
- Bonne isolation phonique
- Régulation naturelle de l'humidité

Le choix dépend de vos priorités : budget, performance thermique, impact environnemental et confort d'été. Nos éco-techniciens vous conseillent selon votre situation spécifique.`,
    category: "Isolation",
    date: "02/05/2025",
    readTime: "4mn",
    image: "https://images.pexels.com/photos/6489085/pexels-photo-6489085.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Isolation", "Combles", "Matériaux"]
  },
  {
    id: 7,
    title: "Rentrée 2025 : le moment idéal pour lancer votre projet de rénovation énergétique",
    excerpt: "Découvrez pourquoi la rentrée est la période parfaite pour planifier et démarrer vos travaux de rénovation énergétique.",
    content: `La rentrée de septembre marque traditionnellement le moment idéal pour lancer un projet de rénovation énergétique. Plusieurs facteurs convergent pour faire de cette période un timing optimal.

Les avantages de commencer en septembre :
- Disponibilité accrue des artisans après la pause estivale
- Conditions météorologiques favorables pour les travaux
- Temps de planification avant l'hiver
- Renouvellement des budgets d'aides publiques

C'est aussi le moment de faire le bilan énergétique de l'année écoulée et de préparer votre logement pour affronter l'hiver dans les meilleures conditions.`,
    category: "Actualités",
    date: "02/09/2025",
    readTime: "4mn",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Rentrée", "Rénovation", "Planification"]
  },
  {
    id: 9,
    title: "Panneaux photovoltaïques : les tendances 2025 qui révolutionnent le marché",
    excerpt: "Découvrez les innovations technologiques et les évolutions du marché photovoltaïque qui transforment l'énergie solaire en 2025.",
    content: `L'année 2025 confirme l'essor spectaculaire du photovoltaïque en France, porté par des innovations technologiques majeures et une démocratisation croissante.

Les tendances marquantes :
- Démocratisation des panneaux à haut rendement
- Développement de l'autoconsommation collective
- Intégration architecturale innovante
- Solutions de stockage plus accessibles

Le marché français du photovoltaïque connaît une croissance exceptionnelle, soutenue par des politiques publiques favorables et une prise de conscience environnementale croissante des particuliers.`,
    category: "Photovoltaïque",
    date: "25/08/2025",
    readTime: "6mn",
    image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Photovoltaïque", "Innovation", "Marché"]
  },
  {
    id: 10,
    title: "Audit énergétique : la clé d'une rénovation réussie",
    excerpt: "Comprendre l'importance de l'audit énergétique dans votre projet de rénovation et comment il optimise vos investissements.",
    content: `L'audit énergétique est devenu l'étape incontournable de tout projet de rénovation énergétique ambitieux. Bien plus qu'un simple diagnostic, c'est la feuille de route de votre transition énergétique.

Les bénéfices d'un audit énergétique :
- Identification précise des déperditions thermiques
- Priorisation des travaux selon leur efficacité
- Estimation des économies d'énergie réalisables
- Optimisation du retour sur investissement

Un audit bien réalisé par un professionnel certifié vous permet de cibler les interventions les plus rentables et d'éviter les travaux inutiles.`,
    category: "Rénovation énergétique",
    date: "18/08/2025",
    readTime: "5mn",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Audit", "Diagnostic", "Rénovation"]
  },
  { id: 12, title: 'MaPrimeRénov’ : comment lire les taux d’aide sans se tromper', excerpt: 'Un rappel des taux selon les catégories de revenus et des plafonds de dépenses éligibles.', content: 'Un rappel des taux selon les catégories de revenus et des plafonds de dépenses éligibles.', category: 'Aides', date: '03/10/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Aides'] },
  { id: 13, title: 'Maison classée E, F ou G : quelles premières questions poser ?', excerpt: 'DPE, audit, chauffage et isolation : les informations utiles avant de prioriser les travaux.', content: 'DPE, audit, chauffage et isolation : les informations utiles avant de prioriser les travaux.', category: 'Rénovation énergétique', date: '29/09/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Rénovation énergétique'] },
  { id: 14, title: 'Pourquoi un devis de rénovation doit être lu ligne par ligne', excerpt: 'Prix, quantités, prestations, TVA et conditions : les éléments à contrôler avant de signer.', content: 'Prix, quantités, prestations, TVA et conditions : les éléments à contrôler avant de signer.', category: 'Conseils', date: '24/09/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Conseils'] },
  { id: 15, title: 'RGE : ce que cette qualification signifie réellement', excerpt: 'À quoi sert la qualification RGE et pourquoi elle ne remplace pas l’analyse du devis et de l’entreprise.', content: 'À quoi sert la qualification RGE et pourquoi elle ne remplace pas l’analyse du devis et de l’entreprise.', category: 'Conseils', date: '18/09/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Conseils'] },
  { id: 16, title: 'PAC Air/Eau : les éléments qui influencent le dimensionnement', excerpt: 'Surface, isolation, émetteurs et température de départ : pourquoi chaque logement est différent.', content: 'Surface, isolation, émetteurs et température de départ : pourquoi chaque logement est différent.', category: 'Pompe à chaleur', date: '11/09/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Pompe à chaleur'] },
  { id: 17, title: 'PAC Air/Air : dans quels logements cette solution peut-elle être pertinente ?', excerpt: 'Une présentation claire des usages, limites et points de vigilance.', content: 'Une présentation claire des usages, limites et points de vigilance.', category: 'Pompe à chaleur', date: '04/09/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Pompe à chaleur'] },
  { id: 18, title: 'Isolation des combles : pourquoi l’état de l’existant compte autant', excerpt: 'Ventilation, humidité, accès et épaisseur disponible : les vérifications à effectuer.', content: 'Ventilation, humidité, accès et épaisseur disponible : les vérifications à effectuer.', category: 'Isolation', date: '28/08/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Isolation'] },
  { id: 19, title: 'Isolation extérieure : façade, ponts thermiques et contraintes du bâtiment', excerpt: 'Les questions techniques à poser avant de comparer plusieurs propositions.', content: 'Les questions techniques à poser avant de comparer plusieurs propositions.', category: 'Isolation', date: '21/08/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Isolation'] },
  { id: 20, title: 'Plancher bas : quand cette isolation apporte-t-elle un vrai gain de confort ?', excerpt: 'Comprendre les configurations compatibles et les limites de cette intervention.', content: 'Comprendre les configurations compatibles et les limites de cette intervention.', category: 'Isolation', date: '14/08/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Isolation'] },
  { id: 21, title: 'Chauffe-eau thermodynamique : que faut-il vérifier avant l’installation ?', excerpt: 'Volume, emplacement, ventilation et besoins d’eau chaude : les points essentiels.', content: 'Volume, emplacement, ventilation et besoins d’eau chaude : les points essentiels.', category: 'Eau chaude', date: '07/08/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Eau chaude'] },
  { id: 22, title: 'Photovoltaïque : autoconsommation ou vente du surplus ?', excerpt: 'Deux modes de valorisation à comparer selon votre profil de consommation.', content: 'Deux modes de valorisation à comparer selon votre profil de consommation.', category: 'Photovoltaïque', date: '31/07/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Photovoltaïque'] },
  { id: 23, title: 'Batterie solaire : dans quels cas le stockage peut-il avoir du sens ?', excerpt: 'Autoconsommation, usages du soir et dimensionnement : une approche sans promesse de rentabilité automatique.', content: 'Autoconsommation, usages du soir et dimensionnement : une approche sans promesse de rentabilité automatique.', category: 'Photovoltaïque', date: '24/07/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Photovoltaïque'] },
  { id: 24, title: 'Éco-PTZ : à quoi sert ce financement ?', excerpt: 'Le principe du prêt à taux zéro et les points à vérifier avec les professionnels concernés.', content: 'Le principe du prêt à taux zéro et les points à vérifier avec les professionnels concernés.', category: 'Financement', date: '17/07/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Financement'] },
  { id: 25, title: 'TVA à taux réduit : quels travaux peuvent en bénéficier ?', excerpt: 'Une explication pédagogique du taux réduit et de ses conditions générales.', content: 'Une explication pédagogique du taux réduit et de ses conditions générales.', category: 'Aides', date: '10/07/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Aides'] },
  { id: 26, title: 'CEE : pourquoi le montant ne doit pas être annoncé sans étude', excerpt: 'Le montant dépend notamment du logement, de l’opération et des règles applicables à la fiche concernée.', content: 'Le montant dépend notamment du logement, de l’opération et des règles applicables à la fiche concernée.', category: 'Aides', date: '03/07/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Aides'] },
  { id: 27, title: 'Comment comparer deux devis de pompe à chaleur ?', excerpt: 'Ne comparez pas uniquement le prix : équipement, puissance, pose, garanties et prestations comptent.', content: 'Ne comparez pas uniquement le prix : équipement, puissance, pose, garanties et prestations comptent.', category: 'Pompe à chaleur', date: '26/06/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Pompe à chaleur'] },
  { id: 28, title: 'Comment préparer une demande de rénovation énergétique ?', excerpt: 'Les informations à réunir pour obtenir une première étude plus utile.', content: 'Les informations à réunir pour obtenir une première étude plus utile.', category: 'Rénovation énergétique', date: '19/06/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Rénovation énergétique'] },
  { id: 29, title: 'Les erreurs fréquentes quand on commence une rénovation', excerpt: 'Se précipiter sur un équipement avant d’avoir regardé l’ensemble du logement peut conduire à de mauvais choix.', content: 'Se précipiter sur un équipement avant d’avoir regardé l’ensemble du logement peut conduire à de mauvais choix.', category: 'Conseils', date: '12/06/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Conseils'] },
  { id: 30, title: 'DPE : ce qu’il faut regarder au-delà de la lettre', excerpt: 'Étiquette, consommation, émissions et recommandations : comment utiliser le DPE comme point de départ.', content: 'Étiquette, consommation, émissions et recommandations : comment utiliser le DPE comme point de départ.', category: 'DPE', date: '05/06/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['DPE'] },
  { id: 31, title: 'Audit énergétique : à quoi sert-il dans un projet ambitieux ?', excerpt: 'L’audit permet de construire un scénario de travaux cohérent et de mesurer les progrès attendus.', content: 'L’audit permet de construire un scénario de travaux cohérent et de mesurer les progrès attendus.', category: 'Rénovation énergétique', date: '29/05/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Rénovation énergétique'] },
  { id: 32, title: 'Confort d’été : l’isolation ne sert pas qu’en hiver', excerpt: 'Toiture, murs, protections solaires et ventilation participent au confort lors des fortes chaleurs.', content: 'Toiture, murs, protections solaires et ventilation participent au confort lors des fortes chaleurs.', category: 'Confort', date: '22/05/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Confort'] },
  { id: 33, title: 'Pourquoi le choix d’un professionnel doit venir après la définition du besoin', excerpt: 'Avant de chercher un devis, il faut savoir ce que l’on veut réellement faire et pourquoi.', content: 'Avant de chercher un devis, il faut savoir ce que l’on veut réellement faire et pourquoi.', category: 'Conseils', date: '15/05/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Conseils'] },
  { id: 34, title: 'Projet solaire : quelles informations donner dès le premier échange ?', excerpt: 'Orientation, toiture, consommation et objectif du projet permettent de mieux cadrer une étude.', content: 'Orientation, toiture, consommation et objectif du projet permettent de mieux cadrer une étude.', category: 'Photovoltaïque', date: '08/05/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Photovoltaïque'] },
  { id: 35, title: 'Rénovation énergétique : par quoi commencer quand tout semble prioritaire ?', excerpt: 'Une méthode simple pour hiérarchiser les travaux sans multiplier les décisions à la fois.', content: 'Une méthode simple pour hiérarchiser les travaux sans multiplier les décisions à la fois.', category: 'Rénovation énergétique', date: '01/05/2026', readTime: "5mn", image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', tags: ['Rénovation énergétique'] },

];

/** Transforme un titre en identifiant d'URL (sans accents, en minuscules). */
export function slugify(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’`]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const articleSlug = (article: BlogArticle): string => slugify(article.title);

export const findArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find((article) => articleSlug(article) === slug);

/**
 * Un article n'est proposé à Google que s'il apporte un vrai contenu :
 * les articles dont le texte se limite à leur résumé restent consultables
 * mais ne sont pas indexés tant qu'ils ne sont pas rédigés.
 */
export const isArticleIndexable = (article: BlogArticle): boolean =>
  article.content.trim() !== article.excerpt.trim() && article.content.trim().length >= 400;
