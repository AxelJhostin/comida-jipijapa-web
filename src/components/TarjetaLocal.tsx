// src/components/TarjetaLocal.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Local } from '@/lib/datos'; // Importamos la "forma" de nuestros datos

// El componente recibe un 'local' como prop
export default function TarjetaLocal({ local }: { local: Local }) {
  return (
    // Toda la tarjeta es un enlace que lleva a la página de detalle del local
    <Link href={`/locales/${local.id}`} className="block group">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
        {/* Contenedor para la imagen */}
        <div className="relative h-48 w-full">
          <Image
            src={local.imagenUrl}
            alt={`Imagen de ${local.nombre}`}
            fill // 'fill' hace que la imagen cubra el contenedor
            style={{ objectFit: 'cover' }} // Equivalente a ContentScale.Crop
            className="transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>

        {/* Contenedor para el texto */}
        <div className="p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            {local.categoria}
          </span>
          <h2 className="mt-1 text-xl font-bold text-gray-800 truncate">
            {local.nombre}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {local.direccionFisica}
          </p>
        </div>
      </div>
    </Link>
  );
}