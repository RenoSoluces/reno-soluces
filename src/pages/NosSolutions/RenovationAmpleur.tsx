import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Actualites from '../../components/Actualites';

import HeroSection from '../../components/RenovationAmpleur/HeroSection';
import QuEstCeQueRenovationSection from '../../components/RenovationAmpleur/QuEstCeQueRenovationSection';
import PourquoiRenovationAmpleurSection from '../../components/RenovationAmpleur/PourquoiRenovationAmpleurSection';
import AvantagesRenovationSection from '../../components/RenovationAmpleur/AvantagesRenovationSection';
import EtapesRenovationSection from '../../components/RenovationAmpleur/EtapesRenovationSection';
import TravauxInclusSection from '../../components/RenovationAmpleur/TravauxInclusSection';
import AidesFinancieresSection from '../../components/RenovationAmpleur/AidesFinancieresSection';
import AccompagnementRenoSolucesSection from '../../components/RenovationAmpleur/AccompagnementRenoSolucesSection';
import FaqSection from '../../components/RenovationAmpleur/FaqSection';

interface RenovationAmpleurProps {
  onPageChange: (page: string) => void;
}

const RenovationAmpleur: React.FC<RenovationAmpleurProps> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      
      <HeroSection onPageChange={onPageChange} />
      <QuEstCeQueRenovationSection />
      <PourquoiRenovationAmpleurSection />
      <AvantagesRenovationSection />
      <EtapesRenovationSection />
      <TravauxInclusSection />
      <AidesFinancieresSection onPageChange={onPageChange} /> 
      <AccompagnementRenoSolucesSection />
      <FaqSection onPageChange={onPageChange} />
      
      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default RenovationAmpleur;