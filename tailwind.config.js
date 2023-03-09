/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Phudu: ['Phudu'],
      },
      backgroundImage: {
        'footer-desktop': "url('/images/bg-pattern-footer-desktop.svg')",
        'intro': "url('/images/bg-pattern-intro-right-desktop.svg')",
        'bg-footer': "url('/images/bg-pattern-footer-desktop.svg')",
        'image-desktop': "url('/images/image-intro-desktop.jpg')"
      }
    }
  },
  plugins: [],
}
