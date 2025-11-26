import React from 'react';
import { Star, Users, Calendar, Shield } from 'lucide-react';

const QuiSommesNous: React.FC = () => {
  const sections = [
    {
      title: 'NOTRE IDENTITÉ',
      icon: <Shield className="w-6 h-6" />,
      content: 'Un attachement à des valeurs humaines et environnementales.'
    },
    {
      title: 'NOS TÉMOIGNAGES',
      icon: <Star className="w-6 h-6" />,
      content: 'Découvrez nos derniers témoignages clients.'
    },
    {
      title: 'NOS PARTENAIRES',
      icon: <Users className="w-6 h-6" />,
      content: 'Découvrez nos partenariats avec des marques majeures.'
    },
    {
      title: 'NOTRE HISTOIRE',
      icon: <Calendar className="w-6 h-6" />,
      content: 'L\'aventure TUCO en quelques dates clés.'
    },
    {
      title: 'NOTRE ÉQUIPE',
      icon: <Users className="w-6 h-6" />,
      content: 'Une équipe expérimentée et engagée pour votre sérénité.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qui sommes-nous</h2>
            <p className="text-gray-600 text-sm">
              Tout savoir sur Reno Soluces
            </p>
          </div>

          {/* Content Grid */}
          <div className="w-2/3">
            <div className="grid grid-cols-2 gap-6">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="text-yellow-500 mt-1">
                      {section.icon}
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {section.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 text-sm">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuiSommesNous;