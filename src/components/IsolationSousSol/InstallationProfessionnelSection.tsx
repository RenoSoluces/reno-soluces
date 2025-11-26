import React from 'react';
import { ShieldCheck } from 'lucide-react';
import PlancherBas3 from '../../assets/PlancherBas3.jpg';

const InstallationProfessionnelSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - Contenu */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Une isolation des planchers bas<br />
              réalisée par des professionnels RGE
            </h2>

            <p className="text-gray-700 leading-relaxed">
              L'isolation des planchers bas nécessite une expertise technique pour choisir les bons matériaux 
              et techniques selon votre configuration (sous-sol, vide sanitaire, cave). Nos artisans certifiés 
              RGE garantissent une installation conforme et durable.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Cette certification vous permet également de bénéficier des aides de l'État comme MaPrimeRénov' 
              et les Certificats d'Économies d'Énergie (CEE).
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-gray-800 font-medium">Artisans qualifiés & expérimentés</span>
            </div>
          </div>

          {/* Partie droite - Image illustrative */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
              <img
                src={PlancherBas3}
                alt="Artisan installant isolation plancher"
                className="rounded-xl shadow-md object-cover w-full h-full max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationProfessionnelSection;