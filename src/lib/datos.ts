// lib/datos.ts

export interface Local {
  id: string;
  nombre: string;
  categoria: string;
  imagenUrl: string;
  horario: string;
  telefono: string;
  diasAtencion: string[];
  direccionFisica: string;
  menuUrl: string;
  ubicacion: string;
  instagram: string;
  imagenesExtra: string[];
}

export const locales: Local[] = [
  {
    id: 'pizzeria-don-mario',
    nombre: 'Pizzería Don Mario',
    categoria: 'Pizzería',
    imagenUrl: '/imagenes/pizzeria-don-mario/principal.jpg', // Actualizado a .jpeg
    horario: '12:00 PM - 10:00 PM',
    telefono: '0987654321',
    diasAtencion: ['Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Principal y calle 10, Jipijapa',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/pizzeria-don-mario/foto1.jpeg',
      '/imagenes/pizzeria-don-mario/foto2.jpeg',
      '/imagenes/pizzeria-don-mario/foto3.jpeg'
    ],
  },
  {
    id: 'el-buen-gusto',
    nombre: 'Pollo a la Brasa El Buen Gusto',
    categoria: 'Parrillada',
    imagenUrl: '/imagenes/el-buen-gusto/principal.jpg', // Usaremos .jpeg para consistencia
    horario: '11:00 AM - 9:00 PM',
    telefono: '0976543210',
    diasAtencion: ['Martes', 'Jueves', 'Viernes', 'Domingo'],
    direccionFisica: 'Av. Alejo Lascano y Calle Sucre',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/el-buen-gusto/foto1.jpeg',
      '/imagenes/el-buen-gusto/foto2.jpeg',
      '/imagenes/el-buen-gusto/foto3.jpeg'
    ],
  },
  {
    id: 'los-corviches-de-la-abuela',
    nombre: 'Los Corviches de la Abuela',
    categoria: 'Tradicional',
    imagenUrl: '/imagenes/los-corviches-de-la-abuela/principal.jpg',
    horario: '08:00 AM - 01:00 PM',
    telefono: '0999999999',
    diasAtencion: ['Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Parque Central, frente a la iglesia',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/los-corviches-de-la-abuela/foto1.jpeg',
      '/imagenes/los-corviches-de-la-abuela/foto2.jpeg',
      '/imagenes/los-corviches-de-la-abuela/foto3.jpeg'
    ],
  },
  {
    id: 'cafe-del-valle',
    nombre: 'Café del Valle',
    categoria: 'Cafetería',
    imagenUrl: '/imagenes/cafe-del-valle/principal.jpg',
    horario: '09:00 AM - 08:00 PM',
    telefono: '0988888888',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    direccionFisica: 'Calle Bolívar, a media cuadra del municipio',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/cafe-del-valle/foto1.jpeg',
      '/imagenes/cafe-del-valle/foto2.jpeg',
      '/imagenes/cafe-del-valle/foto3.jpeg'
    ],
  },
  {
    id: 'super-hamburguesas',
    nombre: 'Super Hamburguesas',
    categoria: 'Comida Rápida',
    imagenUrl: '/imagenes/super-hamburguesas/principal.jpg',
    horario: '06:00 PM - 11:00 PM',
    telefono: '0977777777',
    diasAtencion: ['Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Sector Terminal Terrestre',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/super-hamburguesas/foto1.jpeg',
      '/imagenes/super-hamburguesas/foto2.jpeg',
      '/imagenes/super-hamburguesas/foto3.jpeg'
    ],
  },
  {
    id: 'el-rincon-manabita',
    nombre: 'El Rincón Manabita',
    categoria: 'Tradicional',
    imagenUrl: '/imagenes/el-rincon-manabita/principal.jpg',
    horario: '12:00 PM - 04:00 PM',
    telefono: '0966666666',
    diasAtencion: ['Sábado', 'Domingo'],
    direccionFisica: 'Vía a Noboa, Km 2',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/el-rincon-manabita/foto1.jpeg',
      '/imagenes/el-rincon-manabita/foto2.jpeg',
      '/imagenes/el-rincon-manabita/foto3.jpeg'
    ],
  },
  {
    id: 'las-delicias-del-mar',
    nombre: 'Las Delicias del Mar',
    categoria: 'Mariscos',
    imagenUrl: '/imagenes/las-delicias-del-mar/principal.jpg',
    horario: '11:00 AM - 05:00 PM',
    telefono: '0955555555',
    diasAtencion: ['Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Malecón de Puerto Cayo',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/las-delicias-del-mar/foto1.jpeg',
      '/imagenes/las-delicias-del-mar/foto2.jpeg',
      '/imagenes/las-delicias-del-mar/foto3.jpeg'
    ],
  },
  {
    id: 'la-esquina-del-sabor',
    nombre: 'La Esquina del Sabor',
    categoria: 'Desayunos',
    imagenUrl: '/imagenes/la-esquina-del-sabor/principal.jpg',
    horario: '07:30 AM - 11:30 AM',
    telefono: '0944444444',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    direccionFisica: 'Esquina de la Calle Sucre y 10 de Agosto',
    menuUrl: '#',
    ubicacion: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/la-esquina-del-sabor/foto1.jpeg',
      '/imagenes/la-esquina-del-sabor/foto2.jpeg',
      '/imagenes/la-esquina-del-sabor/foto3.jpeg'
    ],
  },
];
