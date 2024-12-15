import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
        secondary:['Poppins'],
        poppins:['Poppins'],
      },
      backgroundImage: {
        'main': "url('/images/background-2.png')",
        'dining': "url('/images/dine.png')"
      }
    },
  },
  plugins: [],
};
export default config;
