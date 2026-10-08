import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';

function ConsentAwareAnalytics() {
  const [enabled, setEnabled] = useState(() => localStorage.getItem('cookies_analytics') === 'true');
  useEffect(() => {
    const refresh = () => setEnabled(localStorage.getItem('cookies_analytics') === 'true');
    window.addEventListener('reno-soluces-analytics-consent', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('reno-soluces-analytics-consent', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);
  return enabled ? <Analytics /> : null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ConsentAwareAnalytics />
  </StrictMode>
);
