import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface LexiqueItem {
  term: string;
  definition: string;
  category: string;
}

const lexiqueData: LexiqueItem[] = [
  {
    term: "ACCORD DE PARIS",
    definition: "Accord international sur le climat adopté en 2015, visant à limiter le réchauffement climatique à 1,5°C par rapport aux niveaux préindustriels.",
    category: "A"
  },
  {
    term: "ACERMI",
    definition: "Association pour la Certification des Matériaux Isolants. Organisme qui certifie les performances thermiques des isolants.",
    category: "A"
  },
  {
    term: "ADEME",
    definition: "Agence de l'Environnement et de la Maîtrise de l'Énergie. Établissement public qui accompagne la transition écologique et énergétique.",
    category: "A"
  },
  {
    term: "ANAH",
    definition: "Agence Nationale de l'Habitat. Établissement public qui améliore le parc de logements privés existants avec des aides financières.",
    category: "A"
  },
  {
    term: "Architecte des Bâtiments de France",
    definition: "Fonctionnaire chargé de la protection du patrimoine architectural et paysager. Son accord peut être nécessaire pour certains travaux.",
    category: "A"
  },
  {
    term: "Ardoises",
    definition: "Matériau de couverture traditionnel en pierre naturelle, apprécié pour sa durabilité et son esthétique.",
    category: "A"
  },
  {
    term: "ATEE",
    definition: "Association Technique Énergie Environnement. Organisation professionnelle qui promeut les technologies énergétiques efficaces.",
    category: "A"
  },
  {
    term: "Bande de Rive",
    definition: "Élément de finition placé en bordure de toiture pour protéger et habiller les rives du toit.",
    category: "B"
  },
  {
    term: "Bardage",
    definition: "Revêtement extérieur de façade, souvent utilisé dans l'isolation thermique par l'extérieur pour la finition.",
    category: "B"
  },
  {
    term: "Bâtiment à énergie positive",
    definition: "Bâtiment qui produit plus d'énergie qu'il n'en consomme grâce aux énergies renouvelables et à une conception optimisée.",
    category: "B"
  },
  {
    term: "Béton Cellulaire",
    definition: "Matériau de construction léger et isolant, composé de béton et de bulles d'air, offrant de bonnes performances thermiques.",
    category: "B"
  },
  {
    term: "Bilan carbone",
    definition: "Évaluation des émissions de gaz à effet de serre d'une activité, d'un produit ou d'un bâtiment sur son cycle de vie.",
    category: "B"
  },
  {
    term: "Cadre de contribution CEE",
    definition: "Dispositif réglementaire qui définit les obligations des fournisseurs d'énergie en matière de Certificats d'Économies d'Énergie.",
    category: "C"
  },
  {
    term: "Calepinage",
    definition: "Plan détaillé de pose des panneaux solaires sur une toiture, optimisant l'implantation selon les contraintes techniques.",
    category: "C"
  },
  {
    term: "Cellule photovoltaïque",
    definition: "Composant élémentaire d'un panneau solaire qui convertit directement la lumière en électricité par effet photovoltaïque.",
    category: "C"
  },
  {
    term: "Cellules solaires en couche mince",
    definition: "Technologie photovoltaïque utilisant des couches très fines de matériaux semi-conducteurs, plus flexible mais moins efficace.",
    category: "C"
  },
  {
    term: "Certirenov'",
    definition: "Plateforme de certification des entreprises de rénovation énergétique, garantissant leur qualification et leur sérieux.",
    category: "C"
  },
  {
    term: "Chauffage gainable",
    definition: "Système de chauffage centralisé qui distribue l'air chaud via des gaines dissimulées dans les cloisons ou combles.",
    category: "C"
  },
  {
    term: "Classes énergies",
    definition: "Classification du DPE de A (très économe) à G (très énergivore) indiquant la performance énergétique d'un logement.",
    category: "C"
  },
  {
    term: "Commission de Régulation de l'Energie (CRE)",
    definition: "Autorité administrative indépendante qui régule les marchés de l'électricité et du gaz en France.",
    category: "C"
  },
  {
    term: "Courant monophasé",
    definition: "Type de courant électrique alternatif utilisant une seule phase, standard pour les installations domestiques jusqu'à 12 kVA.",
    category: "C"
  },
  {
    term: "Courant triphasé",
    definition: "Type de courant électrique utilisant trois phases, utilisé pour les installations de forte puissance ou les pompes à chaleur.",
    category: "C"
  },
  {
    term: "Crédit d'impôt transition énergétique CITE",
    definition: "Ancien dispositif fiscal remplacé par MaPrimeRénov', qui permettait de déduire des impôts une partie des dépenses de rénovation.",
    category: "C"
  },
  {
    term: "Définition de la déclaration préalable de travaux",
    definition: "Autorisation d'urbanisme obligatoire pour certains travaux de rénovation, notamment l'isolation extérieure ou les panneaux solaires.",
    category: "D"
  },
  {
    term: "Déperdition thermique",
    definition: "Perte de chaleur d'un bâtiment vers l'extérieur, principalement par les murs, toiture, fenêtres et ponts thermiques.",
    category: "D"
  },
  {
    term: "Double vitrage",
    definition: "Fenêtre composée de deux vitres séparées par une lame d'air ou de gaz, améliorant l'isolation thermique et acoustique.",
    category: "D"
  },
  {
    term: "EcoWatt",
    definition: "Service de RTE qui informe en temps réel sur le niveau de consommation électrique français et les risques de coupure.",
    category: "E"
  },
  {
    term: "Etas",
    definition: "Efficacité Énergétique Saisonnière. Indicateur de performance des systèmes de chauffage sur une saison complète.",
    category: "E"
  },
  {
    term: "Énergie solaire thermique",
    definition: "Technologie qui utilise le rayonnement solaire pour produire de la chaleur, notamment pour l'eau chaude sanitaire.",
    category: "É"
  },
  {
    term: "Facture énergétique",
    definition: "Montant total des dépenses d'énergie d'un ménage (électricité, gaz, fioul, bois) sur une période donnée.",
    category: "F"
  },
  {
    term: "Faîtage",
    definition: "Ligne de crête d'un toit, point le plus haut de la toiture où se rejoignent les deux versants.",
    category: "F"
  },
  {
    term: "Fibrociment",
    definition: "Matériau de construction composé de ciment et de fibres, utilisé notamment pour les plaques de couverture.",
    category: "F"
  },
  {
    term: "Garantie décennale",
    definition: "Assurance obligatoire des constructeurs couvrant pendant 10 ans les dommages compromettant la solidité ou l'habitabilité.",
    category: "G"
  },
  {
    term: "Greentech",
    definition: "Technologies vertes visant à réduire l'impact environnemental et à améliorer l'efficacité énergétique.",
    category: "G"
  },
  {
    term: "Habiter Mieux Sérénité",
    definition: "Ancien programme de l'ANAH remplacé par MaPrimeRénov' Sérénité, aidant les ménages modestes dans leurs travaux de rénovation.",
    category: "H"
  },
  {
    term: "IGN FAB",
    definition: "Service de l'Institut Géographique National proposant des données cartographiques pour l'analyse du potentiel solaire.",
    category: "I"
  },
  {
    term: "Kilovoltampère",
    definition: "Unité de mesure de la puissance électrique apparente, utilisée pour dimensionner les installations électriques.",
    category: "K"
  },
  {
    term: "Kilowatt crête",
    definition: "Unité de mesure de la puissance maximale d'un panneau solaire dans des conditions d'ensoleillement optimales.",
    category: "K"
  },
  {
    term: "kWc Cumac",
    definition: "Unité de mesure des économies d'énergie cumulées et actualisées, utilisée pour calculer les Certificats d'Économies d'Énergie.",
    category: "K"
  },
  {
    term: "La Loi Energie Climat",
    definition: "Loi française de 2019 fixant les objectifs de neutralité carbone à l'horizon 2050 et encadrant la transition énergétique.",
    category: "L"
  },
  {
    term: "La Stratégie Nationale Bas Carbone",
    definition: "Feuille de route française pour réduire les émissions de gaz à effet de serre et atteindre la neutralité carbone.",
    category: "L"
  },
  {
    term: "Le pacte vert pour l'Europe",
    definition: "Stratégie européenne visant à faire de l'Europe le premier continent neutre en carbone d'ici 2050.",
    category: "L"
  },
  {
    term: "Loi POPE",
    definition: "Loi de Programmation fixant les Orientations de la Politique Énergétique, qui a créé le dispositif des CEE en 2005.",
    category: "L"
  },
  {
    term: "Maison indépendante",
    definition: "Habitation individuelle non mitoyenne, entourée de terrain sur tous les côtés.",
    category: "M"
  },
  {
    term: "Maison mitoyenne",
    definition: "Habitation individuelle partageant un ou plusieurs murs avec les propriétés voisines.",
    category: "M"
  },
  {
    term: "neutralité carbone",
    definition: "Équilibre entre les émissions de gaz à effet de serre et leur absorption par des puits de carbone naturels ou artificiels.",
    category: "N"
  },
  {
    term: "Onduleur Centralisé",
    definition: "Équipement qui convertit le courant continu des panneaux solaires en courant alternatif, installé de manière centralisée.",
    category: "O"
  },
  {
    term: "Orée",
    definition: "Association multi-acteurs qui œuvre pour l'intégration de l'environnement et du développement durable dans les stratégies d'entreprise.",
    category: "O"
  },
  {
    term: "Panne",
    definition: "Élément de charpente horizontal qui supporte la couverture et sur lequel sont fixés les panneaux solaires.",
    category: "P"
  },
  {
    term: "Part Fiscale",
    definition: "Unité de calcul utilisée pour déterminer le quotient familial dans le calcul de l'impôt sur le revenu.",
    category: "P"
  },
  {
    term: "Pellet",
    definition: "Granulé de bois compressé utilisé comme combustible dans les poêles et chaudières biomasse.",
    category: "P"
  },
  {
    term: "PNCEE",
    definition: "Pôle National des Certificats d'Économies d'Énergie, qui gère le registre national des CEE.",
    category: "P"
  },
  {
    term: "Polystyrène expansé",
    definition: "Matériau isolant synthétique léger et économique, couramment utilisé pour l'isolation thermique.",
    category: "P"
  },
  {
    term: "Pompe à chaleur à aérothermie",
    definition: "Système qui puise les calories dans l'air extérieur pour chauffer un logement (Air/Air ou Air/Eau).",
    category: "P"
  },
  {
    term: "Pompe à chaleur à géothermie",
    definition: "Système qui utilise la chaleur du sol ou de l'eau souterraine pour chauffer un logement.",
    category: "P"
  },
  {
    term: "Pompe à chaleur hydrothermique",
    definition: "Système qui puise les calories dans l'eau (nappe phréatique, lac, rivière) pour chauffer un logement.",
    category: "P"
  },
  {
    term: "Pompe à Chaleur Monobloc",
    definition: "PAC dont tous les composants frigorifiques sont regroupés dans l'unité extérieure, seule l'eau circule vers l'intérieur.",
    category: "P"
  },
  {
    term: "Pont thermique",
    definition: "Zone de rupture dans l'isolation thermique d'un bâtiment, créant une déperdition de chaleur localisée.",
    category: "P"
  },
  {
    term: "Programme Advenir",
    definition: "Programme de financement des infrastructures de recharge pour véhicules électriques, géré par l'AVERE-France.",
    category: "P"
  },
  {
    term: "Qualibat",
    definition: "Organisme de qualification du bâtiment qui certifie les compétences techniques des entreprises du secteur.",
    category: "Q"
  },
  {
    term: "Qualification RGE Qualisol",
    definition: "Certification RGE spécifique aux installations solaires thermiques (chauffe-eau solaire, système solaire combiné).",
    category: "Q"
  },
  {
    term: "Qualit'EnR",
    definition: "Association qui développe la qualité d'installation des systèmes à énergies renouvelables et délivre les qualifications RGE.",
    category: "Q"
  },
  {
    term: "Rampant de toiture",
    definition: "Surface inclinée d'un toit, partie de la toiture comprise entre l'égout et le faîtage.",
    category: "R"
  },
  {
    term: "Resistance thermique",
    definition: "Capacité d'un matériau à résister au passage de la chaleur, exprimée en m².K/W. Plus elle est élevée, plus l'isolation est efficace.",
    category: "R"
  },
  {
    term: "RFR",
    definition: "Revenu Fiscal de Référence. Montant utilisé pour déterminer l'éligibilité aux aides publiques comme MaPrimeRénov'.",
    category: "R"
  },
  {
    term: "RGE",
    definition: "Reconnu Garant de l'Environnement. Label qualité des entreprises du bâtiment spécialisées dans l'efficacité énergétique.",
    category: "R"
  },
  {
    term: "RGE Qualibois",
    definition: "Certification RGE spécifique aux installations de chauffage au bois (poêles, chaudières, inserts).",
    category: "R"
  },
  {
    term: "Simple Vitrage",
    definition: "Fenêtre composée d'une seule vitre, offrant une isolation thermique et acoustique limitée.",
    category: "S"
  },
  {
    term: "THPE",
    definition: "Très Haute Performance Énergétique. Label désignant les bâtiments ayant une consommation énergétique très faible.",
    category: "T"
  },
  {
    term: "Tracker Solaire",
    definition: "Système motorisé qui oriente automatiquement les panneaux solaires vers le soleil pour optimiser la production.",
    category: "T"
  },
  {
    term: "Triple vitrage",
    definition: "Fenêtre composée de trois vitres séparées par deux lames d'air ou de gaz, offrant une isolation thermique renforcée.",
    category: "T"
  },
  {
    term: "Tuile canal",
    definition: "Type de tuile traditionnelle en forme de gouttière, typique des régions méditerranéennes.",
    category: "T"
  },
  {
    term: "Tuile mécanique",
    definition: "Tuile moderne avec système d'emboîtement, assurant une étanchéité optimale et une pose rapide.",
    category: "T"
  },
  {
    term: "Tuile Plate",
    definition: "Type de tuile de forme rectangulaire, utilisée traditionnellement dans certaines régions françaises.",
    category: "T"
  },
  {
    term: "TURPE",
    definition: "Tarif d'Utilisation des Réseaux Publics d'Électricité. Tarif réglementé pour l'acheminement de l'électricité.",
    category: "T"
  },
  {
    term: "Vide sanitaire",
    definition: "Espace vide entre le sol naturel et le plancher d'un bâtiment, permettant l'isolation et évitant les remontées d'humidité.",
    category: "V"
  },
  {
    term: "Watt",
    definition: "Unité de mesure de la puissance électrique. Un kilowatt (kW) = 1000 watts.",
    category: "W"
  }
];

const categories = ["Tous", "A", "B", "C", "D", "E", "É", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W"];

const Lexique: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = lexiqueData.filter(item => {
    const matchesCategory = selectedCategory === "Tous" || item.category === selectedCategory;
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="lexique" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Lexique de la rénovation énergétique
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Retrouvez toutes les définitions des termes techniques liés à la rénovation énergétique, 
            au photovoltaïque et aux aides financières.
          </p>
        </div>
      </section>

      {/* Barre de recherche */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative w-full max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Recherchez un sujet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Filtres alphabétiques */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu du lexique */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {filteredTerms.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Aucun terme trouvé pour cette recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {item.term}
                  </h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium flex-shrink-0 ml-2">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-emerald-900 text-white p-12 rounded-2xl text-center shadow-xl mt-16">
          <h2 className="text-3xl font-bold mb-4">Une question sur un terme technique ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nos éco-techniciens sont à votre disposition pour vous expliquer tous les aspects 
            techniques de votre projet de rénovation énergétique.
          </p>
          <button
            onClick={() => onPageChange("contact")}
            className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            💬 Nous contacter
          </button>
        </section>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default Lexique;