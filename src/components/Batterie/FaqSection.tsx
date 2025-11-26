'use client';

import React from 'react';

interface BatterieFaqProps {
  onPageChange: (page: string) => void;
}

const faqData = [
  {
    question: 'Quelle est la durée de vie d’une batterie solaire ?',
    answer: `La durée de vie d’une batterie solaire dépend de sa technologie. Une batterie lithium peut durer jusqu’à 15 ans, tandis qu’une batterie plomb-acide (AGM ou gel) dure entre 5 et 10 ans.

Ce qui influence la durée : le nombre de cycles de charge/décharge, la température d’utilisation et l’entretien.`,
  },
  {
    question: 'Puis-je installer une batterie solaire sans panneaux photovoltaïques ?',
    answer: `Techniquement oui, mais cela n’a pas beaucoup d’intérêt. Une batterie solaire est conçue pour stocker l’électricité produite localement, en particulier par des panneaux solaires.

Sans panneaux, elle ne fait que stocker l’électricité du réseau, ce qui n’est pas rentable ni écologique.`,
  },
  {
    question: 'Quel est le prix d’une batterie solaire ?',
    answer: `Le prix varie selon la capacité, la technologie (lithium, AGM, gel) et le fabricant.

Pour une batterie lithium de 5 kWh, comptez entre 4 000€ et 8 000€ installée. Les batteries plomb sont moins chères mais ont une durée de vie plus courte.`,
  },
];

const FaqSection: React.FC<BatterieFaqProps> = ({ onPageChange }) => {
  const [expandedQuestion, setExpandedQuestion] = React.useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <section className="bg-emerald-900 py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Des <span className="text-green-300">questions</span> sur les batteries ?
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
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium text-left">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 text-gray-400 group-hover:text-green-600 transition-transform duration-300 ${
                      expandedQuestion === index ? 'rotate-90' : ''
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
