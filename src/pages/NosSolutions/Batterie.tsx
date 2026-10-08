'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Import des sections spécifiques à la page Batterie
import HeroSection from '../../components/Batterie/HeroSection';
import QuEstCeQuUneBatterieSection from '../../components/Batterie/QuEstCeQuUneBatterieSection';
import PourquoiInstallerBatterieSection from '../../components/Batterie/PourquoiInstallerBatterieSection';
import AvantagesBatterieSection from '../../components/Batterie/AvantagesBatterieSection';
import TypesBatteriesSection from '../../components/Batterie/TypesBatteriesSection';
import ChoixEtInstallationSection from '../../components/Batterie/ChoixEtInstallationSection';
import AvisRenoSolucesSection from '../../components/Batterie/AvisRenoSolucesSection';
import PrixBatterieSection from '../../components/Batterie/PrixBatterieSection';
import FonctionnementBatterieSection from '../../components/Batterie/FonctionnementBatterieSection';
import InstallationFinancementSection from '../../components/Batterie/InstallationFinancementSection';
import ComparaisonAgmGelSection from '../../components/Batterie/ComparaisonAgmGelSection';
import FaqSection from '../../components/Batterie/FaqSection';

// Import des actualités (dossier global)
import ActualitesSection from '../../components/Actualites';

interface BatterieProps {
  onPageChange: (page: string) => void;
}

const Batterie: React.FC<BatterieProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      
      {/* ✅ Correction ici */}
      <HeroSection onPageChange={onPageChange} /> 

      <QuEstCeQuUneBatterieSection />
      <PourquoiInstallerBatterieSection onPageChange={onPageChange} />
      <AvantagesBatterieSection />
      <TypesBatteriesSection />
      <ChoixEtInstallationSection />
      <AvisRenoSolucesSection />
      <PrixBatterieSection onPageChange={onPageChange} />
      <FonctionnementBatterieSection />
      <InstallationFinancementSection />
      <ComparaisonAgmGelSection />
      <FaqSection onPageChange={onPageChange} />
      <ActualitesSection onPageChange={onPageChange} />
      
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default Batterie;
