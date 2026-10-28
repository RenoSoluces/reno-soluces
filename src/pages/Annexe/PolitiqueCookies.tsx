// src/pages/PolitiqueCookies.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = { onPageChange: (page: string) => void };

const Toggle: React.FC<{
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
  hint?: string;
}> = ({ checked, onChange, disabled, label, hint }) => (
  <label className={`flex items-start gap-4 p-4 rounded-xl border ${disabled ? "bg-gray-100 opacity-70" : "bg-white"} border-gray-200`}>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
        disabled ? "bg-gray-300" : checked ? "bg-emerald-600" : "bg-gray-300"
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
          checked ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
    <div className="flex-1">
      <span className="block font-medium text-gray-900">{label}</span>
      {hint && <span className="block text-sm text-gray-600">{hint}</span>}
    </div>
  </label>
);

const PolitiqueCookies: React.FC<Props> = ({ onPageChange }) => {
  // Préférences cookies (localStorage pour l'exemple)
  const [analytics, setAnalytics] = React.useState<boolean>(false);
  const [marketing, setMarketing] = React.useState<boolean>(false);
  const [functional, setFunctional] = React.useState<boolean>(false);

  // Les préférences sont lues après l'affichage (elles n'existent que dans le navigateur).
  React.useEffect(() => {
    try {
      setAnalytics(localStorage.getItem("cookies_analytics") === "true");
      setMarketing(localStorage.getItem("cookies_marketing") === "true");
      setFunctional(localStorage.getItem("cookies_functional") === "true");
    } catch {
      // Stockage indisponible : on garde les valeurs par défaut.
    }
  }, []);

  const savePrefs = () => {
    localStorage.setItem("cookies_analytics", String(analytics));
    localStorage.setItem("cookies_marketing", String(marketing));
    localStorage.setItem("cookies_functional", String(functional));
    alert("Vos préférences cookies ont été enregistrées.");
  };

  const acceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    setFunctional(true);
    localStorage.setItem("cookies_analytics", "true");
    localStorage.setItem("cookies_marketing", "true");
    localStorage.setItem("cookies_functional", "true");
    alert("Tous les cookies ont été acceptés.");
  };

  const refuseAll = () => {
    setAnalytics(false);
    setMarketing(false);
    setFunctional(false);
    localStorage.setItem("cookies_analytics", "false");
    localStorage.setItem("cookies_marketing", "false");
    localStorage.setItem("cookies_functional", "false");
    alert("Tous les cookies non essentiels ont été refusés.");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header activeSection="politique-cookies" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Politique de cookies</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            Cette page explique les cookies et traceurs susceptibles d'être utilisés sur le site Reno Soluces et la manière dont vous pouvez gérer vos préférences. Les cookies strictement nécessaires au fonctionnement du site ne nécessitent pas de consentement. Les traceurs non essentiels ne doivent être activés qu'après votre accord.
          </p>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" height="40" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path fill="#f9fafb" d="M0,48L1440,0L1440,48L0,48Z" />
        </svg>
      </section>

      {/* Contenu */}
      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-12 space-y-12 text-gray-800">
        {/* 1. Définition */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">1. Qu’est-ce qu’un cookie&nbsp;?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, mobile, tablette) lors de la
            consultation d’un site. Il permet notamment de mémoriser des informations essentielles pour assurer le bon
            fonctionnement du site, mesurer son audience ou personnaliser votre expérience.
          </p>
        </section>

        {/* 2. Types de cookies */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">2. Types de cookies utilisés</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900">Cookies strictement nécessaires</h3>
              <p className="mt-2 text-gray-700">
                Indispensables au fonctionnement du site (sécurité, session et préférences de base). Ils ne nécessitent pas votre consentement.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900">Cookies fonctionnels</h3>
              <p className="mt-2 text-gray-700">
                Améliorent le confort d’usage (enregistrement de préférences avancées, outils de chat, cartes
                interactives). Désactivables.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900">Cookies de mesure d’audience</h3>
              <p className="mt-2 text-gray-700">
                Nous aident à comprendre l’utilisation du site (pages visitées, parcours) pour l’améliorer. Déposés
                uniquement avec votre accord.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900">Cookies marketing / publicitaires</h3>
              <p className="mt-2 text-gray-700">
                Utilisés pour vous proposer des contenus pertinents sur d’autres sites (reciblage, mesure de
                campagnes). Déposés uniquement avec votre accord.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Finalités & exemples */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">3. Finalités et exemples de cookies</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl border border-gray-200 shadow-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">Catégorie</th>
                  <th className="px-4 py-3 text-left">Exemples</th>
                  <th className="px-4 py-3 text-left">Durée indic.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Nécessaires</td>
                  <td className="px-4 py-3 text-gray-700">session_id, csrf_token</td>
                  <td className="px-4 py-3 text-gray-700">Session</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Fonctionnels</td>
                  <td className="px-4 py-3 text-gray-700">lang, ui_prefs</td>
                  <td className="px-4 py-3 text-gray-700">6–12 mois</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Mesure d’audience</td>
                  <td className="px-4 py-3 text-gray-700">_ga*, _gid, _hj*</td>
                  <td className="px-4 py-3 text-gray-700">13 mois max</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Marketing</td>
                  <td className="px-4 py-3 text-gray-700">_fbp, _gcl_au</td>
                  <td className="px-4 py-3 text-gray-700">3–13 mois</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Les noms et durées exacts peuvent évoluer en fonction des partenaires et mises à jour techniques.
          </p>
        </section>

        {/* 4. Consentement */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">4. Consentement et gestion des préférences</h2>
          <p>
            Lors de votre première visite, un bandeau vous permet d’accepter, refuser ou personnaliser les cookies non
            essentiels. Vous pouvez modifier votre choix à tout moment ci-dessous.
          </p>

          {/* Gestionnaire de préférences */}
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Paramétrer mes préférences</h3>
              <div className="space-y-3">
                <Toggle
                  checked
                  onChange={() => {}}
                  disabled
                  label="Cookies strictement nécessaires"
                  hint="Indispensables au fonctionnement du site (non désactivables)."
                />
                <Toggle
                  checked={functional}
                  onChange={setFunctional}
                  label="Cookies fonctionnels"
                  hint="Améliorent l'expérience utilisateur (préférences, outils complémentaires)."
                />
                <Toggle
                  checked={analytics}
                  onChange={setAnalytics}
                  label="Cookies de mesure d’audience"
                  hint="Nous aident à améliorer le site (statistiques anonymisées)."
                />
                <Toggle
                  checked={marketing}
                  onChange={setMarketing}
                  label="Cookies marketing / publicitaires"
                  hint="Propositions personnalisées sur d'autres sites (reciblage)."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={savePrefs}
                  className="px-5 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition"
                >
                  Enregistrer mes choix
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-3 rounded-full bg-emerald-100 text-emerald-800 font-medium hover:bg-emerald-200 transition"
                >
                  Tout accepter
                </button>
                <button
                  onClick={refuseAll}
                  className="px-5 py-3 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition"
                >
                  Tout refuser
                </button>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Remarque : ce gestionnaire enregistre vos préférences dans votre navigateur. Le blocage effectif de
                certains cookies dépend aussi de vos paramètres navigateur et des scripts tiers intégrés au site.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Paramétrer via votre navigateur</h3>
              <p className="text-gray-700">
                Vous pouvez également configurer votre navigateur pour refuser tout ou partie des cookies, être alerté
                lors d’un dépôt ou supprimer les cookies existants. Consultez la rubrique d’aide de votre navigateur :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
                <li>Chrome / Edge (Paramètres &gt; Confidentialité et sécurité &gt; Cookies)</li>
                <li>Firefox (Préférences &gt; Vie privée &amp; sécurité &gt; Cookies et données)</li>
                <li>Safari (Réglages &gt; Confidentialité &gt; Cookies et données de sites)</li>
                <li>Android / iOS : réglages du navigateur utilisé</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Durées / tiers */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">5. Durées de conservation & cookies tiers</h2>
          <p>
            La durée de conservation dépend de la finalité et du traceur concerné. Pour les traceurs soumis au consentement, la durée de conservation du choix de l'utilisateur est documentée et celui-ci peut le modifier à tout moment. Si des services tiers sont activés, leurs traceurs et leurs durées seront précisés dans cette politique.
          </p>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">6. Contact et droits</h2>
          <p>
            Pour toute question relative à cette politique ou à l’exercice de vos droits (accès, opposition,
            rectification, suppression), contactez&nbsp;:
            {" "}
            <a href="mailto:contact@renosoluces.fr" className="text-emerald-700 underline hover:no-underline">
              contact@renosoluces.fr
            </a>.
          </p>
        </section>

        {/* 7. Mises à jour */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">7. Mises à jour de la politique</h2>
          <p>
            Nous pouvons modifier la présente politique pour refléter les évolutions légales, techniques ou
            organisationnelles. La date de dernière mise à jour figure ci-dessous.
          </p>
          <p className="mt-2 text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PolitiqueCookies;
