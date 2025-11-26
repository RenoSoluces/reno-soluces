import React from 'react';

const AvisRenoSolucesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ce que nos clients disent de <span className="text-emerald-700">RenoSoluces</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Des milliers de clients nous font confiance pour leurs travaux d'isolation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              "Fini les sols glacés ! L'isolation de nos planchers bas a transformé notre confort. Équipe professionnelle et travail soigné."
            </p>
            <p className="text-sm text-gray-600">— Sophie M., Lyon</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              "Très satisfait de l'intervention. Plus d'humidité remontante et une vraie différence sur la facture de chauffage !"
            </p>
            <p className="text-sm text-gray-600">— Pierre D., Bordeaux</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisRenoSolucesSection;