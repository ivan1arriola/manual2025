'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const ProcedimientoInscripcion = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Procedimiento de Inscripción</h2>
      
      <h3 className={styles.stepTitle}>PASO 1: Certificación de estudios</h3>
      <h4 className={styles.subTitle}>Certificación según el lugar donde finalizaste tus estudios secundarios</h4>
      <ul className={styles.list}>
        <li><strong>Estudiantes de ANEP (liceos públicos y UTU)</strong>: La Udelar verificará automáticamente tu egreso en su sistema informático.</li>
        <li>
          <strong>Estudiantes de enseñanza privada</strong>: Deben solicitar la <strong>Fórmula 69</strong> dirigida a la Udelar y subirla a la plataforma de inscripciones. 
          Consulta Entrega de documentación.
        </li>
        <li>
          <strong>Estudiantes migrantes</strong>: Si terminaste secundaria o comenzaste una carrera universitaria en el exterior, revisa los requisitos en:
          <Link href="https://udelar.edu.uy/portal/migrantes/" target="_blank" rel="noopener noreferrer">udelar.edu.uy/portal/migrantes</Link>.
        </li>
      </ul>
      
      <h3 className={styles.stepTitle}>PASO 2: Obtener una identidad digital</h3>
      <p>Para completar la inscripción, debes contar con alguna de estas credenciales:</p>
      <ul className={styles.list}>
        <li><strong>Usuario TuID</strong> de ANTEL.</li>
        <li><strong>Usuario GUB.UY</strong> del Estado uruguayo.</li>
        <li><strong>Clave UDELAR</strong>, si ya has sido estudiante de la universidad.</li>
      </ul>
      
      <h3 className={styles.stepTitle}>PASO 3: Preinscripción en línea</h3>
      <ol className={styles.list}>
        <li>Ingresa a <Link href="https://bedelias.udelar.edu.uy" target="_blank" rel="noopener noreferrer">bedelias.udelar.edu.uy</Link> y selecciona <strong>“2025 INGRESOS”</strong>.</li>
        <li>Presiona <strong>“Iniciar inscripción”</strong> y elige tu método de autenticación.</li>
        <li>Adjunta los siguientes documentos:
          <ul className={styles.subList}>
            <li><strong>Cédula de identidad</strong> (ambas caras).</li>
            <li><strong>Control en salud</strong> (ex carné de salud).</li>
            <li><strong>Foto carné</strong>.</li>
            <li><strong>Certificado de estudios</strong>, según corresponda:
              <ul className={styles.subSubSubList}>
                <li><strong>Fórmula 69</strong> (para estudiantes de enseñanza privada).</li>
                <li><strong>Visado de egreso</strong> (para estudiantes de secundaria pública).</li>
                <li><strong>Constancia de egreso o Visado de UTU</strong>.</li>
                <li><strong>Escolaridad con 80 créditos o un año aprobado</strong> (para estudiantes de otras carreras Udelar).</li>
                <li><strong>Escolaridad finalizada</strong> (para egresados de carreras Udelar).</li>
                <li><strong>Reválida de secundaria finalizada o Visado de la Reválida</strong> (para estudiantes del exterior).</li>
              </ul>
            </li>
            <li>Si no tienes alguno de estos documentos, puedes solicitar la evaluación de tus estudios en: <Link href="https://dgjuridica.udelar.edu.uy" target="_blank" rel="noopener noreferrer">dgjuridica.udelar.edu.uy</Link>.</li>
          </ul>
        </li>
        <li>Revisa los datos ingresados y presiona <strong>“ACEPTAR”</strong>.</li>
        <li>Consulta el estado de tu preinscripción en la sección <strong>“Consulta ingreso Udelar”</strong> en <Link href="https://bedelias.udelar.edu.uy" target="_blank" rel="noopener noreferrer">bedelias.udelar.edu.uy</Link>.</li>
      </ol>
    </div>
  );
};

export default ProcedimientoInscripcion;
