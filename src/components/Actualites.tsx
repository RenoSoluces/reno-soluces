import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface ActualitesProps {
  onPageChange?: (page: string) => void;
}

const Actualites: React.FC<ActualitesProps> = ({ onPageChange }) => {
  const articles = [
    {
      category: 'Actualités',
      title: 'MaPrimeRénov\' : ce que change la nouvelle réglementation pour les mandataires dès juillet 2025',
      date: '07/07/2025',
      readTime: '3mn',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      category: 'Conseils énergétiques',
      title: 'Canicule 2025 : pourquoi une maison bien isolée protège aussi de la chaleur',
      date: '16/06/2025',
      readTime: '3mn',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      category: 'Non classé',
      title: 'Qu\'est-ce que la rénovation performante ?',
      date: '12/06/2025',
      readTime: '4mn',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Actualités et <span className="text-green-500">conseils</span>
          </h2>
        </div>

        {/* Sous-titre */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Retrouvez tous nos conseils consommation et notre décryptage de l'actualité de la rénovation énergétique.
          </p>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>

                {/* Métadonnées */}
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Le blog de Tucoenergie" */}
        <div className="text-center">
          <button 
            onClick={() => onPageChange && onPageChange('notre-blog')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Le blog de Reno Soluces
          </button>
        </div>
      </div>
    </section>
  );
};

export default Actualites;