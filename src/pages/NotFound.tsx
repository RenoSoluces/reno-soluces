import Header from '../components/Header';
import Footer from '../components/Footer';
import PageLink from '../components/PageLink';

const LINKS = [
  { to: 'home', label: 'Accueil' },
  { to: 'solutions', label: 'Nos solutions' },
  { to: 'notre-blog', label: 'Guides et conseils' },
  { to: 'contact', label: 'Décrire mon projet' },
];

export default function NotFound({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onPageChange={onPageChange} />
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="eyebrow justify-center">Erreur 404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#173b32] mt-4 mb-6">Cette page est introuvable.</h1>
        <p className="text-lg text-gray-600 mb-10">
          Elle a peut-être été déplacée ou n’existe plus. Voici quelques pages qui pourraient vous aider.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {LINKS.map((link) => (
            <PageLink key={link.to} to={link.to} className={link.to === 'contact' ? 'primary' : 'secondary'}>
              {link.label}
            </PageLink>
          ))}
        </div>
      </main>
      <Footer onPageChange={onPageChange} />
    </div>
  );
}
