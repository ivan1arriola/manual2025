'use client';

import styles from "./Home.module.css";
import Link from "next/link";

const ObjetivoAlcance = () => {
  return (
    <div className={styles.subcontainer}>
      <h2 className={styles.title}>Objetivo y Alcance del Manual</h2>
      <p>
        Este <strong>manual</strong> está diseñado para proporcionar información útil a los nuevos <strong>estudiantes</strong> de la <strong>Facultad de Ingeniería</strong>. 
        No pretende ser una guía <strong>exhaustiva</strong>, por lo que algunos <strong>datos</strong> pueden estar incompletos o contener errores.
      </p>
      <p>
        La información recopilada proviene de fuentes <strong>oficiales</strong>, <strong>no oficiales</strong> y del <strong>boca a boca</strong>. 
        En caso de dudas, se recomienda consultar siempre los <strong>canales oficiales</strong> de la facultad.
      </p>
      <p>
        Si detectas errores o deseas hacer sugerencias para mejorar este manual, puedes hacerlo a través del siguiente formulario:
      </p>
      <p>
        🔗 <Link href="https://forms.gle/ewNGRrosiNLw9CT16" target="_blank" rel="noopener noreferrer">
          <strong>Enviar sugerencias</strong>
        </Link>
      </p>
    </div>
  );
};

export default ObjetivoAlcance;
