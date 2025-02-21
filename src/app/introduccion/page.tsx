"use client";
import styles from "./page.module.css";
import Bienvenida from "./components/Bienvenida";
import CentroEstudiantes from "./components/CentroEstudiantes";
import Universidad from "./components/Universidad";
import FacultadIngenieria from "./components/FacultadIngenieria";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Introducción</h1>
      <Bienvenida />
      <CentroEstudiantes />
      <Universidad />
      <FacultadIngenieria />
    </div>
  );
}



