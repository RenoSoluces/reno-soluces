import React from 'react';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';
import Actualites from '../../components/Actualites.tsx';

import HeroSection from '../../components/IsolationCombles/HeroSection.tsx';
import PourquoiIsolerCombles from '../../components/IsolationCombles/PourquoiIsolerCombles.tsx';
import BeneficesIsolationCombles from '../../components/IsolationCombles/BeneficesIsolationCombles.tsx';
import CommentCaFonctionne from '../../components/IsolationCombles/CommentCaFonctionne.tsx';
import RampantsOuPerdus from '../../components/IsolationCombles/RampantsOuPerdus.tsx';
import TechniqueCombles from '../../components/IsolationCombles/TechniqueCombles.tsx';
import MateriauPourCombles from '../../components/IsolationCombles/MateriauPourCombles.tsx';
import AvantagesInconvenientsCombles from '../../components/IsolationCombles/AvantagesInconvenientsCombles.tsx';
import IsolezComblesAvecRenoSoluces from '../../components/IsolationCombles/IsolezComblesAvecRenoSoluces.tsx';
import FaqSection from '../../components/IsolationCombles/FaqSection.tsx';

interface IsolationComblesProps {
  onPageChange: (page: string) => void;
}

const IsolationCombles: React.FC<IsolationComblesProps> = ({ onPageChange }) => { 
  return ( 
    <div className="bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      <HeroSection onPageChange={onPageChange} />
      <PourquoiIsolerCombles />
      <BeneficesIsolationCombles />
      <CommentCaFonctionne />
      <RampantsOuPerdus />
      <TechniqueCombles />
      <MateriauPourCombles />
      <AvantagesInconvenientsCombles />
      <IsolezComblesAvecRenoSoluces onPageChange={onPageChange} />
      <FaqSection />
      <Actualites onPageChange={onPageChange} />
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default IsolationCombles;
