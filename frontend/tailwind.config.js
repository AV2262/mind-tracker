/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#00ffff",
          cyan: "#00bfff",
          dark: "#001b2e",
        },
      },
    },
  },
  plugins: [],
};
