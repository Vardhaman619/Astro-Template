import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// import { VitePWA } from 'vite-plugin-pwa';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://foundationrepairadelaide.com.au',
  output: "static",
  integrations: [tailwind(), sitemap(), icon()],

  build: {
    inlineStylesheets: 'auto'
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['zod', 'workbox-window'],
            'form': ['./src/utils/modules/form-validation.ts'],
            'analytics': ['./src/utils/modules/analytics.ts']
          }
        }
      }
    }
  },

  env: {
    schema: {
      SENDGRID_API_KEY: envField.string({ context: "server", access: "secret" }),
      SENDER_MAIL_ADDRESS: envField.string({ context: "server", access: "secret" }),
      RECEIVER_MAIL_ADDRESS: envField.string({ context: "server", access: "secret" })
    }
  },

  adapter: vercel()
});