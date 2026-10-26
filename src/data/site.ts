import type { Site } from "./types";

// Thiago Bikers Store: datos reales tomados de su Instagram y su Facebook (con autorización de Carlos).
// La dirección queda vacía A PROPÓSITO: Thiago está actualizando sus datos en la Cámara de Comercio y en Google Maps
// y pidió no publicar ubicación por ahora. Con `address` vacío no se muestran dirección, mapa ni "Cómo llegar".
const foto = (archivo: string, alt: string) => ({ id: `/fotos/${archivo}.jpg`, alt });

export const site: Site = {
  name: "Thiago Bikers Store",
  shortName: "Thiago Bikers",
  category: "Uniformes para clubes",
  neighborhood: "Bogotá",
  address: "",
  city: "Colombia",
  phoneDisplay: "301 616 8787",
  phoneHref: "+573016168787",
  whatsapp: "573016168787",
  whatsappMessage: "Hola Thiago, vi tu página y quiero cotizar uniformes para mi club.",
  // Segundo número: el que aparece en el letrero del local
  phone2: { display: "300 241 1432", href: "+573002411432" },
  email: "thiagomenco1902@gmail.com",
  // Razón social como aparece en el registro; el dígito de verificación (5) se calculó con el método de la DIAN
  legal: { razonSocial: "THIAGO BIKERS STORE E U", nit: "901.522.585-5" },
  hours: "Todos los días, de 8:00 a. m. a 6:00 p. m.",
  socials: {
    instagram: "https://www.instagram.com/thiago_bikers_store_oficial/",
    facebook: "https://www.facebook.com/oscar.menco.311",
    threads: "https://www.threads.com/@thiago_bikers_store_oficial",
  },
  // No tiene ficha en Google: el sello de la portada muestra sus seguidores reales en Instagram
  badge: { text: "6,5 mil seguidores en Instagram", value: "6,5K" },
  photoCredit: "Fotografías: trabajos reales de Thiago Bikers Store",
  // Las fuentes van dentro de la página (@fontsource, ver Layout.astro): no se conecta a Google Fonts
  fonts: { display: "Saira Condensed", body: "Saira" },
  // Logo original de Thiago (del PDF de Illustrator), con fondo transparente
  logo: { src: "/logo-thiago-bikers.webp", alt: "Thiago Bikers Store", width: 1200, height: 685 },
  seo: {
    title: "Thiago Bikers Store · Uniformes personalizados para clubes en Bogotá",
    description:
      "Chaquetas, buzos y camisetas sublimadas para clubes de moteros, equipos, gimnasios y empresas. El diseño se hace contigo. Cotiza por WhatsApp.",
  },
  // Con "/" delante para que el menú funcione también desde las páginas de contacto y políticas
  nav: [
    { label: "Qué hacemos", href: "/#servicios" },
    { label: "Catálogo", href: "/#catalogo" },
    { label: "Por qué Thiago", href: "/#nosotros" },
    { label: "Trabajos", href: "/#galeria" },
    { label: "Contacto", href: "/contacto" },
  ],
  hero: {
    titleStart: "El uniforme de tu club,",
    titleAccent: "diseñado contigo",
    titleEnd: "",
    subtitle:
      "Chaquetas, buzos y camisetas sublimadas para clubes de moteros, equipos, gimnasios y empresas. Thiago diseña contigo, con tu escudo, tus colores y los nombres de tu gente.",
    primaryCta: "Cotizar por WhatsApp",
    secondaryCta: "Ver qué hacemos",
    image: foto("club-celebrando", "Club de moteros celebrando con sus camisetas de Thiago Bikers Store"),
    secondaryImage: foto("buzo-thiago-bikers", "Buzo de Thiago Bikers Store en un maniquí, con gorra a juego"),
  },
  facts: [
    { value: "6,5 mil", label: "seguidores en Instagram" },
    { value: "715", label: "publicaciones en Instagram" },
    { value: "Diseño", label: "incluido y hecho contigo" },
    { value: "Todos los días", label: "de 8:00 a. m. a 6:00 p. m." },
  ],
  services: {
    eyebrow: "Qué hacemos",
    title: "Uniformes para cada tipo de club",
    intro: "Del club de moteros al gimnasio de tu barrio: cada prenda lleva el escudo, los colores y los nombres de los suyos.",
    image: foto("camiseta-lider-arte", "Camiseta manga larga sublimada con arte colombiano"),
    items: [
      { title: "Chaquetas y buzos de club", description: "Con el nombre del club en la espalda, el escudo al frente y capota, puños y cremallera en sus colores.", icon: "bx:bxs-flag-checkered" },
      { title: "Camisetas sublimadas para rodar", description: "Manga larga, sublimadas de puño a puño con el diseño de tu club, para rodadas y encuentros.", icon: "bx:bxs-t-shirt" },
      { title: "Uniformes deportivos", description: "Fútbol, ciclismo, taekwondo, basketball y béisbol, con el nombre y el número de cada integrante.", icon: "bx:football" },
      { title: "Gimnasios y entrenadores", description: "Camisetas para el equipo del gimnasio, para vender a sus clientes o para un reto o una carrera.", icon: "bx:dumbbell" },
      { title: "Empresas y uniformes de trabajo", description: "Polos con el logo de la empresa y uniformes antifluido para cocinas, carnicerías y restaurantes.", icon: "bx:bxs-briefcase" },
      { title: "Gorras bordadas", description: "Bordadas con el nombre del club o del evento, como las del Encuentro Nacional Pulsar.", icon: "bx:customize" },
      // Lo que se ve en el letrero y la vitrina del local
      { title: "Tienda para el motociclista", description: "En el local también encuentras cascos, chaquetas, guantes, balaclavas y llaveros para rodar.", icon: "bx:bxs-shopping-bag" },
    ],
  },
  signature: {
    eyebrow: "Por qué Thiago",
    title: "Tu uniforme se diseña contigo, no por ti",
    text: "Thiago Bikers Store viene del mundo de las motos: de ahí la bandera a cuadros y el nombre. Cada pedido empieza con tu escudo, tus colores y los nombres de tu gente, y antes de producir Thiago te muestra el diseño sobre la prenda para ajustarlo contigo.",
    image: foto("club-de-viaje-grupo", "Club de moteros posando con su bandera y sus camisetas"),
    tags: ["Clubes de moteros", "Ciclismo", "Fútbol", "Gimnasios", "Empresas"],
    points: [
      "El diseño va incluido y se hace contigo",
      "Ves el diseño en la prenda antes de producir",
      "Nombres y números para cada integrante",
    ],
  },
  // Catálogo: 8 productos tomados de su catálogo de WhatsApp (solo trabajos propios, sin marcas registradas).
  // Sin precios por ahora (decisión de Carlos). Cada "Pedir este" abre WhatsApp con el nombre del producto.
  catalog: {
    eyebrow: "Catálogo",
    title: "Escoge tu prenda y la personalizamos",
    intro: "Estos son algunos de los productos que más le piden a Thiago. Toca \"Pedir este\" y le llega tu mensaje por WhatsApp con el producto que te gustó.",
    items: [
      { title: "Jersey de club motero", tag: "Moteros", description: "Manga larga, sublimado completo con el escudo y el nombre de tu club.", image: { id: "/fotos/catalogo/jersey-thiago-bikers.jpg", alt: "Jersey azul, rojo y amarillo de Thiago Bikers Store en un maniquí" } },
      { title: "Buzo capotero", tag: "Moteros", description: "Con capota y en tela de excelente calidad, en los colores de tu club.", image: { id: "/fotos/catalogo/buzo-capotero.jpg", alt: "Buzo capotero rojo y negro de Thiago Bikers Store en un maniquí con gafas" } },
      { title: "Buzo con media cremallera", tag: "Empresas", description: "Cuello alto y cremallera al frente, personalizado con tu logo y tus colores.", image: { id: "/fotos/catalogo/buzo-media-cremallera.jpg", alt: "Buzo negro y rojo con media cremallera y el logo de Thiago Bikers Store" } },
      { title: "Jersey cuello tortuga", tag: "Personalizado", description: "Con cremallera completa, tu nombre y tu tipo de sangre (RH), como lo usan los moteros.", image: { id: "/fotos/catalogo/jersey-cuello-tortuga.jpg", alt: "Jersey negro y rojo de cuello tortuga con el nombre Camilo Platz y su RH" } },
      { title: "Jersey MTB para clubes", tag: "Ciclismo", description: "Para rodar en montaña, con el escudo del club y el nombre y el RH de cada ciclista.", image: { id: "/fotos/catalogo/jersey-mtb.jpg", alt: "Jersey MTB del club Caballos de Acero, negro y azul turquesa" } },
      { title: "Camiseta de cuello redondo", tag: "Deportes", description: "Para academias, equipos y eventos, como esta del club de taekwondo.", image: { id: "/fotos/catalogo/camiseta-cuello-redondo.jpg", alt: "Camiseta azul y amarilla del club Taekwondo Kalamary" } },
      { title: "Uniforme de fútbol completo", tag: "Fútbol", description: "Camiseta, pantaloneta y medias con tu diseño, el nombre y el número de cada jugador.", image: { id: "/fotos/catalogo/uniforme-futbol.jpg", alt: "Diseño de uniforme de fútbol azul y verde con pantaloneta blanca y medias azules" } },
      { title: "Uniforme antifluido", tag: "Trabajo", description: "Para carnicerías, cocinas y restaurantes: blusa, pantalón y gorra con tu logo bordado.", image: { id: "/fotos/catalogo/uniforme-antifluido.jpg", alt: "Uniforme antifluido blanco y rojo con gorra roja en un maniquí" } },
    ],
    more: "En su catálogo de WhatsApp hay más de 200 trabajos: chaquetas cortavientos con reflectivos, chalecos, overoles, polos, banderas publicitarias y los uniformes de decenas de clubes.",
    fullCatalog: { label: "Ver catálogo completo", href: "https://wa.me/c/573016168787" },
  },
  // Franja en movimiento entre el catálogo y "Por qué Thiago" (la segunda fila va en contorno rojo y al revés)
  franja: [
    "Moteros • Ciclismo • Fútbol • Taekwondo • Gimnasios • Empresas",
    "El diseño se hace contigo • Nombres y números para cada integrante",
  ],
  gallery: {
    eyebrow: "Trabajos",
    title: "Ya llevan su sello",
    images: [
      foto("dom-cabello-1", "Diseño de camiseta manga larga roja y negra para Dom Cabello"),
      foto("motociclista-gasolinera", "Motociclista con su camiseta de club junto a una moto roja"),
      foto("mochileros-buzo", "Buzo negro con capota amarilla de Mochileros por Colombia"),
      foto("susa-bikers", "Camiseta verde y negra de Susa Bikers"),
      foto("motociclistas-banca", "Dos motociclistas de las Gladiadoras con sus camisetas moradas"),
      foto("zonacar-polo", "Polo negro y blanco de Zonacar"),
      foto("gorra-pulsar", "Gorra bordada del Encuentro Nacional Pulsar 18, Bucaramanga 2024"),
      foto("camiseta-gimnasio-verde", "Cliente con su camiseta verde de gimnasio"),
      foto("lote-no-pain", "Lote de camisetas negras No pain no gain"),
      foto("lote-entrenadores", "Lote de camisetas para entrenadores y una carrera de 10K"),
      foto("motociclista-naranja", "Motociclista con camiseta morada sobre su moto"),
    ],
  },
  quote: {
    text: "Realizamos todo tipo de uniformes personalizados para clubes.",
    source: "Thiago Bikers Store, en su Instagram",
    aside: {
      text: "Cada trabajo nuevo lo publica en su Instagram: ya van más de 700 publicaciones.",
      cta: "Ver su Instagram",
      href: "https://www.instagram.com/thiago_bikers_store_oficial/",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos de tu club",
    text: "Escríbele a Thiago por WhatsApp con el nombre del club, los colores y cuántas prendas necesitas. Él te ayuda con el diseño.",
    // Respaldo si se quita el mosaico (la foto del letrero es de baja calidad: se ve borrosa en grande)
    image: foto("letrero-local", "Letrero 3D de Thiago Bikers Store en su local"),
    // Elegido por Carlos (18-10-2026): mosaico de 4 trabajos que no salen en otra parte de la página.
    // Alternativa: visual: "logo" (logo grande con enlace a Instagram). Cuando haya dirección, aquí va el mapa o la foto de la fachada.
    visual: [
      foto("dom-cabello-2", "Diseño de camiseta manga larga roja y negra para Dom Cabello"),
      foto("mochileros-buzo-naranja", "Diseño de buzo negro con capota naranja para Mochileros por Colombia"),
      foto("camiseta-gimnasio-negra", "Cliente con su camiseta negra y verde de gimnasio"),
      foto("gladiadoras-diseno", "Diseño de las camisetas moradas y turquesa de las Gladiadoras"),
    ],
  },
};
