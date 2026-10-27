import React, { useState, useEffect } from "react";
import "./styles-premium.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import StickyCallBar from "./components/StickyCallBar";
 
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
import PrixPanneauxSolaires from "./pages/NosConseils/PrixPanneauxSolaires";
import PrixIsolationExterieure from "./pages/NosConseils/PrixIsolationExterieure";
import PrixChauffeEauThermodynamique from "./pages/NosConseils/PrixChauffeEauThermodynamique";
import RentabiliteChauffeEauThermodynamique from "./pages/NosConseils/RentabiliteChauffeEauThermodynamique";
import PassoiresThermiques from "./pages/NosConseils/PassoiresThermiques";
import { findArticleBySlug } from "./data/blogArticles";
import {
  PAGE_ROUTES,
  PAGE_META,
  GUIDES_PREFIX,
  SITE_URL,
  articleUrl,
  getArticleMeta,
} from "./seo/routes";


const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_ROUTES).map(([key, path]) => [path, key])
);

interface Location {
  page: string;
  articleSlug: string | null;
}

/** Détermine la page (et l'éventuel article du blog) à afficher pour une URL. */
function resolveLocation(pathname: string): Location {
  const path = pathname.replace(/\/$/, '') || '/';
  const page = PATH_TO_PAGE[path];
  if (page) return { page, articleSlug: null };
  if (path.startsWith(GUIDES_PREFIX)) {
    const slug = path.slice(GUIDES_PREFIX.length);
    if (findArticleBySlug(slug)) return { page: 'notre-blog', articleSlug: slug };
  }
  return { page: 'home', articleSlug: null };
}

function setHeadTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function App() {
  const initial = resolveLocation(window.location.pathname);
  const [currentPage, setCurrentPage] = useState(initial.page);
  const [articleSlug, setArticleSlug] = useState<string | null>(initial.articleSlug);

  const navigate = (page: string) => {
    const path = PAGE_ROUTES[page] || '/';
    if (window.location.pathname !== path) window.history.pushState({page}, '', path);
    setArticleSlug(null);
    setCurrentPage(page);
  };

  const openArticle = (slug: string | null) => {
    const path = slug ? articleUrl(slug) : PAGE_ROUTES['notre-blog'];
    if (window.location.pathname !== path) window.history.pushState({page: 'notre-blog'}, '', path);
    setCurrentPage('notre-blog');
    setArticleSlug(slug);
  };

  useEffect(() => {
    const onPopState = () => {
      const next = resolveLocation(window.location.pathname);
      setCurrentPage(next.page);
      setArticleSlug(next.articleSlug);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = (articleSlug ? getArticleMeta(articleSlug) : undefined) || PAGE_META[currentPage] || PAGE_META.home;
    const path = articleSlug ? articleUrl(articleSlug) : PAGE_ROUTES[currentPage] || '/';
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    const robots = meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';

    document.title = meta.title;
    setHeadTag('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), 'content', meta.description);
    setHeadTag('meta[name="robots"]', () => Object.assign(document.createElement('meta'), { name: 'robots' }), 'content', robots);
    setHeadTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
    setHeadTag('meta[property="og:title"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m; }, 'content', meta.title);
    setHeadTag('meta[property="og:description"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m; }, 'content', meta.description);
    setHeadTag('meta[property="og:url"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m; }, 'content', url);
  }, [currentPage, articleSlug]);

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
      return (
        <NotreBlog
          onPageChange={navigate}
          currentSlug={articleSlug}
          onArticleChange={openArticle}
        />
      );
    }

    if (currentPage === "prix-panneaux-solaires") {
      return <PrixPanneauxSolaires onPageChange={navigate} />;
    }

    if (currentPage === "prix-isolation-exterieure") {
      return <PrixIsolationExterieure onPageChange={navigate} />;
    }

    if (currentPage === "prix-chauffe-eau-thermodynamique") {
      return <PrixChauffeEauThermodynamique onPageChange={navigate} />;
    }

    if (currentPage === "rentabilite-chauffe-eau-thermodynamique") {
      return <RentabiliteChauffeEauThermodynamique onPageChange={navigate} />;
    }

    if (currentPage === "passoires-thermiques") {
      return <PassoiresThermiques onPageChange={navigate} />;
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
    <div className="premium-site min-h-screen pb-16 md:pb-0">
      {renderContent()}
      <StickyCallBar onPageChange={navigate} hidden={currentPage === "contact"} />
      <CookieConsent onPageChange={navigate} />
    </div>
  );
}

export default App;
