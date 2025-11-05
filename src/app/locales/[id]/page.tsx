// src/app/locales/[id]/page.tsx
import { locales } from "@/lib/datos";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, Calendar, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import GaleriaLocal from "@/components/GaleriaLocal";
import type { ReactNode } from 'react';

// --- HELPER COMPONENT 1: InfoItem ---
// He movido la lógica repetitiva de "icono + info" a este componente
function InfoItem({ icon, title, children }: { icon: ReactNode, title: string, children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[#F97316] mt-1 flex-shrink-0">{icon}</span>
      <div>
        <p className="font-semibold text-[#422006] dark:text-gray-300">{title}</p>
        <p className="text-[#78716C] dark:text-gray-400">{children}</p>
      </div>
    </div>
  );
}

// --- HELPER COMPONENT 2: ActionButton ---
// He movido el estilo de los botones de acción a este componente
function ActionButton({ icon, label, href, target }: { icon: ReactNode, label: string, href: string, target?: string }) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      // Clases mejoradas para flex-wrap: crecen para llenar el espacio pero tienen un mínimo
      className="flex-1 sm:flex-auto flex items-center justify-center text-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 font-semibold text-[#422006] dark:text-[#FFFBF5] hover:bg-[#F97316] hover:text-white transition-colors min-w-[160px]"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

// --- PROPS DE LA PÁGINA ---
type PaginaLocalProps = {
  params: Promise<{ id: string }>;
};

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default async function PaginaLocal({ params }: PaginaLocalProps) {
  
  const { id } = await params;
  const local = locales.find((l) => l.id === id);

  if (!local) {
    notFound();
  }

  const mensajeWhatsApp = encodeURIComponent(`¡Hola! Vi su local "${local.nombre}" en el catálogo Jipi-Jama y quisiera más información.`);
  
  // Nota: Ya no necesitamos la variable 'googleMapsUrl', la usaremos directamente.

  return (
    <main className="bg-crema dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto max-w-5xl p-4 sm:p-8">
        
        <GaleriaLocal local={local} />

        <div className="mt-12 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
          
          {/* --- SECCIÓN DE INFORMACIÓN (Refactorizada) --- */}
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-4 text-[#422006] dark:text-[#FFFBF5]">Información del Local</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              
              <InfoItem icon={<Clock size={20} />} title="Horario">
                {local.horario}
              </InfoItem>

              <InfoItem icon={<Calendar size={20} />} title="Días de Atención">
                {local.diasAtencion.join(', ')}
              </InfoItem>

              <InfoItem icon={<MapPin size={20} />} title="Dirección">
                {local.direccionFisica}
              </InfoItem>

              <InfoItem icon={<Phone size={20} />} title="Teléfono">
                {local.telefono}
              </InfoItem>

            </div>
          </div>
          
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          
          {/* --- SECCIÓN DE CONTACTO (Refactorizada) --- */}
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-4 text-[#422006] dark:text-[#FFFBF5]">Contacto y Más</h2>
            
            {/* Contenedor de botones mejorado con flex-wrap para robustez */}
            <div className="flex flex-wrap gap-4">

              <ActionButton 
                icon={<Phone size={20} />} 
                label="Llamar" 
                href={`tel:${local.telefono}`} 
              />
              
              <ActionButton 
                icon={<MessageCircle size={20} />} 
                label="WhatsApp" 
                href={`https://wa.me/593${local.telefono.substring(1)}?text=${mensajeWhatsApp}`}
                target="_blank"
              />

              {/* --- BOTONES CONDICIONALES --- */}
              {/* Solo se muestra si ubicacionUrl NO es '#' y NO está vacío */}
              {local.ubicacionUrl && local.ubicacionUrl !== '#' && (
                <ActionButton 
                  icon={<MapPin size={20} />} 
                  label="Ver en Mapa" 
                  href={local.ubicacionUrl}
                  target="_blank"
                />
              )}

              {/* Solo se muestra si menuUrl NO es '#' y NO está vacío */}
              {local.menuUrl && local.menuUrl !== '#' && (
                <ActionButton 
                  icon={<ExternalLink size={20} />} 
                  label="Ver Menú" 
                  href={local.menuUrl}
                  target="_blank"
                />
              )}

              {/* Solo se muestra si instagram NO es '#' y NO está vacío */}
              {local.instagram && local.instagram !== '#' && (
                <ActionButton 
                  icon={<Instagram size={20} />} 
                  label="Instagram" 
                  href={local.instagram}
                  target="_blank"
                />
              )}
            
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}