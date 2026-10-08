import React from 'react';
import { Wind, Droplets, Home } from 'lucide-react';

const QuEstCeQuePompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Illustration */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="relative">
                {/* Unité extérieure */}
                <div className="w-32 h-24 bg-gray-600 rounded-lg relative mx-auto mb-8">
                  <div className="absolute inset-2 bg-gray-500 rounded flex items-center justify-center">
                    <Wind className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                    Unité extérieure
                  </div>
                </div>
                
                {/* Liaison */}
                <div className="w-1 h-12 bg-blue-500 mx-auto mb-4" />
                
                {/* Unité intérieure */}
                <div className="w-24 h-16 bg-orange-400 rounded-lg relative mx-auto">
                  <div className="absolute inset-2 bg-orange-300 rounded flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                    Unité intérieure
                  </div>
                </div>
                
                {/* Maison */}
                <div className="absolute -right-16 top-16">
                  <Home className="w-12 h-12 text-gray-600" />
                  <div className="text-xs text-gray-600 mt-1">Chauffage + ECS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Qu'est-ce qu'une pompe à chaleur<br />Air/Eau ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Une <strong>pompe à chaleur Air/Eau</strong> est un système de chauffage qui puise 
              les calories présentes dans l'air extérieur pour les transférer à l\'eau de votre 
              circuit de chauffage central (radiateurs, plancher chauffant).
            </p>

            <p className="text-gray-700 leading-relaxed">
              Elle peut également produire votre <strong>eau chaude sanitaire</strong> grâce à un 
              ballon intégré ou déporté. Cette solution 2-en-1 remplace efficacement votre 
              ancienne chaudière tout en <strong>divisant vos factures par 3</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Fonctionnant même par températures négatives, la pompe à chaleur Air/Eau 
              utilise une énergie renouvelable et gratuite pour vous offrir un confort 
              optimal toute l'année.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuEstCeQuePompeChaleurSection;