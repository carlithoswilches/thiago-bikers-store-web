// Franja de texto en movimiento que acelera (y cambia de sentido) según la velocidad con que se baja la página.
// Adaptado del componente ScrollVelocity de React Bits (licencia MIT, https://reactbits.dev).
// Cambios: tipografía y colores de la página, filas alternas en contorno, sin arrastre con el mouse,
// y se detiene cuando no está en pantalla (ahorra batería en el celular).
import { useLayoutEffect, useRef, useState, type RefObject } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

interface Props {
  /** Una fila por texto; las filas pares van hacia la derecha y las impares hacia la izquierda */
  filas: string[];
  /** Píxeles por segundo cuando no se está bajando la página */
  velocidad?: number;
  /** Clases de la tipografía (tamaño, letra, color) */
  className?: string;
  /** Clases extra para las filas impares (por ejemplo, otro color) */
  claseAlterna?: string;
  /** Separador entre repeticiones */
  separador?: string;
  copias?: number;
}

// Mantiene un valor dentro de un rango, dando la vuelta (para que el texto se repita sin cortes)
const envolver = (min: number, max: number, v: number) => {
  const rango = max - min;
  return ((((v - min) % rango) + rango) % rango) + min;
};

// Ancho real de una copia del texto (se recalcula si cambia el tamaño de la pantalla)
function useAncho(ref: RefObject<HTMLSpanElement | null>) {
  const [ancho, setAncho] = useState(0);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new ResizeObserver(([e]) => setAncho(e.borderBoxSize?.[0]?.inlineSize ?? e.contentRect.width));
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return ancho;
}

function Fila({
  texto,
  velocidadBase,
  className,
  contorno,
  separador,
  copias,
}: {
  texto: string;
  velocidadBase: number;
  className: string;
  contorno: boolean;
  separador: string;
  copias: number;
}) {
  const contenedor = useRef<HTMLDivElement>(null);
  const enVista = useInView(contenedor);
  const reducir = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocidadScroll = useVelocity(scrollY);
  const suave = useSpring(velocidadScroll, { damping: 50, stiffness: 400 });
  // Bajar a 1000 px/s multiplica la velocidad por 5 (como el original)
  const factor = useTransform(suave, [0, 1000], [0, 5], { clamp: false });
  const copiaRef = useRef<HTMLSpanElement>(null);
  const anchoCopia = useAncho(copiaRef);
  const x = useTransform(baseX, (v) => (anchoCopia === 0 ? "0px" : `${envolver(-anchoCopia, 0, v)}px`));
  const sentido = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reducir || !enVista) return;
    let mover = sentido.current * velocidadBase * (delta / 1000);
    if (factor.get() < 0) sentido.current = -1;
    else if (factor.get() > 0) sentido.current = 1;
    mover += sentido.current * mover * factor.get();
    baseX.set(baseX.get() + mover);
  });

  // Contorno: letras huecas con borde del color del texto
  const estiloContorno = contorno ? { WebkitTextFillColor: "transparent", WebkitTextStroke: "max(1px, 0.025em) currentColor" } : undefined;

  return (
    <div ref={contenedor} className="relative overflow-hidden">
      <motion.div className={`flex whitespace-nowrap ${className}`} style={{ x, ...estiloContorno }}>
        {Array.from({ length: copias }, (_, i) => (
          <span key={i} ref={i === 0 ? copiaRef : null} aria-hidden={i > 0 ? true : undefined} className="shrink-0">
            {texto}
            <span className="mx-[0.4em] text-primary [-webkit-text-fill-color:currentColor]">{separador}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function FranjaVelocidad({
  filas,
  velocidad = 60,
  className = "",
  claseAlterna = "",
  separador = "•",
  copias = 6,
}: Props) {
  return (
    <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {filas.map((texto, i) => (
        <Fila
          key={i}
          texto={texto}
          velocidadBase={i % 2 === 0 ? velocidad : -velocidad}
          className={`${className} ${i % 2 === 1 ? claseAlterna : ""}`}
          contorno={i % 2 === 1}
          separador={separador}
          copias={copias}
        />
      ))}
    </div>
  );
}
