// src/app/aplicacion/page.tsx
import Image from "next/image";

const IconoCaracteristica = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-orange-100 text-[#F97316] rounded-full h-12 w-12 flex items-center justify-center mb-4">
    {children}
  </div>
);

export default function AplicacionPage() {
  return (
    <main>
      <section className="text-center py-20 px-4 bg-white">
        <Image 
          src="/logo.png" // Reutilizamos tu logo
          alt="Logo de Jipi-Jama"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Lleva a Jipijapa en tu Bolsillo
        </h1>
        <p className="mt-4 text-xl text-[#78716C] max-w-2xl mx-auto">
          Descarga la aplicación gratuita de Jipi-Jama y accede a la guía gastronómica más completa desde cualquier lugar. La mejor experiencia, optimizada para tu móvil.
        </p>
        <a 
          href="#" // Aquí irá el enlace real a la Google Play Store
          className="mt-8 inline-block bg-[#F97316] text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-[#EA580C] transition-transform hover:scale-105"
        >
          Disponible en Google Play
        </a>
      </section>

      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Una Experiencia Superior</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="flex flex-col items-center">
            <IconoCaracteristica>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </IconoCaracteristica>
            <h3 className="text-xl font-semibold mb-2">Mapas y Navegación</h3>
            <p className="text-[#78716C]">
              Obtén la ruta exacta a cualquier local con un solo toque, integrándonos con tu aplicación de mapas preferida.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <IconoCaracteristica>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </IconoCaracteristica>
            <h3 className="text-xl font-semibold mb-2">Notificaciones Exclusivas</h3>
            <p className="text-[#78716C]">
              Sé el primero en enterarte de promociones, nuevos platos y eventos especiales de tus restaurantes favoritos.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <IconoCaracteristica>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path></svg>
            </IconoCaracteristica>
            <h3 className="text-xl font-semibold mb-2">Acceso Offline</h3>
            <p className="text-[#78716C]">
              Consulta la información esencial de los locales incluso cuando no tengas una conexión a internet estable.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}