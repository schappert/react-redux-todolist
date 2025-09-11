import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#9B7B4C",
      },
    },
  },
  plugins: [],
} satisfies Config

