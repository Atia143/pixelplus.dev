// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#3B82F6',
        brandOrange: '#F6921E',
        brandGray: '#5A5A59',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
      },
      fontFamily: {
        sans: ['Inter', 'Assistant', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease',
        'fade-in-down': 'fade-in-down 0.7s ease',
        'fade-in-up': 'fade-in-up 0.7s ease',
      },
      // (רשות) צבעי גרדיאנט נוספים
      gradientColorStops: theme => ({
        ...theme('colors'),
        'blue': '#3B82F6',
        'purple': '#8B5CF6',
        'indigo': '#6366F1',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
