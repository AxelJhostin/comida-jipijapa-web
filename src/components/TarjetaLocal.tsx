// src/components/TarjetaLocal.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Local } from '@/lib/datos';
import { motion } from 'framer-motion';
// 1. Importamos el nuevo icono 'MapPin'
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
        
        <div className="p-4 flex-grow flex flex-col">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-naranja-principal">
              {local.categoria}
            </span>
            <h2 className="mt-1 text-xl font-bold truncate">
              {local.nombre}
            </h2>
            
            {/* --- SECCIÓN DE INFORMACIÓN ACTUALIZADA --- */}
            <div className="mt-4 space-y-2 text-sm text-texto-secundario">
              {/* 2. Añadimos el icono de ubicación y lo ponemos en un flex container */}
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-naranja-principal" />
                <span>{local.direccionFisica}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* 3. Cambiamos el color del icono a nuestro naranja principal */}
                <Clock size={16} className="text-naranja-principal" />
                <span>{local.horario}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* 4. Cambiamos el color del icono a nuestro naranja principal */}
                <Calendar size={16} className="text-naranja-principal" />
                <span>{local.diasAtencion.slice(0, 3).join(', ')}...</span>
              </div>
            </div>
            {/* --- FIN DE LA SECCIÓN --- */}

          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div 
              className="inline-flex items-center gap-2 text-naranja-principal font-semibold group-hover:gap-3 transition-all duration-300"
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
