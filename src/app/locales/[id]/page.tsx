// src/app/locales/[id]/page.tsx
import { locales } from "@/lib/datos";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Calendar, Instagram, ExternalLink, MessageCircle } from "lucide-react";

export default function PaginaLocal({ params }: { params: { id: string } }) {
  
  const local = locales.find((l) => l.id === params.id);

  if (!local) {
    notFound();
  }

  const mensajeWhatsApp = encodeURIComponent(`¡Hola! Vi su local "${local.nombre}" en el catálogo Sabores de Jipijapa y quisiera más información.`);

  return (
    <main className="bg-gray-50">
      <div className="container mx-auto max-w-4xl p-4 sm:p-8">
        
        {/* Imagen Principal */}
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={local.imagenUrl}
            alt={`Imagen de ${local.nombre}`}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Título y Categoría */}
        <div className="mt-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {local.categoria}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-1">
            {local.nombre}
          </h1>
        </div>

        {/* Tarjeta de Detalles e Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Información</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3"><Clock size={20} /> <span>{local.horario}</span></li>
              <li className="flex items-center gap-3"><Calendar size={20} /> <span>{local.diasAtencion.join(', ')}</span></li>
              <li className="flex items-center gap-3"><MapPin size={20} /> <span>{local.direccionFisica}</span></li>
              <li className="flex items-center gap-3"><Phone size={20} /> <span>{local.telefono}</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Contacto y Más</h2>
            <div className="flex flex-col space-y-3">
              <a href={local.menuUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:underline">
                <ExternalLink size={20} /> Ver Menú (PDF)
              </a>
              <a href={`tel:${local.telefono}`} className="flex items-center gap-3 text-blue-600 hover:underline">
                <Phone size={20} /> Llamar al Local
              </a>
              <a 
                href={`https://wa.me/593${local.telefono.substring(1)}?text=${mensajeWhatsApp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-blue-600 hover:underline"
              >
                <MessageCircle size={20} /> Escribir por WhatsApp
              </a>
              <a href={local.ubicacion} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:underline">
                <MapPin size={20} /> Ver en Google Maps
              </a>
              <a href={local.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:underline">
                <Instagram size={20} /> Visitar en Instagram
              </a>
            </div>
          </div>
        </div>
        
        {/* --- SECCIÓN DE LA GALERÍA DE IMÁGENES --- */}
        {/* Esto solo se mostrará si el array 'imagenesExtra' tiene al menos una imagen */}
        {local.imagenesExtra.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {local.imagenesExtra.map((imgUrl, index) => (
                <div key={index} className="relative h-48 w-full overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src={imgUrl} 
                    alt={`Galería de ${local.nombre} - ${index + 1}`} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}