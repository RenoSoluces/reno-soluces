// src/pages/NosConseils/PrixChauffeEauThermodynamique.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Home,
  CheckCircle,
  BarChart3,
  Settings,
  Droplets,
  Euro,
} from "lucide-react";
import BallonThermo3 from "../../assets/BallonThermo3.jpeg";

const PrixChauffeEauThermodynamique: React.FC<{
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
            Prix d'un chauffe-eau thermodynamique : comprendre le coût du projet
          </h1>

          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Découvrez les principaux éléments qui influencent le prix d'un
            chauffe-eau thermodynamique et les points à vérifier avant de
            comparer les devis.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Comprendre le coût d'un chauffe-eau thermodynamique
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Le prix d'un chauffe-eau thermodynamique dépend du modèle choisi,
            de sa capacité, de ses caractéristiques techniques, de la
            configuration du logement et des travaux nécessaires à son
            installation.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Le montant d'un projet peut donc varier d'un logement à l'autre.
            Pour comparer plusieurs propositions, il est important d'examiner
            le matériel, la pose, les éventuels travaux complémentaires et les
            prestations comprises dans chaque devis.
          </p>
        </section>

        {/* Facteurs */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            Les facteurs qui influencent le prix
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. La capacité du ballon
                </h3>

                <p className="text-gray-700">
                  Les appareils existent avec différentes capacités. Le choix
                  doit être adapté aux besoins du foyer, au nombre d'occupants
                  et aux habitudes de consommation d'eau chaude.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Settings className="w-10 h-10 text-green-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. La technologie utilisée
                </h3>

                <p className="text-gray-700">
                  Certains modèles utilisent l'air ambiant, l'air extérieur ou
                  l'air extrait. La configuration choisie peut avoir une
                  incidence sur le matériel nécessaire et les conditions de
                  pose.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-10 h-10 text-purple-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  3. Le modèle et ses caractéristiques
                </h3>

                <p className="text-gray-700">
                  La marque, les caractéristiques techniques, les équipements
                  intégrés, le niveau sonore et les conditions prévues par le
                  fabricant peuvent différer d'un appareil à l'autre.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-orange-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4. La configuration du logement
                </h3>

                <p className="text-gray-700">
                  L'accessibilité du local, les raccordements hydrauliques et
                  électriques, la ventilation et la dépose éventuelle de
                  l'ancien équipement peuvent modifier le montant du devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Composition du prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Que peut comprendre le prix d'un chauffe-eau thermodynamique ?
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              La composition d'un devis dépend du chantier. Il est donc
              préférable de vérifier précisément les prestations incluses
              plutôt que d'appliquer une répartition identique à tous les
              projets.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Équipement
                </h3>

                <p className="text-gray-700">
                  Le chauffe-eau thermodynamique, ses accessoires et les
                  éléments nécessaires à son fonctionnement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Installation
                </h3>

                <p className="text-gray-700">
                  La pose de l'équipement, les raccordements et la mise en
                  service selon la configuration du logement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Travaux complémentaires
                </h3>

                <p className="text-gray-700">
                  Certains projets peuvent nécessiter des adaptations de
                  plomberie, d'électricité, de ventilation ou de raccordement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Prestations associées
                </h3>

                <p className="text-gray-700">
                  La mise en service, les réglages, la dépose de l'ancien
                  appareil ou certaines prestations complémentaires peuvent
                  être prévues dans le devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marché */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Les différents modèles disponibles
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Des équipements aux caractéristiques différentes
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Le marché propose plusieurs modèles de chauffe-eau
                thermodynamiques. Les caractéristiques techniques et les
                conditions d'installation peuvent varier selon les fabricants
                et les équipements.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>• Différentes capacités de stockage</li>
                <li>• Plusieurs configurations d'installation</li>
                <li>• Différents niveaux d'équipement</li>
                <li>• Des caractéristiques techniques propres à chaque modèle</li>
              </ul>
            </div>

            <div className="relative">
              <img
                src={BallonThermo3}
                alt="Chauffe-eau thermodynamique"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Devis */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Que vérifier dans un devis ?
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">
                  Éléments à vérifier
                </h3>

                <ul className="space-y-2 text-gray-700">
                  <li>• Référence précise de l'équipement</li>
                  <li>• Capacité du ballon</li>
                  <li>• Fourniture et pose</li>
                  <li>• Raccordements nécessaires</li>
                  <li>• Mise en service</li>
                  <li>• Conditions prévues par le fabricant</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">
                  Éventuels travaux complémentaires
                </h3>

                <ul className="space-y-2 text-gray-700">
                  <li>• Dépose et évacuation de l'ancien équipement</li>
                  <li>• Modification de la plomberie existante</li>
                  <li>• Adaptation des réseaux électriques</li>
                  <li>• Gaines ou conduits nécessaires</li>
                  <li>• Adaptation de la ventilation</li>
                  <li>• Prestations d'entretien ou de maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Aides */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Les dispositifs d'aide à vérifier
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Selon votre situation et les caractéristiques du projet, certains
            dispositifs peuvent être mobilisables. Les conditions
            d'éligibilité et les montants peuvent évoluer et doivent être
            vérifiés au moment du projet.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                MaPrimeRénov'
              </h3>

              <p className="text-gray-700">
                Selon les règles en vigueur et les caractéristiques du projet,
                certains travaux peuvent être éligibles à MaPrimeRénov'. Les
                conditions applicables doivent être vérifiées avant tout
                engagement.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Certificats d'économies d'énergie
              </h3>

              <p className="text-gray-700">
                Le dispositif des CEE peut, sous certaines conditions, donner
                lieu à une aide. Les critères applicables doivent être vérifiés
                avant le lancement des travaux.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                TVA à taux réduit
              </h3>

              <p className="text-gray-700">
                Dans certaines situations, un taux de TVA réduit peut
                s'appliquer aux travaux réalisés dans un logement répondant aux
                conditions prévues par la réglementation.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Autres dispositifs
              </h3>

              <p className="text-gray-700">
                D'autres solutions de financement peuvent éventuellement
                s'appliquer selon le projet. Il est recommandé de vérifier les
                dispositifs disponibles avant de signer un devis.
              </p>
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Nos conseils pour comparer les offres
          </h2>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Comparez les caractéristiques techniques
              </h3>

              <p className="text-gray-700">
                Ne comparez pas uniquement le prix. Vérifiez la capacité, le
                modèle, les caractéristiques techniques et les prestations
                comprises dans chaque proposition.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Vérifiez le contenu du devis
              </h3>

              <p className="text-gray-700">
                Le devis doit permettre d'identifier clairement l'équipement,
                les travaux prévus, les éventuels travaux complémentaires et
                les conditions commerciales.
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Comparez plusieurs propositions
              </h3>

              <p className="text-gray-700">
                Plusieurs devis peuvent vous aider à mieux comprendre les
                différences de prix, de matériel et de prestations entre les
                offres.
              </p>
            </div>
          </div>
        </section>

        {/* Évaluation du projet */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Évaluer la pertinence du projet
          </h2>

          <div className="bg-green-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              Le remplacement d'un équipement de production d'eau chaude doit
              être étudié en fonction du logement, des habitudes de
              consommation, du coût du projet et des caractéristiques de
              l'installation existante.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Consommation
                </h4>

                <p className="text-gray-700 text-sm">
                  Les performances réelles dépendent notamment des usages, du
                  réglage de l'appareil et des caractéristiques du logement.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Confort
                </h4>

                <p className="text-gray-700 text-sm">
                  La capacité et le fonctionnement de l'équipement doivent être
                  adaptés aux besoins du foyer.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Budget
                </h4>

                <p className="text-gray-700 text-sm">
                  Le coût global du projet doit être apprécié en tenant compte
                  du matériel, de la pose et des éventuels travaux
                  complémentaires.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Entretien
                </h4>

                <p className="text-gray-700 text-sm">
                  Les recommandations du fabricant et les opérations
                  d'entretien prévues doivent être prises en compte dans le
                  choix de l'équipement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capacités */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Choisir la capacité adaptée aux besoins
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
                Capacité adaptée
              </h3>

              <p className="text-sm text-gray-700 text-center">
                Le volume doit être choisi en fonction des besoins du foyer et
                des habitudes de consommation.
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-2xl p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-green-600 mb-4 text-center">
                Dimensionnement
              </h3>

              <p className="text-sm text-gray-700 text-center">
                Le choix doit également tenir compte de l'espace disponible et
                des contraintes techniques du logement.
              </p>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>

              <h3 className="text-xl font-semibold text-orange-600 mb-4 text-center">
                Installation
              </h3>

              <p className="text-sm text-gray-700 text-center">
                La configuration retenue doit être compatible avec les
                caractéristiques du logement et les contraintes de pose.
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
                Quel est le prix d'un chauffe-eau thermodynamique ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Le prix dépend du modèle, de la capacité, des caractéristiques
                de l'installation et des travaux nécessaires. Il est donc
                préférable de demander un devis détaillé adapté au logement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Les aides sont-elles systématiques ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Non. L'accès aux aides dépend des conditions propres à chaque
                dispositif et au projet. Leur éligibilité doit être vérifiée
                avant l'engagement des travaux.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Comment comparer deux devis ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Comparez la référence et les caractéristiques de l'appareil,
                les prestations de pose, les travaux complémentaires, les
                conditions prévues par le fabricant et le montant total
                proposé.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Faut-il remplacer un chauffe-eau qui fonctionne encore ?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Il n'existe pas de réponse identique pour tous les logements.
                L'état de l'équipement existant, son fonctionnement, les
                besoins du foyer et le coût d'un éventuel remplacement doivent
                être pris en compte.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez un projet de chauffe-eau thermodynamique ?
          </h2>

          <p className="text-green-50 max-w-2xl mx-auto mb-8">
            Contactez Reno Soluces pour présenter votre projet et être orienté
            vers une solution adaptée à votre logement.
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

export default PrixChauffeEauThermodynamique;