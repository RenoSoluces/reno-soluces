import React, { useEffect } from "react";

const AvisClients: React.FC = () => {
  useEffect(() => {
    // Vérifie si le script Elfsight est déjà injecté pour éviter les doublons
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="my-16">
      {/* 🔁 Remplace ici avec ton vrai ID Elfsight */}
      <div
        className="elfsight-app-5bc10c83-572b-4c80-8357-910e2e6f6ade"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default AvisClients;
