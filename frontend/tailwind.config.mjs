/** @type {import('tailwindcss').Config} */
import { siteConfig } from './src/config/site';
import tailwindcssTypographyPlugin from '@tailwindcss/typography';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--primary-foreground)",
        },
        accent: {
          background: "var(--accent-background)",
          foreground: "var(--accent-background)"
        },
        neutral: {
          gray: "var(--neutral-gray)",
          divider: "var(--neutral-divider)"
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
