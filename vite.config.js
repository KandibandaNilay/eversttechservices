import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: 'eversttechservices',  // ← replace REPO_NAME with your repo name
  // For user site: base: '/',
});