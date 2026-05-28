/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#007BFF',
          cyan: '#00E5FF',
        },
        surface: {
          base: '#060D1A',
          card: '#0C1524',
          border: '#1A2740',
        },
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
