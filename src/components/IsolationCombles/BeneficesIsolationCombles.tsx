// src/components/IsolationCombles/BeneficesIsolationCombles.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const BeneficesIsolationCombles: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Les <span className="text-emerald-600">bénéfices</span> d’une bonne isolation des combles
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Investir dans l’isolation des combles vous apporte un confort durable et des économies significatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Diminution de la consommation énergétique",
            "Réduction des factures de chauffage",
            "Amélioration du confort thermique",
            "Valorisation immobilière du logement",
            "Participation à la transition énergétique",
            "Accès à des aides financières attractives",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow hover:shadow-md transition-shadow"
            >
              <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
              <p className="text-gray-700 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficesIsolationCombles;
