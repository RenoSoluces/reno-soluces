'use client';

import React from 'react';
import Batterie6 from '../../assets/Batterie6.jpg';

const InstallationFinancementSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Installation et financement<br />
              d'une batterie solaire
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L'installation d'une batterie solaire doit être réalisée par un professionnel
              certifié <strong>RGE</strong> afin de bénéficier des <strong>aides financières</strong> disponibles.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative">
            <img
              src={Batterie6}
              alt="Installation et financement d'une batterie solaire"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstallationFinancementSection;
