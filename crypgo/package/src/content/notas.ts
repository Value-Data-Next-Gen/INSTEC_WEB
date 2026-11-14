// Notas técnicas de INSTEC: posts publicados en la página de LinkedIn (27-oct a 13-nov de 2026),
// convertidos en artículos indexables en /notas/<slug>/.
// Fuentes: textos de los posts, láminas de los carruseles y guiones de los videos. Sin datos agregados.
// Orden: del más nuevo al más antiguo.

export type Pilar =
  | 'Método'
  | 'Norma explicada'
  | 'Caso de terreno'
  | 'Defecto de la semana'
  | 'Cómo trabajamos'

export type Formato = 'carrusel' | 'video' | 'imagen'

export type Metodo = 'UT' | 'RT' | 'MT' | 'PT' | 'VT' | 'ET'

export type SeccionNota = {
  titulo: string
  parrafos: string[]
  lista?: string[]
}

export type Nota = {
  slug: string
  titulo: string
  seoTitle: string
  descripcion: string
  pilar: Pilar
  /** Fecha de publicación en LinkedIn (YYYY-MM-DD). */
  fecha: string
  formato: Formato
  metodos: Metodo[]
  normas: string[]
  bajada: string
  secciones: SeccionNota[]
  cierre: string
  fuente: string
  portada: string
  relacionadas: string[]
  /** URL del post en LinkedIn (cuando se tenga). */
  linkedinUrl?: string
}

export const NOTAS: Nota[] = [
  {
    slug: 'que-se-acuerda-antes-del-ensayo',
    titulo: 'Si el criterio se acuerda después del ensayo, se negocia el resultado',
    seoTitle: 'Ensayo no destructivo: 5 cosas que se acuerdan antes',
    descripcion:
      'Procedimiento escrito, inspector certificado, equipo calibrado, criterio de aceptación y registro: lo que se resuelve antes de un ensayo no destructivo.',
    pilar: 'Cómo trabajamos',
    fecha: '2026-11-13',
    formato: 'carrusel',
    metodos: [],
    normas: ['ASME V', 'ISO 9712:2021'],
    bajada:
      'Cinco cosas que dejamos resueltas antes de llegar a terreno. Ninguna es nueva, pero todas se saltan cuando hay apuro, y es ahí cuando un informe deja de servir.',
    secciones: [
      {
        titulo: 'Por qué se acuerdan antes',
        parrafos: [
          'Si el criterio de aceptación se acuerda después del ensayo, lo que se negocia es el resultado.',
          'Por eso, antes de llegar a terreno dejamos resueltas cinco cosas: el procedimiento escrito, el inspector, el equipo, el criterio de aceptación y el registro.',
        ],
      },
      {
        titulo: '1. El procedimiento escrito',
        parrafos: [
          'El procedimiento se escribe para el método, el material y el código que aplica. Sin procedimiento, el ensayo no se puede repetir ni auditar.',
          'Como mínimo, el procedimiento dice:',
        ],
        lista: [
          'Técnica: cómo se ejecuta el ensayo, paso a paso.',
          'Equipo y ajuste: con qué se ensaya y cómo se calibra.',
          'Alcance: qué piezas, zonas y espesores cubre.',
          'Registro: qué tiene que quedar escrito en el informe.',
        ],
      },
      {
        titulo: '2. El inspector y su nivel',
        parrafos: [
          'El inspector tiene que estar certificado en ese método y con el nivel que pide el trabajo. La certificación es por método: una certificación en ultrasonido no sirve para tintas penetrantes.',
          'Un Nivel 1 ejecuta; la evaluación la hace un Nivel 2 o 3:',
        ],
        lista: [
          'Nivel 1, ejecuta: con instrucciones y supervisión.',
          'Nivel 2, evalúa: interpreta según la norma.',
          'Nivel 3, dirige: valida procedimientos.',
        ],
      },
      {
        titulo: '3. El equipo calibrado',
        parrafos: [
          'El equipo se calibra y se verifica con su bloque de referencia antes de empezar, y de nuevo al terminar.',
          'Si al terminar no da lo mismo que al empezar, lo ensayado entre medio se revisa.',
        ],
      },
      {
        titulo: '4. El criterio de aceptación',
        parrafos: [
          'Qué código y qué nivel se usan para evaluar, acordado con el mandante antes del primer ensayo.',
          'El orden importa. Así sí: primero el acuerdo (código y nivel), después el ensayo en terreno y al final la evaluación contra lo acordado. Así se negocia el resultado: primero el ensayo, después un resultado con hallazgos y recién ahí la pregunta «¿contra qué?», con un acuerdo que llega después.',
        ],
      },
      {
        titulo: '5. El registro',
        parrafos: [
          'Cada foto y cada medición queda asociada a la orden y a la pieza, desde el terreno.',
        ],
      },
      {
        titulo: 'Antes de pedir una inspección, revisa las cinco',
        parrafos: [
          'Ninguna de las cinco es nueva. Todas se saltan cuando hay apuro, y es ahí cuando un informe deja de servir.',
        ],
        lista: [
          'Procedimiento escrito: método, material y código.',
          'Inspector y nivel: certificado en ese método.',
          'Equipo calibrado: verificado al empezar y al terminar.',
          'Criterio de aceptación: código y nivel, antes del ensayo.',
          'Registro: fotos y mediciones asociadas a la orden.',
        ],
      },
    ],
    cierre: '¿Cuál de las cinco se acuerda tarde más seguido en tus proyectos?',
    fuente: 'Referencias: ASME V · ISO 9712',
    portada: '/images/notas/que-se-acuerda-antes-del-ensayo.webp',
    relacionadas: [
      'iso-9712-niveles-de-certificacion',
      'asme-v-y-codigo-de-aceptacion',
      'certificado-de-inspeccion-tecnica-cit',
    ],
  },
  {
    slug: 'falta-de-fusion-en-soldadura',
    titulo: 'Falta de fusión: una radiografía limpia no prueba que no esté',
    seoTitle: 'Falta de fusión en soldadura: por qué la RT puede no verla',
    descripcion:
      'La falta de fusión casi nunca se ve desde afuera. Qué es, por qué pasa, por qué el ultrasonido la ve y la radiografía puede no verla, y qué exige AWS D1.1.',
    pilar: 'Defecto de la semana',
    fecha: '2026-11-12',
    formato: 'video',
    metodos: ['UT', 'RT'],
    normas: ['AWS D1.1'],
    bajada:
      'La falta de fusión casi nunca se ve desde afuera. Y una radiografía limpia no prueba que no esté.',
    secciones: [
      {
        titulo: 'Qué es',
        parrafos: [
          'Es una zona donde el metal de aporte no se fundió con el metal base o con la pasada anterior. Queda una superficie plana, sin unión, dentro de la soldadura; por ejemplo, en la cara del bisel.',
        ],
      },
      {
        titulo: 'Por qué pasa',
        parrafos: [
          'En MIG/MAG con transferencia por cortocircuito es un riesgo conocido.',
          'Las causas típicas:',
        ],
        lista: [
          'Poco aporte de calor.',
          'Velocidad de avance alta.',
          'Ángulo de la antorcha o del electrodo.',
          'Bisel sucio o mal preparado.',
        ],
      },
      {
        titulo: 'Por qué importa',
        parrafos: [
          'Es un defecto plano, como una grieta. Concentra tensiones y, bajo cargas cíclicas, puede crecer.',
        ],
      },
      {
        titulo: 'Por qué el ultrasonido la ve y la radiografía puede no verla',
        parrafos: [
          'En una radiografía, el haz cruza el plano de la falla en ángulo. La falla casi no cambia lo que el haz atraviesa, así que en la película la indicación queda débil o nula. La radiografía puede no mostrarla si no está alineada con el haz.',
          'El ultrasonido la ve bien cuando el haz la encuentra de frente, por ejemplo en la cara del bisel. Con un haz angular que llega de frente a esa superficie, vuelve un eco fuerte.',
          'Por eso, una radiografía limpia no prueba que no haya falta de fusión.',
        ],
      },
      {
        titulo: 'Qué dice la norma',
        parrafos: [
          'AWS D1.1 exige fusión completa entre pasadas y entre el metal de aporte y el metal base.',
        ],
      },
      {
        titulo: 'Cómo se previene',
        parrafos: ['La falta de fusión se previene antes de soldar:'],
        lista: [
          'Procedimiento calificado.',
          'Parámetros dentro de rango.',
          'Bisel limpio.',
        ],
      },
    ],
    cierre:
      '¿En tus soldaduras, con qué se busca la falta de fusión: UT, RT o solo inspección visual?',
    fuente: 'Esquema didáctico, no a escala',
    portada: '/images/notas/falta-de-fusion-en-soldadura.webp',
    relacionadas: [
      'radiografia-o-ultrasonido',
      'como-ve-un-ultrasonido-una-falla',
      'porosidad-en-soldadura',
    ],
  },
  {
    slug: 'muestreo-progresivo-asme-b31-3',
    titulo: '«Se radiografió el 5 % de las soldaduras». ¿Qué 5 %?',
    seoTitle: 'Muestreo progresivo en ASME B31.3: qué 5 % se examina',
    descripcion:
      'ASME B31.3 pide examinar al menos el 5 % de las soldaduras a tope circunferenciales. Cómo se elige la muestra y qué pasa cuando una soldadura falla.',
    pilar: 'Norma explicada',
    fecha: '2026-11-11',
    formato: 'video',
    metodos: ['RT', 'UT'],
    normas: ['ASME B31.3'],
    bajada:
      '«Se radiografió el 5 % de las soldaduras». ¿Qué 5 %? La respuesta cambia lo que significa el resultado.',
    secciones: [
      {
        titulo: 'Qué pide ASME B31.3',
        parrafos: [
          'En cañerías de proceso, ASME B31.3 pide, para servicio de fluido normal, examinar al menos el 5 % de las soldaduras a tope circunferenciales con radiografía o ultrasonido aleatorio.',
          'Hay dos ideas que se olvidan seguido: cómo se elige la muestra y qué pasa cuando aparece un defecto.',
        ],
      },
      {
        titulo: 'Aleatorio no es «las más fáciles de alcanzar»',
        parrafos: [
          'La muestra es aleatoria y tiene que incluir el trabajo de cada soldador del lote.',
        ],
      },
      {
        titulo: 'Encontrar un defecto no termina la inspección',
        parrafos: [
          'Un defecto en la muestra activa el muestreo progresivo. Las soldaduras adicionales se examinan con el mismo ensayo. Así funciona:',
        ],
        lista: [
          'Si una soldadura de la muestra falla, se examinan 2 más del mismo soldador.',
          'Si las 2 pasan, se repara la defectuosa y el lote se acepta.',
          'Si alguna falla, se examinan 2 más por cada soldadura defectuosa.',
          'Si vuelve a fallar alguna, se examina o se repara todo el lote que representa la muestra.',
        ],
      },
      {
        titulo: 'Para qué sirve el 5 %',
        parrafos: [
          'El 5 % no es para ahorrar ensayos: es una muestra que obliga a ampliar la búsqueda apenas encuentra algo.',
        ],
      },
      {
        titulo: 'Dónde está en la norma',
        parrafos: [
          'ASME B31.3, párrafos 341.4.1(b)(1) (5 % aleatorio que incluye el trabajo de cada soldador del lote) y 341.3.4 (muestreo progresivo). Revisa la edición que pide el proyecto.',
        ],
      },
    ],
    cierre: '¿Tus informes dicen cómo se eligió la muestra?',
    fuente: 'Fuente: ASME B31.3, 341.4.1(b)(1) y 341.3.4 · esquema',
    portada: '/images/notas/muestreo-progresivo-asme-b31-3.webp',
    relacionadas: [
      'asme-v-y-codigo-de-aceptacion',
      'radiografia-o-ultrasonido',
      'certificado-de-inspeccion-tecnica-cit',
    ],
  },
  {
    slug: 'iso-5817-niveles-b-c-d',
    titulo: 'ISO 5817: el mismo defecto puede aceptarse en una soldadura y rechazarse en otra',
    seoTitle: 'ISO 5817: niveles de calidad B, C y D en soldaduras',
    descripcion:
      'ISO 5817 fija tres niveles de calidad (B, C y D) para soldaduras por fusión en acero. Quién define el nivel y por qué pedir B «por si acaso» cuesta.',
    pilar: 'Norma explicada',
    fecha: '2026-11-10',
    formato: 'imagen',
    metodos: [],
    normas: ['ISO 5817', 'EN 1090-2', 'AWS D1.1'],
    bajada:
      '¿Nivel B, C o D? En ISO 5817, el mismo defecto puede aceptarse en una soldadura y rechazarse en otra.',
    secciones: [
      {
        titulo: 'Tres niveles de calidad',
        parrafos: [
          'ISO 5817 fija niveles de calidad para las imperfecciones de las soldaduras por fusión en acero:',
        ],
        lista: [
          'Nivel B (elevado): el más exigente.',
          'Nivel C (intermedio): exigencia media.',
          'Nivel D (moderado): el menos exigente.',
        ],
      },
      {
        titulo: 'Un límite distinto para cada imperfección',
        parrafos: [
          'Para cada imperfección (socavación, porosidad, sobremonta, desalineamiento y otras), la norma fija un límite distinto según el nivel. Por eso el mismo defecto puede aceptarse en una soldadura y rechazarse en otra.',
          'Las grietas no se aceptan en ningún nivel.',
        ],
      },
      {
        titulo: 'Quién define el nivel',
        parrafos: [
          'El nivel no lo elige el inspector. Lo define el diseño o la norma de aplicación, según la carga (estática o de fatiga) y lo que pasa si la unión falla.',
          'Por ejemplo, en estructuras de acero bajo EN 1090-2, cada clase de ejecución pide, en general, un nivel de ISO 5817:',
        ],
        lista: ['EXC3: nivel B.', 'EXC2: nivel C.', 'EXC1: nivel D.'],
      },
      {
        titulo: 'Pedir nivel B «por si acaso»',
        parrafos: [
          'Pedir nivel B «por si acaso» en todo el proyecto no hace más segura una pieza que no lo necesita. Sí multiplica reparaciones, ensayos y plazos.',
        ],
      },
      {
        titulo: 'ISO 5817 y AWS D1.1 no son intercambiables',
        parrafos: ['El contrato tiene que decir con cuál de las dos se evalúa.'],
      },
    ],
    cierre:
      '¿En tus proyectos, quién define el nivel de calidad de las soldaduras: el diseño, el mandante o nadie?',
    fuente: 'Fuente: ISO 5817 · EN 1090-2',
    portada: '/images/notas/iso-5817-niveles-b-c-d.webp',
    relacionadas: [
      'socavacion-en-soldadura',
      'porosidad-en-soldadura',
      'asme-v-y-codigo-de-aceptacion',
    ],
  },
  {
    slug: 'radiografia-o-ultrasonido',
    titulo: 'RT o UT: no ven lo mismo',
    seoTitle: 'Radiografía o ultrasonido en soldaduras a tope: qué elegir',
    descripcion:
      'Radiografía (RT) y ultrasonido (UT) no ven los mismos defectos. Qué ve bien cada uno, qué cuidar y qué entrega, para elegir según el defecto y el código.',
    pilar: 'Método',
    fecha: '2026-11-09',
    formato: 'imagen',
    metodos: ['RT', 'UT'],
    normas: [],
    bajada:
      '¿Radiografía o ultrasonido para una soldadura a tope? No ven lo mismo. Y pedir uno «porque siempre se ha pedido» puede dejar fuera justo el defecto que importa.',
    secciones: [
      {
        titulo: 'Radiografía (RT)',
        parrafos: [
          'Ve bien lo que tiene volumen, como la porosidad y las inclusiones de escoria.',
          'Cuidado: una grieta o una falta de fusión puede no aparecer si no está alineada con el haz. Además, la radiografía exige aislar el área por la radiación.',
          'Entrega una imagen que se puede volver a revisar.',
        ],
      },
      {
        titulo: 'Ultrasonido (UT)',
        parrafos: [
          'Ve bien lo que es plano, como grietas y faltas de fusión, sobre todo si el haz las encuentra de frente.',
          'Cuidado: depende más del ajuste del equipo y de quien ejecuta.',
          'Entrega la profundidad a la que está la falla. Deja un registro completo solo con técnicas como phased array.',
        ],
      },
      {
        titulo: 'Cómo se elige',
        parrafos: [
          'Ninguno es «el mejor». Pedir uno por costumbre puede dejar fuera justo el defecto que importa. Se elige según:',
        ],
        lista: [
          'El defecto que más preocupa.',
          'El espesor.',
          'El acceso.',
          'Lo que pide el código.',
        ],
      },
    ],
    cierre: '¿Qué piden más tus mandantes para soldaduras a tope: RT o UT?',
    fuente: 'Esquemas didácticos, no a escala',
    portada: '/images/notas/radiografia-o-ultrasonido.webp',
    relacionadas: [
      'falta-de-fusion-en-soldadura',
      'como-ve-un-ultrasonido-una-falla',
      'porosidad-en-soldadura',
    ],
  },
  // REVISAR: confirmar que la app del CIT ya opera
  {
    slug: 'certificado-de-inspeccion-tecnica-cit',
    titulo: 'Las 8 preguntas que tendría que responder un certificado de inspección técnica',
    seoTitle: 'Certificado de inspección técnica: las 8 preguntas clave',
    descripcion:
      'Un certificado de inspección técnica tendría que responder 8 preguntas. Cuáles son y por qué un informe sin norma ni criterio no dice si la pieza pasa.',
    pilar: 'Cómo trabajamos',
    fecha: '2026-11-06',
    formato: 'video',
    metodos: [],
    normas: [],
    bajada:
      'Un certificado de inspección técnica tendría que responder 8 preguntas. Si al tuyo le falta una, pídela antes de recibirlo.',
    secciones: [
      {
        titulo: 'Las 8 preguntas',
        parrafos: ['Un certificado completo responde:'],
        lista: [
          '¿Qué pieza se inspeccionó? Elemento, plano y orden de trabajo.',
          '¿De qué material y con qué proceso de soldadura?',
          '¿Qué ensayo se hizo y con qué equipo?',
          '¿Con qué norma y qué criterio de aceptación?',
          '¿Qué se controló y cuánto se muestreó?',
          '¿Qué se encontró, ítem por ítem?',
          '¿Quién inspeccionó, y con qué nivel y método certificado?',
          '¿Quién lo recibió por parte del cliente?',
        ],
      },
      {
        titulo: 'Sin norma ni criterio, no dice si la pieza pasa',
        parrafos: [
          'Un informe sin norma o sin criterio de aceptación no dice si la pieza pasa: solo dice que alguien la miró.',
        ],
      },
      {
        titulo: 'El CIT digital de INSTEC',
        parrafos: [
          'En INSTEC, el certificado (CIT) sale digital. En terreno, la foto queda asociada a la orden de trabajo. El inspector revisa y firma antes de emitirlo, y el CIT sale en PDF, con las fotos y la firma.',
          'La app la hizo Value Data.',
        ],
      },
    ],
    cierre: '¿Cuál de estas falta más seguido en los informes que recibes?',
    fuente: 'Esquema · campos de ejemplo',
    portada: '/images/notas/certificado-de-inspeccion-tecnica-cit.webp',
    relacionadas: [
      'que-se-acuerda-antes-del-ensayo',
      'asme-v-y-codigo-de-aceptacion',
      'iso-9712-niveles-de-certificacion',
    ],
  },
  {
    slug: 'porosidad-en-soldadura',
    titulo: 'Porosidad: cómo se ve, por qué pasa y qué dice la norma',
    seoTitle: 'Porosidad en soldadura: cómo se ve, causas y norma',
    descripcion:
      'La porosidad son burbujas de gas atrapadas en la soldadura al solidificarse. Cómo se ve, por qué pasa, qué dice el código y cómo se previene.',
    pilar: 'Defecto de la semana',
    fecha: '2026-11-05',
    formato: 'carrusel',
    metodos: ['VT', 'RT'],
    normas: ['ASME Sección VIII', 'AWS D1.1'],
    bajada:
      'Porosidad: burbujas de gas que quedaron atrapadas en la soldadura al solidificarse. Casi siempre se previene antes de soldar.',
    secciones: [
      {
        titulo: 'Cómo se ve',
        parrafos: [
          'En la superficie, la porosidad se ve a simple vista: poros redondos en el cordón.',
          'Por dentro no se ve: en una radiografía aparece como puntos oscuros y redondeados. El cordón se ve más claro porque tiene más metal; el poro, más oscuro.',
        ],
      },
      {
        titulo: 'Por qué pasa',
        parrafos: ['El gas viene de algo que no debía estar ahí:'],
        lista: [
          'Superficie sucia o húmeda: grasa, óxido, pintura o humedad en el metal base.',
          'Electrodos o fundente húmedos: consumibles guardados sin protección contra la humedad.',
          'Gas de protección insuficiente: el baño de soldadura queda expuesto al aire.',
          'Corrientes de aire: barren el gas de protección antes de que cubra el baño.',
        ],
      },
      {
        titulo: 'Por qué importa',
        parrafos: [
          'Un poro aislado no es lo mismo que un grupo. Un poro pequeño y aislado suele aceptarse; un grupo de poros o poros alineados reducen la sección y pueden esconder otros defectos.',
        ],
      },
      {
        titulo: 'Qué dice la norma',
        parrafos: [
          'Cuánta porosidad se acepta lo fija el código de construcción. No es lo mismo un recipiente a presión (por ejemplo, ASME Sección VIII) que una estructura de acero (por ejemplo, AWS D1.1): revisa el código que aplica.',
          'El criterio depende de:',
        ],
        lista: [
          'El tamaño de los poros.',
          'La cantidad de poros.',
          'La distancia entre poros.',
        ],
      },
      {
        titulo: 'Cómo se previene',
        parrafos: ['La porosidad casi siempre se previene antes de soldar:'],
        lista: [
          'Limpieza: sin grasa, óxido, pintura ni humedad.',
          'Consumibles secos: electrodos y fundente.',
          'Buena protección del gas, sin corrientes de aire.',
        ],
      },
    ],
    cierre: '¿En tu taller, qué causa más porosidad: humedad, limpieza o corrientes de aire?',
    fuente: 'Esquema didáctico, no a escala',
    portada: '/images/notas/porosidad-en-soldadura.webp',
    relacionadas: [
      'socavacion-en-soldadura',
      'falta-de-fusion-en-soldadura',
      'iso-5817-niveles-b-c-d',
    ],
  },
  {
    slug: 'particulas-magneticas',
    titulo: 'Partículas magnéticas: la grieta se dibuja sola',
    seoTitle: 'Partículas magnéticas: cómo detectan grietas en el acero',
    descripcion:
      'Una grieta superficial en acero puede ser invisible a simple vista. Cómo funcionan las partículas magnéticas, en qué materiales sirven y qué detectan.',
    pilar: 'Método',
    fecha: '2026-11-04',
    formato: 'video',
    metodos: ['MT'],
    normas: [],
    bajada:
      'Una grieta superficial en acero puede ser invisible a simple vista. Con partículas magnéticas, se dibuja sola.',
    secciones: [
      {
        titulo: 'El principio',
        parrafos: [
          'El principio es simple. La pieza se magnetiza, por ejemplo con un yugo apoyado sobre la soldadura, y las partículas de hierro hacen visible la grieta:',
        ],
        lista: [
          'Se magnetiza la pieza: el campo magnético recorre el acero.',
          'Donde hay una grieta, el campo se «escapa» hacia afuera.',
          'Las partículas de hierro se juntan justo ahí y marcan la indicación.',
        ],
      },
      {
        titulo: 'Por qué se magnetiza dos veces',
        parrafos: [
          'El ensayo detecta mejor las grietas perpendiculares al campo. Por eso se magnetiza en dos direcciones, a unos 90° entre sí: con la segunda magnetización aparece la grieta que queda perpendicular al nuevo campo.',
        ],
      },
      {
        titulo: 'En qué materiales sirve',
        parrafos: [
          'Solo sirve en materiales ferromagnéticos, como el acero al carbono. En acero inoxidable austenítico o aluminio no funciona; ahí se usan tintas penetrantes.',
        ],
      },
      {
        titulo: 'Qué profundidad alcanza',
        parrafos: [
          'Detecta fallas en la superficie y justo debajo de ella. Para fallas internas más profundas, se usa ultrasonido o radiografía.',
        ],
      },
    ],
    cierre: '¿En tus piezas, qué material predomina: acero al carbono, inoxidable u otro?',
    fuente: 'Esquema didáctico · yugo sobre una soldadura',
    portada: '/images/notas/particulas-magneticas.webp',
    relacionadas: [
      'tintas-penetrantes-en-6-pasos',
      'como-ve-un-ultrasonido-una-falla',
      'radiografia-o-ultrasonido',
    ],
  },
  {
    slug: 'asme-v-y-codigo-de-aceptacion',
    titulo: 'ASME V dice cómo ensayar; el código dice si la soldadura pasa',
    seoTitle: 'ASME V y el código de aceptación: quién dice si pasa',
    descripcion:
      'ASME Sección V dice cómo se ejecuta cada ensayo no destructivo; el código de construcción del equipo dice qué se acepta. Qué debe decir tu informe.',
    pilar: 'Norma explicada',
    fecha: '2026-11-03',
    formato: 'carrusel',
    metodos: ['RT', 'UT', 'PT', 'MT', 'VT'],
    normas: ['ASME V', 'ASME Sección VIII', 'ASME B31.3', 'AWS D1.1'],
    bajada:
      '¿Quién dice cómo se hace un ensayo y quién dice si la soldadura pasa? No es la misma norma.',
    secciones: [
      {
        titulo: 'ASME Sección V: cómo se ensaya',
        parrafos: [
          'En ASME, la Sección V describe cómo se ejecuta cada ensayo no destructivo: la técnica, el equipo, la calibración y lo que debe quedar registrado. Por ejemplo:',
        ],
        lista: [
          'Artículo 2: radiografía (RT).',
          'Artículo 4: ultrasonido de soldaduras (UT).',
          'Artículo 6: líquidos penetrantes (PT).',
          'Artículo 7: partículas magnéticas (MT).',
          'Artículo 9: inspección visual (VT).',
        ],
      },
      {
        titulo: 'El código de construcción: si pasa',
        parrafos: [
          'Pero la Sección V casi nunca dice qué indicación se acepta. Por eso, antes de evaluar una indicación, hay que saber qué código aplica al equipo.',
          'Qué indicación se acepta lo fija el código de construcción del equipo:',
        ],
        lista: [
          'Recipientes a presión: ASME Sección VIII.',
          'Cañerías de proceso: ASME B31.3.',
          'Estructuras de acero: AWS D1.1.',
        ],
      },
      {
        titulo: 'Una soldadura, dos preguntas',
        parrafos: [
          'Toma la soldadura de un recipiente a presión, ensayada con radiografía.',
          '¿Cómo se ensaya? Según ASME Sección V, Artículo 2: técnica, equipo, calibración y registro de la radiografía.',
          '¿Pasa? Lo dice ASME Sección VIII: el código del recipiente fija qué indicaciones se aceptan.',
        ],
      },
      {
        titulo: 'Qué debe decir el informe',
        parrafos: [
          'Un informe que solo dice «ensayado según ASME V» está incompleto: falta contra qué código y qué criterio se evaluó. El informe tiene que decir:',
        ],
        lista: [
          'Método y procedimiento: qué ensayo se hizo y con qué procedimiento.',
          'Código y criterio de aceptación: contra qué se evaluó; por ejemplo, ASME Sección VIII.',
          'Resultado: qué se encontró y si se acepta o se rechaza.',
          'Inspector y nivel: quién evaluó y con qué certificación.',
        ],
      },
      {
        titulo: 'En resumen: el método no basta, falta el criterio',
        parrafos: [],
        lista: [
          'Cómo se ensaya: en ASME, la Sección V.',
          'Si pasa: el código del equipo (Sección VIII, B31.3 o AWS D1.1).',
          'El informe: dice las dos cosas.',
        ],
      },
    ],
    cierre: '¿Tus informes indican el código de aceptación además del método?',
    fuente: 'Fuente: ASME BPVC · ASME B31.3 · AWS D1.1',
    portada: '/images/notas/asme-v-y-codigo-de-aceptacion.webp',
    relacionadas: [
      'iso-5817-niveles-b-c-d',
      'muestreo-progresivo-asme-b31-3',
      'certificado-de-inspeccion-tecnica-cit',
    ],
  },
  {
    slug: 'tintas-penetrantes-en-6-pasos',
    titulo: 'Una tinta penetrante no encuentra grietas: las muestra, si cada paso se hace bien',
    seoTitle: 'Tintas penetrantes en 6 pasos: cómo se hace el ensayo',
    descripcion:
      'Los 6 pasos del ensayo de tintas penetrantes, de la limpieza previa a la inspección, y por qué un paso mal hecho esconde la grieta aunque esté ahí.',
    pilar: 'Método',
    fecha: '2026-11-02',
    formato: 'video',
    metodos: ['PT'],
    normas: [],
    bajada:
      'Una tinta penetrante no encuentra grietas. Las muestra, si cada paso se hace bien. Son 6 pasos y ninguno se puede apurar.',
    secciones: [
      {
        titulo: 'Los 6 pasos',
        parrafos: [],
        lista: [
          '1. Limpieza previa: superficie seca y sin grasa, pintura ni óxido.',
          '2. Aplicación del penetrante sobre toda la zona a inspeccionar.',
          '3. Tiempo de permanencia: el que indica el procedimiento, para que el penetrante entre en la discontinuidad.',
          '4. Remoción del exceso de la superficie, sin lavar el penetrante que quedó dentro de la grieta.',
          '5. Revelador en una capa delgada y pareja: saca el penetrante a la superficie.',
          '6. Inspección con buena luz, evaluación de la indicación según la norma y limpieza final.',
        ],
      },
      {
        titulo: 'Qué pasa dentro de la grieta',
        parrafos: [
          'Durante el tiempo de permanencia, el penetrante entra en la grieta. Al retirar el exceso, la superficie queda sin penetrante, pero la grieta sigue llena. El revelador saca ese penetrante a la superficie y ahí aparece la indicación, que se evalúa con buena luz.',
        ],
      },
      {
        titulo: 'Si un paso se apura',
        parrafos: [
          'Si un paso se hace mal, la indicación no aparece aunque la grieta esté. Una superficie mal limpia o un lavado excesivo esconden la grieta. Un exceso mal retirado muestra indicaciones que no existen.',
          'Por eso el informe debería decir qué procedimiento se usó: los tiempos los fija el procedimiento.',
        ],
      },
    ],
    cierre: '¿En tus piezas, qué se pide más: tintas penetrantes o partículas magnéticas?',
    fuente: 'Esquema didáctico · los tiempos los fija el procedimiento',
    portada: '/images/notas/tintas-penetrantes-en-6-pasos.webp',
    relacionadas: [
      'particulas-magneticas',
      'como-ve-un-ultrasonido-una-falla',
      'que-se-acuerda-antes-del-ensayo',
    ],
  },
  {
    slug: 'socavacion-en-soldadura',
    titulo: 'La socavación se ve a simple vista. Por eso se pasa por alto',
    seoTitle: 'Socavación en soldadura: qué es y cómo se controla',
    descripcion:
      'La socavación es una muesca sin rellenar en el borde de la soldadura. Por qué importa, cómo se controla con inspección visual y qué dice AWS D1.1.',
    pilar: 'Defecto de la semana',
    fecha: '2026-10-30',
    formato: 'carrusel',
    metodos: ['VT'],
    normas: ['AWS D1.1'],
    bajada:
      'La socavación se ve a simple vista. Por eso, muchas veces se pasa por alto. Se detecta con inspección visual y se mide con una galga.',
    secciones: [
      {
        titulo: 'Qué es',
        parrafos: [
          'Es una muesca que queda sin rellenar en el borde de la soldadura: el arco fundió el metal base junto al pie del cordón, y el aporte no alcanzó a llenarlo.',
        ],
      },
      {
        titulo: 'Por qué importa',
        parrafos: ['Es pequeña, pero está justo donde más trabaja la unión.'],
        lista: [
          'Menos sección que trabaja: la muesca le quita espesor al metal base en el borde del cordón.',
          'Concentra tensiones: el esfuerzo se acumula en el fondo de la muesca, como en una entalla.',
          'Con carga cíclica, es un inicio de grietas: en piezas con vibración o ciclos de carga, por ahí puede partir una grieta por fatiga.',
        ],
      },
      {
        titulo: 'Cómo se controla',
        parrafos: [
          'Con inspección visual, buena luz y una galga para medir la profundidad. Lo que no se mide no se puede comparar con la norma.',
          'Paso a paso:',
        ],
        lista: [
          'Limpia la escoria y las salpicaduras antes de mirar.',
          'Usa luz rasante: la muesca hace sombra en el pie del cordón.',
          'Recorre los dos pies de la soldadura, en todo el largo.',
          'Mide la profundidad con la galga y registra dónde está y cuánto mide de largo.',
        ],
      },
      {
        titulo: 'Qué dice la norma',
        parrafos: [
          'AWS D1.1 no da un número único: da una tabla. La profundidad máxima admitida está en los criterios de aceptación de la inspección visual, y depende de:',
        ],
        lista: [
          'El espesor del material.',
          'El tipo de carga: estática o cíclica.',
          'La dirección del esfuerzo respecto de la soldadura, cuando la carga es cíclica.',
        ],
      },
      {
        titulo: 'Antes de aceptar o rechazar',
        parrafos: [
          'No es lo mismo una estructura con carga estática que una con fatiga. Antes de aceptar o rechazar, revisa la tabla con el espesor y la carga de tu pieza.',
        ],
      },
      {
        titulo: 'Causas típicas',
        parrafos: ['Casi siempre es parámetro o técnica:'],
        lista: [
          'Corriente demasiado alta.',
          'Velocidad de avance excesiva.',
          'Ángulo del electrodo o de la antorcha.',
          'Arco demasiado largo.',
        ],
      },
    ],
    cierre:
      '¿La inspección visual de tus soldaduras se hace antes o después de los otros ensayos?',
    fuente: 'Esquema didáctico · AWS D1.1/D1.1M:2025',
    portada: '/images/notas/socavacion-en-soldadura.webp',
    relacionadas: [
      'porosidad-en-soldadura',
      'iso-5817-niveles-b-c-d',
      'falta-de-fusion-en-soldadura',
    ],
  },
  {
    slug: 'como-ve-un-ultrasonido-una-falla',
    titulo: 'En la pantalla de un ultrasonido, la distancia es tiempo',
    seoTitle: 'Ultrasonido: cómo se ve una falla en la pantalla del equipo',
    descripcion:
      'La sonda manda un pulso al acero y mide cuánto tarda en volver. Cómo aparece una falla en la pantalla y qué dicen la posición y la altura del eco.',
    pilar: 'Método',
    fecha: '2026-10-28',
    formato: 'video',
    metodos: ['UT'],
    normas: ['ISO 9712:2021'],
    bajada:
      'En la pantalla de un ultrasonido, la distancia es tiempo. La posición del eco dice a qué profundidad está la falla; su altura, cuánto sonido refleja.',
    secciones: [
      {
        titulo: 'Cómo funciona',
        parrafos: [
          'La sonda manda un pulso de sonido al acero y mide cuánto tarda en volver. Si la placa está sana, el eco llega desde el fondo. Si hay una falla en el camino, parte del sonido rebota antes y aparece un eco más cerca.',
        ],
      },
      {
        titulo: 'Un ejemplo: placa de 25 mm',
        parrafos: [
          'Con una placa de 25 mm y un haz recto, la pantalla del equipo (A-scan) muestra dos situaciones:',
        ],
        lista: [
          'Zona sana: el pulso llega al fondo de la placa y vuelve. Aparece un solo eco, el de la pared de fondo, a 25 mm.',
          'Sobre la falla: parte del sonido rebota antes. Aparece un eco a 12 mm y un eco de fondo más bajo, porque llega menos sonido.',
        ],
      },
      {
        titulo: 'Qué dice el eco',
        parrafos: [
          'La posición del eco dice a qué profundidad está la falla. Su altura, cuánto sonido refleja.',
        ],
      },
      {
        titulo: 'Lo que la pantalla no dice',
        parrafos: [
          'Lo que la pantalla no dice es si la pieza se acepta. Eso lo decide la norma o el código que aplica, y lo evalúa un inspector Nivel 2 o 3, según los niveles de ISO 9712.',
        ],
      },
    ],
    cierre:
      '¿Qué ensayo le piden más a tus soldaduras: ultrasonido, tintas penetrantes o partículas magnéticas?',
    fuente: 'Esquema didáctico, haz recto · placa de 25 mm',
    portada: '/images/notas/como-ve-un-ultrasonido-una-falla.webp',
    relacionadas: [
      'radiografia-o-ultrasonido',
      'falta-de-fusion-en-soldadura',
      'iso-9712-niveles-de-certificacion',
    ],
  },
  {
    slug: 'iso-9712-niveles-de-certificacion',
    titulo: 'El técnico que hizo el ensayo, ¿puede decirte si la soldadura pasa?',
    seoTitle: 'ISO 9712: qué puede hacer cada nivel de certificación',
    descripcion:
      'ISO 9712 certifica a cada persona, método por método, en tres niveles. Qué hace cada nivel y qué revisar en un informe de ensayos no destructivos.',
    pilar: 'Norma explicada',
    fecha: '2026-10-27',
    formato: 'carrusel',
    metodos: ['UT', 'PT', 'MT', 'RT', 'ET', 'VT'],
    normas: ['ISO 9712:2021'],
    bajada:
      'Depende de su nivel. La norma ISO 9712 certifica a cada persona, método por método, y define tres niveles: no todos pueden elegir el método ni evaluar el resultado.',
    secciones: [
      {
        titulo: 'ISO 9712 certifica a la persona, no a la empresa',
        parrafos: ['Antes de los niveles, cuatro cosas sobre la certificación:'],
        lista: [
          'Es por método: ultrasonido, tintas penetrantes, partículas magnéticas, radiografía, corrientes de Eddy e inspección visual se certifican por separado.',
          'Es por sector: el certificado indica en qué tipo de piezas o industria aplica.',
          'La otorga un organismo de certificación, con examen teórico, práctico y experiencia demostrada.',
          'Tiene vigencia: el certificado vence y se renueva; no es para siempre.',
        ],
      },
      {
        titulo: 'Nivel 1: ejecuta',
        parrafos: [
          'Trabaja con instrucciones escritas y bajo la supervisión de un Nivel 2 o 3. No elige el método ni la técnica, y no interpreta los resultados.',
          'Lo que sí hace:',
        ],
        lista: [
          'Ajusta el equipo.',
          'Hace el ensayo.',
          'Registra y clasifica resultados según criterios escritos.',
          'Reporta los resultados.',
        ],
      },
      {
        titulo: 'Nivel 2: interpreta',
        parrafos: ['Evalúa el resultado según la norma. Lo que hace:'],
        lista: [
          'Elige la técnica dentro del método.',
          'Define los límites de aplicación del ensayo.',
          'Traduce normas y procedimientos a instrucciones de trabajo.',
          'Ajusta y verifica el equipo.',
          'Interpreta y evalúa resultados según el código aplicable.',
          'Supervisa y guía al Nivel 1.',
        ],
      },
      {
        titulo: 'Nivel 3: dirige',
        parrafos: ['Valida procedimientos y responde por el área. Lo que hace:'],
        lista: [
          'Se hace responsable de la instalación de ensayo y su personal.',
          'Establece y valida procedimientos e instrucciones.',
          'Interpreta normas, códigos y especificaciones.',
          'Decide qué método y procedimiento se usa.',
          'Supervisa y guía a todos los niveles.',
        ],
      },
      {
        titulo: 'Certificado no es lo mismo que autorizado',
        parrafos: [
          'Estar certificado no es lo mismo que estar autorizado: quién firma el informe lo define el empleador o el código que aplica.',
        ],
      },
      {
        titulo: 'Antes de aceptar un informe, pregunta',
        parrafos: [
          'Cuando recibas un informe de ensayos no destructivos, revisa quién lo interpretó y en qué método está certificado:',
        ],
        lista: [
          '¿Quién interpretó el resultado y qué nivel tiene?',
          '¿Está certificado en ese método? Una certificación en ultrasonido no sirve para tintas penetrantes.',
          '¿Su certificado está vigente?',
          '¿El informe cita la norma y el criterio de aceptación?',
        ],
      },
    ],
    cierre: '¿Pides la certificación del inspector junto con el informe?',
    fuente: 'Fuente: ISO 9712:2021',
    portada: '/images/notas/iso-9712-niveles-de-certificacion.webp',
    relacionadas: [
      'que-se-acuerda-antes-del-ensayo',
      'como-ve-un-ultrasonido-una-falla',
      'certificado-de-inspeccion-tecnica-cit',
    ],
  },
]
