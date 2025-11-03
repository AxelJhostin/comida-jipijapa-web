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

  // Componente interno para los íconos
  const IconoCaracteristica = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-orange-100 text-[#F97316] rounded-full h-12 w-12 flex items-center justify-center mb-4">
      {children}
    </div>
  );

  return (
    <main>
      {/* Sección Principal (Hero) con estilos de modo oscuro */}
      <section className="bg-white dark:bg-gray-800">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-20 px-4">
          <div className="text-center md:text-left">
            <span className="text-[#F97316] font-bold uppercase">La Experiencia Completa</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-[#422006] dark:text-[#FFFBF5]">
              Lleva a Jipijapa en tu Bolsillo
            </h1>
            <p className="mt-4 text-xl text-[#78716C] dark:text-gray-400">
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
            <Image 
              src="/imagenes/app/app-vista-catalogo.jpg"
              alt="Captura de pantalla de la lista de locales en la app Jipi-Jama"
              width={280}
              height={560}
              className="rounded-3xl shadow-2xl border-4 border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Sección de "Por qué descargar" con estilos de modo oscuro */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#422006] dark:text-[#FFFBF5]">La Guía Definitiva en tus Manos</h2>
            <p className="mt-2 text-lg text-[#78716C] dark:text-gray-400 max-w-2xl mx-auto">
              Diseñada desde cero para ser tu compañera ideal al explorar la rica gastronomía de nuestra ciudad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* CORRECCIÓN: Ahora cada sección UTILIZA el componente IconoCaracteristica */}
            <div className="flex flex-col items-center">
              <IconoCaracteristica>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </IconoCaracteristica>
              <h3 className="font-bold text-xl mt-4 text-[#422006] dark:text-[#FFFBF5]">Explora y Descubre</h3>
              <p className="text-[#78716C] dark:text-gray-400 mt-1">Navega por un catálogo visual y completo. Tu próxima comida favorita está a un scroll de distancia.</p>
            </div>
            <div className="flex flex-col items-center">
              <IconoCaracteristica>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </IconoCaracteristica>
              <h3 className="font-bold text-xl mt-4 text-[#422006] dark:text-[#FFFBF5]">Búsqueda Inteligente</h3>
              <p className="text-[#78716C] dark:text-gray-400 mt-1">Usa nuestros potentes filtros y barra de búsqueda para encontrar exactamente lo que buscas, sin perder tiempo.</p>
            </div>
            <div className="flex flex-col items-center">
              <IconoCaracteristica>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </IconoCaracteristica>
              <h3 className="font-bold text-xl mt-4 text-[#422006] dark:text-[#FFFBF5]">Acceso Directo</h3>
              <p className="text-[#78716C] dark:text-gray-400 mt-1">Llama directamente, obtén la ruta en Google Maps o contacta por WhatsApp con un solo toque desde la app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Lista de Características con estilos de modo oscuro */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#422006] dark:text-[#FFFBF5]">Todas las Funcionalidades</h2>
          <ul className="space-y-4">
            {caracteristicas.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-lg text-[#78716C] dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
