// netlify/functions/submitForm.js
import Airtable from "airtable";

export async function handler(event) {
  console.log("🚀 submitForm exécuté");

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    console.log("📩 Données reçues :", data);

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);

    // 🔑 SOURCE DU LEAD
    const source =
      data.source ||
      (data.simulationResult ? "Simulation" : "Contact");

    const fields = {
      "Nom": data.lastName || "",
      "Prénom": data.firstName || "",
      "Email": data.email || "",
      "Téléphone": data.phone || "",
      "Adresse": data.address || "",
      "Code Postal": data.postalCode || "",
      "Ville": data.city || "",
      "Projet": data.project || "",
      "Type de chauffage": data.heating || "",
      "Date RDV": data.appointmentDate || null,
      "Heure RDV": data.appointmentTime || "",
      "Consentement": data.consent === true,

      // 🆕 SIMULATION
      "Source": source,
      "Résultat simulation": data.simulationResult || "",
      "Données simulation": data.rawData
        ? JSON.stringify(data.rawData)
        : "",
    };

    console.log("🧩 Champs envoyés à Airtable :", fields);

    const record = await base(process.env.AIRTABLE_TABLE_NAME).create(fields);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: record.id }),
    };
  } catch (error) {
    console.error("🔥 Erreur submitForm :", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Airtable error",
        details: error.message,
      }),
    };
  }
}
