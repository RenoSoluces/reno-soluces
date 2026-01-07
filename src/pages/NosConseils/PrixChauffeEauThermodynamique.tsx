// src/pages/PrixChauffeEauThermodynamique.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Home, CheckCircle, BarChart3, Settings, Droplets } from "lucide-react";
import BallonThermo3 from '../../assets/BallonThermo3.jpeg';

const PrixChauffeEauThermodynamique: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Prix d'un chauffe-eau thermodynamique : comprendre l'investissement
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez tous les facteurs qui influencent le coût d'un chauffe-eau thermodynamique 
            et comment optimiser votre investissement pour maximiser vos économies d'énergie.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💰 Comprendre le coût d'un chauffe-eau thermodynamique</h2>
          <p className="text-gray-700 leading-relaxed">
            Le <strong>prix d'un chauffe-eau thermodynamique</strong> représente un investissement plus 
            important qu'un chauffe-eau électrique classique, mais cette différence est rapidement 
            compensée par les économies d'énergie réalisées. Comprendre les facteurs qui influencent 
            le coût vous permettra de faire le meilleur choix pour votre projet et d'optimiser 
            votre retour sur investissement.
          </p>
        </section>

        {/* Facteurs qui influencent le prix */}
        <section>
          <h2 className="text-3xl font-bold mb-10">📊 Les facteurs qui influencent le coût</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. La capacité du ballon</h3>
                <p className="text-gray-700">
                  Plus la capacité est importante (150L, 200L, 300L), plus le coût augmente. 
                  Le choix dépend du nombre de personnes dans le foyer et des habitudes de consommation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Settings className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Le type de technologie</h3>
                <p className="text-gray-700">
                  Chauffe-eau sur air ambiant, air extérieur ou air extrait : chaque technologie 
                  a ses spécificités et son niveau de performance, influençant le coût.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. La marque et la qualité</h3>
                <p className="text-gray-700">
                  Les équipements haut de gamme offrent de meilleures performances, une durée de vie 
                  plus longue et des garanties étendues, justifiant un coût supérieur.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. La complexité d'installation</h3>
                <p className="text-gray-700">
                  L'accessibilité du local, les raccordements nécessaires et les adaptations 
                  éventuelles influencent le coût de la main d'œuvre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Composition du prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔍 Composition du coût d'un chauffe-eau thermodynamique</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Répartition indicative des coûts</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">60%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Équipement</h4>
                <p className="text-sm text-gray-600">Chauffe-eau thermodynamique</p>
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
                  <span className="text-orange-600 font-bold">10%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Raccordements</h4>
                <p className="text-sm text-gray-600">Hydraulique et électrique</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">5%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Accessoires</h4>
                <p className="text-sm text-gray-600">Gaines, supports, etc.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Évolution du marché */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📈 L'évolution du marché des chauffe-eau thermodynamiques</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Une technologie de plus en plus accessible</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>coût des chauffe-eau thermodynamiques</strong> s'est stabilisé ces dernières 
                années grâce à la démocratisation de cette technologie. Cette évolution favorable s'explique par :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• L'augmentation des volumes de production</li>
                <li>• L'amélioration des technologies de pompe à chaleur</li>
                <li>• La concurrence accrue entre fabricants</li>
                <li>• La standardisation des composants</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={BallonThermo3}
                alt="Évolution du marché des chauffe-eau thermodynamiques"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Éléments inclus dans le prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📋 Que comprend le coût d'un chauffe-eau thermodynamique ?</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">✅ Généralement inclus</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chauffe-eau thermodynamique complet</li>
                  <li>• Kit de raccordement hydraulique</li>
                  <li>• Raccordement électrique</li>
                  <li>• Main d'œuvre et mise en service</li>
                  <li>• Réglages et programmation</li>
                  <li>• Garanties constructeur</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">⚠️ Parfois en supplément</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Évacuation de l'ancien équipement</li>
                  <li>• Modification de la plomberie existante</li>
                  <li>• Gaines d'air pour modèles sur air extérieur</li>
                  <li>• Mise aux normes électriques</li>
                  <li>• Extension de garantie</li>
                  <li>• Contrat de maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Aides financières */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🎁 Les aides qui réduisent votre investissement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">MaPrimeRénov'</h3>
              <p className="text-gray-700">
                Aide de l'État calculée selon vos revenus. Cette prime peut considérablement 
                réduire le coût de votre chauffe-eau thermodynamique.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Certificats d'Économies d'Énergie</h3>
              <p className="text-gray-700">
                Prime versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'. 
                Son montant dépend des économies d'énergie générées.
              </p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">TVA réduite à 5,5%</h3>
              <p className="text-gray-700">
                Applicable sur la fourniture et la pose de votre chauffe-eau thermodynamique 
                en remplacement d'un équipement existant.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Éco-prêt à taux zéro</h3>
              <p className="text-gray-700">
                Prêt sans intérêts pour financer votre équipement, remboursable sur plusieurs années 
                selon le montant emprunté.
              </p>
            </div>
          </div>
        </section>

        {/* Conseils pour bien choisir */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🎯 Nos conseils pour optimiser votre achat</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 Comparez les technologies</h3>
              <p className="text-gray-700">
                Chauffe-eau sur air ambiant, extérieur ou extrait : chaque technologie a ses avantages 
                et son coût. Choisissez selon votre configuration.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Privilégiez la qualité</h3>
              <p className="text-gray-700">
                Un équipement de qualité coûte plus cher à l'achat mais offre de meilleures performances, 
                une durée de vie plus longue et moins de pannes.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Demandez plusieurs devis</h3>
              <p className="text-gray-700">
                Comparez au moins 3 devis d'installateurs certifiés RGE pour obtenir le meilleur 
                rapport qualité-prix et bénéficier des aides.
              </p>
            </div>
          </div>
        </section>

        {/* Retour sur investissement */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📊 Évaluer le retour sur investissement</h2>
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Les bénéfices à long terme</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Économies d'énergie</h4>
                <p className="text-gray-700 text-sm">
                  Réduction significative de la consommation électrique pour l'eau chaude, 
                  avec des économies durables sur vos factures.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Confort d'utilisation</h4>
                <p className="text-gray-700 text-sm">
                  Production d'eau chaude constante et silencieuse, avec une température 
                  stable et un fonctionnement automatique.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Valorisation du logement</h4>
                <p className="text-gray-700 text-sm">
                  Un équipement moderne et économe améliore l'attractivité de votre bien 
                  et peut constituer un atout à la revente.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Durabilité</h4>
                <p className="text-gray-700 text-sm">
                  Avec une durée de vie de 15 à 20 ans, l'investissement est amorti 
                  sur une longue période avec des bénéfices durables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison des capacités */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⚖️ Choisir la bonne capacité selon vos besoins</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">150-200L</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Foyer :</strong> 1-3 personnes</p>
                <p><strong>Usage :</strong> Consommation modérée</p>
                <p><strong>Avantage :</strong> Compact et économique</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">250-300L</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Foyer :</strong> 3-5 personnes</p>
                <p><strong>Usage :</strong> Consommation standard</p>
                <p><strong>Avantage :</strong> Équilibre optimal</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">300L+</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Foyer :</strong> 5+ personnes</p>
                <p><strong>Usage :</strong> Forte consommation</p>
                <p><strong>Avantage :</strong> Confort maximal</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes sur les coûts</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Un chauffe-eau thermodynamique coûte-t-il plus cher qu'un électrique ?</h3>
              <p className="text-gray-700">
                Oui à l'achat, mais les économies d'énergie compensent rapidement cette différence. 
                L'investissement est généralement rentabilisé en 4 à 7 ans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Peut-on financer un chauffe-eau thermodynamique ?</h3>
              <p className="text-gray-700">
                Oui, plusieurs solutions existent : éco-prêt à taux zéro, prêts bancaires spécialisés, 
                ou financement par l'installateur selon les cas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Y a-t-il des coûts d'entretien importants ?</h3>
              <p className="text-gray-700">
                L'entretien est minimal : nettoyage annuel du filtre et contrôle périodique par un professionnel. 
                Les coûts de maintenance restent très raisonnables.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Obtenez votre devis personnalisé</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Découvrez le coût exact de votre chauffe-eau thermodynamique avec une étude personnalisée 
            et gratuite. Nos experts vous accompagnent pour optimiser votre investissement.
          </p>
          <button
            onClick={() => onPageChange("simulateur")}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            💧 Estimer le coût de mon projet
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PrixChauffeEauThermodynamique;