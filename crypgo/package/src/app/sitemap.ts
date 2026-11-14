import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { NOTAS } from '@/content/notas'
import { PAGINAS_METODO } from '@/content/metodos-paginas'

// Necesario con output: 'export' para que se genere /sitemap.xml estático.
export const dynamic = 'force-static'

/**
 * Rutas públicas indexables (con slash final, igual que trailingSlash: true).
 * Solo las notas llevan lastmod: su fecha de publicación es real. Las páginas
 * fijas no lo llevan para no declarar cambios que no hubo.
 */
const FIJAS: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/notas/', priority: 0.8 },
  { path: '/servicios/', priority: 0.7 },
  { path: '/nosotros/', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...FIJAS.map(({ path, priority }) => ({ url: `${SITE.url}${path}`, priority })),
    ...PAGINAS_METODO.map((p) => ({ url: `${SITE.url}/servicios/${p.slug}/`, priority: 0.7 })),
    ...NOTAS.map((n) => ({
      url: `${SITE.url}/notas/${n.slug}/`,
      lastModified: n.fecha,
      priority: 0.7,
    })),
  ]
}
