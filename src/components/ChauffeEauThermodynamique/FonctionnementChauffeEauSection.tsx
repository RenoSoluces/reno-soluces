import React from 'react';
import BallonThermo3 from '../../assets/BallonThermo3.jpeg';

const FonctionnementChauffeEauSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Partie gauche - Contenu */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Comment fonctionne un<br />
              chauffe-eau thermodynamique ?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Le <strong>fonctionnement du chauffe-eau thermodynamique</strong> repose sur le principe 
              de la pompe à chaleur. Un ventilateur aspire l'air ambiant et le fait passer sur 
              un évaporateur contenant un fluide frigorigène.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Captage des calories</h4>
                  <p className="text-gray-700 text-sm">L'air ambiant réchauffe le fluide frigorigène qui s'évapore</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compression</h4>
                  <p className="text-gray-700 text-sm">Le compresseur augmente la pression et la température du gaz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Condensation</h4>
                  <p className="text-gray-700 text-sm">Le gaz chaud cède sa chaleur à l'eau du ballon et se condense</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Détente</h4>
                  <p className="text-gray-700 text-sm">Le détendeur abaisse la pression pour recommencer le cycle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Image */}
          <div className="relative">
            <img
              src={BallonThermo3}
              alt="Schéma de fonctionnement chauffe-eau thermodynamique"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FonctionnementChauffeEauSection;