import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      // Путь к страницам, которые хотим пререндерить
      staticDir: 'dist',
      routes: [
        '/',
        '/login',
        '/register',
        '/privacy-policy',
        '/public-offer',
        '/terms-of-use',
        '/ru',
        '/en',
        '/ua',
      ], // ваши маршруты
    }),
  ],
});
