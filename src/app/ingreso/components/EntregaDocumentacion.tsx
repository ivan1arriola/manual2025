'use client';

import styles from "@/app/ingreso/Ingreso.module.css";

const EntregaDocumentacion = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Entrega de documentación</h2>
      <p>
        Los estudiantes de instituciones sin sistema de visado (como liceos privados) tendrán una <strong>preinscripción provisoria</strong> hasta el <strong>31 de marzo</strong> para presentar la documentación original.  
        Si no lo hacen en ese plazo, serán dados de baja.
      </p>
      <p>
        Los estudiantes que no se encuentren en esta situación <strong>no necesitan presentar documentación original</strong>.
      </p>
    </div>
  );
};

export default EntregaDocumentacion;
