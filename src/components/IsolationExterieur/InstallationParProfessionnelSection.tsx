// src/components/IsolationExterieure/InstallationParProfessionnelSection.tsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Exterieur3 from '../../assets/Exterieur3.jpeg';

const InstallationParProfessionnelSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - Contenu */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Une isolation extérieure<br />
              posée par des professionnels certifiés
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Pour garantir la performance thermique, l’installation doit être réalisée par un artisan certifié RGE.
              Ce gage de qualité vous permet également de bénéficier des aides de l’État comme MaPrimeRénov’ et les CEE.
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-gray-800 font-medium">Professionnels vérifiés & expérimentés</span>
            </div>
          </div>

          {/* Partie droite - Image illustrative */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
              <img
                src={Exterieur3}
                alt="Artisan posant un isolant"
                className="rounded-xl shadow-md object-cover w-full h-full max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationParProfessionnelSection;
