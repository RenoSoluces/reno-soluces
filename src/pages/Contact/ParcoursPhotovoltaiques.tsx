import React from 'react';
import { ArrowLeft, Check, Sun, Calculator, FileText, Lightbulb } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface ParcoursPhotovoltaiquesProps {
  onPageChange: (page: string) => void;
}

const ParcoursPhotovoltaiques: React.FC<ParcoursPhotovoltaiquesProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection="nos-solutions" 
        onSectionChange={() => {}} 
        onPageChange={onPageChange}
      />
      
      {/* Section Hero */}
      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bouton retour */}
          <div className="mb-8">
            <button 
              onClick={() => onPageChange('panneaux-photovoltaiques')}
              className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux panneaux photovoltaïques</span>
            </button>
          </div>

          {/* Titre principal */}
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Sun className="w-16 h-16 text-green-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Votre parcours<br />
              <span className="text-green-300">photovoltaïque</span>
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Démarrez votre projet solaire en quelques clics
            </p>
          </div>
        </div>
      </section>

      {/* Section Étapes du parcours */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre de section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez votre <span className="text-green-500">première étape</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nous vous accompagnons à chaque étape de votre projet
            </p>
          </div>

          {/* Grille des options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Estimation des économies */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Estimer mes économies
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Découvrez combien vous pourriez économiser sur votre facture d'électricité avec des panneaux solaires.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Calcul personnalisé</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Résultat immédiat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Sans engagement</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Commencer l'estimation
                </button>
              </div>
            </div>

            {/* Calcul de rentabilité */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Calculer ma rentabilité
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Analysez la rentabilité de votre investissement photovoltaïque sur 20 ans.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Retour sur investissement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Projection sur 20 ans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Aides incluses</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Calculer la rentabilité
                </button>
              </div>
            </div>

            {/* Simulation des besoins */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Simuler mes besoins
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Déterminez la puissance et le nombre de panneaux adaptés à votre consommation.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Dimensionnement optimal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Analyse de consommation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Recommandations personnalisées</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Simuler mes besoins
                </button>
              </div>
            </div>

            {/* Étude énergétique */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Étude énergétique complète
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Obtenez une analyse détaillée de votre potentiel solaire avec un expert.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Étude personnalisée</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Visite technique</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Devis détaillé</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Demander une étude
                </button>
              </div>
            </div>

            {/* Estimation des aides */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Estimer mes aides
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Découvrez toutes les aides financières auxquelles vous avez droit.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Aides nationales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Aides locales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Montant total estimé</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Estimer mes aides
                </button>
              </div>
            </div>

            {/* Simulation complète */}
            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 hover:border-green-500 hover:shadow-lg transition-all group cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-300 transition-colors">
                  <Sun className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Simulation complète
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Recommandé :</strong> Obtenez une simulation complète de votre projet photovoltaïque.
                </p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Analyse complète</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Tous les calculs inclus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Rapport détaillé</span>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors">
                  Simuler mon projet complet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi choisir Tucoenergie */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi choisir <span className="text-green-500">Tucoenergie</span> ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Plus de 15 ans d'expertise
              </h3>
              <p className="text-gray-600">
                Une expérience reconnue dans le photovoltaïque
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accompagnement complet
              </h3>
              <p className="text-gray-600">
                De l'étude à l'installation, nous gérons tout
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Installateurs certifiés RGE
              </h3>
              <p className="text-gray-600">
                Qualité garantie et éligibilité aux aides
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default ParcoursPhotovoltaiques;