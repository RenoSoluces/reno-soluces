import React from 'react';

const AvisRenoSolucesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ce que nos clients disent de <span className="text-emerald-700">RenoSoluces</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Des projets de rénovation d'ampleur réussis grâce à notre expertise et notre accompagnement.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              "Rénovation complète de notre maison des années 70. Résultat exceptionnel : de F à B au DPE ! Équipe très professionnelle."
            </p>
            <p className="text-sm text-gray-600">— Famille Dubois, Strasbourg</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              "Accompagnement parfait de A à Z. Les aides ont été maximisées et les travaux parfaitement coordonnés. Je recommande !"
            </p>
            <p className="text-sm text-gray-600">— Jean-Pierre M., Lyon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisRenoSolucesSection;