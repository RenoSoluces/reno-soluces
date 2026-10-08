// src/components/IsolationCombles/TechniqueCombles.tsx
import React from 'react';

const TechniqueCombles: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Quelles <span className="text-emerald-600">techniques d’isolation</span> pour vos combles ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Le choix de la technique dépend du type de combles et de vos objectifs en matière de performance énergétique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Soufflage</h3>
            <p className="text-gray-700">
              Méthode rapide et efficace pour isoler les combles perdus. La laine minérale est projetée sur le plancher des combles pour former un matelas isolant.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Panneaux ou rouleaux</h3>
            <p className="text-gray-700">
              Utilisés principalement pour les combles rampants. Les isolants sont fixés sous la toiture pour maintenir une bonne étanchéité thermique.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">Isolation par l'extérieur (Sarking)</h3>
            <p className="text-gray-700">
              Technique plus coûteuse mais très performante, idéale en cas de rénovation de la toiture. L’isolant est posé au-dessus de la charpente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechniqueCombles;
