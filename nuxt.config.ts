// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/prism.js',
  ],
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap',
      }
      
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
    css: ['primeicons/primeicons.css'], 
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  pages: true,
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Lara
    },
      ripple: true,
      inputVariant: 'filled',
    },
}

})