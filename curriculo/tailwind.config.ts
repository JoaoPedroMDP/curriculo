import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        goldman: ["Goldman", 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        darkBlue: '#013440',
        mediumBlue: '#026873',
        lightBlue: '#2AB0BF',
        whiteBlue: '#DEF2F4',
        yellow: '#F2B641'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-overflow-anchoring": {
          overflowAnchor: "none",
        },
      });
    }),
  ],
};

export default config;
