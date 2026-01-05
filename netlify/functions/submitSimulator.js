// netlify/functions/submitSimulator.js

import Airtable from "airtable";

export const handler = async (event) => {
  console.log("🚀 submitSimulator exécuté");

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" })
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    console.log("📩 Données reçues :", data);

    // Vérification variables d'environnement
    if (
      !process.env.AIRTABLE_API_KEY ||
      !process.env.AIRTABLE_BASE_ID ||
      !process.env.AIRTABLE_TABLE_NAME_SIM
    ) {
      console.error("❌ Variables Airtable manquantes");
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Configuration Airtable manquante"
        })
      };
    }

    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);

    // Mapping des champs Airtable (FORMAT FIGÉ)
    const recordData = {
      "Simulateur": data.simulateur || "",
      "Projet": data.project || "",

      "Nom": data.lastName || "",
      "Prénom": data.firstName || "",
      "Email": data.email || "",
      "Téléphone": data.phone || "",

      "Adresse": data.address || "",
      "Code Postal": data.postalCode || "",
      "Ville": data.city || "",
      "Statut": data.status || "",
      "Type de chauffage": data.heating || "",

      "Consentement": data.consent === true,

      "Résultat Simulation": data.simulationResult || "",
      "Données brutes": JSON.stringify(data.rawData || {})
    };

    console.log("🧩 Données envoyées à Airtable :", recordData);

    await base(process.env.AIRTABLE_TABLE_NAME_SIM).create([
      { fields: recordData }
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error("🔥 submitSimulator error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error?.message || "Erreur serveur"
      })
    };
  }
};
