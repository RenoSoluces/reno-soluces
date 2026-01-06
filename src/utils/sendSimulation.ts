// src/utils/sendSimulation.ts

export type SimulationPayload = {
  simulateur: string;
  project: string;

  // Contact (optionnel)
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  consent?: boolean;

  // Logement (optionnel)
  address?: string;
  postalCode?: string;
  city?: string;
  status?: string;
  heating?: string;

  // Résultat
  simulationResult: string;

  // Données brutes (toujours présentes)
  rawData: Record<string, any>;
};

export async function sendSimulation(
  data: SimulationPayload
): Promise<{ success: boolean }> {
  try {
    const response = await fetch("/.netlify/functions/submitSimulator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi de la simulation");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ sendSimulation error:", error);
    throw error;
  }
}
