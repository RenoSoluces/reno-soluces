// ---------------------------------------------------------------------------
// Protection anti-spam et validation
// ---------------------------------------------------------------------------

const MAX_REQUESTS_PER_WINDOW = 5;
const WINDOW_MS = 10 * 60 * 1000;
const MIN_FILL_TIME_MS = 1500;
const recentRequests = new Map();

/**
 * Limitation simple par adresse IP. Elle vit en mémoire de l'instance serverless :
 * elle freine les envois répétés sans remplacer un vrai captcha (voir README).
 */
function isRateLimited(ip) {
  const now = Date.now();
  const hits = (recentRequests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recentRequests.set(ip, hits);

  if (recentRequests.size > 500) {
    for (const [key, times] of recentRequests) {
      if (times.every((time) => now - time >= WINDOW_MS)) recentRequests.delete(key);
    }
  }
  return hits.length > MAX_REQUESTS_PER_WINDOW;
}

function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  try {
    const { hostname } = new URL(origin);
    return (
      hostname === 'renosoluces.fr' ||
      hostname === 'www.renosoluces.fr' ||
      hostname === 'localhost' ||
      hostname.endsWith('.vercel.app')
    );
  } catch {
    return false;
  }
}

/** Nettoie un texte libre : retire les caractères de contrôle et limite la longueur. */
function clean(value, max) {
  return String(value ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, max);
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 9 && digits.length <= 15;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: 'Origine non autorisée' });
  }

  const forwarded = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const ip = forwarded || req.socket?.remoteAddress || 'inconnue';

  if (isRateLimited(ip)) {
    res.setHeader('Retry-After', '600');
    return res.status(429).json({ error: 'Trop de demandes. Merci de réessayer dans quelques minutes.' });
  }

  try {
    const data = req.body && typeof req.body === 'object' ? req.body : {};

    // Champ piège rempli ou envoi anormalement rapide : on répond « succès »
    // pour ne rien révéler aux robots, mais aucun prospect n'est créé.
    const elapsed = Number(data.elapsedMs);
    if (clean(data.website, 200) !== '' || (Number.isFinite(elapsed) && elapsed < MIN_FILL_TIME_MS)) {
      console.warn('submitLead : envoi ignoré (anti-spam)');
      return res.status(200).json({ success: true, prospectId: null });
    }

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
    const firstName = clean(data.firstName, 100);
    const lastName = clean(data.lastName, 100);
    const phone = clean(data.phone, 30);
    const email = clean(data.email, 200);
    const project = clean(data.project, 300);

    if (!firstName || !lastName || !phone || !email || !project) {
      return res.status(400).json({
        error: 'Informations obligatoires manquantes',
      });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ error: 'Adresse e-mail invalide' });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: 'Numéro de téléphone invalide' });
    }

    if (data.consent !== true) {
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
      clean(data.housing, 100) ? `Logement : ${clean(data.housing, 100)}` : null,
      clean(data.timeline, 100) ? `Échéance : ${clean(data.timeline, 100)}` : null,
      clean(data.heating, 100) ? `Chauffage actuel : ${clean(data.heating, 100)}` : null,
      clean(data.appointmentDate, 30)
        ? `Date souhaitée : ${clean(data.appointmentDate, 30)}`
        : null,
      clean(data.appointmentTime, 30)
        ? `Horaire souhaité : ${clean(data.appointmentTime, 30)}`
        : null,
      `Demande reçue : ${new Date().toISOString()}`,
    ]
      .filter(Boolean)
      .join('\n');

    const prospect = {
      type_prospect: 'Particulier',

      civilite: clean(data.civilite, 20) || null,
      prenom: firstName,
      nom: lastName,

      telephone: phone,
      email,

      adresse_rue: clean(data.address, 200) || null,
      adresse: clean(data.address, 200) || null,
      adresse_complement: null,

      code_postal: clean(data.postalCode, 10) || null,
      ville: clean(data.city, 100) || null,

      statut_occupation: clean(data.status, 50) || null,

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