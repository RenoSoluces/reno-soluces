import React from 'react';
import { Home, Grid, Building } from 'lucide-react';

const TypesPompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Les différents types de pompes à chaleur Air/Air
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Choisissez la configuration adaptée à votre logement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Monosplit
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Une unité extérieure reliée à une seule unité intérieure. 
              Solution idéale pour climatiser et chauffer une pièce principale 
              (salon, chambre). Installation simple et économique.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Multisplit
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Une unité extérieure reliée à plusieurs unités intérieures 
              (2 à 5 généralement). Permet de traiter plusieurs pièces 
              avec un contrôle indépendant de chaque zone.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Gainable
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Unité intérieure dissimulée dans les combles avec distribution 
              par gaines et bouches d'aération. Solution discrète pour 
              traiter tout le logement de manière homogène.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesPompeChaleurSection;