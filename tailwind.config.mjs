/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#1A1A1A",
        light: "#F1F0E2",
        accent: "#ACBFA4",
      },
    },
  },
  plugins: [],
};
