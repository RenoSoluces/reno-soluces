import React from 'react';
import { ArrowRight } from 'lucide-react';
import Projet1 from '../assets/Projet1.jpeg';
import Projet3 from '../assets/Projet3.jpeg';
import Projet4 from '../assets/Projet4.jpeg';

interface ProduitsProps {
  onPageChange?: (page: string) => void;
}

const Produits: React.FC<ProduitsProps> = ({ onPageChange }) => {
  const cards = [
    {
      title: 'Panneaux photovoltaïques',
      subtitle: 'Production solaire',
      description: 'Produisez une partie de votre électricité grâce à l’énergie solaire.',
      image: Projet1,
      page: 'panneaux-photovoltaiques',
    },
    {
      title: 'Pompe à chaleur',
      subtitle: 'Chauffage performant',
      description: 'Découvrez les solutions de pompe à chaleur adaptées à votre logement.',
      image: Projet3,
      page: 'pompe-chaleur-air-eau',
    },
    {
      title: 'Isoler ma maison',
      subtitle: 'Confort thermique',
      description: 'Améliorez le confort thermique de votre logement grâce à l’isolation.',
      image: Projet4,
      page: 'isolation-exterieur',
    },
  ];

  const handleCardClick = (card: typeof cards[0]) => {
    if (card.page && onPageChange) {
      onPageChange(card.page);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-4 mt-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Réalisez votre projet de{' '}
            <span className="text-green-500">
              rénovation énergétique
            </span>
          </h2>
        </div>

        {/* Sous-titre */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Nos solutions adaptées à vos besoins
          </p>
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group ${
                card.page ? 'cursor-pointer' : ''
              }`}
              onClick={() => handleCardClick(card)}
            >
              {/* Carte produit */}
              <div className="bg-emerald-900 text-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-96">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Contenu */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Titre */}
                    <h3 className="text-lg font-bold mb-3 leading-tight min-h-[3.5rem] flex items-center">
                      {card.title}
                    </h3>

                    {/* Mise en avant */}
                    <div className="mb-2">
                      <span className="text-xl font-bold text-green-300">
                        {card.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm mb-4 opacity-90">
                      {card.description}
                    </p>
                  </div>

                  {/* Bouton flèche */}
                  <div className="flex justify-center mt-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <ArrowRight
                        className="text-white"
                        size={18}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Voir toutes nos solutions" */}
        <div className="text-center">
          <button
            onClick={() =>
              onPageChange && onPageChange('solutions')
            }
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md"
          >
            Voir toutes nos solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Produits;