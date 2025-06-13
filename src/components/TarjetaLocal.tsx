// src/components/TarjetaLocal.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Local } from '@/lib/datos';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // 1. Importamos el icono de flecha

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
    // Toda la tarjeta sigue siendo un enlace para mejor accesibilidad
    <Link href={`/locales/${local.id}`} className="block group">
      <motion.div 
        // 2. Le decimos al contenedor que sea un flex-col para posicionar el botón abajo
        className="overflow-hidden rounded-lg bg-white shadow-md h-full flex flex-col"
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
        
        {/* 3. El contenedor del texto ahora crece para ocupar el espacio disponible */}
        <div className="p-4 flex-grow flex flex-col">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316]">
              {local.categoria}
            </span>
            <h2 className="mt-1 text-xl font-bold truncate">
              {local.nombre}
            </h2>
            <p className="mt-2 text-sm text-[#78716C]">
              {local.direccionFisica}
            </p>
          </div>
          
          {/* 4. AQUÍ ESTÁ EL NUEVO BOTÓN */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div 
              className="inline-flex items-center gap-2 text-[#F97316] font-semibold group-hover:gap-3 transition-all duration-300"
            >
              Ver Detalles
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
