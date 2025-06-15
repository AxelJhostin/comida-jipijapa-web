// src/app/locales/[id]/page.tsx
import { locales } from "@/lib/datos";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Calendar, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import GaleriaLocal from "@/components/GaleriaLocal"; // Importamos nuestro componente de cliente

// 1. Definimos el tipo para los props, especificando que 'params' es una Promesa.
//    Esto es exactamente lo que encontraste en tu investigación.
type PaginaLocalProps = {
  params: Promise<{ id: string }>;
};

// 2. La función sigue siendo 'async'.
export default async function PaginaLocal({ params }: PaginaLocalProps) {
  
  // 3. ¡EL CAMBIO CLAVE! Usamos 'await' para esperar que la promesa 'params' se resuelva
  //    y luego extraemos el 'id'.
  const { id } = await params;

  // Ahora 'id' es un string normal y podemos usarlo.
  const local = locales.find((l) => l.id === id);

  if (!local) {
    notFound();
  }

  const mensajeWhatsApp = encodeURIComponent(`¡Hola! Vi su local "${local.nombre}" en el catálogo Jipi-Jama y quisiera más información.`);

  return (
    <main className="bg-crema min-h-screen">
      <div className="container mx-auto max-w-5xl p-4 sm:p-8">
        
        {/* Pasamos el objeto 'local' ya resuelto al componente de cliente */}
        <GaleriaLocal local={local} />

        {/* El resto del código de la página se mantiene igual */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-4">Información del Local</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-texto-secundario">
              <div className="flex items-start gap-3"><Clock className="text-naranja-principal mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Horario</p><p>{local.horario}</p></div></div>
              <div className="flex items-start gap-3"><Calendar className="text-naranja-principal mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Días de Atención</p><p>{local.diasAtencion.join(', ')}</p></div></div>
              <div className="flex items-start gap-3 sm:col-span-2"><MapPin className="text-naranja-principal mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Dirección</p><p>{local.direccionFisica}</p></div></div>
              <div className="flex items-start gap-3"><Phone className="text-naranja-principal mt-1 flex-shrink-0" size={20} /><div><p className="font-semibold text-texto-principal">Teléfono</p><p>{local.telefono}</p></div></div>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-4">Contacto y Más</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href={`tel:${local.telefono}`} className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold hover:bg-naranja-principal hover:text-white transition-colors"><Phone size={20} /> Llamar</a>
              <a href={`https://wa.me/593${local.telefono.substring(1)}?text=${mensajeWhatsApp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold hover:bg-naranja-principal hover:text-white transition-colors"><MessageCircle size={20} /> WhatsApp</a>
              <a href={local.ubicacion} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold hover:bg-naranja-principal hover:text-white transition-colors"><MapPin size={20} /> Ver en Mapa</a>
              <a href={local.menuUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold hover:bg-naranja-principal hover:text-white transition-colors"><ExternalLink size={20} /> Ver Menú</a>
              <a href={local.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 font-semibold hover:bg-naranja-principal hover:text-white transition-colors"><Instagram size={20} /> Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
