import React, { useState, useRef } from 'react';
import { Phone, ChevronDown, Sun, Home, Shield, Flame, Zap, Star, Users, Calendar, Droplets } from 'lucide-react';
import Logo from '../assets/Logo.png';

interface HeaderProps {
  activeSection: string;
  onSectionChange?: (section: string) => void; // <-- optionnel maintenant
  onPageChange: (page: string) => void;
}

interface NavLink {
  title: string;
  href?: string;
  dropdown?: {
    title: string;
    description: string;
    groups: {
      title: string;
      icon: React.ReactNode;
      items: {
        title: string;
        href?: string;
        page?: string;
        icon?: React.ReactNode;
      }[];
    }[];
  };
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange, onPageChange }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timerRef = useRef<number>();

  const navLinks: NavLink[] = [
    {
      title: "Nos Solutions",
      dropdown: {
        title: "Nos solutions",
        description: "Découvrez toutes nos solutions d'accompagnement à la transition énergétique.",
        groups: [
          {
            title: "NOS SOLUTIONS PHOTOVOLTAÏQUES",
            icon: <Sun className="w-6 h-6" />,
            items: [
              { title: "Panneaux photovoltaïques", page: "panneaux-photovoltaiques" },
              { title: "Batterie de stockage", page: "batterie" },
            ]
          },
          {
            title: "NOS SOLUTIONS GLOBALES",
            icon: <Home className="w-6 h-6" />,
            items: [
              { title: "Rénovation d'ampleur", page: "renovation-ampleur" }
            ]
          },
          {
            title: "NOS SOLUTIONS ISOLATION",
            icon: <Shield className="w-6 h-6" />,
            items: [
              { title: "Isolation des combles", page: "isolation-combles" },
              { title: "Isolation thermique par l'extérieur", page: "isolation-exterieur" },
              { title: "Isolation des planchers bas", page: "isolation-sous-sol" }
            ]
          },
          {
            title: "NOS SOLUTIONS CHAUFFAGE",
            icon: <Flame className="w-6 h-6" />,
            items: [
              { title: "Pompe à chaleur Air/Eau", page: "pompe-chaleur-air-eau" },
              { title: "Pompe à chaleur Air/Air", page: "pompe-chaleur-air-air" }
            ]
          },
          {
            title: "NOS SOLUTIONS BALLON D'EAU CHAUDE",
            icon: <Zap className="w-6 h-6" />,
            items: [
              { title: "Chauffe-eau thermodynamique", page: "chauffe-eau-thermodynamique" }
            ]
          }
        ]
      }
    },
    {
      title: "Les Aides",
      dropdown: {
        title: "Les aides",
        description: "Profitez de toutes les informations nécessaires pour comprendre les aides.",
        groups: [
          {
            title: "LES AIDES RÉNOVATION",
            icon: <Shield className="w-6 h-6" />,
            items: [
              { title: "MaPrimeRénov'", page: "ma-prime-renov" },
              { title: "Le dispositif des CEE", page: "cee" },
              { title: "La prime coup de pouce chauffage", page: "coup-de-pouce-chauffage" },
              { title: "La TVA 5,5 %", page: "tva" },
              { title: "L'éco-prêt à taux zéro", page: "eco-pret-taux-zero" }
            ]
          },
          {
            title: "LES AIDES POUR LE SOLAIRE",
            icon: <Sun className="w-6 h-6" />,
            items: [
              { title: "La prime à l'autoconsommation", page: "prime-autoconsommation" },
            ]
          }
        ]
      }
    },
    {
      title: "Conseils",
      dropdown: {
        title: "Conseils",
        description: "Découvrez tous nos conseils et ressources utiles pour mener à bien vos travaux de rénovation énergétique.",
        groups: [
          {
            title: "PHOTOVOLTAÏQUES",
            icon: <Sun className="w-6 h-6" />,
            items: [
              { title: "Fonctionnement d'un panneau solaire", page: "fonctionnement-panneau-solaire" },
              { title: "Installation de panneaux solaires", page: "installation-panneaux-solaires" },
              { title: "Prix des panneaux solaires", page: "prix-panneaux-solaires" }
            ]
          },
          {
            title: "CHAUFFAGE",
            icon: <Flame className="w-6 h-6" />,
            items: [
              { title: "Fonctionnement de la pompe à chaleur air eau", page: "fonctionnement-pac-air-eau" },
              { title: "Installation d'une pompe à chaleur air eau", page: "installation-pac-air-eau" }
            ]
          },
          {
            title: "RÉNOVATION ÉNERGÉTIQUE",
            icon: <Shield className="w-6 h-6" />,
            items: [
              { title: "Tout savoir sur la rénovation énergétique", page: "tout-savoir-renovation-energetique" },
              { title: "Les passoires thermiques", page: "passoires-thermiques" }
            ]
          },
          {
            title: "ISOLATION THERMIQUE",
            icon: <Shield className="w-6 h-6" />,
            items: [
              { title: "Prix de l'isolation thermique extérieure", page: "prix-isolation-exterieure" },
              { title: "Les CEE et l'isolation thermique extérieure", page: "cee-isolation-exterieure" }
            ]
          },
          {
            title: "CHAUFFE EAU",
            icon: <Droplets className="w-6 h-6" />,
            items: [
              { title: "Rentabilité d'un chauffe-eau thermodynamique ?", page: "rentabilite-chauffe-eau-thermodynamique" },
              { title: "Prix chauffe-eau thermodynamique", page: "prix-chauffe-eau-thermodynamique" }
            ]
          }
        ]
      }
    },
    {
      title: "Qui Sommes-Nous ?",
      dropdown: {
        title: "Qui sommes-nous",
        description: "Tout savoir sur Reno Soluces",
        groups: [
          {
            title: "NOTRE IDENTITÉ",
            icon: <Shield className="w-6 h-6" />,
            items: [
              { title: "Un attachement à des valeurs humaines et environnementales.", page: "notre-identite" }
            ]
          },
          {
            title: "NOS TÉMOIGNAGES",
            icon: <Star className="w-6 h-6" />,
            items: [
              { title: "Découvrez nos derniers témoignages clients.", page: "nos-temoignages" }
            ]
          },
          {
            title: "NOS PARTENAIRES",
            icon: <Users className="w-6 h-6" />,
            items: [
              { title: "Découvrez nos partenariats avec des marques majeures.", page: "nos-partenaires" }
            ]
          },
          {
            title: "NOTRE HISTOIRE",
            icon: <Calendar className="w-6 h-6" />,
            items: [
              { title: "L'aventure RENO en quelques dates clés.", page: "notre-histoire" }
            ]
          }
        ]
      }
    }
  ];

  const handleMenuEnter = (title: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveMenu(title);
    onSectionChange?.(title.toLowerCase().replace(/\s+/g, '-'));
  };

  const handleMenuLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleItemClick = (item: any) => {
    if (item.page) {
      onPageChange(item.page);
    }
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => onPageChange('home')}
                className="h-24 w-60 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img 
                  src={Logo}
                  alt="Logo Reno Soluces"
                  className="h-20 w-auto object-contain"
                />
              </button>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex flex-1 mx-8">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li
                    key={link.title}
                    className="relative"
                    onMouseEnter={() => link.dropdown && handleMenuEnter(link.title)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        activeSection === link.title.toLowerCase().replace(/\s+/g, '-')
                          ? 'text-green-600 border-b-2 border-green-600'
                          : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      <span>{link.title}</span>
                      {link.dropdown && <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Dropdown Menu */}
                    {link.dropdown && activeMenu === link.title && (
                      <div
                        className="absolute top-full mt-0 left-0 w-[900px] bg-white shadow-xl rounded-b-lg border-t-4 border-green-600 z-50"
                        onMouseEnter={() => handleMenuEnter(link.title)}
                        onMouseLeave={handleMenuLeave}
                      >
                        <div className="p-8 flex">
                          {/* Sidebar */}
                          <div className="w-1/3 pr-8 border-r border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              {link.dropdown.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {link.dropdown.description}
                            </p>
                          </div>

                          {/* Content Grid */}
                          <div className="w-2/3 pl-8">
                            <div className="grid grid-cols-2 gap-6">
                              {link.dropdown.groups.map((group, index) => (
                                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex items-start space-x-3 mb-4">
                                    <div className="text-yellow-500 mt-1">
                                      {group.icon}
                                    </div>
                                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                      {group.title}
                                    </h4>
                                  </div>
                                  
                                  <ul className="space-y-2">
                                    {group.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <button
                                          onClick={() => handleItemClick(item)}
                                          className={`text-sm text-left w-full hover:text-green-600 transition-colors ${
                                            item.title === 'Voir plus' ? 'text-green-600 font-medium' : 'text-gray-700'
                                          }`}
                                        >
                                          {item.title}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact and CTA */}
            <div className="flex items-center space-x-4">
              {/* Téléphone avec infobulle */}
              <div className="relative group cursor-pointer">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">06.69.30.70.21</span>
                </div>

                {/* Infobulle */}
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-xl border border-gray-200 rounded-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 z-50">
                  <div className="flex items-center mb-2">
                    <Phone className="text-orange-500 mr-2 w-4 h-4" />
                    <span className="font-semibold text-gray-800">
                      Appelez notre expert énergétique
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Du lundi au vendredi – 9h à 18h
                  </p>
                </div>
              </div>
              
              {/* Bouton RDV */}
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                Prendre RDV
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;