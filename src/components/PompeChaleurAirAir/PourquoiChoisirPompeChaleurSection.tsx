import React from 'react';
import { Snowflake, Sun, Euro } from 'lucide-react';

const PourquoiChoisirPompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi choisir une <span className="text-emerald-600">pompe à chaleur Air/Air</span> ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            La solution 2-en-1 pour votre confort thermique toute l'année.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 mx-auto">
              <Snowflake className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Réversible</h3>
            <p className="text-gray-600 text-center">
              Chauffage en hiver et climatisation en été. Un seul équipement pour un confort optimal toute l'année.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Euro className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Économique</h3>
            <p className="text-gray-600 text-center">
              Jusqu'à 50% d'économies sur vos factures par rapport au chauffage électrique classique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4 mx-auto">
              <Sun className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Installation simple</h3>
            <p className="text-gray-600 text-center">
              Pas de gros travaux, installation rapide et discrète. Compatible avec tous types de logements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiChoisirPompeChaleurSection;