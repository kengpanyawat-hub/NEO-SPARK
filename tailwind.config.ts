import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { prompt: ['Prompt', 'sans-serif'] },
      colors: {
        neo: {
          bg: '#0B0B0C',
          purple: '#6C5CE7',
          violet: '#A855F7',
          pink: '#E879F9'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(168,85,247,0.35)',
      },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
};
export default config;
