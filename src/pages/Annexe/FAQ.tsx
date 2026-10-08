import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Qui sommes-nous ?",
    answer: `Reno Soluces est une société d'accompagnement et de mise en relation dans le domaine de la rénovation. Nous aidons les particuliers à mieux définir leur projet, à identifier les solutions susceptibles de correspondre à leur logement et à être mis en relation avec un professionnel partenaire lorsque cela est pertinent.

Reno Soluces n'exécute pas les travaux. Le professionnel partenaire reste responsable de son étude technique, de son devis, de ses qualifications lorsqu'elles sont requises et de la réalisation du chantier.

Notre objectif est de faciliter le parcours du particulier avec une information claire, une orientation adaptée et une mise en relation transparente.`,
  },
  {
    question: "L'étude énergétique, qu'est-ce que c'est ?",
    answer: `Selon la nature du projet, une première analyse peut être réalisée afin de mieux comprendre le logement et les travaux envisagés. Elle permet notamment d'identifier :

• les caractéristiques du logement et ses besoins ;
• les solutions de rénovation susceptibles d'être adaptées ;
• les principales contraintes techniques à vérifier ;
• les dispositifs d'aides qui pourraient être pertinents, sous réserve de leurs conditions d'éligibilité.

Cette analyse constitue une aide à l'orientation. Elle ne remplace pas, lorsque celui-ci est nécessaire, un audit énergétique réglementaire, une étude technique ou le diagnostic réalisé par le professionnel chargé des travaux.`,
  },
  {
    question: "À quoi sert la visite technique ?",
    answer: `Lorsqu'une visite technique est nécessaire, un éco-technicien peut se déplacer afin de recueillir les informations utiles au projet.

La visite peut notamment permettre de :

• prendre les mesures nécessaires ;
• vérifier la faisabilité technique de la solution envisagée ;
• observer les installations existantes et les contraintes du logement ;
• préciser les caractéristiques techniques à transmettre au professionnel ;
• préparer les éléments nécessaires à l'établissement d'une proposition adaptée.

La visite technique ne constitue pas, à elle seule, une garantie d'éligibilité aux aides ni une validation définitive des travaux. Le devis et la réalisation du chantier relèvent du professionnel partenaire concerné.`,
  },
  {
    question: "À quelles aides ai-je droit ?",
    answer: `Il n'existe pas un montant d'aide identique pour tous les projets. L'éligibilité et le montant éventuel dépendent notamment de votre situation, de vos revenus, du logement, de la nature des travaux, de leurs caractéristiques techniques, de la localisation et des règles propres à chaque dispositif.

Selon le projet, plusieurs dispositifs peuvent être susceptibles de s'appliquer :

• MaPrimeRénov' ;
• les Certificats d'économies d'énergie (CEE) ;
• la TVA à taux réduit lorsque les conditions sont remplies ;
• l'éco-prêt à taux zéro, selon les conditions applicables ;
• certaines aides locales ;
• pour certains projets photovoltaïques, les mécanismes d'aide prévus par la réglementation applicable.

Reno Soluces peut vous aider à identifier les dispositifs susceptibles de concerner votre projet à partir des informations communiquées. Toute estimation est indicative : elle ne constitue ni une notification d'aide ni une garantie d'éligibilité. L'éligibilité et le montant définitifs doivent être vérifiés au regard des règles en vigueur et, lorsque cela est nécessaire, par l'organisme compétent.

Les aides peuvent également être soumises à des conditions concernant le professionnel réalisant les travaux, notamment à une qualification RGE correspondant exactement à la catégorie de travaux concernée.`,
  },
];

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
          <button onClick={() => onPageChange('contact')} className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
            💬 Nous contacter
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default FAQ;
