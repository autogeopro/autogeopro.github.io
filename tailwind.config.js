import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        background: "var(--background-color)",
        text: "var(--text-color)",
        textAlt: "var(--text-alt-color)",
        secondary: "var(--secondary-color)",
        third: "var(--third-color)",
        thirdHover: "var(--third-hover-color)",
        button: "var(--button-color)",
        lightBackground: "var(--light-background-color)",
        light: "var(--light-color)",
        hoverButton: "var(--hover-button-color)",
        hoverButtonAlt: "var(--hover-button-alt-color)",
      },
      screens: {
        xs: { max: "499px" },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula"],
  },
};
