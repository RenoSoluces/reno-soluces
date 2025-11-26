// src/pages/InstallationPacAirEau.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ClipboardCheck, Home, Wrench, Settings, Zap, Shield } from "lucide-react";

const InstallationPacAirEau: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Installation d'une pompe à chaleur air/eau : le guide complet
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez toutes les étapes, les prérequis et les bonnes pratiques pour réussir 
            l'installation de votre pompe à chaleur air/eau et profiter d'un chauffage économique et écologique.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Pourquoi installer ? */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🌱 Pourquoi installer une pompe à chaleur air/eau ?</h2>
          <p className="text-gray-700 leading-relaxed">
            L'installation d'une <strong>pompe à chaleur air/eau</strong> représente l'une des solutions 
            les plus efficaces pour remplacer votre ancien système de chauffage. Elle utilise l'énergie 
            renouvelable de l'air pour produire chauffage et eau chaude sanitaire, tout en réduisant 
            considérablement vos factures énergétiques.
          </p>
        </section>

        {/* Prérequis avant installation */}
        <section>
          <h2 className="text-3xl font-bold mb-10">📋 Prérequis avant l'installation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <Home className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Étude thermique du logement</h3>
                <p className="text-gray-700">
                  Analyse des déperditions thermiques, dimensionnement des besoins en chauffage 
                  et vérification de l'isolation existante pour optimiser les performances.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Settings className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Vérification du circuit existant</h3>
                <p className="text-gray-700">
                  Contrôle de la compatibilité avec vos radiateurs actuels, état des canalisations 
                  et adaptation éventuelle du système de distribution.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Zap className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Alimentation électrique</h3>
                <p className="text-gray-700">
                  Vérification de la puissance électrique disponible et mise aux normes du tableau 
                  électrique si nécessaire pour alimenter la pompe à chaleur.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Emplacement de l'unité extérieure</h3>
                <p className="text-gray-700">
                  Choix d'un emplacement optimal : bien ventilé, accessible pour la maintenance, 
                  éloigné des fenêtres pour limiter les nuisances sonores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Étapes de l'installation */}
        <section>
          <h2 className="text-3xl font-bold mb-10">🔧 Les étapes de l'installation</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Déroulement type d'une installation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">🏗️ Phase préparatoire</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Visite technique et dimensionnement</li>
                    <li>• Choix de l'emplacement des unités</li>
                    <li>• Préparation des supports et fixations</li>
                    <li>• Vérification des alimentations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">⚡ Phase d'installation</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Pose des unités extérieure et intérieure</li>
                    <li>• Raccordements hydrauliques et électriques</li>
                    <li>• Mise en service et réglages</li>
                    <li>• Tests de fonctionnement et formation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Durée et contraintes */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⏱️ Durée et contraintes de l'installation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
              <ClipboardCheck className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Durée des travaux</h3>
              <p className="text-gray-700 text-sm">
                Entre 1 et 3 jours selon la complexité de l'installation et les adaptations nécessaires 
                sur le circuit existant.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <Wrench className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-600 mb-2">Gêne occasionnée</h3>
              <p className="text-gray-700 text-sm">
                Installation peu invasive. Le chauffage peut être maintenu pendant une grande partie 
                des travaux grâce à l'ancien système.
              </p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
              <Settings className="w-10 h-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-orange-600 mb-2">Mise en service</h3>
              <p className="text-gray-700 text-sm">
                Réglages fins, programmation et formation à l'utilisation pour optimiser les performances 
                et votre confort.
              </p>
            </div>
          </div>
        </section>

        {/* Points d'attention */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⚠️ Points d'attention pour une installation réussie</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Dimensionnement précis</h3>
              <p className="text-gray-700">
                Une PAC sous-dimensionnée ne chauffera pas suffisamment, une PAC surdimensionnée 
                consommera plus et s'usera prématurément.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🔧 Qualité de l'installation</h3>
              <p className="text-gray-700">
                L'étanchéité du circuit frigorifique et la qualité des raccordements sont cruciales 
                pour la performance et la durabilité de l'équipement.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Réglages optimaux</h3>
              <p className="text-gray-700">
                La programmation et les réglages initiaux déterminent l'efficacité énergétique. 
                Un professionnel qualifié est indispensable.
              </p>
            </div>
          </div>
        </section>

        {/* Certification RGE */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🏆 L'importance de la certification RGE</h2>
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Pourquoi choisir un installateur RGE ?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✔️ <strong>Expertise technique</strong> reconnue et contrôlée</li>
                  <li>✔️ <strong>Accès aux aides financières</strong> (MaPrimeRénov', CEE)</li>
                  <li>✔️ <strong>Garanties étendues</strong> sur l'installation</li>
                  <li>✔️ <strong>Respect des normes</strong> de sécurité et environnementales</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-12 h-12 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">
                  Certification RGE obligatoire pour les aides
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ installation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions sur l'installation</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Peut-on installer une PAC air/eau partout ?</h3>
              <p className="text-gray-700">
                Oui, mais l'efficacité dépend du climat local et de l'isolation du logement. 
                Une étude préalable permet de valider la faisabilité.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Faut-il changer tous ses radiateurs ?</h3>
              <p className="text-gray-700">
                Pas forcément. Les radiateurs existants peuvent souvent être conservés, mais des 
                adaptations peuvent être nécessaires pour optimiser les performances.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Quelle maintenance après installation ?</h3>
              <p className="text-gray-700">
                Un entretien annuel par un professionnel est recommandé pour maintenir les performances 
                et prolonger la durée de vie de l'équipement.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Prêt à installer votre pompe à chaleur ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Demandez dès maintenant une étude technique gratuite pour connaître la faisabilité, 
            les aides disponibles et le dimensionnement optimal pour votre logement.
          </p>
          <button
            onClick={() => onPageChange("simulation")}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🔧 Demander mon étude technique
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default InstallationPacAirEau;