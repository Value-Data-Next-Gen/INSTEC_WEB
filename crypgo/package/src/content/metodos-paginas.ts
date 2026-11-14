/**
 * Una página de servicio por método (/servicios/<slug>/).
 *
 * Regla de verdad (PRODUCT.md): aquí solo van hechos generales del método y lo
 * que ya está confirmado de INSTEC (terreno y taller, ISO 9712, fotos reales).
 * Nada de modelos de equipo, niveles, plazos, precios ni clientes nuevos.
 * Las normas se citan como "referencias habituales" del método, no como
 * acreditación de INSTEC: la norma la define el código del proyecto.
 *
 * Las fotos salen de lib/terreno.ts. Si existe una foto del método, se usa;
 * si no, una foto general cuya etiqueta no muestre otro método.
 */
export type Norma = { codigo: string; cubre: string }

export type PaginaMetodo = {
  /** Código en lib/metodos.ts (UT, RT, MT, PT, VT, ET, Espesores). */
  code: string
  slug: string
  /** <title> sin sufijo (el layout agrega "| INSTEC"). */
  seoTitle: string
  descripcion: string
  /** Nombre del servicio para JSON-LD y migas. */
  servicio: string
  h1: string
  h1em: string
  lead: string
  foto: string
  /** Ejemplo para el campo PIEZA de la ficha. */
  piezaEj: string
  h2: string
  h2em: string
  conviene: string
  limites: string
  usos: string
  normas: Norma[]
  /** Notas generales si no hay notas del método. */
  notasExtra?: string[]
}

export const PAGINAS_METODO: PaginaMetodo[] = [
  {
    code: 'UT',
    slug: 'ultrasonido',
    seoTitle: 'Ultrasonido industrial y phased array en Chile',
    descripcion:
      'Ensayo por ultrasonido convencional y phased array en soldaduras, ejes, rodillos y piezas fundidas, en terreno o en taller. Inspectores certificados ISO 9712.',
    servicio: 'Ultrasonido industrial (UT)',
    h1: 'Ultrasonido industrial',
    h1em: 'en soldaduras, ejes y piezas fundidas.',
    lead: 'Convencional y phased array, en terreno o en taller. El procedimiento y el criterio de aceptación se acuerdan antes de llegar.',
    foto: 'ultrasonido-omniscan',
    piezaEj: 'Soldadura, eje, rodillo, fundición…',
    h2: 'Ve lo que es plano,',
    h2em: 'si el haz lo encuentra de frente.',
    conviene:
      'Cuando lo que preocupa es una grieta o una falta de fusión dentro de la soldadura o de la pieza, y cuando no se puede aislar el área como exige la radiografía. También para medir el espesor que queda.',
    limites:
      'Necesita acceso para apoyar el palpador y una superficie que acople. La orientación del defecto respecto del haz cambia lo que se ve.',
    usos: 'Uniones soldadas, ejes, barras, rodillos, álabes y piezas fundidas.',
    normas: [
      { codigo: 'ASME V, Artículo 4', cubre: 'Ultrasonido de soldaduras.' },
      { codigo: 'ASME V, Artículo 5', cubre: 'Ultrasonido de materiales.' },
      { codigo: 'ASTM E164', cubre: 'Ultrasonido de contacto en uniones soldadas.' },
      { codigo: 'ISO 17640', cubre: 'Ultrasonido de soldaduras: técnicas y niveles de ensayo.' },
      { codigo: 'ISO 11666', cubre: 'Niveles de aceptación para ultrasonido de soldaduras.' },
      { codigo: 'AWS D1.1', cubre: 'Soldadura estructural en acero, con criterios propios para ultrasonido.' },
    ],
  },
  {
    code: 'RT',
    slug: 'radiografia-industrial',
    seoTitle: 'Radiografía industrial de soldaduras en Chile',
    descripcion:
      'Radiografía industrial de uniones soldadas y piezas fundidas: porosidad, escoria e inclusiones, con el criterio de aceptación acordado antes del ensayo.',
    servicio: 'Radiografía industrial (RT)',
    h1: 'Radiografía industrial',
    h1em: 'de uniones soldadas.',
    lead: 'Deja una imagen de la soldadura que se puede revisar después. El área se aísla durante la exposición, y el procedimiento y el criterio se acuerdan antes.',
    foto: 'tambor-taller',
    piezaEj: 'Cañería, estanque, unión soldada…',
    h2: 'Ve lo que tiene volumen.',
    h2em: 'Lo plano se le puede escapar.',
    conviene:
      'Cuando el código pide radiografía, cuando lo que importa es la porosidad o la escoria, o cuando se necesita una imagen que otra persona pueda revisar después.',
    limites:
      'Necesita acceso a los dos lados de la pieza: la fuente por uno y la película o el detector por el otro. Mientras dura la exposición, nadie trabaja cerca.',
    usos: 'Uniones soldadas en cañerías, estanques y estructuras; piezas fundidas.',
    normas: [
      { codigo: 'ASME V, Artículo 2', cubre: 'Radiografía.' },
      { codigo: 'ASTM E94', cubre: 'Guía de radiografía industrial con película.' },
      { codigo: 'ISO 17636-1', cubre: 'Radiografía de soldaduras con película.' },
      { codigo: 'ASME B31.3', cubre: 'Cañerías de proceso: cuánto se radiografía y con qué criterio.' },
      { codigo: 'ASME Sección VIII', cubre: 'Recipientes a presión: alcance de la radiografía y criterios de aceptación.' },
    ],
  },
  {
    code: 'MT',
    slug: 'particulas-magneticas',
    seoTitle: 'Ensayo de partículas magnéticas en Chile',
    descripcion:
      'Ensayo de partículas magnéticas con yugo en soldaduras, rodetes y piezas de acero, en terreno o en taller. Grietas superficiales y cercanas a la superficie.',
    servicio: 'Ensayo de partículas magnéticas (MT)',
    h1: 'Ensayo de partículas magnéticas',
    h1em: 'en aceros, soldaduras y rodetes.',
    lead: 'Muestra grietas superficiales y cercanas a la superficie en materiales ferromagnéticos. Con yugo, en terreno o en taller.',
    foto: 'particulas-magneticas-yugo',
    piezaEj: 'Rodete, álabe, soldadura, eje…',
    h2: 'La grieta se marca en la pieza,',
    h2em: 'si el acero se magnetiza.',
    conviene:
      'Para buscar grietas en soldaduras y piezas de acero: uniones de álabes, ejes, estructuras. Es rápido y la indicación se ve en el momento.',
    limites:
      'Hay que magnetizar en dos direcciones para no perder las grietas que quedan paralelas al campo.',
    usos: 'Rodetes y álabes, soldaduras de acero, ejes y estructuras.',
    normas: [
      { codigo: 'ASME V, Artículo 7', cubre: 'Partículas magnéticas.' },
      { codigo: 'ASTM E709', cubre: 'Guía de ensayo por partículas magnéticas.' },
      { codigo: 'ISO 17638', cubre: 'Partículas magnéticas en soldaduras.' },
      { codigo: 'ISO 23278', cubre: 'Niveles de aceptación de partículas magnéticas en soldaduras.' },
    ],
  },
  {
    code: 'PT',
    slug: 'tintas-penetrantes',
    seoTitle: 'Ensayo de tintas penetrantes en Chile',
    descripcion:
      'Tintas penetrantes para grietas y poros abiertos a la superficie en inoxidables, aluminio, fundiciones y soldaduras. En terreno o en taller.',
    servicio: 'Ensayo de tintas penetrantes (PT)',
    h1: 'Ensayo de tintas penetrantes',
    h1em: 'en cualquier material no poroso.',
    lead: 'Muestra grietas y poros abiertos a la superficie en inoxidables, aluminio, fundiciones y soldaduras. Sirve donde las partículas magnéticas no.',
    foto: 'rodete-francis-2',
    piezaEj: 'Soldadura de inoxidable, fundición…',
    h2: 'Muestra lo que llega a la superficie,',
    h2em: 'si cada paso se respeta.',
    conviene:
      'En materiales que no se magnetizan, como los inoxidables austeníticos y el aluminio, o cuando hay que revisar una superficie sin equipos pesados.',
    limites:
      'Los tiempos de penetración y de revelado se cumplen completos: si se apuran, la indicación no aparece.',
    usos: 'Soldaduras de inoxidable y aluminio, piezas fundidas y superficies mecanizadas.',
    normas: [
      { codigo: 'ASME V, Artículo 6', cubre: 'Líquidos penetrantes.' },
      { codigo: 'ASTM E165', cubre: 'Tintas penetrantes para la industria general.' },
      { codigo: 'ISO 3452-1', cubre: 'Tintas penetrantes: principios generales.' },
      { codigo: 'ISO 23277', cubre: 'Niveles de aceptación de tintas penetrantes en soldaduras.' },
    ],
  },
  {
    code: 'VT',
    slug: 'inspeccion-visual',
    seoTitle: 'Inspección visual de soldaduras en Chile',
    descripcion:
      'Inspección visual de soldaduras: socavación, perfil del cordón y porosidad superficial. Es la primera inspección y define dónde aplicar los otros ensayos.',
    servicio: 'Inspección visual de soldaduras (VT)',
    h1: 'Inspección visual de soldaduras',
    h1em: 'antes de cualquier otro ensayo.',
    lead: 'Revisa el perfil del cordón, la socavación y la porosidad superficial, y define dónde aplicar los otros ensayos.',
    foto: 'molino-inspeccion',
    piezaEj: 'Soldaduras de estructura, estanque…',
    h2: 'Lo primero que se mira',
    h2em: 'define dónde se ensaya después.',
    conviene:
      'Siempre, como primer paso. Y como inspección principal cuando el código la acepta para ese tipo de unión.',
    limites:
      'No ve lo que está bajo la superficie. Necesita buena luz, acceso y una superficie limpia.',
    usos: 'Soldaduras de estructuras, estanques, cañerías y equipos, antes y después de otros ensayos.',
    normas: [
      { codigo: 'ASME V, Artículo 9', cubre: 'Inspección visual.' },
      { codigo: 'ISO 17637', cubre: 'Inspección visual de uniones soldadas por fusión.' },
      { codigo: 'ISO 5817', cubre: 'Niveles de calidad para imperfecciones en soldadura.' },
      { codigo: 'AWS D1.1', cubre: 'Soldadura estructural en acero, con criterios de aceptación visual.' },
    ],
  },
  {
    code: 'ET',
    slug: 'corrientes-inducidas',
    seoTitle: 'Corrientes inducidas (Eddy) en Chile',
    descripcion:
      'Ensayo por corrientes inducidas o de Eddy para discontinuidades superficiales en materiales conductores, también a través de recubrimientos delgados.',
    servicio: 'Ensayo por corrientes inducidas (ET)',
    h1: 'Corrientes inducidas (Eddy)',
    h1em: 'en superficies de materiales conductores.',
    lead: 'Detecta discontinuidades superficiales y cercanas a la superficie en metales, sin líquidos y también a través de recubrimientos delgados.',
    foto: 'ejes-mecanizados',
    piezaEj: 'Eje, superficie pintada, tubo…',
    h2: 'Revisa la superficie',
    h2em: 'sin sacar el recubrimiento.',
    conviene:
      'Cuando la pieza tiene pintura o un recubrimiento delgado que no conviene retirar, o para revisar rápido superficies de metal.',
    limites:
      'Solo sirve en materiales conductores, y la lectura se compara con patrones de calibración del mismo material.',
    usos: 'Superficies mecanizadas, soldaduras con recubrimiento delgado y tubos.',
    normas: [
      { codigo: 'ASME V, Artículo 8', cubre: 'Corrientes inducidas en productos tubulares.' },
      { codigo: 'ISO 15549', cubre: 'Corrientes inducidas: principios generales.' },
      { codigo: 'ISO 17643', cubre: 'Corrientes inducidas en soldaduras.' },
    ],
    notasExtra: ['que-se-acuerda-antes-del-ensayo', 'iso-9712-niveles-de-certificacion'],
  },
  {
    code: 'Espesores',
    slug: 'medicion-de-espesores',
    seoTitle: 'Medición de espesores y recubrimientos en Chile',
    descripcion:
      'Medición de espesor de pared por ultrasonido y de espesor de recubrimiento, control dimensional y evaluación estructural, en terreno o en taller.',
    servicio: 'Medición de espesores y metrología',
    h1: 'Medición de espesores',
    h1em: 'de pared y de recubrimiento.',
    lead: 'Espesor de pared con ultrasonido y espesor de recubrimiento, más control dimensional y evaluación estructural. En terreno o en taller.',
    foto: 'equipo-inspeccion',
    piezaEj: 'Estanque, cañería, estructura pintada…',
    h2: 'Cuánto metal queda',
    h2em: 'y cuánta pintura tiene encima.',
    conviene:
      'Para controlar corrosión y desgaste en estanques, cañerías y estructuras, o para verificar que un recubrimiento cumple el espesor especificado.',
    limites:
      'Una medición puntual no describe toda la pieza: la malla de puntos se define antes, según lo que se quiere controlar.',
    usos: 'Estanques, cañerías, estructuras y piezas con recubrimiento.',
    normas: [
      { codigo: 'ASTM E797', cubre: 'Medición de espesor por ultrasonido de contacto (pulso-eco).' },
      { codigo: 'ASTM D7091', cubre: 'Espesor de recubrimientos secos sobre metales.' },
      { codigo: 'SSPC-PA 2', cubre: 'Conformidad del espesor de pintura seca con lo especificado.' },
      { codigo: 'ISO 19840', cubre: 'Espesor de película seca sobre superficies rugosas.' },
    ],
    notasExtra: ['que-se-acuerda-antes-del-ensayo', 'iso-9712-niveles-de-certificacion'],
  },
]

export const paginaPorCode = (code: string) => PAGINAS_METODO.find((p) => p.code === code)
