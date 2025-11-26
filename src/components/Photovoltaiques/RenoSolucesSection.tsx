// components/RenoSolucesSection.tsx
import { Check } from 'lucide-react';
import Panneaux4 from '../../assets/Panneaux4.jpg';

interface Props {
  onPageChange: (page: string) => void;
}

const points = [
  {
    title: 'Étude énergétique gratuite et sans engagement',
    description:
      'pour définir avec précision la solution adaptée à votre toiture et vos besoins.',
  },
  {
    title: 'Installation par un professionnel certifié RGE QualiPV',
    description:
      'indispensable pour obtenir les aides de l’État et garantir une installation sécurisée.',
  },
  {
    title: 'Gestion complète des démarches administratives',
    description: '(demande en mairie, contrat de raccordement, etc.)',
  },
  {
    title: 'Pose en surimposition avec orientation optimale',
    description: 'pour maximiser la production d’énergie.',
  },
];

export default function RenoSolucesSection({ onPageChange }: Props) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Donnez vie à votre projet avec<br />
              <span className="text-green-500">Reno Soluces</span>
            </h2>

            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">{point.title}</p>
                    <p className="text-gray-700 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onPageChange('simulateur-photovoltaique')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Je simule mon projet
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={Panneaux4}
              alt="Maison équipée de panneaux solaires"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
