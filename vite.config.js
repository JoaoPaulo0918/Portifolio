// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portifolio/', // <== aqui o nome da pasta no GitHub Pages
  plugins: [react()],
});
