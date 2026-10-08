import React, { useState, useEffect } from "react";
import "./styles-premium.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
 
// Pages
import Solutions from "./pages/NosSolutions/Solutions";
import PanneauxPhotovoltaiques from "./pages/NosSolutions/PanneauxPhotovoltaiques";
import ParcoursPhotovoltaiques from "./pages/Contact/ParcoursPhotovoltaiques";
import Batterie from "./pages/NosSolutions/Batterie";
import IsolationExterieur from "./pages/NosSolutions/IsolationExterieur";
import IsolationCombles from "./pages/NosSolutions/IsolationCombles";
import IsolationSousSol from "./pages/NosSolutions/IsolationSousSol";
import ChauffeEauThermodynamique from "./pages/NosSolutions/ChauffeEauThermodynamique";
import PompeChaleurAirEau from "./pages/NosSolutions/PompeChaleurAirEau";
import PompeChaleurAirAir from "./pages/NosSolutions/PompeChaleurAirAir";
import MaPrimeRenov from "./pages/LesAides/MaPrimeRenov";
import CEE from "./pages/LesAides/CEE";
import PouceChauffage from "./pages/LesAides/PouceChauffage";
import TVA from "./pages/LesAides/TVA";
import PretTauxZero from "./pages/LesAides/PretTauxZero";
import FonctionnementPanneaux from "./pages/NosConseils/FonctionnementPanneaux";
import InstallationPanneauxSolaires from "./pages/NosConseils/InstallationPanneauxSolaires";
import FonctionnementPacAirEau from "./pages/NosConseils/FonctionnementPacAirEau";
import InstallationPacAirEau from "./pages/NosConseils/InstallationPacAirEau";
import CeeIsolationExterieure from "./pages/NosConseils/CeeIsolationExterieure";
import ToutSavoirRenovationEnergetique from "./pages/NosConseils/ToutSavoirRenovationEnergetique";
import NotreIdentite from "./pages/QuiSommesNous/NotreIdentite";
import NotreHistoire from "./pages/QuiSommesNous/NotreHistoire";
import NosPartenaires from "./pages/QuiSommesNous/NosPartenaires";
import NosTemoignages from "./pages/QuiSommesNous/NosTemoignages";
import FAQ from "./pages/Annexe/FAQ";
import NotreBlog from "./pages/Annexe/NotreBlog";
import Lexique from "./pages/Annexe/Lexique";
import Parrainage from "./pages/Contact/Parrainage";
import RenovationEnergetiqueArriege from "./pages/Departements/RenovationEnergetiqueArriege";
import RenovationEnergetiquePyreneesOrientales from "./pages/Departements/RenovationEnergetiquePyreneesOrientales";
import RenovationEnergetiqueHauteGaronne from "./pages/Departements/RenovationEnergetiqueHauteGaronne";
import RenovationEnergetiqueHerault from "./pages/Departements/RenovationEnergetiqueHerault";
import RenovationEnergetiqueAude from "./pages/Departements/RenovationEnergetiqueAude";
import MentionsLegales from "./pages/Annexe/MentionsLegales";
import PolitiqueConfidentialite from "./pages/Annexe/PolitiqueConfidentialite";
import PolitiqueCookies from "./pages/Annexe/PolitiqueCookies";
import ConditionsGeneralesVente from "./pages/Annexe/ConditionsGeneralesVente";
import Contact from "./pages/Contact/Contact";


function App() {
  const PAGE_ROUTES: Record<string, string> = {
    home: '/', solutions: '/solutions', 'panneaux-photovoltaiques': '/panneaux-photovoltaiques',
    'parcours-photovoltaiques': '/parcours-photovoltaiques', batterie: '/batterie',
    'isolation-exterieur': '/isolation-exterieur', 'isolation-combles': '/isolation-combles',
    'isolation-sous-sol': '/isolation-sous-sol', 'chauffe-eau-thermodynamique': '/chauffe-eau-thermodynamique',
    'pompe-chaleur-air-eau': '/pompe-a-chaleur-air-eau', 'pompe-chaleur-air-air': '/pompe-a-chaleur-air-air',
    'ma-prime-renov': '/aides/maprimerenov', cee: '/aides/cee', 'coup-de-pouce-chauffage': '/aides/coup-de-pouce-chauffage',
    tva: '/aides/tva', 'eco-pret-taux-zero': '/aides/eco-pret-taux-zero',
    'fonctionnement-panneau-solaire': '/guides/fonctionnement-panneau-solaire', 'installation-panneaux-solaires': '/guides/installation-panneaux-solaires',
    'fonctionnement-pac-air-eau': '/guides/fonctionnement-pac-air-eau', 'installation-pac-air-eau': '/guides/installation-pac-air-eau',
    'cee-isolation-exterieure': '/guides/cee-isolation-exterieure', 'tout-savoir-renovation-energetique': '/guides/renovation-energetique',
    'notre-identite': '/a-propos', 'notre-histoire': '/a-propos/notre-histoire', 'nos-temoignages': '/avis', 'nos-partenaires': '/partenaires',
    faq: '/faq', 'notre-blog': '/guides', lexique: '/lexique', parrainage: '/parrainage',
    'renovation-energetique-arriege': '/renovation-energetique/ariege', 'renovation-energetique-pyrenees-orientales': '/renovation-energetique/pyrenees-orientales',
    'renovation-energetique-haute-garonne': '/renovation-energetique/haute-garonne', 'renovation-energetique-herault': '/renovation-energetique/herault',
    'renovation-energetique-aude': '/renovation-energetique/aude', 'mentions-legales': '/mentions-legales',
    'politique-confidentialite': '/politique-confidentialite', 'politique-cookies': '/politique-cookies',
    'conditions-generales-vente': '/conditions-generales-vente', contact: '/contact'
  };
  const PATH_TO_PAGE = Object.fromEntries(Object.entries(PAGE_ROUTES).map(([key,path]) => [path,key]));
  const initialPath = window.location.pathname.replace(/\/$/, '') || '/';
  const [currentPage, setCurrentPage] = useState(PATH_TO_PAGE[initialPath] || 'home');

  const pageMeta: Record<string, {title:string; description:string}> = {
    home: {title:'Reno Soluces | Rénovation en Occitanie', description:'Reno Soluces vous met en relation avec des professionnels partenaires pour vos projets de rénovation en Occitanie.'},
    solutions: {title:'Nos solutions de rénovation | Reno Soluces', description:'Découvrez les solutions de rénovation proposées par Reno Soluces et trouvez le professionnel partenaire adapté à votre projet.'},
    'pompe-chaleur-air-eau': {title:'Pompe à chaleur air/eau | Reno Soluces', description:'Comprendre la pompe à chaleur air/eau, son fonctionnement et les points à vérifier avant de demander un devis.'},
    'pompe-chaleur-air-air': {title:'Climatisation réversible / pompe à chaleur air-air | Reno Soluces', description:'Découvrez la pompe à chaleur air-air et la climatisation réversible pour améliorer le confort de votre logement.'},
    'panneaux-photovoltaiques': {title:'Panneaux photovoltaïques | Reno Soluces', description:'Comprendre un projet photovoltaïque, les points techniques à étudier et la mise en relation avec un professionnel.'},
    'isolation-exterieur': {title:'Isolation extérieure | Reno Soluces', description:'Informations sur l’isolation thermique par l’extérieur et mise en relation avec un professionnel partenaire.'},
    'isolation-combles': {title:'Isolation des combles | Reno Soluces', description:'Découvrez les solutions d’isolation des combles et les points à vérifier avant vos travaux.'},
    'isolation-sous-sol': {title:'Isolation du sous-sol | Reno Soluces', description:'Comprendre les possibilités d’isolation d’un sous-sol et préparer votre projet de travaux.'},
    'chauffe-eau-thermodynamique': {title:'Chauffe-eau thermodynamique | Reno Soluces', description:'Informations pratiques sur le chauffe-eau thermodynamique et les critères à étudier pour votre logement.'},
    contact: {title:'Contact | Reno Soluces', description:'Décrivez votre projet de rénovation et demandez une mise en relation avec un professionnel partenaire.'},
    'notre-identite': {title:'À propos de Reno Soluces', description:'Découvrez le rôle de Reno Soluces et notre démarche de mise en relation avec des professionnels partenaires.'},
    'nos-partenaires': {title:'Nos partenaires | Reno Soluces', description:'Découvrez le rôle de nos professionnels partenaires dans l’accompagnement des projets de rénovation.'},
    'notre-blog': {title:'Guides et conseils rénovation | Reno Soluces', description:'Guides, conseils et informations pour mieux comprendre les travaux de rénovation énergétique avant de décider.'},
    faq: {title:'FAQ rénovation | Reno Soluces', description:'Les réponses aux questions fréquentes sur les projets de rénovation et la mise en relation avec nos partenaires.'},
    'mentions-legales': {title:'Mentions légales | Reno Soluces', description:'Mentions légales du site Reno Soluces.'},
    'politique-confidentialite': {title:'Politique de confidentialité | Reno Soluces', description:'Politique de confidentialité et traitement des données personnelles de Reno Soluces.'},
    'politique-cookies': {title:'Politique de cookies | Reno Soluces', description:'Informations sur les cookies et les traceurs utilisés sur le site Reno Soluces.'}
  };

  const navigate = (page: string) => {
    const path = PAGE_ROUTES[page] || '/';
    if (window.location.pathname !== path) window.history.pushState({page}, '', path);
    setCurrentPage(page);
  };

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentPage(PATH_TO_PAGE[path] || 'home');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = pageMeta[currentPage] || pageMeta.home;
    document.title = meta.title;
    let description = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!description) { description = document.createElement('meta'); description.name='description'; document.head.appendChild(description); }
    description.content = meta.description;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.rel='canonical'; document.head.appendChild(canonical); }
    canonical.href = `${window.location.origin}${PAGE_ROUTES[currentPage] || '/'}`;
  }, [currentPage]);

  const renderContent = () => {
    
    if (currentPage === "solutions") {
      return <Solutions onPageChange={navigate} />;
    }

    if (currentPage === "panneaux-photovoltaiques") {
      return <PanneauxPhotovoltaiques onPageChange={navigate} />;
    }

    if (currentPage === "parcours-photovoltaiques") {
      return <ParcoursPhotovoltaiques onPageChange={navigate} />;
    }

    if (currentPage === "batterie") {
  return <Batterie onPageChange={navigate} />;
    }
    if (currentPage === "isolation-exterieur") {
      return <IsolationExterieur onPageChange={navigate} />;
    }

    if (currentPage === "isolation-combles") {
      return <IsolationCombles onPageChange={navigate} />;
    }

    if (currentPage === "isolation-sous-sol") {
      return <IsolationSousSol onPageChange={navigate} />;
    }

    if (currentPage === "chauffe-eau-thermodynamique") {
      return <ChauffeEauThermodynamique onPageChange={navigate} />;
    }

    if (currentPage === "pompe-chaleur-air-eau") {
      return <PompeChaleurAirEau onPageChange={navigate} />;
    }

    if (currentPage === "pompe-chaleur-air-air") {
      return <PompeChaleurAirAir onPageChange={navigate} />;
    }

    if (currentPage === "ma-prime-renov") {
      return <MaPrimeRenov onPageChange={navigate} />;
    }

    if (currentPage === "cee") {
      return <CEE onPageChange={navigate} />;
    }

    if (currentPage === "coup-de-pouce-chauffage") {
      return <PouceChauffage onPageChange={navigate} />;
    }

    if (currentPage === "tva") {
      return <TVA onPageChange={navigate} />;
    }

    if (currentPage === "eco-pret-taux-zero") {
      return <PretTauxZero onPageChange={navigate} />;
    }

    if (currentPage === "fonctionnement-panneau-solaire") {
      return <FonctionnementPanneaux onPageChange={navigate} />;
    }

    if (currentPage === "installation-panneaux-solaires") {
      return <InstallationPanneauxSolaires onPageChange={navigate} />;
    }

    if (currentPage === "fonctionnement-pac-air-eau") {
      return <FonctionnementPacAirEau onPageChange={navigate} />;
    }

    if (currentPage === "installation-pac-air-eau") {
      return <InstallationPacAirEau onPageChange={navigate} />;
    }

    if (currentPage === "cee-isolation-exterieure") {
      return <CeeIsolationExterieure onPageChange={navigate} />;
    }

    if (currentPage === "tout-savoir-renovation-energetique") {
      return <ToutSavoirRenovationEnergetique onPageChange={navigate} />;
    }

    if (currentPage === "notre-identite") {
      return <NotreIdentite onPageChange={navigate} />;
    }

    if (currentPage === "notre-histoire") {
      return <NotreHistoire onPageChange={navigate} />;
    }

    if (currentPage === "nos-temoignages") {
      return <NosTemoignages onPageChange={navigate} />;
    }

    if (currentPage === "nos-partenaires") {
      return <NosPartenaires onPageChange={navigate} />;
    }

    if (currentPage === "faq") {
      return <FAQ onPageChange={navigate} />;
    }

    if (currentPage === "notre-blog") {
      return <NotreBlog onPageChange={navigate} />;
    }

    if (currentPage === "lexique") {
      return <Lexique onPageChange={navigate} />;
    }

    if (currentPage === "parrainage") {
      return <Parrainage onPageChange={navigate} />;
    }

    if (currentPage === "renovation-energetique-arriege") {
      return <RenovationEnergetiqueArriege onPageChange={navigate} />;
    }

    if (currentPage === "renovation-energetique-pyrenees-orientales") {
      return (
        <RenovationEnergetiquePyreneesOrientales
          onPageChange={navigate}
        />
      );
    }

    if (currentPage === "renovation-energetique-haute-garonne") {
      return <RenovationEnergetiqueHauteGaronne onPageChange={navigate} />;
    }

    if (currentPage === "renovation-energetique-herault") {
      return <RenovationEnergetiqueHerault onPageChange={navigate} />;
    }

    if (currentPage === "renovation-energetique-aude") {
      return <RenovationEnergetiqueAude onPageChange={navigate} />;
    }

    if (currentPage === "mentions-legales") {
      return <MentionsLegales onPageChange={navigate} />;
    }

    if (currentPage === "politique-confidentialite") {
      return <PolitiqueConfidentialite onPageChange={navigate} />;
    }

    if (currentPage === "politique-cookies") {
      return <PolitiqueCookies onPageChange={navigate} />;
    }

    if (currentPage === "conditions-generales-vente") {
      return <ConditionsGeneralesVente onPageChange={navigate} />;
    }

    if (currentPage === "contact") {
      return <Contact onPageChange={navigate} />;
    }
return <HomePage onPageChange={navigate} />;
  };
  
  return (
    <div className="premium-site min-h-screen">
      {renderContent()}
      <CookieConsent onPageChange={navigate} />
    </div>
  );
}

export default App;
