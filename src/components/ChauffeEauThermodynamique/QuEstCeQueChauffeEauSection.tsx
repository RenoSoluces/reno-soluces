import React from 'react';
import { Wind, Zap } from 'lucide-react';
import BallonThermo2 from '../../assets/BallonThermo2.jpg';


const QuEstCeQueChauffeEauSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Illustration */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="relative">
                {/* Chauffe-eau */}
                <div className="w-24 h-48 bg-gray-600 rounded-lg relative mx-auto">
                  <img
                    src={BallonThermo2}
                    alt="Chauffe-eau thermodynamique"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Air extérieur */}
                <div className="absolute -left-16 top-8">
                  <div className="flex items-center space-x-2">
                    <Wind className="w-6 h-6 text-blue-500" />
                    <span className="text-sm text-gray-600">Air extérieur</span>
                  </div>
                </div>
                
                {/* Électricité */}
                <div className="absolute -right-16 bottom-8">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <span className="text-sm text-gray-600">Électricité</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Qu'est-ce qu'un chauffe-eau<br />thermodynamique ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Un <strong>chauffe-eau thermodynamique</strong> est un système de production d'eau chaude 
              sanitaire qui utilise une <strong>pompe à chaleur</strong> pour récupérer les calories 
              présentes dans l'air ambiant et les transférer à l\'eau du ballon.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Cette technologie permet de <strong>diviser par 3 votre consommation électrique</strong> 
              par rapport à un chauffe-eau électrique classique, tout en utilisant une énergie 
              renouvelable et gratuite : l'air.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Le chauffe-eau thermodynamique fonctionne selon le même principe qu'un réfrigérateur, 
              mais inversé : au lieu d'extraire la chaleur, il la récupère pour chauffer l'eau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuEstCeQueChauffeEauSection;