export const NAV_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "problema", label: "Problema" },
  { id: "solucion", label: "Solución" },
  { id: "precios", label: "Precios" },
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
] as const;

export const FEATURES = [
  { icon: "📅", title: "Fecha, ubicación y horario", desc: "Ceremonia, banquete y timeline del día, siempre a mano." },
  { icon: "✓", title: "Confirmación RSVP", desc: "Menú, alergias y asistencia en un formulario sencillo." },
  { icon: "📍", title: "Mapa integrado", desc: "Llegada fácil a la iglesia, finca o restaurante." },
  { icon: "♥", title: "Historia de la pareja", desc: "Cómo os conocisteis, pedida y momentos especiales." },
  { icon: "📷", title: "Galería de fotos", desc: "Vuestras imágenes con un diseño que emociona." },
  { icon: "ℹ", title: "Info para invitados", desc: "Alojamiento, regalo, parking y detalles útiles." },
  { icon: "🔔", title: "Actualizaciones", desc: "Cambios de última hora visibles al instante." },
  {
    icon: "🔒",
    title: "Panel privado para los novios",
    desc: "Gestionáis invitados, confirmaciones y cambios desde un espacio solo vuestro.",
  },
] as const;

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
      "Galería premium",
      "Historia / timeline",
      "Dominio personalizado",
    ],
  },
] as const;

export const PORTFOLIO = [
  {
    couple: "Laura & Miguel",
    location: "Finca en Córdoba",
    desc: "Web romántica en tonos tierra con RSVP y galería de su preboda.",
    image: "/portfolio/laura-miguel.jpg",
  },
  {
    couple: "Elena & David",
    location: "Jardín en Sevilla",
    desc: "Diseño minimalista en blanco y verde oliva con mapa y timeline del día.",
    image: "/portfolio/elena-david.jpg",
  },
  {
    couple: "Sofía & Alejandro",
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
