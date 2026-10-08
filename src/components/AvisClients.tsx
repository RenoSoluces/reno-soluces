import React, { useEffect } from 'react';

const ELFSIGHT_SCRIPT = 'https://elfsightcdn.com/platform.js';
const ELFSIGHT_ID = '5bc10c83-572b-4c80-8357-910e2e6f6ade';

const AvisClients: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector(`script[src="${ELFSIGHT_SCRIPT}"]`)) {
      const script = document.createElement('script');
      script.src = ELFSIGHT_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="reviews-section section" aria-labelledby="avis-google-title">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Avis Google</span>
          <h2 id="avis-google-title">Ils nous font confiance</h2>
          <p>Découvrez les avis laissés par nos clients sur Google.</p>
        </div>
        <div className="reviews-widget">
          <div className={`elfsight-app-${ELFSIGHT_ID}`} data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
};

export default AvisClients;
