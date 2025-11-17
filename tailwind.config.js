/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
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
        "dark-bg": "#0a0a0a",
        "dark-card": "#111111",
        "dark-surface": "#1a1a1a",
        "dark-text": "#f8fafc",
        "dark-text-secondary": "#cbd5e1",
        "dark-accent": "#38bdf8",
        "gradient-start": "#0f172a",
        "gradient-end": "#1e293b",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'card-gradient': 'linear-gradient(145deg, #111111 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(56, 189, 248, 0.3)',
        'glow-lg': '0 0 40px rgba(56, 189, 248, 0.2)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 16px 64px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "3rem",
        "full": "9999px"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  corePlugins: {
    // Force Tailwind à utiliser le format RGB pour les couleurs au lieu de HSL/OKLCH,
    // ce qui est lisible par html2canvas.
    preflight: true, // Gardez ceci
    container: false, // Exemple, si vous ne l'utilisez pas
  },
  plugins: [],
}
