import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Table des fichiers produits, utilisée par le prérendu pour précharger le code de chaque page.
    manifest: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});