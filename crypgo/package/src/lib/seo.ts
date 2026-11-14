import type { Metadata } from 'next'
import { SITE } from './site'

/**
 * Construye los metadatos de una página (title, description, canonical y
 * OpenGraph/Twitter) de forma consistente. Next.js no hace deep-merge del
 * objeto `openGraph` entre layout y página, por eso lo definimos completo aquí.
 */
export const pageMetadata = ({
  title,
  description,
  path,
}: {
  title: string
  description: string
  /** Ruta absoluta del sitio, ej. "/servicios". */
  path: string
}): Metadata => {
  // trailingSlash: true en next.config → el canonical debe terminar en "/".
  const canonical = path.endsWith('/') ? path : `${path}/`
  const url = `${SITE.url}${canonical}`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'es_CL',
      url,
      siteName: SITE.name,
      title,
      description,
      images: [{ url: '/images/og-default.png', width: 1200, height: 630, alt: SITE.legalName }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-default.png'],
    },
  }
}
