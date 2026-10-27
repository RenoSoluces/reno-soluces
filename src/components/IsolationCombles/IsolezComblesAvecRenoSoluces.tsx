// src/components/IsolationCombles/IsolezComblesAvecRenoSoluces.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface IsolezComblesAvecRenoSoluces {
  onPageChange?: (page: string) => void;
}

const IsolezComblesAvecRenoSoluces: React.FC<IsolezComblesAvecRenoSoluces> = () => {
  return (
    <section className="bg-emerald-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Isolez vos combles avec <span className="text-green-300">RenoSoluces</span>
        </h2>
        <p className="text-lg mb-10">
          Faites confiance à nos compétences pour étudier une isolation adaptée à votre logement et identifier les aides susceptibles de concerner votre projet.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            'Diagnostic gratuit de vos combles',
            'Conseillers dédiés tout au long du projet',
            'Travaux réalisés par un professionnel disposant des qualifications requises lorsque cela s’applique',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div> 

        <div className="mt-10">
          <a href="/contact"
          className="inline-block bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Prendre Rendez-vous
          </a>
          <p className="text-green-200 text-sm mt-2">Demande gratuite et sans engagement</p>
        </div>
      </div>
    </section>
  );
};

export default IsolezComblesAvecRenoSoluces;
