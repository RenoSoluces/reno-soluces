// src/pages/FonctionnementPacAirEau.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wind, Droplets, Zap, Settings, Thermometer, Home } from "lucide-react";
import AirEau2 from '../../assets/AirEau2.webp';

const FonctionnementPacAirEau: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Comment fonctionne une pompe à chaleur air/eau ?
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Découvrez le principe de fonctionnement de la pompe à chaleur air/eau : de la captation 
            des calories dans l'air extérieur à la production de chauffage et d'eau chaude sanitaire.
          </p>
        </div>
      </section>

      {/* Article SEO */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Intro */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔎 Le principe de base de la pompe à chaleur</h2>
          <p className="text-gray-700 leading-relaxed">
            La <strong>pompe à chaleur air/eau</strong> fonctionne selon le principe de la thermodynamique : 
            elle capte l'énergie gratuite présente dans l\'air extérieur (même par températures négatives) 
            pour la transférer à l'eau de votre circuit de chauffage et de production d\'eau chaude sanitaire. 
            Cette technologie permet de <strong>diviser vos factures par 3</strong> par rapport à un chauffage électrique classique.
          </p>
        </section>

        {/* Cycle thermodynamique */}
        <section>
          <h2 className="text-3xl font-bold mb-10">⚡ Le cycle thermodynamique en 4 étapes</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <Wind className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Évaporation</h3>
                <p className="text-gray-700">
                  L'évaporateur capte les calories de l'air extérieur. Le fluide frigorigène, 
                  même par températures négatives, absorbe cette énergie et passe de l'état liquide à gazeux.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Settings className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Compression</h3>
                <p className="text-gray-700">
                  Le compresseur électrique augmente la pression et la température du gaz frigorigène, 
                  concentrant ainsi l'énergie captée dans l'air.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Droplets className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Condensation</h3>
                <p className="text-gray-700">
                  Le condenseur transfère la chaleur du gaz chaud vers l'eau du circuit de chauffage. 
                  Le fluide frigorigène redevient liquide en cédant son énergie.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Zap className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Détente</h3>
                <p className="text-gray-700">
                  Le détendeur abaisse la pression du fluide liquide, le préparant pour un nouveau cycle. 
                  Le processus recommence en continu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schéma visuel */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">🖼️ Schéma du fonctionnement</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="max-w-3xl mx-auto">
              <img loading="lazy" decoding="async" 
                src={AirEau2}
                alt="Schéma du fonctionnement d'une pompe à chaleur air/eau" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-600 italic">
            Un cycle thermodynamique efficace qui transforme l'air extérieur en confort intérieur.
          </p>
        </section>

        {/* Types de PAC air/eau */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🏠 Les différents types de pompes à chaleur air/eau</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">PAC Monobloc</h3>
              <p className="text-gray-700">
                Tous les composants sont regroupés dans l'unité extérieure. Seule l'eau circule 
                entre l'extérieur et l'intérieur, simplifiant l'installation et réduisant les risques de fuite.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">PAC Bibloc</h3>
              <p className="text-gray-700">
                Composée d'une unité extérieure et d'une unité intérieure reliées par des liaisons 
                frigorifiques. Offre de meilleures performances mais nécessite une installation plus technique.
              </p>
            </div>
          </div>
        </section>

        {/* Avantages du fonctionnement */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🌟 Pourquoi ce fonctionnement est-il si efficace ?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <Thermometer className="w-6 h-6 text-green-600 mr-3 mt-1" />
              <div>
                <strong>Coefficient de Performance (COP) :</strong> l’efficacité dépend du matériel, des conditions extérieures, du dimensionnement et du mode d’utilisation.
              </div>
            </li>
            <li className="flex items-start">
              <Wind className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <strong>Fonctionnement même par grand froid :</strong> Les modèles récents fonctionnent 
                Les performances par temps froid dépendent du modèle et des conditions d’utilisation.
              </div>
            </li>
            <li className="flex items-start">
              <Droplets className="w-6 h-6 text-orange-600 mr-3 mt-1" />
              <div>
                <strong>Production d'eau chaude sanitaire :</strong> Certains modèles intègrent un ballon 
                pour produire l'eau chaude en plus du chauffage.
              </div>
            </li>
            <li className="flex items-start">
              <Home className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <strong>Compatible avec l'existant :</strong> Fonctionne avec vos radiateurs actuels 
                ou un plancher chauffant.
              </div>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes sur le fonctionnement</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Une PAC air/eau fonctionne-t-elle vraiment en hiver ?</h3>
              <p className="text-gray-700">
                Oui ! Même à -10°C, l'air contient encore des calories exploitables. Les PAC modernes 
                fonctionnent efficacement jusqu'à -15°C ou -20°C selon les modèles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Que se passe-t-il en cas de panne ?</h3>
              <p className="text-gray-700">
                La plupart des PAC intègrent une résistance électrique de secours qui prend le relais 
                automatiquement en cas de dysfonctionnement ou de températures extrêmes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">La PAC fait-elle du bruit ?</h3>
              <p className="text-gray-700">
                Les modèles récents sont très silencieux. L'unité extérieure émet généralement moins 
                de 50 dB, soit le niveau d'une conversation normale.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Intéressé par une pompe à chaleur air/eau ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Découvrez si cette solution est adaptée à votre logement avec une étude personnalisée 
            et gratuite de nos éco-techniciens.
          </p>
          <a href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
            🏠 Estimes mes aides
          </a>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default FonctionnementPacAirEau;