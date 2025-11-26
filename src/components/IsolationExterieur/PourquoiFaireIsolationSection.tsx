// src/components/IsolationExterieure/PourquoiFaireIsolationSection.tsx
import React from 'react';
import { Flame, Thermometer, Home } from 'lucide-react';

const PourquoiFaireIsolationSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi faire une <span className="text-emerald-600">isolation extérieure</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            L'isolation thermique par l'extérieur (ITE) améliore le confort de votre logement tout en réduisant vos factures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Flame className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Réduction de la consommation énergétique</h3>
            <p className="text-gray-600 text-center">
              Moins de pertes de chaleur, donc moins de chauffage nécessaire. Jusqu’à 25% d’économies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Thermometer className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Amélioration du confort</h3>
            <p className="text-gray-600 text-center">
              Température intérieure plus stable en été comme en hiver.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Home className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Valorisation du bien</h3>
            <p className="text-gray-600 text-center">
              Une maison bien isolée est plus attractive et performante à la revente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiFaireIsolationSection;
