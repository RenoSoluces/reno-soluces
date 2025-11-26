import React from 'react';

interface FaqSectionProps {
  onPageChange: (page: string) => void;
}

const faqData = [
  {
    question: "Quelle épaisseur d'isolant pour les planchers bas ?",
    answer: `L'épaisseur recommandée varie selon le matériau : 
- Polystyrène extrudé : 8 à 12 cm
- Polyuréthane : 6 à 10 cm  
- Laine minérale : 12 à 20 cm

L'objectif est d'atteindre une résistance thermique R ≥ 3 m².K/W.`,
  },
  {
    question: "Peut-on isoler un plancher bas sans sous-sol ?",
    answer: `Oui, plusieurs solutions existent :
- Isolation par le dessus avec chape isolante
- Plancher chauffant avec isolation intégrée
- Isolation entre solives si accessible

Un diagnostic permet de choisir la meilleure solution.`,
  },
  {
    question: "Combien coûte l'isolation des planchers bas ?",
    answer: `Le prix varie selon la technique et les matériaux :
- Isolation par le dessous : 20 à 50€/m²
- Isolation par le dessus : 30 à 70€/m²

Les aides peuvent réduire significativement le coût final.`,
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