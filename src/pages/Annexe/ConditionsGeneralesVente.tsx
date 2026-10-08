import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ConditionsGeneralesVente: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header activeSection="conditions-generales-vente" onSectionChange={() => {}} onPageChange={onPageChange} />

    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-500 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-100">Information contractuelle</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Conditions générales de vente et de mise en relation</h1>
        <p className="mt-5 text-lg md:text-xl max-w-3xl text-emerald-50">
          Les présentes conditions précisent le rôle de Reno Soluces, les modalités de son accompagnement et les règles applicables aux demandes de mise en relation.
        </p>
      </div>
    </section>

    <main className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-10 py-12 space-y-10 text-gray-800 leading-relaxed">
      <section className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">1. Identité du professionnel</h2>
        <p><strong>RENO SOLUCES</strong>, SASU au capital de 200 €, dont le siège social est situé 24B rue des Remparts, 11160 Trausse, immatriculée au RCS de Carcassonne sous le SIREN 942 475 146.</p>
        <p className="mt-2">TVA intracommunautaire : FR95 942 475 146. Activité déclarée : 70.22Z – Conseil pour les affaires et autres conseils de gestion.</p>
        <p className="mt-2">Contact : <a className="text-emerald-700 underline" href="mailto:contact@renosoluces.fr">contact@renosoluces.fr</a>.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">2. Objet</h2>
        <p>Reno Soluces propose un service d'information, d'accompagnement et de mise en relation entre des particuliers et des professionnels partenaires susceptibles d'intervenir sur des projets de rénovation.</p>
        <p className="mt-3">Reno Soluces n'est pas l'entreprise qui réalise les travaux et ne se substitue pas au professionnel partenaire pour l'étude technique, le devis, le contrat de travaux, les garanties, la réalisation du chantier ou le service après-vente.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">3. Demande de mise en relation</h2>
        <p>La demande effectuée sur le site permet à Reno Soluces de recueillir les informations nécessaires à l'analyse de la demande et, lorsque cela est pertinent, de transmettre les coordonnées et éléments du projet à un professionnel partenaire.</p>
        <p className="mt-3">La demande de contact ou de mise en relation ne constitue pas une commande de travaux et n'engage pas le particulier à accepter un devis ou à conclure un contrat avec un partenaire.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">4. Devis, prix et réalisation des travaux</h2>
        <p>Le professionnel partenaire établit son propre devis et reste seul responsable de son contenu, du prix proposé, des caractéristiques techniques, des délais annoncés et de la réalisation des prestations de travaux.</p>
        <p className="mt-3">Les prix des travaux sont fixés par le professionnel partenaire et doivent être présentés au particulier avant toute conclusion du contrat de travaux. Reno Soluces n'augmente pas le prix facturé par le professionnel au titre de sa rémunération de mise en relation.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">5. Rémunération de Reno Soluces</h2>
        <p>La rémunération de Reno Soluces est convenue avec le professionnel partenaire. Selon le partenariat et le type de produit ou de travaux, elle peut correspondre à un montant fixe ou à un pourcentage du montant hors taxes du devis.</p>
        <p className="mt-3">Cette rémunération n'est due à Reno Soluces que selon les conditions prévues avec le professionnel partenaire, notamment lorsque le chantier est effectivement réalisé. Elle ne constitue pas un supplément ajouté au prix des travaux présenté au particulier.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">6. Informations sur les aides financières</h2>
        <p>Les informations relatives aux aides, primes, taux de TVA ou dispositifs de financement sont communiquées à titre informatif et indicatif. Les règles peuvent évoluer et l'éligibilité dépend de la situation du demandeur, du logement, des travaux, des caractéristiques techniques et des conditions propres à chaque dispositif.</p>
        <p className="mt-3">Une estimation présentée par Reno Soluces ne constitue ni une notification d'aide, ni une garantie d'obtention d'une prime ou d'un financement. Le montant définitif est déterminé après vérification du dossier et des conditions applicables.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">7. Qualifications et professionnels partenaires</h2>
        <p>Lorsqu'une qualification est nécessaire pour bénéficier d'un dispositif, il appartient au professionnel réalisant les travaux de disposer de la qualification correspondant au type de travaux et à l'établissement concerné. Une qualification ne doit pas être interprétée comme générale à toutes les prestations.</p>
        <p className="mt-3">La présence d'un professionnel sur le site ne constitue pas une certification de Reno Soluces et ne dispense pas le consommateur de vérifier les éléments figurant dans le devis et le contrat conclu avec le professionnel.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">8. Responsabilité</h2>
        <p>Reno Soluces met en œuvre des moyens raisonnables pour fournir une information utile et orienter les demandes. Elle ne peut toutefois assurer la conclusion d'un contrat, l'obtention d'une aide, le montant d'une prime, la disponibilité d'un professionnel ou le résultat d'un chantier réalisé par un partenaire.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">9. Données personnelles</h2>
        <p>Les données collectées dans le cadre des demandes sont traitées conformément à la <button className="text-emerald-700 underline" onClick={() => onPageChange('politique-confidentialite')}>Politique de confidentialité</button>. Elles peuvent être transmises aux professionnels partenaires lorsque cette transmission est nécessaire à la mise en relation demandée.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">10. Droit de rétractation</h2>
        <p>Lorsque le droit de rétractation est applicable à une prestation conclue à distance ou hors établissement, le consommateur dispose en principe d'un délai légal de quatorze jours pour se rétracter, dans les conditions prévues par le Code de la consommation.</p>
        <p className="mt-3">Lorsqu'un consommateur demande expressément que la prestation de service commence avant la fin du délai de rétractation, les règles légales relatives au commencement d'exécution et, le cas échéant, à la perte du droit de rétractation après exécution complète s'appliquent.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">11. Réclamations</h2>
        <p>Toute réclamation concernant les services de Reno Soluces peut être adressée en priorité à <a className="text-emerald-700 underline" href="mailto:contact@renosoluces.fr">contact@renosoluces.fr</a>. Elle sera examinée dans les meilleurs délais.</p>
        <p className="mt-3">Lorsque les conditions légales de la médiation de la consommation sont réunies, les informations relatives au médiateur compétent sont communiquées au consommateur conformément à la réglementation applicable.</p>
      </section>

      <section className="pt-4 border-t border-gray-200 text-sm text-gray-500">
        <p>Version mise à jour : 7 octobre 2026.</p>
      </section>
    </main>

    <Footer onPageChange={onPageChange} />
  </div>
);

export default ConditionsGeneralesVente;
