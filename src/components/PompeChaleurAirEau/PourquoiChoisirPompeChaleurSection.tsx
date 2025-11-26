import React from 'react';
import { Leaf, Euro, Shield } from 'lucide-react';

const PourquoiChoisirPompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi choisir une <span className="text-emerald-600">pompe à chaleur Air/Eau</span> ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Une solution moderne et performante pour votre chauffage et eau chaude sanitaire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Euro className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Économies importantes</h3>
            <p className="text-gray-600 text-center">
              Jusqu'à 60% d'économies sur votre facture de chauffage par rapport à une chaudière classique.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Leaf className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Écologique</h3>
            <p className="text-gray-600 text-center">
              Utilise l'énergie renouvelable de l'air pour fonctionner, réduisant votre empreinte carbone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Shield className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Polyvalente</h3>
            <p className="text-gray-600 text-center">
              Chauffage et eau chaude sanitaire en un seul équipement. Compatible avec radiateurs et plancher chauffant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiChoisirPompeChaleurSection;