import Airtable from "airtable";

export async function handler(event, context) {

  console.log("🚀 Fonction SubmitForm exécutée");

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    console.log("📩 Body reçu:", data);

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
      .base(process.env.AIRTABLE_BASE_ID);

    const fields = {
      "Nom": data.lastName,
      "Prénom": data.firstName,
      "Email": data.email,
      "Téléphone": data.phone,
      "Adresse": data.address,
      "Code Postal": data.postalCode,
      "Ville": data.city,
      "Projet": data.project,
      "Type de chauffage": data.heating,
      "Date RDV": data.appointmentDate,
      "Heure RDV": data.appointmentTime,
      "Consentement": data.consent ? "Oui" : "Non"
    };

    console.log("🧩 Champs envoyés à Airtable:", fields);

    const record = await base(process.env.AIRTABLE_TABLE_NAME).create(fields);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: record.id }),
    };

  } catch (error) {
    console.error("🔥 ERREUR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Airtable error",
        details: error.message,
      }),
    };
  }
}
