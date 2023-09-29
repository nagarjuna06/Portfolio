/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gra'dient-stop's)')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gra'dient-stop's)')",
      },
      keyframes: {
        scrolling: {
          "0%": { "margin-top": "0" },
          "10%": { "margin-top": "0" },
          "20%": { "margin-top": "-4rem" },
          "30%": { "margin-top": "-4rem" },
          "40%": { "margin-top": "-8rem" },
          "60%": { "margin-top": "-8rem" },
          "70%": { "margin-top": "-4rem" },
          "80%": { "margin-top": "-4rem" },
          "90%": { "margin-top": "0" },
          "100%": { "margin-top": "0" },
        },
      },
      animation: {
        scrolling: "scrolling 8s infinite",
      },
    },
    screens: {
      phone: "250px",

      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
