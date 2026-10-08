// src/components/IsolationExterieure/TechniquesIsolationSection.tsx
import React from 'react';
import { Layers, Grid, Brush } from 'lucide-react';

const TechniquesIsolationSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Les <span className="text-emerald-600">techniques d’isolation</span> extérieure
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Il existe plusieurs méthodes pour isoler efficacement vos murs extérieurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Layers className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Enduit isolant</h3>
            <p className="text-gray-600 text-center">
              Application d’un isolant puis d’un enduit de finition. Idéal pour les façades neuves ou rénovées.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Grid className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Bardage isolant</h3>
            <p className="text-gray-600 text-center">
              Pose d’un isolant recouvert d’un revêtement en bois, PVC ou composite. Esthétique et durable.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4 mx-auto">
              <Brush className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Panneaux isolants</h3>
            <p className="text-gray-600 text-center">
              Fixation de panneaux rigides sur les murs extérieurs, souvent utilisés pour les performances thermiques élevées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechniquesIsolationSection;
