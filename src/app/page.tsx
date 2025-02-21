"use client";

import { Button } from "@/components/common/Button/Button";
import { Card } from "@/components/common/Card/Card";
import { CardContent } from "@/components/common/CardContent/CardContent";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css"; // Archivo de estilos CSS Modules
import ObjetivoAlcance from "./ObjetivosAlcance";

export default function Home() {
  return (
    <div className={styles.container}>
      
      {/* Imagen de portada */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.imageWrapper}
      >
        <Image
          src="/Portada.jpg"
          alt="Portada Manual de Ingreso"
          width={200} // Ajusta según sea necesario
          height={100} // Ajusta según sea necesario
          className={styles.image}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.intro}
      >
        <h1 className={styles.title}>Manual para la Generación de Ingreso 2025</h1>
        <p className={styles.subtitle}>
          Encuentra toda la información necesaria para tu ingreso a la Facultad de Ingeniería de la UdelaR.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.cardContainer}
      >
        <Card className={styles.card}>
          <CardContent className={styles.cardContent}>
            <p className={styles.sectionTitle}>Explora las secciones:</p>
            <div className={styles.buttonGrid}>
              
              <Link href="/introduccion">
                <Button className={styles.button}>Introducción</Button>
              </Link>
              <Link href="/ingreso">
                <Button className={styles.button}>Ingreso</Button>
              </Link>
              <Link href="/primer-semestre">
                <Button className={styles.button}>Primer Semestre</Button>
              </Link>
              <Link href="/evaluaciones">
                <Button className={styles.button}>Curso, Parcial y Exámenes</Button>
              </Link>
              <Link href="/edificio">
                <Button className={styles.button}>Edificio y Alrededores</Button>
              </Link>
              <Link href="/sitios-web">
                <Button className={styles.button}>Otros Sitios Web</Button>
              </Link>
              <Link href="/convivencia">
                <Button className={styles.button}>Convivencia</Button>
              </Link>
              <Link href="/recursos">
                <Button className={styles.button}>Recursos</Button>
              </Link>
              <Link href="/glosario">
                <Button className={styles.button}>Glosario</Button>
              </Link>
              
              {/* Botón de descarga en PDF ocupando ambas columnas */}
              <a href="https://docs.google.com/document/d/1nhLAVHZb-M6y8nn2slDWG3ZuGoCwL3Kash_5kA7algY/export?format=pdf" target="_blank" rel="noopener noreferrer" className={styles.fullWidthButton}>
                <Button className={styles.button}>📥 Descargar en PDF</Button>
              </a>

            </div>
          </CardContent>
        </Card>
      </motion.div>

      <ObjetivoAlcance />

    </div>
  );
}
