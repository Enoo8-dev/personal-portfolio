// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://beninifederico.it',

  vite: {
      plugins: [tailwindcss()],
      server: {
        proxy: {
          // Invia le richieste dirette al file PHP verso il server PHP locale
          '/send-email.php': 'http://localhost:8000'
        }
      }
  },

  image: {
    domains: ['localhost', 'www.beninifederico.it', 'beninifederico.it'],
    remotePatterns: [{ protocol: "http" }],
  },

  integrations: [sitemap(), mdx()],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  output: 'static',
});