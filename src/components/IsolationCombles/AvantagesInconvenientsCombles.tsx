// src/components/IsolationCombles/AvantagesInconvenientsCombles.tsx
import React from 'react';

const AvantagesInconvenientsCombles: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Avantages et inconvénients de l’<span className="text-emerald-600">isolation des combles</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Une solution efficace, mais qui présente aussi quelques limites à connaître.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Avantages */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">✅ Avantages</h3>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Jusqu’à 30% d’économies d’énergie sur votre facture</li>
              <li>Travaux rapides et peu invasifs</li>
              <li>Amélioration du confort thermique été comme hiver</li>
              <li>Aides financières disponibles (MaPrimeRénov’, CEE…)</li>
              <li>Améliore la valeur de votre logement</li>
            </ul>
          </div>

          {/* Inconvénients */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">⚠️ Inconvénients</h3>
            <ul className="space-y-4 text-gray-700 list-disc list-inside">
              <li>Accès parfois difficile dans les combles perdus</li>
              <li>Risque de ponts thermiques si mal posé</li>
              <li>Certains isolants moins écologiques</li>
              <li>Possibles pertes de volume dans les combles aménagés</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvantagesInconvenientsCombles;
