import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aquí definimos nuestra paleta de colores personalizada
      colors: {
        'crema': '#FFFBF5',
        'naranja-principal': '#F97316',
        'naranja-oscuro': '#EA580C',
        'texto-principal': '#422006',
        'texto-secundario': '#78716C',
      },
    },
  },
  plugins: [],
};
export default config;
