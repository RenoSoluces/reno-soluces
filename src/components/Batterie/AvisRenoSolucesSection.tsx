import React from 'react';
import Batterie4 from '../../assets/Batterie4.jpg';

const AvisRenoSolucesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Partie gauche - Image */}
          <div className="relative">
            <img
              src={Batterie4}
              alt="Cristaux de lithium"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Partie droite - Contenu */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              L’avis de Reno Soluces :<br />
              quelle est la meilleure batterie solaire ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              D’après notre expertise, la <strong>batterie au lithium</strong> se distingue nettement par ses performances élevées,
              sa longévité et son rendement. Cependant, elle représente un <strong>investissement important</strong> qui nécessite
              un bon dimensionnement en amont et une <strong>installation soignée</strong> par un professionnel qualifié.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisRenoSolucesSection;
