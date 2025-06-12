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
      <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
        <Icono size={32} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{titulo}</h2>
      <p className="text-gray-600 leading-relaxed">
        {children}
      </p>
    </div>
  );
}