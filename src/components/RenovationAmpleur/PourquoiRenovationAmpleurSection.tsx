import React from 'react';
import { TrendingDown, Home, Euro } from 'lucide-react';

const PourquoiRenovationAmpleurSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi choisir une <span className="text-emerald-600">rénovation d'ampleur</span> ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Une approche globale pour des résultats exceptionnels et des aides maximisées.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <TrendingDown className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Économies maximales</h3>
            <p className="text-gray-600 text-center">
              Jusqu'à 85% d'économies d'énergie en traitant tous les postes de déperdition en une seule fois.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Euro className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Aides majorées</h3>
            <p className="text-gray-600 text-center">
              Bénéficiez d'aides financières renforcées pouvant couvrir jusqu'à 90% du coût des travaux.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Home className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Confort optimal</h3>
            <p className="text-gray-600 text-center">
              Transformation complète de votre logement pour un confort thermique et acoustique exceptionnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiRenovationAmpleurSection;