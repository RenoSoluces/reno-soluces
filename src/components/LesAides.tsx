import React from "react";

const LesAides: React.FC = () => {
  const aidesRenovation = [
    "MaPrimeRénov'",
    "Le dispositif des CEE",
    "La prime Coup de pouce chauffage",
    "La TVA à taux réduit",
    "Les dispositifs de financement disponibles selon le projet",
    "L'éco-prêt à taux zéro",
  ];

  const aidesSolaire = [
    "Les dispositifs d'aide éventuellement disponibles selon le projet",
    "La TVA applicable selon la nature des travaux",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Les aides
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              Retrouvez les principaux dispositifs susceptibles de concerner
              certains projets de rénovation énergétique. Les conditions
              d'éligibilité et les montants peuvent évoluer : ils doivent être
              vérifiés au moment du projet.
            </p>
          </div>

          {/* Aides Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Aides rénovation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                  LES AIDES À LA RÉNOVATION
                </h3>

                <ul className="space-y-3">
                  {aidesRenovation.map((aide, index) => (
                    <li
                      key={index}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {aide}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aides solaire */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                  INFORMATIONS POUR LES PROJETS SOLAIRES
                </h3>

                <ul className="space-y-3">
                  {aidesSolaire.map((aide, index) => (
                    <li
                      key={index}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {aide}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              L'accès à une aide n'est jamais automatique. Il dépend du
              dispositif concerné, du logement, des caractéristiques des
              travaux et du respect des conditions applicables. Les aides
              disponibles doivent être vérifiées avant tout engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LesAides;