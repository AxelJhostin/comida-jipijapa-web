// src/app/mapa/page.tsx

// AÑADIMOS ESTA DIRECTIVA para convertir la página en un Componente de Cliente
"use client";

import dynamic from 'next/dynamic';

// Cargamos el componente del mapa de forma dinámica, desactivando el renderizado en servidor (ssr: false)
const MapaDeLocales = dynamic(() => import('@/components/MapaDeLocales'), { 
  ssr: false,
  loading: () => <p className="text-center mt-10">Cargando mapa...</p> // Mensaje mientras carga
});

export default function MapaPage() {
  return (
    <main>
      <MapaDeLocales />
    </main>
  );
}
