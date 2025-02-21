'use client';

import styles from "@/app/ingreso/Ingreso.module.css";

const Asesoramiento = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Asesoramiento</h2>
      <ul className={styles.list}>
        <li><strong>Comisión de actividad introductoria:</strong> <a href="mailto:introductorio@fing.edu.uy">introductorio@fing.edu.uy</a></li>
        <li><strong>Bedelía:</strong> <a href="mailto:bedelia@fing.edu.uy">bedelia@fing.edu.uy</a></li>
      </ul>
    </div>
  );
};

export default Asesoramiento;
