'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const InfoEstudiantesMigrantes = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información para Estudiantes Migrantes</h2>
      <p>
        La universidad cuenta con una oficina especializada en la orientación y apoyo a estudiantes extranjeros y migrantes.
        Consulta más información en el siguiente enlace:
      </p>
      <div className={styles.buttonContainer}>
        <Link
          href="https://udelar.edu.uy/internacionales/estudiantes-extranjeros-y-migrantes-en-la-udelar-2022/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          Información para estudiantes migrantes
        </Link>
      </div>
    </div>
  );
};

export default InfoEstudiantesMigrantes;
