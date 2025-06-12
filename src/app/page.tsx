// src/app/page.tsx
import TarjetaLocal from "@/components/TarjetaLocal";
import { locales } from "@/lib/datos"; // Importamos nuestros datos

export default function Home() {
  return (
    <main className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          ¿Dónde comer en Jipijapa?
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          El catálogo definitivo de la gastronomía jipijapense.
        </p>
      </div>

      {/* Contenedor de la lista en formato de cuadrícula */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Usamos .map() para crear una tarjeta por cada local */}
        {locales.map((local) => (
          <TarjetaLocal key={local.id} local={local} />
        ))}
      </div>
    </main>
  );
}