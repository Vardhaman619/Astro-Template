/** @type {import('tailwindcss').Config} */
import { siteConfig } from './src/config/site';
import tailwindcssTypographyPlugin from '@tailwindcss/typography';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          foreground: siteConfig.colors.primaryForeground,
          background: siteConfig.colors.primaryBackground,
        },
        secondary: {
          foreground: siteConfig.colors.secondaryForeground,
          background: siteConfig.colors.secondaryBackground,
        },
        accent: {
          foreground: siteConfig.colors.accentForeground,
          background: siteConfig.colors.accentBackground
        },
        neutral: {
          ...siteConfig.colors.neutral,
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: [tailwindcssTypographyPlugin()]
}