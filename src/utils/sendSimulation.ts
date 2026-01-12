// src/utils/sendSimulation.ts

export type SimulationPayload = {
  project: string;

  // Contact
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  consent?: boolean;

  // Logement
  address?: string;
  postalCode?: string;
  city?: string;
  heating?: string;

  // Simulation
  simulationResult: string;
  rawData: Record<string, any>;

  // Origine du lead
  source?: "Simulation" | "Demande de RDV";
};

export async function sendSimulation(
  data: SimulationPayload
): Promise<{ success: boolean }> {

  const payload = {
    // Identité du simulateur
    simulateur: "Simulateur Reno Soluces",

    // Source du lead
    source: data.source || "Simulation",

    // Contact
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    phone: data.phone || "",
    consent: data.consent === true,

    // Logement / projet
    address: data.address || "",
    postalCode: data.postalCode || "",
    city: data.city || "",
    project: data.project || "",
    heating: data.heating || "",

    // Résultat simulation
    simulationResult: data.simulationResult,

    // Données techniques
    rawData: JSON.stringify(data.rawData || {}),
  };

  try {
    const response = await fetch("/.netlify/functions/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erreur Netlify submitForm:", errorText);
      throw new Error("Erreur lors de l'envoi vers Airtable");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ sendSimulation error:", error);
    throw error;
  }
}
