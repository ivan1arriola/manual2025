'use client';

import styles from "@/app/ingreso/Ingreso.module.css";
import Link from "next/link";

const ComisionesCarrera = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comisiones de Carrera</h2>
      <p>
        Todas las carreras de la Facultad de Ingeniería (FING) cuentan con una comisión encargada de administrar cada carrera.
      </p>
      <p>
        Se recomienda que una vez inscriptos a la carrera, se matriculen en el espacio en EVA de la carrera, ya que allí se encuentra información relevante de primera mano. Entre los contenidos disponibles, se incluyen módulos de taller, actividades de extensión, actualizaciones en las trayectorias sugeridas, así como en los currículos o perfiles vigentes, planes de estudio y programas actuales.
      </p>

      <h3 className={styles.stepTitle}>Carreras con espacio en EVA</h3>
      <p>Es altamente recomendado que se matriculen en el EVA de su carrera para recibir toda la información.</p>
      <ul className={styles.list}>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=773" target="_blank">Ingeniería Civil</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1707" target="_blank">Ingeniería de Alimentos</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1433" target="_blank">Ingeniería de Producción</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=996" target="_blank">Ingeniería Eléctrica</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1511" target="_blank">Ingeniería en Agrimensura</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=800" target="_blank">Ingeniería en Computación</Link> y <Link href="https://eva.fing.edu.uy/course/view.php?id=800" target="_blank">Licenciatura en Computación</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1314" target="_blank">Ingeniería en Sistemas de Comunicación</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1570" target="_blank">Ingeniería Físico-Matemática</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1674" target="_blank">Ingeniería Industrial Mecánica</Link> y <Link href="https://eva.fing.edu.uy/course/view.php?id=1674" target="_blank">Ingeniería Naval</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=198" target="_blank">Ingeniería Química</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1530" target="_blank">Tecnólogo en Cartografía</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1767" target="_blank">Tecnólogo Industrial Mecánico</Link></li>
        <li><Link href="https://eva.fing.edu.uy/course/view.php?id=1705" target="_blank">Licenciatura en Ciencias de la Atmósfera</Link></li>
      </ul>

      <h3 className={styles.stepTitle}>Carreras con espacio en páginas web</h3>
      <p>Estas carreras no tienen un espacio en EVA, pero cuentan con plataformas o páginas web para obtener información adicional y es recomendable estar familiarizados con estos.</p>
      <ul className={styles.list}>
        <li><Link href="https://www.tacuarembo.udelar.edu.uy/ingenieria-forestal-tacuarembo/" target="_blank">Ingeniería Forestal</Link> (Tacuarembó)</li>
        <li><Link href="https://ingbio.paap.cup.edu.uy/" target="_blank">Licenciatura en Ingeniería Biológica</Link></li>
        <li><Link href="http://agua.unorte.edu.uy/programas/" target="_blank">Licenciatura en Recursos Hídricos y Riego</Link> (RN-Salto)</li>
        <li><Link href="https://www.utu.edu.uy/tecnologo-carnico" target="_blank">Tecnólogo Cárnico</Link></li>
        <li><Link href="https://www.utu.edu.uy/tecnologo-en-madera" target="_blank">Tecnólogo en Madera</Link> (Rivera)</li>
        <li><Link href="https://udelar.edu.uy/carrerasinterior/tecnologo-en-telecomunicaciones/" target="_blank">Tecnólogo en Telecomunicaciones</Link> (Rocha)</li>
        <li><Link href="https://www.fing.edu.uy/tecnoinf/mvd/index.html" target="_blank">Tecnólogo Informático</Link></li>
        <li><Link href="https://www.cure.edu.uy/ensenanza/oferta-educativa/tecnologo-minero/" target="_blank">Tecnólogo Minero</Link> (Treinta y Tres)</li>
      </ul>
    </div>
  );
};

export default ComisionesCarrera;
