import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { blogArticles, articleSlug, findArticleBySlug } from '../../data/blogArticles';
import type { BlogArticle } from '../../data/blogArticles';


const categories = ["Tous", "Actualités", "Conseils énergétiques", "Photovoltaïque", "Chauffage", "Isolation", "Rénovation énergétique"];

interface NotreBlogProps {
  onPageChange: (page: string) => void;
  /** Identifiant (slug) de l'article ouvert, issu de l'URL. */
  currentSlug?: string | null;
  /** Appelé à l'ouverture ou à la fermeture d'un article, pour mettre à jour l'URL. */
  onArticleChange?: (slug: string | null) => void;
}

const NotreBlog: React.FC<NotreBlogProps> = ({ onPageChange, currentSlug = null, onArticleChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const selectedArticle: BlogArticle | null = currentSlug ? findArticleBySlug(currentSlug) ?? null : null;
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
            onClick={() => onArticleChange?.(null)}
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
                onClick={() => onArticleChange?.(articleSlug(article))}
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