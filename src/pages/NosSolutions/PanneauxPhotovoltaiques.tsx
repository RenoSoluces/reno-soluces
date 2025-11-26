// pages/PanneauxPhotovoltaiques.tsx

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HeroSection from '../../components/Photovoltaiques/HeroSection';
import DescriptionSection from '../../components/Photovoltaiques/DescriptionSection';
import PourquoiInstallerSection from '../../components/Photovoltaiques/PourquoiInstallerSection';
import RentabiliteSection from '../../components/Photovoltaiques/RentabiliteSection';
import SimulationSection from '../../components/Photovoltaiques/SimulationSection';
import CoutSection from '../../components/Photovoltaiques/CoutSection';
import AidesFinancieresSection from '../../components/Photovoltaiques/AidesFinancieresSection';
import RenoSolucesSection from '../../components/Photovoltaiques/RenoSolucesSection';
import FaqSection from '../../components/Photovoltaiques/FaqSection';

import ActualitesSection from '../../components/Actualites';

interface Props {
  onPageChange: (page: string) => void;
}

const PanneauxPhotovoltaiques: React.FC<Props> = ({ onPageChange }) => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header global */}
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange} 
      />

      {/* Sections photovoltaïques */}
      <HeroSection onPageChange={onPageChange} />
      <DescriptionSection onPageChange={onPageChange} />
      <PourquoiInstallerSection onPageChange={onPageChange} />
      <RentabiliteSection />
      <SimulationSection onPageChange={onPageChange} />
      <CoutSection onPageChange={onPageChange} />
      <AidesFinancieresSection onPageChange={onPageChange} />
      <RenoSolucesSection onPageChange={onPageChange} />
      <FaqSection onPageChange={onPageChange} />

      {/* Actualités (venant du dossier général `components/`) */}
      <ActualitesSection onPageChange={onPageChange} />

      {/* Footer global */}
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PanneauxPhotovoltaiques;
