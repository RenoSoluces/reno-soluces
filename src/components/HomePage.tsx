import React from 'react';
import { ArrowRight, Check, ChevronRight, FileText, Handshake, Home, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import ProjectLeadForm from './ProjectLeadForm';
import Logo from '../assets/Logo.png';
import HeroImage from '../assets/Projet1.jpeg';
import SolarImage from '../assets/Panneaux1.jpeg';
import HeatPumpImage from '../assets/AirEau1.jpeg';
import InsulationImage from '../assets/Exterieur1.jpeg';
import ClimatisationImage from '../assets/AirAir2.jpeg';
import Footer from './Footer';
import AvisClients from './AvisClients';

interface Props {
  onPageChange: (page: string) => void;
}

const solutions = [
  {
    title: 'Pompe à chaleur',
    text: 'Chauffage performant et adapté à votre logement.',
    image: HeatPumpImage,
    page: 'pompe-chaleur-air-eau',
  },
  {
    title: 'Panneaux photovoltaïques',
    text: 'Produisez une partie de votre électricité chez vous.',
    image: SolarImage,
    page: 'panneaux-photovoltaiques',
  },
  {
    title: 'Isolation',
    text: 'Améliorez le confort et les performances de votre maison.',
    image: InsulationImage,
    page: 'isolation-exterieur',
  },
  {
    title: 'Climatisation réversible',
    text: 'Améliorez votre confort en été comme en hiver avec une solution adaptée à votre logement.',
    image: ClimatisationImage,
    page: 'pompe-chaleur-air-air',
  },
];

export default function HomePage({ onPageChange }: Props) {
  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
          <button
            className="brand"
            onClick={() => onPageChange('home')}
            aria-label="Reno Soluces - accueil"
          >
            <img src={Logo} alt="Reno Soluces" />
          </button>

          <nav className="desktop-nav">
            <button
              onClick={() =>
                document
                  .getElementById('solutions')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Nos solutions
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('methode')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Comment ça marche
            </button>

            <button onClick={() => onPageChange('notre-identite')}>
              À propos
            </button>

            <button onClick={() => onPageChange('notre-blog')}>
              Guides
            </button>
          </nav>

          <button
            className="nav-cta"
            onClick={() =>
              document
                .getElementById('projet')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Décrire mon projet <ArrowRight size={16} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span></span> Rénovation en Occitanie
              </div>

              <h1>
                Votre projet mérite <em>le bon professionnel.</em>
              </h1>

              <p className="hero-lead">
                Reno Soluces vous accompagne dans votre recherche et vous met
                en relation avec un professionnel partenaire adapté à votre
                projet.
              </p>

              <div className="hero-actions">
                <button
                  className="primary large"
                  onClick={() =>
                    document
                      .getElementById('projet')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Décrire mon projet <ArrowRight size={18} />
                </button>

                <button
                  className="text-link"
                  onClick={() =>
                    document
                      .getElementById('methode')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Voir comment ça fonctionne <ChevronRight size={17} />
                </button>
              </div>

              <div className="hero-points">
                <span>
                  <Check size={15} /> Demande gratuite
                </span>
                <span>
                  <Check size={15} /> Sans engagement
                </span>
                <span>
                  <Check size={15} /> Professionnels partenaires
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src={HeroImage}
                alt="Maison rénovée en Occitanie"
              />

              <div className="hero-note">
                <span className="note-icon">
                  <ShieldCheck size={19} />
                </span>

                <div>
                  <strong>Une mise en relation ciblée</strong>
                  <small>selon votre projet et votre secteur</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">Notre rôle</span>
              <h2>
                Vous aider à passer du projet aux travaux, sans vous perdre en
                route.
              </h2>
            </div>

            <p>
              Nous ne réalisons pas les travaux nous-mêmes. Nous vous aidons à
              identifier une solution et, lorsque cela correspond à votre
              besoin, à être mis en relation avec un artisan partenaire
              susceptible de prendre en charge votre chantier.
            </p>
          </div>
        </section>

        <section id="solutions" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Les projets</span>
                <h2>
                  Des solutions pour les grands postes de rénovation.
                </h2>
              </div>

              <button
                className="text-link"
                onClick={() => onPageChange('solutions')}
              >
                Toutes les solutions <ChevronRight size={17} />
              </button>
            </div>

            <div className="solution-grid">
              {solutions.map((s) => (
                <button
                  key={s.title}
                  className="solution-card"
                  onClick={() => onPageChange(s.page)}
                >
                  <img src={s.image} alt={s.title} />

                  <div className="solution-overlay">
                    <span>{s.title}</span>
                    <p>{s.text}</p>
                    <i>
                      <ArrowRight size={17} />
                    </i>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <AvisClients />

      <section id="methode" className="section method-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Simple, lisible, humain</span>

              <h2>Comment ça marche ?</h2>

              <p>
                Une démarche courte pour vous éviter les recherches
                interminables.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <span>01</span>
                <FileText />
                <h3>Vous décrivez votre projet</h3>
                <p>
                  Quelques informations sur les travaux souhaités, votre
                  logement et votre secteur.
                </p>
              </div>

              <div className="step">
                <span>02</span>
                <Handshake />
                <h3>Nous étudions votre demande</h3>
                <p>
                  Nous vérifions la cohérence du projet et recherchons une
                  solution parmi nos partenaires.
                </p>
              </div>

              <div className="step">
                <span>03</span>
                <Home />
                <h3>Vous échangez avec le professionnel</h3>
                <p>
                  Le partenaire prend contact avec vous pour étudier
                  concrètement le chantier et établir son offre.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container trust-grid">
            <div className="trust-photo">
              <img
                src={InsulationImage}
                alt="Projet de rénovation"
              />
            </div>

            <div className="trust-copy">
              <span className="eyebrow">Pourquoi Reno Soluces</span>

              <h2>
                Pas besoin de connaître le métier pour commencer votre projet.
              </h2>

              <p>
                Notre valeur est de simplifier la première étape : comprendre
                votre besoin, vous orienter et vous éviter de contacter des
                professionnels au hasard.
              </p>

              <ul>
                <li>
                  <Check /> Une approche centrée sur votre projet
                </li>
                <li>
                  <Check /> Des partenaires sélectionnés selon leurs domaines
                  d’intervention
                </li>
                <li>
                  <Check /> Une démarche claire, sans promesse irréaliste
                </li>
                <li>
                  <Check /> Un parcours pensé pour gagner du temps
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projet" className="project-section">
          <div className="container project-grid">
            <div className="project-copy">
              <span className="eyebrow">Votre projet</span>

              <h2>Parlons de ce que vous souhaitez réaliser.</h2>

              <p>
                Donnez-nous les premières informations. La demande prend
                quelques minutes et nous permet de mieux comprendre votre
                besoin.
              </p>

              <div className="project-location">
                <MapPin size={19} />

                <div>
                  <strong>Occitanie</strong>

                  <span>
                    Notre développement commence ici, avec une couverture
                    construite autour de partenaires réellement présents sur
                    le terrain.
                  </span>
                </div>
              </div>

              <div className="mini-trust">
                <Sparkles size={17} /> Gratuit • Sans engagement • Données
                traitées de façon confidentielle
              </div>
            </div>

            <ProjectLeadForm />
          </div>
        </section>

        <section className="guide-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Guides & conseils</span>
                <h2>Comprendre avant de décider.</h2>
              </div>

              <button
                className="text-link"
                onClick={() => onPageChange('notre-blog')}
              >
                Voir tous les guides <ChevronRight size={17} />
              </button>
            </div>

            <div className="guide-grid">
              <article>
                <div className="guide-tag">Pompe à chaleur</div>
                <h3>
                  Comment choisir une pompe à chaleur adaptée à son logement ?
                </h3>
                <p>
                  Les critères à regarder avant de demander des devis.
                </p>
                <button
                  onClick={() =>
                    onPageChange('fonctionnement-pac-air-eau')
                  }
                >
                  Lire le guide <ArrowRight size={15} />
                </button>
              </article>

              <article>
                <div className="guide-tag">Solaire</div>
                <h3>
                  Installation photovoltaïque : les questions à se poser
                </h3>
                <p>
                  Puissance, autoconsommation, stockage et projet de toiture.
                </p>
                <button
                  onClick={() =>
                    onPageChange('installation-panneaux-solaires')
                  }
                >
                  Lire le guide <ArrowRight size={15} />
                </button>
              </article>

              <article>
                <div className="guide-tag">Rénovation</div>
                <h3>
                  Par où commencer une rénovation énergétique ?
                </h3>
                <p>
                  Une méthode simple pour prioriser les travaux.
                </p>
                <button
                  onClick={() =>
                    onPageChange('tout-savoir-renovation-energetique')
                  }
                >
                  Lire le guide <ArrowRight size={15} />
                </button>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </>
  );
}
