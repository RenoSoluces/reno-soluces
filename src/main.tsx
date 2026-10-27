import { StrictMode, useEffect, useState } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
// Polices hébergées avec le site (plus rapide et sans appel à Google Fonts).
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/dm-sans/latin-700.css';
import '@fontsource/playfair-display/latin-600.css';
import '@fontsource/playfair-display/latin-700.css';
import '@fontsource/playfair-display/latin-600-italic.css';
import './index.css';

const GTM_ID = 'GTM-PHTN5VH6';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ConsentAwareGoogleTagManager() {
  useEffect(() => {
    const w = window;

    w.dataLayer = w.dataLayer || [];

    w.gtag =
      w.gtag ||
      function (...args: unknown[]) {
        w.dataLayer!.push(args);
      };

    let initialized = false;

    const refreshConsent = () => {
      const analyticsAllowed =
        localStorage.getItem('cookies_analytics') === 'true';

      const marketingAllowed =
        localStorage.getItem('cookies_marketing') === 'true';

      // Refuser les traceurs non essentiels par défaut.
      if (!initialized) {
        w.gtag!('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted',
        });

        initialized = true;
      }

      // Mettre à jour le consentement Google.
      w.gtag!('consent', 'update', {
        analytics_storage: analyticsAllowed ? 'granted' : 'denied',
        ad_storage: marketingAllowed ? 'granted' : 'denied',
        ad_user_data: marketingAllowed ? 'granted' : 'denied',
        ad_personalization: marketingAllowed ? 'granted' : 'denied',
      });

      // Charger GTM uniquement après l'accord pour la mesure d'audience.
      if (
        analyticsAllowed &&
        !document.getElementById('reno-gtm-script')
      ) {
        w.dataLayer!.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js',
        });

        const script = document.createElement('script');
        script.id = 'reno-gtm-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

        document.head.appendChild(script);
      }
    };

    const safelyRefreshConsent = () => {
      try {
        refreshConsent();
      } catch {
        // En cas d'indisponibilité du stockage, ne pas forcer le chargement.
      }
    };

    safelyRefreshConsent();

    window.addEventListener(
      'reno-soluces-analytics-consent',
      safelyRefreshConsent
    );

    window.addEventListener('storage', safelyRefreshConsent);

    return () => {
      window.removeEventListener(
        'reno-soluces-analytics-consent',
        safelyRefreshConsent
      );

      window.removeEventListener('storage', safelyRefreshConsent);
    };
  }, []);

  return null;
}

function ConsentAwareAnalytics() {
  const [enabled, setEnabled] = useState(() => {
    try {
      return localStorage.getItem('cookies_analytics') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const refresh = () => {
      try {
        setEnabled(
          localStorage.getItem('cookies_analytics') === 'true'
        );
      } catch {
        setEnabled(false);
      }
    };

    window.addEventListener(
      'reno-soluces-analytics-consent',
      refresh
    );

    window.addEventListener('storage', refresh);

    return () => {
      window.removeEventListener(
        'reno-soluces-analytics-consent',
        refresh
      );

      window.removeEventListener('storage', refresh);
    };
  }, []);

  return enabled ? <Analytics /> : null;
}

const container = document.getElementById('root')!;

const app = (
  <StrictMode>
    <App />
    <ConsentAwareGoogleTagManager />
    <ConsentAwareAnalytics />
  </StrictMode>
);

// Les pages sont prérendues au build : on « hydrate » le HTML existant au lieu de le
// reconstruire. En développement, la page est vide et on l'affiche normalement.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}