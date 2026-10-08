// src/components/IsolationCombles/MateriauPourCombles.tsx
import React from 'react';

const MateriauPourCombles: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Quels <span className="text-emerald-600">matériaux</span> pour isoler vos combles ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Plusieurs matériaux isolants sont disponibles selon vos besoins en performance thermique, acoustique et en durabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Laine de verre</h3>
            <p className="text-gray-700">
              Très utilisée pour son bon rapport qualité/prix. Elle offre une bonne isolation thermique et phonique, notamment en soufflage ou en rouleaux.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Laine de roche</h3>
            <p className="text-gray-700">
              Résistante au feu, elle est idéale pour les combles difficiles d’accès ou les environnements humides.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Ouate de cellulose</h3>
            <p className="text-gray-700">
              Isolant biosourcé issu du recyclage du papier, très performant en été contre la chaleur. Pose en soufflage ou insufflation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MateriauPourCombles;
