import type { Metadata } from 'next'
import { SITE } from './site'

const OG_DEFAULT = { url: '/images/og-instec.jpg', width: 1200, height: 630 }

/**
 * Construye los metadatos de una página (title, description, canonical y
 * OpenGraph/Twitter) de forma consistente. Next.js no hace deep-merge del
 * objeto `openGraph` entre layout y página, por eso lo definimos completo aquí.
 */
export const pageMetadata = ({
  title,
  description,
  path,
  image,
  article,
}: {
  title: string
  description: string
  /** Ruta absoluta del sitio, ej. "/servicios". */
  path: string
  /** Imagen OG propia (ruta pública). Por defecto, la imagen de marca. */
  image?: { url: string; width: number; height: number }
  /** Datos de artículo (notas técnicas). */
  article?: { publishedTime: string; tags?: string[] }
}): Metadata => {
  // trailingSlash: true en next.config → el canonical debe terminar en "/".
  const canonical = path.endsWith('/') ? path : `${path}/`
  const url = `${SITE.url}${canonical}`
  const img = image ?? OG_DEFAULT
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: article ? 'article' : 'website',
      locale: 'es_CL',
      url,
      siteName: SITE.name,
      title,
      description,
      images: [{ ...img, alt: title }],
      ...(article
        ? { publishedTime: article.publishedTime, tags: article.tags, authors: [SITE.legalName] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img.url],
    },
  }
}
