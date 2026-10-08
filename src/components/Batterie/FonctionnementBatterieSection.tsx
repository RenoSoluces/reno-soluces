'use client';

import React from 'react';
import Batterie5 from '../../assets/Batterie5.jpg';

const FonctionnementBatterieSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Partie gauche - Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comment fonctionne une<br />
              batterie photovoltaïque ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Pour comprendre le <strong>fonctionnement de la batterie solaire</strong>,
              il faut d’abord revenir à celui d’une installation photovoltaïque.
              Les panneaux solaires captent les rayons du soleil et produisent un courant continu.
              Un onduleur, un micro-onduleur ou un optimiseur convertit ensuite ce courant en
              <strong> courant alternatif</strong>, utilisable dans le logement.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Si une <strong>batterie de stockage solaire</strong> est présente,
              le courant continu passe d’abord par un <strong>régulateur de charge</strong>
              avant d’être <strong>stocké</strong> dans la batterie. Ce courant sera ensuite
              redirigé vers l’onduleur lorsqu’il sera utilisé, au moment où la batterie se <strong>décharge</strong>.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">
              Zoom sur la batterie virtuelle pour panneau solaire
            </h3>

            <p className="text-gray-700 leading-relaxed">
              En plus des batteries physiques, il existe des batteries virtuelles
              
              &nbsp;permettant de “stocker” l’énergie non consommée. Ce surplus est injecté dans le réseau
              et crédité sur un compte virtuel. Il peut ensuite être utilisé selon vos besoins,
              mais cette solution implique souvent des <strong>frais supplémentaires</strong> (taxes, abonnements...).
            </p>
          </div>

          {/* Partie droite - Schéma illustré */}
          <div className="relative">
            <img
              src={Batterie5}
              alt="Schéma de fonctionnement d'une batterie photovoltaïque"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FonctionnementBatterieSection;
