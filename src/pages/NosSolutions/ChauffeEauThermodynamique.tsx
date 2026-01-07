import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Actualites from '../../components/Actualites';

import HeroSection from '../../components/ChauffeEauThermodynamique/HeroSection';
import QuEstCeQueChauffeEauSection from '../../components/ChauffeEauThermodynamique/QuEstCeQueChauffeEauSection';
import PourquoiChoisirChauffeEauSection from '../../components/ChauffeEauThermodynamique/PourquoiChoisirChauffeEauSection';
import AvantagesChauffeEauSection from '../../components/ChauffeEauThermodynamique/AvantagesChauffeEauSection';
import FonctionnementChauffeEauSection from '../../components/ChauffeEauThermodynamique/FonctionnementChauffeEauSection';
import TypesChauffeEauSection from '../../components/ChauffeEauThermodynamique/TypesChauffeEauSection';
import InstallationProfessionnelSection from '../../components/ChauffeEauThermodynamique/InstallationProfessionnelSection';
import AidesFinancieresSection from '../../components/ChauffeEauThermodynamique/AidesFinancieresSection';
import FaqSection from '../../components/ChauffeEauThermodynamique/FaqSection';

interface ChauffeEauThermodynamiqueProps {
  onPageChange: (page: string) => void;
}

const ChauffeEauThermodynamique: React.FC<ChauffeEauThermodynamiqueProps> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      
      <HeroSection onPageChange={onPageChange}/>
      <QuEstCeQueChauffeEauSection />
      <PourquoiChoisirChauffeEauSection />
      <AvantagesChauffeEauSection />
      <FonctionnementChauffeEauSection />
      <TypesChauffeEauSection />
      <InstallationProfessionnelSection />
      <AidesFinancieresSection onPageChange={onPageChange} />
      <FaqSection onPageChange={onPageChange} />
      
      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default ChauffeEauThermodynamique;