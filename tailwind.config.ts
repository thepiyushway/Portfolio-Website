import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#0f172a',
          secondary: '#334155',
          muted: '#64748b'
        },
        surface: {
          base: '#ffffff',
          subtle: '#f8fafc',
          muted: '#eef2ff'
        },
        brand: {
          50: '#eff5ff',
          100: '#dce8ff',
          primary: '#0063c2',
          hover: '#0056ab',
          500: '#4f46e5',
          700: '#4338ca'
        }
      },
      boxShadow: {
        soft: '0 8px 20px rgba(15, 23, 42, 0.08)',
        elevated: '0 16px 36px rgba(15, 23, 42, 0.12)',
        glow: '0 0 28px rgba(0, 99, 194, 0.2)'
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1rem'
      },
      backgroundImage: {
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cdefs%3E%3Cpattern id='px' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Crect width='20' height='20' fill='%23f8faff'/%3E%3Cpath d='M20 0 L0 0 0 20' fill='none' stroke='%23e7eeff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23px)'/%3E%3C/svg%3E\")",
        'radial-glow': 'radial-gradient(circle at top, rgba(99,102,241,0.2), rgba(255,255,255,0))',
        'brand-gradient': 'linear-gradient(90deg, #0f172a 0%, #0b2f58 50%, #1e1b4b 100%)'
      },
      backgroundPosition: {
        'grid-offset': 'left 3rem top 1rem'
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        120: '30rem'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
