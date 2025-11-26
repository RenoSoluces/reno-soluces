import React from 'react';

interface PrendreRendezVousProps {
  onPageChange?: (page: string) => void;
}

const PrendreRendezVous: React.FC<PrendreRendezVousProps> = ({ onPageChange }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encadré principal */}
        <div className="bg-emerald-900 rounded-3xl px-8 py-12 text-center">
          {/* Titre principal */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
            Contactez un conseiller pour une étude gratuite et{' '}
            <span className="text-green-300">précise</span> de votre maison !
          </h2>

          {/* Bouton CTA */}
          <button 
            onClick={() => onPageChange && onPageChange('contact')}
            className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrendreRendezVous;