"use client";

import styles from "@/app/ingreso/Ingreso.module.css";
import ProcedimientoInscripcion from "@/app/ingreso/components/ProcedimientoInscripcion";
import Asesoramiento from "@/app/ingreso/components/Asesoramiento";
import EntregaDocumentacion from "@/app/ingreso/components/EntregaDocumentacion";
import InfoEstudiantesMigrantes from "./components/InfoEstudiantesMigrantes";
import CreacionUsuarioBedelia from "./components/CreacionUsuarioBedelia";
import CreacionUsuarioInformatico from "./components/CreacionUsuarioInformatico";
import ActividadIntroductoria from "./components/ActividadIntroductoria";
import PruebaInicial2025 from "./components/PruebaInicial2025";
import ComisionesCarrera from "./components/ComisionesCarrera";


export default function Ingreso() {
  return (
    <div className={styles.container}>
      <ProcedimientoInscripcion />
      <Asesoramiento /> 
      <EntregaDocumentacion />
      <InfoEstudiantesMigrantes />
      <CreacionUsuarioBedelia />
      <CreacionUsuarioInformatico />
      <ActividadIntroductoria />
      <PruebaInicial2025 />
      <ComisionesCarrera />

     
    </div>
  );
}
