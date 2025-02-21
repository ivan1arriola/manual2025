"use client";

import Link from "next/link";
import styles from "@/app/introduccion/page.module.css";

export default function CentroEstudiantes() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Centro de Estudiantes de Ingeniería</h2>
      <p className={styles.paragraph}>
        Es el gremio que nuclea a todos los estudiantes de la Facultad de Ingeniería y 
        pertenece a la Federación de Estudiantes Universitarios del Uruguay (F.E.U.U.). 
        Es nuestro espacio para coordinar distintas actividades y defender los intereses de los estudiantes de la Facultad.
      </p>

      <h3 className={styles.stepTitle}>¿Cómo funciona?</h3>
      <p className={styles.paragraph}>
        El trabajo principal del CEI se da en las comisiones. 
        Estos son grupos de trabajo abiertos a todos los estudiantes que se centran en distintas áreas. 
        Se reúnen periódicamente y las fechas de reuniones se publican en las redes sociales del CEI.
      </p>

      <h3 className={styles.stepTitle}>Nuestras Redes Sociales</h3>
      <ul className={styles.list}>
        <li>
          📸 Instagram:{" "}
          <Link href="https://instagram.com/cei_fing" target="_blank" className={styles.link}>
            @cei_fing
          </Link>
        </li>
        <li>
          🐦 X (Twitter):{" "}
          <Link href="https://twitter.com/cei_fing" target="_blank" className={styles.link}>
            @cei_fing
          </Link>
        </li>
      </ul>

      <h3 className={styles.stepTitle}>Nuestras Comisiones</h3>
      <ul className={styles.list}>
        <li className={styles.commissionItem}>✊ <strong>Género y Diversidad</strong></li>
        <li className={styles.commissionItem}>🌿 <strong>Asuntos Gremiales</strong></li>
        <li className={styles.commissionItem}>🎨 <strong>Kultura</strong></li>
        <li className={styles.commissionItem}>💰 <strong>Finanzas</strong></li>
        <li className={styles.commissionItem}>🌱 <strong>Extensión</strong></li>
        <li className={styles.commissionItem}>🏛️ <strong>Cogobierno</strong></li>
        <li className={styles.commissionItem}>🎙️ <strong>Propaganda</strong></li>
        <li className={styles.commissionItem}>📚 <strong>Enseñanza</strong></li>
        <li className={styles.commissionItem}>🏥 <strong>Bienestar Estudiantil</strong></li>
        <li className={styles.commissionItem}>🛠️ <strong>Servicios</strong></li>
      </ul>
    </section>
  );
}
