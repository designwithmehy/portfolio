/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18181B',
        'on-primary': '#FFFFFF',
        secondary: '#3F3F46',
        'on-secondary': '#FFFFFF',
        accent: '#2563EB',
        'on-accent': '#FFFFFF',
        bg: '#FAFAFA',
        fg: '#09090B',
        card: '#FFFFFF',
        'card-fg': '#09090B',
        muted: '#E8ECF0',
        'muted-fg': '#64748B',
        border: '#E4E4E7',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Archivo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
