// src/components/Footer.tsx
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    // CORRECCIÓN: Añadimos fondo y borde para modo oscuro
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-bold text-lg text-naranja-principal">Jipi-Jama</p>
          {/* CORRECCIÓN: Añadimos color de texto para modo oscuro */}
          <p className="text-sm text-texto-secundario dark:text-gray-400">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* CORRECCIÓN: Añadimos color de texto para modo oscuro */}
        <div className="flex gap-6 mb-4 md:mb-0 text-texto-secundario dark:text-gray-400 font-medium">
          <Link href="/" className="hover:text-naranja-principal transition-colors">Restaurantes</Link>
          <Link href="/nosotros" className="hover:text-naranja-principal transition-colors">Sobre Nosotros</Link>
          <Link href="/aplicacion" className="hover:text-naranja-principal transition-colors">Descarga la App</Link>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://instagram.com/jipijama.app"
            target="_blank" 
            rel="noopener noreferrer" 
            // CORRECCIÓN: Añadimos color de texto para modo oscuro
            className="text-texto-secundario dark:text-gray-400 hover:text-naranja-principal transition-colors"
            aria-label="Instagram de Jipi-Jama"
          >
            <Instagram size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
}
