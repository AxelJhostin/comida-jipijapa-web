// src/app/page.tsx
"use client"; 

import TarjetaLocal from "@/components/TarjetaLocal";
import TarjetaLocalSkeleton from "@/components/TarjetaLocalSkeleton";
import { locales } from "@/lib/datos";
import { useState, useEffect } from "react"; 
import Image from "next/image"; // Necesario para el logo
import Link from "next/link"; // Necesario para el botón de scroll

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

      {/* --- INICIO DE LA NUEVA SECCIÓN HERO --- */}
      <section id="hero" className="h-[90vh] flex flex-col items-center justify-center text-center relative px-4">
        {/* Tu Logo */}
        <Image
          src="/logo.png" // Busca el logo que pusiste en la carpeta 'public'
          alt="Logo de Jipi-Jama"
          width={200}
          height={200}
          priority // Le dice a Next.js que cargue esta imagen primero
        />

        {/* Título y Eslogan */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-[#422006] mt-6">
          Jipi-Jama
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-[#78716C] max-w-xl">
          Tu guía para descubrir los tesoros gastronómicos de la Sultana del Café.
        </p>

        {/* Botón para hacer scroll hacia el catálogo */}
        <Link 
          href="#catalogo" 
          className="absolute bottom-12 z-10 animate-bounce bg-[#F97316]/20 p-3 rounded-full text-[#F97316]"
          aria-label="Ir al catálogo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </Link>
      </section>
      {/* --- FIN DE LA SECCIÓN HERO --- */}

      {/* --- INICIO DE LA SECCIÓN DEL CATÁLOGO --- */}
      <section id="catalogo" className="px-4 sm:px-8 pb-16">
        <div className="text-center mb-12 pt-16">
          <h2 className="text-3xl font-bold text-[#422006]">Explora Nuestro Catálogo</h2>
        </div>
        
        {/* Barra de Búsqueda y Filtros (sin cambios) */}
        <div className="mb-8 max-w-lg mx-auto">
          <input 
            type="text"
            placeholder="Buscar por nombre o categoría..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
            value={terminoDeBusqueda}
            onChange={(e) => setTerminoDeBusqueda(e.target.value)}
          />
        </div>
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSeleccionada(categoria)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out ${categoriaSeleccionada === categoria ? 'bg-[#F97316] text-white shadow-lg scale-105' : 'bg-white text-[#422006] hover:bg-gray-200 border border-gray-300'}`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Locales (sin cambios) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {estaCargando ? (
            Array.from({ length: 8 }).map((_, index) => (<TarjetaLocalSkeleton key={index} />))
          ) : (
            localesFiltrados.map((local) => (<TarjetaLocal key={local.id} local={local} />))
          )}
        </div>
        {!estaCargando && localesFiltrados.length === 0 && (
          <div className="text-center mt-16"><p className="text-xl text-[#78716C]">No se encontraron locales.</p></div>
        )}
      </section>
    </main>
  );
}