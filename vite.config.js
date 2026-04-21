import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

// Cara modern dapet __dirname di file .js (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Arahkan ke folder src biar rapi
    },
  },
  server: {
    // Biar enteng di Termux
    host: true,
    port: 3000,
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    outDir: 'dist',
  }
});
