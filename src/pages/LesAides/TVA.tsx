// src/pages/TVA.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Actualites from "../../components/Actualites";
import { CheckCircle, Euro } from "lucide-react";
import TVA55 from '../../assets/TVA5.5.jpg';

const TVA: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="aides" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-emerald-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              TVA réduite à <span className="text-yellow-300">5,5%</span> 🌿
            </h1>
            <p className="text-lg leading-relaxed mb-6 text-emerald-100">
              Bénéficiez d’une TVA réduite pour vos travaux de rénovation énergétique et réalisez
              d’importantes économies sur vos projets.
            </p>
            <div className="flex items-center mb-6">
              <Euro className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-emerald-100">
                Une fiscalité avantageuse pour vos travaux de rénovation
              </span>
            </div>
            <button
              onClick={() => onPageChange("contact")}
              className="px-8 py-4 bg-yellow-300 text-green-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-200 transition"
            >
              🚀 Je profite de la TVA réduite
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={TVA55}
              alt="TVA réduite 5,5%"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1 - Définition */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qu’est-ce que la TVA à 5,5% ?</h2>
          <p className="text-gray-700 leading-relaxed">
            La TVA à taux réduit de 5,5% est un dispositif fiscal permettant aux particuliers de
            bénéficier d’une réduction de la taxe sur la valeur ajoutée pour certains travaux
            d’amélioration énergétique. Elle concerne à la fois les matériaux et la main d’œuvre.
          </p>
        </section>

        {/* Section 2 - Travaux concernés */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quels travaux sont concernés ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">🌞 Isolation</h3>
              <p className="text-gray-700">
                Isolation des combles, des murs, des planchers bas ou encore l’isolation par
                l’extérieur.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">🔥 Chauffage</h3>
              <p className="text-gray-700">
                Installation de systèmes de chauffage performants et économes en énergie
                (pompes à chaleur, chaudières biomasse, etc.).
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">💨 Ventilation</h3>
              <p className="text-gray-700">
                Mise en place de systèmes de ventilation performants (VMC double flux).
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">⚡ Équipements</h3>
              <p className="text-gray-700">
                Pose de systèmes de production d’énergie renouvelable (panneaux solaires thermiques,
                etc.).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Conditions */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions pour en bénéficier</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-700 mr-3 mt-1" />
              Logement achevé depuis plus de 2 ans
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-700 mr-3 mt-1" />
              Travaux réalisés par un professionnel certifié RGE
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-700 mr-3 mt-1" />
              Travaux éligibles liés à l’amélioration énergétique
            </li>
          </ul>
        </section>

        {/* Section 4 - Avantages */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quels sont les avantages ?</h2>
          <p className="text-gray-700 mb-6">
            La TVA à taux réduit est un levier fiscal puissant qui permet de :
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">💰 Réduire le coût global</h3>
              <p className="text-gray-700">
                Grâce au taux réduit, vos travaux deviennent plus abordables sans compromis sur la
                qualité.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-green-800 mb-2">🌍 Favoriser la transition</h3>
              <p className="text-gray-700">
                Encourager les rénovations énergétiques pour réduire l’empreinte carbone des
                logements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-green-700 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Profitez de la TVA réduite à 5,5% avec Reno Soluces
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nos équipes vous accompagnent pour bénéficier de la TVA réduite et optimiser vos projets
            de rénovation énergétique. Ensemble, faisons de votre logement un espace plus confortable
            et plus économique.
          </p>
          <button
            onClick={() => onPageChange("contact")}
            className="bg-yellow-300 hover:bg-yellow-200 text-green-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🌿 Je lance mon projet
          </button>
        </section>
      </main>

      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default TVA;
