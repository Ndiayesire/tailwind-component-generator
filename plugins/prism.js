import Prism from 'prismjs';

import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-html';
import 'prismjs/components/prism-css';

import 'prismjs/themes/prism-okaidia.css';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('prism', Prism);

  nuxtApp.hook('page:mounted', () => {
    Prism.highlightAll();
  });
});
