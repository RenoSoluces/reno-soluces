import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Sections Isolation Extérieure
import HeroSection from '../../components/IsolationExterieur/HeroSection';
import QuEstCeQueIsolationExterieureSection from '../../components/IsolationExterieur/QuEstCeQueIsolationExterieureSection';
import PourquoiFaireIsolationSection from '../../components/IsolationExterieur/PourquoiFaireIsolationSection';
import AvantagesIsolationSection from '../../components/IsolationExterieur/AvantagesIsolationSection';
import TechniquesIsolationSection from '../../components/IsolationExterieur/TechniquesIsolationSection';
import EligibiliteAidesSection from '../../components/IsolationExterieur/EligibiliteAidesSection';
import InstallationParProfessionnelSection from '../../components/IsolationExterieur/InstallationParProfessionnelSection';
import AvisRenoSolucesSection from '../../components/IsolationExterieur/AvisRenoSolucesSection';
import FaqSection from '../../components/IsolationExterieur/FaqSection';

// Section actualités (générique)
import ActualitesSection from '../../components/Actualites';

interface IsolationExterieurProps {
  onPageChange: (page: string) => void;
}

const IsolationExterieur: React.FC<IsolationExterieurProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      
      <HeroSection onPageChange={onPageChange}/>
      <QuEstCeQueIsolationExterieureSection />
      <PourquoiFaireIsolationSection />
      <AvantagesIsolationSection />
      <TechniquesIsolationSection />
      <EligibiliteAidesSection onPageChange={onPageChange} />
      <InstallationParProfessionnelSection />
      <AvisRenoSolucesSection />
      <FaqSection onPageChange={onPageChange} />
      <ActualitesSection onPageChange={onPageChange} />
      
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default IsolationExterieur;
