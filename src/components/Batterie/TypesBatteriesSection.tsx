import React from 'react';
import { Battery } from 'lucide-react';

const TypesBatteriesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Quelle batterie pour des panneaux solaires ?
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Le marché des batteries solaires s’est diversifié avec l’essor du photovoltaïque. Voici les deux grandes familles de batteries disponibles aujourd’hui.
          </p>
        </div>

        {/* Cartes comparatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Batterie plomb ouvert */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-20 h-16 bg-gray-300 rounded mx-auto mb-4 flex items-center justify-center">
                <Battery className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Batterie solaire au plomb ouvert
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Fiable et économique, la <strong>batterie au plomb ouvert</strong> utilise un électrolyte liquide
              pour stocker l’énergie. Elle doit être installée dans un endroit bien ventilé et nécessite
              un <strong>entretien régulier</strong>, notamment le contrôle du niveau d’électrolyte. C’est la solution la plus abordable, mais aussi la plus contraignante au quotidien.
            </p>
          </div>

          {/* Batterie lithium */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <div className="w-20 h-16 bg-blue-500 rounded mx-auto mb-4 flex items-center justify-center">
                <Battery className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Batterie solaire au lithium
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Plus récente et plus performante, la <strong>batterie lithium-ion</strong> est compacte,
              légère, <strong>sans entretien</strong> et offre une grande capacité de stockage.
              Elle supporte des <strong>décharges profondes</strong> et équipe de nombreux appareils
              du quotidien (smartphones, véhicules électriques…). C’est ce modèle qu’a choisi
              Tucoenergie avec la batterie <strong>SolarEdge Energy Bank 10kWh</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesBatteriesSection;
