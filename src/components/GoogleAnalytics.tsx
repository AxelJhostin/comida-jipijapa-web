// src/components/GoogleAnalytics.tsx
"use client"; // Este componente interactúa con el navegador, así que es un componente de cliente.

import Script from 'next/script';

// Usamos el ID de Medición que obtuviste de Google Analytics
const GA_MEASUREMENT_ID = 'G-DF64ZDN8EX';

export default function GoogleAnalytics() {
  return (
    <>
      {/* Carga el script principal de Google Analytics de forma asíncrona */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      {/* Este script inicializa Google Analytics y lo configura con tu ID */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
