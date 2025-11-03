// src/app/nosotros/page.tsx
import SeccionInfo from "@/components/SeccionInfo";
import { Target, Eye, Rocket } from "lucide-react";

export default function NosotrosPage() {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">

        <div className="text-center mb-16">
          {/* CORRECCIÓN: Añadimos colores para modo oscuro */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-texto-principal dark:text-crema">
            El Corazón de Jipi-Jama
          </h1>
          <p className="mt-4 text-xl text-texto-secundario dark:text-gray-400">
            Somos más que un catálogo; somos un movimiento para celebrar y compartir la auténtica sazón de nuestra tierra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <SeccionInfo Icono={Target} titulo="Nuestra Misión">
            Ser el puente digital que conecta a los amantes de la buena comida con los tesoros culinarios, conocidos y por descubrir, de Jipijapa. Facilitamos el acceso a información auténtica y actualizada para enriquecer cada experiencia gastronómica.
          </SeccionInfo>
          <SeccionInfo Icono={Eye} titulo="Nuestra Visión">
            Convertir a Jipijapa en un destino gastronómico reconocido a nivel nacional, impulsado por la tecnología y el amor a nuestras raíces. Aspiramos a ser la herramienta indispensable que potencie el turismo y la economía local.
          </SeccionInfo>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 text-naranja-principal rounded-full p-4">
              <Rocket size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 text-texto-principal dark:text-crema">Nuestros Objetivos</h2>
          <ul className="list-disc list-inside space-y-3 text-texto-secundario dark:text-gray-400 max-w-lg mx-auto">
            <li><strong>Crear el Catálogo Digital Más Completo:</strong> Mapear y mantener actualizada la oferta gastronómica de Jipijapa.</li>
            <li><strong>Facilitar el Descubrimiento:</strong> Ofrecer herramientas de búsqueda y filtros intuitivos para que cada usuario encuentre el plato perfecto.</li>
            <li><strong>Impulsar la Economía Local:</strong> Dar visibilidad a los emprendedores gastronómicos, ayudándoles a alcanzar a nuevos clientes.</li>
            <li><strong>Promover la Cultura Manabita:</strong> Educar sobre la riqueza y la historia de nuestros platos típicos.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
