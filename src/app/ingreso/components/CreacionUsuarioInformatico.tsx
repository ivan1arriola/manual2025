'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const CreacionUsuarioInformatico = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Creación del usuario informático</h2>
      <p><strong>Cuándo:</strong> Se tiene que crear posteriormente a crear el usuario SGAE.</p>
      <p>
        <strong>Funcionalidad:</strong> Este usuario te permitirá acceder a los servicios de la FING, como el EVA, computadoras (presenciales y remotas), correo electrónico institucional (tu.usuario@fing.edu.uy) y otros recursos.
      </p>
      <p>
        <strong>Cómo crearlo:</strong> Ingresa a la página {" "}
        <Link href="https://www.fing.edu.uy/ens/miusuario" target="_blank" rel="noopener noreferrer">
          Gestión de Usuario Informático
        </Link>.
      </p>
      <p>
        <strong>Instrucciones:</strong> Consulta la página de la facultad sobre la {" "}
        <Link href="https://www.fing.edu.uy/sysadmin/configuraciones/gesti%C3%B3n-de-usuarios-estudiantiles" target="_blank" rel="noopener noreferrer">
          Creación de usuario
        </Link>.
      </p>
      <p>
        <strong>Nota:</strong> Después de crear el usuario, aún podrás seguir ingresando con tu cédula y contraseña de Bedelía (útil en caso de olvidar la contraseña del usuario informático).
      </p>
    </div>
  );
};

export default CreacionUsuarioInformatico;
