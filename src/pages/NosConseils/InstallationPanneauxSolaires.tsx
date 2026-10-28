// src/pages/InstallationPanneauxSolaires.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ClipboardCheck, Home, Wrench, Euro } from "lucide-react";
import PanneauxPV from "../../assets/PanneauxPV.webp"; // ✅ import direct depuis src/assets

const InstallationPanneauxSolaires: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Installation de panneaux solaires : le guide complet
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez toutes les étapes, les démarches et les bonnes pratiques pour réussir 
            l’installation de vos panneaux photovoltaïques et profiter pleinement de l’énergie solaire.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Pourquoi installer ? */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🌞 Pourquoi installer des panneaux solaires ?</h2>
          <p className="text-gray-700 leading-relaxed">
            L’installation de <strong>panneaux solaires photovoltaïques</strong> permet de produire 
            votre propre électricité verte, de réduire vos factures et de contribuer à la transition 
            énergétique. Que vous soyez en <strong>autoconsommation</strong> ou en <strong>revente totale</strong>, 
            cette solution représente un investissement durable.
          </p>
        </section>

        {/* Étapes de l’installation */}
        <section>
          <h2 className="text-3xl font-bold mb-10">🛠️ Les étapes clés de l’installation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <ClipboardCheck className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Étude de faisabilité</h3>
                <p className="text-gray-700">
                  Analyse de l’ensoleillement, orientation de la toiture et estimation de la production 
                  solaire. Cette étape permet de valider la viabilité du projet.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Demande administrative</h3>
                <p className="text-gray-700">
                  Déclaration préalable en mairie, demande de raccordement au réseau (Enedis) et choix 
                  du contrat d’achat pour l’électricité produite.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Wrench className="w-10 h-10 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Installation technique</h3>
                <p className="text-gray-700">
                  Pose des panneaux solaires, câblage électrique, mise en place de l’onduleur et 
                  raccordement au tableau électrique.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Euro className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Mise en service et suivi</h3>
                <p className="text-gray-700">
                  Contrôle de conformité, mise en service officielle et suivi de la production 
                  via des applications de monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schéma visuel */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">🖼️ Exemple d’installation sur toiture</h2>
          <img loading="lazy" decoding="async" 
            src={PanneauxPV} // ✅ image importée
            alt="Exemple d'installation de panneaux solaires" 
            className="mx-auto rounded-2xl shadow-lg max-w-3xl"
          />
          <p className="mt-4 text-gray-600 italic">
            Un toit bien exposé est la clé d’une installation solaire performante.
          </p>
        </section>

        {/* Conseils pratiques */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💡 Nos conseils pour une installation réussie</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Lorsque le dispositif d’aide l’exige, choisissez un professionnel disposant de la qualification <strong>RGE</strong> correspondant aux travaux concernés. L’obtention de l’aide reste soumise aux conditions du dispositif.</li>
            <li>L’orientation, l’inclinaison, l’ombrage et la configuration de la toiture doivent être étudiés par le professionnel pour dimensionner le projet.</li>
            <li>Pensez à <strong>entretenir vos panneaux</strong> selon les recommandations du fabricant pour maximiser le rendement.</li>
            <li>Installez un <strong>système de suivi</strong> pour contrôler votre production en temps réel.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Quel est le prix moyen d’une installation solaire ?</h3>
              <p className="text-gray-700">
                Le coût dépend de la puissance, du matériel, de la pose et de la configuration du toit. Un devis est nécessaire pour connaître le prix du projet.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Combien de temps dure l’installation ?</h3>
              <p className="text-gray-700">
                La durée d’intervention dépend de la configuration du logement et des travaux à réaliser.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Peut-on installer soi-même des panneaux solaires ?</h3>
              <p className="text-gray-700">
                Le recours à un professionnel qualifié est recommandé. La qualification ne constitue pas une garantie de résultat. Les caractéristiques du projet, la sécurité, la performance et les conditions d’accès aux aides doivent être vérifiées séparément.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Prêt à passer à l’énergie solaire ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Demandez dès maintenant une étude personnalisée pour connaître le coût, la rentabilité et 
            les aides disponibles pour votre installation.
          </p>
          <a href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
            ☀️ Estimer mes économies
          </a>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default InstallationPanneauxSolaires;
