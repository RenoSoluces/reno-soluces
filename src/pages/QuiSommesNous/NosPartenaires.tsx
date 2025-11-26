import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogoIdehome from '../../assets/LogoIdehome.jpg';
import LogoAnte from '../../assets/LogoAnte.jpg';
import LogoEcoIsoBat from '../../assets/LogoEcoIsoBat.jpg';
import LogoElen from '../../assets/LogoElen.jpg';

const partners = [
  {
    name: 'Idéhome France',
    logoSrc: LogoIdehome,
    website: 'https://www.idehome-france.com',
  },
  {
    name: 'ANTE France',
    logoSrc: LogoAnte,
    website: 'https://www.anteagroup.com/france',
  },
  {
    name: 'Eco Iso Bat',
    logoSrc: LogoEcoIsoBat,
    website: '#',
  },
  {
    name: 'Elen',
    logoSrc: LogoElen,
    website: 'https://www.elen-france.fr/',
  },
];

const NosPartenaires: React.FC<{ onPageChange: (page: string) => void }> = ({
  onPageChange,
}) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header
        activeSection="partenaires"
        onSectionChange={() => {}}
        onPageChange={onPageChange}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nos Partenaires de Confiance
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Des collaborations de confiance pour vous offrir le meilleur de la rénovation énergétique.
        </p>
      </section>

      {/* Listing des partenaires */}
      <main className="flex-grow py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center justify-center"
              >
                <img
                  src={p.logoSrc}
                  alt={`Logo ${p.name}`}
                  className="max-h-20 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default NosPartenaires;
