import React from 'react';

const LesAides: React.FC = () => {
  const aidesRenovation = [
    'MaPrimeRénov\'',
    'Le dispositif des CEE',
    'La prime coup de pouce chauffage',
    'La TVA 5,5 %',
    'Prêt travaux amélioration d\'Action Logement',
    'L\'éco-prêt à taux zéro'
  ];

  const aidesSolaire = [
    'La prime à l\'autoconsommation',
    'Récupération de TVA'
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les aides</h2>
            <p className="text-gray-600 text-sm">
              Profitez de toutes les informations nécessaires pour comprendre les aides.
            </p>
          </div>

          {/* Aides Grid */}
          <div className="w-2/3">
            <div className="grid grid-cols-2 gap-6">
              {/* Aides Rénovation */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                  LES AIDES RÉNOVATION
                </h3>
                <ul className="space-y-3">
                  {aidesRenovation.map((aide, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                      {aide}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aides Solaire */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                  LES AIDES POUR LE SOLAIRE
                </h3>
                <ul className="space-y-3">
                  {aidesSolaire.map((aide, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                      {aide}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LesAides;