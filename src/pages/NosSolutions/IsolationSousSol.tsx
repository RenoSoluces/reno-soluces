import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Actualites from '../../components/Actualites';

import HeroSection from '../../components/IsolationSousSol/HeroSection';
import QuEstCeQueIsolationSoussolSection from '../../components/IsolationSousSol/QuEstCeQueIsolationSoussolSection';
import PourquoiIsolerPlancherSection from '../../components/IsolationSousSol/PourquoiIsolerPlancherSection';
import AvantagesIsolationSoussolSection from '../../components/IsolationSousSol/AvantagesIsolationSoussolSection';
import TechniquesIsolationSoussolSection from '../../components/IsolationSousSol/TechniquesIsolationSoussolSection';
import MateriauIsolationSoussolSection from '../../components/IsolationSousSol/MateriauIsolationSoussolSection';
import InstallationProfessionnelSection from '../../components/IsolationSousSol/InstallationProfessionnelSection';
import AidesFinancieresSection from '../../components/IsolationSousSol/AidesFinancieresSection';
import AvisRenoSolucesSection from '../../components/IsolationSousSol/AvisRenoSolucesSection';
import FaqSection from '../../components/IsolationSousSol/FaqSection';

interface IsolationSoussolProps {
  onPageChange: (page: string) => void;
}

const IsolationSousSol: React.FC<IsolationSoussolProps> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      
      <HeroSection onPageChange={onPageChange} />
      <QuEstCeQueIsolationSoussolSection />
      <PourquoiIsolerPlancherSection />
      <AvantagesIsolationSoussolSection />
      <TechniquesIsolationSoussolSection />
      <MateriauIsolationSoussolSection />
      <InstallationProfessionnelSection />
      <AidesFinancieresSection onPageChange={onPageChange} />
      <AvisRenoSolucesSection />
      <FaqSection onPageChange={onPageChange} />
      
      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default IsolationSousSol;