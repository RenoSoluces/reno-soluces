import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Actualites from '../../components/Actualites';

import HeroSection from '../../components/PompeChaleurAirEau/HeroSection';
import QuEstCeQuePompeChaleurSection from '../../components/PompeChaleurAirEau/QuEstCeQuePompeChaleurSection';
import PourquoiChoisirPompeChaleurSection from '../../components/PompeChaleurAirEau/PourquoiChoisirPompeChaleurSection';
import AvantagesPompeChaleurSection from '../../components/PompeChaleurAirEau/AvantagesPompeChaleurSection';
import FonctionnementPompeChaleurSection from '../../components/PompeChaleurAirEau/FonctionnementPompeChaleurSection';
import TypesPompeChaleurSection from '../../components/PompeChaleurAirEau/TypesPompeChaleurSection';
import InstallationProfessionnelSection from '../../components/PompeChaleurAirEau/InstallationProfessionnelSection';
import AidesFinancieresSection from '../../components/PompeChaleurAirEau/AidesFinancieresSection';
import AvisRenoSolucesSection from '../../components/PompeChaleurAirEau/AvisRenoSolucesSection';
import FaqSection from '../../components/PompeChaleurAirEau/FaqSection';

interface PompeChaleurAirEauProps {
  onPageChange: (page: string) => void;
}

const PompeChaleurAirEau: React.FC<PompeChaleurAirEauProps> = ({ onPageChange }) => {
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

export default PompeChaleurAirEau;