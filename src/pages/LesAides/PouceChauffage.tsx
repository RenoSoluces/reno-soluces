// src/pages/PouceChauffage.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Actualites from "../../components/Actualites";
import { Flame, CheckCircle } from "lucide-react";
import CoupDePouce1 from '../../assets/CoupDePouce1.jpg';

const PouceChauffage: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="aides" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              Coup de Pouce Chauffage 🔥 <br />
              <span className="text-yellow-300">Remplacez votre vieille chaudière</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-orange-100">
              Cette aide de l’État vous permet de financer le remplacement de votre ancienne
              chaudière par un système de chauffage moderne, écologique et économique.
            </p>
            <div className="flex items-center mb-6">
              <Flame className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-orange-100">
                Une aide dont le montant dépend du projet et des conditions du dispositif
              </span>
            </div>
            <button
              onClick={() => onPageChange("contact")}
              className="px-8 py-4 bg-yellow-300 text-red-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-200 transition"
            >
              🚀 Je profite du Coup de Pouce
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={CoupDePouce1}
              alt="Coup de Pouce Chauffage"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1 - Qu’est-ce que le Coup de Pouce */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu’est-ce que le Coup de Pouce Chauffage ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Le Coup de Pouce Chauffage est une prime exceptionnelle destinée à encourager le
            remplacement des chaudières polluantes (au fioul, au charbon ou au gaz peu performantes)
            par des systèmes de chauffage modernes et économes en énergie.
          </p>
        </section>

        {/* Section 2 - Travaux éligibles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quels équipements sont concernés ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-red-600 mb-3">🔥 Pompes à chaleur</h3>
              <p className="text-gray-700">
                Remplacement de chaudière par une pompe à chaleur air/eau, hybride ou géothermique,
                permettant de réduire fortement la consommation d’énergie.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-red-600 mb-3">🌿 Chaudières biomasse</h3>
              <p className="text-gray-700">
                Installation d’une chaudière au bois (granulés, bûches, plaquettes), une alternative
                écologique et économique.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-red-600 mb-3">🔥 Chauffage performant</h3>
              <p className="text-gray-700">
                Installation d’équipements plus efficaces et moins polluants, adaptés aux besoins du
                logement.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-red-600 mb-3">💨 Autres systèmes</h3>
              <p className="text-gray-700">
                Solutions complémentaires comme la régulation intelligente, en complément du
                remplacement de chaudière.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Montant */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Montant de l’aide</h2>
          <p className="text-gray-700">Le montant éventuel dépend de l’équipement, de l’opération, de la situation du ménage et des conditions du fournisseur d’énergie. Les barèmes doivent être vérifiés au moment de la demande.</p>
        </section>

        {/* Section 4 - Conditions */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions pour en bénéficier</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-1" />
              Remplacer une ancienne chaudière au fioul, au charbon ou au gaz (hors condensation)
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-1" />
              Lorsque le dispositif l’exige, travaux réalisés par un professionnel disposant de la qualification RGE correspondant aux travaux concernés
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-red-600 mr-3 mt-1" />
              Logement répondant aux conditions d’ancienneté du dispositif concerné
            </li>
          </ul>
        </section>

        {/* Section finale - CTA */}
        <section className="bg-red-700 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Profitez du Coup de Pouce Chauffage avec Reno Soluces</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nous vous accompagnons dans le remplacement de votre ancien système de chauffage pour
            profiter des aides maximales.  
            Bénéficiez d’un accompagnement et, lorsque le dispositif l’exige, d’une mise en relation avec un professionnel disposant de la qualification RGE correspondante.
          </p>
          <button
            onClick={() => onPageChange("contact")}
            className="bg-yellow-300 hover:bg-yellow-200 text-red-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🔥 Je simule mon Coup de Pouce
          </button>
        </section>
      </main>

      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PouceChauffage;
