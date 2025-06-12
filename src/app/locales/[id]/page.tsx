// src/app/locales/[id]/page.tsx
import { locales } from "@/lib/datos";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Calendar, Instagram, ExternalLink } from "lucide-react"; // Usaremos una librería de íconos popular

// Esta página recibe 'params' que contienen el 'id' de la URL
export default function PaginaLocal({ params }: { params: { id: string } }) {

  // 1. Buscamos el local correcto en nuestros datos usando el id de la URL
  const local = locales.find((l) => l.id === params.id);

  // 2. Si no se encuentra un local con ese id, mostramos una página 404
  if (!local) {
    notFound();
  }

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
            priority // Carga esta imagen primero
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

        {/* Tarjeta de Detalles */}
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

          {/* Tarjeta de Acciones */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Contacto y Más</h2>
            <div className="flex flex-col space-y-3">
              {/* Estos son los equivalentes a tus 'Intents' de Android */}
              <a href={local.menuUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:underline">
                <ExternalLink size={20} /> Ver Menú (PDF)
              </a>
              <a href={`tel:${local.telefono}`} className="flex items-center gap-3 text-blue-600 hover:underline">
                <Phone size={20} /> Llamar al Local
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

        {/* Galería de Imágenes Extra */}
        {local.imagenesExtra.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {local.imagenesExtra.map((img, index) => (
                <div key={index} className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image src={img} alt={`Galería de ${local.nombre} - ${index + 1}`} fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}