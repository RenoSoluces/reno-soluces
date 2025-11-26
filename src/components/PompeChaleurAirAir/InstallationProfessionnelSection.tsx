import React from 'react';
import { ShieldCheck } from 'lucide-react';
import AirAir3 from '../../assets/AirAir3.jpg';

const InstallationProfessionnelSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Installation par un<br />
              professionnel qualifié
            </h2>

            <p className="text-gray-700 leading-relaxed">
              L'installation d'une pompe à chaleur Air/Air nécessite des compétences 
              spécifiques : perçage, raccordements frigorifiques, mise en service, 
              réglages et programmation des unités intérieures.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Nos techniciens qualifiés vous garantissent une installation conforme 
              aux normes, optimisée pour vos besoins et votre logement. L'intervention 
              est généralement réalisée en une journée.
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-gray-800 font-medium">Installation rapide et garantie</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
              <img
                src={AirAir3}
                alt="Professionnel installant une pompe à chaleur Air/Air"
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