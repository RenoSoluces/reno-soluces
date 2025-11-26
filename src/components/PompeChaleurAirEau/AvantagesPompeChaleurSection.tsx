import React from 'react';
import { CheckCircle } from 'lucide-react';

const avantages = [
  "Économies d'énergie jusqu'à 60% par rapport au chauffage classique",
  "Production de chauffage et d'eau chaude sanitaire",
  "Utilisation d'une énergie renouvelable et gratuite",
  "Compatible avec les radiateurs et plancher chauffant existants",
  "Fonctionnement même par températures négatives",
  "Éligibilité aux aides financières (MaPrimeRénov', CEE)",
];

const AvantagesPompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Les <span className="text-emerald-700">avantages</span> de la pompe à chaleur Air/Eau
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {avantages.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvantagesPompeChaleurSection;