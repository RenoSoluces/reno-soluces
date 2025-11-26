// src/pages/NotreHistoire.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CheckCircle, Home, Leaf, Sun, Wrench } from "lucide-react";

type Props = { onPageChange: (page: string) => void };

const NotreHistoire: React.FC<Props> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header
        activeSection="qui-sommes-nous"
        onSectionChange={() => {}}
        onPageChange={onPageChange}
      />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Notre histoire
            </h1>
            <p className="mt-6 text-lg text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Depuis 2020, nous accompagnons les particuliers dans leurs projets
              de rénovation énergétique avec passion et engagement.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="relative border-l border-gray-200">
              {/* 2020 - 2024 */}
              <li className="mb-12 ml-6">
                <div className="absolute -left-[9px] w-5 h-5 bg-emerald-600 rounded-full" />
                <time className="text-sm font-medium text-emerald-700">
                  2020 - 2024
                </time>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  600 clients accompagnés dans les Hauts-de-France
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Déploiement des <strong>produits à 1 €</strong> :
                  <br />
                  pompe à chaleur, ballon solaire, système solaire combiné,
                  poêles à granulés et VMC.
                </p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
                    <Leaf className="w-3 h-3" /> Pompe à chaleur
                  </span>
                  <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
                    <Sun className="w-3 h-3" /> Ballon solaire
                  </span>
                  <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
                    <Home className="w-3 h-3" /> Poêle à granulés
                  </span>
                  <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1">
                    <Wrench className="w-3 h-3" /> VMC
                  </span>
                </div>
              </li>

              {/* 2023 */}
              <li className="mb-12 ml-6">
                <div className="absolute -left-[9px] w-5 h-5 bg-emerald-600 rounded-full" />
                <time className="text-sm font-medium text-emerald-700">
                  2023
                </time>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  Diversification des activités
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Lancement de la{" "}
                  <strong>réalisation des travaux de rénovation énergétique</strong>{" "}
                  ainsi que de la{" "}
                  <strong>mise en place de panneaux photovoltaïques</strong>.
                </p>
              </li>

              {/* 2024 */}
              <li className="mb-12 ml-6">
                <div className="absolute -left-[9px] w-5 h-5 bg-emerald-600 rounded-full" />
                <time className="text-sm font-medium text-emerald-700">
                  2024
                </time>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  50 rénovations globales d’ampleur
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Accompagnement de <strong>50 clients</strong> dans des projets
                  de rénovation complète, combinant plusieurs solutions
                  énergétiques performantes.
                </p>
              </li>

              {/* 2025 */}
              <li className="ml-6">
                <div className="absolute -left-[9px] w-5 h-5 bg-emerald-600 rounded-full" />
                <time className="text-sm font-medium text-emerald-700">
                  2025
                </time>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  Déploiement dans l’Aude
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Présents désormais dans le Sud, nous avons déjà accompagné{" "}
                  <strong>23 clients</strong> dans des projets variés.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Et si vous écriviez la suite de notre histoire avec nous ?
            </h2>
            <p className="mt-4 text-emerald-100">
              Contactez nos experts pour démarrer votre projet de rénovation
              énergétique.
            </p>
            <div className="mt-8">
              <button
                onClick={() => onPageChange("contact")}
                className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-semibold px-8 py-4 rounded-full shadow-lg transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                Nous contacter
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default NotreHistoire;
