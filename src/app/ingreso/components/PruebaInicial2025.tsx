'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const PruebaInicial2025 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Prueba Inicial 2025</h2>
      <p><strong>Fecha:</strong> 28 de febrero de 2025, a las 9:00 hs.</p>
      <p><strong>Obligatoria:</strong> en caso de no presentarse, se le asigna nota 0.</p>
      <p>
        <strong>Objetivo:</strong> Evaluar los conocimientos matemáticos y lógicos de los estudiantes ingresantes.
      </p>
      <p>
        <strong>Resultados:</strong> Según el puntaje obtenido, se determinará la trayectoria recomendada:
      </p>
      <ul className={styles.list}>
        <li><strong>60%-100%:</strong> Se conceden 4 créditos no acumulables con Matemática Inicial.</li>
        <li><strong>20%-59%:</strong> Se recomienda cursar Matemática Inicial (no obligatorio).</li>
        <li><strong>0%-19%:</strong> Obligación de cursar Matemática Inicial y TBEO.</li>
      </ul>
      <p>
        <strong>Preparación:</strong> Se recomienda revisar ejercicios de pruebas anteriores:
      </p>
      <ul className={styles.list}>
        <li>
          <Link href="https://eva.fing.edu.uy/course/view.php?id=1589" target="_blank" rel="noopener noreferrer">
            Curso: PI -1S Prueba Inicial de Matemática | FING
          </Link>
        </li>
        <li>
          <Link href="https://eva.fing.edu.uy/pluginfile.php/370761/course/section/27051/ejercicios_preparacion_prueba.pdf" target="_blank" rel="noopener noreferrer">
            Recopilación de Ejercicios
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PruebaInicial2025;
