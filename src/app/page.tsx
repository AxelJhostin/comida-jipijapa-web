// src/app/page.tsx
"use client"; 

import TarjetaLocal from "@/components/TarjetaLocal";
import TarjetaLocalSkeleton from "@/components/TarjetaLocalSkeleton";
import { locales } from "@/lib/datos";
import { useState, useEffect } from "react"; 

export default function Home() {
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [estaCargando, setEstaCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEstaCargando(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const categorias = ['Todos', ...new Set(locales.map(local => local.categoria))];

  const localesFiltrados = locales.filter((local) => {
    const coincideCategoria = 
      categoriaSeleccionada === 'Todos' || local.categoria === categoriaSeleccionada;
    
    const textoDeBusqueda = terminoDeBusqueda.toLowerCase();
    const coincideBusqueda =
      local.nombre.toLowerCase().includes(textoDeBusqueda) ||
      local.categoria.toLowerCase().includes(textoDeBusqueda);

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <main className="min-h-screen">
      <div className="text-center mb-12 pt-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#422006]">
          ¿Dónde comer en Jipijapa?
        </h1>
        <p className="mt-2 text-lg text-[#78716C]">
          El catálogo definitivo de la gastronomía jipijapense.
        </p>
      </div>

      <div className="mb-8 max-w-lg mx-auto px-4">
        <input 
          type="text"
          placeholder="Buscar por nombre o categoría..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
          value={terminoDeBusqueda}
          onChange={(e) => setTerminoDeBusqueda(e.target.value)}
        />
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-12 px-4">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            // --- CORRECCIÓN AQUÍ: Usamos los códigos de color directos ---
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out
              ${categoriaSeleccionada === categoria 
                ? 'bg-[#F97316] text-white shadow-lg scale-105' // Estilo si está ACTIVO
                : 'bg-white text-[#422006] hover:bg-gray-200 border border-gray-300' // Estilo si está INACTIVO
              }`
            }
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-16">
        {estaCargando ? (
          Array.from({ length: 8 }).map((_, index) => (
            <TarjetaLocalSkeleton key={index} />
          ))
        ) : (
          localesFiltrados.map((local) => (
            <TarjetaLocal key={local.id} local={local} />
          ))
        )}
      </div>

      {!estaCargando && localesFiltrados.length === 0 && (
        <div className="text-center mt-16 pb-16">
          <p className="text-xl text-[#78716C]">No se encontraron locales.</p>
        </div>
      )}
    </main>
  );
}