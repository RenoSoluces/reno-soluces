import type { AnchorHTMLAttributes } from 'react';
import { PAGE_ROUTES } from '../seo/routes';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  /** Clé de page (voir src/seo/routes.ts). */
  to: string;
};

/**
 * Lien interne explorable par les moteurs de recherche (vrai <a href>).
 * Le clic est intercepté dans App.tsx pour changer de page sans rechargement.
 */
export default function PageLink({ to, children, ...rest }: Props) {
  const href = PAGE_ROUTES[to];
  if (import.meta.env.DEV && !href) console.warn(`PageLink : page inconnue « ${to} »`);
  return (
    <a href={href ?? '/'} {...rest}>
      {children}
    </a>
  );
}
