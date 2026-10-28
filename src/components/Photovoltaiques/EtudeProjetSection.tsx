import React from 'react';
import Panneaux2 from '../../assets/Panneaux2.webp';

const RentabiliteSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image à gauche */}
          <div className="relative">
            <img loading="lazy" decoding="async"
              src={Panneaux2}
              alt="Technicien installant des panneaux photovoltaïques"
              className="w-full h-150 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Contenu à droite */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Un projet photovoltaïque à étudier selon votre
              <span className="text-green-500"> situation</span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Une installation photovoltaïque doit être étudiée en fonction
              des caractéristiques du logement, de la toiture et des usages
              prévus pour l'électricité produite.
            </p>

            <p className="text-gray-700 leading-relaxed">
              L'orientation et l'inclinaison de la toiture, l'ombrage, la
              surface disponible, les équipements envisagés et les modalités
              d'utilisation de l'électricité produite sont notamment à prendre
              en compte.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">
              Quels éléments prendre en compte ?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">
                  <strong>La toiture :</strong> orientation, inclinaison,
                  surface disponible et éventuelles zones d'ombre.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">
                  <strong>Les besoins du logement :</strong> habitudes de
                  consommation et utilisation de l'électricité produite.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">
                  <strong>Les caractéristiques techniques :</strong> puissance,
                  équipements et configuration de l'installation.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <p className="text-gray-700">
                  <strong>Les démarches applicables :</strong> les conditions
                  administratives et réglementaires doivent être vérifiées
                  selon le projet.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Chaque installation est différente. Un échange préalable permet
              de recueillir les informations nécessaires avant d'envisager la
              suite du projet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentabiliteSection;