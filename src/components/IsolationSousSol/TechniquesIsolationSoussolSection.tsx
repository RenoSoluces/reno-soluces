import React from 'react';
import { ArrowDown, ArrowUp, Layers } from 'lucide-react';

const TechniquesIsolationSoussolSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Les <span className="text-emerald-600">techniques d'isolation</span> des planchers bas
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Plusieurs méthodes existent selon la configuration de votre logement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <ArrowDown className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Isolation par le dessous</h3>
            <p className="text-gray-600 text-center">
              Fixation de panneaux isolants sous le plancher depuis le sous-sol ou vide sanitaire. Méthode la plus courante et efficace.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <ArrowUp className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Isolation par le dessus</h3>
            <p className="text-gray-600 text-center">
              Pose d'isolant sur le plancher existant, recouverte d'une chape. Utilisée quand l'accès par le dessous est impossible.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Layers className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Isolation intégrée</h3>
            <p className="text-gray-600 text-center">
              Isolation entre les solives du plancher. Solution intermédiaire quand l'espace est limité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechniquesIsolationSoussolSection;