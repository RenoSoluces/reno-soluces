// AidesFinancieres.tsx
import {
  HandCoins,
  Bolt,
  PiggyBank,
  Percent,
  Landmark,
  ArrowRight,
} from 'lucide-react';

const aides = [
  {
    icon: <HandCoins className="w-6 h-6 text-green-500" />,
    title: 'Obligation d’achat',
    description: (
      <>
        <span className="font-semibold">Vente totale</span> : revendez l’intégralité de l’énergie produite à un tarif garanti pendant 20 ans.
      </>
    ),
  },
  {
    icon: <Bolt className="w-6 h-6 text-green-500" />,
    title: 'Vente du surplus',
    description: (
      <>
        L’énergie non consommée est injectée sur le réseau et rachetée par EDF OA. Vous combinez revenus et autoconsommation.
      </>
    ),
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-green-500" />,
    title: 'Prime à l’autoconsommation',
    description: (
      <>
        Une prime est versée pour toute installation ≤ 100 kWc. Son montant varie selon la puissance installée.
      </>
    ),
  },
  {
    icon: <Percent className="w-6 h-6 text-green-500" />,
    title: 'TVA réduite à 10%',
    description: (
      <>
        Les installations ≤ 3 kWc bénéficient d’un taux de TVA réduit à 10 %.
      </>
    ),
  },
  {
    icon: <Landmark className="w-6 h-6 text-green-500" />,
    title: 'Aides locales et régionales',
    description: (
      <>
        Certaines collectivités (mairies, régions…) proposent des subventions complémentaires.
      </>
    ),
  },
];

export default function AidesFinancieres({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Quelles <span className="text-green-500">aides financières</span> existent pour votre<br /> installation solaire ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-6">
            Afin de promouvoir les énergies renouvelables, l’État a mis en place diverses{' '}
            <span 
            onClick={() => onPageChange("prime-autoconsommation")}
            className="text-green-500 underline cursor-pointer hover:text-green-600 transition-colors">
              aides financières pour l’installation de panneaux photovoltaïques
            </span>. Voici les principales subventions disponibles :
          </p>
        </div>

        {/* Grille des aides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aides.map((aide, index) => (
            <div
              key={index}
              className="bg-white border-2 border-green-400 rounded-2xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  {aide.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                {aide.title}
              </h3>
              <p className="text-sm text-gray-700 text-center">{aide.description}</p>
            </div>
          ))}
        </div>

        {/* Note informative */}
        <p className="text-sm text-gray-500 text-center italic mb-8">
          * Certaines aides sont soumises à conditions (installateur RGE, seuils de revenus, etc.)
        </p>

        {/* Bouton CTA */}
        <div className="text-center">
          <button
            onClick={() => onPageChange('simulateur-photovoltaique')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            J’estime mes aides
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
