// src/components/Header.tsx
"use client"; 

import Link from 'next/link';
import { useState } from 'react'; 
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white p-4 shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo o Título del Sitio */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Sabores de Jipijapa
        </Link>
        
        {/* ENLACES PARA PANTALLAS GRANDES (md en adelante) */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Catálogo
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-blue-600 transition-colors">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/aplicacion" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Descarga la App
            </Link>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA PARA PANTALLAS PEQUEÑAS (visible hasta md) */}
        <div className="md:hidden">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE PARA MÓVIL */}
      {/* Solo se muestra si menuAbierto es true */}
      {menuAbierto && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href="/" onClick={() => setMenuAbierto(false)} className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={() => setMenuAbierto(false)} className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/aplicacion" onClick={() => setMenuAbierto(false)} className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Descarga la App
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}