import { site } from "./site";

export const telHref = site.phoneHref ? `tel:${site.phoneHref}` : undefined;

/** Segundo número y correo (si existen) */
export const tel2Href = site.phone2 ? `tel:${site.phone2.href}` : undefined;
export const mailHref = site.email ? `mailto:${site.email}` : undefined;

/** Enlaces de las páginas legales (pie de página y formularios) */
export const legalLinks = [
  { label: "Contacto", href: "/contacto" },
  { label: "Política de datos personales", href: "/politica-de-datos" },
  { label: "Política de cookies", href: "/cookies" },
];

export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      site.whatsappMessage ?? `Hola ${site.shortName}, vi su página web y quiero más información.`,
    )}`
  : undefined;

const mapQuery = `${site.name}, ${site.address}, ${site.city}`;

/** Sin dirección todavía no hay a dónde llevar al visitante. */
export const hasAddress = site.address.trim().length > 0;

export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`;

/** Acción principal: WhatsApp si existe; si no, llamada. */
export const primaryHref = (whatsappHref ?? telHref ?? directionsHref) as string;

export const isExternal = (href: string) => href.startsWith("http");

/** Redes sociales del negocio con su icono de Iconify (solo las que existan). */
export const socialLinks = [
  { href: site.socials?.instagram, label: "Instagram", icon: "bx:bxl-instagram" },
  { href: site.socials?.facebook, label: "Facebook", icon: "bx:bxl-facebook-circle" },
  { href: site.socials?.tiktok, label: "TikTok", icon: "bx:bxl-tiktok" },
  { href: site.socials?.threads, label: "Threads", icon: "simple-icons:threads" },
].filter((s): s is { href: string; label: string; icon: string } => Boolean(s.href));
