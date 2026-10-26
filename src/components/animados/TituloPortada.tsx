// Título de la portada: aparece palabra por palabra saliendo de un desenfoque, al cargar la página.
// Adaptado del componente BlurText de React Bits (licencia MIT, https://reactbits.dev), efecto "blur".
// Cambios: se dibuja dentro del <h1> (con <span>, no <p>) y respeta las palabras resaltadas en rojo.
import { motion, MotionConfig } from "motion/react";

type Parte = { texto: string; acento?: boolean };

interface Props {
  /** Partes del título; las que tienen `acento` llevan la clase `claseAcento` (rojo y subrayado) */
  partes: Parte[];
  claseAcento?: string;
  /** Segundos entre una palabra y la siguiente */
  escalon?: number;
}

export default function TituloPortada({ partes, claseAcento = "", escalon = 0.12 }: Props) {
  // Lista de palabras en orden, cada una con su estilo
  const palabras = partes.flatMap((parte) =>
    parte.texto
      .split(" ")
      .filter(Boolean)
      .map((palabra) => ({ palabra, acento: Boolean(parte.acento) })),
  );
  const textoCompleto = partes.map((p) => p.texto).join(" ").trim();

  return (
    // reducedMotion="user": si la persona pidió reducir el movimiento, no hay desplazamientos
    <MotionConfig reducedMotion="user">
      {/* Texto completo para lectores de pantalla y buscadores */}
      <span className="sr-only">{textoCompleto}</span>
      <span aria-hidden="true" data-animado>
        {palabras.map(({ palabra, acento }, i) => (
          <span key={i}>
            {i > 0 && " "}
            <motion.span
              className={`inline-block will-change-[transform,filter,opacity] ${acento ? claseAcento : ""}`}
              initial={{ filter: "blur(10px)", opacity: 0, y: -40 }}
              animate={{ filter: ["blur(10px)", "blur(5px)", "blur(0px)"], opacity: [0, 0.5, 1], y: [-40, 5, 0] }}
              transition={{ duration: 0.7, times: [0, 0.5, 1], delay: 0.15 + i * escalon, ease: "easeOut" }}
            >
              {palabra}
            </motion.span>
          </span>
        ))}
      </span>
    </MotionConfig>
  );
}
