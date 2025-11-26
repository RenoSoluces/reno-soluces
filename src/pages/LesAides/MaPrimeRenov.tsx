// src/pages/MaPrimeRenov.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Actualites from "../../components/Actualites";
import { Zap, CheckCircle } from "lucide-react";
import FranceRenov from '../../assets/FranceRenov.jpg';

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
              <span className="text-yellow-300">L’aide de l’État pour vos travaux</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-emerald-50">
              Réduisez vos factures d’énergie tout en améliorant votre confort.  
              MaPrimeRénov’ finance vos travaux de rénovation : isolation, chauffage, ventilation...
            </p>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-emerald-100">
                Jusqu’à 20 000 € d’aides selon vos revenus
              </span>
            </div>
            <button
              onClick={() => onPageChange("simulateur-aides")}
              className="px-8 py-4 bg-yellow-300 text-emerald-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-200 transition"
            >
              💡 Je calcule mes aides
            </button>
          </div>
          <div className="flex justify-center">
            <img
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
              Propriétaires occupants ou bailleurs (logement &gt; 15 ans, résidence principale)
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              Travaux réalisés par un professionnel certifié RGE
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              Engagement d’occupation du logement (8 mois/an) ou location pendant 5 ans
            </li>
          </ul>
        </section>

        {/* Section 2 - Deux formats */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Deux formats de prime</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-3">💰 MaPrimeRénov’ par geste</h3>
              <p className="text-gray-700">
                Une aide forfaitaire pour chaque type de travaux (isolation, chauffage, ventilation...).  
                Le montant dépend de vos revenus et du gain énergétique obtenu.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-3">🏡 MaPrimeRénov’ rénovation d’ampleur</h3>
              <p className="text-gray-700">
                Pour les rénovations globales impliquant au moins 2 travaux d’isolation 
                et un gain énergétique de 2 classes minimum.  
                Un accompagnement « Mon Accompagnateur Rénov’ » est obligatoire.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Plafonds de ressources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plafonds de ressources</h2>
          <p className="text-gray-700 mb-4">
            Les montants de MaPrimeRénov’ varient selon vos ressources (Bleu, Jaune, Violet, Rose).
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-gray-900">
                  <th className="px-4 py-3 text-left">Foyer</th>
                  <th className="px-4 py-3 text-left">Bleu</th>
                  <th className="px-4 py-3 text-left">Jaune</th>
                  <th className="px-4 py-3 text-left">Violet</th>
                  <th className="px-4 py-3 text-left">Rose</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">2 personnes</td>
                  <td className="px-4 py-3">&lt; 25 115 €</td>
                  <td className="px-4 py-3">&lt; 32 197 €</td>
                  <td className="px-4 py-3">&lt; 45 340 €</td>
                  <td className="px-4 py-3">&gt; 45 340 €</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">4 personnes</td>
                  <td className="px-4 py-3">&lt; 35 285 €</td>
                  <td className="px-4 py-3">&lt; 45 234 €</td>
                  <td className="px-4 py-3">&lt; 63 844 €</td>
                  <td className="px-4 py-3">&gt; 63 844 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">Source : Barème officiel 2025</p>
        </section>

        {/* Section 4 - Cumul d’aides */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cumul d’aides & plafonds</h2>
          <p className="text-gray-700">
            MaPrimeRénov’ est cumulable avec les CEE, la TVA réduite (5,5 %) et certaines aides locales, 
            dans la limite des plafonds autorisés.
          </p>
        </section>

        {/* Section finale - CTA */}
        <section className="bg-emerald-900 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Simplifiez vos démarches avec Reno Soluces</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nous gérons toutes vos démarches : simulation des aides, constitution du dossier, 
            et réalisation des travaux par des professionnels RGE.  
            100 % gratuit et sans engagement.
          </p>
          <button
            onClick={() => onPageChange("simulateur-aides")}
            className="bg-yellow-300 hover:bg-yellow-200 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🚀 Je calcule mes aides
          </button>
        </section>
      </main>

      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default MaPrimeRenov;
