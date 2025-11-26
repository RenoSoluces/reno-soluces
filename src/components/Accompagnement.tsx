import React from 'react';

interface AccompagnementProps {
  onPageChange?: (page: string) => void;
}

const Accompagnement: React.FC<AccompagnementProps> = ({ onPageChange }) => {
  return (
    <section className="bg-[#fdf1d6] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image à gauche */}
        <div className="w-full">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="Installation Reno Soluces"
            className="rounded-xl shadow-md w-full object-cover h-96"
          />
        </div>

        {/* Texte + cartes à droite */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Reno Soluces vous accompagne <span className="text-green-500">au-delà</span> de votre installation
          </h2>

          <button 
            onClick={() => onPageChange && onPageChange('contact')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full mb-8 transition-colors"
          >
            Je demande un devis
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carte 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Votre projet <span className="text-green-500">sur-mesure</span>
              </h3>
              <p className="text-gray-700 text-sm">
                Pensé avec vous, pour vous, votre projet devient réalité grâce à notre équipe passionnée.
              </p>
            </div>

            {/* Carte 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Aucun compromis sur la <span className="text-green-500">qualité</span>
              </h3>
              <p className="text-gray-700 text-sm">
                Grâce à une sélection minutieuse parmi les plus grandes marques, nous vous offrons les meilleures solutions pour votre projet.
              </p>
            </div>

            {/* Carte 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Suivi <span className="text-green-500">client</span>
              </h3>
              <p className="text-gray-700 text-sm">
                Avec Reno Soluces, l’accompagnement continue après l’installation grâce à un service après-vente réactif et une assistance téléphonique dédiée.
              </p>
            </div>

            {/* Carte 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Des garanties <span className="text-green-500">étendues</span>
              </h3>
              <p className="text-gray-700 text-sm">
                Nos fabricants partenaires proposent des garanties prolongées allant jusqu'à 10 ans pour votre sérénité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accompagnement;