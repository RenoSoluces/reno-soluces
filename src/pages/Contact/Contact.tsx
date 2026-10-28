// src/pages/Contact/Contact.tsx
import { trackLead } from '../../lib/tracking';
import { useAntiSpam } from '../../lib/antiSpam';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Clock, AlertCircle } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type FormState = {
  project: string;
  address: string;
  postalCode: string;
  city: string;
  status: string;
  heating: string;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  consent: boolean;
  appointmentDate: string;
  appointmentTime: string;
};

const Contact: React.FC<{ onPageChange: (page: string) => void }> = ({
  onPageChange,
}) => {
  const [form, setForm] = useState<FormState>({
    project: "",
    address: "",
    postalCode: "",
    city: "",
    status: "",
    heating: "",
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    consent: false,
    appointmentDate: "",
    appointmentTime: "",
  });

  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const { trapField, payload: antiSpamPayload } = useAntiSpam();

  // Auto-complétion adresse (API BAN)
  const handleAddressInput = async (value: string) => {
    setForm({ ...form, address: value });

    if (value.length > 3) {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(value)}&limit=5`
      );
      const data = await res.json();

      const suggestions = data.features.map(
        (f: { properties: { label: string } }) => f.properties.label
      );
      setAddressSuggestions(suggestions);
    } else {
      setAddressSuggestions([]);
    }
  };

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) =>
    setForm({ ...form, [field]: value });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/submitLead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, ...antiSpamPayload() }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l’envoi du formulaire");
    }

    trackLead('page_contact', typeof form.project === 'string' ? form.project : undefined);
    setSubmitted(true);
  } catch (error) {
    console.error(error);
    alert("❌ Une erreur est survenue. Merci de réessayer.");
  }
};


  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let h = 9; h < 17; h++) {
      slots.push(`${h}:00`);
      slots.push(`${h}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const isLocataire = form.status === "Locataire";

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header
        activeSection="contact"
        onSectionChange={() => {}}
        onPageChange={onPageChange}
      />

      <main className="flex flex-col lg:flex-row max-w-6xl mx-auto my-16 bg-white shadow-xl rounded-2xl overflow-hidden relative">
        {/* Bloc vert gauche */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-700 text-white lg:w-1/3 p-10 flex flex-col justify-center"
        >
          <h1 className="text-3xl font-extrabold mb-4 leading-tight">
            Décrivez votre projet de rénovation énergétique
          </h1>
          <p className="text-emerald-100 text-lg mb-6">
            Remplissez le formulaire, ou choisissez un créneau téléphonique
            avec l’un de nos conseillers.
          </p>
          <div className="mt-auto text-sm text-emerald-200">
            <p>📍 Basée dans l'Aude</p>
            <p>👷 Professionnels partenaires</p>
            <p>💬 Accompagnement humain et transparent</p>
          </div>
        </motion.div>

        {/* Bloc droit dynamique */}
        <div className="w-full lg:w-2/3 p-10 lg:p-16">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="formulaire"
                onSubmit={handleSubmit}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Projet */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre projet
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) => update("project", e.target.value)}
                    className="w-full border rounded-lg px-4 py-3"
                    required
                  >
                    <option value="">Choisissez un projet</option>
                    <option value="Panneaux Photovoltaïques">Panneaux Photovoltaïques</option>
                    <option value="Pompe à Chaleur">Pompe à Chaleur</option>
                    <option value="Isolation">Isolation</option>
                    <option value="Ballon Thermodynamique">Ballon Thermodynamique</option>
                  </select>
                </div>

                {/* Adresse */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse du logement
                  </label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => handleAddressInput(e.target.value)}
                    placeholder="Ex : 10 Rue des Fleurs, Amiens"
                    className="w-full border rounded-lg px-4 py-3"
                    required
                  />
                  {addressSuggestions.length > 0 && (
                    <ul className="border rounded-lg mt-1 bg-white shadow-sm">
                      {addressSuggestions.map((addr, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            update("address", addr);
                            setAddressSuggestions([]);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                        >
                          {addr}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Statut */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Statut du logement
                  </label>
                  <div className="flex gap-4 flex-wrap">
                    {["Propriétaire", "Locataire"].map((s) => (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        type="button"
                        key={s}
                        onClick={() => update("status", s)}
                        className={`px-5 py-2 rounded-lg border transition ${
                          form.status === s
                            ? "bg-emerald-500 text-white"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>

                  {/* Message si locataire */}
                  <AnimatePresence>
                    {isLocataire && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                      >
                        <AlertCircle className="text-red-500 w-6 h-6 mt-1" />
                        <div>
                          <p className="font-semibold text-red-600">
                            Nous orientons actuellement les demandes de propriétaires.
                          </p>
                          <p className="text-sm text-red-500 mt-1">
                            Les conditions d’accès aux aides dépendent de chaque dispositif et de votre situation. Contactez-nous pour être orienté.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Si propriétaire */}
                {!isLocataire && (
                  <>
                    {/* Chauffage */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mode de chauffage
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {["Gaz", "Électricité", "Bois", "Fioul"].map((h) => (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            key={h}
                            type="button"
                            onClick={() => update("heating", h)}
                            className={`p-4 border rounded-xl text-sm font-medium transition ${
                              form.heating === h
                                ? "bg-emerald-500 text-white shadow-md"
                                : "bg-gray-50 hover:bg-gray-100"
                            }`}
                          >
                            {h}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Coordonnées */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Nom"
                        className="border rounded-lg px-4 py-3"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Prénom"
                        className="border rounded-lg px-4 py-3"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Téléphone"
                        className="border rounded-lg px-4 py-3"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-lg px-4 py-3"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        required
                      />
                    </div>

                    {/* Créneau RDV */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Choisissez un créneau d'appel 📅
                      </label>

                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        <span>Sélectionnez une date</span>
                      </div>

                      <input
                        type="date"
                        aria-label="Date de rappel souhaitée"
                        className="border rounded-lg px-4 py-3 w-full mb-4"
                        value={form.appointmentDate}
                        onChange={(e) => update("appointmentDate", e.target.value)}
                      />

                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-emerald-600" />
                        <span>Sélectionnez une heure</span>
                      </div>

                      <select
                        className="border rounded-lg px-4 py-3 w-full"
                        value={form.appointmentTime}
                        onChange={(e) => update("appointmentTime", e.target.value)}
                      >
                        <option value="">Sélectionner une heure</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Consentement */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="contact-consent"
                        aria-label="J’accepte d’être rappelé et la politique de confidentialité"
                        checked={form.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        required
                      />
                      <span className="text-sm text-gray-600">
                        J’accepte d’être rappelé et la Politique de Confidentialité.
                      </span>
                    </div>

                    {/* Bouton */}
                    {trapField}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      Valider ma demande
                    </motion.button>
                  </>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-2xl shadow-xl text-center"
              >
                <Check className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Merci {form.firstName || ""} !
                </h2>

                <p className="text-gray-700">
                  Votre demande a bien été enregistrée.
                  {form.appointmentDate && form.appointmentTime
                    ? ` 📞 Un conseiller vous contactera le ${form.appointmentDate} à ${form.appointmentTime}.`
                    : ` Un conseiller vous contactera très prochainement.`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default Contact;
