// components/Photovoltaïque/SimulationSection.tsx
import React from 'react';

interface SimulationSectionProps {
  onPageChange: (page: string) => void;
}

const SimulationSection: React.FC<SimulationSectionProps> = ({ onPageChange }) => {
  return (
    <section className="bg-emerald-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Label */}
        <div className="mb-6">
          <span className="text-green-300 text-lg font-medium">Photovoltaïque</span>
        </div>

        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Lancez votre{' '}
          <span
onClick={() => onPageChange("simulateur")}
className="underline decoration-green-300 decoration-2 underline-offset-4 cursor-pointer hover:text-green-600 transition-colors"

>

simulation solaire personnalisée </span>

          <br />
          en moins d'une minute.
        </h2>

        {/* Sous-titre */}
        <p className="text-white text-xl mb-8">
          Gratuit, rapide, sans engagement – avec Reno Soluces, votre projet commence ici.
        </p>

        {/* CTA */}
<button 
  onClick={() => onPageChange('simulateur')}
  className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
>
  Je calcule ma rentabilité solaire
</button>

      </div>
    </section>
  );
};

export default SimulationSection;
