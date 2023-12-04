/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-05": "#1A1A1A",
        "dark-15": "#262626",
        "dark-25": "#404040",
        "dark-35": "#595959",
        "dark-45": "#737373",
        "dark-55": "#8C8C8C",
        "dark-65": "#A6A6A6",
        "dark-75": "#BFBFBF",
        "dark-85": "#D9D9D9",
        "dark-95": "#F2F2F2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
