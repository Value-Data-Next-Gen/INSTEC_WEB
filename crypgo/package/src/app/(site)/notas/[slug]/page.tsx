import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NOTAS } from '@/content/notas'
import { METODOS } from '@/lib/metodos'
import { pageMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'
import { Ic } from '@/components/instec/Icons'
import { CotizarWhatsApp, TrackedLink } from '@/components/instec/Tracked'

export const dynamicParams = false

export function generateStaticParams() {
  return NOTAS.map((n) => ({ slug: n.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const n = NOTAS.find((x) => x.slug === slug)
  if (!n) return {}
  return pageMetadata({
    title: n.seoTitle,
    description: n.descripcion,
    path: `/notas/${n.slug}/`,
    image: { url: n.portada, width: 720, height: 900 },
    article: { publishedTime: n.fecha, tags: [...n.metodos, ...n.normas] },
  })
}

const fecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' })

export default async function NotaPage({ params }: Props) {
  const { slug } = await params
  const n = NOTAS.find((x) => x.slug === slug)
  if (!n) notFound()

  const metodo = METODOS.find((m) => m.code === n.metodos[0])
  const relacionadas = n.relacionadas
    .map((s) => NOTAS.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))

  const url = `${SITE.url}/notas/${n.slug}/`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${url}#articulo`,
        headline: n.titulo,
        description: n.descripcion,
        datePublished: n.fecha,
        dateModified: n.fecha,
        inLanguage: 'es-CL',
        image: `${SITE.url}${n.portada}`,
        mainEntityOfPage: url,
        author: { '@id': `${SITE.url}/#organizacion` },
        publisher: { '@id': `${SITE.url}/#organizacion` },
        keywords: [...n.metodos, ...n.normas].join(', '),
        articleSection: n.pilar,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Notas técnicas', item: `${SITE.url}/notas/` },
          { '@type': 'ListItem', position: 3, name: n.titulo, item: url },
        ],
      },
    ],
  }

  return (
    <main>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className='sec paper nota'>
        <div className='w'>
          <nav className='rail' aria-label='Ruta'>
            <span>
              <Link href='/notas/' style={{ color: 'inherit', textDecoration: 'none' }}>
                Notas técnicas
              </Link>{' '}
              · {n.pilar}
            </span>
            <time dateTime={n.fecha}>{fecha(n.fecha)}</time>
          </nav>

          <div className='nota-grid'>
            <div className='nota-body'>
              <h1 className='h-display' style={{ fontSize: 'clamp(34px, 3.8vw, 56px)', marginTop: 24 }}>
                {n.titulo}
              </h1>
              <p className='lead' style={{ marginTop: 18 }}>
                {n.bajada}
              </p>
              {(n.metodos.length > 0 || n.normas.length > 0) && (
                <p className='tags' style={{ marginTop: 18 }}>
                  {[...n.metodos, ...n.normas].map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </p>
              )}

              <div className='prosa'>
                {n.secciones.map((s) => (
                  <section key={s.titulo}>
                    <h2>{s.titulo}</h2>
                    {s.parrafos.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {s.lista && (
                      <ul>
                        {s.lista.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className='pregunta night'>
                <span className='lab'>Pregunta</span>
                <p>{n.cierre}</p>
                <TrackedLink
                  href={SITE.social.linkedin}
                  label='linkedin_responder'
                  donde='nota'
                  className='btn ghost sm'
                  external>
                  <Ic name='linkedin' />
                  Respóndela en LinkedIn
                </TrackedLink>
              </div>
              <p className='mono' style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16 }}>
                {n.fuente}
              </p>
            </div>

            <aside className='nota-aside'>
              <img src={n.portada} alt={`Pieza publicada en LinkedIn: ${n.titulo}`} width={720} height={900} />
              <div className='cta-ficha'>
                <span className='lab'>Cotización</span>
                <p>
                  {metodo
                    ? `¿Necesitas ${metodo.nombre.toLowerCase()}? Te cotizamos en terreno o en taller.`
                    : '¿Necesitas una inspección con norma y criterio de aceptación?'}
                </p>
                <CotizarWhatsApp
                  donde='nota'
                  solicitud={metodo ? { metodo: metodo.code, nombreMetodo: metodo.nombre } : {}}>
                  Cotizar por WhatsApp
                </CotizarWhatsApp>
              </div>
            </aside>
          </div>

          {relacionadas.length > 0 && (
            <div style={{ marginTop: 72 }}>
              <div className='rail'>
                <span>Sigue leyendo</span>
                <Link href='/notas/' style={{ color: 'inherit' }}>
                  Todas las notas
                </Link>
              </div>
              <nav className='notas-lista' style={{ borderTop: 0, marginTop: 0 }} aria-label='Notas relacionadas'>
                {relacionadas.map((r) => (
                  <Link key={r.slug} href={`/notas/${r.slug}/`}>
                    <span className='f'>{fecha(r.fecha)}</span>
                    <span className='p'>{r.pilar}</span>
                    <span className='t'>{r.titulo}</span>
                    <Ic name='arrow' />
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </article>
    </main>
  )
}
