// src/pages/CEE.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Actualites from "../../components/Actualites";
import { Zap, CheckCircle } from "lucide-react";
import CEE1 from '../../assets/CEE1.jpg';

const CEE: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="aides" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              Certificats d’Économies d’Énergie (CEE) : <br />
              <span className="text-yellow-300">Un coup de pouce pour vos travaux</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-blue-50">
              Les CEE financent une partie de vos travaux de rénovation énergétique grâce aux
              fournisseurs d’énergie. Isolation, chauffage, ventilation : réduisez vos dépenses et
              améliorez votre confort.
            </p>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-blue-100">
                Des aides cumulables avec MaPrimeRénov’ pour maximiser vos gains
              </span>
            </div>
            <button
              onClick={() => onPageChange("simulateur")}
              className="px-8 py-4 bg-yellow-300 text-blue-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-200 transition"
            >
              ⚡ Je profite des CEE
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={CEE1}
              alt="Travaux financés par les CEE"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1 - Qu’est-ce que les CEE */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu’est-ce que les CEE ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Les Certificats d’Économies d’Énergie (CEE) sont un dispositif national obligeant les
            fournisseurs d’énergie (électricité, gaz, carburant, etc.) à financer des actions
            d’économies d’énergie.  
            Concrètement, cela se traduit par des primes versées aux ménages pour leurs travaux de
            rénovation.
          </p>
        </section>

        {/* Section 2 - Travaux éligibles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quels travaux sont éligibles ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">🏠 Isolation</h3>
              <p className="text-gray-700">
                Isolation des combles, toitures, murs intérieurs ou extérieurs, planchers bas :
                réduisez les déperditions de chaleur et vos factures.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">🔥 Chauffage</h3>
              <p className="text-gray-700">
                Remplacement d’une vieille chaudière par une pompe à chaleur, un poêle performant ou
                une chaudière biomasse.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">💨 Ventilation</h3>
              <p className="text-gray-700">
                Installation de systèmes de ventilation performants (VMC double flux) pour améliorer
                la qualité de l’air et réduire l’humidité.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">🌍 Autres actions</h3>
              <p className="text-gray-700">
                Travaux liés à l’efficacité énergétique globale du logement (programmateurs de
                chauffage, calorifugeage...).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Montants et bonus */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Montants et bonus</h2>
          <p className="text-gray-700 mb-4">
            Le montant des CEE dépend du type de travaux, des économies générées, et de vos revenus.
            Des bonus existent pour les ménages modestes ou en cas de rénovation globale.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-gray-900">
                  <th className="px-4 py-3 text-left">Travaux</th>
                  <th className="px-4 py-3 text-left">Montant (ménages modestes)</th>
                  <th className="px-4 py-3 text-left">Montant (autres ménages)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Isolation combles / toitures</td>
                  <td className="px-4 py-3">8 à 15 €/m²</td>
                  <td className="px-4 py-3">4 à 7 €/m²</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Isolation murs</td>
                  <td className="px-4 py-3">20 à 25 €/m²</td>
                  <td className="px-4 py-3">10 à 15 €/m²</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Pompe à chaleur</td>
                  <td className="px-4 py-3">2 500 à 4 000 €</td>
                  <td className="px-4 py-3">1 000 à 2 500 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">Barème indicatif – variable selon fournisseurs</p>
        </section>

        {/* Section 4 - Conditions */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions à respecter</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              Travaux réalisés par un professionnel certifié RGE
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              Logement construit depuis plus de 2 ans
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              Dossier validé avant le lancement des travaux
            </li>
          </ul>
        </section>

        {/* Section finale - CTA */}
        <section className="bg-blue-900 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Profitez des CEE avec Reno Soluces</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nous vous aidons à obtenir vos primes CEE et à cumuler avec MaPrimeRénov’ pour maximiser
            vos aides.  
            Simulation gratuite, accompagnement complet, travaux réalisés par des pros RGE.
          </p>
          <button
            onClick={() => onPageChange("simulateur")}
            className="bg-yellow-300 hover:bg-yellow-200 text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🚀 Je simule mes aides
          </button>
        </section>
      </main>

      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default CEE;
