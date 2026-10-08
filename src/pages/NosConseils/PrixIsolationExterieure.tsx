import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Calculator,
  Home,
  CheckCircle,
  Euro,
  BarChart3,
  Shield,
} from "lucide-react";
import Exterieur1 from "../../assets/Exterieur1.jpeg";

const PrixIsolationExterieure: React.FC<{
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
            Prix de l'isolation thermique extérieure
          </h1>

          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Comprendre les éléments qui composent le prix d'une isolation
            thermique par l'extérieur et les points à vérifier avant de
            demander un devis.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Comprendre le prix d'une isolation extérieure
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Le prix d'une isolation thermique par l'extérieur dépend de
            nombreux éléments. La surface à traiter, la configuration du
            bâtiment, le système d'isolation choisi, les finitions et les
            éventuels travaux préparatoires peuvent notamment faire varier le
            montant du devis.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Il n'existe donc pas de tarif unique applicable à tous les
            logements. Un devis détaillé permet d'identifier les prestations
            prévues et les éventuelles adaptations nécessaires à votre
            habitation.
          </p>
        </section>

        {/* Facteurs */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            Les principaux facteurs qui influencent le coût
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  La surface à isoler
                </h3>

                <p className="text-gray-700">
                  La quantité de matériaux et le temps de pose dépendent
                  notamment de la surface des façades à traiter. Les
                  caractéristiques du bâtiment doivent être prises en compte
                  dans l'établissement du devis.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-10 h-10 text-green-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  La configuration du logement
                </h3>

                <p className="text-gray-700">
                  Les ouvertures, angles, balcons, avancées de toiture,
                  descentes d'eau et autres particularités peuvent nécessiter
                  des travaux ou des adaptations supplémentaires.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-10 h-10 text-purple-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Le système d'isolation
                </h3>

                <p className="text-gray-700">
                  Le choix de l'isolant, son épaisseur, le système de fixation
                  et la finition extérieure participent au coût global du
                  projet.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calculator className="w-10 h-10 text-orange-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  La technique de finition
                </h3>

                <p className="text-gray-700">
                  Enduit sur isolant, bardage ou autre système de finition :
                  chaque solution possède ses propres caractéristiques
                  techniques et esthétiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Composition du prix */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Que peut comprendre le prix d'une isolation extérieure ?
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Prestations couramment prévues
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li>• Fourniture de l'isolant et des accessoires</li>
                  <li>• Préparation des supports</li>
                  <li>• Pose et fixation du système isolant</li>
                  <li>• Traitement des points singuliers</li>
                  <li>• Finition extérieure selon le système choisi</li>
                  <li>• Protection et nettoyage de la zone de chantier</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Éléments pouvant nécessiter un chiffrage spécifique
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li>• Échafaudage ou accès spécifiques</li>
                  <li>• Modification des descentes d'eau pluviale</li>
                  <li>• Adaptation des débords de toiture</li>
                  <li>• Traitement des balcons et seuils</li>
                  <li>• Reprise de supports dégradés</li>
                  <li>• Travaux liés aux menuiseries ou aux ouvertures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Image / marché */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Une technique adaptée à différents types de logements
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'isolation thermique par l'extérieur peut être envisagée
                dans différents projets de rénovation. Elle consiste à placer
                le système isolant sur les parois extérieures du bâtiment,
                avant la mise en œuvre de la finition prévue.
              </p>

              <p className="text-gray-700 leading-relaxed">
                La faisabilité du projet dépend toutefois de la nature des
                façades, de leur état, des contraintes architecturales et des
                règles applicables au bâtiment.
              </p>
            </div>

            <div className="relative">
              <img
                src={Exterieur1}
                alt="Isolation thermique extérieure d'une maison"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Aides */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Les aides financières possibles
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Selon la nature du logement, la situation du ménage et les
            caractéristiques des travaux, certains dispositifs peuvent
            contribuer au financement d'une rénovation énergétique. Les
            conditions d'accès et les montants évoluent régulièrement.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                MaPrimeRénov'
              </h3>

              <p className="text-gray-700">
                L'éligibilité et le montant éventuel dépendent notamment du
                projet, du logement et de la situation du ménage. Les
                conditions applicables doivent être vérifiées au moment de la
                demande.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Certificats d'économies d'énergie
              </h3>

              <p className="text-gray-700">
                Les travaux d'isolation peuvent, sous certaines conditions,
                entrer dans le champ des dispositifs CEE. Les critères et
                modalités dépendent notamment de l'opération réalisée.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-4">
                TVA à taux réduit
              </h3>

              <p className="text-gray-700">
                Certains travaux de rénovation énergétique peuvent bénéficier
                d'un taux de TVA réduit lorsque les conditions prévues par la
                réglementation sont réunies.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                Autres solutions de financement
              </h3>

              <p className="text-gray-700">
                Selon votre situation, d'autres dispositifs de financement
                peuvent être envisageables. Leur disponibilité et leurs
                conditions doivent être vérifiées avant tout engagement.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Les aides sont soumises à des conditions d'éligibilité. Reno
            Soluces ne peut pas assurer l'obtention d'une aide et vous invite
            à vérifier les conditions applicables avant le lancement des
            travaux.
          </p>
        </section>

        {/* Comparaison */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Les principales techniques de finition
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Enduit sur isolant
              </h3>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Principe :</strong> isolant fixé sur la façade puis
                  recouvert d'un système d'enduit.
                </p>

                <p>
                  <strong>Aspect :</strong> nombreuses possibilités de
                  finition.
                </p>

                <p>
                  <strong>À étudier :</strong> état du support et contraintes
                  de façade.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Bardage rapporté
              </h3>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Principe :</strong> une ossature reçoit le système
                  d'isolation et le bardage.
                </p>

                <p>
                  <strong>Aspect :</strong> plusieurs matériaux et finitions
                  possibles.
                </p>

                <p>
                  <strong>À étudier :</strong> support, fixation et intégration
                  architecturale.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-4">
                Autres systèmes
              </h3>

              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Principe :</strong> différents systèmes peuvent être
                  proposés selon la configuration du bâtiment.
                </p>

                <p>
                  <strong>Aspect :</strong> choix dépendant notamment de la
                  façade et des contraintes locales.
                </p>

                <p>
                  <strong>À étudier :</strong> compatibilité technique et
                  prescriptions du système retenu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bien préparer son projet */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Bien préparer son projet
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Demandez un devis détaillé
                </h3>

                <p className="text-gray-700">
                  Le devis doit permettre d'identifier les matériaux, les
                  surfaces concernées, les prestations prévues et les
                  éventuelles interventions complémentaires.
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
                  Lorsque l'accès à un dispositif d'aide est soumis à une
                  qualification particulière de l'entreprise réalisant les
                  travaux, vérifiez ce point avant de signer le devis.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Euro className="w-8 h-8 text-purple-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Comparez les prestations
                </h3>

                <p className="text-gray-700">
                  Deux devis peuvent présenter des montants différents en
                  raison des matériaux, des finitions, des travaux préparatoires
                  ou des prestations incluses. La comparaison doit donc porter
                  sur le contenu complet de chaque proposition.
                </p>
              </div>
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
                L'isolation extérieure est-elle plus chère que l'isolation
                intérieure ?
              </h3>

              <p className="text-gray-700">
                Le coût dépend du bâtiment et du système choisi. L'isolation
                extérieure implique notamment des travaux sur les façades et
                peut nécessiter des équipements d'accès ou des adaptations
                spécifiques.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Peut-on obtenir des aides pour une isolation extérieure ?
              </h3>

              <p className="text-gray-700">
                Certains dispositifs peuvent concerner les travaux d'isolation,
                sous réserve de respecter leurs conditions d'éligibilité. Les
                règles doivent être vérifiées au moment du projet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Pourquoi demander plusieurs devis ?
              </h3>

              <p className="text-gray-700">
                Les devis permettent de comparer les matériaux, les techniques,
                les finitions et les prestations incluses. Ils permettent
                également d'identifier plus facilement les éventuels travaux
                complémentaires.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Quel professionnel contacter ?
              </h3>

              <p className="text-gray-700">
                Le choix du professionnel dépend de la nature du chantier et
                des exigences applicables au dispositif d'aide éventuellement
                sollicité. Les qualifications et assurances de l'entreprise
                réalisant les travaux doivent être vérifiées avant engagement.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Parlons de votre projet
          </h2>

          <p className="mb-6 max-w-2xl mx-auto">
            Vous souhaitez connaître les solutions envisageables pour votre
            logement ? Contactez Reno Soluces pour présenter votre projet et
            être orienté vers une solution adaptée.
          </p>

          <button
            onClick={() => onPageChange("contact")}
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            Demander à être contacté
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PrixIsolationExterieure;