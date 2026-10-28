import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AvisClients from '../../components/AvisClients';

const NosTemoignages: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header activeSection="temoignages" onSectionChange={() => {}} onPageChange={onPageChange} />
    <section className="relative bg-emerald-900 text-white py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">Les avis de nos clients</h1>
      <p className="text-lg max-w-2xl mx-auto opacity-90">Découvrez les avis publiés par nos clients sur Google, affichés directement via notre service d’avis.</p>
    </section>
    <AvisClients />
    <section className="bg-emerald-800 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Vous avez un projet ?</h2>
      <p className="mb-6">Décrivez-nous votre projet et nous vous indiquerons si une mise en relation avec un professionnel partenaire peut être pertinente.</p>
      <a href="/contact" className="inline-block bg-white hover:bg-gray-100 text-emerald-900 px-8 py-3 rounded-full font-semibold shadow-lg transition-colors">Décrire mon projet</a>
    </section>
    <Footer onPageChange={onPageChange} />
  </div>
);

export default NosTemoignages;
