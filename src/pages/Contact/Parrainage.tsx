import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Gift, Users, Euro, CheckCircle, Sun, Home, Phone } from 'lucide-react';

const Parrainage: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    parrainNom: '',
    parrainEmail: '',
    parrainTelephone: '',
    filleulNom: '',
    filleulEmail: '',
    filleulTelephone: '',
    typeProjet: 'renovation'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Formulaire de parrainage soumis:', formData);
    alert('Merci ! Votre demande de parrainage a été envoyée. Nous vous contacterons bientôt.');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="parrainage" onSectionChange={() => {}} onPageChange={onPageChange} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Gift className="w-16 h-16 text-green-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Programme de parrainage Reno Soluces
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Partagez les bénéfices de la rénovation énergétique avec vos proches 
            et recevez une récompense pour chaque parrainage réussi !
          </p>
        </div>
      </section>

      {/* Section récompenses */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Des récompenses <span className="text-green-500">généreuses</span> pour tous
            </h2>
            <p className="text-lg text-gray-600">
              Plus vous parrainez, plus vous gagnez ! Découvrez nos récompenses selon le type de projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rénovation énergétique */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rénovation énergétique
              </h3>
              <p className="text-gray-600 mb-6">
                Isolation, pompe à chaleur, chauffe-eau thermodynamique, rénovation d'ampleur...
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Pour le parrain</span>
                    <span className="text-2xl font-bold text-emerald-600">250€</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Pour le filleul</span>
                    <span className="text-2xl font-bold text-emerald-600">200€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photovoltaïque */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Photovoltaïque
              </h3>
              <p className="text-gray-600 mb-6">
                Panneaux solaires, batterie de stockage, borne de recharge électrique...
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Pour le parrain</span>
                    <span className="text-2xl font-bold text-yellow-600">500€</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Pour le filleul</span>
                    <span className="text-2xl font-bold text-yellow-600">250€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça <span className="text-green-500">fonctionne</span> ?
            </h2>
            <p className="text-lg text-gray-600">
              Un processus simple en 4 étapes pour bénéficier du parrainage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vous parrainez</h3>
              <p className="text-gray-600 text-sm">
                Recommandez Reno Soluces à un proche qui souhaite réaliser des travaux de rénovation énergétique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Votre filleul nous contacte</h3>
              <p className="text-gray-600 text-sm">
                Il mentionne votre nom lors de sa prise de contact et bénéficie de notre accompagnement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Les travaux sont réalisés</h3>
              <p className="text-gray-600 text-sm">
                Nous accompagnons votre filleul de A à Z dans son projet de rénovation énergétique.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vous recevez vos récompenses</h3>
              <p className="text-gray-600 text-sm">
                Une fois les travaux terminés, vous recevez tous les deux votre récompense !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conditions du <span className="text-green-500">parrainage</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Éligibilité</h3>
                <p className="text-gray-700">
                  Le parrain doit être un client Reno Soluces ayant déjà réalisé des travaux avec nous.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Mention du parrainage</h3>
                <p className="text-gray-700">
                  Le filleul doit mentionner le nom du parrain lors de sa première prise de contact.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Réalisation des travaux</h3>
                <p className="text-gray-700">
                  Les récompenses sont versées uniquement après la réalisation complète des travaux du filleul.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Montant minimum</h3>
                <p className="text-gray-700">
                  Le montant des travaux du filleul doit être d'au moins 3 000€ TTC pour déclencher les récompenses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Versement</h3>
                <p className="text-gray-700">
                  Les récompenses sont versées par virement bancaire dans un délai de 30 jours après la fin des travaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de parrainage */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Formulaire de <span className="text-green-500">parrainage</span>
            </h2>
            <p className="text-lg text-gray-600">
              Remplissez ce formulaire pour déclarer votre parrainage et bénéficier des récompenses.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Type de projet */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de projet du filleul *
                </label>
                <select
                  name="typeProjet"
                  value={formData.typeProjet}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="renovation">Rénovation énergétique (250€ + 200€)</option>
                  <option value="photovoltaique">Photovoltaïque (500€ + 250€)</option>
                </select>
              </div>

              {/* Informations du parrain */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  Informations du parrain
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      name="parrainNom"
                      value={formData.parrainNom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="parrainEmail"
                      value={formData.parrainEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="parrainTelephone"
                      value={formData.parrainTelephone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>
              </div>

              {/* Informations du filleul */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-blue-600" />
                  Informations du filleul
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      name="filleulNom"
                      value={formData.filleulNom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nom et prénom de votre filleul"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="filleulEmail"
                      value={formData.filleulEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="email.filleul@exemple.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="filleulTelephone"
                      value={formData.filleulTelephone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                </div>
              </div>

              {/* Bouton de soumission */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg"
                >
                  Déclarer mon parrainage
                </button>
                <p className="text-gray-500 text-sm mt-2">
                  * Champs obligatoires
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Avantages du parrainage */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi <span className="text-green-500">parrainer</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Récompenses attractives
              </h3>
              <p className="text-gray-600">
                Recevez jusqu'à 500€ pour chaque parrainage réussi selon le type de projet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aidez vos proches
              </h3>
              <p className="text-gray-600">
                Faites bénéficier vos proches de notre expertise et de notre accompagnement de qualité.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Processus simple
              </h3>
              <p className="text-gray-600">
                Aucune démarche compliquée, il suffit que votre filleul mentionne votre nom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-emerald-900 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Ils ont déjà <span className="text-green-300">parrainé</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-800 italic mb-4">
                "J'ai parrainé mon voisin pour son installation photovoltaïque. Nous avons tous les deux été ravis : 
                lui de ses économies d'énergie, moi de ma récompense de 500€ !"
              </p>
              <p className="text-sm text-gray-600">— Michel D., client depuis 2023</p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="text-gray-800 italic mb-4">
                "Le parrainage m'a permis de faire découvrir Reno Soluces à ma sœur. Elle a fait isoler sa maison 
                et nous avons reçu nos récompenses rapidement. Très satisfaits !"
              </p>
              <p className="text-sm text-gray-600">— Sophie L., cliente depuis 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à parrainer un proche ?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Contactez-nous pour en savoir plus sur notre programme de parrainage 
            ou pour déclarer un parrainage en cours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange("contact")}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Nous contacter
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Remplir le formulaire
            </button>
          </div>
        </div>
      </section>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default Parrainage;