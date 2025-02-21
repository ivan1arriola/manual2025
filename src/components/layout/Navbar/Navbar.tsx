"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos para el menú de hamburguesa
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Manual Ingreso 2025
      </Link>

      {/* Botón de menú hamburguesa en móviles */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Lista de enlaces con visibilidad dinámica */}
      <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        <Link href="/objetivo-alcance" onClick={() => setMenuOpen(false)}>Objetivo y Alcance</Link>
        <Link href="/introduccion" onClick={() => setMenuOpen(false)}>Introducción</Link>
        <Link href="/ingreso" onClick={() => setMenuOpen(false)}>Ingreso</Link>
        <Link href="/primer-semestre" onClick={() => setMenuOpen(false)}>Primer Semestre</Link>
        <Link href="/evaluaciones" onClick={() => setMenuOpen(false)}>Curso, Parcial y Exámenes</Link>
        <Link href="/edificio" onClick={() => setMenuOpen(false)}>Edificio y Alrededores</Link>
        <Link href="/sitios-web" onClick={() => setMenuOpen(false)}>Otros Sitios Web</Link>
        <Link href="/convivencia" onClick={() => setMenuOpen(false)}>Convivencia</Link>
        <Link href="/recursos" onClick={() => setMenuOpen(false)}>Recursos</Link>
        <Link href="/glosario" onClick={() => setMenuOpen(false)}>Glosario</Link>
      </div>
    </nav>
  );
}
