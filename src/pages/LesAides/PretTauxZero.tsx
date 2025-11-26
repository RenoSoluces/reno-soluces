// src/pages/PretTauxZero.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Actualites from "../../components/Actualites";
import { CheckCircle, Euro, } from "lucide-react";
import PTZ from '../../assets/PTZ.jpg';

const PretTauxZero: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="aides" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              L’Éco-Prêt à Taux Zéro <span className="text-yellow-300">(éco-PTZ)</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-indigo-100">
              Financez vos travaux de rénovation énergétique sans avancer d’intérêts grâce à
              l’éco-prêt à taux zéro. Un coup de pouce pour améliorer votre logement.
            </p>
            <div className="flex items-center mb-6">
              <Euro className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-indigo-100">Jusqu’à 50 000€ de financement sans intérêts</span>
            </div>
            <button
              onClick={() => onPageChange("contact")}
              className="px-8 py-4 bg-yellow-300 text-blue-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-200 transition"
            >
              🚀 Je profite du PTZ
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={PTZ}
              alt="Éco-prêt à taux zéro"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1 - Définition */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu’est-ce que l’éco-PTZ ?</h2>
          <p className="text-gray-700 leading-relaxed">
            L’éco-prêt à taux zéro (éco-PTZ) est un prêt bancaire aidé par l’État, qui permet de
            financer des travaux de rénovation énergétique dans un logement sans payer d’intérêts.
            Accessible sans condition de ressources, il facilite la transition énergétique des
            logements anciens.
          </p>
        </section>

        {/* Section 2 - Montants */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quel montant pouvez-vous obtenir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">💡 Travaux simples</h3>
              <p className="text-gray-700">Jusqu’à <strong>15 000 €</strong> pour une seule action de travaux (ex : isolation des combles).</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">⚡ Bouquet de travaux</h3>
              <p className="text-gray-700">Jusqu’à <strong>25 000 €</strong> pour deux actions ou plus.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">🏡 Rénovation globale</h3>
              <p className="text-gray-700">Jusqu’à <strong>50 000 €</strong> pour un projet complet visant un gain énergétique important.</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Travaux éligibles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quels travaux sont éligibles ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">🌞 Isolation</h3>
              <p className="text-gray-700">
                Isolation des combles, murs, planchers et toitures pour limiter les pertes de chaleur.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">🔥 Chauffage</h3>
              <p className="text-gray-700">
                Installation de chaudières performantes, pompes à chaleur ou systèmes de chauffage
                renouvelables.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">💨 Ventilation</h3>
              <p className="text-gray-700">
                Mise en place de systèmes de ventilation efficaces pour améliorer la qualité de l’air
                et la performance énergétique.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">⚡ Énergies renouvelables</h3>
              <p className="text-gray-700">
                Installation de panneaux solaires, chaudières biomasse, équipements géothermiques, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 - Conditions */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions pour en bénéficier</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-700 mr-3 mt-1" />
              Logement construit depuis plus de 2 ans
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-700 mr-3 mt-1" />
              Travaux réalisés par un artisan certifié RGE
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-700 mr-3 mt-1" />
              Être propriétaire occupant ou bailleur
            </li>
          </ul>
        </section>

        {/* CTA Final */}
        <section className="bg-blue-700 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Bénéficiez de l’éco-PTZ avec Reno Soluces
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Financez vos travaux de rénovation énergétique à taux zéro et améliorez durablement
            le confort et la valeur de votre logement.
          </p>
          <button
            onClick={() => onPageChange("contact")}
            className="bg-yellow-300 hover:bg-yellow-200 text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🌍 Je lance mon projet
          </button>
        </section>
      </main>

      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PretTauxZero;
