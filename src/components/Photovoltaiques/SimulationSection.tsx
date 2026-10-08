import React from 'react';

interface ContactSectionProps {
  onPageChange: (page: string) => void;
}

const SimulationSection: React.FC<ContactSectionProps> = ({ onPageChange }) => {
  return (
    <section className="bg-emerald-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-6">
          <span className="text-green-300 text-lg font-medium">
            Photovoltaïque
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Parlons de votre projet solaire
        </h2>

        <p className="text-white text-xl mb-8">
          Présentez-nous votre projet et vos besoins. Un éco-technicien
          pourra reprendre contact avec vous pour échanger sur votre situation.
        </p>

        <button
          onClick={() => onPageChange('contact')}
          className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Demander à être contacté
        </button>

      </div>
    </section>
  );
};

export default SimulationSection;