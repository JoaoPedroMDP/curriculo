import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'banner': "url('/beach_background.jpg')",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-blue': '#013440',
        'medium-blue': '#026873',
        'light-blue': '#2AB0BF',
        'white-blue': '#DEF2F4',
        'white': '#FAFAFA',
        'black': '#0F0F0F',
      }
    },
  },
  plugins: [],
};

export default config;
