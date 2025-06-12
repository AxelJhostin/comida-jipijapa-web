// src/app/page.tsx
"use client"; 

import TarjetaLocal from "@/components/TarjetaLocal";
import { locales } from "@/lib/datos";
import { useState } from "react"; 

export default function Home() {
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  // Creamos una lista de categorías únicas a partir de nuestros datos
  const categorias = ['Todos', ...new Set(locales.map(local => local.categoria))];

  // Lógica de filtrado que combina la categoría y el texto de búsqueda
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
    <main className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          ¿Dónde comer en Jipijapa?
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          El catálogo definitivo de la gastronomía jipijapense.
        </p>
      </div>

      {/* Barra de Búsqueda */}
      <div className="mb-8 max-w-lg mx-auto">
        <input 
          type="text"
          placeholder="Buscar por nombre o categoría..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          value={terminoDeBusqueda}
          onChange={(e) => setTerminoDeBusqueda(e.target.value)}
        />
      </div>

      {/* Botones de Filtro por Categoría */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out
              ${categoriaSeleccionada === categoria 
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-200 border'
              }`
            }
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Contenedor de la lista en formato de cuadrícula */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {localesFiltrados.map((local) => (
          <TarjetaLocal key={local.id} local={local} />
        ))}
      </div>

      {/* Mensaje para cuando no hay resultados */}
      {localesFiltrados.length === 0 && (
        <div className="text-center mt-16">
          <p className="text-xl text-gray-500">No se encontraron locales que coincidan con tu búsqueda.</p>
          <p className="text-gray-400 mt-2">Intenta con otros filtros.</p>
        </div>
      )}
    </main>
  );
}