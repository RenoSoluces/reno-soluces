// src/components/IsolationExterieure/AvisRenoSolucesSection.tsx
import React from 'react';

const AvisRenoSolucesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ce que nos clients disent de <span className="text-emerald-700">RenoSoluces</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Des milliers de clients nous font confiance pour leurs travaux de rénovation énergétique.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              “Travail soigné, équipe à l’écoute et délai respecté. Mon isolation extérieure a changé la température à l’intérieur ! Merci RenoSoluces.”
            </p>
            <p className="text-sm text-gray-600">— Claire D., Nantes</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 text-base mb-4">
              “Très satisfait ! Aides bien expliquées, artisans sérieux, et un accompagnement de A à Z. Je recommande.”
            </p>
            <p className="text-sm text-gray-600">— Marc L., Toulouse</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvisRenoSolucesSection;
