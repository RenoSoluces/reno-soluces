import Airtable from "airtable";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: record.id }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Airtable error",
        details: error.message,
      }),
    };
  }
}
