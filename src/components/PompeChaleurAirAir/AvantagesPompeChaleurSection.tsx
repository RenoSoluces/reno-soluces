import React from 'react';
import { CheckCircle } from 'lucide-react';

const avantages = [
  "Chauffage en hiver et climatisation en été",
  "Économies d'énergie jusqu'à 50% par rapport à l'électrique",
  "Installation rapide sans gros travaux",
  "Contrôle précis de la température pièce par pièce",
  "Fonctionnement silencieux et discret",
  "Filtration et purification de l'air intérieur",
];

const AvantagesPompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Les <span className="text-emerald-700">avantages</span> de la pompe à chaleur Air/Air
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