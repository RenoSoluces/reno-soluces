// src/pages/PrixPanneauxSolaires.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calculator, TrendingUp, Home, CheckCircle, Euro, BarChart3 } from "lucide-react";

const PrixPanneauxSolaires: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Prix des panneaux solaires : tout comprendre pour bien investir
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez tous les facteurs qui influencent le coût d'une installation photovoltaïque 
            et comment optimiser votre investissement pour maximiser votre rentabilité.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💰 Comprendre le coût d'une installation solaire</h2>
          <p className="text-gray-700 leading-relaxed">
            Le <strong>prix des panneaux solaires</strong> a considérablement baissé ces dernières années, 
            rendant cette technologie accessible au plus grand nombre. Cependant, plusieurs facteurs 
            influencent le coût final de votre installation photovoltaïque. Comprendre ces éléments 
            vous permettra de faire le meilleur choix pour votre projet.
          </p>
        </section>

        {/* Facteurs qui influencent le prix */}
        <section>
          <h2 className="text-3xl font-bold mb-10">📊 Les facteurs qui influencent le coût</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. La puissance de l'installation</h3>
                <p className="text-gray-700">
                  Plus la puissance installée est importante (exprimée en kWc), plus le coût global 
                  augmente. Cependant, le coût au kWc diminue avec la taille de l'installation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. La complexité de la toiture</h3>
                <p className="text-gray-700">
                  L'état, l'inclinaison, l'orientation et la configuration de votre toit influencent 
                  la difficulté d'installation et donc le coût de la main d'œuvre.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. La qualité des équipements</h3>
                <p className="text-gray-700">
                  Le choix des panneaux (monocristallins, polycristallins), de l'onduleur et des 
                  systèmes de fixation impacte directement le coût et la performance de l'installation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calculator className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Les options supplémentaires</h3>
                <p className="text-gray-700">
                  Batterie de stockage, système de monitoring, optimiseurs de puissance... Ces options 
                  améliorent les performances mais augmentent l'investissement initial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Composition du prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔍 Composition du prix d'une installation</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Répartition indicative des coûts</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">40%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Panneaux solaires</h4>
                <p className="text-sm text-gray-600">Modules photovoltaïques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">25%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Installation</h4>
                <p className="text-sm text-gray-600">Main d'œuvre et pose</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">20%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Onduleur</h4>
                <p className="text-sm text-gray-600">Conversion du courant</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">15%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Accessoires</h4>
                <p className="text-sm text-gray-600">Fixations, câblage, etc.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Évolution des prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📈 L'évolution du marché photovoltaïque</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Une technologie de plus en plus accessible</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>prix des panneaux solaires</strong> a chuté de plus de 80% depuis 2010, 
                rendant cette technologie accessible à un large public. Cette baisse s'explique par :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• L'industrialisation de la production</li>
                <li>• Les économies d'échelle</li>
                <li>• L'amélioration des rendements</li>
                <li>• La concurrence accrue sur le marché</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Évolution du marché photovoltaïque"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Rentabilité */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💡 Comment évaluer la rentabilité ?</h2>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Les critères à analyser</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Coût de l'installation</h4>
                <p className="text-gray-700 text-sm">
                  Investissement initial moins les aides financières (prime à l'autoconsommation, 
                  aides locales, TVA réduite).
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Économies générées</h4>
                <p className="text-gray-700 text-sm">
                  Réduction de vos factures d'électricité plus les revenus de la vente du surplus 
                  à EDF OA.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Durée d'amortissement</h4>
                <p className="text-gray-700 text-sm">
                  Temps nécessaire pour récupérer votre investissement, généralement entre 8 et 12 ans.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bénéfices sur 25 ans</h4>
                <p className="text-gray-700 text-sm">
                  Gains totaux sur la durée de vie garantie des panneaux, souvent très attractifs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conseils pour optimiser */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🎯 Nos conseils pour optimiser votre investissement</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <TrendingUp className="w-8 h-8 text-green-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Dimensionnez correctement votre installation</h3>
                <p className="text-gray-700">
                  Une installation surdimensionnée coûte plus cher sans apporter de bénéfices supplémentaires. 
                  L'idéal est de couvrir 70 à 80% de vos besoins énergétiques.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Choisissez un installateur certifié RGE</h3>
                <p className="text-gray-700">
                  La certification RGE QualiPV est obligatoire pour bénéficier des aides financières 
                  et garantit la qualité de l'installation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Euro className="w-8 h-8 text-purple-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Profitez de toutes les aides disponibles</h3>
                <p className="text-gray-700">
                  Prime à l'autoconsommation, TVA réduite, aides locales... Ces dispositifs peuvent 
                  réduire significativement votre investissement initial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison des technologies */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⚖️ Comparaison des technologies de panneaux</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Monocristallins</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Rendement :</strong> 18-22%</p>
                <p><strong>Durabilité :</strong> Excellente</p>
                <p><strong>Esthétique :</strong> Uniforme, noir</p>
                <p><strong>Coût :</strong> Plus élevé</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Polycristallins</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Rendement :</strong> 15-18%</p>
                <p><strong>Durabilité :</strong> Très bonne</p>
                <p><strong>Esthétique :</strong> Bleu marbré</p>
                <p><strong>Coût :</strong> Intermédiaire</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Couches minces</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Rendement :</strong> 10-12%</p>
                <p><strong>Durabilité :</strong> Bonne</p>
                <p><strong>Esthétique :</strong> Flexible</p>
                <p><strong>Coût :</strong> Plus abordable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Éléments inclus dans le prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📋 Que comprend le prix d'une installation ?</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">✅ Généralement inclus</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Panneaux photovoltaïques</li>
                  <li>• Onduleur(s) ou micro-onduleurs</li>
                  <li>• Système de fixation</li>
                  <li>• Câblage et protection électrique</li>
                  <li>• Main d'œuvre et mise en service</li>
                  <li>• Garanties constructeur</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">⚠️ Parfois en supplément</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Démarches administratives</li>
                  <li>• Raccordement au réseau Enedis</li>
                  <li>• Système de monitoring avancé</li>
                  <li>• Batterie de stockage</li>
                  <li>• Extension de garantie</li>
                  <li>• Maintenance préventive</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Aides financières */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🎁 Les aides qui réduisent votre investissement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Prime à l'autoconsommation</h3>
              <p className="text-gray-700">
                Versée sur 5 ans par EDF OA, cette prime réduit significativement le coût de votre 
                installation. Son montant dépend de la puissance installée.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">TVA réduite</h3>
              <p className="text-gray-700">
                Pour les installations de puissance inférieure ou égale à 3 kWc, bénéficiez d'un 
                taux de TVA réduit à 10% au lieu de 20%.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Aides locales</h3>
              <p className="text-gray-700">
                Certaines collectivités (régions, départements, communes) proposent des subventions 
                complémentaires pour encourager le photovoltaïque.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Vente du surplus</h3>
              <p className="text-gray-700">
                L'électricité non consommée est rachetée par EDF OA à un tarif garanti pendant 20 ans, 
                générant un revenu complémentaire.
              </p>
            </div>
          </div>
        </section>

        {/* Conseils pour bien choisir */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💡 Nos conseils pour bien choisir</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 Comparez plusieurs devis</h3>
              <p className="text-gray-700">
                Demandez au moins 3 devis détaillés pour comparer les prix, les équipements proposés 
                et les garanties offertes.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Privilégiez la qualité</h3>
              <p className="text-gray-700">
                Un équipement de qualité coûte plus cher à l'achat mais offre de meilleures performances 
                et une durée de vie plus longue.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Simulez votre rentabilité</h3>
              <p className="text-gray-700">
                Utilisez des outils de simulation pour estimer vos économies et le temps de retour 
                sur investissement selon votre profil de consommation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes sur les prix</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Le prix inclut-il l'installation ?</h3>
              <p className="text-gray-700">
                Oui, les devis incluent généralement la fourniture et la pose. Vérifiez toujours 
                ce qui est inclus dans le prix annoncé.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Y a-t-il des coûts cachés ?</h3>
              <p className="text-gray-700">
                Les frais de raccordement Enedis et certaines démarches administratives peuvent être 
                facturés en supplément. Demandez un devis détaillé.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Peut-on financer son installation ?</h3>
              <p className="text-gray-700">
                Oui, plusieurs solutions existent : éco-prêt à taux zéro, prêts bancaires spécialisés, 
                ou financement par l'installateur.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Obtenez votre devis personnalisé</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Découvrez le coût exact de votre installation solaire avec une étude personnalisée 
            et gratuite. Nos experts vous accompagnent pour optimiser votre investissement.
          </p>
          <button
            onClick={() => onPageChange("simulateur")}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            💰 Estimer mes économies
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PrixPanneauxSolaires;