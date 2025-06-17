// src/components/MapaDeLocales.tsx
"use client";

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { locales } from '@/lib/datos';
import Link from 'next/link';
import Image from 'next/image';

// Arreglo para el icono por defecto de Leaflet
const iconDefault = new L.Icon({
    iconUrl: '/marker-icon.png',
    iconRetinaUrl: '/marker-icon-2x.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

// Icono personalizado para la ubicación del usuario
const userIcon = new L.Icon({
    iconUrl: '/user-marker.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [1, -34],
});


export default function MapaDeLocales() {
  const defaultPosition: [number, number] = [-1.350, -80.579];
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        console.log("No se pudo obtener la ubicación del usuario.");
        setUserPosition(null);
      }
    );
  }, []);

  return (
    <MapContainer 
        center={userPosition || defaultPosition} 
        zoom={15} 
        scrollWheelZoom={true} 
        className="h-[calc(100vh-80px)] w-full rounded-lg shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {userPosition && (
        <Marker position={userPosition} icon={userIcon}>
          <Popup>Estás aquí</Popup>
        </Marker>
      )}

      {locales.map((local) => (
        <Marker key={local.id} position={[local.coordenadas.lat, local.coordenadas.lng]}>
          {/* --- INICIO DEL POPUP CON DISEÑO MEJORADO --- */}
          <Popup>
            <div className="w-56 -m-3"> {/* Un poco más de ancho */}
              <div className="relative h-28 w-full">
                <Image
                  src={local.imagenUrl}
                  alt={`Imagen de ${local.nombre}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-3">
                {/* Etiqueta de Categoría */}
                <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C] bg-orange-100 px-2 py-1 rounded-full">
                  {local.categoria}
                </span>
                {/* Nombre del Local */}
                <h3 className="font-bold text-lg mt-2 truncate text-[#422006]">{local.nombre}</h3>
                {/* Botón/Enlace de Ver Detalles */}
                <Link 
                    href={`/locales/${local.id}`} 
                    className="bg-[#fff8f3] text-white text-center font-bold text-sm mt-3 block py-2 rounded-md hover:bg-[#EA580C] transition-colors"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          </Popup>
          {/* --- FIN DEL POPUP CON DISEÑO MEJORADO --- */}
        </Marker>
      ))}
    </MapContainer>
  );
}
