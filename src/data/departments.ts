import type { DepartmentContent } from '../components/DepartmentPage';
import Panneaux2 from '../assets/Panneaux2.webp';
import Herault from '../assets/Herault.webp';
import Panneaux1 from '../assets/Panneaux1.webp';
import HauteGaronne from '../assets/HauteGaronne.webp';
import Projet4 from '../assets/Projet4.webp';

const ROLE =
  'Reno Soluces vous aide à définir le bon projet, puis vous oriente vers un professionnel qualifié pour les travaux concernés. L’étude technique, le devis et le chantier sont assurés par ce partenaire.';

const TOWNS_NOTE =
  'Liste indicative. La disponibilité d’un partenaire dépend de votre commune et du type de travaux : nous vous la confirmons après l’étude de votre demande.';

const FREE_FAQ = {
  question: 'La mise en relation est-elle payante ?',
  answer:
    'Non. La demande et la mise en relation sont gratuites et sans engagement pour le particulier. Reno Soluces est rémunéré par le professionnel partenaire selon des conditions définies avec lui. Vous restez libre d’accepter ou non le devis proposé.',
};

export const DEPARTMENTS: Record<string, DepartmentContent> = {
  aude: {
    name: 'Aude',
    inName: 'dans l’Aude',
    code: '11',
    image: Panneaux2,
    imageAlt: 'Panneaux solaires posés sur une toiture en tuiles canal, typique de l’Aude',
    intro: [
      'Basé à Trausse, dans le Minervois, Reno Soluces étudie vos projets de panneaux solaires, de pompe à chaleur et d’isolation dans l’Aude, puis vous met en relation avec un professionnel partenaire de votre secteur.',
      'Entre la plaine narbonnaise, le Minervois, les Corbières, le Lauragais et la Haute Vallée de l’Aude, les maisons du département n’ont ni le même climat ni la même construction. Une maison de village en pierre à Caunes-Minervois ne se rénove pas comme un pavillon des années 1980 en périphérie de Carcassonne.',
      ROLE,
    ],
    context: [
      {
        title: 'Des étés chauds et longs',
        text: 'Les épisodes de forte chaleur se multiplient. L’isolation de la toiture, de préférence avec un isolant dense, et les protections solaires extérieures sont souvent les premiers leviers de confort, avant la climatisation.',
      },
      {
        title: 'Le Cers et le Marin',
        text: 'Le vent est une donnée locale à part entière : fixation des panneaux solaires, emplacement de l’unité extérieure d’une pompe à chaleur à l’abri du vent dominant, traitement des infiltrations d’air.',
      },
      {
        title: 'Un ensoleillement favorable au solaire',
        text: 'Avec plus de 2 000 heures de soleil par an en moyenne, l’Aude se prête bien au photovoltaïque. Depuis 2026, l’intérêt d’une installation dépend surtout de la part de production consommée sur place.',
      },
      {
        title: 'Un bâti ancien et des sites protégés',
        text: 'Maisons de village aux murs épais, centres anciens, abords de la Cité de Carcassonne ou du canal du Midi : les matériaux doivent respecter le bâti, et certains travaux visibles nécessitent l’avis de l’architecte des Bâtiments de France.',
      },
      {
        title: 'Des hivers contrastés',
        text: 'Doux en plaine, les hivers sont plus marqués dans le Lauragais, sur la Montagne Noire ou dans le Pays de Sault. Une pompe à chaleur se dimensionne selon la température de référence de votre commune.',
      },
      {
        title: 'Zone climatique H3',
        text: 'L’Aude est classée dans la zone climatique la plus chaude. Cela influence le calcul de certaines primes CEE et le dimensionnement des équipements de chauffage et de rafraîchissement.',
      },
    ],
    priorities: [
      {
        page: 'isolation-combles',
        title: 'Isolation des combles',
        text: 'Le premier poste à étudier, contre le froid en hiver comme contre la chaleur sous les toits en été.',
      },
      {
        page: 'panneaux-photovoltaiques',
        title: 'Panneaux photovoltaïques',
        text: 'Un ensoleillement généreux, à valoriser avec une installation dimensionnée sur votre consommation en journée.',
      },
      {
        page: 'pompe-chaleur-air-eau',
        title: 'Pompe à chaleur air/eau',
        text: 'Pour remplacer une chaudière au fioul ou au gaz sur un réseau de radiateurs ou un plancher chauffant.',
      },
      {
        page: 'chauffe-eau-thermodynamique',
        title: 'Chauffe-eau thermodynamique',
        text: 'Une eau chaude économe, qui peut consommer la production solaire en milieu de journée.',
      },
    ],
    towns: [
      'Carcassonne', 'Narbonne', 'Castelnaudary', 'Limoux', 'Lézignan-Corbières', 'Trèbes', 'Coursan',
      'Capendu', 'Conques-sur-Orbiel', 'Pennautier', 'Bram', 'Quillan', 'Sigean', 'Port-la-Nouvelle',
      'Gruissan', 'Leucate', 'Caunes-Minervois', 'Rieux-Minervois', 'Peyriac-Minervois',
      'Villeneuve-Minervois', 'Trausse',
    ],
    townsNote: TOWNS_NOTE,
    faq: [
      {
        question: 'Où se trouve Reno Soluces ?',
        answer:
          'Notre siège est au 24 B rue des Remparts à Trausse, dans le Minervois, entre Carcassonne et Narbonne. Les demandes se font en ligne ou par téléphone ; c’est le professionnel partenaire qui se déplace chez vous pour étudier le chantier.',
      },
      {
        question: 'Faut-il une autorisation pour poser des panneaux solaires près de la Cité ou du canal du Midi ?',
        answer:
          'Une déclaration préalable de travaux en mairie est nécessaire pour poser des panneaux solaires. Dans les abords d’un monument historique ou d’un site protégé, l’accord de l’architecte des Bâtiments de France est requis et peut imposer des contraintes d’aspect. Le plan local d’urbanisme de votre commune précise les règles.',
      },
      {
        question: 'Une pompe à chaleur est-elle adaptée au climat audois ?',
        answer:
          'Oui dans la plupart des cas. En plaine, les hivers doux sont favorables à la performance des pompes à chaleur. En altitude, le dimensionnement doit tenir compte de températures plus basses et prévoir un appoint adapté. Dans tous les cas, le calcul repose sur les déperditions du logement.',
      },
      FREE_FAQ,
    ],
  },

  herault: {
    name: 'Hérault',
    inName: 'dans l’Hérault',
    code: '34',
    image: Herault,
    imageAlt: 'Maison avec terrasse dans l’Hérault',
    intro: [
      'Panneaux solaires, pompe à chaleur, isolation : Reno Soluces étudie votre projet de rénovation énergétique dans l’Hérault et vous oriente vers un professionnel partenaire qui intervient sur votre secteur.',
      'Du littoral de Sète et d’Agde à l’agglomération de Montpellier, du Biterrois aux contreforts du Haut-Languedoc et du Larzac, l’Hérault réunit des situations très différentes : appartements en copropriété, villas récentes, maisons vigneronnes et villages de l’arrière-pays.',
      ROLE,
    ],
    context: [
      {
        title: 'Chaleur estivale et îlots de chaleur',
        text: 'En ville comme dans les villages, les étés chauds rendent le confort d’été prioritaire : isolation de la toiture, protections solaires extérieures, puis rafraîchissement raisonné.',
      },
      {
        title: 'Des pluies intenses à l’automne',
        text: 'Les épisodes méditerranéens rappellent l’importance d’une toiture étanche. Les fuites se traitent avant toute isolation, et les fixations des panneaux solaires doivent préserver l’étanchéité.',
      },
      {
        title: 'De nombreuses copropriétés',
        text: 'Autour de Montpellier, beaucoup de logements sont en copropriété. Une unité extérieure en façade ou sur un balcon, comme une isolation des murs, peut nécessiter l’accord de l’assemblée générale.',
      },
      {
        title: 'Un arrière-pays plus froid',
        text: 'Dans le Haut-Languedoc, l’Escandorgue ou sur le Larzac, les hivers sont nettement plus marqués que sur le littoral. Le chauffage redevient alors le premier poste à étudier.',
      },
    ],
    priorities: [
      {
        page: 'pompe-chaleur-air-air',
        title: 'Climatisation réversible',
        text: 'Adaptée aux logements chauffés à l’électricité, pour chauffer en hiver et rafraîchir pendant les fortes chaleurs.',
      },
      {
        page: 'isolation-combles',
        title: 'Isolation des combles',
        text: 'Le levier le plus efficace contre la chaleur sous les toits, et le premier poste d’économies en hiver.',
      },
      {
        page: 'panneaux-photovoltaiques',
        title: 'Panneaux photovoltaïques',
        text: 'Un ensoleillement favorable, à exploiter avec une étude d’ombrage soignée en zone urbaine dense.',
      },
      {
        page: 'chauffe-eau-thermodynamique',
        title: 'Chauffe-eau thermodynamique',
        text: 'Une alternative économe au ballon électrique classique, notamment dans un garage ou un cellier tempéré.',
      },
    ],
    towns: [
      'Montpellier', 'Béziers', 'Sète', 'Agde', 'Lunel', 'Frontignan', 'Castelnau-le-Lez', 'Lattes',
      'Mauguio', 'Pérols', 'Saint-Jean-de-Védas', 'Pézenas', 'Clermont-l’Hérault', 'Lodève', 'Bédarieux',
      'Saint-Chinian', 'Saint-Pons-de-Thomières', 'Olonzac',
    ],
    townsNote: TOWNS_NOTE,
    faq: [
      {
        question: 'Peut-on installer une climatisation réversible en copropriété ?',
        answer:
          'Souvent oui, mais l’unité extérieure modifie l’aspect de l’immeuble ou utilise des parties communes : l’accord de l’assemblée générale des copropriétaires est généralement nécessaire. Consultez le règlement de copropriété et prévoyez la demande avant de signer un devis.',
      },
      {
        question: 'Des panneaux solaires sont-ils intéressants en ville ?',
        answer:
          'L’ensoleillement est favorable, mais les ombres portées par les bâtiments voisins, les arbres ou les cheminées peuvent réduire fortement la production. Une étude d’ombrage et, si besoin, des micro-onduleurs permettent d’en tenir compte.',
      },
      {
        question: 'Faut-il attendre la fin de l’automne pour isoler ?',
        answer:
          'Non, mais l’étanchéité de la toiture doit être vérifiée avant les travaux, et les chantiers de couverture ou d’isolation par l’extérieur se planifient en évitant les périodes de fortes pluies.',
      },
      FREE_FAQ,
    ],
  },

  'pyrenees-orientales': {
    name: 'Pyrénées-Orientales',
    inName: 'dans les Pyrénées-Orientales',
    code: '66',
    image: Panneaux1,
    imageAlt: 'Installation de panneaux solaires sur une toiture en tuiles',
    intro: [
      'Reno Soluces étudie vos projets de panneaux solaires, de pompe à chaleur et d’isolation dans les Pyrénées-Orientales, puis vous met en relation avec un professionnel partenaire qui intervient sur votre secteur.',
      'Plaine du Roussillon, Côte Vermeille, Aspres, Conflent, Cerdagne et Capcir : dans les Pyrénées-Orientales, on passe en moins d’une heure d’un climat très ensoleillé et sec à un climat de montagne aux hivers rigoureux. Les priorités de rénovation changent en conséquence.',
      ROLE,
    ],
    context: [
      {
        title: 'Un ensoleillement exceptionnel',
        text: 'La plaine du Roussillon compte parmi les secteurs les plus ensoleillés de France. Le photovoltaïque y est pertinent, à condition de dimensionner l’installation sur la consommation du foyer.',
      },
      {
        title: 'La tramontane',
        text: 'Ce vent fréquent et souvent violent impose des fixations de panneaux calculées pour la zone de vent, un emplacement abrité pour l’unité extérieure d’une pompe à chaleur et une bonne étanchéité à l’air du logement.',
      },
      {
        title: 'Sécheresse et fortes chaleurs',
        text: 'Les étés chauds et secs font du confort d’été un enjeu majeur : isolation dense de la toiture, protections solaires, ventilation nocturne, puis rafraîchissement si nécessaire.',
      },
      {
        title: 'La montagne : Conflent, Cerdagne, Capcir',
        text: 'En altitude, le chauffage redevient le premier poste. Isolation renforcée, pompe à chaleur adaptée aux basses températures et prise en compte des charges de neige sur les toitures sont indispensables.',
      },
    ],
    priorities: [
      {
        page: 'panneaux-photovoltaiques',
        title: 'Panneaux photovoltaïques',
        text: 'Un potentiel solaire parmi les meilleurs de France, à valoriser en autoconsommation.',
      },
      {
        page: 'isolation-combles',
        title: 'Isolation des combles',
        text: 'Indispensable contre la chaleur en plaine comme contre le froid en altitude.',
      },
      {
        page: 'pompe-chaleur-air-air',
        title: 'Climatisation réversible',
        text: 'Pour les logements chauffés à l’électricité de la plaine et du littoral, qui ont besoin de fraîcheur l’été.',
      },
      {
        page: 'pompe-chaleur-air-eau',
        title: 'Pompe à chaleur air/eau',
        text: 'Pour remplacer une chaudière, avec un dimensionnement adapté au climat de montagne si nécessaire.',
      },
    ],
    towns: [
      'Perpignan', 'Canet-en-Roussillon', 'Saint-Cyprien', 'Argelès-sur-Mer', 'Elne', 'Rivesaltes',
      'Saint-Estève', 'Cabestany', 'Thuir', 'Céret', 'Le Boulou', 'Ille-sur-Têt', 'Prades',
      'Font-Romeu-Odeillo-Via', 'Bourg-Madame',
    ],
    townsNote: TOWNS_NOTE,
    faq: [
      {
        question: 'Les panneaux solaires résistent-ils à la tramontane ?',
        answer:
          'Oui, à condition que le système de fixation soit dimensionné pour la zone de vent et la configuration de la toiture, selon les prescriptions du fabricant. Demandez à l’installateur comment ce point est pris en compte dans son étude.',
      },
      {
        question: 'Une pompe à chaleur fonctionne-t-elle en Cerdagne ?',
        answer:
          'Oui, mais le choix et le dimensionnement doivent tenir compte des températures très basses : puissance disponible par grand froid, modèle adapté et appoint. L’isolation du logement est d’autant plus importante en montagne.',
      },
      {
        question: 'Comment garder une maison fraîche sans climatiser en permanence ?',
        answer:
          'Isoler la toiture avec un isolant dense, protéger les fenêtres du soleil par l’extérieur et ventiler la nuit permettent de limiter fortement la chaleur. La climatisation intervient ensuite en complément, avec une consigne raisonnable.',
      },
      FREE_FAQ,
    ],
  },

  'haute-garonne': {
    name: 'Haute-Garonne',
    inName: 'en Haute-Garonne',
    code: '31',
    image: HauteGaronne,
    imageAlt: 'Maison équipée de panneaux solaires en Haute-Garonne',
    intro: [
      'Reno Soluces étudie vos projets de pompe à chaleur, d’isolation et de panneaux solaires en Haute-Garonne et vous oriente vers un professionnel partenaire qui intervient sur votre secteur.',
      'De Toulouse et sa périphérie au Lauragais, du Comminges aux vallées pyrénéennes du Luchonnais, la Haute-Garonne mêle maisons toulousaines en brique, pavillons des années 1960 à 1990, résidences récentes et maisons de montagne.',
      ROLE,
    ],
    context: [
      {
        title: 'Un climat de transition',
        text: 'Les hivers sont plus frais qu’en bord de Méditerranée et les étés souvent chauds. Le chauffage reste le premier poste de dépense, et le confort d’été gagne en importance.',
      },
      {
        title: 'Le vent d’Autan',
        text: 'Ce vent de sud-est, parfois violent, est à prendre en compte pour l’emplacement des unités extérieures et la fixation des équipements en toiture.',
      },
      {
        title: 'La brique toulousaine',
        text: 'Les murs en brique foraine des maisons anciennes demandent des solutions d’isolation qui respectent leur comportement à l’humidité. En secteur protégé, l’aspect des façades est encadré.',
      },
      {
        title: 'Un parc pavillonnaire à moderniser',
        text: 'De nombreuses maisons des années 1960 à 1990 sont chauffées au gaz ou à l’électricité avec une isolation d’origine : combles, chauffage et menuiseries sont souvent les premiers postes à étudier.',
      },
    ],
    priorities: [
      {
        page: 'pompe-chaleur-air-eau',
        title: 'Pompe à chaleur air/eau',
        text: 'Pour remplacer une chaudière au gaz ou au fioul, en réutilisant les radiateurs existants lorsque c’est possible.',
      },
      {
        page: 'isolation-combles',
        title: 'Isolation des combles',
        text: 'Le premier poste d’économies dans les pavillons à l’isolation d’origine.',
      },
      {
        page: 'isolation-exterieur',
        title: 'Isolation par l’extérieur',
        text: 'Pour traiter les ponts thermiques des maisons des années 1960 à 1980, hors secteurs où l’aspect des façades est protégé.',
      },
      {
        page: 'panneaux-photovoltaiques',
        title: 'Panneaux photovoltaïques',
        text: 'Un complément pertinent lorsque la consommation est maîtrisée et qu’une partie peut être pilotée en journée.',
      },
    ],
    towns: [
      'Toulouse', 'Colomiers', 'Tournefeuille', 'Blagnac', 'Muret', 'Balma', 'L’Union',
      'Ramonville-Saint-Agne', 'Saint-Orens-de-Gameville', 'Castanet-Tolosan', 'Villefranche-de-Lauragais',
      'Revel', 'Saint-Gaudens', 'Bagnères-de-Luchon',
    ],
    townsNote: TOWNS_NOTE,
    faq: [
      {
        question: 'Peut-on isoler par l’extérieur une maison en brique toulousaine ?',
        answer:
          'C’est possible, mais la brique ancienne a besoin d’échanger l’humidité avec l’air : les isolants et enduits doivent être choisis en conséquence. En secteur protégé, l’isolation par l’extérieur peut être refusée sur les façades de caractère ; l’isolation des combles et des planchers reste alors prioritaire.',
      },
      {
        question: 'Faut-il changer les radiateurs pour installer une pompe à chaleur air/eau ?',
        answer:
          'Pas toujours. Tout dépend de la température d’eau nécessaire pour chauffer le logement. Après une isolation des combles, des radiateurs existants peuvent souvent fonctionner à plus basse température. Le professionnel le vérifie lors du dimensionnement.',
      },
      FREE_FAQ,
    ],
  },

  ariege: {
    name: 'Ariège',
    inName: 'en Ariège',
    code: '09',
    image: Projet4,
    imageAlt: 'Combles isolés d’une maison individuelle',
    intro: [
      'Reno Soluces étudie vos projets d’isolation, de pompe à chaleur et de panneaux solaires en Ariège et vous oriente vers un professionnel partenaire qui intervient sur votre secteur.',
      'De la plaine de Pamiers et de Mirepoix aux vallées du Couserans et de la Haute-Ariège, le département compte de nombreuses maisons anciennes en pierre et des hivers plus rigoureux qu’en plaine languedocienne. Isolation et chauffage y sont souvent les premières priorités.',
      ROLE,
    ],
    context: [
      {
        title: 'Des hivers plus marqués',
        text: 'En montagne et dans les vallées, le chauffage représente l’essentiel de la consommation. Réduire les besoins par l’isolation permet ensuite de choisir un système de chauffage plus petit et plus efficace.',
      },
      {
        title: 'Un bâti ancien en pierre',
        text: 'Les murs épais en pierre ont une forte inertie mais sont sensibles à l’humidité. Les isolants et enduits doivent rester perméables à la vapeur d’eau, et la ventilation doit être soignée.',
      },
      {
        title: 'Fioul et bois encore fréquents',
        text: 'De nombreux logements sont chauffés au fioul. Son remplacement par une pompe à chaleur doit être dimensionné pour les températures locales, avec un appoint adapté.',
      },
      {
        title: 'Un ensoleillement à vérifier vallée par vallée',
        text: 'Le relief peut masquer le soleil une partie de la journée, surtout en hiver. Une étude d’ombrage précise est indispensable avant un projet photovoltaïque.',
      },
    ],
    priorities: [
      {
        page: 'isolation-combles',
        title: 'Isolation des combles',
        text: 'Le premier poste à traiter pour réduire les besoins de chauffage.',
      },
      {
        page: 'pompe-chaleur-air-eau',
        title: 'Pompe à chaleur air/eau',
        text: 'Pour remplacer une chaudière au fioul, avec un dimensionnement adapté aux hivers ariégeois.',
      },
      {
        page: 'isolation-sous-sol',
        title: 'Isolation du plancher bas',
        text: 'Pour les maisons sur cave, garage ou vide sanitaire, où le sol du rez-de-chaussée reste froid.',
      },
      {
        page: 'panneaux-photovoltaiques',
        title: 'Panneaux photovoltaïques',
        text: 'Pertinents sur les toitures bien dégagées, après une étude des masques liés au relief.',
      },
    ],
    towns: [
      'Foix', 'Pamiers', 'Saint-Girons', 'Lavelanet', 'Mirepoix', 'Saverdun', 'Mazères', 'Varilhes',
      'Tarascon-sur-Ariège', 'Ax-les-Thermes', 'Lézat-sur-Lèze', 'Saint-Lizier',
    ],
    townsNote: TOWNS_NOTE,
    faq: [
      {
        question: 'Par quoi commencer dans une maison ancienne en pierre ?',
        answer:
          'En général par la toiture, qui est souvent la plus grande source de pertes, puis par le traitement de l’humidité et de la ventilation, avant d’adapter le chauffage. Les murs en pierre demandent des matériaux perméables à la vapeur d’eau.',
      },
      {
        question: 'Une pompe à chaleur peut-elle remplacer une chaudière au fioul en montagne ?',
        answer:
          'Oui dans de nombreux cas, à condition de choisir un modèle performant par basses températures, de vérifier la température d’eau nécessaire dans les radiateurs et de prévoir un appoint pour les jours les plus froids.',
      },
      FREE_FAQ,
    ],
  },
};
