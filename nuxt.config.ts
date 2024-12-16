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
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      },
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