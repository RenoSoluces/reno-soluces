// src/components/IsolationCombles/PourquoiIsolerCombles.tsx
import React from 'react';

const PourquoiIsolerCombles: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi isoler vos <span className="text-emerald-600">combles ?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            L’isolation des combles est l’une des solutions les plus efficaces pour améliorer
            la performance énergétique de votre habitation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Réduction des pertes de chaleur",
              desc: "30% des déperditions thermiques passent par le toit. Une bonne isolation limite ce gaspillage.",
            },
            {
              title: "Confort été comme hiver",
              desc: "Vous gardez la chaleur en hiver et la fraîcheur en été, pour une température agréable toute l’année.",
            },
            {
              title: "Valorisation de votre bien",
              desc: "Une maison bien isolée gagne en valeur sur le marché immobilier grâce à un meilleur DPE.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PourquoiIsolerCombles;
