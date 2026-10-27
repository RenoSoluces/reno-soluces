import { lazy, startTransition, Suspense, useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import "./styles-premium.css";
import HomePage from "./components/HomePage";
import CookieConsent from "./components/CookieConsent";
import StickyCallBar from "./components/StickyCallBar";
import ClientOnly from "./components/ClientOnly";
import NotFound from "./pages/NotFound";
import { PAGE_MODULES } from "./pageModules";
import {
  PAGE_ROUTES,
  articleUrl,
  canonicalUrl,
  getPageMeta,
  resolveLocation,
} from "./seo/routes";
import type { SiteLocation } from "./seo/routes";

interface PageProps {
  onPageChange: (page: string) => void;
  currentSlug?: string | null;
  onArticleChange?: (slug: string | null) => void;
}

// Chaque page est un fichier JavaScript séparé, chargé seulement quand on la consulte.
const loaders = import.meta.glob<{ default: ComponentType<PageProps> }>("./pages/**/*.tsx");

const PAGES: Record<string, ComponentType<PageProps>> = Object.fromEntries(
  Object.entries(PAGE_MODULES).map(([key, file]) => {
    const loader = loaders[`./${file.replace(/^pages\//, "pages/")}`];
    if (!loader) throw new Error(`Page introuvable : ${file}`);
    return [key, lazy(loader)];
  })
);

function setHeadTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const metaProperty = (property: string) => () => {
  const m = document.createElement("meta");
  m.setAttribute("property", property);
  return m;
};

interface AppProps {
  /** Chemin à afficher : fourni lors du prérendu, sinon lu dans la barre d'adresse. */
  initialPath?: string;
}

function App({ initialPath }: AppProps) {
  const [location, setLocation] = useState<SiteLocation>(() =>
    resolveLocation(initialPath ?? window.location.pathname)
  );
  const currentPage = location.page;

  const goToPath = (pathname: string) => {
    const next = resolveLocation(pathname);
    const path = next.articleSlug ? articleUrl(next.articleSlug) : PAGE_ROUTES[next.page] ?? pathname;
    if (window.location.pathname !== path) window.history.pushState(null, "", path);
    // La page affichée reste visible pendant le chargement de la suivante.
    startTransition(() => setLocation(next));
  };

  const navigate = (page: string) => goToPath(PAGE_ROUTES[page] || "/");

  const openArticle = (slug: string | null) =>
    goToPath(slug ? articleUrl(slug) : PAGE_ROUTES["notre-blog"]);

  // Les liens internes (<a href="/...">) changent de page sans recharger le site.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//") || href.startsWith("/api/")) return;
      const url = new URL(href, window.location.origin);
      if (url.hash && url.pathname === window.location.pathname) return;
      event.preventDefault();
      goToPath(url.pathname);
    };
    const onPopState = () => startTransition(() => setLocation(resolveLocation(window.location.pathname)));
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const firstRender = useRef(true);
  useEffect(() => {
    // Pas de remontée en haut de page au premier affichage (ancre éventuelle dans l'URL).
    if (firstRender.current) firstRender.current = false;
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const meta = getPageMeta(location);
    const url = canonicalUrl(location);
    const robots = meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large";

    document.title = meta.title;
    setHeadTag('meta[name="description"]', () => Object.assign(document.createElement("meta"), { name: "description" }), "content", meta.description);
    setHeadTag('meta[name="robots"]', () => Object.assign(document.createElement("meta"), { name: "robots" }), "content", robots);
    setHeadTag('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", url);
    setHeadTag('meta[property="og:title"]', metaProperty("og:title"), "content", meta.title);
    setHeadTag('meta[property="og:description"]', metaProperty("og:description"), "content", meta.description);
    setHeadTag('meta[property="og:url"]', metaProperty("og:url"), "content", url);
  }, [location]);

  const renderContent = () => {
    if (currentPage === "home") return <HomePage onPageChange={navigate} />;
    if (currentPage === "not-found") return <NotFound onPageChange={navigate} />;
    const Page = PAGES[currentPage];
    if (!Page) return <NotFound onPageChange={navigate} />;
    if (currentPage === "notre-blog") {
      return <Page onPageChange={navigate} currentSlug={location.articleSlug} onArticleChange={openArticle} />;
    }
    return <Page onPageChange={navigate} />;
  };

  return (
    <div className="premium-site min-h-screen pb-16 md:pb-0">
      <Suspense fallback={null}>{renderContent()}</Suspense>
      <StickyCallBar onPageChange={navigate} hidden={currentPage === "contact"} />
      <ClientOnly>
        <CookieConsent onPageChange={navigate} />
      </ClientOnly>
    </div>
  );
}

export default App;
