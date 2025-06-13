// src/components/TarjetaLocal.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Local } from '@/lib/datos';
import { motion } from 'framer-motion';

export default function TarjetaLocal({ local }: { local: Local }) {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <Link href={`/locales/${local.id}`} className="block group">
      <motion.div 
        className="overflow-hidden rounded-lg bg-white shadow-md h-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
          {/* Usamos el nuevo naranja principal para la categoría */}
          <span className="text-xs font-semibold uppercase tracking-wider text-naranja-principal">
            {local.categoria}
          </span>
          {/* El nombre usará el color por defecto (marrón oscuro) */}
          <h2 className="mt-1 text-xl font-bold truncate">
            {local.nombre}
          </h2>
          {/* La dirección usará el color secundario */}
          <p className="mt-2 text-sm text-texto-secundario">
            {local.direccionFisica}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
