"use client";

import styles from "@/app/introduccion/page.module.css";

export default function Bienvenida() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        ¡Bienvenido a la Facultad de Ingeniería - UdelaR!
      </h1>
      <p className={styles.paragraph}>
        Sabemos que el paso de la secundaria a la universidad trae muchos cambios. 
        Por eso, desde el <strong>Centro de Estudiantes de Ingeniería (CEI)</strong> creamos este manual 
        para ayudarte a hacer esta transición de la mejor manera posible. 
        Aquí encontrarás información sobre la universidad, la facultad y 
        lo que un estudiante de la <strong>FING</strong> vive durante el año.
      </p>
    </section>
  );
}
