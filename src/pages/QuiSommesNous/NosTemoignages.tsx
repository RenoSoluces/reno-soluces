import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Star } from "lucide-react";

const NosTemoignages: React.FC<{ onPageChange: (page: string) => void }> = ({
  onPageChange,
}) => {
  // 🔹 Intégration du script Elfsight (Google Reviews)
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header
        activeSection="temoignages"
        onSectionChange={() => {}}
        onPageChange={onPageChange}
      />

      {/* HERO */}
      <section className="relative bg-emerald-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Nos clients témoignent ⭐⭐⭐⭐⭐
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Découvrez les retours d’expérience de nos clients satisfaits.  
          Leur confiance est notre plus belle réussite.
        </p>
      </section>

      {/* NOTE GLOBALE */}
      <section className="bg-white shadow-md rounded-xl p-8 max-w-4xl mx-auto -mt-12 relative z-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Note globale</h2>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400 w-8 h-8" />
          ))}
        </div>
        <p className="text-gray-700">5,0 / 5 basé sur les avis certifiés Google</p>
      </section>

      {/* AVIS GOOGLE RÉELS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🌟 Découvrez nos vrais avis clients
          </h2>
          <p className="text-gray-600 mb-10">
            Ces avis proviennent directement de notre page Google et sont
            mis à jour automatiquement.
          </p>

          {/* WIDGET ELFSIGHT */}
          <div
            className="elfsight-app-5bc10c83-572b-4c80-8357-910e2e6f6ade bg-white rounded-3xl shadow-lg p-6"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-emerald-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Vous aussi, rejoignez nos clients satisfaits !
        </h2>
        <p className="mb-6">
          Faites confiance à Reno Soluces pour vos projets de rénovation énergétique.
        </p>
        <button
          onClick={() => onPageChange("contact")}
          className="bg-yellow-400 hover:bg-yellow-300 text-emerald-900 px-8 py-3 rounded-full font-semibold shadow-lg transition-colors"
        >
          Demandez votre étude gratuite
        </button>
      </section>

      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default NosTemoignages;
