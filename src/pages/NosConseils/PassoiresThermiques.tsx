// src/pages/PassoiresThermiques.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AlertTriangle, TrendingDown, Home, Shield, CheckCircle, Thermometer, Euro, BarChart3 } from "lucide-react";

const PassoiresThermiques: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Les passoires thermiques : comprendre et agir
          </h1>
          <p className="text-lg text-orange-100 max-w-3xl mx-auto">
            Découvrez ce que sont les passoires thermiques, leurs impacts sur votre quotidien 
            et les solutions pour transformer votre logement énergivore en un espace confortable et économique.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Définition */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔍 Qu'est-ce qu'une passoire thermique ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Une <strong>passoire thermique</strong> désigne un logement très mal isolé qui consomme 
            énormément d'énergie pour le chauffage et la climatisation. Selon la réglementation française, 
            il s'agit des logements classés F ou G au <strong>Diagnostic de Performance Énergétique (DPE)</strong>, 
            soit une consommation supérieure à 330 kWh/m²/an. Ces logements représentent environ 17% 
            du parc immobilier français et sont progressivement interdits à la location.
          </p>
        </section>

        {/* Classification DPE */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📊 La classification DPE et les passoires thermiques</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Échelle du Diagnostic de Performance Énergétique</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { class: 'A', color: 'bg-green-600', text: 'text-white', range: '≤ 70' },
                { class: 'B', color: 'bg-green-400', text: 'text-white', range: '71-110' },
                { class: 'C', color: 'bg-yellow-400', text: 'text-gray-900', range: '111-180' },
                { class: 'D', color: 'bg-yellow-500', text: 'text-white', range: '181-250' },
                { class: 'E', color: 'bg-orange-400', text: 'text-white', range: '251-330' },
                { class: 'F', color: 'bg-red-500', text: 'text-white', range: '331-420', isPassoire: true },
                { class: 'G', color: 'bg-red-700', text: 'text-white', range: '> 420', isPassoire: true }
              ].map((item) => (
                <div key={item.class} className={`${item.color} ${item.text} p-4 rounded-lg text-center ${item.isPassoire ? 'ring-4 ring-red-300' : ''}`}>
                  <div className="text-2xl font-bold">{item.class}</div>
                  <div className="text-xs mt-1">{item.range}</div>
                  {item.isPassoire && (
                    <div className="text-xs mt-2 font-semibold">PASSOIRE</div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm mt-4">
              Consommation en kWh/m²/an - Les classes F et G constituent les passoires thermiques
            </p>
          </div>
        </section>

        {/* Conséquences des passoires thermiques */}
        <section>
          <h2 className="text-3xl font-bold mb-10">⚠️ Les conséquences des passoires thermiques</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <Euro className="w-10 h-10 text-red-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Impact financier</h3>
                <p className="text-gray-700">
                  Factures énergétiques très élevées, parfois plusieurs milliers d'euros par an. 
                  Les occupants peuvent basculer dans la précarité énergétique.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Thermometer className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Inconfort thermique</h3>
                <p className="text-gray-700">
                  Difficultés à chauffer en hiver, surchauffe en été, courants d'air, 
                  humidité et variations importantes de température entre les pièces.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-10 h-10 text-orange-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Problèmes de santé</h3>
                <p className="text-gray-700">
                  Humidité excessive, moisissures, mauvaise qualité de l'air pouvant 
                  provoquer des problèmes respiratoires et des allergies.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <TrendingDown className="w-10 h-10 text-purple-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Dévalorisation immobilière</h3>
                <p className="text-gray-700">
                  Difficultés de vente ou de location, décote importante sur le marché immobilier 
                  et interdiction progressive de mise en location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Réglementation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📜 La réglementation sur les passoires thermiques</h2>
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Calendrier des interdictions de location</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-red-700 text-white rounded flex items-center justify-center font-bold">
                  2023
                </div>
                <p className="text-gray-700">
                  Interdiction de louer les logements consommant plus de 450 kWh/m²/an
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-red-600 text-white rounded flex items-center justify-center font-bold">
                  2025
                </div>
                <p className="text-gray-700">
                  Interdiction de louer tous les logements classés G au DPE
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-red-500 text-white rounded flex items-center justify-center font-bold">
                  2028
                </div>
                <p className="text-gray-700">
                  Interdiction de louer tous les logements classés F au DPE
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-orange-500 text-white rounded flex items-center justify-center font-bold">
                  2034
                </div>
                <p className="text-gray-700">
                  Interdiction de louer tous les logements classés E au DPE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions pour sortir du statut */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🛠️ Comment sortir du statut de passoire thermique ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Solutions prioritaires</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span><strong>Isolation des combles :</strong> jusqu'à 30% d'économies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span><strong>Isolation des murs :</strong> suppression des ponts thermiques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span><strong>Changement des fenêtres :</strong> réduction des déperditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span><strong>Nouveau système de chauffage :</strong> pompe à chaleur</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Approche recommandée</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <BarChart3 className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span><strong>Audit énergétique :</strong> diagnostic complet du logement</span>
                </li>
                <li className="flex items-start">
                  <Home className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span><strong>Rénovation d'ampleur :</strong> traitement global et cohérent</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span><strong>Artisans RGE :</strong> qualité et accès aux aides</span>
                </li>
                <li className="flex items-start">
                  <Euro className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span><strong>Aides maximisées :</strong> financement optimal du projet</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gains attendus */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📈 Les gains attendus après rénovation</h2>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Transformation d'une passoire thermique</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Économies d'énergie</h4>
                <p className="text-gray-700 text-sm">
                  Réduction de 50 à 80% de la consommation énergétique selon les travaux réalisés.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Confort thermique</h4>
                <p className="text-gray-700 text-sm">
                  Température homogène, suppression des courants d'air et de l'humidité.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Valorisation</h4>
                <p className="text-gray-700 text-sm">
                  Passage d'un DPE F/G vers C/D, augmentant significativement la valeur du bien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signes d'une passoire thermique */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🚨 Comment reconnaître une passoire thermique ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-600">Signes d'alerte</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                  <span>Factures énergétiques très élevées</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                  <span>Difficultés à chauffer certaines pièces</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                  <span>Sensation de froid près des murs et fenêtres</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                  <span>Condensation et moisissures</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1" />
                  <span>Courants d'air et variations de température</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-600">Caractéristiques techniques</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <span>Absence d'isolation ou isolation insuffisante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <span>Fenêtres simple vitrage ou très anciennes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <span>Système de chauffage obsolète et peu performant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <span>Ventilation inexistante ou défaillante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <span>Nombreux ponts thermiques</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Réglementation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📜 La réglementation sur les passoires thermiques</h2>
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Calendrier des interdictions de location</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-red-700 text-white rounded flex items-center justify-center font-bold">
                  2023
                </div>
                <p className="text-gray-700">
                  Interdiction de louer les logements consommant plus de 450 kWh/m²/an
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-red-600 text-white rounded flex items-center justify-center font-bold">
                  2025
                </div>
                <p className="text-gray-700">
                  Interdiction de louer tous les logements classés G au DPE
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-red-500 text-white rounded flex items-center justify-center font-bold">
                  2028
                </div>
                <p className="text-gray-700">
                  Interdiction de louer tous les logements classés F au DPE
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-8 bg-orange-500 text-white rounded flex items-center justify-center font-bold">
                  2034
                </div>
                <p className="text-gray-700">
                  Interdiction de louer tous les logements classés E au DPE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions de rénovation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔧 Les solutions pour rénover une passoire thermique</h2>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🏠 Rénovation d'ampleur (recommandée)</h3>
              <p className="text-gray-700">
                Approche globale traitant simultanément isolation, chauffage et ventilation 
                pour un gain énergétique optimal et des aides financières majorées.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🔧 Rénovation par étapes</h3>
              <p className="text-gray-700">
                Amélioration progressive en commençant par l'isolation (combles, murs), 
                puis le chauffage et enfin la ventilation selon votre budget.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Gestes d'urgence</h3>
              <p className="text-gray-700">
                Actions immédiates pour améliorer le confort : calfeutrage, rideaux thermiques, 
                programmation du chauffage, en attendant des travaux plus importants.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes sur les passoires thermiques</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Comment savoir si mon logement est une passoire thermique ?</h3>
              <p className="text-gray-700">
                Consultez votre DPE ou faites réaliser un diagnostic. Si votre logement est classé F ou G, 
                c'est une passoire thermique qui nécessite une rénovation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Combien coûte la sortie du statut de passoire thermique ?</h3>
              <p className="text-gray-700">
                Le coût varie selon l'état initial et les travaux nécessaires. Avec les aides disponibles, 
                le reste à charge peut être considérablement réduit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Peut-on louer une passoire thermique ?</h3>
              <p className="text-gray-700">
                Les logements G sont interdits à la location depuis 2025, les F le seront en 2028. 
                Il est urgent de rénover pour continuer à louer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Sortez votre logement du statut de passoire thermique</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Bénéficiez d'un accompagnement complet pour transformer votre logement énergivore 
            en un espace confortable et économique grâce aux aides renforcées.
          </p>
          <button
            onClick={() => onPageChange("simulateur")}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🏠 Évaluer mon logement
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PassoiresThermiques;