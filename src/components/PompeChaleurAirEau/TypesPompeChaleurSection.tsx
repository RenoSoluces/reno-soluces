import React from 'react';
import { Home, Thermometer, Droplets } from 'lucide-react';

const TypesPompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Les différents types de pompes à chaleur Air/Eau
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Choisissez la configuration adaptée à votre logement et vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Monobloc
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tous les composants sont regroupés dans l'unité extérieure. 
              Installation simplifiée avec circulation d'eau entre l'extérieur et l'intérieur. 
              Idéale pour les rénovations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Bibloc
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Composée d'une unité extérieure et d'une unité intérieure reliées par 
              des liaisons frigorifiques. Performances optimales et installation 
              plus technique. Recommandée pour le neuf.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Avec ECS intégrée
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Intègre un ballon d'eau chaude sanitaire pour une solution complète. 
              Chauffage et eau chaude produits par un seul équipement. 
              Optimisation de l'espace et des performances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesPompeChaleurSection;