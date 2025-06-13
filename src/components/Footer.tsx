// src/components/Footer.tsx
import Link from 'next/link';
import { Instagram } from 'lucide-react'; // Importamos el icono

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright y Nombre */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold text-lg text-naranja-principal">Jipi-Jama</p>
          <p className="text-sm text-texto-secundario">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces de Navegación del Footer */}
        <div className="flex gap-6 mb-4 md:mb-0 text-texto-secundario">
          <Link href="/" className="hover:text-naranja-principal">Catálogo</Link>
          <Link href="/nosotros" className="hover:text-naranja-principal">Sobre Nosotros</Link>
          <Link href="/aplicacion" className="hover:text-naranja-principal">Descarga la App</Link>
        </div>

        {/* Redes Sociales */}
        <div className="flex gap-4">
          <a 
            href="#" // <-- Aquí pondremos el enlace a tu Instagram
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-texto-secundario hover:text-naranja-principal"
            aria-label="Instagram de Jipi-Jama"
          >
            <Instagram size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
}