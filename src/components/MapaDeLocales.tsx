// src/components/MapaDeLocales.tsx
"use client";

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Map } from 'leaflet'; // Importamos 'Map' para el tipado del state
import { locales } from '@/lib/datos';
import Link from 'next/link';
import Image from 'next/image';
import { LocateFixed } from 'lucide-react'; // Icono para el botón de re-centrar

// --- Iconos de Leaflet ---
// Los agrupamos para más orden
const iconDefault = new L.Icon({
    iconUrl: '/marker-icon.png',
    iconRetinaUrl: '/marker-icon-2x.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const userIcon = new L.Icon({
    iconUrl: '/user-marker.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [1, -34],
});

// MEJORA 2: Ya NO modificamos L.Marker.prototype.options.icon


export default function MapaDeLocales() {
  const defaultPosition: [number, number] = [-1.350, -80.579]; // Jipijapa
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  
  // MEJORA 1: State para guardar la referencia del mapa
  const [map, setMap] = useState<Map | null>(null);
  
  // Efecto para obtener la ubicación inicial
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newPos: [number, number] = [position.coords.latitude, position.coords.longitude];
        setUserPosition(newPos);
        // Centra el mapa en la nueva posición si el mapa ya está listo
        map?.flyTo(newPos, 15);
      },
      () => {
        console.log("No se pudo obtener la ubicación del usuario.");
        setUserPosition(null);
        if (map) {
          map.flyTo(defaultPosition, 14); // Si falla, vuela a Jipijapa
        }
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]); // Se ejecuta cuando el 'map' está listo

  // MEJORA 1: Función para el botón de re-centrar
  const handleRecenter = () => {
    if (map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPos: [number, number] = [position.coords.latitude, position.coords.longitude];
          setUserPosition(newPos);
          map.flyTo(newPos, 15); // Vuela a la ubicación del usuario
        },
        () => {
          alert("No se pudo obtener tu ubicación. Asegúrate de dar permisos.");
        }
      );
    }
  };

  return (
    // Usamos 'relative' para posicionar el botón de re-centrar
    <div className="relative h-[calc(100vh-80px)] w-full">
      
      {/* MEJORA 1: Botón de Re-centrar */}
      <button
        onClick={handleRecenter}
        className="absolute top-4 right-4 z-[1000] p-3 bg-white text-gray-800 rounded-full shadow-lg transition-transform hover:scale-105"
        aria-label="Centrar mapa en mi ubicación"
      >
        <LocateFixed size={20} />
      </button>

      <MapContainer 
          center={userPosition || defaultPosition} 
          zoom={15} 
          scrollWheelZoom={true} 
          className="h-full w-full rounded-lg shadow-lg"
          // MEJORA 1: Guardamos la referencia del mapa en el state
          ref={setMap} 
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
          <Marker 
            key={local.id} 
            position={[local.coordenadas.lat, local.coordenadas.lng]}
            // MEJORA 2: Aplicamos el ícono por defecto explícitamente
            icon={iconDefault}
          >
            <Popup>
              <div className="w-56 -m-3">
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C] bg-orange-100 px-2 py-1 rounded-full">
                    {local.categoria}
                  </span>
                  <h3 className="font-bold text-lg mt-2 truncate text-[#422006]">{local.nombre}</h3>
                  
                  {/* MEJORA 3: Clases del botón corregidas */}
                  <Link 
                      href={`/locales/${local.id}`} 
                      className="bg-[#F97316] text-white text-center font-bold text-sm mt-3 block py-2 rounded-md hover:bg-[#EA580C] transition-colors"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}