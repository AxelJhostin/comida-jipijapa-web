// src/app/nosotros/page.tsx
import SeccionInfo from "@/components/SeccionInfo";
import { Target, Eye, Rocket } from "lucide-react";

export default function NosotrosPage() {
  return (
    // CORRECCIÓN: Quitamos el 'bg-gray-50' ya que el fondo 'crema' lo pone globals.css
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Nuestro Proyecto
          </h1>
          <p className="mt-4 text-xl text-[#78716C]">
            La historia y el corazón detrás de Sabores de Jipijapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <SeccionInfo Icono={Target} titulo="Nuestra Misión">
            Rescatar, promover y celebrar la rica herencia gastronómica de Jipijapa,
            conectando a los comensales con los auténticos sabores de nuestra tierra
            a través de una plataforma digital accesible y fácil de usar.
          </SeccionInfo>
          <SeccionInfo Icono={Eye} titulo="Nuestra Visión">
            Ser el referente digital indispensable para el turismo y la cultura
            gastronómica en la región de Manabí, inspirando a locales y visitantes
            a explorar y enamorarse de la cocina jipijapense.
          </SeccionInfo>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 text-[#F97316] rounded-full p-4">
              <Rocket size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Objetivos Clave</h2>
          <ul className="list-disc list-inside space-y-3 text-[#78716C] max-w-md mx-auto">
            <li>Crear el catálogo digital más completo y actualizado de la oferta gastronómica de Jipijapa.</li>
            <li>Facilitar el descubrimiento de nuevos locales tanto para turistas como para residentes.</li>
            <li>Impulsar la economía local apoyando a los pequeños y medianos emprendimientos de comida.</li>
            <li>Ofrecer una herramienta móvil (nuestra App) para una experiencia superior y directa.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}