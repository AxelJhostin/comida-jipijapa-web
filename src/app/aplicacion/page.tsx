// src/app/aplicacion/page.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react"; 

export default function AplicacionPage() {
  const caracteristicas = [
    "Búsqueda y filtros avanzados para encontrar tu antojo perfecto.",
    "Galerías de imágenes interactivas para cada local.",
    "Acceso con un toque para llamar, ver en el mapa o contactar por WhatsApp.",
    "Información detallada: horarios, días de atención y más.",
    "Notificaciones sobre promociones y nuevos locales (¡Próximamente!)."
  ];

  return (
    <main>
      {/* Sección Principal (Hero) con Mockup de Teléfono */}
      <section className="bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-20 px-4">
          <div className="text-center md:text-left">
            <span className="text-naranja-principal font-bold uppercase">La Experiencia Completa</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Lleva a Jipijapa en tu Bolsillo
            </h1>
            <p className="mt-4 text-xl text-texto-secundario">
              Descarga la aplicación gratuita de Jipi-Jama y accede a la guía gastronómica más completa. La mejor experiencia, optimizada para tu móvil.
            </p>
            <a 
              href="#" // Enlace real a la Google Play Store
              className="mt-8 inline-block bg-[#F97316] text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-[#EA580C] transition-transform hover:scale-105"
            >
              Disponible en Google Play
            </a>
          </div>
          <div className="flex justify-center">
            {/* CORRECCIÓN: Usamos la vista del catálogo, que es más representativa */}
            <Image 
              src="/imagenes/app/app-vista-catalogo.jpg"
              alt="Captura de pantalla de la lista de locales en la app Jipi-Jama"
              width={280}
              height={560}
              className="rounded-3xl shadow-2xl border-4 border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Sección de "Por qué descargar" con tus capturas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">La Guía Definitiva en tus Manos</h2>
            <p className="mt-2 text-lg text-texto-secundario max-w-2xl mx-auto">
              Diseñada desde cero para ser tu compañera ideal al explorar la rica gastronomía de nuestra ciudad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* COLUMNA 1: Usa la vista del catálogo */}
            <div className="text-center">
              <Image src="/imagenes/app/app-vista-catalogo.jpg" alt="Vista del catálogo de locales" width={250} height={500} className="rounded-2xl shadow-lg mx-auto border-2 border-gray-100"/>
              <h3 className="font-bold text-xl mt-4">Explora y Descubre</h3>
              <p className="text-texto-secundario mt-1">Navega por un catálogo visual y completo. Tu próxima comida favorita está a un scroll de distancia.</p>
            </div>
            {/* COLUMNA 2: Usa la vista de un restaurante específico */}
            <div className="text-center">
              <Image src="/imagenes/app/app-vista-detalle.jpg" alt="Vista del detalle de un restaurante" width={250} height={500} className="rounded-2xl shadow-lg mx-auto border-2 border-gray-100"/>
              <h3 className="font-bold text-xl mt-4">Toda la Información</h3>
              <p className="text-texto-secundario mt-1">Horarios, menús, galerías y más. Toda la información que necesitas para tomar la mejor decisión.</p>
            </div>
            {/* COLUMNA 3: Usa la vista del logo */}
            <div className="text-center">
              <Image src="/imagenes/app/app-vista-logo.jpg" alt="Pantalla de bienvenida de la app" width={250} height={500} className="rounded-2xl shadow-lg mx-auto border-2 border-gray-100"/>
              <h3 className="font-bold text-xl mt-4">Diseño Profesional</h3>
              <p className="text-texto-secundario mt-1">Una aplicación nativa, rápida y con una identidad visual única que celebra la cultura de Jipijapa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Lista de Características (sin cambios) */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Todas las Funcionalidades</h2>
          <ul className="space-y-4">
            {caracteristicas.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
