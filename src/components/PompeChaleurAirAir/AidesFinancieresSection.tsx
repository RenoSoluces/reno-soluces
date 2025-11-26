import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AidesFinancieresSectionProps {
  onPageChange?: (page: string) => void;
}

const AidesFinancieresSection: React.FC<AidesFinancieresSectionProps> = ({ onPageChange }) => {
  return (
    <section className="bg-emerald-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Aides disponibles pour votre <span className="text-green-300">pompe à chaleur Air/Air</span>
        </h2>
        <p className="text-lg text-green-100 mb-10">
          Bien que moins aidée que l'Air/Eau, la pompe à chaleur Air/Air reste éligible à certaines aides.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            {
              title: 'Certificats d\'Économies d\'Énergie (CEE)',
              desc: 'Prime versée par les fournisseurs d\'énergie pour l\'installation d\'une pompe à chaleur Air/Air performante.'
            },
            {
              title: 'TVA réduite à 10%',
              desc: 'Taux de TVA préférentiel sur la fourniture et la pose de votre équipement.'
            },
            {
              title: 'Aides locales',
              desc: 'Certaines collectivités proposent des subventions pour les équipements de climatisation réversible.'
            },
            {
              title: 'Prêt à taux avantageux',
              desc: 'Possibilité de financement à taux préférentiel selon votre situation.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-green-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button 
          onClick={() => onPageChange && onPageChange('simulateur-pompe-a-chaleur-air-air')}
          className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Simuler mes aides
          </button>
          <p className="text-green-200 text-sm mt-2">Gratuit et sans engagement</p>
        </div>
      </div>
    </section>
  );
};

export default AidesFinancieresSection;