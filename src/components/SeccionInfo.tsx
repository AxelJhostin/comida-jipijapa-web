// src/components/SeccionInfo.tsx
import type { LucideIcon } from "lucide-react";

interface SeccionInfoProps {
  Icono: LucideIcon;
  titulo: string;
  children: React.ReactNode;
}

export default function SeccionInfo({ Icono, titulo, children }: SeccionInfoProps) {
  return (
    // CORRECCIÓN: Añadimos fondo oscuro y texto claro para dark mode
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
      <div className="bg-orange-100 text-naranja-principal rounded-full p-4 mb-4">
        <Icono size={32} />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-texto-principal dark:text-crema">{titulo}</h2>
      <p className="text-texto-secundario dark:text-gray-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
