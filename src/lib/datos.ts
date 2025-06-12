// lib/datos.ts

// Definimos la "forma" que tendrá cada local con una interfaz de TypeScript.
export interface Local {
  id: string; // Un ID amigable para la URL, ej: 'pizzeria-don-mario'
  nombre: string;
  categoria: string;
  imagenUrl: string; // Ruta a una imagen local en nuestro proyecto
  horario: string;
  telefono: string;
  diasAtencion: string[];
  direccionFisica: string;
  menuUrl: string;
  ubicacion: string; // Enlace a Google Maps
  instagram: string;
  imagenesExtra: string[];
}

// Creamos una lista de ejemplo con nuestros locales.
export const locales: Local[] = [
  {
    id: 'pizzeria-don-mario',
    nombre: 'Pizzería Don Mario',
    categoria: 'Pizzería',
    imagenUrl: '/imagenes/pizzeria-don-mario/principal.jpg',
    horario: '12:00 PM - 10:00 PM',
    telefono: '0987654321',
    diasAtencion: ['Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Principal y calle 10, Jipijapa',
    menuUrl: '#', // Usamos '#' como un enlace vacío por ahora
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
  {
    id: 'el-buen-gusto',
    nombre: 'Pollo a la Brasa El Buen Gusto',
    categoria: 'Parrillada',
    imagenUrl: '/imagenes/el-buen-gusto/principal.jpg',
    horario: '11:00 AM - 9:00 PM',
    telefono: '0976543210',
    diasAtencion: ['Martes', 'Jueves', 'Viernes', 'Domingo'],
    direccionFisica: 'Av. Alejo Lascano y Calle Sucre',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
];