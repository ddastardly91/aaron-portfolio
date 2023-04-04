/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('https://wallpaperaccess.com/full/2705339.jpg')"
      }
    },
    darkMode: "class",
    daisyui: {
      themes: ["light", "dark"]
    }
  },
  plugins: [require("daisyui")],
}