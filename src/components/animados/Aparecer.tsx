// Entrada escalonada con Motion: el contenido sube y aparece cuando llega a la pantalla.
// Se usa para las 4 fotos del mosaico de contacto (cada una un poco después que la anterior).
import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Posición del elemento: define el retraso de su aparición */
  indice?: number;
  className?: string;
}

export default function Aparecer({ children, indice = 0, className = "" }: Props) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        data-animado
        className={className}
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.6, delay: indice * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
