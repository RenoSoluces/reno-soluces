import React from 'react';
import { ArrowLeft, Check, Sun, FileText, Lightbulb } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface ParcoursPhotovoltaiquesProps {
  onPageChange: (page: string) => void;
}

const ParcoursPhotovoltaiques: React.FC<ParcoursPhotovoltaiquesProps> = ({
  onPageChange,
}) => {
  const goToContact = () => onPageChange('contact');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        activeSection="nos-solutions"
        onSectionChange={() => {}}
        onPageChange={onPageChange}
      />

      {/* Hero */}
      <section className="bg-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => onPageChange('panneaux-photovoltaiques')}
              className="flex items-center space-x-2 text-green-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux panneaux photovoltaïques</span>
            </button>
          </div>

          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Sun className="w-16 h-16 text-green-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Parlons de votre projet
              <br />
              <span className="text-green-300">photovoltaïque</span>
            </h1>

            <p className="text-xl text-green-100 mb-8">
              Présentez-nous votre projet et vos besoins afin d'échanger sur
              les possibilités adaptées à votre situation.
            </p>

            <button
              onClick={goToContact}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
            >
              Demander à être contacté
            </button>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment se déroule votre projet ?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous recueillons les informations utiles à votre demande avant
              de vous orienter vers un professionnel adapté à votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Étape 1 */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>

              <div className="text-center">
                <span className="text-sm font-semibold text-green-600">
                  ÉTAPE 1
                </span>

                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">
                  Présentez votre projet
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Indiquez-nous votre situation, votre logement et votre
                  projet photovoltaïque à travers notre formulaire de contact.
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-green-600" />
              </div>

              <div className="text-center">
                <span className="text-sm font-semibold text-green-600">
                  ÉTAPE 2
                </span>

                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">
                  Échangez avec nous
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Un éco-technicien reprend contact avec vous pour préciser
                  votre besoin et les caractéristiques de votre projet.
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-400 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>

              <div className="text-center">
                <span className="text-sm font-semibold text-green-600">
                  ÉTAPE 3
                </span>

                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">
                  Étudiez votre projet
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Si votre projet correspond aux critères recherchés, nous
                  pouvons vous mettre en relation avec un professionnel
                  susceptible de réaliser les travaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Un projet étudié selon votre situation
              </h2>

              <p className="text-gray-600">
                Chaque projet photovoltaïque possède ses propres
                caractéristiques. Les possibilités dépendent notamment du
                logement, de son environnement et des travaux envisagés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Analyse des informations communiquées sur votre projet
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Prise en compte des caractéristiques du logement
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Orientation vers un professionnel selon le projet
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Informations sur les démarches et conditions applicables
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={goToContact}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
              >
                Demander à être contacté
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Reno Soluces */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pourquoi contacter <span className="text-green-500">Reno Soluces</span> ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Une première orientation
              </h3>

              <p className="text-gray-600">
                Nous recueillons les informations nécessaires pour comprendre
                votre demande.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Un échange personnalisé
              </h3>

              <p className="text-gray-600">
                Un éco-technicien peut reprendre contact avec vous afin de
                préciser votre projet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Des professionnels selon votre projet
              </h3>

              <p className="text-gray-600">
                Lorsque cela correspond à votre demande, nous pouvons vous
                orienter vers un professionnel adapté aux travaux envisagés.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={goToContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Demander à être contacté
            </button>
          </div>
        </div>
      </section>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default ParcoursPhotovoltaiques;