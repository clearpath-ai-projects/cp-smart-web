/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        // Brand palette derived from the CP Smart / ClearPath identity:
        // a deep clinical burgundy as the primary accent, warm neutral
        // ink for text, and soft neutral greys for section surfaces.
        brand: {
          50: '#faf5f8',
          100: '#f3e6ee',
          200: '#e3c3d7',
          300: '#cc93b3',
          400: '#aa6489',
          500: '#8a3f66',
          600: '#661244',
          700: '#560f39',
          800: '#450c2e',
          900: '#360a25',
          950: '#230618',
        },
        ink: {
          DEFAULT: '#1c1b1d',
          soft: '#3a383c',
          muted: '#6b6870',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f7f5f6',
          muted: '#f0eef0',
          dark: '#161219',
        },
        line: {
          DEFAULT: '#e7e3e6',
          soft: '#f0eef0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(28, 27, 29, 0.04), 0 1px 1px rgba(28, 27, 29, 0.03)',
        card: '0 1px 2px rgba(28, 27, 29, 0.04), 0 8px 24px -12px rgba(28, 27, 29, 0.10)',
        lift: '0 12px 32px -12px rgba(102, 18, 68, 0.20)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        fadeIn: 'fadeIn 0.8s ease both',
        drift: 'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
