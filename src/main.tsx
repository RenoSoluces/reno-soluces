import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ConsentAwareGoogleTagManager />
    <ConsentAwareAnalytics />
  </StrictMode>
);