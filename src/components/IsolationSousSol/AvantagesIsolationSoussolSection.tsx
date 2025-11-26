import React from 'react';
import { CheckCircle } from 'lucide-react';

const avantages = [
  "Suppression des sols froids et amélioration du confort",
  "Réduction des remontées d'humidité",
  "Économies d'énergie de 7 à 10% supplémentaires",
  "Amélioration de la qualité de l'air intérieur",
  "Valorisation de votre bien immobilier",
  "Éligibilité aux aides financières (MaPrimeRénov', CEE)",
];

const AvantagesIsolationSoussolSection: React.FC = () => {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Les <span className="text-emerald-700">avantages</span> de l'isolation des planchers bas
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

export default AvantagesIsolationSoussolSection;