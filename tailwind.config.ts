import type { Config } from 'tailwindcss'

/**
 * Configurazione Tailwind CSS per Le Pigottine di Vivina
 * Design System: colori pastello, tipografia moderna, animazioni fluide
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ============================================
      // PALETTE COLORI PASTELLO MODERNA
      // ============================================
      colors: {
        // Colori primari pastello
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Azzurro pastello
        azzurro: {
          50: '#f0f9ff',
          100: '#e0f7ff',
          200: '#b9edff',
          300: '#7cdeff',
          400: '#36c9ff',
          500: '#0aadff',
          600: '#008bdb',
          700: '#006eb1',
          800: '#005c92',
          900: '#004d78',
        },
        // Verde acqua / Teal pastello
        acqua: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Rosa salmone pastello
        salmone: {
          50: '#fff5f5',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        // Rosa delicato (per le pigottine)
        rosa: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Crema / Beige per sfondi
        crema: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e7',
          300: '#f5e6d3',
          400: '#e8d4b8',
          500: '#d9c4a5',
          600: '#c4a882',
          700: '#a8896a',
          800: '#8a6d52',
          900: '#725a44',
        },
      },
      // ============================================
      // TIPOGRAFIA MODERNA
      // ============================================
      fontFamily: {
        // Font principale per titoli
        display: ['var(--font-clash)', 'system-ui', 'sans-serif'],
        // Font per corpo testo
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Font per accenti
        accent: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Dimensioni responsive per titoli hero
        'hero-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      // ============================================
      // SPACING E LAYOUT
      // ============================================
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // ============================================
      // ANIMAZIONI E TRANSIZIONI
      // ============================================
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollIndicator: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
        },
      },
      // ============================================
      // TRANSIZIONI
      // ============================================
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // ============================================
      // OMBRE E EFFETTI
      // ============================================
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(244, 114, 182, 0.3)',
        'glow-lg': '0 0 40px rgba(244, 114, 182, 0.4)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      // ============================================
      // BACKDROP BLUR PER GLASSMORPHISM
      // ============================================
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      // ============================================
      // Z-INDEX
      // ============================================
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config
