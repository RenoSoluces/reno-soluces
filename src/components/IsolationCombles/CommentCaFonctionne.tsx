// src/components/IsolationCombles/CommentCaFonctionne.tsx
import React from 'react';
import { Wrench, ClipboardCheck, Home } from 'lucide-react';

const CommentCaFonctionne: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comment ça <span className="text-emerald-600">fonctionne ?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Le processus d'isolation des combles est simple, rapide, et accessible avec RenoSoluces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
            <ClipboardCheck className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Évaluation gratuite</h3>
            <p className="text-gray-600">
              Nous réalisons une étude personnalisée de vos combles et estimons les aides disponibles.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
            <Wrench className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Intervention rapide</h3>
            <p className="text-gray-600">
              Nos artisans RGE interviennent sous quelques jours pour réaliser les travaux d’isolation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 shadow hover:shadow-md transition-shadow">
            <Home className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Confort immédiat</h3>
            <p className="text-gray-600">
              Vous bénéficiez instantanément d’un meilleur confort thermique et de factures allégées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentCaFonctionne;
