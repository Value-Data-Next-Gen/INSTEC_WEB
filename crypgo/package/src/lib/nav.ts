/** Navegación principal (compartida por header y footer). */
export const NAV = [
  { label: 'Métodos', href: '/#metodos' },
  { label: 'Terreno', href: '/#terreno' },
  { label: 'Cómo trabajamos', href: '/#proceso' },
  { label: 'Notas técnicas', href: '/notas/' },
  { label: 'Nosotros', href: '/nosotros/' },
]

/** En el header no va "Cómo trabajamos" para que el menú quepa sobre la columna clara de la ficha. */
export const NAV_HEADER = NAV.filter((n) => n.href !== '/#proceso')

/** Páginas cuyo encabezado es la ficha partida (clara a la izquierda, figura oscura a la derecha). */
export const RUTAS_SPLIT = ['/', '/servicios', '/nosotros']
