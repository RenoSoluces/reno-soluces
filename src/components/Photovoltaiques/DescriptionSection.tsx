import React from 'react';

interface DescriptionSectionProps {
  onPageChange: (page: string) => void;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ onPageChange }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
          Installer une centrale photovoltaïque, c'est faire le choix d'une{' '}
          <span className="text-green-500 font-semibold">énergie verte et économique</span>.
          <br />
          Grâce aux panneaux photovoltaïques, vous produisez votre propre électricité pendant au moins{' '}
          25 ans et valorisez votre bien immobilier.
        </p>

        <button
          onClick={() => onPageChange('simulateur-photovoltaique')}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
        >
          J’installe des panneaux photovoltaïques
        </button>
      </div>
    </section>
  );
};

export default DescriptionSection;
