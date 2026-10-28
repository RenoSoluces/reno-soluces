import { Check } from 'lucide-react';
import Panneaux1 from '../../assets/Panneaux1.webp';

interface HeroSectionProps {
  onPageChange: (page: string) => void;
}

export default function HeroSection(_props: HeroSectionProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Colonne gauche - Texte */}
              <div className="bg-emerald-900 p-12 text-white flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-8 leading-tight">
                  Panneaux photovoltaïques :<br /> réduisez votre facture grâce au solaire
                </h1>

                <div className="space-y-4 mb-8"> 
                  {["Une production d’électricité à adapter à votre logement et à vos usages",
                    'Sélection de marques de référence sur le marché',
                    'Votre estimation gratuite en 1 minute'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-800" />
                      </div>
                      <span className="text-lg">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <a href="/contact"
                  aria-label="Demander à être contacté par Reno Soluces"
                  className="inline-block bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors w-full lg:w-auto">

Demander à être contacté </a>

                  <p className="text-green-200 text-sm">
                    Gratuit et sans engagement.
                  </p>
                </div>
              </div>

              {/* Colonne droite - Image */}
              <div className="relative">
                <img
                  src={Panneaux1}
                  alt="Installation de panneaux photovoltaïques"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}