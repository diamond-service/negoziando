import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
  // Rimuovi la configurazione di rollupOptions che imposta recharts come esterno
});
