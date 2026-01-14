import Airtable from "airtable";

export async function handler(event) {
  console.log("🚀 submitSimulation exécuté");

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);

    const fields = {
      "Nom": data.lastName || "",
      "Prénom": data.firstName || "",
      "Email": data.email || "",
      "Téléphone": data.phone || "",

      "Projet": data.project || "",
      "Type de chauffage": data.heating || "",

      "Simulateur": "Simulateur Reno Soluces",
      "Résultat simulation": data.simulationResult || "",
      "Données simulation": JSON.stringify(data.rawData || {}),

      "Source": "Simulation",
      "Consentement": data.consent === true,
    };

    console.log("🧩 Simulation envoyée :", fields);

    const record = await base(process.env.AIRTABLE_TABLE_NAME).create(fields);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: record.id }),
    };

  } catch (error) {
    console.error("🔥 submitSimulation error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
