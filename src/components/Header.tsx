// src/components/Header.tsx
"use client"; 

import Link from 'next/link';
import { useState } from 'react'; 
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-sm p-4 shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#F97316]">
          Jipi-Jama
        </Link>
        
        <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <li>
            <Link href="/" className="hover:text-[#F97316] transition-colors">
              Restaurantes
            </Link>
          </li>
          {/* AQUÍ ESTÁ EL NUEVO ENLACE AL MAPA */}
          <li>
            <Link href="/mapa" className="hover:text-[#F97316] transition-colors">
              Mapa
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-[#F97316] transition-colors">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link 
              href="/aplicacion" 
              className="bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-[#EA580C] transition-colors"
            >
              Descarga la App
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setMenuAbierto(!menuAbierto)} className="text-gray-800">
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móvil */}
      {menuAbierto && (
        <div className="md:hidden mt-4 bg-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link href="/" onClick={() => setMenuAbierto(false)} className="text-gray-800 font-medium hover:text-[#F97316] transition-colors">
                Restaurantes
              </Link>
            </li>
            {/* Y AQUÍ ESTÁ EL NUEVO ENLACE EN EL MENÚ MÓVIL */}
            <li>
              <Link href="/mapa" onClick={() => setMenuAbierto(false)} className="text-gray-800 font-medium hover:text-[#F97316] transition-colors">
                Mapa
              </Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={() => setMenuAbierto(false)} className="text-gray-800 font-medium hover:text-[#F97316] transition-colors">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link 
                href="/aplicacion" 
                onClick={() => setMenuAbierto(false)} 
                className="mt-2 bg-[#F97316] text-white px-6 py-2 rounded-md hover:bg-[#EA580C] transition-colors"
              >
                Descarga la App
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}