import React from 'react';
import { Thermometer, Droplets, Home } from 'lucide-react';

const PourquoiIsolerPlancherSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi isoler vos <span className="text-emerald-600">planchers bas</span> ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            L'isolation des planchers bas peut contribuer à améliorer le confort thermique du logement, selon ses caractéristiques et les travaux réalisés.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Thermometer className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Suppression du sol froid</h3>
            <p className="text-gray-600 text-center">
              Fini la sensation désagréable de sol glacé en hiver. Vos pieds restent au chaud !
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Droplets className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Élimination de l'humidité</h3>
            <p className="text-gray-600 text-center">
              Supprime les remontées d'humidité depuis le sous-sol ou vide sanitaire.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Home className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Économies d'énergie</h3>
            <p className="text-gray-600 text-center">
              Une réduction potentielle des besoins de chauffage, variable selon le logement et les travaux réalisés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiIsolerPlancherSection;