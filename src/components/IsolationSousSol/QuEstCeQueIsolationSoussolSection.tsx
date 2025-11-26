import React from 'react';
import PlancherBas2 from '../../assets/PlancherBas2.jpg';

const QuEstCeQueIsolationSoussolSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - Contenu texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Qu'est-ce que l'isolation des planchers bas ?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              L'isolation des planchers bas consiste à isoler le sol du rez-de-chaussée de votre habitation, 
              généralement par le dessous (depuis le sous-sol, vide sanitaire ou cave). Cette technique permet 
              de limiter les déperditions thermiques par le sol et d'améliorer significativement le confort.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Les planchers bas représentent environ 7 à 10% des pertes de chaleur d'une maison mal isolée. 
              En isolant cette zone souvent négligée, vous supprimez les remontées d'humidité et la sensation 
              de "sol froid" désagréable en hiver.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Cette isolation est particulièrement recommandée pour les maisons avec sous-sol, vide sanitaire 
              ou cave non chauffée, où l'air froid remonte naturellement vers les pièces de vie.
            </p>
          </div>

          {/* Partie droite - Image */}
          <div className="relative">
            <img
              src={PlancherBas2}
              alt="Isolation des planchers bas en cours"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuEstCeQueIsolationSoussolSection;