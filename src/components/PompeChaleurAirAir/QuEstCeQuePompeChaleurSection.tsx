import React from 'react';
import { Wind, Snowflake, Sun } from 'lucide-react';

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
                
                {/* Unités intérieures */}
                <div className="flex space-x-8 justify-center">
                  <div className="w-20 h-12 bg-blue-400 rounded-lg relative">
                    <div className="absolute inset-1 bg-blue-300 rounded flex items-center justify-center">
                      <Snowflake className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                      Climatisation
                    </div>
                  </div>
                  
                  <div className="w-20 h-12 bg-orange-400 rounded-lg relative">
                    <div className="absolute inset-1 bg-orange-300 rounded flex items-center justify-center">
                      <Sun className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                      Chauffage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Qu'est-ce qu'une pompe à chaleur<br />Air/Air ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Une <strong>pompe à chaleur Air/Air</strong> est un système réversible qui puise 
              les calories présentes dans l'air extérieur pour chauffer votre logement en hiver 
              et le rafraîchir en été en inversant son cycle de fonctionnement.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Contrairement à la pompe à chaleur Air/Eau, elle diffuse directement l'air 
              traité dans vos pièces via des <strong>unités intérieures murales</strong> 
              (splits) ou des <strong>consoles</strong>. C'est la solution idéale pour 
              un confort 4 saisons.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Très efficace énergétiquement, elle peut <strong>diviser vos factures par 3</strong> 
              par rapport à un chauffage électrique classique, tout en vous offrant 
              une climatisation performante l'été.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuEstCeQuePompeChaleurSection;