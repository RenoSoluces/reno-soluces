import React from 'react';
import { CheckCircle } from 'lucide-react';

const avantages = [
  "Économies d'énergie jusqu'à 70% par rapport à l'électrique",
  "Utilisation d'une énergie renouvelable et gratuite",
  "Installation simple et rapide par un professionnel",
  "Éligibilité aux aides financières (MaPrimeRénov', CEE)",
  "Fonctionnement silencieux et discret",
  "Résistance électrique de secours intégrée",
];

const AvantagesChauffeEauSection: React.FC = () => {
  return (
    <section className="bg-emerald-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Les <span className="text-emerald-700">avantages</span> du chauffe-eau thermodynamique
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

export default AvantagesChauffeEauSection;