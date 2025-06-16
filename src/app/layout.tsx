// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- METADATOS OPTIMIZADOS Y COMPLETOS ---
export const metadata: Metadata = {
  // Título para la pestaña del navegador y Google
  title: {
    template: '%s | Jipi-Jama',
    default: 'Jipi-Jama - El Catálogo Gastronómico de Jipijapa',
  },
  description: "Descubre dónde comer en Jipijapa. Encuentra los mejores restaurantes, picanterías y huecas de la Sultana del Café. El catálogo definitivo de la gastronomía manabita.",
  
  // --- LISTA DE PALABRAS CLAVE AMPLIADA Y MEJORADA ---
  keywords: [
    // Términos Generales
    'comida en jipijapa', 
    'restaurantes jipijapa', 
    'dónde comer en jipijapa',
    'qué hacer en jipijapa',
    'gastronomía de jipijapa',
    'jipi-jama',
    'turismo jipijapa',

    // Términos Relacionados a Manabí
    'comida manabita', 
    'que comer en manabi', 
    'gastronomía manabita',
    'platos típicos de manabí',

    // Platos Específicos
    'ceviche jipijapa', 
    'bolon jipijapa',
    'corviche',
    'encebollado',
    'seco de chivo',
    'guatita',

    // Tipos de Locales
    'picanterías en jipijapa',
    'huecas en jipijapa',
    'cafeterías jipijapa',
    'parrilladas jipijapa',
    'marisquerías jipijapa',
    'desayunos jipijapa',

    // Búsquedas de Acción
    'almuerzos en jipijapa',
    'cenas en jipijapa',
    'comida a domicilio jipijapa',
    'comida buena bonita y barata jipijapa',
  ],
  
  // Metadatos para cuando compartas en redes sociales (Open Graph)
  openGraph: {
    title: 'Jipi-Jama - El Catálogo Gastronómico de Jipijapa',
    description: 'La guía definitiva para explorar los sabores auténticos de Jipijapa, Manabí.',
    images: [{
      url: '/og-image.png', // URL relativa a tu dominio
      width: 1200,
      height: 630,
      alt: 'Logo de Jipi-Jama sobre un fondo con platos de comida típica.'
    }],
    locale: 'es_EC',
    type: 'website',
  },

  // Tu clave de verificación de Google que ya configuramos
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <GoogleAnalytics />
        <Header /> 
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
