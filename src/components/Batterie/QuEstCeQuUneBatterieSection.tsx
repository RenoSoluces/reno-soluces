import React from 'react';
import { Sun, Moon, Battery, Zap } from 'lucide-react';

const QuEstCeQuUneBatterieSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Illustration */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                
                {/* Jour */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-8 h-8 text-yellow-800" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-4">
                    La batterie se charge<br />pendant la journée
                  </p>
                  <div className="w-20 h-12 bg-gray-300 rounded mx-auto flex items-center justify-center">
                    <Battery className="w-8 h-8 text-gray-600" />
                  </div>
                </div>

                {/* Nuit */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Moon className="w-8 h-8 text-blue-200" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-4">
                    L'énergie stockée est<br />utilisée en différé
                  </p>
                  <div className="w-20 h-12 bg-gray-300 rounded mx-auto flex items-center justify-center">
                    <Zap className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Qu’est-ce qu’une batterie<br />pour panneau solaire ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Une <strong>batterie solaire</strong> permet de <strong>stocker l’électricité produite</strong> par vos
              <strong> panneaux photovoltaïques</strong>, afin de l’utiliser plus tard, même en
              l’absence de soleil. Elle répond à l’un des défis majeurs de l’énergie solaire : 
              <strong> son intermittence</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed">
              La production d’électricité dépend du soleil, et cesse donc la nuit ou baisse en cas
              de mauvais temps. Or, nos besoins en énergie ne suivent pas forcément ce rythme. Grâce
              au <strong>stockage via batterie</strong>, vous pouvez <strong>consommer votre propre électricité
              à tout moment</strong> : le matin tôt, en soirée ou même la nuit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuEstCeQuUneBatterieSection;
