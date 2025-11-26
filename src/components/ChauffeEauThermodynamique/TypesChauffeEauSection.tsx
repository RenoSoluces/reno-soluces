import React from 'react';
import { Home, Wind, Building } from 'lucide-react';

const TypesChauffeEauSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Les différents types de chauffe-eau thermodynamique
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Choisissez le modèle adapté à votre logement et vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Sur air ambiant
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Puise les calories dans l'air du local où il est installé (garage, buanderie, cave). 
              Solution la plus courante et économique. Nécessite un local d'au moins 20 m³.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Sur air extérieur
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Capte les calories directement dans l'air extérieur via des gaines. 
              Idéal quand le local d'installation est trop petit. Fonctionne même par 
              températures négatives.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Sur air extrait
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Récupère les calories de l'air vicié évacué par la VMC. 
              Solution optimale qui combine production d'eau chaude et renouvellement d'air. 
              Très haute performance énergétique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesChauffeEauSection;