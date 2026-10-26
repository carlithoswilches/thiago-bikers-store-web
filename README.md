# Thiago Bikers Store · Sitio web

> **EN:** Website for a real client, a custom-uniform maker for motorcycle clubs in Bogotá. Built with Astro, Tailwind CSS and React and live at [thiagobikersstore.com](https://thiagobikersstore.com).

![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

**Sitio en línea:** https://thiagobikersstore.com

**Estado:** en línea desde el 18 de octubre de 2026.

## El cliente

**Thiago Bikers Store E.U.** fabrica uniformes personalizados en Bogotá: chaquetas, buzos y camisetas sublimadas para clubes de moteros, equipos deportivos, gimnasios y empresas. Antes vendía solo por redes sociales y WhatsApp. Necesitaba una página propia que mostrara sus trabajos y facilitara pedir cotizaciones.

Es un proyecto real para un cliente, hecho como desarrollador freelance (Utilixa Digital). Arrancó el 15 de octubre de 2026 y salió a internet el 18 de octubre de 2026. Se publica con autorización del cliente.

## Qué tiene el sitio

- **Inicio:** portada con título animado, servicios, catálogo de productos, cifras, "Por qué Thiago" y galería con fotos reales de sus trabajos.
- **Formulario de cotización:** arma el mensaje y lo abre en WhatsApp. No guarda datos en ningún servidor.
- **Páginas legales para Colombia:**
  - política de tratamiento de datos personales (Ley 1581 de 2012)
  - política de cookies, con su aviso
  - canal de PQR (peticiones, quejas y reclamos)
- **Animaciones como islas de React,** que Astro carga solo donde se necesitan:
  - el título aparece palabra por palabra
  - contadores que suben desde cero
  - botón con efecto imán
  - franja de texto que acelera con el scroll
  - tarjetas con inclinación 3D
- **Accesibilidad:** las animaciones respetan la opción del sistema "reducir movimiento". Sin JavaScript, el sitio se ve completo, solo que quieto.
- **Servidor:** un `.htaccess` define la página 404, la caché y cabeceras de seguridad.
- **SEO:** metadatos con `astro-seo` y mapa del sitio automático.

## Tecnologías

| Área | Herramientas |
|---|---|
| Framework | Astro 7, con generación estática |
| Estilos | Tailwind CSS 4 |
| Interactividad | React 19 + Motion, como islas de Astro |
| Lenguaje | TypeScript |
| Hosting | Hostinger, con dominio propio, SSL y redirección a HTTPS |

## Cómo ejecutarlo

Necesitas Node.js 22.12 o superior.

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve la versión compilada
```

## Dónde se edita

| Qué | Archivo |
|---|---|
| Textos, servicios, catálogo, galería, datos de contacto y legales | `src/data/site.ts` |
| Colores de la marca (negro, rojo de carreras, cromo) | `src/styles/brand.css` |
| Franja de vista previa y bloqueo de buscadores | `src/data/demo.ts` |
| Componentes animados | `src/components/animados/` |
| Páginas | `src/pages/` |

## Mi rol y cómo usé IA

Hice el sitio con **Claude (Anthropic)** como asistente de programación.

**Lo que hizo la IA:** generó gran parte de la estructura, los componentes y las animaciones a partir de mis instrucciones.

**Lo que hice yo:**
- conseguir el cliente y entender qué necesitaba
- definir el contenido y elegir las fotos
- ajustar diseño y textos según sus comentarios
- revisar el resultado en celular y computador
- comprar y configurar el dominio, el SSL y la publicación en Hostinger

**Lo que aprendí:**
- cómo funciona la arquitectura de islas de Astro (HTML estático con JavaScript solo donde hace falta)
- qué exige la ley colombiana de datos personales a una página web
- cómo es el ciclo completo con un cliente real: propuesta, ajustes, publicación y aprobación

## Créditos y licencia

- Plantilla base: [Astroship](https://github.com/surjithctly/astroship) de Web3Templates, con licencia GPL-3.0. Por eso este código se distribuye bajo la misma licencia (ver `LICENSE`).
- Algunas animaciones están adaptadas de [React Bits](https://reactbits.dev), con licencia MIT. Cada archivo indica de qué componente viene.
- **El nombre, el logo y las fotos son propiedad de Thiago Bikers Store E.U.** Se muestran con su autorización y no se pueden reutilizar.

## Autor

**Carlos Andrés Wilches Guerra** · Utilixa Digital · [GitHub](https://github.com/carlithoswilches) · candreswilches@gmail.com
