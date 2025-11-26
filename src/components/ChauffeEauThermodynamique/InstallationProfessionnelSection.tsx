import React from 'react';
import { ShieldCheck } from 'lucide-react';
import BallonThermo4 from '../../assets/BallonThermo4.jpg';

const InstallationProfessionnelSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Installation par un<br />
              professionnel certifié RGE
            </h2>

            <p className="text-gray-700 leading-relaxed">
              L'installation d'un chauffe-eau thermodynamique nécessite des compétences techniques 
              spécifiques : raccordements électriques et hydrauliques, manipulation de fluide frigorigène, 
              réglages de la pompe à chaleur.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Faire appel à un professionnel certifié <strong>RGE</strong> (Reconnu Garant de l'Environnement) 
              vous garantit une installation conforme et vous permet de bénéficier des aides financières de l'État.
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-gray-800 font-medium">Installation garantie et conforme</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
              <img
                src={BallonThermo4}
                alt="Professionnel installant un chauffe-eau thermodynamique"
                className="rounded-xl shadow-md object-cover w-full h-full max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationProfessionnelSection;