// components/photovoltaïque/RentabiliteSection.tsx
import React from 'react';
import Panneaux2 from '../../assets/Panneaux2.jpg';

const RentabiliteSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image à gauche */}
          <div className="relative">
            <img
              src={Panneaux2}
              alt="Technicien installant des panneaux solaires"
              className="w-full h-150 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Contenu à droite */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Les panneaux solaires : une solution <span className="text-green-500">rentable</span> et durable
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Installer des panneaux photovoltaïques, c’est investir dans une énergie propre tout en réalisant de vraies économies.
              Grâce aux <strong>aides financières</strong>, à la <strong>hausse constante du prix de l’électricité</strong> et à la <strong>valorisation de votre bien</strong>, votre installation devient rapidement un choix gagnant.
            </p>

            <p className="text-gray-700 leading-relaxed">
              En moyenne, une installation solaire est <strong>rentabilisée en 10 à 15 ans</strong>, tandis que la durée de vie des panneaux dépasse généralement les 30 ans.
              Ce sont donc 15 à 20 ans de production d’électricité gratuite !
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">
              Est-ce rentable partout en France ?
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Absolument ! La rentabilité dépend de votre orientation, de l’inclinaison de votre toit et de votre région.
              Et bonne nouvelle : <strong>toute la France bénéficie d’un bon ensoleillement</strong>, même dans le nord.
              Quel que soit votre département, le solaire reste une solution pertinente et rentable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentabiliteSection;
