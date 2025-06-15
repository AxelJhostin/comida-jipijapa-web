// src/components/GaleriaLocal.tsx
"use client"; // Marcamos este como un componente de cliente para la interactividad

import { useState } from "react";
import Image from "next/image";
import type { Local } from "@/lib/datos"; // Importamos la "forma" de nuestros datos

// Este componente recibe todo el 'local' como un prop
export default function GaleriaLocal({ local }: { local: Local }) {
  // Toda la lógica de 'useState' vive aquí ahora
  const [imagenSeleccionada, setImagenSeleccionada] = useState(local.imagenUrl);

  // Creamos la lista de todas las imágenes disponibles
  const todasLasImagenes = [local.imagenUrl, ...local.imagenesExtra];

  return (
    <>
      {/* Imagen Principal */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imagenSeleccionada}
          alt={`Imagen de ${local.nombre}`}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Título y Categoría (los repetimos aquí para que estén juntos visualmente) */}
      <div className="mt-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-naranja-principal">
          {local.categoria}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-texto-principal mt-1">
          {local.nombre}
        </h1>
      </div>

      {/* Galería de Miniaturas Interactivas */}
      {todasLasImagenes.length > 1 && (
        <div className="mt-8">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {todasLasImagenes.map((imgUrl, index) => (
              <div 
                key={index} 
                className={`relative h-24 w-full overflow-hidden rounded-lg shadow-md cursor-pointer border-4 transition-all
                  ${imagenSeleccionada === imgUrl 
                    ? 'border-naranja-principal scale-105'
                    : 'border-transparent hover:border-naranja-principal/50'
                  }`
                }
                onClick={() => setImagenSeleccionada(imgUrl)}
              >
                <Image 
                  src={imgUrl} 
                  alt={`Galería de ${local.nombre} - ${index + 1}`} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
