export type SimulationPayload = {
  project: string;
  heating: string;

  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  consent?: boolean;

  simulationResult: string;
  rawData: Record<string, any>;
};

export async function sendSimulation(
  data: SimulationPayload
): Promise<{ success: boolean; id: string }> {

  const response = await fetch(
    "/.netlify/functions/submitSimulation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Erreur lors de l'envoi de la simulation");
  }

  return response.json();
}
