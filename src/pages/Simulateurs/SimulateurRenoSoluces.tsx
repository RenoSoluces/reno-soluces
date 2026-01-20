// src/pages/SimulateurRenoSoluces.tsx
import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Home,
  Flame,
  Zap,
  Droplets,
  Trees,
  Building,
  Shield,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendSimulation } from "../../utils/sendSimulation";


/**
 * SimulateurAides
 * - Visuel identique au SimulateurAutoconso (encart vert gauche, contenu animé à droite)
 * - Autocomplétion adresse via API BAN
 * - Pop-up obligatoire pour voir résultats (nom / prénom / téléphone / email / consent)
 * - Blocage si "Locataire" (message d'inéligibilité)
 *
 * Remarque : Les calculs sont indicatifs. Remplace les formules par vos règles métier si besoin.
 */

type Resultats = {
  economie: number;
  carbone: number;
  aides: { maprimerenov: number; cee: number; total: number };
};

const produitOptions = [
  { key: "pac-air-eau", label: "Pompe à chaleur Air-Eau", icon: <Flame /> },
  { key: "pac-air-air", label: "Pompe à chaleur Air-Air", icon: <Zap /> },
  { key: "ballon", label: "Ballon thermodynamique", icon: <Droplets /> },
  { key: "isolation-combles", label: "Isolation des combles", icon: <Shield /> },
  { key: "isolation-exterieure", label: "Isolation extérieure", icon: <Building /> },
  { key: "isolation-plancher", label: "Isolation du plancher bas", icon: <Zap /> },
  { key: "renovation-ampleur", label: "Rénovation d'ampleur", icon: <Wrench /> },
];

const PRODUIT_LABELS: Record<string, string> = {
  "pac-air-eau": "Pompe à Chaleur",
  "pac-air-air": "Pompe à Chaleur",
  "ballon": "Ballon Thermodynamique",
  "isolation-combles": "Isolation",
  "isolation-exterieure": "Isolation",
  "isolation-plancher": "Isolation",
  "renovation-ampleur": "Rénovation d'ampleur",
};

const totalSteps = 8;

type SimulateurRenoSolucesProps = {
  onPageChange: (page: string) => void;
};

const SimulateurRenoSoluces = ({
  onPageChange,
}: SimulateurRenoSolucesProps) => {

  const [step, setStep] = useState<number>(1);

  // form fields
  const [adresse, setAdresse] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [statut, setStatut] = useState<"" | "Propriétaire" | "Locataire">("");
  const [chauffage, setChauffage] = useState("");
  const [produit, setProduit] = useState("");
  const [annee, setAnnee] = useState("");
  const [occupants, setOccupants] = useState<number | null>(null);
  const [facture, setFacture] = useState<number | "">("");
  const [revenu, setRevenu] = useState<number | "">("");

  // popup / contact
  const [showPopup, setShowPopup] = useState(false);
  const [formContact, setFormContact] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    consent: false,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // results
  const [resultats, setResultats] = useState<Resultats | null>(null);
  const [ineligible, setIneligible] = useState(false);

  // progress percentage
  const progress = Math.round((Math.min(step, totalSteps) / totalSteps) * 100);

  // --- API BAN autocomplete ---
  useEffect(() => {
    const controller = new AbortController();
    const fetchSuggestions = async () => {
      if (adresse.trim().length < 3) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
            adresse
          )}&limit=5`,
          { signal: controller.signal }
        );
        const data = await res.json();
        const list = (data.features || []).map((f: any) => f.properties.label);
        setSuggestions(list);
      } catch (err) {
        // silent fail: keep suggestions empty
        console.error("API BAN error", err);
      }
    };
    fetchSuggestions();
    return () => controller.abort();
  }, [adresse]);

  // --- helpers for calculations (simple approximations) ---
  const reductionPct = useMemo(() => {
    switch (produit) {
      case "isolation-exterieure":
        return 0.30;
      case "isolation-combles":
        return 0.25;
      case "isolation-plancher":
        return 0.18;
      case "pac-air-eau":
        return 0.40;
      case "pac-air-air":
        return 0.30;
      case "ballon":
        return 0.12;
      case "renovation-ampleur":
        return 0.45;
      default:
        return 0.20;
    }
  }, [produit]);

  const estimateMaPrime = (revenuNumber: number, produitKey: string) => {
    const baseByProduit: Record<string, number> = {
      "isolation-exterieure": 6000,
      "isolation-combles": 3500,
      "isolation-plancher": 2000,
      "pac-air-eau": 8000,
      "pac-air-air": 6000,
      "ballon": 1200,
      "renovation-ampleur": 10000,
    };
    const base = baseByProduit[produitKey] ?? 3000;
    if (revenuNumber < 20000) return Math.round(base * 1.0);
    if (revenuNumber < 40000) return Math.round(base * 0.8);
    if (revenuNumber < 70000) return Math.round(base * 0.5);
    return Math.round(base * 0.25);
  };

  const estimateCEE = (produitKey: string) => {
    const coefByProduit: Record<string, number> = {
      "isolation-exterieure": 0.12,
      "isolation-combles": 0.08,
      "isolation-plancher": 0.06,
      "pac-air-eau": 0.10,
      "pac-air-air": 0.08,
      "ballon": 0.05,
      "renovation-ampleur": 0.12,
    };
    const coef = coefByProduit[produitKey] ?? 0.07;
    const projectCostEstimate = (typeof facture === "number" ? facture : Number(facture || 0)) * 5 * 1.2;
    return Math.round(projectCostEstimate * coef);
  };

  const computeResults = () => {
    const factureNumber = typeof facture === "number" ? facture : Number(facture || 0);
    const revenuNumber = typeof revenu === "number" ? revenu : Number(revenu || 0);

    const economie = Math.round(factureNumber * reductionPct * 5 * 100) / 100;
    const carbone = Math.round(economie * 0.3);
    const maprimerenov = estimateMaPrime(revenuNumber, produit);
    const cee = estimateCEE(produit);
    const total = maprimerenov + cee;

    const r: Resultats = {
      economie,
      carbone,
      aides: { maprimerenov, cee, total },
    };

    setResultats(r);
  };

  // --- navigation ---
  const next = () => {
    // block locataire at step 2
    if (step === 2 && statut === "Locataire") {
      setIneligible(true);
      return;
    }

    // validation quick checks
    const validPerStep: Record<number, boolean> = {
      1: adresse.trim().length > 3,
      2: statut === "Propriétaire" || statut === "Locataire",
      3: chauffage.trim().length > 0,
      4: produit.trim().length > 0,
      5: /^[12]\d{3}$/.test(annee) || (annee.length > 0 && Number(annee) > 1800),
      6: typeof occupants === "number" && occupants > 0,
      7: typeof facture === "number" && facture > 0,
      8: typeof revenu === "number" && revenu >= 0,
    };

    if (!validPerStep[step]) {
      // friendly messages
      const msgs: Record<number, string> = {
        1: "Veuillez renseigner une adresse valide.",
        2: "Sélectionnez votre statut (seuls les propriétaires sont éligibles).",
        3: "Indiquez votre mode de chauffage.",
        4: "Sélectionnez un produit ou une solution.",
        5: "Indiquez l'année de construction.",
        6: "Indiquez le nombre de personnes dans le foyer.",
        7: "Renseignez le montant annuel de votre facture.",
        8: "Renseignez votre revenu fiscal de référence.",
      };
      alert(msgs[step] || "Veuillez compléter cette étape.");
      return;
    }

    if (step === totalSteps) {
      setShowPopup(true);
      return;
    }
    setStep((s) => s + 1);
  };

  const prev = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  // popup submit
  const handleSubmitContact = (): void => {
  if (!formContact.prenom || !formContact.nom || !formContact.telephone || !formContact.email || !formContact.consent) {
    alert("Merci de compléter tous les champs et d'accepter d'être contacté.");
    return;
  }

  setShowPopup(false);
  setShowConfirmation(true);

  setTimeout(() => {
    setShowConfirmation(false);
    computeResults();
    setStep(totalSteps + 1);
  }, 1600);

  sendSimulation({
    simulateur: "Simulateur Reno Soluces",
    project: PRODUIT_LABELS[produit] || "Autre",
    firstName: formContact.prenom,
    lastName: formContact.nom,
    email: formContact.email,
    phone: formContact.telephone,
    consent: formContact.consent,
    address: adresse,
    heating: chauffage,
    simulationResult: JSON.stringify(resultats),
    rawData: {
      adresse,
      statut,
      chauffage,
      produit,
      annee,
      occupants,
      facture,
      revenu,
    },
  })
    .then(() => console.log("✅ Simulation envoyée"))
    .catch((err) => console.error("❌ Erreur envoi simulation", err));
}; // <-- FERME ICI handleSubmitContact



  // UI icon class
  const iconClass = "w-5 h-5 text-emerald-600";

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header activeSection="aides" onPageChange={onPageChange} onSectionChange={() => {}} />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="bg-white shadow-xl rounded-3xl flex overflow-hidden max-w-5xl w-full min-h-[620px]">
          {/* left green panel */}
          <div className="bg-emerald-600 text-white p-10 flex flex-col justify-center w-1/3 hidden lg:flex">
            <h2 className="text-3xl font-bold mb-4">Simulateur d'aides & économies</h2>
            <p className="text-emerald-100 mb-6">
              Estimez vos aides potentielles (MaPrimeRénov', CEE) et vos économies sur 5 ans en quelques étapes.
            </p>
            <ul className="space-y-3 text-sm">
              <li>✅ Estimation personnalisée</li>
              <li>✅ Résultats instantanés</li>
              <li>✅ Étude gratuite sans engagement</li>
            </ul>
          </div>

          {/* right content */}
          <div className="flex-1 p-10">
            {/* progress */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 text-center mb-2">
                Étape {Math.min(step, totalSteps)} sur {totalSteps}
              </p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-emerald-600 h-2"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* animated steps */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                    <Home className={iconClass} /> Où se situe votre logement ?
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                      placeholder="Saisissez votre adresse"
                      className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                    />
                    {suggestions.length > 0 && (
                      <ul className="absolute bg-white border w-full rounded-b-xl mt-1 z-10 max-h-48 overflow-auto">
                        {suggestions.map((s, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              setAdresse(s);
                              setSuggestions([]);
                            }}
                            className="px-4 py-2 hover:bg-emerald-50 cursor-pointer text-sm"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Êtes-vous ?</h3>
                  <div className="flex gap-4">
                    {(["Propriétaire", "Locataire"] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setStatut(s);
                          if (s === "Locataire") {
                            // set ineligible indicator but allow the UX to show message on next click
                            setIneligible(true);
                          } else {
                            setIneligible(false);
                          }
                        }}
                        className={`px-6 py-3 rounded-xl border font-semibold transition ${
                          statut === s ? "bg-emerald-600 text-white" : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {statut === "Locataire" && (
                    <p className="text-red-500 mt-4">
                      Les locataires ne sont généralement pas éligibles aux aides MaPrimeRénov'. Contactez-nous pour des solutions adaptées.
                    </p>
                  )}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Votre mode de chauffage</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: "Électricité", icon: <Zap className={iconClass} /> },
                      { label: "Gaz", icon: <Flame className={iconClass} /> },
                      { label: "Bois", icon: <Trees className={iconClass} /> },
                      { label: "Fioul", icon: <Droplets className={iconClass} /> },
                    ].map(({ label, icon }) => (
                      <button
                        key={label}
                        onClick={() => setChauffage(label)}
                        className={`flex flex-col items-center gap-2 px-4 py-4 rounded-xl border transition ${
                          chauffage === label ? "bg-emerald-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {icon}
                        <span className="font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="s4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Quel produit souhaitez-vous simuler ?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {produitOptions.map((p) => (
                      <button
                        key={p.key}
                        onClick={() => setProduit(p.key)}
                        className={`flex flex-col items-center gap-3 p-4 rounded-xl border text-center transition ${
                          produit === p.key ? "bg-emerald-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <div className="text-emerald-50">{p.icon}</div>
                        <div className="font-semibold text-sm">{p.label}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="s5"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Année de construction</h3>
                  <input
                    type="number"
                    value={annee}
                    onChange={(e) => setAnnee(e.target.value)}
                    placeholder="Ex : 1995"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                  />
                </motion.div>
              )}

              {step === 6 && (
                <motion.div
                  key="s6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Nombre de personnes dans le foyer</h3>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        setOccupants((prev) => Math.max(1, (typeof prev === "number" ? prev : 1) - 1))
                      }
                      className="px-4 py-2 rounded-full border bg-gray-100"
                    >
                      -
                    </button>
                    <div className="text-xl font-bold">{occupants ?? 1}</div>
                    <button
                      onClick={() =>
                        setOccupants((prev) => (typeof prev === "number" ? prev + 1 : 2))
                      }
                      className="px-4 py-2 rounded-full border bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 7 && (
                <motion.div
                  key="s7"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Montant annuel de votre facture d'énergie (€)</h3>
                  <input
                    type="number"
                    value={facture === "" ? "" : facture}
                    onChange={(e) => setFacture(Number(e.target.value))}
                    placeholder="Ex : 2400"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                  />
                </motion.div>
              )}

              {step === 8 && (
                <motion.div
                  key="s8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Votre Revenu Fiscal de Référence (€)</h3>
                  <input
                    type="number"
                    value={revenu === "" ? "" : revenu}
                    onChange={(e) => setRevenu(Number(e.target.value))}
                    placeholder="Ex : 38000"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500"
                  />
                  <p className="text-sm text-gray-500 mt-3">
                    Ces informations servent à estimer les montants de MaPrimeRénov' (à titre indicatif).
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* navigation buttons */}
            <div className="flex justify-between mt-10">
              {step > 1 ? (
                <button onClick={prev} className="px-6 py-2 rounded-full border hover:bg-gray-100">
                  Précédent
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={next}
                className={`px-8 py-3 rounded-full font-semibold ${
                  // enabled if current step valid (quick check)
                  (step === 1 && adresse.trim().length > 3) ||
                  (step === 2 && statut !== "") ||
                  (step === 3 && chauffage !== "") ||
                  (step === 4 && produit !== "") ||
                  (step === 5 && annee !== "") ||
                  (step === 6 && typeof occupants === "number" && occupants > 0) ||
                  (step === 7 && typeof facture === "number" && facture > 0) ||
                  (step === 8 && typeof revenu === "number" && revenu >= 0)
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                {step === totalSteps ? "Voir mes résultats" : "Suivant"}
              </button>
            </div>

            {/* ineligible view */}
            {ineligible && step === 2 && (
              <div className="mt-6 rounded-lg border bg-yellow-50 p-4 text-sm text-yellow-800">
                <strong>Info :</strong> Si vous êtes locataire, vous n'êtes généralement pas éligible aux aides MaPrimeRénov'.
                Nous pouvons toutefois vous proposer des solutions. <button className="underline" onClick={() => onPageChange("contact")}>Contactez-nous</button>.
              </div>
            )}

            {/* results view (after popup accepted) */}
            {step > totalSteps && resultats && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-emerald-600" /> Vos résultats personnalisés
                </h3>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-xl bg-gray-50">
                    <h4 className="font-semibold">Vos économies estimées</h4>
                    <p className="text-sm text-gray-600 mt-2">Avec <strong>{produitOptions.find(p => p.key === produit)?.label}</strong> — estimation sur 5 ans :</p>
                    <div className="mt-4 text-2xl font-bold text-emerald-600">{resultats.economie.toLocaleString()} €</div>
                  </div>

                  <div className="p-4 border rounded-xl bg-gray-50">
                    <h4 className="font-semibold">Impact carbone estimé</h4>
                    <p className="text-sm text-gray-600 mt-2">Réduction approximative sur 5 ans :</p>
                    <div className="mt-4 text-2xl font-bold text-emerald-600">{resultats.carbone.toLocaleString()} kg CO₂</div>
                  </div>

                  <div className="p-4 border rounded-xl bg-gray-50">
                    <h4 className="font-semibold">Aides potentielles</h4>
                    <p className="text-sm text-gray-600 mt-2">Montants indicatifs :</p>
                    <div className="mt-3">
                      <div>MaPrimeRénov' : <strong>{resultats.aides.maprimerenov} €</strong></div>
                      <div>CEE estimé : <strong>{resultats.aides.cee} €</strong></div>
                      <div className="mt-2 font-bold">Total indicatif : {resultats.aides.total} €</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  Ces estimations sont réalisées à partir des informations fournies. Elles sont indicatives et non contractuelles.
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => onPageChange("contact")}
                    className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                  >
                    Prendre RDV
                  </button>
                  <button
                    onClick={() => {
                      // back to solutions or keep on page
                      onPageChange("solutions");
                    }}
                    className="px-6 py-3 rounded-full border"
                  >
                    Retour aux solutions
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* POPUP - mandatory contact before results */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
            >
              <h4 className="text-xl font-bold mb-3">Avant d'accéder à vos résultats 🎯</h4>
              <p className="text-gray-600 mb-4">Merci de renseigner vos coordonnées pour recevoir votre estimation personnalisée et être contacté si besoin.</p>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={formContact.prenom}
                  onChange={(e) => setFormContact((f) => ({ ...f, prenom: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  value={formContact.nom}
                  onChange={(e) => setFormContact((f) => ({ ...f, nom: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={formContact.telephone}
                  onChange={(e) => setFormContact((f) => ({ ...f, telephone: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formContact.email}
                  onChange={(e) => setFormContact((f) => ({ ...f, email: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formContact.consent}
                    onChange={(e) => setFormContact((f) => ({ ...f, consent: e.target.checked }))}
                  />
                  J'accepte d'être contacté par Reno Soluces.
                </label>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 rounded-full border hover:bg-gray-100"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSubmitContact}
                  disabled={
                    !formContact.prenom ||
                    !formContact.nom ||
                    !formContact.telephone ||
                    !formContact.email ||
                    !formContact.consent
                  }
                  className={`px-6 py-2 rounded-full font-semibold ${
                    formContact.prenom &&
                    formContact.nom &&
                    formContact.telephone &&
                    formContact.email &&
                    formContact.consent
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Voir mes résultats
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* confirmation toast */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white border shadow-lg rounded-xl p-4 flex items-start gap-3 z-50 max-w-lg"
            >
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <div>
                <div className="font-semibold">✅ Merci {formContact.prenom} !</div>
                <div className="text-sm text-gray-700">
                  Votre demande a bien été enregistrée. Un conseiller Reno Soluces vous contactera très prochainement.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default SimulateurRenoSoluces;