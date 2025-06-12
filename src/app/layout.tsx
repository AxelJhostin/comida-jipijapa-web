import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // <- 1. Import añadido

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Metadatos actualizados
export const metadata: Metadata = {
  title: "Sabores de Jipijapa",
  description: "El catálogo definitivo de la gastronomía jipijapense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Idioma cambiado a "es"
    <html lang="es"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 3. Header añadido aquí */}
        <Header /> 
        {children}
      </body>
    </html>
  );
}