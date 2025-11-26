import React from 'react';
import { Sun, Zap, Home, Shield, Flame, Wind } from 'lucide-react';

const NosSolutions: React.FC = () => {
  const solutions = [
    {
      category: 'NOS SOLUTIONS PHOTOVOLTAÏQUES',
      icon: <Sun className="w-6 h-6" />,
      items: [
        'Panneaux photovoltaïques',
        'Batterie de stockage',
      ]
    },
    {
      category: 'NOS SOLUTIONS GLOBALES',
      icon: <Home className="w-6 h-6" />,
      items: [
        'Rénovation d\'ampleur'
      ]
    },
    {
      category: 'NOS SOLUTIONS ISOLATION',
      icon: <Shield className="w-6 h-6" />,
      items: [
        'Isolation des combles',
        'Isolation thermique par l\'extérieur',
        'Isolation des planchers bas'
      ]
    },
    {
      category: 'NOS SOLUTIONS CHAUFFAGE',
      icon: <Flame className="w-6 h-6" />,
      items: [
        'Pompe à chaleur Air/Eau',
        'Pompe à chaleur Air/Air'
      ]
    },
    {
      category: 'NOS SOLUTIONS BALLON D\'EAU CHAUDE',
      icon: <Zap className="w-6 h-6" />,
      items: [
        'Chauffe-eau thermodynamique'
      ]
    },
    {
      category: 'NOS SOLUTIONS VENTILATION',
      icon: <Wind className="w-6 h-6" />,
      items: [
        'Ventilation mécanique contrôlée'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos solutions</h2>
            <p className="text-gray-600 text-sm">
              Découvrez toutes nos solutions d'accompagnement à la transition énergétique.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="w-2/3">
            <div className="grid grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="text-yellow-500 mt-1">
                      {solution.icon}
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {solution.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {solution.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 text-sm">
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

export default NosSolutions;