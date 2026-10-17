import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://beninifederico.it',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/send-email.php': 'http://localhost:8000'
      }
    }
  },

  image: {
    domains: ['localhost', 'www.beninifederico.it', 'beninifederico.it'],
    remotePatterns: [{ protocol: "http" }],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          it: 'it',
        },
      },
    }),
    mdx()
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  output: 'static',
});