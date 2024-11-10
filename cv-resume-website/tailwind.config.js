/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0077B5', // Özel renk tanımları yaptım
        'custom-purple': '#BAB2E7',
        'custom-green': '#00AB6B',
        'dark-purple': '#252128',
        'custom-gray': '#AEBCCF',
        'custom-indigo-light': '#B7AAFF',
        'custom-indigo-lightest': '#E1E1FF',
        'custom-indigo-dark': '#3730A3',
        'custom-indigo-mid': '#8F88FF',
        'dark-gray': '#141414',
        'custom-light-gray': '#383838',
        'custom-indigo-midlight': '#CFCBFF',
        'darkmode-button': '#D9D9D9',
        'lightmode-button': '#777777',
        'custom-button-purple': '#4731D3',
      },
    },
  },
  plugins: [],
};
