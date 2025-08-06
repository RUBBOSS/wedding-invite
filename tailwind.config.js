/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'noto': ['Noto Serif', 'serif'],
        'armenian': ['ArmAllegro', 'Noto Serif Armenian', 'Noto Sans Armenian', 'serif'],
        'armenian-display': ['ArmAllegro', 'Cormorant Garamond', 'Noto Serif Armenian', 'serif'],
        'norkirk': ['ArmAllegro', 'Noto Serif Armenian', 'serif'],
      },
      colors: {
        'wedding-gold': '#D4AF37',
        'wedding-cream': '#F5F5DC',
        'wedding-blush': '#FFB6C1',
      },
      backgroundImage: {
        'wedding-gradient': 'linear-gradient(135deg, #FFB6C1 0%, #F5F5DC 100%)',
      }
    },
  },
  plugins: [],
}
