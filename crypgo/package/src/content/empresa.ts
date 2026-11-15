/**
 * Misión, visión, valores y política integrada de INSTEC.
 * BORRADOR para aprobación de la gerencia (2026-11-15). La misión y la visión parten de las
 * del sitio anterior, reescritas con la voz de PRODUCT.md (sin "líderes" ni cifras sin respaldo).
 * La política son compromisos: no afirma certificaciones de sistemas de gestión de la empresa.
 */

export const MISION =
  'Resguardar la integridad de los equipos, piezas y estructuras de nuestros clientes con ensayos no destructivos e inspecciones técnicas ejecutadas según norma por personal certificado, y entregar un certificado que el mandante pueda revisar y aceptar.'

export const VISION =
  'Ser la empresa de inspección que la metalmecánica, la minería y la energía en Chile eligen por su rigor técnico: la que explica la norma, documenta cada hallazgo con fotos de terreno y cumple lo comprometido.'

export const VALORES = [
  {
    t: 'Rigor normativo',
    d: 'Cada ensayo se ejecuta con el procedimiento y la norma que corresponden: ASME, ASTM, AWS o ISO.',
  },
  {
    t: 'Imparcialidad',
    d: 'El resultado es el que entrega el ensayo. Ninguna presión comercial o de plazo cambia un informe.',
  },
  {
    t: 'Seguridad en faena',
    d: 'Trabajamos con los permisos y el reglamento del mandante, y paramos si la tarea no es segura.',
  },
  {
    t: 'Evidencia',
    d: 'Fotos de terreno, ubicación de cada indicación y registros que se pueden revisar años después.',
  },
]

export const POLITICA_TITULO = 'Política de calidad, seguridad, salud ocupacional y medio ambiente'

export const POLITICA_INTRO =
  'En INSTEC Ltda. ejecutamos ensayos no destructivos, inspecciones técnicas, metrología y asesorías de control de calidad. La gerencia establece esta política, la difunde a todo el personal y la pone a disposición de clientes y mandantes.'

export const POLITICA_AREAS: { area: string; items: string[] }[] = [
  {
    area: 'Calidad',
    items: [
      'Cumplir lo que exige cada cliente y lo que fijan la norma o el código del servicio contratado.',
      'Trabajar con procedimientos escritos y equipos verificados y calibrados, con registros trazables.',
      'Mantener al personal calificado y certificado según ISO 9712 para cada método que ejecuta.',
      'Emitir informes y certificados objetivos, con la evidencia de terreno que respalda cada resultado.',
    ],
  },
  {
    area: 'Seguridad y salud ocupacional',
    items: [
      'Identificar peligros y evaluar riesgos antes de cada trabajo, en terreno o en taller.',
      'Cumplir la legislación vigente y los reglamentos de seguridad de cada mandante.',
      'En radiografía industrial, resguardar al personal y a terceros con control de dosis y señalización del área, según la normativa nacional.',
      'Respetar el derecho de toda persona del equipo a detener una tarea insegura.',
    ],
  },
  {
    area: 'Medio ambiente',
    items: [
      'Manejar y disponer correctamente penetrantes, reveladores, partículas, removedores y sus envases.',
      'Usar con eficiencia los recursos y preferir los registros digitales al papel.',
    ],
  },
  {
    area: 'Mejora continua y confidencialidad',
    items: [
      'Revisar los resultados, los reclamos y las auditorías para mejorar el servicio.',
      'Proteger la información técnica y comercial de cada cliente.',
    ],
  },
]

export const POLITICA_FIRMA = 'Gerencia General · INSTEC Ltda.'
export const POLITICA_REVISION = 'Revisión anual, o antes si cambian los servicios, la normativa o los riesgos.'
