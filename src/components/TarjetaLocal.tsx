// src/components/TarjetaLocal.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Local } from '@/lib/datos';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'; 

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
        // 1. Añadimos un fondo oscuro para la tarjeta en dark mode
        className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md h-full flex flex-col"
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
        
        <div className="p-4 flex-grow flex flex-col">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316]">
              {local.categoria}
            </span>
            {/* 2. Añadimos un color de texto claro para el nombre en dark mode */}
            <h2 className="mt-1 text-xl font-bold truncate dark:text-gray-100">
              {local.nombre}
            </h2>
            
            {/* 3. Añadimos un color más claro para la info secundaria en dark mode */}
            <div className="mt-4 space-y-2 text-sm text-[#78716C] dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#F97316]" />
                <span>{local.direccionFisica}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#F97316]" />
                <span>{local.horario}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#F97316]" />
                <span>{local.diasAtencion.slice(0, 3).join(', ')}...</span>
              </div>
            </div>
          </div>
          
          {/* 4. Cambiamos el color del borde superior en dark mode */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
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
