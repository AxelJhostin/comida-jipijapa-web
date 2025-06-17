// src/app/locales/[id]/page.tsx
import { locales } from "@/lib/datos";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Calendar, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import GaleriaLocal from "@/components/GaleriaLocal";

type PaginaLocalProps = {
  params: Promise<{ id: string }>;
};

export default async function PaginaLocal({ params }: PaginaLocalProps) {
  
  const { id } = await params;

  const local = locales.find((l) => l.id === id);

  if (!local) {
    notFound();
  }

  const mensajeWhatsApp = encodeURIComponent(`¡Hola! Vi su local "${local.nombre}" en el catálogo Jipi-Jama y quisiera más información.`);
  
  // Creamos una URL de búsqueda para Google Maps usando la dirección física
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local.direccionFisica)}`;

  return (
    <main className="bg-crema min-h-screen">
      <div className="container mx-auto max-w-5xl p-4 sm:p-8">
        
        <GaleriaLocal local={local} />

        <div className="mt-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-4">Información del Local</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-texto-secundario">
              {/* CORRECCIÓN: Usamos el código de color directo para los iconos */}
              <div className="flex items-start gap-3"><Clock className="text-[#F97316] mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Horario</p><p>{local.horario}</p></div></div>
              <div className="flex items-start gap-3"><Calendar className="text-[#F97316] mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Días de Atención</p><p>{local.diasAtencion.join(', ')}</p></div></div>
              <div className="flex items-start gap-3 sm:col-span-2"><MapPin className="text-[#F97316] mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Dirección</p><p>{local.direccionFisica}</p></div></div>
              <div className="flex items-start gap-3"><Phone className="text-[#F97316] mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Teléfono</p><p>{local.telefono}</p></div></div>
            </div>
          </div>
          
          <hr className="my-8 border-gray-200" />
          
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-4">Contacto y Más</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* CORRECCIÓN: Usamos códigos de color directos para el hover y el texto */}
              <a href={`tel:${local.telefono}`} className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold text-[#422006] hover:bg-[#F97316] hover:text-white transition-colors"><Phone size={20} /> Llamar</a>
              <a href={`https://wa.me/593${local.telefono.substring(1)}?text=${mensajeWhatsApp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold text-[#422006] hover:bg-[#F97316] hover:text-white transition-colors"><MessageCircle size={20} /> WhatsApp</a>
              {/* CORRECCIÓN: El href ahora usa nuestra nueva variable googleMapsUrl */}
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold text-[#422006] hover:bg-[#F97316] hover:text-white transition-colors"><MapPin size={20} /> Ver en Mapa</a>
              <a href={local.menuUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold text-[#422006] hover:bg-[#F97316] hover:text-white transition-colors"><ExternalLink size={20} /> Ver Menú</a>
              <a href={local.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold text-[#422006] hover:bg-[#F97316] hover:text-white transition-colors"><Instagram size={20} /> Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
