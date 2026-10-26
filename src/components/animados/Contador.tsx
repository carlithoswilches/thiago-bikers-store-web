// Cifra que cuenta desde cero cuando aparece en pantalla (por ejemplo, "6,5 mil" o "715").
// Adaptado del componente CountUp de React Bits (licencia MIT, https://reactbits.dev), modo "count".
// Cambios: coma decimal colombiana y el HTML trae la cifra final (si no hay JavaScript, se ve la cifra correcta).
import { animate, useInView } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

interface Props {
  hasta: number;
  decimales?: number;
  /** Texto después del número, por ejemplo " mil" */
  sufijo?: string;
  /** Duración en segundos */
  duracion?: number;
}

// Formato colombiano: punto para miles y coma para decimales (6,5 · 1.200)
const formatear = (valor: number, decimales: number, sufijo: string) =>
  valor.toLocaleString("es-CO", { minimumFractionDigits: decimales, maximumFractionDigits: decimales }) + sufijo;

export default function Contador({ hasta, decimales = 0, sufijo = "", duracion = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const enVista = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reducir = useRef(false);

  // Al cargar: si se permite el movimiento, el número arranca en cero y espera a estar en pantalla
  useLayoutEffect(() => {
    reducir.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducir.current && ref.current) ref.current.textContent = formatear(0, decimales, sufijo);
  }, [decimales, sufijo]);

  // Cuando aparece en pantalla, cuenta hasta la cifra final con una curva que frena al final
  useEffect(() => {
    if (!enVista || reducir.current) return undefined;
    const controles = animate(0, hasta, {
      duration: duracion,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = formatear(v, decimales, sufijo);
      },
    });
    return () => controles.stop();
  }, [enVista, hasta, decimales, sufijo, duracion]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatear(hasta, decimales, sufijo)}
    </span>
  );
}
