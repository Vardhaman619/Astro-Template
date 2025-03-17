import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { VitePWA } from 'vite-plugin-pwa';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://foundationrepairadelaide.com.au',
  output: "static",
  integrations: [tailwind(), sitemap(), icon()],
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Foundation Repair Adelaide',
          short_name: 'Foundation Fix',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#1E3A8A',
          icons: [
            {
              src: '/icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'unsplash-images',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                }
              }
            }
          ]
        }
      })
    ],
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
  }
});