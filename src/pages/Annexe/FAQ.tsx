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
    answer: `Reno Soluces est une entreprise spécialisée dans la rénovation énergétique depuis 2020. Nous accompagnons les particuliers dans leurs projets de transition énergétique avec des solutions performantes et durables.

Basés dans les Hauts-de-France et désormais présents dans l'Aude, nous avons déjà accompagné plus de 600 clients dans leurs travaux de rénovation : isolation, chauffage, photovoltaïque, et rénovations d'ampleur.

Notre mission : rendre la transition énergétique accessible à tous avec des solutions au meilleur prix, posées par des artisans certifiés RGE.`
  },
  {
    question: "L'étude énergétique, qu'est-ce que c'est ?",
    answer: `L'étude énergétique est un diagnostic complet et gratuit de votre logement réalisé par nos experts. Elle permet d'identifier :

• Les déperditions thermiques de votre habitation
• Les solutions de rénovation les plus adaptées à votre situation
• Le dimensionnement optimal des équipements (pompe à chaleur, panneaux solaires...)
• Les économies d'énergie potentielles
• Les aides financières auxquelles vous avez droit

Cette étude personnalisée est la première étape indispensable pour réussir votre projet de rénovation énergétique.`
  },
  {
    question: "À quoi sert la visite technique ?",
    answer: `La visite technique est une étape cruciale qui suit l'étude énergétique. Un expert se déplace gratuitement chez vous pour :

• Prendre les mesures précises de votre logement
• Vérifier la faisabilité technique des solutions proposées
• Analyser l'état de vos installations existantes (électricité, plomberie, toiture...)
• Identifier les contraintes spécifiques à votre habitation
• Affiner le dimensionnement des équipements
• Établir un devis détaillé et personnalisé

Cette visite garantit que votre projet sera parfaitement adapté à votre logement et à vos besoins.`
  },
  {
    question: "À quelles aides ai-je droit ?",
    answer: `Plusieurs aides financières peuvent réduire significativement le coût de vos travaux :

**Aides nationales :**
• MaPrimeRénov' : jusqu'à 20 000€ selon vos revenus et les travaux
• Certificats d'Économies d'Énergie (CEE) : primes versées par les fournisseurs d'énergie
• TVA réduite à 5,5% sur les travaux de rénovation énergétique
• Éco-prêt à taux zéro : jusqu'à 50 000€ sans intérêts
• Prime à l'autoconsommation pour le photovoltaïque

**Aides locales :**
• Subventions régionales et départementales
• Aides des collectivités locales

Le montant total des aides dépend de vos revenus, de votre logement et des travaux envisagés. Nos conseillers vous accompagnent pour maximiser vos aides et constituer vos dossiers.`
  }
];

const FAQ: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header 
        activeSection="faq" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Foire aux questions
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes sur nos services, 
            les aides financières et le déroulement de vos projets de rénovation énergétique.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <div
                className="p-6 cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-6 h-6 text-gray-400 group-hover:text-green-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6 text-gray-700 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-emerald-900 text-white p-12 rounded-2xl text-center shadow-xl mt-16">
          <h2 className="text-3xl font-bold mb-4">Une autre question ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nos conseillers sont à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans votre projet de rénovation énergétique.
          </p>
          <button
            onClick={() => onPageChange("contact")}
            className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            💬 Nous contacter
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default FAQ;