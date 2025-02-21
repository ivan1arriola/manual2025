"use client";

import styles from "@/app/introduccion/page.module.css";
import Link from "next/link";

export default function FacultadIngenieria() {
  return (
    <section className={styles.container}>

      <h1 className={styles.title}>Facultad de Ingeniería (FING)</h1>
      <p className={styles.paragraph}>
        La <strong>Facultad de Ingeniería (FING)</strong>, parte de la UdelaR, es una institución pública dedicada a la <strong>formación de profesionales en ingeniería</strong>.
        Su misión es capacitar a los estudiantes para responder a las necesidades del sector productivo y contribuir al desarrollo de la sociedad uruguaya.
      </p>

      <h2 className={styles.stepTitle}>Carreras en centros regionales</h2>
      <ul className={styles.list}>
        <li>📍 <strong>Salto</strong></li>
        <li>📍 <strong>Paysandú</strong></li>
        <li>📍 <strong>Tacuarembó</strong></li>
        <li>📍 <strong>Rocha</strong></li>
        <li>📍 <strong>Maldonado</strong></li>
      </ul>
      <p className={styles.paragraph}>
        Más información en: <Link href="https://www.fing.edu.uy/ensenanza/carrerasinterior" target="_blank" className={styles.link}>
          Carreras en el interior
        </Link>.
      </p>

      <h2 className={styles.stepTitle}>Oferta Académica de FING</h2>
      <h3 className={styles.subTitle}>Carreras de Ingeniería</h3>
      <ul className={styles.list}>
        <li>🛠️ <strong>Ingeniería Civil</strong></li>
        <li>🥼 <strong>Ingeniería de Alimentos</strong> (FQ)</li>
        <li>🏭 <strong>Ingeniería de Producción</strong></li>
        <li>⚡ <strong>Ingeniería Eléctrica</strong></li>
        <li>📍 <strong>Ingeniería en Agrimensura</strong></li>
        <li>💻 <strong>Ingeniería en Computación</strong></li>
        <li>📡 <strong>Ingeniería en Sistemas de Comunicación</strong></li>
        <li>🔬 <strong>Ingeniería Físico-Matemática</strong></li>
        <li>🌲 <strong>Ingeniería Forestal</strong> (Tacuarembó)</li>
        <li>🛠️ <strong>Ingeniería Industrial Mecánica</strong></li>
        <li>🚢 <strong>Ingeniería Naval</strong></li>
        <li>🧪 <strong>Ingeniería Química</strong> (Compartida con FQ)</li>
      </ul>

      <h3 className={styles.subTitle}>Carreras de Licenciatura</h3>
      <ul className={styles.list}>
        <li>🌪️ <strong>Licenciatura en Ciencias de la Atmósfera</strong> (Compartida con FCIEN)</li>
        <li>💻 <strong>Licenciatura en Computación</strong></li>
        <li>🧬 <strong>Licenciatura en Ingeniería Biológica</strong></li>
        <li>💦 <strong>Licenciatura en Recursos Hídricos y Riego</strong> (RN-Salto)</li>
        <li>🎥 <strong>Licenciatura en Ingeniería de Medios</strong> (Disponible desde 2025, compartida con FIC)</li>
      </ul>

      <h3 className={styles.subTitle}>Carreras de Tecnólogos</h3>
      <ul className={styles.list}>
        <li>🥩 <strong>Tecnólogo Cárnico</strong></li>
        <li>🗺️ <strong>Tecnólogo en Cartografía</strong></li>
        <li>🌲 <strong>Tecnólogo en Madera</strong> (Rivera)</li>
        <li>📡 <strong>Tecnólogo en Telecomunicaciones</strong> (Rocha)</li>
        <li>⚙️ <strong>Tecnólogo Industrial Mecánico</strong></li>
        <li>💻 <strong>Tecnólogo Informático</strong></li>
        <li>⛏️ <strong>Tecnólogo Minero</strong> (Treinta y Tres)</li>
      </ul>

      <h2 className={styles.stepTitle}>Institutos de la Facultad</h2>
      <ul className={styles.list}>
        <li>📊 <strong>IMERL:</strong> Instituto de Matemática y Estadística Rafael Laguardia.</li>
        <li>💻 <strong>INCO:</strong> Instituto de Computación.</li>
        <li>⚡ <strong>IIE:</strong> Instituto de Ingeniería Eléctrica.</li>
        <li>🔬 <strong>IF:</strong> Instituto de Física.</li>
        <li>📍 <strong>IA:</strong> Instituto de Agrimensura.</li>
        <li>🏗️ <strong>IET:</strong> Instituto de Estructuras y Transporte.</li>
      </ul>

      <h2 className={styles.stepTitle}>Unidades de Apoyo</h2>
      <ul className={styles.list}>
        <li>📚 Unidad de Enseñanza</li>
        <li>💻 Unidad de Recursos Informáticos</li>
        <li>🌍 Unidad de Extensión</li>
        <li>🏗️ Unidad de Gestión de Infraestructura</li>
      </ul>

      <h2 className={styles.stepTitle}>Buses que sirven para ir a FING 🚌</h2>
      <p className={styles.paragraph}>Para llegar a FING, podés usar los buses: 117, 192, 199, 300 y 405.</p>

      <h2 className={styles.stepTitle}>Cogobierno de la Facultad de Ingeniería</h2>
      <p className={styles.paragraph}>
        La Facultad de Ingeniería (FING) está regida por la <strong>Ley Orgánica de la UdelaR</strong>, lo que asegura un sistema de 
        <strong>cogobierno</strong>, en el que participan docentes, estudiantes y egresados en la toma de decisiones.
      </p>

      <h2 className={styles.stepTitle}>Elecciones Universitarias 🗳️</h2>
      <p className={styles.paragraph}>
        Los representantes de estos órganos se eligen mediante voto en las <strong>Elecciones Universitarias</strong>, 
        en las que pueden participar estudiantes, docentes y egresados. El voto es obligatorio excepto para personas mayores de 75 años.
      </p>
    </section>
  );
}
