/**
 * TODO EL CONTENIDO EDITABLE DEL HOME VIVE ACÁ.
 * Cambiá textos, enlaces, fotos y proyectos sin tocar los componentes.
 */

/* ------------------------------ Datos generales ------------------------------ */

export const site = {
  name: "Evii Rost",
  nav: [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
};

/* ---------------------------------- Portada ---------------------------------- */

export const hero = {
  title: "Hola, soy Evii.",
  eyebrow: "Marketing digital · Community manager",
  hint: "Tocá cada servicio para descubrir qué incluye",
  cta: { label: "Ver proyectos", href: "#proyectos" },
  /** Sticker: PNG con fondo transparente en public/sticker/. */
  stickerSrc: "/sticker/eva.png",
  /**
   * Versión sonriente (opcional, misma proporción que el sticker original).
   * Alcanza con guardar el archivo en public/sticker/ con este nombre: se detecta solo.
   */
  smileFile: "eva-sonriendo.png",
  stickerAlt: "Evii sosteniendo una cámara analógica",
};

/* --------------------------------- Servicios --------------------------------- */

export const services = {
  eyebrow: "Servicios",
  title: "Todo lo que tu marca necesita para comunicar mejor",
  items: [
    { icon: "camera", title: "Creación de contenido", desc: "Fotos y videos con tu identidad, pensados para tu audiencia." },
    { icon: "calendar", title: "Gestión de redes", desc: "Planificación, publicación y seguimiento de tus redes sociales." },
    { icon: "megaphone", title: "Gestión de pauta", desc: "Anuncios pagos con objetivo claro y mejoras constantes." },
    { icon: "compass", title: "Estrategia", desc: "Objetivos, audiencias y un plan de contenido para ordenar el camino." },
    { icon: "layout", title: "Diseño de posteos", desc: "Piezas gráficas y carruseles coherentes con tu marca." },
    { icon: "film", title: "Edición de videos", desc: "Reels y videos cortos editados con ritmo y mensaje." },
  ],
};

/* --------------------------------- Proyectos --------------------------------- */

export type Piece = { src?: string; alt: string };
export type Project = {
  id: string;
  name: string;
  /** true = texto/piezas de ejemplo: se marcan visualmente como tales. */
  sample: boolean;
  description: string;
  services: string[];
  /** Sin `src` se muestra un espacio vacío listo para cargar la pieza. */
  gallery: Piece[];
};

const slots = (n: number, name: string): Piece[] =>
  Array.from({ length: n }, (_, i) => ({ alt: `${name} — pieza ${i + 1}` }));

export const projects = {
  eyebrow: "Proyectos",
  title: "Abrí una carpeta y mirá cómo trabajo",
  hint: "Tocá una carpeta para ver el proyecto",
  items: [
    {
      id: "wald",
      name: "Wald Gym Zone",
      sample: true,
      description:
        "[Ejemplo] Descripción del proyecto: contá acá el objetivo, el desafío y el resultado.",
      services: ["Gestión de redes", "Diseño de posteos", "Edición de videos"],
      gallery: slots(6, "Wald Gym Zone"),
    },
    {
      id: "roomy",
      name: "Roomy",
      sample: true,
      description:
        "[Ejemplo] Descripción del proyecto: contá acá el objetivo, el desafío y el resultado.",
      services: ["Estrategia", "Creación de contenido", "Gestión de pauta"],
      gallery: slots(6, "Roomy"),
    },
    {
      id: "magic15",
      name: "Inside Magic 15",
      sample: true,
      description:
        "[Ejemplo] Descripción del proyecto: contá acá el objetivo, el desafío y el resultado.",
      services: ["Gestión de redes", "Creación de contenido", "Edición de videos"],
      gallery: slots(6, "Inside Magic 15"),
    },
  ] satisfies Project[],
};

/* ---------------------------------- Sobre mí --------------------------------- */

export const about = {
  eyebrow: "Sobre mí",
  title: "Creatividad con estrategia",
  paragraphs: [
    "Trabajo ayudando a marcas y emprendedores a crecer en el mundo digital de forma estratégica.",
    "Me gusta entender qué necesita cada marca y cómo comunicarlo: que todo lo que se haga tenga un propósito.",
  ],
  photo:
    "https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev/Foto%20Perfil.jpg",
  photoAlt: "Evangelina Rost",
};

/* ---------------------------------- Contacto --------------------------------- */

export const contact = {
  eyebrow: "Contacto",
  title: "¿Trabajamos juntos?",
  subtitle: "Contame de tu marca y vemos cómo ayudarte.",
  /** Dejá `href` vacío ("") para que el enlace no se muestre. */
  email: { label: "tu@email.com", href: "" }, // ej: "mailto:tu@email.com"
  instagram: { label: "@evii.rost", href: "https://www.instagram.com/evii.rost/" },
  whatsapp: { label: "WhatsApp", href: "http://wa.me/5493585040171" },
};

/* ------------------------ Ventanas emergentes de servicios ------------------------ */
/** `contactLabel` es el nombre del servicio en el formulario de contacto (`services.items`). */
export const serviceDetails = {
  cta: "Consultar por este servicio",
  items: [
    { id: "redes", title: "Gestión de redes", contactLabel: "Gestión de redes", text: "Planificación de contenidos, calendario de publicaciones, programación y seguimiento de tus redes." },
    { id: "video", title: "Edición de video", contactLabel: "Edición de videos", text: "Selección de tomas, montaje, ritmo, música y subtítulos para darle forma a tus videos." },
    { id: "contenido", title: "Creación de contenido", contactLabel: "Creación de contenido", text: "Ideas, guiones, fotografía y grabación de videos pensados para tu marca." },
    { id: "pauta", title: "Gestión de pauta", contactLabel: "Gestión de pauta", text: "Planificación, configuración y seguimiento de campañas publicitarias según los objetivos de tu marca." },
    { id: "posteos", title: "Diseño de posteos", contactLabel: "Diseño de posteos", text: "Diseño de carruseles, historias y piezas gráficas alineadas con la identidad de tu marca." },
  ],
};
export type ServiceDetail = (typeof serviceDetails.items)[number];

/** Evento que conecta las ventanas de servicios con el formulario de contacto. */
export const SERVICE_EVENT = "servicio-seleccionado";
