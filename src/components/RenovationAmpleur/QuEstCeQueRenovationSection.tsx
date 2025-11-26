import React from 'react';
import Ampleur2 from '../../assets/Ampleur2.jpg';

const QuEstCeQueRenovationSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Qu'est-ce que la rénovation d'ampleur ?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              La <strong>rénovation d'ampleur</strong> (ou rénovation globale) consiste à réaliser 
              plusieurs travaux de rénovation énergétique en une seule fois pour atteindre un gain 
              énergétique d'au moins <strong>55%</strong> par rapport à la situation initiale.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Cette approche globale permet d'optimiser les performances énergétiques de votre logement 
              en traitant tous les postes de déperdition : isolation, chauffage, ventilation, 
              menuiseries... pour un résultat optimal.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Contrairement aux rénovations par gestes isolés, la rénovation d'ampleur vous fait 
              bénéficier d'aides financières majorées et d'un accompagnement personnalisé avec 
              <strong> Mon Accompagnateur Rénov'</strong>.
            </p>
          </div>

          <div className="relative">
            <img
              src={Ampleur2}
              alt="Maison en cours de rénovation d'ampleur"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuEstCeQueRenovationSection;