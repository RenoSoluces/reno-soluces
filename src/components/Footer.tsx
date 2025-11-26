import React from 'react';
import { Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const nosSolutions = [
    { name: 'Photovoltaïque', page: 'panneaux-photovoltaiques' },
    { name: 'Batterie pour panneau solaire', page: 'batterie' },
    { name: 'Pompe à chaleur Air/Eau', page: 'pompe-chaleur-air-eau' },
    { name: 'Pompe à chaleur Air/Air', page: 'pompe-chaleur-air-air' },
    { name: 'Chauffe-eau thermodynamique', page: 'chauffe-eau-thermodynamique' },
    { name: 'Isolation thermique extérieure', page: 'isolation-exterieur' },
    { name: 'Isolation des combles', page: 'isolation-combles' },
    { name: 'Isolation des planchers bas', page: 'isolation-sous-sol' },
    { name: 'Rénovation d\'ampleur', page: 'renovation-ampleur' }
  ];

  const lesAides = [
    { name: 'Le dispositif des CEE', page: 'cee' },
    { name: 'La prime coup de pouce chauffage', page: 'coup-de-pouce-chauffage' },
    { name: 'MaPrimeRénov\'', page: 'ma-prime-renov' },
    { name: 'La TVA 5,5%', page: 'tva' },
    { name: 'La prime à l\'autoconsommation', page: 'prime-autoconsommation' },
    { name: 'L\'éco-prêt à taux zéro', page: 'eco-pret-taux-zero' }
  ];

  const conseils = [
    { name: 'Guides solaires', page: 'fonctionnement-panneau-solaire' },
    { name: 'Photovoltaïque', page: 'installation-panneaux-solaires' },
    { name: 'Chauffage', page: 'fonctionnement-pac-air-eau' },
    { name: 'Rénovation énergétique', page: 'tout-savoir-renovation-energetique' },
    { name: 'Isolation thermique', page: 'prix-isolation-exterieure' },
    { name: 'Chauffe-eau', page: 'rentabilite-chauffe-eau-thermodynamique' }
  ];

  const enSavoirPlus = [
    'Contact',
    { name: 'FAQ', page: 'faq' },
    { name: 'Notre blog', page: 'notre-blog' },
    { name: 'Lexique', page: 'lexique' },
    { name: 'Parrainage', page: 'parrainage' },
    { name: 'Rénovation énergétique Arriège', page: 'renovation-energetique-arriege' },
    { name: 'Rénovation énergétique Pyrénées Orientales', page: 'renovation-energetique-pyrenees-orientales' },
    { name: 'Rénovation énergétique Haute Garonne', page: 'renovation-energetique-haute-garonne' },
    { name: 'Rénovation énergétique Hérault', page: 'renovation-energetique-herault' },
    { name: 'Rénovation énergétique Aude', page: 'renovation-energetique-aude' }
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-8">
          {/* Colonne gauche - Contact et certifications */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bouton contact */}
            <button
  onClick={() => onPageChange && onPageChange('contact')}
  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center space-x-2"
>
  <Phone className="w-4 h-4" />
  <span>Nous contacter</span>
</button>


            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574809843264" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/renosoluces/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nos solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos solutions</h3>
            <ul className="space-y-2">
              {nosSolutions.map((solution, index) => (
                <li key={index}>
                  {typeof solution === 'object' ? (
                    <button 
                      onClick={() => onPageChange && onPageChange(solution.page)}
                      className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                    >
                      {solution.name}
                    </button>
                  ) : (
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {solution}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Les aides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Les aides</h3>
            <ul className="space-y-2">
              {lesAides.map((aide, index) => (
                <li key={index}>
                  {typeof aide === 'object' ? (
                    <button 
                      onClick={() => onPageChange && onPageChange(aide.page)}
                      className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                    >
                      {aide.name}
                    </button>
                  ) : (
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {aide}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Conseils */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Conseils</h3>
            <ul className="space-y-2">
              {conseils.map((conseil, index) => (
                <li key={index}>
                  {typeof conseil === 'object' ? (
                    <button 
                      onClick={() => onPageChange && onPageChange(conseil.page)}
                      className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                    >
                      {conseil.name}
                    </button>
                  ) : (
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {conseil}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* En savoir plus */}
          <div>
            <h3 className="text-lg font-semibold mb-4">En savoir plus</h3>
            <ul className="space-y-2">
              {enSavoirPlus.map((item, index) => (
                <li key={index}>
                  {typeof item === 'object' ? (
                    <button 
                      onClick={() => onPageChange && onPageChange(item.page)}
                      className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <button 
                      onClick={() => onPageChange && onPageChange('contact')}
                      className="text-gray-300 hover:text-white text-sm transition-colors text-left"
                    >
                      Contact
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section du bas */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Liens légaux */}
            <div className="flex flex-wrap space-x-6 text-sm">
              <button 
                onClick={() => onPageChange && onPageChange('mentions-legales')}
                className="text-gray-300 hover:text-white underline transition-colors"
              >
                Mentions légales
              </button>
              <button 
                onClick={() => onPageChange && onPageChange('politique-confidentialite')}
                className="text-gray-300 hover:text-white underline transition-colors"
              >
                Politique de confidentialité
              </button>
              <button 
                onClick={() => onPageChange && onPageChange('politique-cookies')}
                className="text-gray-300 hover:text-white underline transition-colors"
              >
                Politique de cookies
              </button>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              ©2025 RENOSOLUCES. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;