import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MapPin, Phone, CheckCircle, Home, Shield, Flame, Sun } from 'lucide-react';
import HauteGaronne from '../../assets/HauteGaronne.jpeg';

const RenovationEnergetiqueHauteGaronne: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="renovation-haute-garonne" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <MapPin className="w-16 h-16 text-green-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Rénovation énergétique en Haute-Garonne (31)
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Reno Soluces vous accompagne dans vos projets de rénovation énergétique en Haute-Garonne. 
            De Toulouse aux communes rurales, bénéficiez de notre expertise et des meilleures solutions énergétiques.
          </p>
        </div>
      </section>

      {/* Nos services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos services de <span className="text-green-500">rénovation énergétique</span> en Haute-Garonne
            </h2>
            <p className="text-lg text-gray-600">
              Des solutions adaptées au climat toulousain et aux spécificités du département
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-emerald-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Isolation</h3>
              <p className="text-gray-600 text-sm">
                Isolation adaptée au climat continental du Sud-Ouest
              </p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chauffage</h3>
              <p className="text-gray-600 text-sm">
                Pompes à chaleur et systèmes performants pour la région toulousaine
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Photovoltaïque</h3>
              <p className="text-gray-600 text-sm">
                Panneaux solaires optimisés pour l'ensoleillement du Sud-Ouest
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rénovation globale</h3>
              <p className="text-gray-600 text-sm">
                Rénovation d'ampleur pour l'habitat haut-garonnais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Haute-Garonne */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi choisir Reno Soluces en <span className="text-green-500">Haute-Garonne</span> ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Connaissance du marché local</h3>
                    <p className="text-gray-700">Expertise des spécificités urbaines et rurales de la Haute-Garonne</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Réseau d'artisans qualifiés</h3>
                    <p className="text-gray-700">Partenaires RGE dans toute la région toulousaine</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Aides locales optimisées</h3>
                    <p className="text-gray-700">Connaissance des aides spécifiques à la région Occitanie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proximité et réactivité</h3>
                    <p className="text-gray-700">Équipe locale pour un suivi personnalisé de vos projets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={HauteGaronne}
                alt="Rénovation énergétique en Haute-Garonne"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Villes couvertes */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nous intervenons dans <span className="text-green-500">toute la Haute-Garonne</span>
            </h2>
            <p className="text-lg text-gray-600">
              De la métropole toulousaine aux communes rurales du département
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Toulouse', 'Colomiers', 'Tournefeuille', 'Muret', 'Blagnac', 
              'Plaisance-du-Touch', 'Cugnaux', 'Balma', 'L\'Union', 'Castanet-Tolosan',
              'Saint-Orens-de-Gameville', 'Ramonville-Saint-Agne', 'Portet-sur-Garonne', 'Fonsorbes'
            ].map((ville, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <span className="text-gray-700 font-medium">{ville}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact local */}
      <section className="bg-emerald-900 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Contactez notre équipe <span className="text-green-300">Haute-Garonne</span>
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Nos conseillers locaux vous accompagnent dans votre projet de rénovation énergétique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange("contact")}
              className="bg-green-400 hover:bg-green-300 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              06.69.30.70.21
            </button>
            <button
              onClick={() => onPageChange("contact")}
              className="bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </section>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default RenovationEnergetiqueHauteGaronne;