// src/pages/CeeIsolationExterieure.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Shield, Euro, FileText, Calculator } from "lucide-react";

const CeeIsolationExterieure: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header activeSection="conseils" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Les CEE et l'isolation thermique extérieure
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Découvrez comment les Certificats d'Économies d'Énergie financent votre projet d'isolation 
            par l'extérieur et maximisent la rentabilité de vos travaux de rénovation énergétique.
          </p>
        </div>
      </section>

      {/* Article SEO */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* Intro */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🔎 Les CEE : un financement pour votre isolation extérieure</h2>
          <p className="text-gray-700 leading-relaxed">
            Les <strong>Certificats d'Économies d'Énergie (CEE)</strong> constituent une aide précieuse 
            pour financer votre projet d'<strong>isolation thermique par l\'extérieur</strong>. Ce dispositif 
            oblige les fournisseurs d'énergie à financer des actions d\'économies d'énergie, dont l\'isolation 
            des bâtiments. Pour l'isolation extérieure, les CEE peuvent représenter une aide substantielle 
            qui améliore significativement la rentabilité de votre projet.
          </p>
        </section>

        {/* Comment ça marche */}
        <section>
          <h2 className="text-3xl font-bold mb-10">⚡ Comment fonctionnent les CEE pour l'isolation extérieure ?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <FileText className="w-10 h-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Obligation des fournisseurs</h3>
                <p className="text-gray-700">
                  Les fournisseurs d'énergie (électricité, gaz, carburants) doivent financer des actions 
                  d'économies d'énergie pour obtenir des certificats.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calculator className="w-10 h-10 text-green-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Calcul des économies</h3>
                <p className="text-gray-700">
                  Le montant de la prime CEE dépend des économies d'énergie générées par votre isolation 
                  extérieure, calculées selon des barèmes officiels.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Euro className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Versement de la prime</h3>
                <p className="text-gray-700">
                  La prime est versée directement par le fournisseur d'énergie ou déduite 
                  de votre facture de travaux selon les modalités choisies.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-10 h-10 text-purple-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Cumul avec autres aides</h3>
                <p className="text-gray-700">
                  Les CEE sont cumulables avec MaPrimeRénov', la TVA réduite et les aides locales 
                  pour maximiser votre financement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions d'éligibilité */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📋 Conditions d'éligibilité des CEE pour l'isolation extérieure</h2>
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Critères à respecter</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">🏠 Critères techniques</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Logement construit depuis plus de 2 ans</li>
                  <li>• Résistance thermique minimale à atteindre (R ≥ 3,7 m².K/W)</li>
                  <li>• Surface minimale d'isolation à respecter</li>
                  <li>• Matériaux certifiés et conformes aux normes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">👷 Critères d'installation</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Travaux réalisés par un professionnel certifié RGE</li>
                  <li>• Respect des règles de l'art et des DTU</li>
                  <li>• Attestation de fin de travaux obligatoire</li>
                  <li>• Dossier constitué avant le début des travaux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages spécifiques */}
        <section>
          <h2 className="text-3xl font-bold mb-6">🌟 Pourquoi les CEE sont particulièrement intéressants pour l'ITE ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Économies importantes</h3>
              <p className="text-gray-700">
                L'isolation extérieure génère des économies d'énergie significatives, ce qui se traduit 
                par un montant de CEE plus élevé que pour d'autres travaux.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Bonus précarité énergétique</h3>
              <p className="text-gray-700">
                Les ménages aux revenus modestes bénéficient d'une majoration des CEE, 
                rendant l'isolation extérieure encore plus accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Démarches */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📝 Comment obtenir les CEE pour votre isolation ?</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Choisir un fournisseur CEE</h3>
                <p className="text-gray-700">
                  Comparez les offres des différents fournisseurs d'énergie ou délégataires 
                  pour obtenir la meilleure prime pour votre projet.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Constituer le dossier</h3>
                <p className="text-gray-700">
                  Rassemblez les documents nécessaires : devis détaillé, attestation sur l'honneur, 
                  justificatifs de revenus si applicable.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Réaliser les travaux</h3>
                <p className="text-gray-700">
                  Faites réaliser vos travaux par l'artisan RGE choisi en respectant 
                  les spécifications techniques du dossier CEE.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Recevoir la prime</h3>
                <p className="text-gray-700">
                  Après validation du dossier et des travaux, la prime CEE est versée 
                  selon les modalités convenues (virement, chèque, déduction).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conseils d'optimisation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">💡 Optimiser vos CEE pour l'isolation extérieure</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Négociez votre prime</h3>
              <p className="text-gray-700">
                Les montants CEE peuvent varier selon les fournisseurs. N'hésitez pas à faire jouer 
                la concurrence pour obtenir la meilleure offre.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Cumulez avec MaPrimeRénov'</h3>
              <p className="text-gray-700">
                L'association CEE + MaPrimeRénov' peut couvrir une part très importante du coût 
                de votre isolation extérieure selon vos revenus.
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-orange-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">⏰ Anticipez les démarches</h3>
              <p className="text-gray-700">
                Constituez votre dossier CEE avant de signer le devis. Une fois les travaux commencés, 
                il est trop tard pour bénéficier de cette aide.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">❓ Questions sur les CEE et l'isolation extérieure</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Tous les matériaux isolants sont-ils éligibles aux CEE ?</h3>
              <p className="text-gray-700">
                Non, seuls les matériaux respectant les critères de résistance thermique minimale 
                et les certifications requises sont éligibles aux CEE.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Peut-on cumuler CEE et MaPrimeRénov' ?</h3>
              <p className="text-gray-700">
                Oui, ces deux aides sont parfaitement cumulables pour l'isolation extérieure, 
                dans la limite des plafonds autorisés.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Combien de temps pour recevoir la prime CEE ?</h3>
              <p className="text-gray-700">
                Généralement entre 4 et 8 semaines après la validation de votre dossier complet 
                avec les justificatifs de fin de travaux.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Profitez des CEE pour votre isolation extérieure</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour maximiser vos aides CEE et réaliser votre projet 
            d'isolation thermique par l'extérieur dans les meilleures conditions.
          </p>
          <button
            onClick={() => onPageChange("simulateur-isolation")}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            🎯 Estimer mes aides
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default CeeIsolationExterieure;