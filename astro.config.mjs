// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://beninifederico.it',

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  adapter: node({
    mode: 'standalone'
  })
});