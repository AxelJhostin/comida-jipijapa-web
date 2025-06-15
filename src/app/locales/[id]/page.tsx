// src/app/locales/[id]/page.tsx
import { locales } from "@/lib/datos";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Calendar, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import GaleriaLocal from "@/components/GaleriaLocal"; // 1. Importamos nuestro nuevo componente

// Este ahora es un Componente de Servidor, más simple y rápido
export default function PaginaLocal({ params }: { params: { id: string } }) {
  
  const local = locales.find((l) => l.id === params.id);

  if (!local) {
    notFound();
  }

  const mensajeWhatsApp = encodeURIComponent(`¡Hola! Vi su local "${local.nombre}" en el catálogo Jipi-Jama y quisiera más información.`);

  return (
    <main className="bg-crema">
      <div className="container mx-auto max-w-4xl p-4 sm:p-8">
        
        {/* 2. Usamos nuestro nuevo componente para toda la parte de la galería */}
        <GaleriaLocal local={local} />

        {/* Tarjetas de Información y Contacto (esta parte no cambia) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Información</h2>
            <ul className="space-y-4 text-texto-secundario">
              <li className="flex items-center gap-3"><Clock size={20} /> <span>{local.horario}</span></li>
              <li className="flex items-center gap-3"><Calendar size={20} /> <span>{local.diasAtencion.join(', ')}</span></li>
              <li className="flex items-center gap-3"><MapPin size={20} /> <span>{local.direccionFisica}</span></li>
              <li className="flex items-center gap-3"><Phone size={20} /> <span>{local.telefono}</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Contacto y Más</h2>
            <div className="flex flex-col space-y-3">
              <a href={local.menuUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-naranja-principal hover:underline">
                <ExternalLink size={20} /> Ver Menú (PDF)
              </a>
              <a href={`tel:${local.telefono}`} className="flex items-center gap-3 text-naranja-principal hover:underline">
                <Phone size={20} /> Llamar al Local
              </a>
              <a 
                href={`https://wa.me/593${local.telefono.substring(1)}?text=${mensajeWhatsApp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-naranja-principal hover:underline"
              >
                <MessageCircle size={20} /> Escribir por WhatsApp
              </a>
              <a href={local.ubicacion} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-naranja-principal hover:underline">
                <MapPin size={20} /> Ver en Google Maps
              </a>
              <a href={local.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-naranja-principal hover:underline">
                <Instagram size={20} /> Visitar en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
