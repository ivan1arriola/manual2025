"use client";

import styles from "@/app/introduccion/page.module.css";
import Link from "next/link";

export default function Universidad() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Universidad de la República (UdelaR)</h1>
      <p className={styles.paragraph}>
        La <strong>Universidad de la República (UdelaR)</strong> es la principal institución pública de educación superior en Uruguay.
        Fundada el <strong>18 de julio de 1849</strong> en Montevideo, actualmente tiene presencia en <strong>14 departamentos</strong> 
        del país y cuenta con más de <strong>135.000 estudiantes de grado</strong> (datos del relevamiento continuo de estudiantes, 2018).
      </p>

      <h2 className={styles.stepTitle}>Características principales</h2>
      <ul className={styles.list}>
        <li>
          <strong>Autonomía y cogobierno:</strong> La UdelaR es un ente autónomo donde todos los universitarios (estudiantes, egresados y docentes) 
          participan en las decisiones de gobierno según lo establece la Ley Orgánica de 1958.
        </li>
        <li>
          <strong>Organización:</strong> Está conformada por facultades, escuelas, institutos, centros universitarios regionales y servicios centrales.
        </li>
      </ul>

      
    </section>
  );
}
