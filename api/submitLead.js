export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body || {};

    // Configuration Vercel
    const supabaseUrl = process.env.RENOVA_SUPABASE_URL;
    const serviceRoleKey = process.env.RENOVA_SUPABASE_SERVICE_ROLE_KEY;
    const adminProfileId = process.env.RENOVA_ADMIN_PROFILE_ID;

    if (!supabaseUrl || !serviceRoleKey || !adminProfileId) {
      console.error('Configuration Renova OS incomplète');
      return res.status(503).json({
        error: 'Connexion Renova OS non configurée',
      });
    }

    // Validation minimale
    const firstName = String(data.firstName || '').trim();
    const lastName = String(data.lastName || '').trim();
    const phone = String(data.phone || '').trim();
    const email = String(data.email || '').trim();
    const project = String(data.project || '').trim();

    if (!firstName || !lastName || !phone || !email || !project) {
      return res.status(400).json({
        error: 'Informations obligatoires manquantes',
      });
    }

    if (!data.consent) {
      return res.status(400).json({
        error: 'Le consentement est requis',
      });
    }

    /*
     * On récupère le profil administrateur Renova OS.
     * Cela permet de renseigner également le champ "commercial"
     * avec le nom du compte, en plus de commercial_id.
     */
    const profileResponse = await fetch(
      `${supabaseUrl}/rest/v1/profiles?id=eq.${encodeURIComponent(adminProfileId)}&select=id,nom_complet`,
      {
        method: 'GET',
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
        },
      }
    );

    if (!profileResponse.ok) {
      const profileError = await profileResponse.text();
      console.error('Erreur récupération profil admin:', profileError);

      return res.status(502).json({
        error: 'Impossible de vérifier le compte administrateur Renova OS',
      });
    }

    const profiles = await profileResponse.json();
    const adminProfile = profiles?.[0];

    if (!adminProfile) {
      console.error('Profil administrateur introuvable:', adminProfileId);

      return res.status(500).json({
        error: 'Compte administrateur Renova OS introuvable',
      });
    }

    /*
     * Construction du prospect Renova OS.
     *
     * Les données spécifiques au formulaire public sont conservées
     * dans commentaires afin de ne rien perdre.
     */
    const comments = [
      `Projet : ${project}`,
      data.housing ? `Logement : ${data.housing}` : null,
      data.timeline ? `Échéance : ${data.timeline}` : null,
      data.heating ? `Chauffage actuel : ${data.heating}` : null,
      data.appointmentDate
        ? `Date souhaitée : ${data.appointmentDate}`
        : null,
      data.appointmentTime
        ? `Horaire souhaité : ${data.appointmentTime}`
        : null,
      data.createdAt
        ? `Demande reçue : ${data.createdAt}`
        : `Demande reçue : ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join('\n');

    const prospect = {
      type_prospect: 'Particulier',

      civilite: data.civilite || null,
      prenom: firstName,
      nom: lastName,

      telephone: phone,
      email,

      adresse_rue: data.address || null,
      adresse: data.address || null,
      adresse_complement: null,

      code_postal: String(data.postalCode || '').trim() || null,
      ville: String(data.city || '').trim() || null,

      statut_occupation: data.status || null,

      source: 'Reno Soluces',
      commentaires: comments,

      statut: 'Nouveau',

      // Le prospect arrive d'abord chez l'admin Reno Soluces.
      // L'admin pourra ensuite le dispatcher vers le commercial.
      commercial_id: adminProfileId,
      commercial: adminProfile.nom_complet || null,

      pot_commun: false,
    };

    /*
     * Création du prospect dans Supabase / Renova OS.
     */
    const insertResponse = await fetch(
      `${supabaseUrl}/rest/v1/prospects`,
      {
        method: 'POST',
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify(prospect),
      }
    );

    const responseText = await insertResponse.text();

    if (!insertResponse.ok) {
      console.error(
        'Erreur création prospect Renova OS:',
        insertResponse.status,
        responseText
      );

      return res.status(502).json({
        error: 'Impossible de créer le prospect dans Renova OS',
      });
    }

    let createdProspect = null;

    try {
      const parsed = JSON.parse(responseText);
      createdProspect = Array.isArray(parsed) ? parsed[0] : parsed;
    } catch {
      // La création peut être réussie même si aucune représentation JSON
      // n'est retournée.
    }

    console.log('Prospect Reno Soluces créé dans Renova OS:', {
      id: createdProspect?.id || null,
      email,
      commercial_id: adminProfileId,
    });

    return res.status(200).json({
      success: true,
      prospectId: createdProspect?.id || null,
    });
  } catch (error) {
    console.error('submitLead error:', error);

    return res.status(500).json({
      error: 'Erreur serveur',
    });
  }
}