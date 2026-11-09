import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronDown } from 'lucide-react';

import { faqData } from '../../data/faq';

const FAQ: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="faq" onSectionChange={() => {}} onPageChange={onPageChange} />

      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Foire aux questions</h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes sur notre accompagnement, les aides financières et le déroulement des projets de rénovation.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <button
                type="button"
                className="w-full p-6 cursor-pointer group text-left"
                onClick={() => toggle(index)}
                aria-expanded={expandedIndex === index}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <div className={`w-6 h-6 text-gray-400 group-hover:text-green-600 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6 text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-emerald-900 text-white p-12 rounded-2xl text-center shadow-xl mt-16">
          <h2 className="text-3xl font-bold mb-4">Une autre question ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions et vous orienter dans votre projet.
          </p>
          <a href="/contact" className="inline-block bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
            💬 Nous contacter
          </a>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default FAQ;
