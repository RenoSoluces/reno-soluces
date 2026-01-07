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
          Aides financières <span className="text-green-300">majorées</span> pour la rénovation d'ampleur
        </h2>
        <p className="text-lg text-green-100 mb-10">
          Bénéficiez d'un financement exceptionnel pouvant couvrir jusqu'à 90% de vos travaux.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            {
              title: 'MaPrimeRénov\' Parcours accompagné',
              desc: 'Jusqu\'à 63 000€ d\'aides selon vos revenus pour une rénovation d\'ampleur avec accompagnement obligatoire.'
            },
            {
              title: 'Certificats d\'Économies d\'Énergie (CEE)',
              desc: 'Primes bonifiées pour les rénovations globales, cumulables avec MaPrimeRénov\'.'
            },
            {
              title: 'Éco-prêt à taux zéro renforcé',
              desc: 'Jusqu\'à 50 000€ de prêt sans intérêts pour financer votre rénovation d\'ampleur.'
            },
            {
              title: 'Aides locales complémentaires',
              desc: 'Subventions régionales et départementales pour compléter le financement de votre projet.'
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
          onClick={() => onPageChange && onPageChange('simulateur')}
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