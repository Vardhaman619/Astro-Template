/** @type {import('tailwindcss').Config} */
import { siteConfig } from './src/config/site';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: siteConfig.colors.primary,
          light: '#2563EB',
          dark: '#1E40AF'
        },
        secondary: {
          DEFAULT: siteConfig.colors.secondary,
          light: '#F9FAFB',
          dark: '#E5E7EB'
        },
        accent: {
          DEFAULT: siteConfig.colors.accent,
          light: '#60A5FA',
          dark: '#2563EB'
        },
        neutral: {
          DEFAULT: siteConfig.colors.neutral.dark,
          light: siteConfig.colors.neutral.light,
          medium: siteConfig.colors.neutral.medium
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}