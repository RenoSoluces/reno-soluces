import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Actualites from '../../components/Actualites';

import HeroSection from '../../components/PompeChaleurAirAir/HeroSection';
import QuEstCeQuePompeChaleurSection from '../../components/PompeChaleurAirAir/QuEstCeQuePompeChaleurSection';
import PourquoiChoisirPompeChaleurSection from '../../components/PompeChaleurAirAir/PourquoiChoisirPompeChaleurSection';
import AvantagesPompeChaleurSection from '../../components/PompeChaleurAirAir/AvantagesPompeChaleurSection';
import FonctionnementPompeChaleurSection from '../../components/PompeChaleurAirAir/FonctionnementPompeChaleurSection';
import TypesPompeChaleurSection from '../../components/PompeChaleurAirAir/TypesPompeChaleurSection';
import InstallationProfessionnelSection from '../../components/PompeChaleurAirAir/InstallationProfessionnelSection';
import AidesFinancieresSection from '../../components/PompeChaleurAirAir/AidesFinancieresSection';
import AvisRenoSolucesSection from '../../components/PompeChaleurAirAir/AvisRenoSolucesSection';
import FaqSection from '../../components/PompeChaleurAirAir/FaqSection';

interface PompeChaleurAirAirProps {
  onPageChange: (page: string) => void;
}

const PompeChaleurAirAir: React.FC<PompeChaleurAirAirProps> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      
      <HeroSection onPageChange={onPageChange} />
      <QuEstCeQuePompeChaleurSection />
      <PourquoiChoisirPompeChaleurSection />
      <AvantagesPompeChaleurSection />
      <FonctionnementPompeChaleurSection />
      <TypesPompeChaleurSection />
      <InstallationProfessionnelSection />
      <AidesFinancieresSection onPageChange={onPageChange}/>
      <AvisRenoSolucesSection />
      <FaqSection onPageChange={onPageChange} />
      
      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PompeChaleurAirAir;