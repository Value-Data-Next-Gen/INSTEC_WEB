import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

// Necesario con output: 'export' para que se genere /sitemap.xml estático.
export const dynamic = 'force-static'

/** Rutas públicas indexables (con slash final, igual que trailingSlash: true). */
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/servicios/', priority: 0.9 },
  { path: '/nosotros/', priority: 0.7 },
  { path: '/proyectos/', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
