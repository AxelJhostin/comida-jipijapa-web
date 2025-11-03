// lib/datos.ts

// 1. La interfaz define la "forma" de cada local, con el campo 'coordenadas'.
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
  instagram: string;
  imagenesExtra: string[];
  coordenadas: { // El campo para las coordenadas exactas
    lat: number;
    lng: number;
  };
}

// 2. La lista completa de locales, ahora todos con coordenadas.
export const locales: Local[] = [
  // --- LOCALES DE EJEMPLO QUE YA TENÍAS ---
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
    instagram: '#',
    imagenesExtra: [
      '/imagenes/pizzeria-don-mario/foto1.jpeg',
      '/imagenes/pizzeria-don-mario/foto2.jpeg',
      '/imagenes/pizzeria-don-mario/foto3.jpeg'
    ],
    coordenadas: { lat: -1.3484, lng: -80.5847 },
  },
  {
    id: 'el-buen-gusto',
    nombre: 'Pollo a la Brasa El Buen Gusto',
    categoria: 'Parrillada',
    imagenUrl: '/imagenes/el-buen-gusto/principal.jpeg',
    horario: '11:00 AM - 9:00 PM',
    telefono: '0976543210',
    diasAtencion: ['Martes', 'Jueves', 'Viernes', 'Domingo'],
    direccionFisica: 'Av. Alejo Lascano y Calle Sucre',
    menuUrl: '#',
    instagram: '#',
    imagenesExtra: [
      '/imagenes/el-buen-gusto/foto1.jpeg',
      '/imagenes/el-buen-gusto/foto2.jpeg',
      '/imagenes/el-buen-gusto/foto3.jpeg'
    ],
    coordenadas: { lat: -1.3501, lng: -80.5795 },
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
    instagram: '#',
    imagenesExtra: [
      '/imagenes/los-corviches-de-la-abuela/foto1.jpeg',
      '/imagenes/los-corviches-de-la-abuela/foto2.jpeg',
      '/imagenes/los-corviches-de-la-abuela/foto3.jpeg'
    ],
    coordenadas: { lat: -1.3495, lng: -80.5780 },
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
    instagram: '#',
    imagenesExtra: [
      '/imagenes/cafe-del-valle/foto1.jpeg',
      '/imagenes/cafe-del-valle/foto2.jpeg',
      '/imagenes/cafe-del-valle/foto3.jpeg'
    ],
    coordenadas: { lat: -1.3488, lng: -80.5792 },
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
    instagram: '#',
    imagenesExtra: [
      '/imagenes/super-hamburguesas/foto1.jpeg',
      '/imagenes/super-hamburguesas/foto2.jpeg',
      '/imagenes/super-hamburguesas/foto3.jpeg'
    ],
    coordenadas: { lat: -1.3525, lng: -80.5830 },
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
    instagram: '#',
    imagenesExtra: [
      '/imagenes/el-rincon-manabita/foto1.jpeg',
      '/imagenes/el-rincon-manabita/foto2.jpeg',
      '/imagenes/el-rincon-manabita/foto3.jpeg'
    ],
    coordenadas: { lat: -1.3600, lng: -80.5900 },
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
    instagram: '#',
    imagenesExtra: [
      '/imagenes/las-delicias-del-mar/foto1.jpeg',
      '/imagenes/las-delicias-del-mar/foto2.jpeg',
      '/imagenes/las-delicias-del-mar/foto3.jpeg'
    ],
    coordenadas: { lat: -1.4183, lng: -80.7381 },
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
    instagram: '#',
    imagenesExtra: [
      '/imagenes/la-esquina-del-sabor/foto1.jpeg',
      '/imagenes/la-esquina-del-sabor/foto2.jpeg',
      '/imagenes/la-esquina-del-sabor/foto3.jpeg'
    ],
    coordenadas: { lat: -1.3475, lng: -80.5805 },
  },

  // --- ⬇️ INICIO DE LOS 6 LOCALES NUEVOS CON DATOS REALES Y FICTICIOS ⬇️ ---
  {
    id: 'cevicheria-overtime',
    nombre: 'Cevichería Overtime', // Dato real (inferido)
    categoria: 'Mariscos', // <-- DATO FALSO (inferido)
    imagenUrl: '/imagenes/cevicheria-overtime/logo.jpg', // Dato de tu captura
    horario: '10:00 AM - 06:00 PM', // <-- DATO FALSO
    telefono: '052600617', // Dato real
    diasAtencion: ['Lunes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], // <-- DATO FALSO
    direccionFisica: 'MC3F+2HV, 10 de Agosto, Jipijapa', // Dato real
    menuUrl: '#', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/overtime.cevicheria', // Dato real
    imagenesExtra: [ // Datos de tu captura
      '/imagenes/cevicheria-overtime/comida1.jpg',
      '/imagenes/cevicheria-overtime/comida2.jpg',
      '/imagenes/cevicheria-overtime/comida3.jpg',
      '/imagenes/cevicheria-overtime/comida4.jpg',
      '/imagenes/cevicheria-overtime/comida5.jpg',
    ],
    coordenadas: { lat: -1.3474, lng: -80.5785 }, // <-- DATO FALSO (aprox.)
  },
  {
    id: 'parrillada-edward',
    nombre: 'Parrillada Edward', // Dato real (inferido)
    categoria: 'Parrillada', // <-- DATO FALSO (inferido)
    imagenUrl: '/imagenes/parrillada-edward/edward-logo.jpg', // Dato de tu captura
    horario: '05:00 PM - 11:00 PM', // <-- DATO FALSO
    telefono: '0987040472', // Dato real
    diasAtencion: ['Jueves', 'Viernes', 'Sábado', 'Domingo'], // <-- DATO FALSO
    direccionFisica: 'Bolivar y, C. Guayas, Jipijapa 130301', // Dato real
    menuUrl: '#', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/parrilladaedward', // Dato real
    imagenesExtra: [ // Datos de tu captura
      '/imagenes/parrillada-edward/comida1.jpg',
      '/imagenes/parrillada-edward/comida2.jpg',
      '/imagenes/parrillada-edward/comida3.jpg',
      '/imagenes/parrillada-edward/comida4.jpg',
      '/imagenes/parrillada-edward/comida5.jpg',
    ],
    coordenadas: { lat: -1.3480, lng: -80.5790 }, // <-- DATO FALSO (aprox.)
  },
  {
    id: 'luister-maloso',
    nombre: 'Luister Maloso', // Dato real (inferido)
    categoria: 'Comida Rápida', // <-- DATO FALSO (inferido)
    imagenUrl: '/imagenes/luister-maloso/principal.jpg', // <-- DATO FALSO (ruta inventada)
    horario: '06:00 PM - 11:30 PM', // <-- DATO FALSO
    telefono: '0984540603', // Dato real
    diasAtencion: ['Viernes', 'Sábado', 'Domingo'], // <-- DATO FALSO
    direccionFisica: 'Rocafuerte entre Febres Cordero, y, Jipijapa 130301', // Dato real
    menuUrl: '#', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/luistermaloso', // Dato real
    imagenesExtra: [ // <-- DATOS FALSOS (rutas inventadas)
      '/imagenes/luister-maloso/foto1.jpg',
      '/imagenes/luister-maloso/foto2.jpg',
      '/imagenes/luister-maloso/foto3.jpg'
    ],
    coordenadas: { lat: -1.3490, lng: -80.5810 }, // <-- DATO FALSO (aprox.)
  },
  {
    id: 'raspados-restaurante',
    nombre: 'Raspados Restaurante', // Dato real (inferido)
    categoria: 'Tradicional', // <-- DATO FALSO (inferido)
    imagenUrl: '/imagenes/raspados-restaurante/principal.jpg', // <-- DATO FALSO (ruta inventada)
    horario: '09:00 AM - 05:00 PM', // <-- DATO FALSO
    telefono: '0978780863', // Dato real
    diasAtencion: ['Sábado', 'Domingo'], // <-- DATO FALSO
    direccionFisica: 'Jipijapa Cdla. Parrales Iguale Calles, y H. Vasquez Esquina, Jipijapa 130305', // Dato real
    menuUrl: '#', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/raspadosrestaurante', // Dato real
    imagenesExtra: [ // <-- DATOS FALSOS (rutas inventadas)
      '/imagenes/raspados-restaurante/foto1.jpg',
      '/imagenes/raspados-restaurante/foto2.jpg',
      '/imagenes/raspados-restaurante/foto3.jpg'
    ],
    coordenadas: { lat: -1.3515, lng: -80.5800 }, // <-- DATO FALSO (aprox.)
  },
  {
    id: 'sanduchito',
    nombre: 'Sanduchito 593', // Dato real (tomado del Instagram)
    categoria: 'Comida Rápida', // <-- DATO FALSO (inferido)
    imagenUrl: '/imagenes/sanduchito/principal.jpg', // <-- DATO FALSO (ruta inventada)
    horario: '07:00 PM - 12:00 AM', // <-- DATO FALSO
    telefono: '0978957741', // Dato real
    diasAtencion: ['Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], // <-- DATO FALSO
    direccionFisica: 'JCX9+FWX, Avenida Alejo Lascano, Jipijapa', // Dato real
    menuUrl: '#', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/sanduchito_593', // Dato real
    imagenesExtra: [ // <-- DATOS FALSOS (rutas inventadas)
      '/imagenes/sanduchito/foto1.jpg',
      '/imagenes/sanduchito/foto2.jpg',
      '/imagenes/sanduchito/foto3.jpg'
    ],
    coordenadas: { lat: -1.3512, lng: -80.5802 }, // <-- DATO FALSO (aprox.)
  },
  {
    id: 'cevicheria-el-refugio',
    nombre: 'Cevichería El Refugio', // Dato real (inferido)
    categoria: 'Mariscos', // <-- DATO FALSO (inferido)
    imagenUrl: '/imagenes/cevicheria-el-refugio/principal.jpg', // <-- DATO FALSO (ruta inventada)
    horario: '09:30 AM - 04:30 PM', // <-- DATO FALSO
    telefono: '0993196769', // Dato real
    diasAtencion: ['Viernes', 'Sábado', 'Domingo'], // <-- DATO FALSO
    direccionFisica: 'JCXC+J7W, Jipijapa', // Dato real
    menuUrl: '#', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/cevicheria_el_refugio', // Dato real
    imagenesExtra: [ // <-- DATOS FALSOS (rutas inventadas)
      '/imagenes/cevicheria-el-refugio/foto1.jpg',
      '/imagenes/cevicheria-el-refugio/foto2.jpg',
      '/imagenes/cevicheria-el-refugio/foto3.jpg'
    ],
    coordenadas: { lat: -1.3508, lng: -80.5793 }, // <-- DATO FALSO (aprox.)
  },
  // --- ⬆️ FIN DE LOS 6 LOCALES NUEVOS ⬆️ ---
];