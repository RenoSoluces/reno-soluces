import React from 'react';
import { ClipboardCheck, Search, Wrench, CheckCircle } from 'lucide-react';

const EtapesRenovationSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Les <span className="text-emerald-600">étapes</span> de votre rénovation d'ampleur
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Un accompagnement structuré pour mener à bien votre projet de rénovation globale.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
              <ClipboardCheck className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Audit énergétique</h3>
            <p className="text-gray-600 text-sm">
              Diagnostic complet de votre logement pour identifier tous les postes d'amélioration.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
              <Search className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Plan de travaux</h3>
            <p className="text-gray-600 text-sm">
              Élaboration d'un programme de travaux personnalisé avec Mon Accompagnateur Rénov'.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
              <Wrench className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Réalisation</h3>
            <p className="text-gray-600 text-sm">
              Travaux coordonnés par des artisans RGE qualifiés selon le planning établi.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
              <CheckCircle className="text-green-600 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Contrôle final</h3>
            <p className="text-gray-600 text-sm">
              Vérification des performances atteintes et remise du nouveau DPE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtapesRenovationSection;