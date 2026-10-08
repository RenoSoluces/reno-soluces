// src/components/IsolationCombles/FaqSection.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "Quels types de combles peut-on isoler ?",
    answer: "Vous pouvez isoler les combles perdus (non aménageables) ainsi que les combles aménageables (rampants). Les techniques et matériaux varient selon la configuration."
  },
  {
    question: "Quelles aides sont disponibles pour l’isolation des combles ?",
    answer: "Vous pouvez potentiellement être concerné par MaPrimeRénov’, les Certificats d’Économies d’Énergie (CEE) ou certaines aides locales, sous réserve des conditions propres à chaque dispositif."
  },
  {
    question: "Combien de temps durent les travaux ?",
    answer: "La durée dépend de la configuration du logement, de la surface et de la méthode de mise en œuvre retenue par le professionnel."
  },
  {
    question: "Est-ce que l’isolation des combles est rentable ?",
    answer: "L’isolation peut contribuer à réduire les besoins de chauffage et à améliorer le confort. Le résultat dépend notamment de l’état initial du logement, des travaux réalisés et des usages."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Questions fréquentes sur l'isolation des combles
        </h2>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 cursor-pointer transition hover:shadow-md"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
