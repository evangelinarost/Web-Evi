/**
 * TODO EL CONTENIDO EDITABLE DEL SITIO VIVE ACÁ.
 * Cambiá textos, enlaces y datos sin tocar los componentes.
 *
 * MARCADORES: lo que dice [ENTRE CORCHETES] es un espacio reservado. Se reemplaza
 * cuando haya material real (logos, videos, casos, fotos y bio). No inventar datos.
 */

/* ------------------------------ Datos generales ------------------------------ */

export const site = {
  name: "Evii Rost",
  title: "Evii Rost | Marketing digital y community manager",
  description:
    "Evii Rost, community manager y creadora de contenido de Córdoba, Argentina. Estrategia, contenido y campañas para que tu marca conecte con las personas.",
  location: "Córdoba, Argentina",
};

export const contact = {
  whatsapp: { label: "Escribime por WhatsApp", href: "https://wa.me/5493585040171" },
  instagram: { label: "@evii.rost", href: "https://instagram.com/evii.rost" },
};

/** Menú: en el Home apunta a las secciones de la misma página; en el resto, a las páginas. */
export type NavItem = { label: string; href: string };
export const navHome: NavItem[] = [
  { label: "Contenido", href: "#contenido" },
  { label: "Casos de éxito", href: "#proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];
export const navPages: NavItem[] = [
  { label: "Contenido", href: "/contenido" },
  { label: "Casos de éxito", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];
export const navCase: NavItem[] = [
  { label: "← Casos de éxito", href: "/proyectos" },
  { label: "Contacto", href: "#contacto" },
];

/* ---------------------------------- Home: portada ---------------------------------- */

export const hero = {
  title: "Hola, soy Evii.",
  eyebrow: "Marketing digital",
  role: "Community manager",
  /** Textos cortos de las ventanas en celular. */
  mobileCards: {
    redes: "Calendario y seguimiento mes a mes.",
    video: "Reels con ritmo y subtítulos.",
    pauta: "Campañas en Meta Ads.",
  },
  hint: "Pasá el mouse (o tocá) cada ventana para ver qué incluye",
  cta: { label: "Ver mi trabajo", href: "#contenido" },
  /** Sticker: WebP con fondo transparente en public/sticker/. */
  stickerSrc: "/sticker/eva.webp",
  /** Versión sonriente (misma caja que el original). Si el archivo no existe, no se activa. */
  smileSrc: "/sticker/eva-sonriendo.webp",
  stickerAlt: "Evii sosteniendo una cámara analógica",
};

/** Cartelitos del collage de servicios. */
export const collageTips = {
  redes: { title: "Gestión de redes", text: "Calendario de contenido y seguimiento mes a mes de tu cuenta." },
  video: { title: "Edición de video", text: "Reels con ritmo, subtítulos y el formato justo para cada red." },
  contenido: { title: "Creación de contenido", text: "Ideas, guiones, fotos y videos pensados con estrategia." },
  pauta: { title: "Gestión de pauta", text: "Campañas en Meta Ads para convertir seguidores en clientes." },
  posteos: { title: "Diseño de posteos", text: "Posteos y carruseles con la identidad de tu marca." },
};

/* ------------------------------ Marcas y videos (marcadores) ------------------------------ */

/** Logos de las marcas, en el orden en que se muestran. `block`: el logo trae fondo de color y va como bloque redondeado. */
export const brandLogos = [
  { src: "/marcas/deviaje.webp", w: 318, h: 112, block: true },
  { src: "/marcas/temu.webp", w: 168, h: 112, block: true },
  { src: "/marcas/montana.webp", w: 116, h: 112, block: false },
  { src: "/marcas/vitaltronic.webp", w: 191, h: 112, block: false },
  { src: "/marcas/eterea.webp", w: 345, h: 100, block: false },
  { src: "/marcas/bando.webp", w: 342, h: 88, block: false },
  { src: "/marcas/mostaza.webp", w: 122, h: 112, block: false },
  { src: "/marcas/gulero.webp", w: 363, h: 112, block: true },
];

export const brands = {
  homeTitle: "Marcas con las que creé contenido",
  pageTitle: "Marcas con las que trabajé",
  homeCount: 6,
  pageCount: 8,
};

/** Variantes de color de las tarjetas de video (9:16). */
export type VideoTone = "A" | "B" | "C" | "D" | "E";
/** Calendario real de ejemplo del servicio 01. */
export const calendarExample = {
  src: "/servicios/calendario-residencia.jpg",
  alt: "Calendario de contenidos de la Residencia de Universitarias, del 19/10 al 14/11: 13 publicaciones, 6 reels, 7 carruseles y 5 ejes de contenido, organizados en cuatro semanas",
};

/** Portadas de carruseles y posteos de ejemplo del servicio 03 en /servicios. */
export const postExamples = [
  { src: "/servicios/post-viajera.jpg", alt: "Portada de carrusel de Inside Magic: «¿Qué tipo de viajera sos? Descubrí cuál sos en un viaje de 15», con jóvenes viajando en avión" },
  { src: "/servicios/post-garro.jpg", alt: "Portada de carrusel de Garro Estudiantil: «Nos preparamos para la temporada», sobre una playa con una montaña de fondo" },
  { src: "/servicios/post-outdoor.jpg", alt: "Portada de carrusel sobre ropa outdoor: «Aventura sin límites (ni excusas). ¿Qué es la ropa outdoor y por qué hace la diferencia?»" },
  { src: "/servicios/post-crear.jpg", alt: "Portada de carrusel: «Qué hacer cuando no podés crear», con una mujer sentada frente a una laptop en el mar" },
  { src: "/servicios/post-eterea.jpg", alt: "Portada de carrusel de Etérea: «Deslizá y decorá este espacio con nosotros», con un mueble a medida bajo una escalera" },
];

/** Fotos de la sesión con socios de WALD (servicio 06), dos collages. */
export const sessionExamples = [
  { src: "/servicios/sesion-1.jpg", ratio: "900 / 913", alt: "Collage de seis fotos de una sesión en WALD Gym Zone: mancuernas, una cinta de correr y un socio haciendo un ejercicio con una barra" },
  { src: "/servicios/sesion-2.jpg", ratio: "1100 / 749", alt: "Collage de fotos de una sesión en WALD Gym Zone: una socia en una máquina, lockers amarillos y socios haciendo dominadas" },
];

/** Captura del programa de edición (servicio 04): ya trae su propia ventana y el título "Edición de video". */
export const editExample = {
  src: "/servicios/edicion-video.webp",
  alt: "Captura de un programa de edición de video: archivos multimedia, reproductor y línea de tiempo con subtítulos, transiciones y audio",
};

/** Captura del administrador de anuncios (servicio 05): ya trae su ventana y su título; los datos van difuminados. */
export const adsExample = {
  src: "/servicios/campanias-meta.webp",
  alt: "Captura del administrador de anuncios de Meta: lista de anuncios con sus resultados, presupuesto e importe gastado",
};

/** Capturas de ejemplo del servicio 02 (Contenido y guiones) en /servicios. */
export const contentExamples = [
  { src: "/servicios/ejemplo-wald.jpg", ratio: "720 / 1352", alt: "Captura de un video de WALD Gym Zone: una persona sonriendo a cámara con un mate" },
  { src: "/servicios/ejemplo-disney.jpg", ratio: "720 / 1340", alt: "Captura de un video de un grupo de estudiantes en Disney, con el texto «Esto es una señal de que los sueños se cumplen»" },
  { src: "/servicios/ejemplo-roomy.jpg", ratio: "720 / 1236", alt: "Captura de un video de Roomy Residencias: una chica hablando a cámara sobre el precio del alquiler" },
];

export const videos = {
  home: ["A", "E", "D", "A"] as VideoTone[],
  page: ["A", "B", "C", "A", "D", "A", "B", "C"] as VideoTone[],
};

export const contentSection = {
  title: "Creación de contenido para marcas",
  subtitle: "Contenido UGC, lifestyle y variados",
  allLink: "Ver todos los videos →",
  cta: "¿Querés contenido para tu marca? Escribime",
};

/* ------------------------------------ Proyectos ------------------------------------ */

export const projects = {
  title: "Casos de éxito",
  allLink: "Ver todos →",
  wald: {
    href: "/casos/wald",
    name: "WALD Gym Zone",
    meta: "Gimnasio · Instagram",
    stat: "978 mil",
    imageAlt: "Foto de una persona entrenando con mancuernas, en tonos verdes y cálidos",
    image: "/casos/wald-portada.jpg",
    logo: "/casos/wald-logo.png",
    logoAlt: "Logo de WALD Gym Zone",
  },
  insideMagic: {
    href: "/casos/inside-magic",
    name: "Inside Magic",
    meta: "Viaje a Disney · Cobertura en vivo",
    stat: "1,1 M",
    imageSrc: "/casos/inside-magic-portada.jpg",
    imageAlt: "Dos presentadores de Inside Magic con micrófonos y remeras rojas, frente al Árbol de la Vida en Disney",
  },
};

/* ------------------------------------- Sobre mí ------------------------------------- */

export const aboutHome = {
  eyebrow: "Sobre mí",
  title: "Contenido con estrategia y personalidad.",
};

export const aboutPage = {
  eyebrow: "Sobre mí",
  title: "Hola, soy Evii.",
  bio: "Soy community manager y creadora de contenido. Me gusta conocer de cerca cada marca, encontrar qué la hace especial y pensar cómo contarlo. Combino estrategia, creatividad y trabajo en equipo para transformar ideas en contenido con identidad.",
  /* Collage de ventanas de /sobre-mi. `pos`: punto de la foto que queda centrado al recortar. */
  collage: [
    { title: "Grabando", src: "/sobre-mi/grabando.jpg", pos: "50% 50%", alt: "Evii riéndose mientras mira su celular, en un gimnasio" },
    { title: "De viaje", src: "/sobre-mi/viaje.jpg", pos: "50% 45%", alt: "Evii con un sombrero cónico y un micrófono de Inside Magic, frente a un arco decorado en Disney" },
    { title: "Editando", src: "/sobre-mi/editando.jpg", pos: "55% 40%", alt: "Evii sonriendo con su celular en la mano, dentro de un gimnasio" },
    { title: "En equipo", src: "/sobre-mi/equipo.jpg", pos: "50% 35%", alt: "Evii con una remera de Inside Magic y un sombrero con orejas de Mickey, en un puesto de Disney" },
    { title: "Tu estilo", src: "/sobre-mi/estilo.jpg", pos: "50% 38%", alt: "Evii riendo, apoyada en un mural rojo y blanco" },
  ],
  /* Texto largo de la página /sobre-mi (el Home usa la bio corta de arriba). */
  more: {
    title: "Un poco más de mí",
    intro: [
      "Soy Evii, community manager, social media y creadora de contenido. Vivo en Córdoba y estudio Marketing Digital. En mi trabajo conviven la planificación, las ideas y la cámara: disfruto tanto de pensar qué comunicar, como de salir a grabarlo.",
      "Trabajé con marcas de turismo, bienestar y servicios, adaptándome a públicos y formas de comunicar muy diferentes. También soy coordinadora de viajes, una experiencia que me permite combinar la creación de contenido con lo que pasa en el momento: registrar, editar y compartir historias mientras las estoy viviendo.",
    ],
    howTitle: "Así me gusta trabajar:",
    how: [
      "Me involucro en cada proyecto, escucho lo que necesita la marca y organizo un plan para llevarlo a la práctica. Desarrollo las ideas, creo contenido y hago seguimiento de los resultados.",
      "Para determinados proyectos cuento con equipo de profesionales, como diseñadores, filmmakers y fotógrafos.",
    ],
  },
  pills: ["Córdoba, Argentina", "Estrategia + contenido", "Hago todo, de punta a punta"],
  photoSrc: "/sobre-mi/evii-disney.jpg",
  photoAlt: "Evii Rost sonriendo, con orejas de Minnie y anteojos de sol, frente al castillo de Disney",
};

/* ------------------------------- Cómo trabajar conmigo (Home) ------------------------------- */
/* Sin precios ni otras cantidades: el pack se arma a medida y el precio se habla con cada cliente. */

export const howToWork = {
  eyebrow: "Cómo trabajar conmigo",
  title: "Elegí cómo trabajar conmigo.",
  text: "Estoy disponible para proyectos únicos y para la gestión completa de tus redes. Y si solo necesitás una parte, también podés contratar servicios por separado.",
  cards: [
    {
      window: "Servicio completo",
      title: "Gestión de redes, de punta a punta",
      text: "Me ocupo de tu cuenta todos los meses, con un plan y seguimiento.",
      items: [
        "Estrategia y calendario de contenido",
        "Guiones, grabación y edición",
        "Publicación y comunidad",
        "Medición mensual de resultados",
      ],
      cta: "Consultar",
      href: "https://wa.me/5493585040171?text=Hola%20Evii%2C%20quiero%20consultar%20por%20la%20gesti%C3%B3n%20completa%20de%20mis%20redes",
      featured: false,
    },
    {
      window: "Auditoría + Contenido",
      badge: "Nuevo",
      title: "Auditoría de marca + pack de contenido",
      text: "Para emprendedores y negocios que quieren mover sus redes sin una gestión completa.",
      items: [
        "Revisión de tus estadísticas: qué funciona y qué ajustar",
        "Pack a medida: desde 2 videos y 1 carrusel",
        "Pago único, sin compromiso mensual",
      ],
      cta: "Quiero mi auditoría",
      href: "https://wa.me/5493585040171?text=Hola%20Evii%2C%20quiero%20la%20auditor%C3%ADa%20de%20marca%20con%20el%20pack%20de%20contenido",
      featured: true,
    },
    {
      window: "A medida",
      title: "Servicios sueltos y proyectos únicos",
      text: "Contratás solo lo que necesitás, cuando lo necesitás.",
      items: [
        "Guiones y contenido para Reels",
        "Posteos y carruseles",
        "Edición de video",
        "Fotos y UGC",
        "Campañas en Meta Ads",
      ],
      cta: "Armemos tu proyecto",
      href: "https://wa.me/5493585040171?text=Hola%20Evii%2C%20quiero%20contratar%20un%20servicio%20o%20proyecto%20puntual",
      featured: false,
    },
  ],
  closing: "¿No sabés cuál te conviene? Contame de tu negocio y lo vemos juntas.",
};

/* ------------------------------------- Contacto ------------------------------------- */

export const contactSection = {
  title: "Hablemos.",
  footer: "© Evii Rost · Córdoba, Argentina",
};

/* ------------------------------------- Servicios ------------------------------------- */

export type ServiceItem = { n: string; title: string; text: string; example: string; more?: string; tags?: string[]; cta?: { label: string; href: string } };

export const servicesPage = {
  title: "Qué hago",
  cta: "Contame qué necesitás",
  items: [
    { n: "01", title: "Estrategia y gestión de redes", text: "",
      example: "Ejemplo: calendario de la Residencia de Universitarias",
      more: "Conozco tu marca, definimos objetivos y armamos un plan de contenido pensado para tu público. Me encargo de organizar y gestionar tus redes, analizar los resultados y ajustar la estrategia mes a mes.",
      tags: ["Estrategia", "Calendario de contenido", "Publicación", "Análisis de métricas"],
    },
    { n: "02", title: "Contenido y guiones", text: "", example: "Ejemplos: WALD, Disney y Roomy",
      more: "Transformo lo que tu marca quiere comunicar en ideas y guiones para redes. Pienso el gancho, el mensaje y cómo contarlo para captar la atención, conectar con tu público y mostrar tus productos o servicios.",
      tags: ["Ideas creativas", "Guiones para reels", "Storytelling", "Textos para publicaciones"],
    },
    { n: "03", title: "Posteos y carruseles", text: "",
      example: "Ejemplos: carruseles y posteos de distintas marcas",
      more: "Desarrollo las ideas y los textos, y trabajo en equipo con una diseñadora gráfica para darles forma. Creamos piezas que reflejan la identidad de tu marca y comunican con claridad, listas para publicar.",
      tags: ["Ideas", "Textos", "Diseño gráfico", "Identidad visual"],
    },
    { n: "04", title: "Edición de video", text: "",
      example: "Ejemplo: Reels de WALD",
      more: "Transformo el material grabado en videos con ritmo y una historia que contar. Trabajo los cortes, el audio y los subtítulos, adaptando cada pieza al estilo de tu marca y al formato de cada red.",
      tags: ["Reels", "Subtítulos", "Música y sonido", "Transiciones"],
      cta: { label: "Ver videos ↗", href: "/contenido#videos" },
    },
    { n: "05", title: "Campañas en Meta Ads", text: "",
      example: "Ejemplo: WALD, desde el 26/10",
      more: "Creo y gestiono anuncios en Instagram y Facebook para dar a conocer tu marca y generar consultas. Defino el público, preparo las piezas y hago seguimiento de los resultados para ajustar las campañas según tus objetivos.",
      tags: ["Segmentación", "Anuncios", "Seguimiento", "Optimización"],
    },
    { n: "06", title: "Fotos y UGC", text: "",
      example: "Ejemplo: sesión con socios de WALD",
      more: "Organizo sesiones de fotos profesionales para tu marca, desde la idea y las referencias hasta la coordinación con el fotógrafo. Planifico cada producción para que las imágenes reflejen tu identidad y acompañen tu contenido.",
      tags: ["Planificación", "Referencias visuales", "Coordinación de producción"],
    },
  ] as ServiceItem[],
};

/* ----------------------------------- Caso WALD ----------------------------------- */
/**
 * PENDIENTE ANTES DE PUBLICAR: el nombre de WALD, los números y la cita de Leo necesitan el OK de Leo.
 * Mientras tanto la página está marcada como NO INDEXABLE (ver app/casos/wald/page.tsx).
 * Los números salen de Instagram Insights (ventanas de 30 días): no cambiarlos.
 */
export const wald = {
  eyebrow: "Caso real · Instagram",
  title: "WALD Gym Zone",
  subtitle: "Un gato con remera llevó a un gimnasio a casi 1 millón de reproducciones.",
  pills: ["1 millón de reproducciones", "+1.340 seguidores nuevos"],
  reel: { src: "/casos/reel-gato-wald.jpg", alt: "Reel del gato con la remera de WALD", label: "CAPTURA DEL REEL" },
  start: {
    title: "Una cuenta frenada",
    stats: [
      { value: "2.628", label: "seguidores" },
      { value: "24 mil", label: "reproducciones por mes" },
      { value: "338", label: "interacciones por mes" },
    ],
  },
  stage1: {
    tag: "Etapa 1 · Septiembre",
    title: "Reactivar a quienes ya estaban",
    value: "+275%",
    text: "interacciones: de 338 a 1.268",
    windowTitle: "Carruseles de la comunidad",
    shot: { src: "/casos/post-septiembre.jpg", alt: "Publicación de WALD del 26 de septiembre: una socia entrenando con mancuernas, con las estadísticas a la vista", label: "CAPTURA DE LA PUBLICACIÓN" },
  },
  stage2: {
    tag: "Etapa 2 · Octubre",
    title: "Llegar a gente nueva",
    value: "978 mil",
    text: "reproducciones en 30 días. De los memes salió el gato con la remera de WALD.",
    story: "Al ver lo bien que funcionaban los memes de gatitos, nació la idea de personalizarlos y hacerlos reales: así creamos el personaje, el gato con la remera de WALD.",
    note: "La captura del Reel es de cuando tenía 941 mil visualizaciones. Hoy ya llegó a 1 millón.",
    shots: [
      { src: "/casos/carrusel-reglas.jpg", ratio: "846 / 1600", alt: "Carrusel de WALD «Las reglas no escritas del gimnasio», del 13 de octubre, con 72,3 mil visualizaciones" },
      { src: "/casos/post-gato-couch.jpg", ratio: "828 / 1600", alt: "Reel del gato con la remera de WALD, del 23 de octubre, con 941 mil visualizaciones" },
      { src: "/casos/carrusel-gatitos.jpg", ratio: "832 / 1600", alt: "Carrusel de WALD «Decime a qué hora entrenás y te digo quién sos», del 30 de septiembre, con 10,6 mil visualizaciones" },
    ],
  },
  stage3: {
    tag: "Etapa 3 · Noviembre · En curso",
    title: "Convertir seguidores en socios",
    cards: ["Sesión de fotos con socios reales", "Campañas en Meta Ads", "Medir inscripciones reales"],
  },
  quote: {
    text: "“Se viene haciendo un laburazo. Es justo lo que tenía pensado cuando empezamos.”",
    author: "Leo, dueño de WALD Gym Zone",
  },
  closing: {
    title: "¿Tu marca necesita llegar a más gente?",
    footer: "Datos de Instagram Insights, ventanas de 30 días. © Evii Rost · Córdoba, Argentina",
  },
};

/* ------------------------- Caso Inside Magic (/casos/inside-magic) ------------------------- */
/* Números del reporte de Instagram Insights de @insidemagic15 (30 días, 28/6 al 27/7 de 2026).
   Línea de base, días, destinos y comparaciones: reporte de resultados del viaje.
   Reels, publicaciones e historias: verificados por Evii en la cuenta. Página noindex. */

export const insideMagic = {
  eyebrow: "Caso real · Cobertura en vivo",
  title: "Inside Magic",
  subtitle: "19 días contando un viaje a Disney en tiempo real llevaron la cuenta a más de 1 millón de visualizaciones.",
  pills: ["1,1 millones de visualizaciones", "+401 seguidores nuevos"],
  summary: {
    src: "/casos/insights-resumen.jpg",
    heroAlt: "Estadísticas de Instagram de Inside Magic: 1.120.812 visualizaciones en 30 días",
    formatAlt: "Visualizaciones por tipo de contenido: historias 552 mil, reels 342 mil, publicaciones 117 mil",
  },
  interactions: {
    src: "/casos/insights-interacciones.jpg",
    alt: "Interacciones por tipo de contenido: reels 9,5 mil, historias 6,8 mil, publicaciones 3,5 mil",
  },
  start: {
    eyebrow: "Antes del viaje",
    title: "Una cuenta chica con ganas de crecer",
    stats: [
      { value: "54 mil", label: "visualizaciones por mes" },
      { value: "23 mil", label: "cuentas alcanzadas" },
      { value: "+9", label: "seguidores nuevos en el mes" },
    ],
  },
  produced: {
    eyebrow: "Lo que se produjo",
    title: "El viaje, minuto a minuto",
    text: "Cada día del viaje se contó en el momento en que pasaba: grabar, editar y publicar en vivo durante 19 días y 4 destinos.",
    stats: [
      { value: "19", label: "días de cobertura" },
      { value: "16", label: "reels" },
      { value: "7", label: "publicaciones" },
      { value: "376", label: "historias" },
    ],
    howLabel: "Cómo se hizo",
    how: ["Colaboración con un influencer", "Pauta en algunos reels"],
    places: "Disney · Universal · Miami · Nueva York",
  },
  stage1: {
    tag: "Etapa 1 · Cobertura en vivo",
    title: "Las historias, todos los días",
    value: "552 mil",
    text: "visualizaciones solo en historias. La cobertura en vivo del viaje armó una audiencia que volvía cada día a ver qué pasaba.",
    days: "19 días",
    windowTitle: "Visualizaciones por formato",
  },
  stage2: {
    tag: "Etapa 2 · Reels",
    title: "Los que más enganchan",
    value: "9,5 mil",
    text: "interacciones en reels, el formato que más generó por pieza. El contenido emocional y los vlogs del viaje fueron los que mejor funcionaron.",
    windowTitle: "Interacciones por formato",
  },
  impact: {
    eyebrow: "Antes vs después",
    title: "El impacto en números",
    cards: [
      { value: "20x", title: "Visualizaciones", text: "de 54 mil a 1,1 millones" },
      { value: "44x", title: "Seguidores nuevos", text: "de +9 a +401 en el mes" },
      { value: "+5x", title: "Cuentas alcanzadas", text: "de 23 mil a 128 mil" },
      { value: "9.119", title: "Visitas al perfil", text: "gente evaluando el viaje" },
    ],
    noteLead: "Cómo leer estos números:",
    note: "parte del alcance vino de una colaboración con un influencer y de pauta en algunos reels. La base orgánica de la cuenta se mide en el período siguiente, sin esos factores.",
  },
  closing: {
    title: "¿Tu marca necesita contar su historia en vivo?",
    footer: "@insidemagic15 · Garro Travels · Datos de Instagram Insights, ventana de 30 días (28/6 al 27/7 de 2026). © Evii Rost · Córdoba, Argentina",
  },
};

/** Imágenes de servicios.html que reutilizan las capturas del caso WALD. */
export const caseShots = {
  reel: wald.reel,
  reglas: wald.stage2.shots[0],
  gatitos: { src: "/casos/carrusel-gatitos.jpg", alt: "Carrusel de WALD «Decime a qué hora entrenás y te digo quién sos»", label: "CARRUSEL" },
};
