import { ArrowRight, CheckCircle, FileText, Handshake, Home, MapPin, Phone } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import PageLink from './PageLink';
import { PHONE_DISPLAY, PHONE_HREF } from '../lib/contact';
import { trackPhoneClick } from '../lib/tracking';

export interface DepartmentContent {
  name: string;
  /** « dans l’Aude », « en Ariège »… */
  inName: string;
  code: string;
  image: string;
  imageAlt: string;
  intro: string[];
  /** Spécificités du climat et du bâti. */
  context: { title: string; text: string }[];
  /** Travaux à étudier en priorité, avec lien vers la page solution. */
  priorities: { page: string; title: string; text: string }[];
  towns: string[];
  townsNote: string;
  faq: { question: string; answer: string }[];
}

const STEPS = [
  {
    icon: FileText,
    title: 'Vous décrivez votre projet',
    text: 'Type de travaux, logement, commune : quelques minutes suffisent, gratuitement et sans engagement.',
  },
  {
    icon: Handshake,
    title: 'Nous étudions la demande',
    text: 'Nous vérifions la cohérence du projet et recherchons un professionnel partenaire qui intervient sur votre secteur.',
  },
  {
    icon: Home,
    title: 'Le partenaire vous contacte',
    text: 'Il étudie le chantier sur place et établit son devis. Reno Soluces ne réalise pas les travaux.',
  },
];

export default function DepartmentPage({ content, onPageChange }: { content: DepartmentContent; onPageChange: (page: string) => void }) {
  const { name, inName, code } = content;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onPageChange={onPageChange} />

      <main>
        <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <MapPin className="w-14 h-14 text-green-200" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Rénovation énergétique {inName} ({code})
            </h1>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">{content.intro[0]}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <PageLink to="contact" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Décrire mon projet <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </PageLink>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick('page_departement_hero')}
                className="inline-flex items-center justify-center gap-2 border border-white/70 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Rénover un logement {inName}
              </h2>
              {content.intro.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <img
              src={content.image}
              alt={content.imageAlt}
              width={1200}
              height={800}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Climat et bâti : ce qu’il faut prendre en compte {inName}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.context.map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 p-6 flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Les travaux à étudier en priorité</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Chaque logement est différent : ces pistes servent de point de départ à l’étude réalisée par le professionnel partenaire.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {content.priorities.map((item) => (
                <PageLink key={item.page} to={item.page} className="group block bg-emerald-50 p-6 hover:bg-emerald-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center justify-between gap-4">
                    {item.title}
                    <ArrowRight className="w-5 h-5 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" aria-hidden="true" />
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </PageLink>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Comment fonctionne la mise en relation</h2>
            <ol className="grid md:grid-cols-3 gap-6">
              {STEPS.map(({ icon: Icon, title, text }, index) => (
                <li key={title} className="bg-white border border-gray-200 p-6">
                  <span className="text-sm font-semibold text-[#a75c39]">Étape {index + 1}</span>
                  <Icon className="w-7 h-7 text-emerald-700 my-3" aria-hidden="true" />
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-700">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Communes et secteurs {inName}</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">{content.townsNote}</p>
            <ul className="flex flex-wrap justify-center gap-3">
              {content.towns.map((town) => (
                <li key={town} className="bg-gray-50 border border-gray-200 px-4 py-2 text-gray-700 font-medium">{town}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes – {name}</h2>
            <div className="space-y-3">
              {content.faq.map((item) => (
                <details key={item.question} className="bg-white border border-gray-200 p-5">
                  <summary className="font-semibold text-gray-900 cursor-pointer">{item.question}</summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-900 py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Un projet {inName} ?
            </h2>
            <p className="text-lg text-green-100 mb-8">
              Décrivez votre logement et vos besoins : nous vous orientons vers un professionnel partenaire qui intervient sur votre secteur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick('page_departement')}
                className="bg-green-400 hover:bg-green-300 text-green-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <PageLink
                to="contact"
                className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Demander une mise en relation gratuite
              </PageLink>
            </div>
          </div>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
}
