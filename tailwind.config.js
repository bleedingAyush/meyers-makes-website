/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color": "#22211F",
        white: "#fcfcfc",
        "button-color": "#F2B72F",
        black: "#0d0d0d",
        "link-color": "#5b5b5b",
        "link-color-hover-text": "#0d0d0d",
        teal: "#F9F6EF",
        formColor: "#EBEAEA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
