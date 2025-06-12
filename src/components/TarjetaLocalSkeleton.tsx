// src/components/TarjetaLocalSkeleton.tsx
export default function TarjetaLocalSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      {/* Placeholder para la Imagen */}
      <div className="h-48 w-full bg-gray-200 animate-pulse"></div>

      <div className="p-4">
        {/* Placeholder para la Categoría */}
        <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse mb-2"></div>
        {/* Placeholder para el Nombre */}
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-3"></div>
        {/* Placeholder para la Dirección */}
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}