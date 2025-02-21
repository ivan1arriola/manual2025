'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const ActividadIntroductoria = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Actividad Introductoria</h2>
      <p>
        Es una actividad que funciona de <strong>introducción a la universidad y la facultad</strong>. Es destinada a los estudiantes que recién ingresan a la facultad.
      </p>
      <p>
        Varía año a año lo que se hace, pero suele incluir una <strong>bienvenida del decano de turno, una charla del espacio de orientación y consulta, talleres, charlas con directores de carrera, egresados, estudiantes y docentes</strong>.
      </p>
      <p>
        En esta actividad también está contemplada la prueba inicial.
      </p>
      <p>
        <strong>Enlace:</strong> {" "}
        <Link href="https://www.fing.edu.uy/node/45478" target="_blank" rel="noopener noreferrer">
          ACTIVIDAD INTRODUCTORIA Y PRUEBA INICIAL | Facultad de Ingeniería
        </Link>.
      </p>
    </div>
  );
};

export default ActividadIntroductoria;
