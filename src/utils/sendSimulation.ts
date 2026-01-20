// src/utils/sendSimulation.ts
export type SimulationPayload = {
  simulateur: string;           // Nom du simulateur
  project: string;              // Produit ou projet simulé
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  consent?: boolean;
  address?: string;
  heating?: string;
  simulationResult?: string;     // JSON.stringify des résultats
  rawData: Record<string, any>;  // Toutes les données brutes de la simulation
};

export async function sendSimulation(
  data: SimulationPayload
): Promise<{ success: boolean }> {
  try {
    const response = await fetch("/.netlify/functions/submitSimulation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("sendSimulation non ok:", errText);
      throw new Error("Erreur lors de l'envoi: " + errText);
    }

    const result = await response.json();
    console.log("sendSimulation success:", result);
    return result;
  } catch (error: any) {
    console.error("❌ sendSimulation error:", error);
    throw error;
  }
}
