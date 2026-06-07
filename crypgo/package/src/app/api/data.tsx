export const footerlabels: { label: string; herf: string }[] = [
  { label: "Política de Calidad", herf: "#" },
  { label: "Certificaciones", herf: "#" },
  { label: "Normas y Estándares", herf: "#" },
  { label: "Casos de Éxito", herf: "#" },
  { label: "Blog Técnico", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Ultrasonido",
    short: "UT/SPWT",
    icon: "/images/icons/icon-ultrasonic.svg",
    background: "bg-blue-500/20",
    price: "ASME V",
    mark: "Certificado",
    width: 24,
    height: 24,
    padding: "px-3 py-3",
  },
  {
    title: "Partículas Magnéticas",
    short: "MT/CRACK",
    icon: "/images/icons/icon-magnetic-particle.svg",
    background: "bg-red-500/20",
    price: "ASTM E1444",
    mark: "Norma aplicada",
    width: 24,
    height: 24,
    padding: "px-3 py-3",
  },
  {
    title: "Líquidos Penetrantes",
    short: "PT/SURF",
    icon: "/images/icons/icon-penetrant.svg",
    background: "bg-green-500/20",
    price: "ASTM E165",
    mark: "Nivel III",
    width: 24,
    height: 24,
    padding: "px-3 py-3",
  },
  {
    title: "Radiografía",
    short: "RT/XRAY",
    icon: "/images/icons/icon-radiography.svg",
    background: "bg-purple-500/20",
    price: "ASTM E94",
    mark: "Clase A",
    width: 24,
    height: 24,
    padding: "px-3 py-3",
  },
  {
    title: "Corrientes Eddy",
    short: "ET/COND",
    icon: "/images/icons/icon-eddy-current.svg",
    background: "bg-orange-500/20",
    price: "ASTM E309",
    mark: "Certificado",
    width: 24,
    height: 24,
    padding: "px-3 py-3",
  },
  {
    title: "Inspección Visual",
    short: "VT/VIS",
    icon: "/images/icons/icon-visual-inspection.svg",
    background: "bg-indigo-500/20",
    price: "ASTM E165",
    mark: "Nivel II",
    width: 24,
    height: 24,
    padding: "px-3 py-3",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-equipment.svg",
    // Inspección de equipos y piezas en la industria metalmecánica
    title: "Inspección de equipos y piezas",
  },
  {
    image: "/images/portfolio/icon-ndt.svg",
    // Ensayos no destructivos realizados por nuestro equipo
    title: "Ensayos no destructivos",
  },
  {
    image: "/images/portfolio/icon-consulting.svg",
    // Asesorías y control de calidad a medida
    title: "Asesorías y control de calidad",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "Seguridad y Confiabilidad" },
  { title: "Certificación Internacional" },
  { title: "Costos Eficientes" },
  { title: "Resultados Precisos" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-technical-support.svg",
    // Soporte técnico durante todo el proceso
    title: "Soporte Técnico",
    text: "Nuestro equipo te acompaña en cada etapa del proyecto.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-experience.svg",
    // Experiencia consolidada en la industria
    title: "Experiencia",
    text: "Más de 30 años de trayectoria en inspecciones metalmecánicas.",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-training.svg",
    // Capacitación y transferencia de conocimiento
    title: "Capacitación",
    text: "Capacitamos a tu equipo en ensayos y normas de calidad.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-site-visit.svg",
    title: "1. Visita Previa",
    text: "Evaluación in-situ, análisis de necesidades y definición del alcance del trabajo",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-ndt-execution.svg",
    title: "2. Ejecución de Ensayos",
    text: "Aplicación de métodos NDT según normas ASTM/ASME por personal certificado",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-technical-report.svg",
    title: "3. Informe Técnico",
    text: "Elaboración de informe detallado con resultados, interpretación y recomendaciones",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-client-delivery.svg",
    title: "4. Seguimiento",
    text: "Entrega formal, explicación de resultados y soporte post-inspección",
    position: "md:bottom-0 md:right-0",
  },
];

// Datos de trabajos realizados
export const trabajosData: { 
  proyecto: string; 
  cliente: string; 
  ensayo: string; 
  año: number;
  descripcion: string;
}[] = [
  { 
    proyecto: "Inspección de Tanques de Almacenamiento", 
    cliente: "PDVSA", 
    ensayo: "UT + RT", 
    año: 2024,
    descripcion: "Evaluación integral de soldaduras y espesores"
  },
  { 
    proyecto: "Control de Calidad Estructuras", 
    cliente: "CVG FERROMINERA", 
    ensayo: "MT + PT", 
    año: 2024,
    descripcion: "Detección de grietas en componentes críticos"
  },
  { 
    proyecto: "Inspección de Tuberías", 
    cliente: "SIDOR", 
    ensayo: "UT + VT", 
    año: 2023,
    descripcion: "Medición de espesores y evaluación superficial"
  },
  { 
    proyecto: "Evaluación de Equipos Rotativos", 
    cliente: "PEQUIVEN", 
    ensayo: "ET + VT", 
    año: 2023,
    descripcion: "Análisis de integridad de ejes y carcasas"
  },
];

// Datos de clientes
export const clientesData: { 
  nombre: string; 
  sector: string; 
  años: string;
  servicios: string[];
  logo?: string;
}[] = [
  {
    nombre: "ANDRITZ",
    sector: "Ingeniería Industrial",
    años: "2018-2024",
    servicios: ["Ultrasonido", "Radiografía", "Inspección Visual"]
  },
  {
    nombre: "Revesol",
    sector: "Soluciones Industriales",
    años: "2019-2024",
    servicios: ["Partículas Magnéticas", "Líquidos Penetrantes"]
  },
  {
    nombre: "Maestranza Diesel (MD)",
    sector: "Metalmecánica",
    años: "2017-2024",
    servicios: ["Ultrasonido", "Corrientes Eddy"]
  },
  {
    nombre: "Prosoltec",
    sector: "Soluciones Técnicas",
    años: "2020-2024",
    servicios: ["Radiografía", "Inspección Visual"]
  },
  {
    nombre: "Sermin",
    sector: "Servicios Mineros",
    años: "2016-2024",
    servicios: ["Ultrasonido", "Partículas Magnéticas"]
  },
  {
    nombre: "Maicon Metal",
    sector: "Metalmecánica",
    años: "2019-2024",
    servicios: ["Líquidos Penetrantes", "Inspección Visual"]
  },
  {
    nombre: "Colbún",
    sector: "Energía",
    años: "2015-2024",
    servicios: ["Ultrasonido", "Radiografía"]
  },
  {
    nombre: "Minera Candelaria",
    sector: "Minería",
    años: "2018-2024",
    servicios: ["Corrientes Eddy", "Inspección Visual"]
  },
  {
    nombre: "Minera Las Cenizas",
    sector: "Minería",
    años: "2017-2024",
    servicios: ["Ultrasonido", "Partículas Magnéticas"]
  },
  {
    nombre: "Sandvik",
    sector: "Ingeniería Industrial",
    años: "2016-2024",
    servicios: ["Radiografía", "Líquidos Penetrantes"]
  },
  {
    nombre: "Ferroman",
    sector: "Metalmecánica",
    años: "2020-2024",
    servicios: ["Ultrasonido", "Inspección Visual"]
  },
  {
    nombre: "Agecomet",
    sector: "Servicios Industriales",
    años: "2019-2024",
    servicios: ["Partículas Magnéticas", "Corrientes Eddy"]
  },
  {
    nombre: "Bignotti Hnos.",
    sector: "Construcción Industrial",
    años: "2018-2024",
    servicios: ["Ultrasonido", "Radiografía"]
  },
  {
    nombre: "BUNSA",
    sector: "Servicios Técnicos",
    años: "2021-2024",
    servicios: ["Líquidos Penetrantes", "Inspección Visual"]
  }
];
