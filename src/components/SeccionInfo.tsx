// src/components/SeccionInfo.tsx
import type { LucideIcon } from "lucide-react";

interface SeccionInfoProps {
  Icono: LucideIcon;
  titulo: string;
  children: React.ReactNode;
}

export default function SeccionInfo({ Icono, titulo, children }: SeccionInfoProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
      {/* CORRECCIÓN: Usamos un fondo y color de icono naranja */}
      <div className="bg-orange-100 text-[#F97316] rounded-full p-4 mb-4">
        <Icono size={32} />
      </div>
      {/* El título usará el color de texto principal definido en globals.css */}
      <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
      {/* El párrafo usará un color de texto secundario y más claro */}
      <p className="text-[#78716C] leading-relaxed">
        {children}
      </p>
    </div>
  );
}