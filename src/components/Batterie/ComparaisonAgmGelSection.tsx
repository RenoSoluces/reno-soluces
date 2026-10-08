'use client';

import React from 'react';

const ComparaisonAgmGelSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Batterie AGM */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-20 h-16 bg-gray-300 rounded mx-auto mb-4 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">AGM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Les batteries solaires AGM
              </h3>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              La <strong>batterie AGM</strong> est en fait une catégorie de <strong>batterie solaire à plomb</strong>. 
              L'électrolyte qu’elle contient est absorbée, ce qui la rend étanche et <strong>plus 
              sécurisée</strong>. Elle se décharge très lentement, ce qui est intéressant pour 
              les utilisateurs. Plus abordable que la batterie lithium, elle se différencie 
              aussi de cette technologie par le plus <strong>faible nombre de cycles de 
              charge et de décharge</strong> qu'elle supporte.
            </p>
          </div>

          {/* Batterie en gel */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-20 h-16 bg-blue-500 rounded mx-auto mb-4 flex items-center justify-center">
                <span className="text-sm font-bold text-white">En gel</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Les batteries solaires en gel
              </h3>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              Issue, elle aussi, de la technologie au plomb, <strong>la batterie solaire en gel</strong> est 
              étanche et contient de la silice qui gélifie l'électrolyte. Elle ne 
              nécessite aucun entretien et offre une <strong>durée de vie</strong> relativement longue 
              en comparaison avec une batterie au plomb ouvert classique. <strong>Sa vitesse 
              de charge</strong> figure en revanche dans ses points faibles. Son <strong>prix</strong> peut 
              également être un inconvénient (c'est la plus chère des batteries à 
              plomb), même s'il reste inférieur à celui d’une batterie lithium.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparaisonAgmGelSection;
