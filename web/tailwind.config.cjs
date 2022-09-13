/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nlw-gradient' : 'linear-gradient(89.86deg, #9572FC 15%, #43E7AD 66%, #E1D55D 95%)',
        'game-gradient' : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        background: "url('/background.png')"
      }
    },
  },
  plugins: [],
}
