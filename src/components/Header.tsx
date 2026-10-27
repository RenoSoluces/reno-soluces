import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.webp';
import PageLink from './PageLink';

interface Props {
  activeSection?: string;
  onSectionChange?: (s: string) => void;
  onPageChange?: (page: string) => void;
}

const NAV = [
  { to: 'solutions', label: 'Solutions', mobileLabel: 'Nos solutions' },
  { to: 'notre-blog', label: 'Guides', mobileLabel: 'Guides & conseils' },
  { to: 'notre-identite', label: 'À propos', mobileLabel: 'À propos' },
  { to: 'nos-partenaires', label: 'Partenaires', mobileLabel: 'Nos partenaires' },
  { to: 'contact', label: 'Contact', mobileLabel: 'Contact' },
];

export default function Header(_props: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <PageLink to="home" className="brand" aria-label="Reno Soluces - accueil" onClick={close}>
          <img src={Logo} alt="Reno Soluces" width={174} height={174} />
        </PageLink>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {NAV.map((item) => (
            <PageLink key={item.to} to={item.to}>{item.label}</PageLink>
          ))}
        </nav>
        <PageLink to="contact" className="nav-cta">
          Décrire mon projet <ArrowRight size={16} />
        </PageLink>
        <button
          className="mobile-menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Navigation mobile">
          {NAV.map((item) => (
            <PageLink key={item.to} to={item.to} onClick={close}>{item.mobileLabel}</PageLink>
          ))}
          <PageLink to="contact" className="nav-cta" onClick={close}>
            Décrire mon projet <ArrowRight size={16} />
          </PageLink>
        </nav>
      )}
    </header>
  );
}
