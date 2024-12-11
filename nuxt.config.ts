// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';
import { definePreset } from '@primevue/themes';



// const Noir = definePreset(Lara, {
//   semantic: {
//       primary: {
//           50: '{zinc.50}',
//           100: '{zinc.100}',
//           200: '{zinc.200}',
//           300: '{zinc.300}',
//           400: '{zinc.400}',
//           500: '{zinc.500}',
//           600: '{zinc.600}',
//           700: '{zinc.700}',
//           800: '{zinc.800}',
//           900: '{zinc.900}',
//           950: '{zinc.950}'
//       },
//       colorScheme: {
//           light: {
//               primary: {
//                   color: '{zinc.950}',
//                   inverseColor: '#ffffff',
//                   hoverColor: '{zinc.900}',
//                   activeColor: '{zinc.800}'
//               },
//               highlight: {
//                   background: '{zinc.950}',
//                   focusBackground: '{zinc.700}',
//                   color: '#ffffff',
//                   focusColor: '#ffffff'
//               }
//           },
//           dark: {
//               primary: {
//                   color: '{zinc.50}',
//                   inverseColor: '{zinc.950}',
//                   hoverColor: '{zinc.100}',
//                   activeColor: '{zinc.200}'
//               },
//               highlight: {
//                   background: 'rgba(250, 250, 250, .16)',
//                   focusBackground: 'rgba(250, 250, 250, .24)',
//                   color: 'rgba(255,255,255,.87)',
//                   focusColor: 'rgba(255,255,255,.87)'
//               }
//           }
//       }
//   }
// });
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      },
    ],
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