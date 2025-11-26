// src/components/IsolationCombles/RampantsOuPerdus.tsx
import React from 'react';

const RampantsOuPerdus: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Combles <span className="text-emerald-600">rampants</span> ou <span className="text-emerald-600">perdus</span> ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Il existe deux grands types de combles à isoler. Le choix de la méthode dépend de la configuration de votre habitation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Combles perdus</h3>
            <p className="text-gray-700">
              Les combles perdus sont des espaces non aménageables situés sous votre toiture. L’isolation se fait généralement par soufflage de laine minérale ou de ouate de cellulose sur le plancher.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">Combles rampants</h3>
            <p className="text-gray-700">
              Les combles rampants (ou aménageables) sont habitables. L’isolation se fait sous les pentes du toit à l’aide de panneaux isolants, offrant un excellent confort thermique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RampantsOuPerdus;
