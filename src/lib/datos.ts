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
  ubicacionUrl: string;
}

// 2. La lista completa de locales, ahora todos con coordenadas.
export const locales: Local[] = [

  {
    id: 'cevicheria-overtime',
    nombre: 'Cevichería Overtime', 
    categoria: 'Mariscos', 
    imagenUrl: '/imagenes/cevicheria-overtime/logo.png', 
    horario: '8:30 AM - 03:00 PM', 
    telefono: '0989825565', 
    diasAtencion: ['Lunes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'MC3F+2HV, 10 de Agosto, Jipijapa', // Dato real
    menuUrl: '#', // sin el dato
    instagram: 'https://www.instagram.com/overtime.cevicheria', 
    imagenesExtra: [ // Datos de tu captura
      '/imagenes/cevicheria-overtime/comida1.png',
      '/imagenes/cevicheria-overtime/comida2.png',
      '/imagenes/cevicheria-overtime/comida3.png',
      '/imagenes/cevicheria-overtime/comida4.png',
      '/imagenes/cevicheria-overtime/comida5.png',
    ],
    coordenadas: { lat: -1.3474, lng: -80.5785 },
    ubicacionUrl: 'https://maps.app.goo.gl/M9UoVto9vBb8JRC3A',
  },
  {
    id: 'parrillada-edward',
    nombre: 'Parrillada Edward', // Dato real (inferido)
    categoria: 'Parrillada', // real
    imagenUrl: '/imagenes/parrillada-edward/edward-logo.png',
    horario: '05:00 PM - 11:00 PM', // <-- DATO FALSO
    telefono: '0987040472', // Dato real
    diasAtencion: ['Lunes','Martes' ,'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], // <-- DATO FALSO
    direccionFisica: 'Bolivar y, C. Guayas, Jipijapa 130301', // Dato real
    menuUrl: '#', // aun no tenemos
    instagram: 'https://www.instagram.com/parrilladaedward', // Dato real
    imagenesExtra: [ // Datos de tu captura
      '/imagenes/parrillada-edward/comida1.PNG',
      '/imagenes/parrillada-edward/comida2.PNG',
      '/imagenes/parrillada-edward/comida3.PNG',
      '/imagenes/parrillada-edward/comida4.PNG',
      '/imagenes/parrillada-edward/comida5.PNG',
    ],
    coordenadas: { lat: -1.3489617491380343, lng: -80.58085514047282 }, 
    ubicacionUrl: 'https://maps.app.goo.gl/HGUddxax8ZpD5BJa6',
  },
  {
    id: 'luister-maloso',
    nombre: 'Luister Maloso', // Dato real (inferido)
    categoria: 'Parrillada', // <-- DATO FALSO (inferido)
    imagenUrl: '/imagenes/luister-maloso/luister-logo.PNG', // <-- DATO FALSO (ruta inventada)
    horario: '05:00 PM - 10:30 PM', // <-- real
    telefono: '0984540603', // Dato real
    diasAtencion: ['Miercoles','Jueves','Viernes', 'Sábado', 'Domingo'], 
    direccionFisica: 'Rocafuerte entre Febres Cordero, y, Jipijapa 130301', // Dato real
    menuUrl: '#', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/luistermaloso?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', // Dato real
    imagenesExtra: [ // <-- DATOS FALSOS (rutas inventadas)
      '/imagenes/luister-maloso/local1.PNG',
      '/imagenes/luister-maloso/comida1.PNG',
      '/imagenes/luister-maloso/comida2.PNG',
      '/imagenes/luister-maloso/comida3.PNG',
      '/imagenes/luister-maloso/comida4.PNG',
      '/imagenes/luister-maloso/comida5.PNG',
      '/imagenes/luister-maloso/comida6.PNG',
      '/imagenes/luister-maloso/comida7.PNG',
      '/imagenes/luister-maloso/comida8.PNG'
    ],
    coordenadas: { lat: -1.3499601624772233, lng: -80.58142771475086 }, 
    ubicacionUrl: 'https://maps.app.goo.gl/m5LTeqS7jLPJKZL26',
  },
  {
    id: 'raspados-restaurante',
    nombre: 'Raspados Restaurante', // 
    categoria: 'Comida Rápida', //
    imagenUrl: '/imagenes/raspados-restaurante/raspados-logo.PNG',
    horario: '06:00 PM - 11:00 PM',
    telefono: '0978780863', // Dato real
    diasAtencion: ['Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Jipijapa Cdla. Parrales Iguale Calles, y H. Vasquez Esquina, Jipijapa 130305', // Dato real
    menuUrl: '/imagenes/raspados-restaurante/menu.pdf', // <-- DATO FALSO (placeholder)
    instagram: 'https://www.instagram.com/raspadosrestaurante?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', // Dato real
    imagenesExtra: [ 
      '/imagenes/raspados-restaurante/comida1.PNG',
      '/imagenes/raspados-restaurante/comida2.PNG',
      '/imagenes/raspados-restaurante/comida3.PNG',
      '/imagenes/raspados-restaurante/comida4.PNG',
      '/imagenes/raspados-restaurante/comida5.PNG',
      '/imagenes/raspados-restaurante/comida6.PNG',
      '/imagenes/raspados-restaurante/menu1.PNG',
      '/imagenes/raspados-restaurante/menu2.PNG',
      '/imagenes/raspados-restaurante/menu3.PNG',
      '/imagenes/raspados-restaurante/menu4.PNG',
      '/imagenes/raspados-restaurante/menu5.PNG',
      '/imagenes/raspados-restaurante/menu6.PNG',
    ],
    coordenadas: { lat: -1.360797159853025, lng: -80.59496836213194 }, 
    ubicacionUrl: 'https://maps.app.goo.gl/VpCWfxkDkZP3RpsF6',
  },
  {
    id: 'sanduchito',
    nombre: 'Sanduchito', 
    categoria: 'Comida Rápida', 
    imagenUrl: '/imagenes/sanduchito/sanduchito-logo.png', 
    horario: '08:00 AM - 11:00 PM',
    telefono: '0978957741', // Dato real
    diasAtencion: ['Lunes','Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], 
    direccionFisica: 'JCX9+FWX, Avenida Alejo Lascano, Jipijapa', // Dato real
    menuUrl: '#', 
    instagram: 'https://www.instagram.com/sanduchito_593?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', // Dato real
    imagenesExtra: [ 
      '/imagenes/sanduchito/comida1.png',
      '/imagenes/sanduchito/comida2.png',
      '/imagenes/sanduchito/comida3.png'
    ],
    coordenadas: { lat: -1.3510235878080221,  lng: -80.5801650240795},
    ubicacionUrl: 'https://maps.app.goo.gl/YA998hwT4Sj2Y1rx9',
  },
  {
    id: 'cevicheria-el-refugio',
    nombre: 'Cevichería El Refugio',
    categoria: 'Mariscos', 
    imagenUrl: '/imagenes/cevicheria-refugio/logo.jpg', 
    horario: '09:30 AM - 04:30 PM', 
    telefono: '0993196769', // Dato real
    diasAtencion: ['Lunes','Martes' ,'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], 
    direccionFisica: 'JCX9+FWX, Avenida Alejo Lascano, Jipijapa',
    menuUrl: '#', 
    instagram: 'https://www.instagram.com/cevicheria_el_refugio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', // Dato real
    imagenesExtra: [ 
      '/imagenes/cevicheria-refugio/comida1.PNG',
      '/imagenes/cevicheria-refugio/comida2.PNG',
      '/imagenes/cevicheria-refugio/comida3.PNG'
    ],
    coordenadas: { lat: -1.351010832562022,  lng: -80.5800757125258 }, 
    ubicacionUrl: 'https://maps.app.goo.gl/ePa4tpVAGd6mAxUN9',
  },
 // los nuevos locales de Manta y Portoviejo
  // --- PORTOVIEJO ---
  {
    id: 'iche-restaurante',
    nombre: 'Iche Restaurante',
    categoria: 'Gourmet',
    imagenUrl: '/imagenes/iche-restaurante/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '12:00 PM - 11:00 PM',
    telefono: '0991847502',
    diasAtencion: ['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Km 1.5 vía a Manta, Portoviejo',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/iche.rest/',
    imagenesExtra: [
      '/imagenes/iche-restaurante/foto1.jpg',
      '/imagenes/iche-restaurante/foto2.jpg',
      '/imagenes/iche-restaurante/foto3.jpg',
    ],
    coordenadas: { lat: -1.0543, lng: -80.4739 },
    ubicacionUrl: 'https://www.google.com/search?q=https://www.google.com/maps%3Fq%3D$',
  },
  {
    id: 'el-tomate-grill',
    nombre: 'El Tomate Grill',
    categoria: 'Parrillada',
    imagenUrl: '/imagenes/el-tomate-grill/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '12:00 PM - 11:00 PM',
    telefono: '0993081740',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Reales Tamarindos, Portoviejo',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/eltomategrill/',
    imagenesExtra: [
      '/imagenes/el-tomate-grill/foto1.jpg',
      '/imagenes/el-tomate-grill/foto2.jpg',
      '/imagenes/el-tomate-grill/foto3.jpg',
    ],
    coordenadas: { lat: -1.0425, lng: -80.4665 },
    ubicacionUrl: 'https://www.google.com/search?q=https://www.google.com/maps/search/%3Fapi%3D1%26query%3D$',
  },
  {
    id: 'la-esquina-de-ales',
    nombre: 'La Esquina de Ales',
    categoria: 'Comida Rápida',
    imagenUrl: '/imagenes/la-esquina-de-ales/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '5:00 PM - 11:00 PM',
    telefono: '0997719091',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Manabí y calle C, Portoviejo',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/laesquinadeales/',
    imagenesExtra: [
      '/imagenes/la-esquina-de-ales/foto1.jpg',
      '/imagenes/la-esquina-de-ales/foto2.jpg',
      '/imagenes/la-esquina-de-ales/foto3.jpg',
    ],
    coordenadas: { lat: -1.0501, lng: -80.4674 },
    ubicacionUrl: 'https://www.google.com/search?q=https://www.google.com/maps/search/%3Fapi%3D1%26query%3D',
  },
  {
    id: 'cocomar-portoviejo',
    nombre: 'Cocomar Portoviejo',
    categoria: 'Mariscos',
    imagenUrl: '/imagenes/cocomar-portoviejo/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '10:00 AM - 5:00 PM',
    telefono: '0994489444',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Universitaria, Portoviejo',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/cocomar_portoviejo/',
    imagenesExtra: [
      '/imagenes/cocomar-portoviejo/foto1.jpg',
      '/imagenes/cocomar-portoviejo/foto2.jpg',
      '/imagenes/cocomar-portoviejo/foto3.jpg',
    ],
    coordenadas: { lat: -1.0401, lng: -80.4690 },
    ubicacionUrl: 'https://maps.app.goo.gl/ePa4tpVAGd6mAxUN91',
  },
  {
    id: 'asadero-el-toro',
    nombre: 'Asadero El Toro',
    categoria: 'Parrillada',
    imagenUrl: '/imagenes/asadero-el-toro/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '11:00 AM - 11:00 PM',
    telefono: '0980137772',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Manabí, Portoviejo',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/asaderoeltoro.ec/',
    imagenesExtra: [
      '/imagenes/asadero-el-toro/foto1.jpg',
      '/imagenes/asadero-el-toro/foto2.jpg',
      '/imagenes/asadero-el-toro/foto3.jpg',
    ],
    coordenadas: { lat: -1.0506, lng: -80.4682 },
    ubicacionUrl: 'https://maps.app.goo.gl/ePa4tpVAGd6mAxUN93',
  },

  // --- MANTA ---

  {
    id: 'martinica',
    nombre: 'Martinica',
    categoria: 'Gourmet',
    imagenUrl: '/imagenes/martinica/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '1:00 PM - 11:00 PM',
    telefono: '0989038798',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Flavio Reyes y Calle 27, Manta',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/martinica.rest/',
    imagenesExtra: [
      '/imagenes/martinica/foto1.jpg',
      '/imagenes/martinica/foto2.jpg',
      '/imagenes/martinica/foto3.jpg',
    ],
    coordenadas: { lat: -0.9416, lng: -80.7208 },
    ubicacionUrl: 'https://www.google.com/maps?q=',
  },
  {
    id: 'la-pata-gorda',
    nombre: 'La Pata Gorda',
    categoria: 'Mariscos',
    imagenUrl: '/imagenes/la-pata-gorda/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '11:00 AM - 9:00 PM',
    telefono: '0993080432',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Malecón Escénico, Manta',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/lapatagordamanta/',
    imagenesExtra: [
      '/imagenes/la-pata-gorda/foto1.jpg',
      '/imagenes/la-pata-gorda/foto2.jpg',
      '/imagenes/la-pata-gorda/foto3.jpg',
    ],
    coordenadas: { lat: -0.9478, lng: -80.7101 },
    ubicacionUrl: 'https://www.google.com/search?q=https://www.google.com/maps%3Fq%3D',
  },
  {
    id: 'muya-manta',
    nombre: 'Muya',
    categoria: 'Fusión',
    imagenUrl: '/imagenes/muya-manta/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '5:00 PM - 11:00 PM',
    telefono: '0984446023',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Barrio Umiña, Manta',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/muya.manta/',
    imagenesExtra: [
      '/imagenes/muya-manta/foto1.jpg',
      '/imagenes/muya-manta/foto2.jpg',
      '/imagenes/muya-manta/foto3.jpg',
    ],
    coordenadas: { lat: -0.9392, lng: -80.7230 },
    ubicacionUrl: 'https://www.google.com/maps/search/?api=1&query=',
  },
  {
    id: 'el-charrua-manta',
    nombre: 'El Charrúa',
    categoria: 'Parrillada',
    imagenUrl: '/imagenes/el-charrua-manta/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '12:00 PM - 11:00 PM',
    telefono: '052620906',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Av. Flavio Reyes, Manta',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/elcharruamanta/',
    imagenesExtra: [
      '/imagenes/el-charrua-manta/foto1.jpg',
      '/imagenes/el-charrua-manta/foto2.jpg',
      '/imagenes/el-charrua-manta/foto3.jpg',
    ],
    coordenadas: { lat: -0.9431, lng: -80.7200 },
    ubicacionUrl: 'https://maps.app.goo.gl/ePa4tpVAGd6mAxUN90',
  },
  {
    id: 'umina-sushi',
    nombre: 'Umiña Sushi',
    categoria: 'Sushi',
    imagenUrl: '/imagenes/umina-sushi/logo.jpg', // <-- RUTA DE EJEMPLO
    horario: '1:00 PM - 11:00 PM',
    telefono: '0999200800',
    diasAtencion: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    direccionFisica: 'Calle 24 y Av. Flavio Reyes, Manta',
    menuUrl: '#',
    instagram: 'https://www.instagram.com/uminasushi/',
    imagenesExtra: [
      '/imagenes/umina-sushi/foto1.jpg',
      '/imagenes/umina-sushi/foto2.jpg',
      '/imagenes/umina-sushi/foto3.jpg',
    ],
    coordenadas: { lat: -0.9429, lng: -80.7202 },
    ubicacionUrl: 'https://maps.app.goo.gl/ePa4tpVAGd6mAxUN92',
  },
];