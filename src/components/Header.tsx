// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white p-4 shadow-md z-10">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo o Título del Sitio */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Sabores de Jipijapa
        </Link>

        {/* Enlaces de Navegación */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
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
      </nav>
    </header>
  );
}