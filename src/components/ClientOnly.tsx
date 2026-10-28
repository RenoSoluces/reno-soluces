import { useEffect, useState, type ReactNode } from 'react';

/**
 * N'affiche son contenu qu'une fois le site chargé dans le navigateur.
 * Utile pour ce qui dépend de données locales (préférences cookies…) et ne doit
 * pas figurer dans les pages prérendues.
 */
export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
