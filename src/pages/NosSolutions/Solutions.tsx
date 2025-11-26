// src/pages/Solutions.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Sun, Droplet, Building, Flame, Battery, Wind, Warehouse, Layers } from "lucide-react";

interface SolutionsProps {
  onPageChange: (page: string) => void;
}

const products = [
  {
    title: "Panneaux Photovoltaïques",
    icon: <Sun className="w-10 h-10 text-emerald-500" />,
    page: "panneaux-photovoltaiques",
    description: "Produisez votre propre électricité grâce à l’énergie solaire.",
  },
  {
    title: "Batterie de stockage",
    icon: <Battery className="w-10 h-10 text-emerald-500" />,
    page: "batterie",
    description: "Stockez l’énergie solaire produite pour l’utiliser quand vous en avez besoin.",
  },
  {
    title: "Pompe à Chaleur Air Eau",
    icon: <Droplet className="w-10 h-10 text-emerald-500" />,
    page: "pompe-chaleur-air-eau",
    description: "Optimisez votre confort et réduisez vos factures grâce à une PAC Air Eau performante.",
  },
  {
    title: "Pompe à Chaleur Air Air",
    icon: <Wind className="w-10 h-10 text-emerald-500" />,
    page: "pompe-chaleur-air-air",
    description: "Chauffez et rafraichissez votre logement de manière efficace et économique.",
  },
  {
    title: "Isolation des combles",
    icon: <Warehouse className="w-8 h-8 text-green-600 mb-3" />,
    page: "isolation-combles",
    description: "Améliorez l’efficacité énergétique de votre logement en isolant vos combles.",
  },
  {
    title: "Isolation par l’extérieur",
    icon: <Building className="w-8 h-8 text-green-600 mb-3" />,
    page: "isolation-exterieur",
    description: "Optimisez l’isolation thermique en rénovant la façade de votre maison.",
  },
  {
    title: "Isolation du plancher bas",
    icon: <Layers className="w-8 h-8 text-green-600 mb-3" />,
    page: "isolation-sous-sol",
    description: "Conservez la chaleur en isolant efficacement vos sols.",
  },
  {
    title: "Rénovation d’ampleur",
    icon: <Building className="w-10 h-10 text-emerald-500" />,
    page: "renovation-ampleur",
    description: "Optimisez durablement votre logement avec une rénovation complète.",
  },
  {
    title: "Ballon Thermodynamique",
    icon: <Flame className="w-10 h-10 text-emerald-500" />,
    page: "chauffe-eau-thermodynamique",
    description: "Produisez de l’eau chaude de manière écologique et économique.",
  },
];

const Solutions: React.FC<SolutionsProps> = ({ onPageChange }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection="solutions" onSectionChange={() => {}} onPageChange={onPageChange} />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Découvrez toutes nos solutions
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            >
              {product.icon}
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <button
                onClick={() => onPageChange(product.page)}
                className="mt-4 px-6 py-2 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600"
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default Solutions;