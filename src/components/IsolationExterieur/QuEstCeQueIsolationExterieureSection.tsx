// src/components/IsolationExterieure/QuEstCeQueIsolationSection.tsx
import React from 'react';
import Exterieur2 from '../../assets/Exterieur2.jpeg';

const QuEstCeQueIsolationSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie gauche - Contenu texte */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Qu'est-ce que l'isolation thermique par l'extérieur ?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              L'isolation thermique par l'extérieur (ITE) consiste à envelopper les murs de votre habitation d'un isolant, 
              recouvert d'un enduit ou d'un bardage. Cette technique permet de renforcer considérablement la performance 
              énergétique du logement sans réduire sa surface intérieure.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Contrairement à l'isolation intérieure, l'ITE est particulièrement efficace pour supprimer les ponts thermiques 
              et améliorer le confort thermique en été comme en hiver.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              En plus de ses bénéfices énergétiques, l'isolation extérieure offre une nouvelle esthétique à votre façade, 
              tout en augmentant la valeur de votre bien.
            </p>
          </div>

          {/* Partie droite - Image */}
          <div className="relative">
            <img
              src={Exterieur2}
              alt="Maison en cours d'isolation thermique par l'extérieur"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuEstCeQueIsolationSection;
