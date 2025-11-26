import React from 'react';
import { Users, FileText, Wrench, CheckCircle } from 'lucide-react';

const AccompagnementRenoSolucesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            L'accompagnement <span className="text-emerald-600">RenoSoluces</span><br />
            pour votre rénovation d'ampleur
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Un service complet de A à Z pour mener à bien votre projet de rénovation globale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Mon Accompagnateur Rénov'
            </h3>
            <p className="text-gray-600 text-sm">
              Accompagnement personnalisé obligatoire pour les rénovations d'ampleur.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Gestion administrative
            </h3>
            <p className="text-gray-600 text-sm">
              Nous nous occupons de toutes les démarches pour vos aides financières.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Coordination des travaux
            </h3>
            <p className="text-gray-600 text-sm">
              Pilotage de tous les corps de métier pour un chantier fluide et coordonné.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Suivi post-travaux
            </h3>
            <p className="text-gray-600 text-sm">
              Contrôle des performances et accompagnement après la fin des travaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccompagnementRenoSolucesSection;