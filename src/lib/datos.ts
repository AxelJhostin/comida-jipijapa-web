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
    menuUrl: '#',
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
  // --- 6 LOCALES NUEVOS ---
  {
    id: 'los-corviches-de-la-abuela',
    nombre: 'Los Corviches de la Abuela',
    categoria: 'Tradicional',
    imagenUrl: '/imagenes/placeholder.jpg', // Usamos la imagen genérica
    horario: '08:00 AM - 01:00 PM',
    telefono: '0999999999',
    diasAtencion: ['Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Parque Central, frente a la iglesia',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
  {
    id: 'cafe-del-valle',
    nombre: 'Café del Valle',
    categoria: 'Cafetería',
    imagenUrl: '/imagenes/placeholder.jpg',
    horario: '09:00 AM - 08:00 PM',
    telefono: '0988888888',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    direccionFisica: 'Calle Bolívar, a media cuadra del municipio',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
  {
    id: 'super-hamburguesas',
    nombre: 'Super Hamburguesas',
    categoria: 'Comida Rápida',
    imagenUrl: '/imagenes/placeholder.jpg',
    horario: '06:00 PM - 11:00 PM',
    telefono: '0977777777',
    diasAtencion: ['Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Sector Terminal Terrestre',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
  {
    id: 'el-rincon-manabita',
    nombre: 'El Rincón Manabita',
    categoria: 'Tradicional',
    imagenUrl: '/imagenes/placeholder.jpg',
    horario: '12:00 PM - 04:00 PM',
    telefono: '0966666666',
    diasAtencion: ['Sábado', 'Domingo'],
    direccionFisica: 'Vía a Noboa, Km 2',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
  {
    id: 'las-delicias-del-mar',
    nombre: 'Las Delicias del Mar',
    categoria: 'Mariscos',
    imagenUrl: '/imagenes/placeholder.jpg',
    horario: '11:00 AM - 05:00 PM',
    telefono: '0955555555',
    diasAtencion: ['Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Malecón de Puerto Cayo',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
  {
    id: 'la-esquina-del-sabor',
    nombre: 'La Esquina del Sabor',
    categoria: 'Desayunos',
    imagenUrl: '/imagenes/placeholder.jpg',
    horario: '07:30 AM - 11:30 AM',
    telefono: '0944444444',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    direccionFisica: 'Esquina de la Calle Sucre y 10 de Agosto',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [],
  },
];