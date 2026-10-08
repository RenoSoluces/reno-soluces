import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PolitiqueConfidentialite: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header activeSection="politique-confidentialite" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de confidentialité</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          La protection de vos données personnelles est une priorité pour Reno Soluces. 
          Découvrez comment nous collectons, utilisons et protégeons vos informations.
        </p>
      </section>

      {/* Contenu principal */}
      <main className="flex-1 container mx-auto px-6 md:px-16 py-12 space-y-12 text-gray-800">
        {/* Collecte des données */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations personnelles</h2>
          <p>
            Reno Soluces collecte uniquement les données strictement nécessaires à la gestion de la relation client, 
            telles que votre nom, prénom, adresse, numéro de téléphone et adresse e-mail, 
            dans le cadre de demandes de renseignements, devis, prises de rendez-vous ou suivi de vos projets.
          </p>
        </section>

        {/* Utilisation des données */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données collectées</h2>
          <p>Les informations personnelles collectées sont utilisées pour :</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Répondre à vos demandes de renseignements et établir des devis</li>
            <li>Assurer le suivi de vos travaux de rénovation énergétique</li>
            <li>Vous accompagner dans vos démarches d’aides et de financements</li>
            <li>Améliorer la qualité de nos services et de notre accompagnement</li>
          </ul>
        </section>

        {/* Partage des données */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Partage des données</h2>
          <p>
            Vos données personnelles ne sont jamais vendues ni échangées. 
            Elles peuvent toutefois être transmises à des partenaires ou sous-traitants 
            (installateurs, bureaux d’études, fournisseurs) uniquement dans le cadre de la réalisation de votre projet.
          </p>
        </section>

        {/* Durée de conservation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Durée de conservation</h2>
          <p>
            Vos informations sont conservées pendant une durée maximale de <strong>3 ans</strong> 
            après notre dernier contact, sauf obligation légale ou réglementaire imposant une durée plus longue.
          </p>
        </section>

        {/* Sécurité */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Sécurité des données</h2>
          <p>
            Reno Soluces met en place toutes les mesures nécessaires pour protéger vos informations personnelles 
            contre tout accès non autorisé, perte, modification ou divulgation.
          </p>
        </section>

        {/* Vos droits */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), 
            vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Droit d’accès à vos données personnelles</li>
            <li>Droit de rectification ou de suppression</li>
            <li>Droit d’opposition au traitement de vos données</li>
            <li>Droit à la portabilité de vos informations</li>
          </ul>
          <p className="mt-2">
            Pour exercer vos droits, vous pouvez nous contacter à :{" "}
            <a href="mailto:contact@renosoluces.fr" className="text-green-600 hover:underline">
              contact@renosoluces.fr
            </a>
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
          <p>
            Notre site peut utiliser des cookies afin d’améliorer votre expérience utilisateur 
            et de mesurer l’audience du site. 
            Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté en cas d’utilisation.
          </p>
        </section>

        {/* Responsable */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Responsable du traitement</h2>
          <p>
            Le responsable du traitement de vos données personnelles est :{" "}
            <strong>Reno Soluces – Mme Melissa BENHADDOUCHE</strong>.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default PolitiqueConfidentialite;
