import React from 'react';
import Processus1 from '../assets/Processus1.jpg';
import Processus2 from '../assets/Processus2.jpg';
import Processus3 from '../assets/Processus3.jpg';
import Processus4 from '../assets/Processus4.jpeg';

const Processus: React.FC = () => {
  const steps = [
    {
      title: "Étude énergétique",
      subtitle: "Aujourd'hui",
      description:
        "Obtenez dès maintenant une pré-étude gratuite et personnalisée de votre maison.",
      image: Processus1,
    },
    {
      title: "Visite technique",
      subtitle: "Dans quelques jours",
      description:
        "Un expert se déplace gratuitement chez vous pour réaliser les mesures de votre projet.",
      image: Processus2,
    },
    {
      title: "Démarches administratives",
      subtitle: "1 à 3 semaines après",
      description:
        "Aides, subventions, paperasse… Reno Soluces s’occupe de tout, pour vous simplifier la vie !",
      image: Processus3,
    },
    {
      title: "Installation",
      subtitle: "Entre 1 et 3 mois après",
      description: "Votre installation est assurée par nos professionnels qualifiés RGE, gage de qualité et de conformité..",
      image: Processus4,
    },
  ];

  return (
    <section className="bg-emerald-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-white">
            Comment se passe votre installation <span className="text-green-300">Reno Soluces</span>
          </h2>
        </div>

        {/* Sous-titre */}
        <div className="text-center mb-16">
          <p className="text-xl text-green-100">
            On s'occupe <span className="text-green-300">de tout !</span>
          </p>
        </div>

        {/* Timeline des étapes */}
        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-green-400"></div>
          
          {/* Grille des étapes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Image */}
                <div className="mb-6 relative">
                  <div className="w-48 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>

                {/* Numéro de l'étape */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-900 relative z-10">
                    <span className="text-emerald-900 font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Timing */}
                <div className="mb-4">
                  <span className="bg-green-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-medium">
                    {step.subtitle}
                  </span>
                </div>

                {/* Description */}
                <p className="text-green-100 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processus;