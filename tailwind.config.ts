import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'; // <-- 1. Importamos los colores por defecto aquí arriba

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // 2. Usamos el 'spread operator' (...) para incluir todos los colores por defecto de Tailwind
      ...colors,

      // 3. AHORA, definimos nuestros colores. Estos sobrescribirán los colores por defecto con el mismo nombre.
      'crema': '#FFFBF5',
      'texto-principal': '#422006',
      'texto-secundario': '#78716C',
      
      // Sobrescribimos la paleta 'blue' con nuestros naranjas
      'blue': {
        '600': '#F97316', // naranja-principal
        '700': '#EA580C', // naranja-oscuro
      },
    },
    extend: {
      // Dejamos 'extend' vacío por ahora, o para otras cosas como 'backgroundImage'
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
