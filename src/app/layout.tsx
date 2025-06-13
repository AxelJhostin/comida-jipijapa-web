// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; // <-- 1. Importamos nuestro nuevo Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jipi-Jama", // Nombre actualizado
  description: "El catálogo definitivo de la gastronomía jipijapense.",
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
        <Header /> 
        {/* 'flex-grow' hace que el contenido principal ocupe todo el espacio disponible */}
        <div className="flex-grow">
          {children}
        </div>
        <Footer /> {/* <-- 2. Añadimos el Footer aquí */}
      </body>
    </html>
  );
}