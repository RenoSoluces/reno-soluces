import React from 'react';
import { Check } from 'lucide-react';
import PlancherBas1 from '../../assets/PlancherBas1.jpg';

interface HeroSectionProps {
  onPageChange?: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPageChange }) => {  
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Partie gauche - Contenu */}
              <div className="bg-emerald-900 p-12 text-white flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-8 leading-tight">
                  Isolez vos planchers bas<br />
                  pour éliminer l'humidité<br />
                  et gagner en confort
                </h1>

                <div className="space-y-4 mb-8">
                  {[
                    "Suppression des remontées d'humidité",
                    "Jusqu'à 10% d'économies d'énergie supplémentaires",
                    "Éligible aux aides MaPrimeRénov' & CEE",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-800" />
                      </div>
                      <span className="text-lg">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <button 
                  onClick={() => onPageChange && onPageChange('simulateur-isolation')}
                  className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors w-full lg:w-auto">
                    Estimer mes aides
                  </button>
                  <p className="text-green-200 text-sm">
                    100% gratuit et sans engagement.
                  </p>
                </div>
              </div>

              {/* Partie droite - Image */}
              <div className="relative">
                <img
                  src={PlancherBas1}
                  alt="Isolation des planchers bas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;