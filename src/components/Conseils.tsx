import React from 'react';
import { Sun, Shield, Flame, Droplets } from 'lucide-react';

const Conseils: React.FC = () => {
  const conseilsData = [
    {
      category: 'PHOTOVOLTAÏQUES',
      icon: <Sun className="w-6 h-6" />,
      items: [
        'Fonctionnement d\'un panneau solaire',
        'Installation de panneaux solaires',
        'Prix des panneaux solaires',
        'Voir plus'
      ]
    },
    {
      category: 'CHAUFFAGE',
      icon: <Flame className="w-6 h-6" />,
      items: [
        'Fonctionnement de la pompe à chaleur air eau',
        'Installation d\'une pompe à chaleur air eau',
        'Voir plus'
      ]
    },
    {
      category: 'RÉNOVATION ÉNERGÉTIQUE',
      icon: <Shield className="w-6 h-6" />,
      items: [
        'Tout savoir sur la rénovation énergétique',
        'Les passoires thermiques',
        'Voir plus'
      ]
    },
    {
      category: 'ISOLATION THERMIQUE',
      icon: <Shield className="w-6 h-6" />,
      items: [
        'Prix de l\'isolation thermique extérieure',
        'Les CEE et l\'isolation thermique extérieure',
        'Voir plus'
      ]
    },
    {
      category: 'CHAUFFE EAU',
      icon: <Droplets className="w-6 h-6" />,
      items: [
        'Rentabilité d\'un chauffe-eau thermodynamique ?',
        'Prix chauffe-eau thermodynamique',
        'Voir plus'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conseils</h2>
            <p className="text-gray-600 text-sm">
              Découvrez tous nos conseils et ressources utiles pour mener à bien vos travaux de rénovation énergétique.
            </p>
          </div>

          {/* Conseils Grid */}
          <div className="w-2/3">
            <div className="grid grid-cols-2 gap-6">
              {conseilsData.map((conseil, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="text-yellow-500 mt-1">
                      {conseil.icon}
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {conseil.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {conseil.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={`text-sm ${
                        item === 'Voir plus' ? 'text-green-600 font-medium' : 'text-gray-700'
                      }`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conseils;