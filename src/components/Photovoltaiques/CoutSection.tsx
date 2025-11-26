// components/Photovoltaiques/CoutSection.tsx
import React from 'react';
import Panneaux3 from '../../assets/Panneaux3.jpg';

interface CoutSectionProps {
  onPageChange: (page: string) => void;
}

const CoutSection: React.FC<CoutSectionProps> = ({ onPageChange }) => (
  <section className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenu à gauche */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Combien coûte une<br /> installation solaire ?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Le <span className="text-green-500 underline cursor-pointer hover:text-green-600 transition-colors">
            <button 
              onClick={() => onPageChange('prix-panneaux-solaires')}
              className="text-green-500 underline cursor-pointer hover:text-green-600 transition-colors bg-transparent border-none p-0"
            >
              coût d'un système photovoltaïque
            </button>
            </span>
          </p>

          <ul className="space-y-3 text-gray-700">
            {[
              "La puissance installée, déterminée selon vos besoins énergétiques et l'ensoleillement de votre toiture ;",
              "La technique de pose (généralement en surimposition sur la toiture existante) ;",
              "Le type de panneaux solaires (monocristallins ou polycristallins, avec des rendements différents) ;",
              "Votre profil de consommation (autoconsommation partielle ou totale) ;",
              "Les frais de raccordement au réseau électrique."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>

          <p className="text-gray-700 leading-relaxed">
            L'étude énergétique permet de dimensionner une installation parfaitement adaptée à votre maison pour maximiser votre rentabilité.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onPageChange('simulateur-photovoltaique')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Je réalise une étude énergétique
            </button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="relative">
          <img
            src={Panneaux3}
            alt="Maison équipée de panneaux solaires"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CoutSection;