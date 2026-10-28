/**
 * Attribut « fetchpriority » pour l'image principale d'une page (améliore le LCP).
 * React 18 ne connaît pas encore la propriété fetchPriority : on passe l'attribut HTML tel quel.
 */
export const HIGH_PRIORITY = { fetchpriority: 'high' } as Record<string, string>;
