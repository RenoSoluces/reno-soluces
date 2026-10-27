/**
 * Envoi d'événements de conversion vers Google Tag Manager.
 *
 * Respect du consentement : rien n'est envoyé tant que le visiteur n'a pas accepté
 * la mesure d'audience (même clé que celle utilisée dans main.tsx). Aucune donnée
 * personnelle (nom, téléphone, e-mail) n'est jamais transmise dans ces événements.
 */
type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: EventParams = {}): void {
  try {
    if (localStorage.getItem('cookies_analytics') !== 'true') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  } catch {
    // Stockage indisponible : on ne mesure pas, sans gêner le visiteur.
  }
}

export const trackPhoneClick = (location: string): void => trackEvent('click_phone', { location });

export const trackLead = (source: string, project?: string): void =>
  trackEvent('generate_lead', project ? { source, project } : { source });
