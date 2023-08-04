/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-text-base)",
          "button-accent": "var(--color-text-muted)",
          "button-ascent-hover": "var(--color-text-inverted)",
        },
        wall: {
          main: "var(--color-background-first)",
          sec: "var(--color-background-second)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
        },
      },
    },
  },
  plugins: [],
};
