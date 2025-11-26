import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MentionsLegales: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header activeSection="mentions-legales" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions légales</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Conformément aux articles 6-III et 19 de la Loi pour la Confiance dans l’Économie Numérique (LCEN), 
          nous vous communiquons les informations légales concernant le site de Reno Soluces.
        </p>
      </section>

      {/* Contenu principal */}
      <main className="flex-1 container mx-auto px-6 md:px-16 py-12 space-y-12 text-gray-800">
        {/* Identification */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Identification de l’éditeur</h2>
          <p><strong>Dénomination sociale :</strong> RENO SOLUCES</p>
          <p><strong>Forme juridique :</strong> SASU</p>
          <p><strong>Capital social :</strong> 200 €</p>
          <p><strong>Siège social :</strong> 24B rue des Remparts, 11160 Trausse</p>
          <p><strong>SIREN :</strong> 942 475 146</p>
          <p><strong>RCS :</strong> Carcassonne</p>
          <p><strong>Numéro de TVA intracommunautaire :</strong> FR95 942 475 146</p>
          <p><strong>Activité (APE) :</strong> 70.22Z – Conseil pour les affaires et autres conseils de gestion</p>
          <p><strong>Directrice de la publication :</strong> Mme Melissa BENHADDOUCHE</p>
        </section>

        {/* Hébergeur */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
          <p><strong>Hébergeur :</strong> Amen SASU</p>
          <p><strong>Adresse :</strong> 12-14 Rond-Point des Champs-Élysées, 75008 Paris</p>
          <p><strong>Site internet :</strong> <a href="https://www.amen.fr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.amen.fr</a></p>
        </section>

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p>
            Le présent site et l’ensemble de son contenu (textes, images, graphismes, logo, vidéos, architecture, code, etc.)
            sont la propriété exclusive de Reno Soluces. 
            Toute reproduction, représentation, modification, publication, adaptation totale ou partielle de ses éléments, 
            quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
          </p>
        </section>

        {/* Protection des données */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Protection des données personnelles</h2>
          <p>
            Reno Soluces collecte et traite les données personnelles uniquement dans le cadre de la relation client 
            (demandes d’informations, accompagnement de projet, suivi de travaux, etc.). 
            Conformément au Règlement Général sur la Protection des Données (RGPD), 
            vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition 
            concernant vos informations personnelles.
          </p>
          <p className="mt-2">
            Vous pouvez exercer vos droits en nous contactant à l’adresse suivante : 
            <a href="mailto:contact@renosoluces.fr" className="text-green-600 hover:underline"> contact@renosoluces.fr</a>.
          </p>
        </section>

        {/* Responsabilité */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
          <p>
            Reno Soluces s’efforce de fournir sur ce site des informations fiables et régulièrement mises à jour. 
            Toutefois, des erreurs ou omissions peuvent survenir. 
            L’utilisateur du site reconnaît utiliser les informations données sous sa responsabilité exclusive. 
            Reno Soluces ne pourra en aucun cas être tenue responsable de dommages directs ou indirects 
            résultant de l’utilisation du site ou de l’impossibilité d’y accéder.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default MentionsLegales;
