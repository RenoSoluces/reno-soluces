import React from 'react';
import { Zap, Battery, ArrowRight, Euro } from 'lucide-react';

const ChoixEtInstallationSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Partie gauche - Contenu */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comment choisir et installer<br />
              une batterie de stockage<br />
              pour panneau solaire ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Le <strong>choix d'une batterie solaire</strong> ne se limite pas à une simple comparaison de prix.
              Pour une installation performante et durable, il est essentiel de faire appel à un <strong>professionnel qualifié</strong>.
              Celui-ci vous orientera vers la <strong>solution de stockage</strong> la plus adaptée à vos besoins.
              Voici les critères principaux à considérer :
            </p>

            <ul className="space-y-4">
              {[
                {
                  label: 'Puissance',
                  desc: "Détermine la capacité de la batterie à fournir de l’énergie à un instant donné.",
                },
                {
                  label: 'Capacité de stockage',
                  desc: "Quantité d’énergie solaire que la batterie peut accumuler pour une utilisation ultérieure.",
                },
                {
                  label: 'Rendement',
                  desc: "Mesure la part d’énergie restituée par rapport à celle stockée. Plus il est élevé, mieux c’est.",
                },
                {
                  label: 'Nombre de cycles',
                  desc: "Un indicateur clé de la durée de vie de la batterie (charge/décharge complètes).",
                },
                {
                  label: 'Prix',
                  desc: "Le coût global doit être mis en relation avec les performances et la durée de vie.",
                },
                {
                  label: 'Temps de recharge',
                  desc: "Une recharge rapide peut s’avérer utile en cas de consommation importante en soirée.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">
                    <strong>{item.label} : </strong>{item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Partie droite - Icônes illustratives */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Icône puissance */}
                <IconItem icon={<Zap className="w-8 h-8 text-gray-600" />} label="Puissance" />
                {/* Icône capacité */}
                <IconItem icon={<Battery className="w-8 h-8 text-gray-600" />} label="Capacité" />
                {/* Icône rendement */}
                <IconItem icon={<ArrowRight className="w-8 h-8 text-gray-600 rotate-45" />} label="Rendement" />
                {/* Icône cycles */}
                <IconItem
                  icon={
                    <div className="w-6 h-6 border-2 border-gray-600 rounded-full border-dashed animate-spin" />
                  }
                  label="Cycles"
                />
                {/* Icône prix */}
                <IconItem icon={<Euro className="w-6 h-6 text-gray-600" />} label="Prix" />
                {/* Icône temps */}
                <IconItem
                  icon={
                    <div className="w-8 h-8 border-2 border-gray-600 rounded-full relative">
                      <div className="absolute top-1 left-1/2 w-0.5 h-3 bg-gray-600 transform -translate-x-1/2"></div>
                      <div className="absolute top-1/2 left-1/2 w-2 h-0.5 bg-gray-600 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  }
                  label="Temps"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant pour une icône + label
const IconItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
      {icon}
    </div>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export default ChoixEtInstallationSection;
