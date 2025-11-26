import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface PourquoiInstallerBatterieSectionProps {
  onPageChange?: (page: string) => void;
}

const PourquoiInstallerBatterieSection: React.FC<PourquoiInstallerBatterieSectionProps> = ({ onPageChange }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte explicatif */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Pourquoi installer une<br />batterie solaire ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              En optant pour <strong>l’autoconsommation</strong>, une batterie solaire vous permet
              de <strong>profiter pleinement de l’électricité produite</strong> par vos panneaux. 
              Vous stockez l’énergie générée pendant la journée pour l’utiliser le soir, 
              la nuit ou lors des pics de consommation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Cette solution vous aide à <strong>réduire votre dépendance au réseau public</strong> 
              et à réaliser davantage d’économies sur vos factures d’énergie.
            </p>

            <button 
              onClick={() => onPageChange && onPageChange('contact')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Contactez un expert 
            </button>
          </div>

          {/* Illustration batterie */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center">
                <div className="relative">
                  
                  {/* Panneau solaire */}
                  <div className="w-32 h-20 bg-blue-900 rounded-lg mb-4 mx-auto grid grid-cols-4 gap-1 p-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="bg-blue-800 rounded-sm" />
                    ))}
                  </div>

                  {/* Flèche */}
                  <div className="flex justify-center mb-4">
                    <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                  </div>

                  {/* Batterie */}
                  <div className="w-24 h-32 bg-gray-600 rounded-lg mx-auto relative">
                    <div className="absolute inset-2 bg-gray-500 rounded flex items-center justify-center">
                      <Zap className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PourquoiInstallerBatterieSection;
