// src/components/Footer.tsx
import Link from 'next/link';
import { Instagram } from 'lucide-react'; // Importamos el icono que vamos a usar

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright y Nombre del Proyecto */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold text-lg text-naranja-principal">Jipi-Jama</p>
          <p className="text-sm text-texto-secundario">
            {/* Esto muestra el año actual automáticamente */}
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces de Navegación del Footer */}
        <div className="flex gap-6 mb-4 md:mb-0 text-texto-secundario font-medium">
          <Link href="/" className="hover:text-naranja-principal transition-colors">Catálogo</Link>
          <Link href="/nosotros" className="hover:text-naranja-principal transition-colors">Sobre Nosotros</Link>
          <Link href="/aplicacion" className="hover:text-naranja-principal transition-colors">Descarga la App</Link>
        </div>

        {/* Redes Sociales */}
        <div className="flex gap-4">
          <a 
            href="https://instagram.com/jipijama.app" // El enlace actualizado a tu Instagram
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-texto-secundario hover:text-naranja-principal transition-colors"
            aria-label="Instagram de Jipi-Jama"
          >
            <Instagram size={24} />
          </a>
          {/* Aquí podrías añadir más iconos de redes sociales en el futuro */}
        </div>

      </div>
    </footer>
  );
}