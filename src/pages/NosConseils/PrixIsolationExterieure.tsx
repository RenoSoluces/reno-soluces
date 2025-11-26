// src/pages/PrixIsolationExterieure.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calculator, TrendingUp, Home, CheckCircle, Euro, BarChart3, Shield } from "lucide-react";
import Exterieur1 from '../../assets/Exterieur1.jpeg';

const PrixIsolationExterieure: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Prix de l'isolation thermique extérieure : comprendre l'investissement
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez tous les facteurs qui influencent le coût d'une isolation thermique par l'extérieur 
            et comment optimiser votre investissement pour maximiser votre confort et vos économies.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💰 Comprendre le coût de l'isolation extérieure</h2>
          <p className="text-gray-700 leading-relaxed">
            Le <strong>prix de l'isolation thermique par l'extérieur</strong> représente un investissement 
            important mais rentable à long terme. Cette solution, plus coûteuse que l'isolation intérieure, 
            offre des performances thermiques supérieures et valorise significativement votre bien immobilier. 
            Comprendre les facteurs de coût vous permettra de faire le meilleur choix pour votre projet.
          </p>
        </section>

        {/* Facteurs qui influencent le prix */}
        <section>
          <h2 className="text-3xl font-bold mb-10">📊 Les facteurs qui influencent le coût</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. La surface à isoler</h3>
                <p className="text-gray-700">
                  Plus la surface des murs extérieurs est importante, plus le coût global augmente. 
                  Cependant, le coût au m² diminue généralement avec la surface totale.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. La complexité architecturale</h3>
                <p className="text-gray-700">
                  Les angles, balcons, ouvertures et détails architecturaux augmentent la difficulté 
                  de pose et donc le coût de la main d'œuvre spécialisée.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Le choix des matériaux</h3>
                <p className="text-gray-700">
                  Type d'isolant (polystyrène, laine minérale, fibre de bois), épaisseur, 
                  et finition (enduit, bardage) impactent directement le coût final.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calculator className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. La technique de pose</h3>
                <p className="text-gray-700">
                  Enduit sur isolant, bardage rapporté ou vêture : chaque technique a ses spécificités 
                  et son niveau de complexité, influençant le coût de réalisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Composition du prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔍 Composition du coût d'une isolation extérieure</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Répartition indicative des coûts</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">35%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Matériaux isolants</h4>
                <p className="text-sm text-gray-600">Panneaux, rouleaux, vrac</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">40%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Main d'œuvre</h4>
                <p className="text-sm text-gray-600">Pose et finitions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">15%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Finitions</h4>
                <p className="text-sm text-gray-600">Enduit ou bardage</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">10%</span>
                </div>
                <h4 className="font-semibold text-gray-900">Accessoires</h4>
                <p className="text-sm text-gray-600">Fixations, profilés</p>
              </div>
            </div>
          </div>
        </section>

        {/* Évolution du marché */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📈 L'évolution du marché de l'isolation</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Une technique de plus en plus maîtrisée</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>coût de l'isolation thermique extérieure</strong> s'est stabilisé ces dernières 
                années grâce à la démocratisation de cette technique. Cette stabilisation s'explique par :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• La formation croissante des artisans spécialisés</li>
                <li>• L'amélioration des techniques de pose</li>
                <li>• La diversification de l'offre de matériaux</li>
                <li>• Les économies d'échelle sur les chantiers</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={Exterieur1}
                alt="Évolution du marché de l'isolation extérieure"
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
                <h4 className="font-semibold text-gray-900 mb-2">Coût de l'isolation</h4>
                <p className="text-gray-700 text-sm">
                  Investissement initial moins les aides financières (MaPrimeRénov', CEE, 
                  TVA réduite, aides locales).
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Économies générées</h4>
                <p className="text-gray-700 text-sm">
                  Réduction des factures de chauffage et de climatisation grâce à l'amélioration 
                  des performances thermiques.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Durée d'amortissement</h4>
                <p className="text-gray-700 text-sm">
                  Temps nécessaire pour récupérer votre investissement, généralement entre 12 et 18 ans.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Valorisation immobilière</h4>
                <p className="text-gray-700 text-sm">
                  Augmentation de la valeur de votre bien grâce à l'amélioration du DPE et du confort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Éléments inclus dans le prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📋 Que comprend le coût d'une isolation extérieure ?</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">✅ Généralement inclus</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Matériaux isolants et fixations</li>
                  <li>• Enduit de base et de finition</li>
                  <li>• Main d'œuvre et échafaudage</li>
                  <li>• Traitement des points singuliers</li>
                  <li>• Nettoyage du chantier</li>
                  <li>• Garanties décennale et parfait achèvement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">⚠️ Parfois en supplément</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Démarches administratives (permis de construire)</li>
                  <li>• Modification des descentes d'eau pluviale</li>
                  <li>• Extension des débords de toit</li>
                  <li>• Traitement spécifique des balcons</li>
                  <li>• Réfection des seuils et appuis</li>
                  <li>• Peinture des menuiseries</li>
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
                Aide de l'État calculée selon vos revenus et la surface isolée. Cette prime peut 
                considérablement réduire le coût de votre isolation extérieure.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Certificats d'Économies d'Énergie</h3>
              <p className="text-gray-700">
                Prime versée par les fournisseurs d'énergie, cumulable avec MaPrimeRénov'. 
                Son montant dépend de la surface isolée et de votre zone climatique.
              </p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">TVA réduite à 5,5%</h3>
              <p className="text-gray-700">
                Applicable sur la fourniture et la pose si vos travaux d'isolation extérieure 
                améliorent la performance énergétique de votre logement.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Éco-prêt à taux zéro</h3>
              <p className="text-gray-700">
                Prêt sans intérêts pour financer vos travaux d'isolation, remboursable sur 15 ans 
                maximum selon le montant emprunté.
              </p>
            </div>
          </div>
        </section>

        {/* Comparaison des techniques */}
        <section>
          <h2 className="text-3xl font-bold mb-6">⚖️ Comparaison des techniques d'isolation extérieure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Enduit sur isolant</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Technique :</strong> Collage + chevilles</p>
                <p><strong>Finition :</strong> Enduit taloché</p>
                <p><strong>Esthétique :</strong> Aspect traditionnel</p>
                <p><strong>Coût :</strong> Intermédiaire</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Bardage rapporté</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Technique :</strong> Ossature + bardage</p>
                <p><strong>Finition :</strong> Bois, PVC, composite</p>
                <p><strong>Esthétique :</strong> Moderne et personnalisable</p>
                <p><strong>Coût :</strong> Plus élevé</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Vêture</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Technique :</strong> Élément préfabriqué</p>
                <p><strong>Finition :</strong> Intégrée au système</p>
                <p><strong>Esthétique :</strong> Uniforme et rapide</p>
                <p><strong>Coût :</strong> Variable selon finition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facteurs d'économies */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💡 Comment optimiser votre investissement ?</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <TrendingUp className="w-8 h-8 text-green-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Choisissez le bon moment</h3>
                <p className="text-gray-700">
                  Profitez d'une rénovation de façade ou de toiture pour réaliser l'isolation extérieure. 
                  Les coûts d'échafaudage sont alors mutualisés.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-blue-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Comparez plusieurs devis</h3>
                <p className="text-gray-700">
                  Demandez au moins 3 devis détaillés d'artisans certifiés RGE pour comparer 
                  les techniques, matériaux et garanties proposées.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Euro className="w-8 h-8 text-purple-600 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Maximisez les aides financières</h3>
                <p className="text-gray-700">
                  Cumulez MaPrimeRénov', CEE et TVA réduite. Ces aides peuvent couvrir une part 
                  importante de votre investissement selon vos revenus.
                </p>
              </div>
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
                  Réduction significative des besoins en chauffage et climatisation, 
                  avec des économies durables sur vos factures énergétiques.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Confort thermique</h4>
                <p className="text-gray-700 text-sm">
                  Suppression des ponts thermiques, température homogène et amélioration 
                  du confort été comme hiver.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Valorisation immobilière</h4>
                <p className="text-gray-700 text-sm">
                  Amélioration du DPE et de l'attractivité de votre bien sur le marché immobilier, 
                  avec une plus-value à la revente.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Durabilité</h4>
                <p className="text-gray-700 text-sm">
                  Une isolation extérieure bien réalisée dure plusieurs décennies, 
                  amortissant largement l'investissement initial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conseils pour bien choisir */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🎯 Nos conseils pour bien choisir</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 Privilégiez la qualité</h3>
              <p className="text-gray-700">
                Un isolant performant et une pose soignée garantissent la durabilité de votre investissement. 
                Ne choisissez pas uniquement sur le critère du coût.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">⚡ Vérifiez les certifications</h3>
              <p className="text-gray-700">
                Assurez-vous que l'artisan soit certifié RGE pour bénéficier des aides financières 
                et garantir la conformité des travaux.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Demandez une étude thermique</h3>
              <p className="text-gray-700">
                Une étude préalable permet d'optimiser l'épaisseur d'isolant et la technique 
                selon votre logement et vos objectifs de performance.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions fréquentes sur les coûts</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">L'isolation extérieure coûte-t-elle plus cher que l'intérieure ?</h3>
              <p className="text-gray-700">
                Oui, l'isolation extérieure est plus coûteuse à l'installation, mais elle offre de meilleures 
                performances thermiques et ne réduit pas la surface habitable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Peut-on financer une isolation extérieure ?</h3>
              <p className="text-gray-700">
                Oui, plusieurs solutions existent : éco-prêt à taux zéro, prêts bancaires spécialisés, 
                ou étalement de paiement chez certains installateurs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Y a-t-il des coûts cachés ?</h3>
              <p className="text-gray-700">
                Les démarches administratives et certaines adaptations techniques peuvent être facturées 
                en supplément. Demandez toujours un devis détaillé.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Obtenez votre devis personnalisé</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Découvrez le coût exact de votre isolation extérieure avec une étude personnalisée 
            et gratuite. Nos experts vous accompagnent pour optimiser votre investissement.
          </p>
          <button
            onClick={() => onPageChange("simulateur-isolation")}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🏠 Estimer mes économies
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PrixIsolationExterieure;