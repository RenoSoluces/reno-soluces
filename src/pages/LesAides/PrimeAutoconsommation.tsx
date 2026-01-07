// src/pages/PrimeAutoconsommation.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Actualites from "../../components/Actualites";
import { CheckCircle, Sun, Zap, Euro } from "lucide-react";
import PrimeAutoconsommation1 from '../../assets/PrimeAutoconsommation1.jpg';

const PrimeAutoconsommation: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="aides" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              La Prime à l’Autoconsommation Photovoltaïque
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-orange-100">
              Produisez votre propre électricité grâce au soleil et recevez une prime de l’État pour 
              soutenir votre investissement. Une aide simple, automatique et garantie pendant 5 ans.
            </p>
            <div className="flex items-center mb-6">
              <Euro className="w-6 h-6 text-white mr-2" />
              <span className="text-orange-100">
                Prime versée sur 5 ans, jusqu’à <strong>1 800 €</strong> selon la puissance installée
              </span>
            </div>
            <button
              onClick={() => onPageChange("simulateur")}
              className="px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              ☀️ Je découvre mon montant
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={PrimeAutoconsommation1}
              alt="Prime autoconsommation photovoltaïque"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1 - Qu'est-ce que c'est */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu’est-ce que la prime à l’autoconsommation ?</h2>
          <p className="text-gray-700 leading-relaxed">
            La prime à l’autoconsommation est une aide financière accordée par l’État pour encourager 
            les particuliers à produire et consommer leur propre électricité solaire. Elle est versée 
            directement par EDF Obligation d’Achat (EDF OA) pendant les 5 premières années suivant 
            la mise en service de votre installation.
          </p>
        </section>

        {/* Section 2 - Montants */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Montant de la prime (2025)</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">≤ 3 kWc</h3>
              <p className="text-gray-700"><strong>350 €/kWc</strong> → jusqu’à 1 050 €</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">3 à 9 kWc</h3>
              <p className="text-gray-700"><strong>260 €/kWc</strong> → jusqu’à 2 340 €</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">9 à 36 kWc</h3>
              <p className="text-gray-700"><strong>200 €/kWc</strong></p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">36 à 100 kWc</h3>
              <p className="text-gray-700"><strong>100 €/kWc</strong></p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Ces montants sont révisés chaque trimestre par la Commission de Régulation de l’Énergie (CRE).
          </p>
        </section>

        {/* Section 3 - Conditions */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions pour en bénéficier</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-1" />
              L’installation doit être réalisée par un artisan <strong>RGE QualiPV</strong>.
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-1" />
              La puissance installée doit être inférieure ou égale à <strong>100 kWc</strong>.
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-1" />
              L’électricité produite doit être consommée sur place (autoconsommation) avec vente du surplus.
            </li>
          </ul>
        </section>

        {/* Section 4 - Avantages */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir l’autoconsommation avec prime ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow-sm text-center">
              <Sun className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-600">Réduction des factures</h3>
              <p className="text-gray-700">Consommez directement votre énergie solaire et réduisez vos factures d’électricité.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow-sm text-center">
              <Zap className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-600">Revenus complémentaires</h3>
              <p className="text-gray-700">Vendez le surplus de production à EDF OA et générez un revenu stable.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow-sm text-center">
              <CheckCircle className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-600">Aide directe de l’État</h3>
              <p className="text-gray-700">Bénéficiez d’une prime sécurisée et versée automatiquement.</p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-orange-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Passez au solaire avec Reno Soluces</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Profitez de la prime à l’autoconsommation et valorisez votre toiture tout en réduisant vos dépenses.
          </p>
          <button
            onClick={() => onPageChange("simulateur")}
            className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🌞 Je simule ma prime
          </button>
        </section>
      </main>

      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PrimeAutoconsommation;
