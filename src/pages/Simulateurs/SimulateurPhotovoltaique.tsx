import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Home, Sun, Zap, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SimulateurPhotovoltaiquesProps {
  onPageChange: (page: string) => void;
}

const SimulateurPhotovoltaiques: React.FC<SimulateurPhotovoltaiquesProps> = ({ onPageChange }) => {
  const [step, setStep] = useState(1);
  const [adresse, setAdresse] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [statut, setStatut] = useState<"Propriétaire" | "Locataire" | "">("");
  const [orientation, setOrientation] = useState("");
  const [puissance, setPuissance] = useState<number | null>(null);
  const [nonEligible, setNonEligible] = useState(false);
  const [prime, setPrime] = useState<number | null>(null);
  const [economies, setEconomies] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formContact, setFormContact] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    consent: false,
  });

  // --- AUTO-COMPLÉTION ADRESSE (API BAN) ---
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (adresse.length < 3) return setSuggestions([]);
      try {
        const res = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${adresse}&limit=5`);
        const data = await res.json();
        setSuggestions(data.features.map((f: any) => f.properties.label));
      } catch (err) {
        console.error("Erreur API BAN:", err);
      }
    };
    fetchSuggestions();
  }, [adresse]);

  // --- BARÈMES DE PRIME SOLAIRE ---
  const primeBarèmes = [
    { max: 3, montant: 80 },
    { max: 9, montant: 80 },
    { max: 36, montant: 180 },
    { max: 100, montant: 90 },
  ];

  const getPrime = (puissance: number) => {
    const barème = primeBarèmes.find((b) => puissance <= b.max);
    return barème ? puissance * barème.montant : 0;
  };

  // --- ESTIMATION DES ÉCONOMIES ---
  const getEconomies = (puissance: number, orientation: string) => {
    const baseProduction = puissance * 1100; // kWh/an
    const correction =
      orientation === "Sud"
        ? 1
        : orientation.includes("Ouest") || orientation.includes("Est")
        ? 0.85
        : 0.6;
    const prodCorrigée = baseProduction * correction;
    const prixKWh = 0.25; // €
    return prodCorrigée * prixKWh; // économies annuelles
  };

  const handleNext = () => {
    if (statut === "Locataire") {
      setNonEligible(true);
      return;
    }
    if (step === 4 && puissance) {
      const montantPrime = getPrime(puissance);
      const econ = getEconomies(puissance, orientation);
      setPrime(montantPrime);
      setEconomies(econ);
      setShowPopup(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmitContact = () => {
    setShowPopup(false);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setStep(5);
    }, 2500);
  };

  const progress = (step / 4) * 100;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header activeSection="simulateur" onPageChange={onPageChange} />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="bg-white shadow-xl rounded-3xl flex overflow-hidden max-w-5xl w-full min-h-[600px]">
          {/* ENCART VERT GAUCHE */}
          <div className="bg-emerald-600 text-white p-10 flex flex-col justify-center w-1/3 hidden lg:flex">
            <h2 className="text-3xl font-bold mb-6">Simulateur Photovoltaïque</h2>
            <p className="text-emerald-100 mb-8">
              Estimez vos aides et les économies réalisables grâce à votre future installation solaire.
            </p>
            <ul className="space-y-4">
              <li>✅ Estimation personnalisée</li>
              <li>✅ Résultats instantanés</li>
              <li>✅ Étude gratuite sans engagement</li>
            </ul>
          </div>

          {/* CONTENU PRINCIPAL */}
          <div className="flex-1 p-10">
            {/* Barre de progression */}
            <div className="mb-8">
              <p className="text-sm text-gray-600 text-center mb-2">Étape {Math.min(step, 4)} sur 4</p>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-emerald-600 h-2"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* ÉTAPES */}
            <AnimatePresence mode="wait">
              {nonEligible ? (
                <motion.div
                  key="nonEligible"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="text-center mt-16"
                >
                  <h3 className="text-2xl font-bold text-red-600 mb-4">⚠️ Vous n’êtes pas éligible</h3>
                  <p className="text-gray-700 mb-8">
                    Les aides pour l’installation photovoltaïque sont réservées aux propriétaires de leur logement.
                  </p>
                  <button
                    onClick={() => {
                      setNonEligible(false);
                      setStatut("");
                      setStep(2);
                    }}
                    className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                  >
                    Revenir en arrière
                  </button>
                </motion.div>
              ) : (
                <>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
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
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                        Statut du logement
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {(["Propriétaire", "Locataire"] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              setStatut(s);
                              if (s === "Locataire") {
                                setTimeout(() => setNonEligible(true), 250);
                              }
                            }}
                            className={`px-4 py-3 rounded-xl border font-medium transition-all ${
                              statut === s
                                ? "bg-emerald-600 text-white shadow-md"
                                : "bg-gray-100 hover:bg-gray-200"
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
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                        <Sun className="text-emerald-600" /> Orientation de votre toiture
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {["Sud", "Sud-Est / Ouest", "Est / Ouest", "Nord"].map((dir) => (
                          <button
                            key={dir}
                            onClick={() => setOrientation(dir)}
                            className={`px-4 py-3 rounded-xl border font-medium transition-all ${
                              orientation === dir
                                ? "bg-emerald-600 text-white shadow-md"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            {dir}
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
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                        <Zap className="text-emerald-600" /> Quelle est la puissance de votre installation ?
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[3, 6, 9, 12, 36].map((val) => (
                          <button
                            key={val}
                            onClick={() => setPuissance(val)}
                            className={`px-4 py-3 rounded-xl border font-medium transition-all ${
                              puissance === val
                                ? "bg-emerald-600 text-white shadow-md"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            {val} kWc
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {!nonEligible && step <= 4 && (
              <div className="flex justify-between mt-12">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 rounded-full border hover:bg-gray-100"
                  >
                    Précédent
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !adresse) ||
                    (step === 2 && !statut) ||
                    (step === 3 && !orientation)
                  }
                  className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:bg-gray-300"
                >
                  {step === 4 ? "Voir mes résultats" : "Suivant"}
                </button>
              </div>
            )}

            {/* Résultats */}
            {step === 5 && prime && economies && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-8"
              >
                <h2 className="text-3xl font-bold text-emerald-600 mb-6">
                  🎉 Résultats de votre simulation
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-10 mb-8">
                  <div className="bg-emerald-50 rounded-xl p-6 w-64 shadow">
                    <p className="text-lg text-gray-700 font-semibold mb-2">💶 Prime estimée</p>
                    <p className="text-4xl font-bold text-emerald-700">{prime.toLocaleString()} €</p>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-6 w-64 shadow">
                    <p className="text-lg text-gray-700 font-semibold mb-2">⚡ Économies annuelles</p>
                    <p className="text-4xl font-bold text-emerald-700">
                      {economies.toLocaleString(undefined, { maximumFractionDigits: 0 })} €
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  Pour une installation de {puissance} kWc orientée {orientation}.
                </p>

                <button
                  onClick={() => onPageChange("contact")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  Être rappelé gratuitement
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* POPUP CONTACT */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
            >
              <h3 className="text-xl font-bold mb-4">Avant de voir vos résultats 🎯</h3>
              <p className="text-gray-600 mb-4">
                Merci de renseigner vos coordonnées pour accéder à votre estimation personnalisée.
              </p>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={formContact.prenom}
                  onChange={(e) => setFormContact({ ...formContact, prenom: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  value={formContact.nom}
                  onChange={(e) => setFormContact({ ...formContact, nom: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={formContact.telephone}
                  onChange={(e) => setFormContact({ ...formContact, telephone: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formContact.email}
                  onChange={(e) => setFormContact({ ...formContact, email: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={formContact.consent}
                    onChange={(e) => setFormContact({ ...formContact, consent: e.target.checked })}
                  />
                  J'accepte d'être contacté par un conseiller RENO SOLUCES.
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
                  className="px-6 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-gray-300"
                >
                  Voir mes résultats
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* MESSAGE DE CONFIRMATION */}
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl max-w-sm">
              <CheckCircle className="text-emerald-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">✅ Merci {formContact.prenom} !</h3>
              <p className="text-gray-700">
                Votre demande a bien été enregistrée.<br />
                Un conseiller Reno Soluces vous contactera très prochainement pour étudier votre projet.
              </p>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SimulateurPhotovoltaiques;
