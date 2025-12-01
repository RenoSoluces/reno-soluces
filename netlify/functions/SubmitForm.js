const Airtable = require("airtable");

exports.handler = async function(event, context) {

  console.log("🚀 Fonction SubmitForm exécutée");
  console.log("📩 Body reçu:", event.body);

  if (event.httpMethod !== "POST") {
    console.log("❌ Mauvaise méthode HTTP:", event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    console.log("🔑 Variables AIRTABLE:");
    console.log("AIRTABLE_API_KEY:", process.env.AIRTABLE_API_KEY ? "✔️ OK" : "❌ ABSENTE");
    console.log("AIRTABLE_BASE_ID:", process.env.AIRTABLE_BASE_ID ? "✔️ OK" : "❌ ABSENTE");
    console.log("AIRTABLE_TABLE_NAME:", process.env.AIRTABLE_TABLE_NAME ? "✔️ OK" : "❌ ABSENTE");

    const data = JSON.parse(event.body || "{}");

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
      .base(process.env.AIRTABLE_BASE_ID);

    const record = await base(process.env.AIRTABLE_TABLE_NAME).create({
      "Nom": data.lastName,
      "Prénom": data.firstName,
      "Email": data.email,
      "Téléphone": data.phone,
      "Adresse": data.address,
      "Code Postal": data.postalCode,
      "Ville": data.city,
      "Nom du Projet": data.project,
      "Type de Chauffage": data.heating,
      "Date RDV": data.appointmentDate,
      "Heure RDV": data.appointmentTime,
      "Consentement": data.consent ? "Oui" : "Non",
    });

    console.log("✅ Enregistrement réussi ! ID:", record.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: record.id }),
    };

  } catch (error) {
    console.log("🔥 ERREUR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Airtable error",
        details: error.message,
      }),
    };
  }
};
