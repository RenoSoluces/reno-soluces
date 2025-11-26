import React from 'react';

const MateriauIsolationSoussolSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Quels <span className="text-emerald-600">matériaux</span> pour isoler vos planchers bas ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Le choix du matériau dépend de la technique utilisée et de l'environnement (humidité, contraintes techniques).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Polystyrène extrudé (XPS)</h3>
            <p className="text-gray-700">
              Très résistant à l'humidité, idéal pour les environnements humides comme les vides sanitaires. Excellente résistance mécanique.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Polyuréthane (PUR)</h3>
            <p className="text-gray-700">
              Très performant thermiquement avec une faible épaisseur. Résistant à l'humidité et facile à poser.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Laine minérale</h3>
            <p className="text-gray-700">
              Laine de verre ou de roche, économique et performante. Nécessite une protection contre l'humidité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MateriauIsolationSoussolSection;