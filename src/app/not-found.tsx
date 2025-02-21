"use client";

import Link from "next/link";
import styles from "./not-found.module.css"; // Asegúrate de crearlo

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Página no encontrada</h1>
      <p className={styles.subtitle}>
        Parece que la página que buscas no existe.
      </p>
      <Link href="/" className={styles.button}>
        Volver al inicio
      </Link>
    </div>
  );
}
