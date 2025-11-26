// components/Photovoltaiques/FaqSection.tsx
import React from 'react';

interface PanneauxPhotovoltaiquesProps {
  onPageChange: (page: string) => void;
}

const faqData = [
  {
    question: 'Quelle différence entre panneaux solaires et panneaux photovoltaïques ?',
    answer: `Un panneau photovoltaïque convertit directement la lumière du soleil en électricité. Il utilise des cellules en silicium pour produire du courant électrique lorsqu’elles sont frappées par la lumière.

Le terme "panneau solaire" désigne aussi bien les panneaux photovoltaïques que les panneaux solaires thermiques, qui servent à chauffer l’eau du logement.`,
  },
  {
    question: "Est-ce que c'est rentable d'installer des panneaux photovoltaïques ?",
    answer: `Oui. Produire et consommer sa propre électricité est rentable : économies, revente du surplus, aides de l’État, valorisation immobilière...

Une installation est généralement rentabilisée entre 10 et 15 ans selon l'ensoleillement, l'investissement et les aides. Il est recommandé de passer par un professionnel certifié RGE QualiPV.`,
  },
  {
    question: 'Quel est le prix des panneaux photovoltaïques ?',
    answer: `Le prix dépend de la puissance, du matériel, de la pose et de la configuration du toit. Pour une installation de 3 kWc, comptez entre 8 000€ et 15 000€.`,
  },
];

const FaqSection: React.FC<PanneauxPhotovoltaiquesProps> = ({ onPageChange }) => {
  const [expandedQuestion, setExpandedQuestion] = React.useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
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
