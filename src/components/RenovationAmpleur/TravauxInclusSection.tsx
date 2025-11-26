import React from 'react';
import { Shield, Flame, Wind, Sun } from 'lucide-react';

const TravauxInclusSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Travaux inclus dans une rénovation d'ampleur
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Une approche globale qui traite tous les aspects de la performance énergétique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Isolation thermique</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Isolation des murs par l'extérieur ou l'intérieur</li>
              <li>• Isolation des combles perdus ou aménageables</li>
              <li>• Isolation des planchers bas</li>
              <li>• Remplacement des menuiseries (fenêtres, portes)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Flame className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Système de chauffage</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Pompe à chaleur air/eau ou air/air</li>
              <li>• Chaudière à condensation gaz ou fioul</li>
              <li>• Poêle à granulés ou insert</li>
              <li>• Chauffe-eau thermodynamique</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Wind className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Ventilation</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• VMC simple flux ou double flux</li>
              <li>• VMC thermodynamique</li>
              <li>• Ventilation mécanique répartie</li>
              <li>• Traitement de l'étanchéité à l'air</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <Sun className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Énergies renouvelables</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Panneaux photovoltaïques</li>
              <li>• Chauffe-eau solaire</li>
              <li>• Système solaire combiné</li>
              <li>• Batterie de stockage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravauxInclusSection;