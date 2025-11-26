import React from 'react';

const AvisRenoSolucesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ce que nos clients disent de <span className="text-emerald-700">RenoSoluces</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Des milliers de clients nous font confiance pour leurs équipements de chauffage.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              "Installation parfaite de notre pompe à chaleur. Confort exceptionnel et factures divisées par 2 ! Équipe très professionnelle."
            </p>
            <p className="text-sm text-gray-600">— Catherine M., Toulouse</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              "Excellent accompagnement de A à Z. La pompe à chaleur fonctionne parfaitement même en hiver. Je recommande !"
            </p>
            <p className="text-sm text-gray-600">— Philippe D., Nancy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisRenoSolucesSection;