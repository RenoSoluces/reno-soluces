import Logo from '../assets/LogoFooter.webp';
import PageLink from './PageLink';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/contact';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const COLUMNS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: 'Solutions',
    links: [
      { to: 'panneaux-photovoltaiques', label: 'Panneaux photovoltaïques' },
      { to: 'batterie', label: 'Batterie solaire' },
      { to: 'pompe-chaleur-air-eau', label: 'Pompe à chaleur air/eau' },
      { to: 'pompe-chaleur-air-air', label: 'Climatisation réversible' },
      { to: 'chauffe-eau-thermodynamique', label: 'Chauffe-eau thermodynamique' },
      { to: 'isolation-combles', label: 'Isolation des combles' },
      { to: 'isolation-exterieur', label: 'Isolation extérieure' },
      { to: 'isolation-sous-sol', label: 'Isolation du plancher bas' },
    ],
  },
  {
    title: 'Aides & guides',
    links: [
      { to: 'ma-prime-renov', label: 'MaPrimeRénov’' },
      { to: 'cee', label: 'Primes CEE' },
      { to: 'tva', label: 'TVA réduite' },
      { to: 'eco-pret-taux-zero', label: 'Éco-PTZ' },
      { to: 'prix-panneaux-solaires', label: 'Prix des panneaux solaires' },
      { to: 'passoires-thermiques', label: 'Passoires thermiques' },
      { to: 'notre-blog', label: 'Tous les guides' },
      { to: 'faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Zones d’intervention',
    links: [
      { to: 'renovation-energetique-aude', label: 'Aude (11)' },
      { to: 'renovation-energetique-herault', label: 'Hérault (34)' },
      { to: 'renovation-energetique-pyrenees-orientales', label: 'Pyrénées-Orientales (66)' },
      { to: 'renovation-energetique-haute-garonne', label: 'Haute-Garonne (31)' },
      { to: 'renovation-energetique-arriege', label: 'Ariège (09)' },
    ],
  },
  {
    title: 'Reno Soluces',
    links: [
      { to: 'notre-identite', label: 'À propos' },
      { to: 'nos-partenaires', label: 'Partenaires' },
      { to: 'nos-temoignages', label: 'Avis clients' },
      { to: 'contact', label: 'Contact' },
      { to: 'mentions-legales', label: 'Mentions légales' },
      { to: 'politique-confidentialite', label: 'Confidentialité' },
      { to: 'conditions-generales-vente', label: 'CGV & mise en relation' },
      { to: 'politique-cookies', label: 'Cookies' },
    ],
  },
];

const Footer = (_props: FooterProps) => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <img src={Logo} alt="Reno Soluces" className="footer-logo" width={180} height={180} loading="lazy" decoding="async" />
        <p>Accompagnement et mise en relation pour les projets de rénovation énergétique en Occitanie.</p>
        <address className="footer-address">
          24 B rue des Remparts, 11160 Trausse
          <br />
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <br />
          <a href="mailto:contact@renosoluces.fr">contact@renosoluces.fr</a>
        </address>
      </div>

      {COLUMNS.map((column) => (
        <nav key={column.title} aria-label={column.title}>
          <p className="footer-title">{column.title}</p>
          {column.links.map((link) => (
            <PageLink key={link.to} to={link.to}>{link.label}</PageLink>
          ))}
        </nav>
      ))}
    </div>

    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} Reno Soluces</span>
      <span>Trausse · Aude · Occitanie</span>
    </div>
  </footer>
);

export default Footer;
