import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        work: resolve(import.meta.dirname, 'work/index.html'),
        services: resolve(import.meta.dirname, 'services/index.html'),
        about: resolve(import.meta.dirname, 'about/index.html'),
        insights: resolve(import.meta.dirname, 'insights/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
      },
    },
  },
});
