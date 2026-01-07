import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Target,
  Leaf,
  Handshake,
  Lightbulb,
  MapPin,
  Trophy,
  ShieldCheck,
  Phone,
} from "lucide-react";

// ✅ IMPORT DE L’IMAGE LOCALE
import NotreIdentiteImage from "../../assets/NotreIdentite.jpg";
import AvisClients from "../../components/AvisClients";


type Props = { onPageChange: (page: string) => void };

const NotreIdentite: React.FC<Props> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50">
      {/* HEADER */}
      <Header
        activeSection="qui-sommes-nous"
        onSectionChange={() => {}}
        onPageChange={onPageChange}
      />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700" />
          <div className="absolute -right-24 -top-24 w-[520px] h-[520px] rounded-full opacity-20 bg-emerald-500 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 w-[420px] h-[420px] rounded-full opacity-20 bg-green-400 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Notre identité : rendre la{" "}
                <span className="text-green-300">transition énergétique</span>{" "}
                accessible à tous
              </h1>
              <p className="mt-6 text-emerald-100 text-lg leading-relaxed">
                Depuis 2020, <strong>Reno Soluces</strong> accompagne les
                particuliers dans leurs projets de rénovation énergétique avec
                des <strong>solutions fiables</strong>, au{" "}
                <strong>meilleur prix</strong>, installées par des artisans{" "}
                <strong>RGE</strong>.  
                Notre ambition : une transition énergétique locale, humaine et
                durable.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-2xl p-4">
                  <dt className="text-emerald-100 text-sm">
                    Clients accompagnés
                  </dt>
                  <dd className="text-3xl font-extrabold">600+</dd>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <dt className="text-emerald-100 text-sm">Depuis</dt>
                  <dd className="text-3xl font-extrabold">2020</dd>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <dt className="text-emerald-100 text-sm">
                    Région d’origine
                  </dt>
                  <dd className="text-3xl font-extrabold">Hauts-de-France</dd>
                </div>
              </dl>
            </div>

            {/* ✅ IMAGE LOCALE AFFICHÉE */}
            <div className="relative">
              <img
                src={NotreIdentiteImage}
                alt="Équipe Reno Soluces en rénovation énergétique"
                className="w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-black/5"
              />
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-emerald-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Notre mission
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Offrir à chacun des <strong>solutions performantes</strong> et
                <strong> accessibles</strong> pour réduire sa consommation
                énergétique, tout en valorisant le confort et le pouvoir d’achat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-emerald-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Notre vision
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Être un <strong>acteur de confiance</strong> de la transition
                énergétique en France, en alliant proximité, expertise et
                engagement environnemental.
              </p>
            </div>
          </div>
        </section>

        {/* VALEURS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Nos valeurs
            </h2>
            <p className="text-gray-600 text-center mt-3">
              Ce qui guide nos actions chaque jour.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Proximité",
                  desc: "Présents localement, à vos côtés à chaque étape.",
                },
                {
                  icon: Handshake,
                  title: "Accompagnement",
                  desc: "Démarches, aides, financement : on s’occupe de tout.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  desc: "Des solutions modernes et performantes, adaptées à chaque logement.",
                },
                {
                  icon: Leaf,
                  title: "Engagement",
                  desc: "Une rénovation responsable, pour un avenir plus durable.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <Icon className="w-8 h-8 text-emerald-700" />
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HISTOIRE */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Notre histoire
            </h2>
            <p className="text-gray-600 text-center mt-3">
              Une aventure humaine fondée sur la confiance et la qualité.
            </p>

            <ol className="mt-10 relative border-l border-gray-200">
              <li className="ml-6 mb-10">
                <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  2020 — Naissance dans les Hauts-de-France
                </h3>
                <p className="text-gray-600 mt-2">
                  Création de Reno Soluces avec une vision simple : rendre la
                  rénovation énergétique accessible à tous.
                </p>
              </li>
              <li className="ml-6 mb-10">
                <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  2021–2023 — Croissance & partenariats RGE
                </h3>
                <p className="text-gray-600 mt-2">
                  Structuration du réseau d’artisans{" "}
                  <strong>RGE</strong> et digitalisation du parcours client.
                </p>
              </li>
              <li className="ml-6">
                <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  2024–2025 — 600 clients accompagnés
                </h3>
                <p className="text-gray-600 mt-2">
                  Expansion régionale, renforcement du service client et
                  lancement de nouveaux simulateurs.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Notre expertise
            </h2>
            <p className="text-gray-600 text-center mt-3">
              Une approche <strong>clé en main</strong> : diagnostic, solution,
              aides et suivi complet.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Audit & dimensionnement",
                  desc: "Étude énergétique et recommandations personnalisées.",
                },
                {
                  title: "Choix de la meilleure solution",
                  desc: "Sélection du matériel optimal selon vos besoins.",
                },
                {
                  title: "Aides & financement",
                  desc: "Montage complet des dossiers MaPrimeRénov’, CEE et éco-PTZ.",
                },
                {
                  title: "Installation RGE",
                  desc: "Travaux réalisés par des professionnels qualifiés et certifiés.",
                },
                {
                  title: "SAV réactif",
                  desc: "Un accompagnement après installation, disponible et efficace.",
                },
                {
                  title: "Suivi & optimisation",
                  desc: "Conseils et suivi de performance dans le temps.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVIS CLIENTS */}
<section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
      ⭐ Avis de nos clients
    </h2>
    <p className="text-center text-gray-600 mb-10">
      Découvrez ce que nos clients pensent de leur expérience avec <strong>Reno Soluces</strong>.
    </p>
    <AvisClients />
  </div>
</section>


        {/* CTA FINAL */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-700 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Parlez-nous de votre projet de rénovation énergétique
            </h2>
            <p className="mt-4 text-emerald-100">
              Un expert vous rappelle pour identifier la meilleure solution au
              meilleur prix.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onPageChange("contact")}
                className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-900 font-semibold px-8 py-4 rounded-full shadow-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Prendre un rendez-vous téléphonique
              </button>
              <button
                onClick={() => onPageChange("contact")}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default NotreIdentite;
