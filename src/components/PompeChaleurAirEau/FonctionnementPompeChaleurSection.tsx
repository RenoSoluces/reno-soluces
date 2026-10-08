import React from 'react';
import AirEau2 from '../../assets/AirEau2.jpg';

const FonctionnementPompeChaleurSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Partie gauche - Contenu */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comment fonctionne une<br />
              pompe à chaleur Air/Eau ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Le <strong>fonctionnement de la pompe à chaleur Air/Eau</strong> repose sur un cycle 
              thermodynamique qui capte les calories de l'air extérieur pour les transférer 
              à l'eau de votre circuit de chauffage.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Captage des calories</h4>
                  <p className="text-gray-700 text-sm">L'unité extérieure capte les calories présentes dans l'air</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Évaporation</h4>
                  <p className="text-gray-700 text-sm">Le fluide frigorigène s'évapore au contact de ces calories</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compression</h4>
                  <p className="text-gray-700 text-sm">Le compresseur augmente la pression et la température du gaz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Condensation</h4>
                  <p className="text-gray-700 text-sm">Le gaz chaud cède sa chaleur à l'eau du circuit de chauffage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Image */}
          <div className="relative">
            <img
              src={AirEau2}
              alt="Schéma de fonctionnement pompe à chaleur Air/Eau"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FonctionnementPompeChaleurSection;