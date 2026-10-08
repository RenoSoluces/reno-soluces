// src/pages/NosConseils/PrixPanneauxSolaires.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Calculator,
  TrendingUp,
  Home,
  CheckCircle,
  Euro,
  BarChart3,
} from "lucide-react";

const PrixPanneauxSolaires: React.FC<{
  onPageChange: (page: string) => void;
}> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header
        activeSection="conseils"
        onSectionChange={() => {}}
        onPageChange={onPageChange}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Prix des panneaux solaires : comprendre le coût d'une installation
          </h1>

          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez les principaux éléments qui influencent le prix d'une
            installation photovoltaïque et les points à vérifier avant de
            comparer les devis.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Comprendre le prix d'une installation solaire
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Le prix d'une installation photovoltaïque dépend de nombreux
            paramètres. La puissance prévue, la configuration de la toiture,
            le matériel sélectionné et les travaux nécessaires peuvent faire
            varier sensiblement le montant d'un projet à l'autre.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Pour comparer correctement plusieurs propositions, il est
            important de regarder le contenu détaillé du devis et pas
            uniquement son montant total.
          </p>
        </section>

        {/* Facteurs */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            Les facteurs qui influencent le coût
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. La puissance de l'installation
                </h3>

                <p className="text-gray-700">
                  La puissance photovoltaïque prévue influence directement la
                  quantité de matériel nécessaire et donc le coût global du
                  projet. Elle doit être adaptée aux caractéristiques du
                  logement et aux objectifs de consommation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-green-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. La configuration de la toiture
                </h3>

                <p className="text-gray-700">
                  L'orientation, l'inclinaison, l'état de la couverture,
                  l'accessibilité et la configuration de la toiture peuvent
                  influencer les conditions de pose et le montant des travaux.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-10 h-10 text-purple-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  3. Les équipements choisis
                </h3>

                <p className="text-gray-700">
                  Les panneaux, les onduleurs ou micro-onduleurs, les systèmes
                  de fixation et les dispositifs de protection peuvent
                  présenter des caractéristiques et des tarifs différents.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calculator className="w-10 h-10 text-orange-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4. Les équipements complémentaires
                </h3>

                <p className="text-gray-700">
                  Une batterie, un système de suivi de production ou certains
                  équipements complémentaires peuvent être ajoutés selon les
                  besoins du projet et modifier le budget global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Composition du prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Que comprend le prix d'une installation photovoltaïque ?
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              Il n'existe pas de répartition identique pour toutes les
              installations. Le devis doit permettre d'identifier les
              différents éléments facturés.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Les panneaux photovoltaïques
                </h3>

                <p className="text-gray-700">
                  Les modules constituent une partie essentielle de
                  l'installation. Leur modèle et leurs caractéristiques doivent
                  apparaître clairement dans le devis.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  L'onduleur et les équipements électriques
                </h3>

                <p className="text-gray-700">
                  L'installation peut comprendre un onduleur central ou des
                  micro-onduleurs ainsi que différents équipements de
                  protection et de raccordement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  La fixation et la pose
                </h3>

                <p className="text-gray-700">
                  Le système de fixation et la main-d'œuvre dépendent notamment
                  de la configuration de la toiture et des conditions du
                  chantier.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Les démarches et prestations complémentaires
                </h3>

                <p className="text-gray-700">
                  Certaines prestations administratives, raccordements ou
                  équipements complémentaires peuvent être inclus ou faire
                  l'objet d'une ligne distincte sur le devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Évolution du marché */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Comprendre l'évolution du marché photovoltaïque
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Un marché avec de nombreuses solutions
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Le marché photovoltaïque propose aujourd'hui différents types
                de panneaux, d'onduleurs et de configurations. Les offres
                peuvent donc présenter des différences importantes de matériel
                et de prestations.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>• Différents modèles de panneaux</li>
                <li>• Plusieurs solutions d'onduleurs</li>
                <li>• Différents systèmes de fixation</li>
                <li>• Des options de suivi et de stockage</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Un devis doit rester lisible
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Avant de comparer deux offres, vérifiez que les équipements,
                les quantités, la pose et les éventuelles prestations
                complémentaires sont clairement identifiés.
              </p>
            </div>
          </div>
        </section>

        {/* Rentabilité */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Comment évaluer la pertinence d'un projet photovoltaïque ?
          </h2>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Les éléments à analyser
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Le coût global
                </h4>

                <p className="text-gray-700 text-sm">
                  Prenez en compte l'ensemble des équipements, la pose, les
                  raccordements éventuels et les prestations complémentaires.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  La consommation du logement
                </h4>

                <p className="text-gray-700 text-sm">
                  Le dimensionnement doit tenir compte des habitudes de
                  consommation et du fonctionnement du logement.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  L'autoconsommation
                </h4>

                <p className="text-gray-700 text-sm">
                  La production peut être consommée directement selon les
                  caractéristiques de l'installation et les usages du foyer.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  La revente éventuelle
                </h4>

                <p className="text-gray-700 text-sm">
                  Selon le type de projet et les conditions applicables, une
                  partie de la production peut éventuellement être injectée sur
                  le réseau dans le cadre d'un dispositif de vente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conseils */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Nos conseils pour préparer votre projet
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <TrendingUp className="w-8 h-8 text-green-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Adaptez la puissance à vos besoins
                </h3>

                <p className="text-gray-700">
                  Le dimensionnement doit être étudié en fonction de la
                  consommation du logement, de la surface disponible et des
                  caractéristiques du projet.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-blue-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Vérifiez les qualifications nécessaires
                </h3>

                <p className="text-gray-700">
                  Lorsque l'accès à un dispositif d'aide ou à certaines
                  conditions réglementaires dépend d'une qualification
                  particulière de l'entreprise, vérifiez directement les
                  exigences applicables au moment du projet.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Euro className="w-8 h-8 text-purple-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Vérifiez les dispositifs disponibles
                </h3>

                <p className="text-gray-700">
                  Les aides, conditions fiscales et dispositifs liés au
                  photovoltaïque peuvent évoluer. Leur disponibilité et leur
                  éligibilité doivent être vérifiées avant toute décision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Comparer les technologies de panneaux
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Panneaux monocristallins
              </h3>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Caractéristique :</strong> cellules monocristallines
                </p>

                <p>
                  <strong>Aspect :</strong> généralement uniforme
                </p>

                <p>
                  <strong>Choix :</strong> selon les caractéristiques du projet
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Autres technologies
              </h3>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Caractéristique :</strong> technologies disponibles
                  selon les fabricants
                </p>

                <p>
                  <strong>Aspect :</strong> variable selon le modèle
                </p>

                <p>
                  <strong>Choix :</strong> à comparer selon le besoin
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                Solutions spécifiques
              </h3>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Caractéristique :</strong> solutions adaptées à
                  certaines configurations
                </p>

                <p>
                  <strong>Aspect :</strong> dépend du matériel choisi
                </p>

                <p>
                  <strong>Choix :</strong> à étudier avec le projet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inclus */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Que vérifier dans le prix annoncé ?
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">
                  Éléments à vérifier
                </h3>

                <ul className="space-y-2 text-gray-700">
                  <li>• Référence des panneaux</li>
                  <li>• Puissance totale prévue</li>
                  <li>• Onduleur ou micro-onduleurs</li>
                  <li>• Système de fixation</li>
                  <li>• Protections électriques</li>
                  <li>• Main-d'œuvre et mise en service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  Prestations éventuellement complémentaires
                </h3>

                <ul className="space-y-2 text-gray-700">
                  <li>• Démarches administratives</li>
                  <li>• Raccordement au réseau</li>
                  <li>• Système de suivi de production</li>
                  <li>• Batterie de stockage</li>
                  <li>• Travaux électriques complémentaires</li>
                  <li>• Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Aides */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Les dispositifs à vérifier pour un projet photovoltaïque
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Les dispositifs applicables à une installation photovoltaïque
            dépendent notamment du type de projet, de la puissance installée,
            du logement et de la réglementation en vigueur. Ils peuvent
            évoluer : leur disponibilité doit donc être vérifiée avant de
            retenir une offre.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Fiscalité et TVA
              </h3>

              <p className="text-gray-700">
                Le taux de TVA applicable dépend notamment de la nature du
                projet et des conditions prévues par la réglementation.
                Vérifiez le taux indiqué sur le devis.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Aides locales
              </h3>

              <p className="text-gray-700">
                Certaines collectivités peuvent proposer des dispositifs
                spécifiques. Leur existence et leurs conditions doivent être
                vérifiées auprès de la collectivité concernée.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                Autoconsommation
              </h3>

              <p className="text-gray-700">
                Une installation peut être conçue pour consommer une partie de
                l'électricité produite directement sur place. Le fonctionnement
                dépend notamment des équipements et des habitudes de
                consommation.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Vente éventuelle du surplus
              </h3>

              <p className="text-gray-700">
                Selon le montage retenu et les conditions applicables, le
                surplus de production peut éventuellement être vendu dans le
                cadre d'un dispositif prévu à cet effet.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6 leading-relaxed">
            Les dispositifs d'aide, de fiscalité et de valorisation de
            l'électricité sont soumis à des conditions spécifiques et peuvent
            évoluer. Reno Soluces ne peut pas assurer l'obtention d'une aide ou
            d'un dispositif particulier.
          </p>
        </section>

        {/* Conseils pour bien choisir */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Nos conseils pour comparer les devis
          </h2>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Comparez plusieurs propositions
              </h3>

              <p className="text-gray-700">
                Comparez les équipements, les quantités, la puissance prévue,
                les prestations de pose et le montant total de chaque devis.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Vérifiez les références du matériel
              </h3>

              <p className="text-gray-700">
                Les références précises des panneaux, onduleurs et autres
                équipements doivent être clairement indiquées afin de pouvoir
                comparer les propositions.
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Ne vous limitez pas au prix
              </h3>

              <p className="text-gray-700">
                Le prix total doit être mis en regard des équipements proposés,
                des prestations incluses et des conditions prévues dans le
                devis.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Quel est le prix d'une installation photovoltaïque ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Il n'existe pas de tarif unique. Le montant dépend notamment
                de la puissance de l'installation, des équipements choisis, de
                la toiture et des travaux nécessaires. Un devis adapté au
                logement est nécessaire pour obtenir un prix précis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Les aides sont-elles automatiques ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Non. Les aides et dispositifs disponibles sont soumis à des
                conditions qui peuvent varier selon le projet et évoluer dans
                le temps. Leur éligibilité doit être vérifiée avant tout
                engagement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Comment comparer deux devis photovoltaïques ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Vérifiez notamment la puissance prévue, les références des
                panneaux et de l'onduleur, les systèmes de fixation, les
                prestations de pose, les raccordements et le montant total.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Une installation photovoltaïque est-elle adaptée à tous les
                logements ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                La faisabilité dépend notamment de la toiture, de son
                orientation, de son état, de l'espace disponible et des
                caractéristiques électriques du logement. Une étude du projet
                est nécessaire avant de retenir une solution.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez un projet photovoltaïque ?
          </h2>

          <p className="text-green-50 max-w-2xl mx-auto mb-8">
            Contactez Reno Soluces pour présenter votre projet et obtenir une
            orientation adaptée à votre situation.
          </p>

          <button
            onClick={() => onPageChange("contact")}
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Nous contacter
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PrixPanneauxSolaires;