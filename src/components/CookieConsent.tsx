import React from 'react';
import { Cookie, Settings, X } from 'lucide-react';

type Choice = 'accepted' | 'refused' | null;

const STORAGE_KEY = 'reno_soluces_cookie_consent';

const CookieConsent: React.FC<{ onPageChange?: (page: string) => void }> = ({ onPageChange }) => {
  const [choice, setChoice] = React.useState<Choice>(() => {
    try {
      return (localStorage.getItem(STORAGE_KEY) as Choice) || null;
    } catch {
      return null;
    }
  });
  const [open, setOpen] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);

  const save = (value: Choice, nextAnalytics = analytics, nextMarketing = marketing) => {
    try {
      localStorage.setItem(STORAGE_KEY, value || '');
      localStorage.setItem('cookies_analytics', String(nextAnalytics));
      localStorage.setItem('cookies_marketing', String(nextMarketing));
    } catch {
      // Le site reste utilisable même si le stockage local est indisponible.
    }
    setChoice(value);
    window.dispatchEvent(new Event('reno-soluces-analytics-consent'));
    setOpen(false);
  };

  const acceptAll = () => save('accepted', true, true);
  const refuseAll = () => save('refused', false, false);

  React.useEffect(() => {
    const openSettings = () => {
      setOpen(true);
      setAnalytics(localStorage.getItem('cookies_analytics') === 'true');
      setMarketing(localStorage.getItem('cookies_marketing') === 'true');
    };
    window.addEventListener('reno-soluces-open-cookie-settings', openSettings);
    return () => window.removeEventListener('reno-soluces-open-cookie-settings', openSettings);
  }, []);

  const manage = () => {
    setAnalytics(localStorage.getItem('cookies_analytics') === 'true');
    setMarketing(localStorage.getItem('cookies_marketing') === 'true');
    setOpen(true);
  };

  return (
    <>
      {!choice && !open && (
        <div className="cookie-consent" role="dialog" aria-label="Gestion des cookies">
          <div className="cookie-consent-inner">
            <div className="cookie-consent-copy">
              <div className="cookie-consent-icon"><Cookie size={22} /></div>
              <div>
                <strong>Votre choix concernant les cookies</strong>
                <p>Les cookies strictement nécessaires sont utilisés pour le fonctionnement du site. Les traceurs non essentiels ne sont activés qu'après votre accord.</p>
                <button type="button" className="cookie-link" onClick={() => setOpen(true)}>En savoir plus et personnaliser</button>
              </div>
            </div>
            <div className="cookie-consent-actions">
              <button type="button" className="cookie-btn cookie-btn-choice" onClick={refuseAll}>Tout refuser</button>
              <button type="button" className="cookie-btn cookie-btn-choice" onClick={acceptAll}>Tout accepter</button>
            </div>
          </div>
        </div>
      )}

      {choice && !open && (
        <button type="button" className="cookie-manage" onClick={manage} aria-label="Gérer mes cookies">
          <Cookie size={15} /> Gérer mes cookies
        </button>
      )}

      {open && (
        <div className="cookie-modal-backdrop" role="dialog" aria-modal="true" aria-label="Préférences cookies">
          <div className="cookie-modal">
            <div className="cookie-modal-head">
              <div><div className="cookie-modal-kicker"><Settings size={14} /> Préférences</div><h2>Gérer mes cookies</h2></div>
              <button type="button" className="cookie-close" onClick={() => setOpen(false)} aria-label="Fermer"><X size={20} /></button>
            </div>
            <p className="cookie-modal-intro">Vous pouvez modifier votre choix à tout moment. Les cookies strictement nécessaires au fonctionnement du site ne peuvent pas être désactivés.</p>
            <div className="cookie-options">
              <div className="cookie-option"><div><strong>Strictement nécessaires</strong><span>Fonctionnement, sécurité et préférences indispensables.</span></div><b>Activés</b></div>
              <label className="cookie-option"><div><strong>Mesure d’audience</strong><span>Statistiques permettant d'améliorer le site, uniquement si cette fonctionnalité est activée.</span></div><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} /></label>
              <label className="cookie-option"><div><strong>Marketing</strong><span>Traceurs publicitaires ou de personnalisation, uniquement si cette fonctionnalité est activée.</span></div><input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} /></label>
            </div>
            <div className="cookie-modal-actions">
              <button type="button" className="cookie-btn cookie-btn-choice" onClick={refuseAll}>Tout refuser</button>
              <button type="button" className="cookie-btn cookie-btn-secondary" onClick={() => save('accepted', analytics, marketing)}>Enregistrer mes choix</button>
              <button type="button" className="cookie-btn cookie-btn-choice" onClick={acceptAll}>Tout accepter</button>
            </div>
            <p className="cookie-modal-foot">Voir la <button type="button" className="cookie-link" onClick={() => { setOpen(false); onPageChange?.('politique-cookies'); }}>politique de cookies</button> pour plus d'informations.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
