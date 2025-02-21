"use client";

import { ThemeProvider } from "next-themes";
import "@/styles/global.css";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1" 
        />
        <title>Manual de Ingreso FING 2025</title>
        <meta name="description" content="Guía completa para nuevos estudiantes de la Facultad de Ingeniería (FING), UdelaR. Todo lo que necesitas saber sobre la universidad, inscripción y más." />
        <meta name="keywords" content="Facultad de Ingeniería, FING, UdelaR, Ingreso 2025, estudiantes, manual" />
        <meta name="author" content="Centro de Estudiantes de Ingeniería" />

        <meta property="og:title" content="Manual de Ingreso FING 2025" />
        <meta property="og:description" content="Todo lo que necesitas saber para tu ingreso a la Facultad de Ingeniería." />
        <meta property="og:image" content="/Portada.jpg" />
        <meta property="og:url" content="https://linktr.ee/GenIngresoFING" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manual de Ingreso FING 2025" />
        <meta name="twitter:description" content="Todo lo que necesitas saber para ingresar a la Facultad de Ingeniería." />
        <meta name="twitter:image" content="public/Portada.jpg" />

      

        {/* Fuentes externas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <footer>© 2025 Centro de Estudiantes de Ingeniería</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
