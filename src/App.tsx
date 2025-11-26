import React, { useState, useEffect } from "react";
import HeroCarousel from "./components/HeroCarousel";
import Produits from "./components/Produits";
import Processus from "./components/Processus";
import Accompagnement from "./components/Accompagnement";
import PrendreRendezVous from "./components/PrendreRendezVous";
import Actualites from "./components/Actualites";
import Header from "./components/Header";
import Footer from "./components/Footer";
 
// Pages
import Solutions from "./pages/NosSolutions/Solutions";
import PanneauxPhotovoltaiques from "./pages/NosSolutions/PanneauxPhotovoltaiques";
import ParcoursPhotovoltaiques from "./pages/Contact/ParcoursPhotovoltaiques";
import Batterie from "./pages/NosSolutions/Batterie";
import IsolationExterieur from "./pages/NosSolutions/IsolationExterieur";
import IsolationCombles from "./pages/NosSolutions/IsolationCombles";
import IsolationSousSol from "./pages/NosSolutions/IsolationSousSol";
import ChauffeEauThermodynamique from "./pages/NosSolutions/ChauffeEauThermodynamique";
import RenovationAmpleur from "./pages/NosSolutions/RenovationAmpleur";
import PompeChaleurAirEau from "./pages/NosSolutions/PompeChaleurAirEau";
import PompeChaleurAirAir from "./pages/NosSolutions/PompeChaleurAirAir";
import MaPrimeRenov from "./pages/LesAides/MaPrimeRenov";
import CEE from "./pages/LesAides/CEE";
import PouceChauffage from "./pages/LesAides/PouceChauffage";
import TVA from "./pages/LesAides/TVA";
import PretTauxZero from "./pages/LesAides/PretTauxZero";
import PrimeAutoconsommation from "./pages/LesAides/PrimeAutoconsommation";
import FonctionnementPanneaux from "./pages/NosConseils/FonctionnementPanneaux";
import InstallationPanneauxSolaires from "./pages/NosConseils/InstallationPanneauxSolaires";
import PrixPanneauxSolaires from "./pages/NosConseils/PrixPanneauxSolaires";
import FonctionnementPacAirEau from "./pages/NosConseils/FonctionnementPacAirEau";
import InstallationPacAirEau from "./pages/NosConseils/InstallationPacAirEau";
import PrixIsolationExterieure from "./pages/NosConseils/PrixIsolationExterieure";
import CeeIsolationExterieure from "./pages/NosConseils/CeeIsolationExterieure";
import RentabiliteChauffeEauThermodynamique from "./pages/NosConseils/RentabiliteChauffeEauThermodynamique";
import PrixChauffeEauThermodynamique from "./pages/NosConseils/PrixChauffeEauThermodynamique";
import ToutSavoirRenovationEnergetique from "./pages/NosConseils/ToutSavoirRenovationEnergetique";
import PassoiresThermiques from "./pages/NosConseils/PassoiresThermiques";
import NotreIdentite from "./pages/QuiSommesNous/NotreIdentite";
import NotreHistoire from "./pages/QuiSommesNous/NotreHistoire";
import NosPartenaires from "./pages/QuiSommesNous/NosPartenaires";
import NosTemoignages from "./pages/QuiSommesNous/NosTemoignages";
import FAQ from "./pages/Annexe/FAQ";
import NotreBlog from "./pages/Annexe/NotreBlog";
import Lexique from "./pages/Annexe/Lexique";
import Parrainage from "./pages/Contact/Parrainage";
import RenovationEnergetiqueArriege from "./pages/Départements/RenovationEnergetiqueArriege";
import RenovationEnergetiquePyreneesOrientales from "./pages/Départements/RenovationEnergetiquePyreneesOrientales";
import RenovationEnergetiqueHauteGaronne from "./pages/Départements/RenovationEnergetiqueHauteGaronne";
import RenovationEnergetiqueHerault from "./pages/Départements/RenovationEnergetiqueHerault";
import RenovationEnergetiqueAude from "./pages/Départements/RenovationEnergetiqueAude";
import MentionsLegales from "./pages/Annexe/MentionsLegales";
import PolitiqueConfidentialite from "./pages/Annexe/PolitiqueConfidentialite";
import PolitiqueCookies from "./pages/Annexe/PolitiqueCookies";
import Contact from "./pages/Contact/Contact";
import SimulateurPhotovoltaique from "./pages/Simulateurs/SimulateurPhotovoltaique"
import SimulateurIsolation from "./pages/Simulateurs/SimulateurIsolation";
import SimulateurBallonThermodynamique from "./pages/Simulateurs/SimulateurBallonThermodynamique";
import SimulateurRenovationAmpleur from "./pages/Simulateurs/SimulateurRenovationAmpleur";
import SimulateurPACAirEau from "./pages/Simulateurs/SimulateurPACAirEau";
import SimulateurPACAirAir from "./pages/Simulateurs/SimulateurPACAirAir";
import SimulateurAides from "./pages/Simulateurs/SimulateurAides";
import SimulateurAutoconso from "./pages/Simulateurs/SimulateurAutoconso";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll en haut quand on change de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    
    if (currentPage === "solutions") {
      return <Solutions onPageChange={setCurrentPage} />;
    }

    if (currentPage === "panneaux-photovoltaiques") {
      return <PanneauxPhotovoltaiques onPageChange={setCurrentPage} />;
    }

    if (currentPage === "parcours-photovoltaiques") {
      return <ParcoursPhotovoltaiques onPageChange={setCurrentPage} />;
    }

    if (currentPage === "batterie") {
  return <Batterie onPageChange={setCurrentPage} />;
    }
    if (currentPage === "isolation-exterieur") {
      return <IsolationExterieur onPageChange={setCurrentPage} />;
    }

    if (currentPage === "isolation-combles") {
      return <IsolationCombles onPageChange={setCurrentPage} />;
    }

    if (currentPage === "isolation-sous-sol") {
      return <IsolationSousSol onPageChange={setCurrentPage} />;
    }

    if (currentPage === "chauffe-eau-thermodynamique") {
      return <ChauffeEauThermodynamique onPageChange={setCurrentPage} />;
    }

    if (currentPage === "renovation-ampleur") {
      return <RenovationAmpleur onPageChange={setCurrentPage} />;
    }

    if (currentPage === "pompe-chaleur-air-eau") {
      return <PompeChaleurAirEau onPageChange={setCurrentPage} />;
    }

    if (currentPage === "pompe-chaleur-air-air") {
      return <PompeChaleurAirAir onPageChange={setCurrentPage} />;
    }

    if (currentPage === "ma-prime-renov") {
      return <MaPrimeRenov onPageChange={setCurrentPage} />;
    }

    if (currentPage === "cee") {
      return <CEE onPageChange={setCurrentPage} />;
    }

    if (currentPage === "coup-de-pouce-chauffage") {
      return <PouceChauffage onPageChange={setCurrentPage} />;
    }

    if (currentPage === "tva") {
      return <TVA onPageChange={setCurrentPage} />;
    }

    if (currentPage === "eco-pret-taux-zero") {
      return <PretTauxZero onPageChange={setCurrentPage} />;
    }

    if (currentPage === "prime-autoconsommation") {
      return <PrimeAutoconsommation onPageChange={setCurrentPage} />;
    }

    if (currentPage === "fonctionnement-panneau-solaire") {
      return <FonctionnementPanneaux onPageChange={setCurrentPage} />;
    }

    if (currentPage === "installation-panneaux-solaires") {
      return <InstallationPanneauxSolaires onPageChange={setCurrentPage} />;
    }

    if (currentPage === "prix-panneaux-solaires") {
      return <PrixPanneauxSolaires onPageChange={setCurrentPage} />;
    }

    if (currentPage === "fonctionnement-pac-air-eau") {
      return <FonctionnementPacAirEau onPageChange={setCurrentPage} />;
    }

    if (currentPage === "installation-pac-air-eau") {
      return <InstallationPacAirEau onPageChange={setCurrentPage} />;
    }

    if (currentPage === "prix-isolation-exterieure") {
      return <PrixIsolationExterieure onPageChange={setCurrentPage} />;
    }

    if (currentPage === "cee-isolation-exterieure") {
      return <CeeIsolationExterieure onPageChange={setCurrentPage} />;
    }

    if (currentPage === "rentabilite-chauffe-eau-thermodynamique") {
      return (
        <RentabiliteChauffeEauThermodynamique onPageChange={setCurrentPage} />
      );
    }

    if (currentPage === "prix-chauffe-eau-thermodynamique") {
      return <PrixChauffeEauThermodynamique onPageChange={setCurrentPage} />;
    }

    if (currentPage === "tout-savoir-renovation-energetique") {
      return <ToutSavoirRenovationEnergetique onPageChange={setCurrentPage} />;
    }

    if (currentPage === "passoires-thermiques") {
      return <PassoiresThermiques onPageChange={setCurrentPage} />;
    }

    if (currentPage === "notre-identite") {
      return <NotreIdentite onPageChange={setCurrentPage} />;
    }

    if (currentPage === "notre-histoire") {
      return <NotreHistoire onPageChange={setCurrentPage} />;
    }

    if (currentPage === "nos-temoignages") {
      return <NosTemoignages onPageChange={setCurrentPage} />;
    }

    if (currentPage === "nos-partenaires") {
      return <NosPartenaires onPageChange={setCurrentPage} />;
    }

    if (currentPage === "faq") {
      return <FAQ onPageChange={setCurrentPage} />;
    }

    if (currentPage === "notre-blog") {
      return <NotreBlog onPageChange={setCurrentPage} />;
    }

    if (currentPage === "lexique") {
      return <Lexique onPageChange={setCurrentPage} />;
    }

    if (currentPage === "parrainage") {
      return <Parrainage onPageChange={setCurrentPage} />;
    }

    if (currentPage === "renovation-energetique-arriege") {
      return <RenovationEnergetiqueArriege onPageChange={setCurrentPage} />;
    }

    if (currentPage === "renovation-energetique-pyrenees-orientales") {
      return (
        <RenovationEnergetiquePyreneesOrientales
          onPageChange={setCurrentPage}
        />
      );
    }

    if (currentPage === "renovation-energetique-haute-garonne") {
      return <RenovationEnergetiqueHauteGaronne onPageChange={setCurrentPage} />;
    }

    if (currentPage === "renovation-energetique-herault") {
      return <RenovationEnergetiqueHerault onPageChange={setCurrentPage} />;
    }

    if (currentPage === "renovation-energetique-aude") {
      return <RenovationEnergetiqueAude onPageChange={setCurrentPage} />;
    }

    if (currentPage === "mentions-legales") {
      return <MentionsLegales onPageChange={setCurrentPage} />;
    }

    if (currentPage === "politique-confidentialite") {
      return <PolitiqueConfidentialite onPageChange={setCurrentPage} />;
    }

    if (currentPage === "politique-cookies") {
      return <PolitiqueCookies onPageChange={setCurrentPage} />;
    }

    if (currentPage === "contact") {
      return <Contact onPageChange={setCurrentPage} />;
    }

    if (currentPage === "simulateur-photovoltaique") {
      return <SimulateurPhotovoltaique onPageChange={setCurrentPage} />;
    }

    if (currentPage === "simulateur-isolation") {
  return <SimulateurIsolation onPageChange={setCurrentPage} />;
    }

    if (currentPage === "simulateur-produire-mon-eau-chaude") {
  return <SimulateurBallonThermodynamique onPageChange={setCurrentPage} />
    }

    if (currentPage === "simulateur-renovation-ampleur") {
  return <SimulateurRenovationAmpleur onPageChange={setCurrentPage} />
    }

    if (currentPage === "simulateur-pompe-a-chaleur-air-eau") {
  return <SimulateurPACAirEau onPageChange={setCurrentPage} />
    }

    if (currentPage === "simulateur-pompe-a-chaleur-air-air") {
  return <SimulateurPACAirAir onPageChange={setCurrentPage} />
    }

    if (currentPage === "simulateur-aides") {
  return <SimulateurAides onPageChange={setCurrentPage} />
    }

    if (currentPage === "simulateur-autoconsommation") {
  return <SimulateurAutoconso onPageChange={setCurrentPage} />
    }

    // Page d’accueil
    return (
      <>
        <Header
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onPageChange={setCurrentPage}
        />
        <HeroCarousel onPageChange={setCurrentPage} />
        <Produits onPageChange={setCurrentPage} />
        <Processus />
        <Accompagnement onPageChange={setCurrentPage} />
        <PrendreRendezVous onPageChange={setCurrentPage}/>
        <Actualites onPageChange={setCurrentPage} />
        <Footer onPageChange={setCurrentPage} />
      </>
    );
  };
  
  return <div className="min-h-screen bg-gray-50">{renderContent()}</div>;
}

export default App;
