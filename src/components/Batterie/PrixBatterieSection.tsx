import React from 'react';
import Batterie2 from '../../assets/Batterie2.jpg';

interface PrixBatterieSectionProps {
  onPageChange?: (page: string) => void;
}
 
const PrixBatterieSection: React.FC<PrixBatterieSectionProps> = ({ onPageChange }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Partie gauche - Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Quel est le prix d&apos;une batterie pour<br />
              panneau solaire ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Le prix d&apos;une batterie de stockage solaire varie selon ses
              <strong> caractéristiques techniques</strong> : puissance de sortie, capacité de stockage,
              rendement... Mais le facteur principal reste le <strong>type de batterie</strong>.
              En moyenne, les prix commencent autour de <strong>80 €/kWh</strong> (pour les batteries
              au plomb ouvert) et peuvent atteindre <strong>1 000 €/kWh</strong> pour les modèles lithium.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Malgré une baisse des coûts ces dernières années, le <strong>prix de la batterie solaire</strong>
              reste un frein majeur. L&apos;<strong>ADEME</strong> estime qu&apos;une batterie peut
              <span className="text-green-600 underline cursor-pointer hover:text-green-700 transition-colors">
                &nbsp;doubler le coût d&apos;une installation photovoltaïque
              </span>
              &nbsp;de faible puissance sur toute sa durée de vie. Ce coût a donc un
              impact direct sur la <strong>rentabilité du système</strong>.
            </p>

            {/* Bouton CTA */}
            <div className="pt-4">
              <button 
                onClick={() => onPageChange && onPageChange('contact')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Contacter un Expert
              </button>
            </div>
          </div>

          {/* Partie droite - Image illustrative */}
          <div className="relative">
            <img
              src={Batterie2}
              alt="Installation de batterie solaire"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrixBatterieSection;
