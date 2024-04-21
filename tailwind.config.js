/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#8362F2',
          'primary-content': '#F5FFF8',
          secondary: 'red',
        }
      },
      "dark", 
      "cupcake"
    ],
  },
  darkMode: 'class',
  plugins: [
    require("daisyui")
  ],
};
