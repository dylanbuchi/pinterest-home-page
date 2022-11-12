/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "icons-color": "#767676",
        "logo-color": "#cc1100",
        "home-bg-color": "#111111",
        "profile-bg-color": "#e9e9e9",
        "bg-color": "#fff",
        "icons-hover-color": "#e9e9e9",
      },
    },
  },
  plugins: [],
};
