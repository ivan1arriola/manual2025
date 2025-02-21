'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const FormularioEstadistico = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Formulario Estadístico</h2>
      <p>
        <strong>Obligatorio:</strong> Como estudiante de la Udelar, debes completar este formulario anualmente, el cual proporciona información y estadísticas clave para la gestión y políticas universitarias.
      </p>
      <p><strong>Fecha límite:</strong> Tendrás una fecha límite para completarlo cada año.</p>
      <p>
        <strong>Sanciones:</strong> Si no lo completas a tiempo, serás inhabilitado para realizar cualquier actividad relacionada con tu carrera hasta que completes el formulario.
      </p>
      <p>
        <strong>Estudiantes en más de una carrera:</strong> Deberás completar un formulario por cada carrera en la que estés inscrito. El primero será más largo, y los siguientes serán más cortos. Las sanciones se aplican por cada carrera.
      </p>
      <p>
        <strong>Dónde completarlo:</strong> Accede a los formularios en {" "}
        <Link href="https://formularios.udelar.edu.uy/forma/" target="_blank" rel="noopener noreferrer">
          Formulario UdelaR
        </Link>.
      </p>
    </div>
  );
};

export default FormularioEstadistico;
