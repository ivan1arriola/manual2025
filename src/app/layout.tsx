"use client";

import "@/ui/global.css";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Manual de Ingreso FING 2025</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>© 2025 Facultad de Ingeniería | UdelaR</footer>
      </body>
    </html>
  );
}
