// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://caltrucafort.com',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },

  compressHTML: true,

  build: {
    format: 'directory'
  },

  integrations: [sitemap()]
});