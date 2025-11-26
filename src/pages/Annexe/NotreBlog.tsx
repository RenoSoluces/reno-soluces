import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface BlogArticle {
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

const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "MaPrimeRénov' : ce que change la nouvelle réglementation pour les mandataires dès juillet 2025",
    excerpt: "Découvrez les principales évolutions de MaPrimeRénov' et leur impact sur vos projets de rénovation énergétique.",
    content: `La réglementation MaPrimeRénov' évolue constamment pour s'adapter aux enjeux de la transition énergétique. Les dernières modifications apportent des clarifications importantes sur les conditions d'éligibilité et les montants accordés.

- L'accompagnement renforcé pour les rénovations d'ampleur

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
- Gain énergétique d'au moins 35%
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
- Cellules à hétérojonction avec des rendements supérieurs à 22%
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

Le choix dépend de vos priorités : budget, performance thermique, impact environnemental et confort d'été. Nos experts vous conseillent selon votre situation spécifique.`,
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
    id: 8,
    title: "Rénovation d'ampleur : reprise du dispositif au 30 septembre 2025",
    excerpt: "Après une pause estivale, le dispositif de rénovation d'ampleur reprend avec des nouveautés importantes pour les ménages.",
    content: `Le dispositif de rénovation d'ampleur, temporairement suspendu pendant l'été, reprend officiellement le 30 septembre 2025 avec des améliorations significatives.

Les nouveautés du dispositif :
- Simplification des démarches administratives
- Élargissement des critères d'éligibilité
- Accompagnement renforcé par des conseillers spécialisés
- Nouveaux barèmes d'aides plus avantageux

Cette reprise s'accompagne d'une enveloppe budgétaire renforcée pour répondre à la forte demande des ménages français souhaitant améliorer la performance énergétique de leur logement.`,
    category: "Actualités",
    date: "30/09/2025",
    readTime: "5mn",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    tags: ["Rénovation d'ampleur", "Aides", "Réglementation"]
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
  }
];

const categories = ["Tous", "Actualités", "Conseils énergétiques", "Photovoltaïque", "Chauffage", "Isolation", "Rénovation énergétique"];

const NotreBlog: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedArticle) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Header activeSection="blog" onSectionChange={() => {}} onPageChange={onPageChange} />
        
        {/* Article complet */}
        <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Retour aux articles</span>
          </button>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  {selectedArticle.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {selectedArticle.title}
              </h1>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer onPageChange={onPageChange} />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="blog" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Le blog de Reno Soluces
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Retrouvez tous nos conseils, actualités et décryptages sur la rénovation énergétique, 
            le photovoltaïque et les solutions pour améliorer votre habitat.
          </p>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Barre de recherche */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Badge catégorie */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  {/* Titre */}
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Extrait */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Métadonnées */}
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter */}
        <section className="bg-emerald-900 text-white p-12 rounded-2xl text-center shadow-xl mt-16">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Recevez nos derniers articles et conseils directement dans votre boîte mail. 
            Pas de spam, que du contenu utile pour vos projets de rénovation énergétique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <button className="bg-green-400 hover:bg-green-300 text-green-800 px-6 py-3 rounded-full font-semibold transition-colors">
              S'abonner
            </button>
          </div>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default NotreBlog;