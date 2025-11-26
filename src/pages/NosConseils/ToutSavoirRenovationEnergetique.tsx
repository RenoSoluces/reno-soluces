// src/pages/ToutSavoirRenovationEnergetique.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Home, Shield, Zap, CheckCircle, Thermometer, Euro, Leaf } from "lucide-react";

const ToutSavoirRenovationEnergetique: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Tout savoir sur la rénovation énergétique
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez les enjeux, les solutions et les bénéfices de la rénovation énergétique 
            pour transformer votre logement en un espace plus confortable, économique et écologique.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🏠 Qu'est-ce que la rénovation énergétique ?</h2>
          <p className="text-gray-700 leading-relaxed">
            La <strong>rénovation énergétique</strong> consiste à améliorer les performances énergétiques 
            d'un logement en réduisant sa consommation d\'énergie et ses émissions de gaz à effet de serre. 
            Elle englobe tous les travaux visant à optimiser l'isolation, le chauffage, la ventilation 
            et la production d'énergie renouvelable. Cette démarche répond aux enjeux environnementaux 
            actuels tout en améliorant le confort des occupants et en réduisant les factures énergétiques.
          </p>
        </section>

        {/* Enjeux de la rénovation */}
        <section>
          <h2 className="text-3xl font-bold mb-10">🌍 Les enjeux de la rénovation énergétique</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <Leaf className="w-10 h-10 text-green-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Enjeu environnemental</h3>
                <p className="text-gray-700">
                  Le secteur du bâtiment représente plus de 40% de la consommation énergétique française 
                  et près de 25% des émissions de CO2. Rénover les logements est essentiel pour atteindre 
                  la neutralité carbone.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Euro className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Enjeu économique</h3>
                <p className="text-gray-700">
                  Face à la hausse continue des prix de l'énergie, la rénovation énergétique permet 
                  de réduire durablement les factures et de protéger les ménages de la précarité énergétique.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Thermometer className="w-10 h-10 text-orange-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Enjeu de confort</h3>
                <p className="text-gray-700">
                  Un logement bien rénové offre un confort thermique optimal été comme hiver, 
                  une meilleure qualité de l'air et une réduction des nuisances sonores.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-purple-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Enjeu patrimonial</h3>
                <p className="text-gray-700">
                  La rénovation énergétique valorise significativement votre bien immobilier 
                  et améliore son attractivité sur le marché, notamment grâce au DPE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types de rénovation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔧 Les différents types de rénovation énergétique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Rénovation par gestes</h3>
              <p className="text-gray-700 mb-4">
                Amélioration progressive du logement en traitant un poste à la fois : 
                isolation des combles, changement de chaudière, remplacement des fenêtres...
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Avantages :</strong> Investissement échelonné, travaux moins lourds</p>
                <p><strong>Inconvénients :</strong> Performances limitées, risque d'incohérence</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Rénovation d'ampleur</h3>
              <p className="text-gray-700 mb-4">
                Approche globale traitant simultanément plusieurs postes pour atteindre 
                un gain énergétique d'au moins 55% et améliorer significativement le DPE.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Avantages :</strong> Performances optimales, aides majorées</p>
                <p><strong>Inconvénients :</strong> Investissement important, travaux plus lourds</p>
              </div>
            </div>
          </div>
        </section>

        {/* Postes de travaux */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🏗️ Les principaux postes de travaux</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 text-center">
              <Shield className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Isolation</h3>
              <p className="text-gray-700 text-sm">
                Murs, combles, planchers, menuiseries pour limiter les déperditions thermiques.
              </p>
            </div>
            
            <div className="bg-white border-2 border-red-200 rounded-2xl p-6 text-center">
              <Zap className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-600 mb-2">Chauffage</h3>
              <p className="text-gray-700 text-sm">
                Pompes à chaleur, chaudières performantes, systèmes de régulation.
              </p>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center">
              <Home className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-600 mb-2">Ventilation</h3>
              <p className="text-gray-700 text-sm">
                VMC performantes pour renouveler l'air et éviter l'humidité.
              </p>
            </div>
            
            <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 text-center">
              <Leaf className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">Énergies renouvelables</h3>
              <p className="text-gray-700 text-sm">
                Panneaux solaires, chauffe-eau solaire, géothermie.
              </p>
            </div>
          </div>
        </section>

        {/* Étapes d'un projet */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📋 Les étapes d'un projet de rénovation énergétique</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Audit énergétique</h3>
                <p className="text-gray-700">
                  Diagnostic complet du logement pour identifier les postes de déperdition 
                  et définir les priorités d'intervention.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Définition du programme de travaux</h3>
                <p className="text-gray-700">
                  Élaboration d'un plan d'action personnalisé avec priorisation des interventions 
                  selon vos objectifs et votre budget.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Recherche de financement</h3>
                <p className="text-gray-700">
                  Identification et demande des aides financières disponibles : MaPrimeRénov', 
                  CEE, éco-PTZ, aides locales.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Réalisation des travaux</h3>
                <p className="text-gray-700">
                  Exécution des travaux par des professionnels qualifiés RGE selon 
                  le planning établi et les normes en vigueur.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">5</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contrôle et suivi</h3>
                <p className="text-gray-700">
                  Vérification des performances atteintes et accompagnement pour optimiser 
                  l'utilisation des nouveaux équipements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bénéfices de la rénovation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">✨ Les bénéfices de la rénovation énergétique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600">Bénéfices immédiats</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span>Amélioration du confort thermique</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span>Réduction des factures énergétiques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span>Meilleure qualité de l'air intérieur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span>Réduction des nuisances sonores</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">Bénéfices à long terme</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span>Valorisation du patrimoine immobilier</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span>Protection contre la hausse des prix de l'énergie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span>Contribution à la transition énergétique</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span>Amélioration du DPE du logement</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Priorités de rénovation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🎯 Par où commencer sa rénovation énergétique ?</h2>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Ordre de priorité recommandé</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Isolation thermique</h4>
                  <p className="text-gray-700 text-sm">
                    Commencez par isoler les combles, puis les murs et enfin les planchers bas. 
                    L'isolation réduit les besoins en chauffage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ventilation</h4>
                  <p className="text-gray-700 text-sm">
                    Installez une VMC performante pour renouveler l'air et éviter l'humidité, 
                    surtout après isolation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Système de chauffage</h4>
                  <p className="text-gray-700 text-sm">
                    Remplacez votre ancien système par un équipement performant 
                    (pompe à chaleur, chaudière à condensation).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Énergies renouvelables</h4>
                  <p className="text-gray-700 text-sm">
                    Ajoutez des panneaux solaires, un chauffe-eau thermodynamique 
                    ou d'autres solutions renouvelables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aides disponibles */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💰 Les aides pour financer votre rénovation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Aides nationales</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• MaPrimeRénov' (selon revenus et travaux)</li>
                <li>• Certificats d'Économies d'Énergie (CEE)</li>
                <li>• TVA réduite à 5,5% sur les travaux</li>
                <li>• Éco-prêt à taux zéro</li>
                <li>• Coup de pouce chauffage</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Aides locales</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Subventions régionales et départementales</li>
                <li>• Aides des collectivités locales</li>
                <li>• Prêts à taux bonifiés</li>
                <li>• Exonérations fiscales temporaires</li>
                <li>• Programmes spécifiques territoriaux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Erreurs à éviter */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⚠️ Les erreurs à éviter en rénovation énergétique</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-red-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🚫 Négliger l'audit énergétique</h3>
              <p className="text-gray-700">
                Commencer des travaux sans diagnostic préalable peut conduire à des choix inadaptés 
                et à une perte d'efficacité.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🚫 Choisir des artisans non qualifiés</h3>
              <p className="text-gray-700">
                Seuls les professionnels RGE permettent de bénéficier des aides financières 
                et garantissent la qualité des travaux.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-yellow-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🚫 Négliger la ventilation</h3>
              <p className="text-gray-700">
                Une isolation renforcée sans ventilation adaptée peut créer des problèmes 
                d'humidité et de qualité de l'air.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes sur la rénovation énergétique</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Combien coûte une rénovation énergétique ?</h3>
              <p className="text-gray-700">
                Le coût varie énormément selon l'ampleur des travaux, de quelques milliers d'euros 
                pour des gestes isolés à plusieurs dizaines de milliers pour une rénovation complète.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Combien de temps pour rentabiliser les travaux ?</h3>
              <p className="text-gray-700">
                Généralement entre 7 et 15 ans selon les travaux réalisés et les aides obtenues. 
                L'isolation est souvent rentabilisée plus rapidement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Peut-on rénover en habitant dans le logement ?</h3>
              <p className="text-gray-700">
                Oui pour la plupart des travaux, notamment l'isolation extérieure. Seuls certains 
                travaux lourds peuvent nécessiter un déménagement temporaire.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Lancez votre projet de rénovation énergétique</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Bénéficiez d'un accompagnement complet pour transformer votre logement en un espace 
            plus confortable, économique et respectueux de l'environnement.
          </p>
          <button
            onClick={() => onPageChange("simulation")}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🏠 Commencer mon projet
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default ToutSavoirRenovationEnergetique;