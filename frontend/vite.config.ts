import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
/*  server: {
    port: 3000, // Assurez-vous que le port est bien configuré
    host: true  // Permet d'exposer sur 0.0.0.0 (accessible depuis Docker)
  },*/
  server: {
    port: 3000,
    host: true,  // Permet d'exposer sur 0.0.0.0 (accessible depuis Docker)
    proxy: {
      "/spring-boot-api": {
        target: "http://demo-spring-boot-app-1:8085",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/spring-boot-api/, ""),
      },
      "/django-api": {
        target: "http://django-backend:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/django-api/, ""),
      },
    },
  },


  // proxy: {
  //   '/api/spring': {
  //     target: 'http://demo-spring-boot-app-1:8085', // Adresse du backend Spring Boot
  //     changeOrigin: true,
  //     rewrite: (path:string) => path.replace(/^\/api\/spring/, ''),
  //   },
  //   '/api/django': {
  //     target: 'http://django-backend:8000',
  //     changeOrigin: true,
  //     rewrite: (path:string) => path.replace(/^\/api\/django/, ''),
  //   },
  // },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
