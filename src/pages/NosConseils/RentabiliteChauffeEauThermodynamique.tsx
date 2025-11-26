// src/pages/RentabiliteChauffeEauThermodynamique.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TrendingUp, Calculator, Droplets, Euro, CheckCircle, BarChart3, Clock } from "lucide-react";
import BallonThermo1 from '../../assets/BallonThermo1.jpg';

const RentabiliteChauffeEauThermodynamique: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Rentabilité d'un chauffe-eau thermodynamique
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Découvrez pourquoi le chauffe-eau thermodynamique représente un investissement 
            rentable et durable pour votre production d'eau chaude sanitaire.
          </p>
        </div>
      </section>

      {/* Article SEO */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Intro */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💡 Pourquoi le chauffe-eau thermodynamique est-il rentable ?</h2>
          <p className="text-gray-700 leading-relaxed">
            La <strong>rentabilité d'un chauffe-eau thermodynamique</strong> repose sur sa capacité 
            à diviser par 3 votre consommation électrique pour la production d'eau chaude sanitaire. 
            En utilisant les calories gratuites de l'air, cet équipement transforme chaque kWh 
            d'électricité consommé en 3 à 4 kWh de chaleur, offrant un coefficient de performance 
            (COP) exceptionnel qui se traduit par des économies durables.
          </p>
        </section>

        {/* Facteurs de rentabilité */}
        <section>
          <h2 className="text-3xl font-bold mb-10">📊 Les facteurs qui déterminent la rentabilité</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Consommation d'eau chaude</h3>
                <p className="text-gray-700">
                  Plus votre consommation d'eau chaude est importante, plus les économies générées 
                  par le chauffe-eau thermodynamique seront significatives et rapides.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Euro className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Coût de l'électricité</h3>
                <p className="text-gray-700">
                  Avec la hausse continue du prix de l'électricité, les économies réalisées 
                  augmentent chaque année, améliorant la rentabilité de votre investissement.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Durée de vie de l'équipement</h3>
                <p className="text-gray-700">
                  Avec une durée de vie de 15 à 20 ans, le chauffe-eau thermodynamique 
                  amortit largement son coût initial sur sa période d'utilisation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Aides financières disponibles</h3>
                <p className="text-gray-700">
                  MaPrimeRénov', CEE et TVA réduite réduisent l'investissement initial, 
                  accélérant significativement le retour sur investissement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison avec autres solutions */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⚖️ Comparaison avec d'autres solutions</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Rentabilité comparative sur 15 ans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Chauffe-eau thermodynamique</h4>
                <p className="text-sm text-gray-600">Très économique à l'usage</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold text-sm">ELEC</span>
                </div>
                <h4 className="font-semibold text-gray-900">Chauffe-eau électrique</h4>
                <p className="text-sm text-gray-600">Coût d'usage élevé</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-sm">GAZ</span>
                </div>
                <h4 className="font-semibold text-gray-900">Chauffe-eau gaz</h4>
                <p className="text-sm text-gray-600">Coût variable selon le gaz</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calcul de rentabilité */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🧮 Comment calculer la rentabilité ?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Les éléments à prendre en compte</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calculator className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Coût d'investissement</h4>
                    <p className="text-gray-700 text-sm">
                      Coût d'achat et d'installation moins les aides financières obtenues 
                      (MaPrimeRénov', CEE, TVA réduite).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Économies annuelles</h4>
                    <p className="text-gray-700 text-sm">
                      Différence entre le coût de l'eau chaude avec votre ancien système 
                      et avec le chauffe-eau thermodynamique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Durée d'amortissement</h4>
                    <p className="text-gray-700 text-sm">
                      Temps nécessaire pour récupérer l'investissement initial 
                      grâce aux économies réalisées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={BallonThermo1}
                alt="Calcul de rentabilité chauffe-eau thermodynamique"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Avantages économiques */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💰 Les avantages économiques à long terme</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <TrendingUp className="w-8 h-8 text-green-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Économies durables</h3>
                <p className="text-gray-700">
                  Les économies d'énergie se maintiennent pendant toute la durée de vie de l'équipement, 
                  soit 15 à 20 ans, générant un bénéfice cumulé important.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Protection contre la hausse des prix</h3>
                <p className="text-gray-700">
                  En réduisant votre dépendance à l'électricité pour l'eau chaude, vous vous protégez 
                  contre les futures hausses du coût de l'énergie.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Euro className="w-8 h-8 text-purple-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Valorisation du bien immobilier</h3>
                <p className="text-gray-700">
                  Un équipement moderne et économe en énergie améliore l'attractivité de votre logement 
                  et peut constituer un argument de vente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Optimisation de la rentabilité */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🎯 Comment optimiser la rentabilité ?</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 Dimensionnez correctement</h3>
              <p className="text-gray-700">
                Choisissez la capacité adaptée à vos besoins. Un ballon surdimensionné coûte plus cher 
                sans apporter de bénéfices supplémentaires.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Maximisez les aides</h3>
              <p className="text-gray-700">
                Cumulez MaPrimeRénov', CEE et TVA réduite pour réduire au maximum votre investissement 
                initial et accélérer l'amortissement.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Choisissez un installateur RGE</h3>
              <p className="text-gray-700">
                Une installation de qualité garantit les performances optimales et la durabilité 
                de votre équipement, maximisant ainsi votre retour sur investissement.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ rentabilité */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions sur la rentabilité</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">En combien de temps un chauffe-eau thermodynamique est-il rentabilisé ?</h3>
              <p className="text-gray-700">
                Généralement entre 4 et 7 ans selon votre consommation d'eau chaude et les aides obtenues. 
                Plus votre consommation est importante, plus l'amortissement est rapide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Les économies sont-elles vraiment significatives ?</h3>
              <p className="text-gray-700">
                Oui, les économies peuvent atteindre 70% par rapport à un chauffe-eau électrique classique, 
                soit plusieurs centaines d'euros par an pour une famille de 4 personnes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Faut-il remplacer un chauffe-eau qui fonctionne encore ?</h3>
              <p className="text-gray-700">
                Si votre chauffe-eau électrique a plus de 10 ans, le remplacer par un modèle thermodynamique 
                peut être rentable, surtout avec les aides disponibles.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Calculez votre rentabilité personnalisée</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Découvrez combien vous pourriez économiser avec un chauffe-eau thermodynamique 
            adapté à vos besoins et votre consommation.
          </p>
          <button
            onClick={() => onPageChange("simulateur-produire-mon-eau-chaude")} 
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            💧 Calculer mes économies
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default RentabiliteChauffeEauThermodynamique;