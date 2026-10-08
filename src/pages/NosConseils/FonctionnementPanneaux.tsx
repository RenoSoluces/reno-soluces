// src/pages/FonctionnementPanneaux.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Sun, Zap, Settings, BarChart3 } from "lucide-react";

const FonctionnementPanneaux: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section - style blog */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Comment fonctionnent les panneaux solaires photovoltaïques ?
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Découvrez en détail le principe de fonctionnement des panneaux solaires : de la capture des 
            rayons du soleil à la production d’électricité utilisable chez vous.
          </p>
        </div>
      </section>

      {/* Article SEO */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Intro */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔎 Comprendre le principe de base</h2>
          <p className="text-gray-700 leading-relaxed">
            Les <strong>panneaux solaires photovoltaïques</strong> transforment directement la lumière du 
            soleil en électricité. Ils reposent sur l’effet photovoltaïque : lorsqu’un photon (particule 
            de lumière) frappe une cellule en silicium, il libère un électron, créant ainsi un courant 
            électrique continu.
          </p>
        </section>

        {/* Étapes du fonctionnement */}
        <section>
          <h2 className="text-3xl font-bold mb-10">⚡ Les étapes du fonctionnement d’un panneau solaire</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <Sun className="w-10 h-10 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Capture de la lumière solaire</h3>
                <p className="text-gray-700">
                  Les cellules photovoltaïques captent les rayons du soleil. Plus l’exposition est 
                  optimale (orientation sud, inclinaison adaptée), plus la production est efficace.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Zap className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Production d’électricité continue</h3>
                <p className="text-gray-700">
                  L’énergie lumineuse est transformée en courant électrique continu (DC) au sein des 
                  cellules photovoltaïques.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Settings className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Conversion en courant alternatif</h3>
                <p className="text-gray-700">
                  Grâce à l’<strong>onduleur</strong>, le courant continu est converti en courant 
                  alternatif (AC), compatible avec vos appareils électriques et le réseau public.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Consommation et injection</h3>
                <p className="text-gray-700">
                  L’électricité produite est soit consommée directement dans le foyer, soit injectée 
                  dans le réseau électrique (vente du surplus à EDF OA).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schéma visuel */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">🖼️ Schéma simplifié du fonctionnement</h2>
          <img 
            src="/images/schema-fonctionnement-solaire.png" 
            alt="Schéma du fonctionnement des panneaux solaires" 
            className="mx-auto rounded-2xl shadow-lg max-w-3xl"
          />
          <p className="mt-4 text-gray-600 italic">
            Du soleil à votre prise électrique : une production d’électricité renouvelable dont les performances dépendent de l’installation et des conditions d’ensoleillement.
          </p>
        </section>

        {/* Avantages */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🌍 Pourquoi comprendre ce fonctionnement est important ?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✔️ Optimiser l’<strong>orientation et l’inclinaison</strong> de vos panneaux</li>
            <li>✔️ Suivre et <strong>maximiser votre autoconsommation</strong></li>
            <li>✔️ Comprendre le rôle clé de l’<strong>onduleur</strong></li>
            <li>✔️ Anticiper les <strong>économies et revenus</strong> générés par votre installation</li>
          </ul>
        </section>

        {/* FAQ rapide */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Quelle est la durée de vie d’un panneau solaire ?</h3>
              <p className="text-gray-700">La durée d’utilisation dépend du matériel, de son environnement et des conditions d’entretien ; les données du fabricant font référence.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Les panneaux produisent-ils sans soleil direct ?</h3>
              <p className="text-gray-700">Oui, même par temps nuageux, mais avec un rendement plus faible.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Que se passe-t-il si je produis plus que je consomme ?</h3>
              <p className="text-gray-700">L’excédent est automatiquement injecté dans le réseau et racheté par EDF OA.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Envie d’installer vos panneaux solaires ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Profitez de nos conseils personnalisés et découvrez combien vous pourriez économiser grâce au solaire.
          </p>
          <button
            onClick={() => onPageChange("contact")}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            ⚡ Estimer mes économies
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default FonctionnementPanneaux;
