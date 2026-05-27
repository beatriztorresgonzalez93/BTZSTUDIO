export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "problema", label: "Problema" },
  { id: "solucion", label: "Solución" },
  { id: "precios", label: "Paquetes" },
  { id: "portfolio", label: "Portfolio" },
  { id: "por-que", label: "Por qué" },
  { id: "proceso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
] as const;

export const PROBLEMS = [
  {
    icon: "✉",
    title: "Invitaciones que se pierden",
    desc: "PDFs, enlaces sueltos y mensajes que nadie encuentra cuando los necesita.",
  },
  {
    icon: "💬",
    title: "Las mismas preguntas una y otra vez",
    desc: "¿A qué hora es la ceremonia? ¿Dónde aparcar? ¿Código de vestimenta?",
  },
  {
    icon: "📱",
    title: "Todo repartido en WhatsApp",
    desc: "Información importante enterrada entre chats, audios y fotos sin orden.",
  },
  {
    icon: "🪑",
    title: "El plan de mesas en Excel",
    desc: "Crear mesas, cuadrar aforo y reubicar invitados cuando alguien confirma o cancela.",
  },
] as const;

export const FEATURES = [
  { icon: "📅", title: "Fecha, ubicación y horario", desc: "Ceremonia, banquete y timeline del día, siempre a mano." },
  { icon: "✓", title: "Confirmación RSVP", desc: "Menú, alergias y asistencia en un formulario sencillo." },
  {
    icon: "🪑",
    title: "Seating · plan de mesas",
    desc: "Creáis mesas y asignáis invitados según vayan confirmando, sin hojas sueltas.",
  },
  { icon: "📍", title: "Mapa integrado", desc: "Llegada fácil a la iglesia, finca o restaurante." },
  { icon: "♥", title: "Historia de la pareja", desc: "Cómo os conocisteis, pedida y momentos especiales." },
  { icon: "📷", title: "Galería de fotos", desc: "Vuestras imágenes con un diseño que emociona." },
  { icon: "ℹ", title: "Info para invitados", desc: "Alojamiento, regalo, parking y detalles útiles." },
  {
    icon: "🔒",
    title: "Panel privado para los novios",
    desc: "Invitados, RSVP, seating y cambios de última hora desde un espacio solo vuestro.",
  },
] as const;

export const SEATING_HIGHLIGHT = {
  eyebrow: "Nuestro diferencial",
  title: "Seating: mesas e invitados, siempre al día",
  subtitle:
    "Uno de los puntos fuertes de nuestras webs. Los novios crean el salón, van sentando a cada invitado y el plano se actualiza conforme llegan las confirmaciones.",
  points: [
    {
      title: "Creáis las mesas que necesitéis",
      desc: "Redondas, imperiales o personalizadas: definís nombre, capacidad y ubicación en el salón.",
    },
    {
      title: "Asignáis invitados al confirmar",
      desc: "Cuando alguien responde al RSVP, lo colocáis en su mesa en segundos, sin duplicar datos.",
    },
    {
      title: "Vista clara para el gran día",
      desc: "Sabéis quién falta por sentar, quién ha cancelado y cómo queda el reparto antes de imprimir el seating.",
    },
  ],
} as const;

export const PLANS = [
  {
    id: "basico",
    name: "Plan Básico",
    highlight: false,
    features: [
      "Página informativa completa",
      "Diseño personalizado",
      "100% responsive",
      "Enlace para compartir",
    ],
  },
  {
    id: "completo",
    name: "Plan Completo",
    highlight: false,
    features: [
      "Todo lo del Plan Básico",
      "RSVP con confirmación",
      "Gestión de invitados",
      "Seating: mesas y asignación de invitados",
      "Panel para los novios",
    ],
  },
  {
    id: "premium",
    name: "Plan Premium",
    highlight: true,
    features: [
      "Diseño totalmente a medida",
      "RSVP avanzado",
      "Seating avanzado con vista de salón",
      "Galería premium",
      "Historia / timeline",
      "Enlace único y QR para invitaciones",
      "Música colaborativa para invitados",
    ],
  },
] as const;

export const PORTFOLIO = [
  {
    couple: "Laura & Miguel",
    slug: "laura-miguel",
    location: "Finca en Córdoba",
    desc: "Web romántica en tonos tierra con RSVP y galería de su preboda.",
    image: "/portfolio/laura-miguel.jpg",
  },
  {
    couple: "Elena & David",
    slug: "elena-david",
    location: "Jardín en Sevilla",
    desc: "Diseño minimalista en blanco y verde oliva con mapa y timeline del día.",
    image: "/portfolio/elena-david.jpg",
  },
  {
    couple: "Sofía & Alejandro",
    slug: "sofia-alejandro",
    location: "Costa en Málaga",
    desc: "Estética mediterránea con historia de la pareja y confirmación de menú.",
    image: "/portfolio/sofia-alejandro-boda.jpg",
  },
] as const;

export const WHY_US = [
  { icon: "✦", title: "100% personalizado", desc: "Cada web refleja vuestra personalidad, no una plantilla genérica." },
  { icon: "⚡", title: "Entrega rápida", desc: "Plazos claros para tener vuestra web lista antes de enviar invitaciones." },
  { icon: "👋", title: "Fácil para invitados", desc: "Sin apps ni registros: un enlace y listo, en cualquier móvil." },
  { icon: "💕", title: "Experiencia emocional", desc: "Diseño que transmite ilusión desde el primer scroll." },
  { icon: "◇", title: "Moderno y elegante", desc: "Estética actual, limpia y digna de una boda de ensueño." },
] as const;

export const STEPS = [
  { num: "01", title: "Nos contáis vuestra boda", desc: "Estilo, fecha, necesidades y todo lo que queréis transmitir." },
  { num: "02", title: "Diseñamos vuestra web", desc: "Propuesta visual a medida y revisión hasta que os enamore." },
  { num: "03", title: "La compartís con invitados", desc: "Enlace o QR en la invitación. Vosotros gestionáis el resto." },
] as const;

export const EMAIL = "contacto@btzstudio.com";
