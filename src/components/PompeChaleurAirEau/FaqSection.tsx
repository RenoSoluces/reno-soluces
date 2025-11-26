import React from 'react';

interface FaqSectionProps {
  onPageChange: (page: string) => void;
}

const faqData = [
  {
    question: "Une pompe à chaleur Air/Eau fonctionne-t-elle en hiver ?",
    answer: `Oui, les pompes à chaleur Air/Eau modernes fonctionnent même par températures négatives jusqu'à -15°C ou -20°C selon les modèles.

En cas de grand froid, un appoint électrique intégré prend le relais pour garantir le chauffage et l'eau chaude.`,
  },
  {
    question: "Peut-on garder ses radiateurs existants ?",
    answer: `Oui, dans la plupart des cas. La pompe à chaleur Air/Eau est compatible avec les radiateurs existants (fonte, acier, aluminium).

Pour optimiser les performances, il est parfois recommandé d'ajouter quelques radiateurs ou de passer au plancher chauffant.`,
  },
  {
    question: "Quel est le prix d'une pompe à chaleur Air/Eau ?",
    answer: `Le prix varie entre 8 000€ et 16 000€ selon la puissance et les options (avec ou sans ECS).

Avec les aides (MaPrimeRénov', CEE), le coût peut être réduit de 3 000€ à 6 000€. L'investissement est rentabilisé en 7 à 12 ans.`,
  },
];

const FaqSection: React.FC<FaqSectionProps> = ({ onPageChange }) => {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-emerald-900 py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Des <span className="text-green-300">questions</span> ?
        </h2>
        <p className="text-xl text-green-100 mb-12">
          On vous répond !
        </p>

        <div className="space-y-4 mb-12 max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className="p-4 cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium text-left">{faq.question}</span>
                  <div
                    className={`w-6 h-6 text-gray-400 group-hover:text-green-600 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-90' : ''
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="pt-4 text-gray-700 text-sm leading-relaxed text-left whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onPageChange('faq')}
          className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
        >
          Voir toutes les questions
        </button>
      </div>
    </section>
  );
};

export default FaqSection;