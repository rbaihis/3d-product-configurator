/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Path to your page files
    './components/**/*.{js,ts,jsx,tsx}', // Path to your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './src/**/*.{html,js,ts,jsx,tsx}',
    './app/**/*.{html,js,ts,jsx,tsx}',
  ],
  // ...
}