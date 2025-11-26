import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Home, Ruler, User, CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SimulateurIsolationProps {
  onPageChange: (page: string) => void;
}

const SimulateurIsolation: React.FC<SimulateurIsolationProps> = ({ onPageChange }) => {
  const [step, setStep] = useState(1);
  const [adresse, setAdresse] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [statut, setStatut] = useState("");
  const [surface, setSurface] = useState<number | null>(null);
  const [resultat, setResultat] = useState<number | null>(null);
  const [nonEligible, setNonEligible] = useState(false);
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

  // --- ÉTAPES ---
  const handleNext = () => {
    if (step === 2 && statut === "Locataire") {
      setNonEligible(true);
      return;
    }
    if (step === 3 && surface) {
      const prime = surface * 25; // estimation simple : 25€/m² isolé
      setResultat(prime);
      setShowPopup(true);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleSubmitContact = () => {
    setShowPopup(false);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setStep(4);
    }, 2500);
  };

  const progress = (step / 3) * 100;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header activeSection="simulateur" onPageChange={onPageChange} />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="bg-white shadow-xl rounded-3xl flex overflow-hidden max-w-5xl w-full min-h-[600px]">
          {/* ENCART VERT GAUCHE */}
          <div className="bg-emerald-600 text-white p-10 flex flex-col justify-center w-1/3 hidden lg:flex">
            <h2 className="text-3xl font-bold mb-6">Simulateur d’isolation</h2>
            <p className="text-emerald-100 mb-8">
              Estimez le montant de votre aide pour vos travaux d’isolation thermique en quelques étapes simples.
            </p>
            <ul className="space-y-4">
              <li>✅ Estimation personnalisée</li>
              <li>✅ Résultats instantanés</li>
              <li>✅ Étude gratuite sans engagement</li>
            </ul>
          </div>

          {/* CONTENU PRINCIPAL */}
          <div className="flex-1 p-10">
            {!nonEligible && (
              <div className="mb-8">
                <p className="text-sm text-gray-600 text-center mb-2">Étape {Math.min(step, 3)} sur 3</p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-emerald-600 h-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {!nonEligible && step === 1 && (
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

              {!nonEligible && step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                    <User className="text-emerald-600" /> Êtes-vous propriétaire ou locataire ?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Propriétaire", "Locataire"].map((stat) => (
                      <button
                        key={stat}
                        onClick={() => setStatut(stat)}
                        className={`px-4 py-3 rounded-xl border font-medium transition-all ${
                          statut === stat
                            ? "bg-emerald-600 text-white shadow-md"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {stat}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {!nonEligible && step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                    <Ruler className="text-emerald-600" /> Quelle surface souhaitez-vous isoler ?
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[30, 60, 90, 120, 150, 200].map((val) => (
                      <button
                        key={val}
                        onClick={() => setSurface(val)}
                        className={`px-4 py-3 rounded-xl border font-medium transition-all ${
                          surface === val
                            ? "bg-emerald-600 text-white shadow-md"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {val} m²
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {nonEligible && (
                <motion.div
                  key="nonEligible"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mt-20"
                >
                  <XCircle className="text-red-500 mx-auto mb-4" size={64} />
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Vous n’êtes pas éligible 😕</h2>
                  <p className="text-gray-600 mb-8">
                    Les aides à l’isolation sont réservées aux propriétaires occupants ou bailleurs.
                  </p>
                  <button
                    onClick={() => onPageChange("contact")}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold"
                  >
                    Contacter un conseiller
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {!nonEligible && step <= 3 && (
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
                  disabled={(step === 1 && !adresse) || (step === 2 && !statut)}
                  className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:bg-gray-300"
                >
                  {step === 3 ? "Voir mes résultats" : "Suivant"}
                </button>
              </div>
            )}

            {step === 4 && resultat && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-8"
              >
                <h2 className="text-3xl font-bold text-emerald-600 mb-4">🎉 Votre aide estimée</h2>
                <p className="text-5xl font-extrabold mb-2">{resultat.toLocaleString()} €</p>
                <p className="text-gray-600 mb-8">
                  Pour l’isolation d’environ {surface} m² de surface habitable.
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
                  className="px-6 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:bg-gray-300"
                >
                  Voir mes résultats
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* MESSAGE DE CONFIRMATION */}
        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white border shadow-lg rounded-xl p-4 flex items-center gap-3 z-50"
            >
              <CheckCircle className="text-emerald-600" size={24} />
              <p className="text-gray-700 font-medium">
                ✅ Merci {formContact.prenom} ! Votre demande a bien été enregistrée.<br />
                Un conseiller Reno Soluces vous contactera très prochainement pour étudier votre projet.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default SimulateurIsolation;
