// src/components/IsolationExterieure/FaqSection.tsx
import React from 'react';

interface FaqSectionProps {
  onPageChange: (page: string) => void;
}

const faqData = [
  {
    question: "Quelle est la différence entre l'isolation intérieure et extérieure ?",
    answer: `L'isolation extérieure enveloppe le bâtiment pour limiter les pertes thermiques, sans réduire la surface habitable. 
Elle est plus efficace mais plus coûteuse que l'isolation intérieure.`,
  },
  {
    question: "Est-ce que l'isolation par l'extérieur est éligible aux aides de l'État ?",
    answer: `Oui. Elle est éligible à MaPrimeRénov’, aux CEE, à la TVA réduite à 5,5% et à l’éco-prêt à taux zéro.`,
  },
  {
    question: "Est-ce que je peux isoler ma maison sans déménager ?",
    answer: `Absolument. L’isolation par l’extérieur permet de faire les travaux sans impacter la vie à l’intérieur du logement.`,
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
