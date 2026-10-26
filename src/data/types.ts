export type Photo = { id: string; alt: string };

/** `icon` usa nombres de Iconify instalados: bx:* (Boxicons) o uil:* (Unicons). */
export type Service = { title: string; description: string; icon: string };

/** Producto del catálogo: el botón "Pedir este" abre WhatsApp con el nombre del producto. */
export type CatalogItem = { title: string; description: string; tag: string; image: Photo };

export type Site = {
  name: string;
  shortName: string;
  category: string;
  neighborhood: string;
  address: string;
  city: string;
  /** Teléfono visible. Si no hay, se usa solo WhatsApp. */
  phoneDisplay?: string;
  /** Formato E.164, ej. +573101234567 */
  phoneHref?: string;
  /** Solo dígitos con indicativo, ej. 573101234567 */
  whatsapp?: string;
  /** Segundo número de contacto (opcional): visible y formato E.164 */
  phone2?: { display: string; href: string };
  /** Correo del negocio (contacto, quejas y solicitudes sobre datos personales) */
  email?: string;
  /** Datos legales para el pie y las páginas de políticas */
  legal?: { razonSocial: string; nit: string };
  hours: string;
  /** Perfiles verificados del negocio (URL completas). Solo se muestran los que existan. */
  socials?: { instagram?: string; facebook?: string; tiktok?: string; threads?: string };
  /** Calificación en Google. Si el negocio no tiene ficha, se omiten y se usa `badge`. */
  rating?: number;
  reviews?: number;
  /** Sello de la portada cuando no hay calificación: texto en círculo y valor del centro. */
  badge?: { text: string; value: string };
  /** Mensaje con el que se abre WhatsApp (si no, uno genérico). */
  whatsappMessage?: string;
  /** Crédito de las fotos en el pie (por defecto, Unsplash). */
  photoCredit?: string;
  /** Familias de letra. `href` (Google Fonts) es opcional: si no está, las fuentes van dentro de la página (@fontsource). */
  fonts: { display: string; body: string; href?: string };
  /** Logo del negocio (imagen en /public). Si no hay, el menú muestra el nombre en texto. */
  logo?: { src: string; alt: string; width: number; height: number };
  seo: { title: string; description: string };
  nav: { label: string; href: string }[];
  hero: {
    titleStart: string;
    titleAccent: string;
    titleEnd?: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: Photo;
    secondaryImage: Photo;
  };
  /** 3 datos cortos para la franja de cifras (además de rating y opiniones) */
  facts: { value: string; label: string }[];
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    image: Photo;
    items: Service[];
  };
  signature: {
    eyebrow: string;
    title: string;
    text: string;
    image: Photo;
    tags: string[];
    points: string[];
  };
  /** Sección opcional "Catálogo": productos destacados y enlace al catálogo completo (p. ej., el de WhatsApp). */
  catalog?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: CatalogItem[];
    /** Frase bajo las tarjetas con lo que hay además en el catálogo completo */
    more?: string;
    fullCatalog?: { label: string; href: string };
  };
  /** Franja de texto en movimiento entre secciones (opcional): una fila por texto */
  franja?: string[];
  gallery: { eyebrow: string; title: string; images: Photo[] };
  quote: { text: string; source: string; aside?: { text: string; cta: string; href: string } };
  /** `image` se muestra en lugar del mapa cuando todavía no hay dirección. */
  /**
   * Lado derecho del bloque de contacto cuando no hay mapa:
   * `visual: "logo"` muestra el logo grande con enlace a Instagram; `visual: [fotos]` arma un mosaico de 4 trabajos;
   * si no hay `visual`, se usa `image` (una sola foto).
   */
  contact: { eyebrow: string; title: string; text: string; image?: Photo; visual?: "logo" | Photo[] };
};

/** URL de Unsplash optimizada (recorte y formato automáticos). */
export function unsplash(id: string, width = 1200) {
  // Las fotos propias del negocio viven en /public: se usan tal cual
  if (id.startsWith("/")) return id;
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
}
