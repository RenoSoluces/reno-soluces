// src/pages/MaPrimeRenov.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Actualites from "../../components/Actualites";
import { Zap, CheckCircle } from "lucide-react";
import FranceRenov from '../../assets/FranceRenov.webp';

const MaPrimeRenov: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="aides" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              MaPrimeRénov’ : <br />
              <span className="text-yellow-300">l’aide de l’État pour vos travaux de rénovation</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-emerald-50">
              Réduisez vos factures d’énergie tout en améliorant votre confort.  
              MaPrimeRénov’ finance vos travaux de rénovation : isolation, chauffage, ventilation...
            </p>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-emerald-100">
                Une aide dont l’éligibilité et le montant dépendent de votre situation et des règles en vigueur
              </span>
            </div>
            <a href="/contact"
              className="inline-block px-8 py-4 bg-yellow-300 text-emerald-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-200 transition">
              💡 Je calcule mes aides
            </a>
          </div>
          <div className="flex justify-center">
            <img loading="lazy" decoding="async"
              src={FranceRenov}
              alt="Travaux de rénovation énergétique"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1 - Qui peut en bénéficier */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qui peut en bénéficier ?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              Les conditions dépendent du logement, de son usage et de la situation du demandeur.
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              Travaux réalisés par un professionnel certifié RGE
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              Des conditions particulières peuvent s’appliquer selon votre situation et le parcours choisi
            </li>
          </ul>
        </section>

        {/* Section 2 - Principes */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment fonctionne MaPrimeRénov’ ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-3">MaPrimeRénov’</h3>
              <p className="text-gray-700">L’aide peut concerner certains travaux de rénovation énergétique. Les conditions, travaux éligibles et montants sont déterminés par les règles du dispositif en vigueur au moment de la demande.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-3">Un parcours à vérifier avant travaux</h3>
              <p className="text-gray-700">Selon le projet, des démarches et justificatifs spécifiques peuvent être nécessaires. Il est important de vérifier les conditions applicables avant de signer et de commencer les travaux.</p>
            </div>
          </div>
        </section>

        {/* Section 3 - À retenir */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">À retenir</h2>
          <p className="text-gray-700">Reno Soluces peut vous aider à identifier les dispositifs susceptibles de concerner votre projet. Cette orientation reste indicative : l’éligibilité et le montant définitifs relèvent des conditions du dispositif et, lorsque nécessaire, de l’organisme compétent. Ils ne dépendent pas de Reno Soluces.</p>
        </section>

        {/* Section finale - CTA */}        {/* Section finale - CTA */}
        <section className="bg-emerald-900 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Simplifiez vos démarches avec Reno Soluces</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nous vous aidons à comprendre les dispositifs susceptibles de concerner votre projet et pouvons vous orienter vers un professionnel partenaire lorsque cela correspond à votre demande. Les démarches, décisions d’attribution et conditions des aides restent du ressort des organismes et professionnels concernés.
          </p>
          <a href="/contact"
            className="inline-block bg-yellow-300 hover:bg-yellow-200 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
            🚀 Je calcule mes aides
          </a>
        </section>
      </main>

      <Actualites category="Aides et financement" />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default MaPrimeRenov;
