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
    answer: "Vous pouvez bénéficier de MaPrimeRénov', des Certificats d’Économie d’Énergie (CEE), ainsi que d’autres aides locales selon votre situation."
  },
  {
    question: "Combien de temps durent les travaux ?",
    answer: "En général, l’isolation de combles perdus prend une journée. Pour les rampants, cela peut durer entre 2 à 5 jours selon la surface et la méthode choisie."
  },
  {
    question: "Est-ce que l’isolation des combles est rentable ?",
    answer: "Oui, l’isolation permet de réduire jusqu’à 30% de votre facture de chauffage, ce qui représente une économie significative à long terme."
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
