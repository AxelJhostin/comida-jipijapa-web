// src/components/TarjetaLocal.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Local } from '@/lib/datos';
import { motion } from 'framer-motion'; // 1. Importamos 'motion'

export default function TarjetaLocal({ local }: { local: Local }) {
  
  // 2. Definimos los "estados" de nuestra animación
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Estado inicial: invisible y 50px más abajo
    visible: { 
      opacity: 1, 
      y: 0, // Estado final: totalmente visible y en su posición original
      transition: { duration: 0.5 } // Duración de la animación
    },
  };

  return (
    <Link href={`/locales/${local.id}`} className="block group">
      {/* 3. Reemplazamos el 'div' principal con 'motion.div' y le pasamos las animaciones */}
      <motion.div 
        className="overflow-hidden rounded-lg bg-white shadow-md h-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible" // Anima cuando el componente entra en la pantalla
        viewport={{ once: true }} // La animación solo ocurre una vez
      >
        <div className="relative h-48 w-full">
          <Image
            src={local.imagenUrl}
            alt={`Imagen de ${local.nombre}`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
        
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
      </motion.div>
    </Link>
  );
}