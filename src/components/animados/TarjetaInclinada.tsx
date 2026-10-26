// Tarjeta del catálogo: aparece al bajar (una tras otra) y se inclina en 3D siguiendo el mouse, con un brillo suave.
// La inclinación está inspirada en TiltedCard de React Bits (licencia MIT, https://reactbits.dev).
// Diferencia: el original está pensado para una sola imagen; aquí envuelve la tarjeta completa (foto, texto y botón).
// En celulares no se inclina (solo aparece), y con "reducir movimiento" no hay desplazamientos.
import { motion, MotionConfig, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Posición de la tarjeta: define el retraso de su aparición */
  indice?: number;
  /** Grados máximos de inclinación */
  inclinacion?: number;
  /** Mismas esquinas redondeadas de la tarjeta (para el brillo) */
  claseRedondeo?: string;
}

const RESORTE = { stiffness: 220, damping: 22, mass: 0.6 };

export default function TarjetaInclinada({ children, indice = 0, inclinacion = 9, claseRedondeo = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useSpring(0, RESORTE);
  const rotY = useSpring(0, RESORTE);
  const escala = useSpring(1, RESORTE);
  const brilloX = useMotionValue(50);
  const brilloY = useMotionValue(50);
  const brillo = useSpring(0, RESORTE);
  const fondoBrillo = useMotionTemplate`radial-gradient(circle at ${brilloX}% ${brilloY}%, rgba(255,255,255,${brillo}) 0%, rgba(255,255,255,0) 55%)`;

  const mover = (e: PointerEvent<HTMLDivElement>) => {
    // Solo con mouse o lápiz: en pantallas táctiles no se inclina
    if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    const caja = ref.current.getBoundingClientRect();
    const nx = (e.clientX - caja.left) / caja.width - 0.5; // -0,5 (izquierda) a 0,5 (derecha)
    const ny = (e.clientY - caja.top) / caja.height - 0.5;
    rotX.set(-ny * inclinacion * 2);
    rotY.set(nx * inclinacion * 2);
    escala.set(1.03);
    brilloX.set((nx + 0.5) * 100);
    brilloY.set((ny + 0.5) * 100);
    brillo.set(0.14);
  };

  const soltar = () => {
    rotX.set(0);
    rotY.set(0);
    escala.set(1);
    brillo.set(0);
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* Entrada escalonada: de a 4 por fila, cada tarjeta un poco después que la anterior */}
      <motion.div
        data-animado
        className="h-full [perspective:900px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.6, delay: (indice % 4) * 0.09, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <motion.div
          ref={ref}
          onPointerMove={mover}
          onPointerLeave={soltar}
          className="relative h-full"
          style={{ rotateX: rotX, rotateY: rotY, scale: escala, transformStyle: "preserve-3d" }}
        >
          {children}
          <motion.div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${claseRedondeo}`} style={{ background: fondoBrillo }} />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
