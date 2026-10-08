import React from 'react';
import Logo from '../assets/LogoFooter.png';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const go = (page: string) => onPageChange?.(page);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={Logo} alt="Reno Soluces" className="footer-logo" />
          <p>Accompagnement et mise en relation pour les projets de rénovation en Occitanie.</p>
        </div>

        <div>
          <h4>Explorer</h4>
          <button onClick={() => go('solutions')}>Nos solutions</button>
          <button onClick={() => go('notre-blog')}>Guides</button>
          <button onClick={() => go('faq')}>FAQ</button>
        </div>

        <div>
          <h4>Reno Soluces</h4>
          <button onClick={() => go('notre-identite')}>À propos</button>
          <button onClick={() => go('nos-partenaires')}>Partenaires</button>
          <button onClick={() => go('contact')}>Contact</button>
        </div>

        <div>
          <h4>Informations</h4>
          <button onClick={() => go('mentions-legales')}>Mentions légales</button>
          <button onClick={() => go('politique-confidentialite')}>Confidentialité</button>
          <button onClick={() => go('conditions-generales-vente')}>CGV & mise en relation</button>
          <button onClick={() => go('politique-cookies')}>Cookies</button>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Reno Soluces</span>
        <span>Occitanie · France</span>
      </div>
    </footer>
  );
};

export default Footer;
