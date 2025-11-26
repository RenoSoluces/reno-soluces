import React from 'react';
import Batterie3 from '../../assets/Batterie3.jpg';


const AvantagesBatterieSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenu texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Les avantages d’une<br />batterie solaire
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Optimisation de l’autoconsommation',
                  description: 'Réduisez jusqu’à 70 % vos factures d’électricité en consommant votre propre énergie.',
                },
                {
                  title: 'Indépendance énergétique',
                  description: 'Stockez votre production le jour et utilisez-la quand vous en avez besoin.',
                },
                {
                  title: 'Continuité en cas de coupure',
                  description: 'Assurez une alimentation de secours lors de pannes réseau.',
                },
                {
                  title: 'Réduction de l’empreinte carbone',
                  description: 'Favorisez une énergie propre en maximisant votre production solaire.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold">{item.title}</p>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <img
              src={Batterie3}
              alt="Technicien installant une batterie solaire"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvantagesBatterieSection;
