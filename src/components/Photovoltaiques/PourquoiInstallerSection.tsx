// components/Photovoltaïque/PourquoiInstallerSection.tsx
import React from "react";

interface PourquoiInstallerSectionProps {
  onPageChange: (page: string) => void;
}

const PourquoiInstallerSection: React.FC<PourquoiInstallerSectionProps> = ({ onPageChange }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Pourquoi <span className="text-green-500">installer</span> des panneaux<br />
            photovoltaïques <span className="text-green-500">chez moi</span> ?
          </h2>
        </div>

        {/* Sous-titre */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            <button
              onClick={() => onPageChange("fonctionnement-panneau-solaire")}
              className="text-green-500 underline cursor-pointer hover:text-green-600 transition-colors bg-transparent border-none p-0"
            >
              Les avantages des panneaux photovoltaïques
            </button>{" "}
            sont nombreux et aussi<br />
            bien environnementaux que financiers.
          </p>
        </div>

        {/* Grille des avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Une facture énergétique allégée",
              description:
                "Face à la hausse des prix de l'énergie, le photovoltaïque se présente comme une excellente alternative pour réaliser jusqu'à 50% d'économies sur votre facture.",
            },
            {
              title: "Un bien immobilier valorisé",
              description:
                "La valeur verte, c'est-à-dire l'augmentation de la valeur de votre logement grâce à sa performance énergétique, est devenue un critère de vente. L'installation de panneaux photovoltaïques sur votre maison aura donc un impact sur sa valeur.",
            },
            {
              title: "Une consommation électrique locale",
              description:
                "Le photovoltaïque est l'un des systèmes de production d'électricité les plus écologiques. Grâce à vos panneaux solaires, vous produisez et consommez ainsi localement votre électricité verte décarbonée.",
            },
          ].map((avantage, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{avantage.title}</h3>
              <p className="text-gray-700 leading-relaxed">{avantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PourquoiInstallerSection;
