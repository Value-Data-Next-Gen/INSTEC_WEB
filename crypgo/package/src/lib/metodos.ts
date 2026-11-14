/**
 * Métodos y servicios de INSTEC para la ficha de cotización y la tabla de
 * métodos. Los textos de "ve bien / ten en cuenta" de UT y RT vienen de la
 * pieza publicada en LinkedIn ("RT o UT: no ven lo mismo"); el resto son
 * descripciones generales del método, sin cifras ni claims.
 */
export type Metodo = {
  /** Sigla o código corto (lo que va en el chip). */
  code: string
  nombre: string
  detecta: string
  cuidado: string
  /** Foto real que muestra este método (si existe). */
  foto?: string
}

export const METODOS: Metodo[] = [
  {
    code: 'UT',
    nombre: 'Ultrasonido',
    detecta:
      'Lo que es plano: grietas y faltas de fusión, si el haz las encuentra de frente. También espesores.',
    cuidado:
      'Depende más del ajuste del equipo y de quien ejecuta. Con phased array queda registro completo.',
    foto: 'ultrasonido-omniscan',
  },
  {
    code: 'RT',
    nombre: 'Radiografía',
    detecta: 'Lo que tiene volumen: porosidad e inclusiones de escoria.',
    cuidado:
      'Una grieta o falta de fusión puede no aparecer si no está alineada con el haz. Exige aislar el área.',
  },
  {
    code: 'MT',
    nombre: 'Partículas magnéticas',
    detecta:
      'Grietas superficiales y cercanas a la superficie en aceros y otros materiales ferromagnéticos.',
    cuidado: 'Solo sirve en materiales que se magnetizan; no en inoxidables austeníticos ni aluminio.',
    foto: 'particulas-magneticas-yugo',
  },
  {
    code: 'PT',
    nombre: 'Tintas penetrantes',
    detecta: 'Discontinuidades abiertas a la superficie, en casi cualquier material no poroso.',
    cuidado: 'Solo ve lo que llega a la superficie, y la limpieza previa define el resultado.',
  },
  {
    code: 'VT',
    nombre: 'Inspección visual',
    detecta: 'Lo que se ve a simple vista: socavación, perfil del cordón, porosidad superficial.',
    cuidado: 'Es la primera inspección y define dónde aplicar los otros ensayos.',
  },
  {
    code: 'ET',
    nombre: 'Corrientes de Eddy',
    detecta: 'Discontinuidades superficiales en materiales conductores.',
    cuidado: 'La sensibilidad cae con la profundidad; se usa para superficie y zonas cercanas.',
  },
  {
    code: 'Espesores',
    nombre: 'Espesores y metrología',
    detecta: 'Espesor de pared y de recubrimiento, control dimensional y evaluación estructural.',
    cuidado: 'La lectura vale tanto como la calibración del equipo y la preparación de la superficie.',
    foto: 'equipo-inspeccion',
  },
]

/** Opción "no sé qué método": te asesoramos. */
export const NO_SE = {
  code: 'No sé',
  nombre: 'Necesito asesoría para elegir el método',
  foto: 'molino-inspeccion',
} as const
