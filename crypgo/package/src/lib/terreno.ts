/**
 * Fotos reales de trabajos de INSTEC, mejoradas con Codex (luz, nitidez, ruido;
 * sin cambios de contenido). Procedencia: docs/fotos-terreno.md.
 *
 * Cada foto tiene un número de figura fijo en todo el sitio y una etiqueta que
 * describe SOLO lo que se ve en la imagen (nunca el método que se esté
 * cotizando si la foto no lo muestra).
 */
export type Foto = {
  id: string
  fig: string
  /** Etiqueta corta en mono, ej. "UT · Phased array". */
  tag: string
  /** Lugar o pieza, ej. "Taller". */
  lugar: string
  /** Pie de foto en una frase. */
  pie: string
  /** Texto alternativo. */
  alt: string
  /** Orientación de la imagen original. */
  vertical?: boolean
}

const src = (id: string, size: 'full' | '960' = 'full') =>
  `/images/terreno/${id}${size === '960' ? '-960' : ''}.webp`

export const fotoSrc = src

export const FOTOS: Foto[] = [
  {
    id: 'ultrasonido-omniscan',
    fig: '01',
    tag: 'UT · Phased array',
    lugar: 'Taller',
    pie: 'Ultrasonido phased array con equipo OmniScan SX.',
    alt: 'Inspector sostiene un equipo de ultrasonido phased array OmniScan con la pantalla de barrido sectorial encendida, junto a una pieza de acero.',
  },
  {
    id: 'molino-inspeccion',
    fig: '02',
    tag: 'Inspección en planta',
    lugar: 'Planta',
    pie: 'Inspección en planta sobre un molino.',
    alt: 'Molino de gran tamaño dentro de una nave industrial, con plataforma de trabajo y un técnico con equipo de protección.',
  },
  {
    id: 'particulas-magneticas-yugo',
    fig: '03',
    tag: 'MT · Yugo',
    lugar: 'Taller',
    pie: 'Partículas magnéticas con yugo sobre un rodete.',
    alt: 'Manos aplicando un yugo de partículas magnéticas en la unión de los álabes de un rodete metálico.',
  },
  {
    id: 'inspeccion-terreno',
    fig: '04',
    tag: 'UT · Soldadura',
    lugar: 'Taller',
    pie: 'Ultrasonido sobre una unión soldada.',
    alt: 'Detector de ultrasonido SIUI junto a un cordón de soldadura sobre una placa de acero, con el palpador en la mano del inspector.',
  },
  {
    id: 'particulas-magneticas-turbina',
    fig: '05',
    tag: 'MT · Yugo · Álabes',
    lugar: 'Taller',
    pie: 'Partículas magnéticas con yugo sobre los álabes de un rodete.',
    alt: 'Yugo de partículas magnéticas apoyado entre álabes numerados de un rodete, sostenido con guantes.',
  },
  {
    id: 'ultrasonido-barra',
    fig: '06',
    tag: 'UT · Barra',
    lugar: 'Taller',
    pie: 'Ultrasonido sobre una barra de acero.',
    alt: 'Equipo de ultrasonido SIUI apoyado sobre una barra de acero de gran diámetro mientras el inspector posiciona el palpador en la cara frontal.',
  },
  {
    id: 'equipo-inspeccion',
    fig: '07',
    tag: 'Espesores · Recubrimiento',
    lugar: 'Terreno',
    pie: 'Medición de espesor de recubrimiento con Elcometer 300.',
    alt: 'Medidor de espesor de recubrimiento Elcometer 300 en la mano, con una lectura de 11.8 micrones en pantalla.',
  },
  {
    id: 'rodete-francis',
    fig: '08',
    tag: 'Rodete Francis',
    lugar: 'Taller',
    pie: 'Rodete Francis en taller.',
    alt: 'Rodete Francis de acero inoxidable sobre un soporte en un taller.',
  },
  {
    id: 'trabajo-terreno',
    fig: '09',
    tag: 'UT · Phased array · Álabe',
    lugar: 'Taller',
    pie: 'Ultrasonido phased array sobre un álabe numerado.',
    alt: 'Equipo OmniScan con barrido sectorial en pantalla, frente a un álabe de acero marcado con el número 21.',
  },
  {
    id: 'ultrasonido-eje',
    fig: '10',
    tag: 'UT · Eje',
    lugar: 'Taller',
    pie: 'Ultrasonido sobre un eje mecanizado.',
    alt: 'Detector de ultrasonido SIUI sostenido sobre un eje mecanizado mientras el inspector apoya el palpador.',
    vertical: true,
  },
  {
    id: 'ultrasonido-rodete',
    fig: '11',
    tag: 'UT · Fundición',
    lugar: 'Taller',
    pie: 'Ultrasonido con acoplante sobre una pieza fundida.',
    alt: 'Detector de ultrasonido sobre una pieza fundida con perforaciones; el inspector apoya el palpador junto a un envase de acoplante.',
  },
  {
    id: 'inspeccion-planta',
    fig: '12',
    tag: 'UT · Rodillo',
    lugar: 'Planta',
    pie: 'Ultrasonido phased array sobre un rodillo.',
    alt: 'Inspector con guante y chaqueta reflectante revisando un rodillo metálico con un equipo de ultrasonido de pantalla grande.',
  },
  {
    id: 'rodete-francis-2',
    fig: '13',
    tag: 'Rodete Francis',
    lugar: 'Taller',
    pie: 'Rodete Francis en taller, vista lateral.',
    alt: 'Rodete Francis metálico apoyado sobre durmientes de madera dentro de un taller.',
  },
  {
    id: 'tambor-taller',
    fig: '14',
    tag: 'Estructura · Tambor',
    lugar: 'Taller',
    pie: 'Tambor estructural en taller.',
    alt: 'Estructura cilíndrica de acero con rayos y anillos, montada sobre soportes en una nave industrial.',
  },
  {
    id: 'ejes-mecanizados',
    fig: '15',
    tag: 'Ejes mecanizados',
    lugar: 'Taller',
    pie: 'Ejes mecanizados en taller.',
    alt: 'Dos ejes mecanizados con bridas apoyados en un bastidor metálico azul.',
  },
  {
    id: 'particulas-magneticas-yugo-2',
    fig: '16',
    tag: 'MT · Yugo',
    lugar: 'Taller',
    pie: 'Partículas magnéticas con yugo en la unión álabe–cubo.',
    alt: 'Yugo de partículas magnéticas sobre la unión entre un álabe y el cubo perforado de un rodete.',
  },
]

export const foto = (id: string): Foto => {
  const f = FOTOS.find((x) => x.id === id)
  if (!f) throw new Error(`Foto desconocida: ${id}`)
  return f
}
