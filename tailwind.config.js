/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFF500',
        secondary: {
          DEFAULT: '#7E00CC',
          light: '#DEDBFF',
        },
        tertiary: {
          DEFAULT: '#A0F9FF',
          light: '#F3FDFF',
        },
        quaternary: '#FF005C',
        ranking: {
          first: '#FFF6AA',
          second: '#F0F6FF',
          third: '#FFC8A9',
        },
      },
    },
  },
  plugins: [],
};
