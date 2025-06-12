// src/app/aplicacion/page.tsx

// Un pequeño componente para los íconos, solo para este archivo
const IconoCaracteristica = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center mb-4">
    {children}
  </div>
);

export default function AplicacionPage() {
  return (
    <main className="bg-white">
      {/* Sección Principal (Hero) */}
      <section className="text-center py-20 px-4 bg-gray-50">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Lleva a Jipijapa en tu Bolsillo
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Nuestra aplicación para Android te da acceso instantáneo al catálogo completo, con funciones exclusivas para una mejor experiencia.
        </p>
        <a 
          href="#" // Aquí irá el enlace a la Play Store
          className="mt-8 inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-green-600 transition-transform hover:scale-105"
        >
          Descargar en Google Play
        </a>
      </section>

      {/* Sección de Características */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Qué puedes hacer con la app?</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* Característica 1 */}
          <div className="flex flex-col items-center">
            <IconoCaracteristica>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </IconoCaracteristica>
            <h3 className="text-xl font-semibold mb-2">Descubre Locales</h3>
            <p className="text-gray-600">
              Encuentra fácilmente picanterías, restaurantes y huecas cerca de ti. La guía más completa a tu alcance.
            </p>
          </div>

          {/* Característica 2 */}
          <div className="flex flex-col items-center">
            <IconoCaracteristica>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </IconoCaracteristica>
            <h3 className="text-xl font-semibold mb-2">Búsqueda Inteligente</h3>
            <p className="text-gray-600">
              Filtra por categoría de comida, nombre del local o busca platos específicos para satisfacer tu antojo.
            </p>
          </div>

          {/* Característica 3 */}
          <div className="flex flex-col items-center">
            <IconoCaracteristica>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </IconoCaracteristica>
            <h3 className="text-xl font-semibold mb-2">Acceso Directo</h3>
            <p className="text-gray-600">
              Llama directamente, obtén la ruta en Google Maps o contacta por WhatsApp con un solo toque desde la app.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}