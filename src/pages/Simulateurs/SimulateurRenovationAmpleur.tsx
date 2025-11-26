// src/pages/SimulateurRenovationAmpleur.tsx
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Home, Building2, Leaf, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SimulateurRenovationAmpleurProps {
  onPageChange: (page: string) => void;
}

const SimulateurRenovationAmpleur: React.FC<SimulateurRenovationAmpleurProps> = ({ onPageChange }) => {
  const [step, setStep] = useState<number>(1);
  const [adresse, setAdresse] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [statut, setStatut] = useState<"Propriétaire" | "Locataire" | "">("");
  const [revenus, setRevenus] = useState<string>("");
  const [typeTravaux, setTypeTravaux] = useState<string[]>([]);
  const [nonEligible, setNonEligible] = useState<boolean>(false);

  const [prime, setPrime] = useState<number | null>(null);
  const [economies, setEconomies] = useState<number | null>(null);

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [formContact, setFormContact] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    consent: false,
  });

  // --- API BAN pour autocomplétion d'adresse ---
  useEffect(() => {
    const controller = new AbortController();
    const fetchSuggestions = async () => {
      if (adresse.length < 3) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adresse)}&limit=5`,
          { signal: controller.signal }
        );
        const data = await res.json();
        const labels = Array.isArray(data.features)
          ? data.features.map((f: any) => f.properties.label as string)
          : [];
        setSuggestions(labels);
      } catch (err) {
        if ((err as any).name !== "AbortError") console.error("API BAN error", err);
      }
    };
    fetchSuggestions();
    return () => controller.abort();
  }, [adresse]);

  // toggle travaux
  const toggleTravaux = (t: string) =>
    setTypeTravaux((prev) => (prev.includes(t) ? prev.filter((p) => p !== t) : [...prev, t]));

  // calculs simples indicatifs
  const calculerPrimeEtEconomies = () => {
    const baseTravaux = 20000; // estimation moyenne du coût pour rénovation globale (à adapter)
    let taux = 0.30;
    if (revenus === "modestes") taux = 0.55;
    if (revenus === "intermédiaires") taux = 0.40;
    if (revenus === "aisés") taux = 0.25;

    // ajustement si plusieurs types de travaux sélectionnés (petit multiplicateur)
    const mult = Math.min(1 + typeTravaux.length * 0.12, 1.6);

    const montantPrime = Math.round(baseTravaux * taux * mult);
    const economieAnnuelle = Math.round(baseTravaux * 0.18 * mult); // ~18% de la dépense énergétique/report
    setPrime(montantPrime);
    setEconomies(economieAnnuelle);
  };

  // gestion navigation
  const handleNext = () => {
    // locataire -> inéligible
    if (step === 2 && statut === "Locataire") {
      setNonEligible(true);
      return;
    }

    if (step === 4) {
      // avant d'afficher résultats, on calcule et on affiche le popup
      calculerPrimeEtEconomies();
      setShowPopup(true);
      return;
    }

    setStep((s) => Math.min(s + 1, 5));
  };

  const handlePrev = () => {
    if (nonEligible) {
      setNonEligible(false);
      setStatut("");
      setStep(2);
      return;
    }
    setStep((s) => Math.max(1, s - 1));
  };

  // gestion du submit du popup contact
  const handleSubmitContact = () => {
    const { prenom, nom, telephone, email, consent } = formContact;
    if (!prenom || !nom || !telephone || !email || !consent) {
      alert("Merci de remplir tous les champs et d'accepter d'être contacté.");
      return;
    }

    // Ici : envoyer au CRM / API backend (à implémenter)
    setShowPopup(false);
    setShowConfirmation(true);

    // message de confirmation puis affichage des résultats
    setTimeout(() => {
      setShowConfirmation(false);
      setStep(5); // page résultats
    }, 2200);
  };

  const progress = Math.round((Math.min(step, 4) / 4) * 100);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header activeSection="simulateur" onSectionChange={() => {}} onPageChange={onPageChange} />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="bg-white shadow-xl rounded-3xl flex overflow-hidden max-w-5xl w-full min-h-[620px]">
          {/* panneau vert gauche */}
          <div className="bg-emerald-600 text-white p-10 flex flex-col justify-center w-1/3 hidden lg:flex">
            <h2 className="text-3xl font-bold mb-6">Rénovation d’ampleur</h2>
            <p className="text-emerald-100 mb-6">
              Estimez simplement votre prime MaPrimeRénov' Sérénité et vos économies potentielles après travaux.
            </p>
            <ul className="space-y-3 text-emerald-50">
              <li>✅ Estimation personnalisée</li>
              <li>✅ Résultats instantanés</li>
              <li>✅ Étude gratuite sans engagement</li>
            </ul>
          </div>

          {/* contenu principal */}
          <div className="flex-1 p-10">
            {/* progression */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 text-center mb-2">Étape {Math.min(step, 4)} sur 4</p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-emerald-600 h-2"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.45 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {nonEligible ? (
                <motion.div
                  key="ineligible"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center mt-14"
                >
                  <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Vous n’êtes pas éligible</h3>
                  <p className="text-gray-700 mb-6">
                    Les aides MaPrimeRénov' Sérénité et la plupart des aides à la rénovation globale sont
                    réservées aux **propriétaires**. Si vous êtes locataire, contactez-nous pour des alternatives.
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => {
                        setNonEligible(false);
                        setStatut("");
                        setStep(2);
                      }}
                      className="px-6 py-2 rounded-full border hover:bg-gray-100"
                    >
                      Revenir
                    </button>
                    <button
                      onClick={() => onPageChange("contact")}
                      className="px-6 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      Être contacté par un conseiller
                    </button>
                  </div>
                </motion.div>
              ) : (
                <>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                        <Home className="text-emerald-600" /> Où se situe votre logement ?
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
                          <ul className="absolute bg-white border w-full rounded-b-xl mt-1 z-10">
                            {suggestions.map((s, idx) => (
                              <li
                                key={idx}
                                onClick={() => {
                                  setAdresse(s);
                                  setSuggestions([]);
                                }}
                                className="px-4 py-2 hover:bg-emerald-50 cursor-pointer"
                              >
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <p className="text-sm text-gray-500 mt-3">
                        L’adresse permet d’affiner la simulation et la géolocalisation des aides (option).
                      </p>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Êtes-vous propriétaire ou locataire ?
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {(["Propriétaire", "Locataire"] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              setStatut(s);
                              if (s === "Locataire") {
                                // affiche message rapidement puis verrouille
                                setTimeout(() => setNonEligible(true), 200);
                              }
                            }}
                            className={`px-4 py-3 rounded-xl border font-medium transition-all ${
                              statut === s ? "bg-emerald-600 text-white shadow-md" : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <Building2 className="text-emerald-600" /> Niveau de revenus
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {["modestes", "intermédiaires", "aisés"].map((r) => (
                          <button
                            key={r}
                            onClick={() => setRevenus(r)}
                            className={`px-4 py-3 rounded-xl border font-medium transition-all ${
                              revenus === r ? "bg-emerald-600 text-white shadow-md" : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            {r.charAt(0).toUpperCase() + r.slice(1)}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        <Leaf className="text-emerald-600" /> Quels travaux envisagez-vous ?
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Isolation des combles",
                          "Isolation extérieure",
                          "Pompe à chaleur",
                          "Ballon thermodynamique",
                          "Ventilation / VMC",
                          "Changement de menuiseries",
                        ].map((t) => (
                          <button
                            key={t}
                            onClick={() => toggleTravaux(t)}
                            className={`px-4 py-3 rounded-xl border text-left transition-all ${
                              typeTravaux.includes(t) ? "bg-emerald-600 text-white shadow-md" : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            <div className="font-medium">{t}</div>
                            <div className="text-sm text-gray-500 mt-1">Sélection multiple possible</div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </AnimatePresence>

            {/* navigation */}
            {!nonEligible && (
              <div className="flex justify-between mt-8">
                <div>
                  {step > 1 && (
                    <button onClick={handlePrev} className="px-6 py-2 rounded-full border hover:bg-gray-100">
                      Précédent
                    </button>
                  )}
                </div>

                <div>
                  {step < 4 ? (
                    <button
                      onClick={handleNext}
                      disabled={
                        (step === 1 && adresse.trim().length < 3) ||
                        (step === 2 && statut === "") ||
                        (step === 3 && revenus === "")
                      }
                      className={`px-8 py-3 rounded-full font-semibold ${
                        (step === 1 && adresse.trim().length < 3) ||
                        (step === 2 && statut === "") ||
                        (step === 3 && revenus === "")
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                    >
                      Voir mes résultats
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* résultats */}
            {step === 5 && prime !== null && economies !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-8"
              >
                <h2 className="text-3xl font-bold text-emerald-600 mb-6">
                  <CheckCircle className="inline-block mr-2" /> Résultats de la simulation
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
                  <div className="bg-emerald-50 rounded-xl p-6 w-64 shadow">
                    <p className="text-lg text-gray-700 font-semibold mb-2">💶 Prime estimée</p>
                    <p className="text-4xl font-bold text-emerald-700">{prime.toLocaleString()} €</p>
                    <p className="text-sm text-gray-500 mt-2">Montant indicatif</p>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-6 w-64 shadow">
                    <p className="text-lg text-gray-700 font-semibold mb-2">⚡ Économies annuelles</p>
                    <p className="text-4xl font-bold text-emerald-700">{economies.toLocaleString()} €</p>
                    <p className="text-sm text-gray-500 mt-2">Estimation sur base de travaux globaux</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Ces estimations sont indicatives. Pour un chiffrage précis, réservez une étude gratuite.
                </p>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => onPageChange("contact")}
                    className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Être rappelé gratuitement
                  </button>
                  <button
                    onClick={() => onPageChange("solutions")}
                    className="px-6 py-3 rounded-full border"
                  >
                    Retour aux solutions
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* POPUP CONTACT (bloquante) */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
            >
              <h3 className="text-xl font-bold mb-3">Avant de voir vos résultats 🎯</h3>
              <p className="text-gray-600 mb-4">
                Merci de renseigner vos coordonnées pour accéder à votre estimation personnalisée.
              </p>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={formContact.prenom}
                  onChange={(e) => setFormContact((s) => ({ ...s, prenom: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  value={formContact.nom}
                  onChange={(e) => setFormContact((s) => ({ ...s, nom: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={formContact.telephone}
                  onChange={(e) => setFormContact((s) => ({ ...s, telephone: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formContact.email}
                  onChange={(e) => setFormContact((s) => ({ ...s, email: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2"
                />

                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formContact.consent}
                    onChange={(e) => setFormContact((s) => ({ ...s, consent: e.target.checked }))}
                  />
                  J'accepte d'être contacté par un conseiller RENO SOLUCES.
                </label>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => setShowPopup(false)} className="px-4 py-2 rounded-full border hover:bg-gray-100">
                  Annuler
                </button>
                <button
                  onClick={handleSubmitContact}
                  disabled={
                    !formContact.prenom || !formContact.nom || !formContact.telephone || !formContact.email || !formContact.consent
                  }
                  className={`px-6 py-2 rounded-full font-semibold ${
                    formContact.prenom && formContact.nom && formContact.telephone && formContact.email && formContact.consent
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

        {/* toast confirmation */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white border shadow-lg rounded-xl p-4 flex items-center gap-3 z-50"
            >
              <CheckCircle className="text-emerald-600" size={22} />
              <div className="text-sm text-gray-700">
                ✅ Merci {formContact.prenom || ""} ! Votre demande a bien été enregistrée.
                <div className="text-xs text-gray-500">Un conseiller Reno Soluces vous contactera très prochainement.</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default SimulateurRenovationAmpleur;
