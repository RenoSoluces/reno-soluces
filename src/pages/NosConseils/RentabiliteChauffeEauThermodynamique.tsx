// src/pages/NosConseils/RentabiliteChauffeEauThermodynamique.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  TrendingUp,
  Calculator,
  Droplets,
  Euro,
  CheckCircle,
  BarChart3,
  Clock,
  Home,
} from "lucide-react";
import BallonThermo1 from "../../assets/BallonThermo1.webp";

const RentabiliteChauffeEauThermodynamique: React.FC<{
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Chauffe-eau thermodynamique : comprendre son coût et son intérêt
          </h1>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Prix, fonctionnement, consommation et critères à prendre en compte
            avant de choisir un chauffe-eau thermodynamique.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            💡 Pourquoi s'intéresser au coût d'utilisation ?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Le chauffe-eau thermodynamique utilise une pompe à chaleur pour
            contribuer à la production d'eau chaude sanitaire. Une partie de
            l'énergie nécessaire au chauffage de l'eau provient ainsi de
            l'environnement capté par l'équipement.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Son intérêt économique dépend toutefois de nombreux paramètres :
            caractéristiques du logement, nombre d'occupants, habitudes de
            consommation, configuration de l'installation, prix de l'énergie,
            coût du matériel et de la pose, ainsi que les éventuelles aides
            auxquelles le projet peut être éligible.
          </p>
        </section>

        {/* Facteurs */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            📊 Les principaux facteurs à prendre en compte
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-start">
              <BarChart3 className="w-10 h-10 text-blue-500 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Les besoins en eau chaude
                </h3>

                <p className="text-gray-700">
                  Le dimensionnement doit être adapté aux besoins réels du
                  logement. Le nombre d'occupants, les habitudes de consommation
                  et les usages quotidiens doivent notamment être pris en compte.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Euro className="w-10 h-10 text-green-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Le coût global du projet
                </h3>

                <p className="text-gray-700">
                  Pour évaluer l'intérêt économique d'un projet, il faut
                  considérer le prix de l'équipement, la pose, les éventuels
                  travaux complémentaires et les aides pouvant être mobilisées.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-10 h-10 text-orange-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  3. Les conditions d'utilisation
                </h3>

                <p className="text-gray-700">
                  Les performances observées dépendent notamment du mode de
                  fonctionnement, de la température de l'air disponible, du
                  réglage de l'appareil et des besoins du foyer.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-10 h-10 text-purple-600 mr-4 shrink-0" />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4. Les aides éventuellement disponibles
                </h3>

                <p className="text-gray-700">
                  Selon la nature du logement, le projet et les conditions
                  applicables au moment de la demande, certains dispositifs
                  d'aide peuvent être mobilisables. Leur éligibilité doit être
                  vérifiée avant tout engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            ⚖️ Chauffe-eau thermodynamique ou chauffe-eau électrique ?
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              Le choix d'un système de production d'eau chaude dépend de la
              configuration du logement et des besoins du foyer. Il n'existe
              pas une solution universelle adaptée à toutes les situations.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-green-600" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Chauffe-eau thermodynamique
                </h3>

                <p className="text-gray-700">
                  Cette solution associe un ballon d'eau chaude à un système
                  thermodynamique. Elle peut être pertinente lorsque les
                  caractéristiques du logement permettent son installation dans
                  de bonnes conditions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-sm">
                    ELEC
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Chauffe-eau électrique
                </h3>

                <p className="text-gray-700">
                  Le chauffe-eau électrique reste une solution courante et
                  peut être adaptée à certains logements. Le remplacement
                  d'une installation existante doit être étudié au cas par cas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calcul */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            🧮 Comment évaluer l'intérêt économique d'un projet ?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Les éléments à examiner
              </h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <Calculator className="w-6 h-6 text-green-600 mr-3 mt-1 shrink-0" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Le coût du projet
                    </h4>

                    <p className="text-gray-700 text-sm">
                      Comparez le prix de l'équipement, de la pose et des
                      éventuels travaux nécessaires à l'installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1 shrink-0" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      La consommation actuelle
                    </h4>

                    <p className="text-gray-700 text-sm">
                      La consommation d'eau chaude du logement constitue un
                      élément important pour comparer différentes solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Euro className="w-6 h-6 text-purple-600 mr-3 mt-1 shrink-0" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Les aides applicables
                    </h4>

                    <p className="text-gray-700 text-sm">
                      Les dispositifs disponibles et leurs conditions
                      d'attribution peuvent évoluer. Ils doivent être vérifiés
                      en fonction de la situation du foyer et du projet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-600 mr-3 mt-1 shrink-0" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Les conditions d'utilisation
                    </h4>

                    <p className="text-gray-700 text-sm">
                      Le fonctionnement réel de l'installation dépend du
                      matériel choisi, de son dimensionnement, de son
                      emplacement et des habitudes du foyer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img loading="lazy" decoding="async"
                src={BallonThermo1}
                alt="Chauffe-eau thermodynamique"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Points de vigilance */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            🔎 Les points de vigilance avant de choisir
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Un dimensionnement adapté
                </h3>

                <p className="text-gray-700">
                  La capacité et les caractéristiques de l'équipement doivent
                  correspondre aux besoins du foyer et aux possibilités du
                  logement.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Home className="w-8 h-8 text-blue-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Un emplacement approprié
                </h3>

                <p className="text-gray-700">
                  L'emplacement disponible, les conditions de ventilation,
                  l'environnement de l'appareil et les contraintes techniques
                  doivent être étudiés avant l'installation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calculator className="w-8 h-8 text-orange-600 mr-4 mt-1 shrink-0" />

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Une comparaison personnalisée
                </h3>

                <p className="text-gray-700">
                  Une estimation pertinente nécessite de comparer la situation
                  existante avec le projet envisagé, en tenant compte du coût
                  total de l'opération et des conditions applicables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            🛠️ Le choix de l'installateur
          </h2>

          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              La qualité de la conception et de la pose est un élément
              important pour le bon fonctionnement d'un chauffe-eau
              thermodynamique.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Lorsque l'accès à une aide publique ou à un dispositif
              particulier est conditionné à certaines qualifications ou
              exigences, celles-ci doivent être vérifiées pour le professionnel
              qui réalise les travaux. Reno Soluces peut vous orienter vers un
              partenaire correspondant au projet, lorsque cela est nécessaire.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            ❓ Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Le chauffe-eau thermodynamique est-il toujours plus intéressant
                qu'un chauffe-eau électrique ?
              </h3>

              <p className="text-gray-700">
                Pas nécessairement. L'intérêt d'un remplacement dépend du
                logement, de la consommation d'eau chaude, de l'installation
                existante, du coût des travaux et des caractéristiques du
                nouvel équipement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Peut-on connaître à l'avance les économies réalisées ?
              </h3>

              <p className="text-gray-700">
                Une estimation peut être réalisée à partir des caractéristiques
                du logement et des habitudes de consommation. Elle reste
                toutefois indicative : les résultats réels dépendent des
                conditions d'utilisation et du fonctionnement de l'installation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Les aides financières sont-elles garanties ?
              </h3>

              <p className="text-gray-700">
                Non. L'accès aux aides dépend des règles applicables, des
                caractéristiques du logement, des revenus lorsque cela est
                prévu, du type de travaux et du respect des conditions
                d'éligibilité. Les aides ne sont donc pas garanties par Reno
                Soluces.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Comment savoir si ce système correspond à mon logement ?
              </h3>

              <p className="text-gray-700">
                Une étude de la situation existante permet de vérifier la
                faisabilité du projet et de déterminer si cette solution est
                adaptée aux besoins du foyer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Vous envisagez un chauffe-eau thermodynamique ?
          </h2>

          <p className="mb-6 max-w-2xl mx-auto">
            Demandez à être contacté pour échanger sur votre logement, vos
            besoins en eau chaude et votre projet.
          </p>

          <a href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
            💧 Demander à être contacté
          </a>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default RentabiliteChauffeEauThermodynamique;