import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  AlertTriangle,
  TrendingDown,
  Home,
  Shield,
  CheckCircle,
  Thermometer,
  Euro,
  BarChart3,
} from "lucide-react";

const PassoiresThermiques: React.FC<{
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
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Les passoires thermiques : comprendre et agir
          </h1>

          <p className="text-lg text-orange-100 max-w-3xl mx-auto">
            Comprenez ce qu'est une passoire thermique, les conséquences
            possibles d'un logement peu performant et les principales
            solutions permettant d'améliorer son confort énergétique.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        {/* Définition */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            🏠 Qu'est-ce qu'une passoire thermique ?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            L'expression « passoire thermique » désigne couramment un logement
            présentant une performance énergétique faible. En France, elle est
            notamment utilisée pour désigner les logements classés F ou G au
            Diagnostic de performance énergétique (DPE).
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Un logement peu performant peut présenter des difficultés à
            conserver une température confortable, des besoins de chauffage
            importants ou encore des problèmes liés à l'isolation et à
            l'humidité.
          </p>
        </section>

        {/* Classification DPE */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            📊 La classification DPE
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Les classes énergétiques du DPE
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                {
                  class: "A",
                  color: "bg-green-600",
                  text: "text-white",
                },
                {
                  class: "B",
                  color: "bg-green-400",
                  text: "text-white",
                },
                {
                  class: "C",
                  color: "bg-yellow-400",
                  text: "text-gray-900",
                },
                {
                  class: "D",
                  color: "bg-yellow-500",
                  text: "text-white",
                },
                {
                  class: "E",
                  color: "bg-orange-400",
                  text: "text-white",
                },
                {
                  class: "F",
                  color: "bg-red-500",
                  text: "text-white",
                  isPassoire: true,
                },
                {
                  class: "G",
                  color: "bg-red-700",
                  text: "text-white",
                  isPassoire: true,
                },
              ].map((item) => (
                <div
                  key={item.class}
                  className={`${item.color} ${item.text} p-4 rounded-lg text-center ${
                    item.isPassoire ? "ring-4 ring-red-300" : ""
                  }`}
                >
                  <div className="text-2xl font-bold">{item.class}</div>

                  {item.isPassoire && (
                    <div className="text-xs mt-2 font-semibold">
                      PASSOIRE
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-sm mt-4">
              Les classes F et G sont couramment désignées comme des
              « passoires thermiques ».
            </p>
          </div>
        </section>

        {/* Conséquences */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            ⚠️ Les conséquences possibles
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <Euro className="w-10 h-10 text-red-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Besoins énergétiques importants
                </h3>

                <p className="text-gray-700">
                  Un logement peu performant peut nécessiter davantage
                  d'énergie pour maintenir une température confortable.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Thermometer className="w-10 h-10 text-blue-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Inconfort thermique
                </h3>

                <p className="text-gray-700">
                  Mauvaise isolation, parois froides, courants d'air ou
                  variations de température peuvent réduire le confort au
                  quotidien.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertTriangle className="w-10 h-10 text-orange-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  3. Humidité et qualité de l'air
                </h3>

                <p className="text-gray-700">
                  Une ventilation insuffisante ou des problèmes d'humidité
                  peuvent contribuer à l'apparition de condensation et de
                  moisissures.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <TrendingDown className="w-10 h-10 text-purple-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4. Impact sur le logement
                </h3>

                <p className="text-gray-700">
                  La performance énergétique fait partie des éléments à
                  prendre en compte lors de la vente ou de la location d'un
                  logement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Réglementation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            📜 Réglementation et location
          </h2>

          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Les principales échéances
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-8 shrink-0 bg-red-700 text-white rounded flex items-center justify-center font-bold">
                  2023
                </div>

                <p className="text-gray-700">
                  Les logements dont la consommation d'énergie finale dépasse
                  le seuil réglementaire applicable ne peuvent plus être
                  proposés à la location.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-20 h-8 shrink-0 bg-red-600 text-white rounded flex items-center justify-center font-bold">
                  2025
                </div>

                <p className="text-gray-700">
                  Les logements classés G au DPE sont concernés par
                  l'interdiction de mise en location prévue par la
                  réglementation.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-20 h-8 shrink-0 bg-red-500 text-white rounded flex items-center justify-center font-bold">
                  2028
                </div>

                <p className="text-gray-700">
                  Les logements classés F seront à leur tour concernés par
                  l'interdiction de mise en location.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-20 h-8 shrink-0 bg-orange-500 text-white rounded flex items-center justify-center font-bold">
                  2034
                </div>

                <p className="text-gray-700">
                  Les logements classés E seront concernés par cette
                  réglementation.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              Les règles applicables peuvent évoluer. Il est recommandé de
              vérifier les conditions réglementaires en vigueur au moment de
              votre projet.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            🛠️ Quelles solutions pour améliorer son logement ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Les principaux postes de travaux
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Isolation des combles :</strong> limiter les
                    déperditions par la toiture.
                  </span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Isolation des murs :</strong> améliorer la
                    performance de l'enveloppe du bâtiment.
                  </span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Isolation des planchers :</strong> réduire les
                    échanges thermiques avec les locaux non chauffés ou le
                    sol.
                  </span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Chauffage :</strong> étudier un système adapté aux
                    caractéristiques du logement.
                  </span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Ventilation :</strong> assurer un renouvellement
                    d'air adapté au logement.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Une approche adaptée au logement
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <BarChart3 className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Évaluation du logement :</strong> identifier les
                    principaux points d'amélioration.
                  </span>
                </li>

                <li className="flex items-start">
                  <Home className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Priorisation des travaux :</strong> déterminer
                    les interventions adaptées au bâtiment.
                  </span>
                </li>

                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Professionnels qualifiés :</strong> certains
                    travaux ou dispositifs d'aides peuvent nécessiter le
                    recours à une entreprise disposant d'une qualification
                    appropriée.
                  </span>
                </li>

                <li className="flex items-start">
                  <Euro className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>Étude des aides :</strong> vérifier les dispositifs
                    auxquels le projet peut éventuellement être éligible.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Évaluation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            📈 Évaluer les améliorations possibles
          </h2>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Chaque logement est différent
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Les résultats d'une rénovation dépendent notamment de l'état
              initial du logement, de sa configuration, de son isolation, de
              ses équipements et des travaux effectivement réalisés. Il n'est
              donc pas pertinent d'annoncer à l'avance un pourcentage
              d'économies identique pour tous les logements.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Une analyse du logement permet de déterminer les postes de
              travaux pouvant être étudiés et de choisir une approche adaptée
              au projet.
            </p>
          </div>
        </section>

        {/* Signes d'alerte */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            🚨 Comment reconnaître les signes d'un logement peu performant ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-600">
                Signes d'alerte
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                  <span>Factures énergétiques importantes</span>
                </li>

                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                  <span>Difficultés à chauffer certaines pièces</span>
                </li>

                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                  <span>Sensation de parois froides</span>
                </li>

                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                  <span>Condensation ou moisissures</span>
                </li>

                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 shrink-0" />
                  <span>Courants d'air ou variations de température</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-600">
                Points techniques à examiner
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                  <span>Isolation absente ou insuffisante</span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                  <span>Menuiseries anciennes ou peu performantes</span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                  <span>Système de chauffage ancien</span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                  <span>Ventilation inexistante ou insuffisante</span>
                </li>

                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                  <span>Présence de ponts thermiques</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous souhaitez étudier votre projet ?
          </h2>

          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Décrivez votre logement et votre projet. Reno Soluces peut vous
            orienter vers les solutions adaptées et vous mettre en relation
            avec un professionnel partenaire lorsque cela est pertinent.
          </p>

          <a href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-md">
            Nous contacter
          </a>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PassoiresThermiques;