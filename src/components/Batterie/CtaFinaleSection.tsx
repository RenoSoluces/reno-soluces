'use client';

import React from 'react';

const CtaFinaleSection: React.FC = () => {
  return (
    <section className="bg-emerald-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Prêt à optimiser votre<br />
          <span className="text-green-300">autoconsommation solaire</span> ?
        </h2>

        <p className="text-xl text-green-100 mb-8">
          Découvrez la solution de stockage adaptée à vos besoins avec nos experts.
        </p>

        <button className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
          Je demande un devis gratuit
        </button>

        <p className="text-green-200 text-sm mt-4">
          Gratuit et sans engagement.
        </p>
      </div>
    </section>
  );
};

export default CtaFinaleSection;
