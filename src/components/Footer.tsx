// src/components/Footer.tsx
import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-6 py-8">
        
        {/* --- Sección Superior: Links y Copyright --- */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Copyright y Nombre del Proyecto */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-bold text-lg text-naranja-principal">Jipi-Jama</p>
            <p className="text-sm text-texto-secundario">
              {/* Esto muestra el año actual automáticamente */}
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          {/* Enlaces de Navegación del Footer (MODIFICADO) */}
          <div className="flex gap-6 mb-4 md:mb-0 text-texto-secundario font-medium">
            <Link href="/" className="hover:text-naranja-principal transition-colors">Catálogo</Link>
            <Link href="/nosotros" className="hover:text-naranja-principal transition-colors">Sobre Nosotros</Link>
            {/* Se eliminó el enlace a "/aplicacion" */}
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/skywarddevs/" // El enlace actualizado a tu Instagram
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-texto-secundario hover:text-naranja-principal transition-colors"
              aria-label="Instagram de Jipi-Jama"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* --- Sección Inferior: Aviso de Transparencia (NUEVO) --- */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-xs text-texto-secundario max-w-3xl mx-auto">
            <strong>Aviso:</strong> Jipi-Jama es un proyecto comunitario independiente. Toda la información (fotos, horarios, etc.) ha sido recopilada de fuentes públicas o en visitas a los locales con el fin de promocionarlos gratuitamente.
          </p>
          <p className="text-xs text-texto-secundario max-w-3xl mx-auto mt-2">
            <strong>¿Eres dueño de un local?</strong> Si deseas actualizar tu información, añadir más fotos o prefieres que tu local no aparezca, 
            contáctanos por <a href="https://instagram.com/jipijama.app" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-naranja-principal underline">nuestro Instagram</a>.
          </p>
        </div>

      </div>
    </footer>
  );
}
