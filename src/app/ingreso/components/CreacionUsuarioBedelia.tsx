'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const CreacionUsuarioBedelia = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Creación del usuario de bedelía</h2>
      <p>
        Tras realizar y ser aceptada la preinscripción web, recibirás un correo con el código de activación del <strong>Usuario Bedelía Udelar</strong> (para usar en un plazo máximo de 72 horas).
      </p>
      <p>
        <strong>Activación</strong>: Realizarla en{" "}
        <Link
          href="https://login.udelar.edu.uy/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Gestión de usuarios Udelar
        </Link>.
      </p>
      <p>
        Una vez que se complete el procedimiento de activación de usuario, les llegará un mail de confirmación a la casilla de correo que establecieron al momento de inscribirse.
      </p>
      <p>
        <strong>Importante</strong>: Asegúrate de colocar en el formulario de preinscripción una casilla de correo que uses habitualmente.
      </p>
    </div>
  );
};

export default CreacionUsuarioBedelia;
