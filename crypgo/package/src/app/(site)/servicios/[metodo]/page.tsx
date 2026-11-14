import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { METODOS } from '@/lib/metodos'
import { NOTAS } from '@/content/notas'
import { PAGINAS_METODO } from '@/content/metodos-paginas'
import { pageMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'
import PageHead from '@/components/instec/PageHead'
import FichaMetodo from '@/components/instec/FichaMetodo'
import { PASOS } from '@/components/instec/Proceso'
import { Contacto } from '@/components/instec/Cierre'
import { Ic } from '@/components/instec/Icons'

export const dynamicParams = false

export function generateStaticParams() {
  return PAGINAS_METODO.map((p) => ({ metodo: p.slug }))
}

type Props = { params: Promise<{ metodo: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metodo } = await params
  const p = PAGINAS_METODO.find((x) => x.slug === metodo)
  if (!p) return {}
  return pageMetadata({ title: p.seoTitle, description: p.descripcion, path: `/servicios/${p.slug}/` })
}

const fechaCorta = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' })

export default async function MetodoPage({ params }: Props) {
  const { metodo } = await params
  const p = PAGINAS_METODO.find((x) => x.slug === metodo)
  const m = METODOS.find((x) => x.code === p?.code)
  if (!p || !m) notFound()

  const delMetodo = NOTAS.filter((n) => (n.metodos as string[]).includes(m.code))
  // Si el método tiene menos de dos notas propias, se completan con notas generales.
  const extra = delMetodo.length < 2 ? (p.notasExtra ?? []) : []
  const notas = [
    ...delMetodo,
    ...extra
      .map((s) => NOTAS.find((n) => n.slug === s))
      .filter((n) => n !== undefined && !delMetodo.includes(n)),
  ]
    .filter((n) => n !== undefined)
    .sort((a, b) => b.fecha.localeCompare(a.fecha))
  const otros = PAGINAS_METODO.filter((x) => x.slug !== p.slug)
  const cit = NOTAS.find((n) => n.slug === 'certificado-de-inspeccion-tecnica-cit')
  const codigo = NOTAS.find((n) => n.slug === 'asme-v-y-codigo-de-aceptacion')

  const url = `${SITE.url}/servicios/${p.slug}/`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#servicio`,
        name: p.servicio,
        serviceType: m.nombre,
        description: p.descripcion,
        url,
        provider: { '@id': `${SITE.url}/#organizacion` },
        areaServed: { '@type': 'Country', name: 'Chile' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE.url}/servicios/` },
          { '@type': 'ListItem', position: 3, name: p.servicio, item: url },
        ],
      },
    ],
  }

  const filas = [
    { t: 'Qué detecta', d: m.detecta },
    { t: 'Cuándo conviene', d: p.conviene },
    { t: 'Ten en cuenta', d: `${m.cuidado} ${p.limites}` },
    { t: 'Dónde se usa', d: p.usos },
  ]

  return (
    <main>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHead
        rail={[`Servicios · ${m.nombre}`, m.code === 'Espesores' ? 'Metrología' : `Ensayo ${m.code}`]}
        title={
          <>
            {p.h1} <em>{p.h1em}</em>
          </>
        }
        lead={p.lead}
        fotoId={p.foto}>
        <FichaMetodo code={m.code} nombre={m.nombre} piezaEj={p.piezaEj} />
      </PageHead>

      <section className='sec' aria-labelledby='titulo-detecta'>
        <div className='w'>
          <div className='rail'>
            <span className='ra'>
              {m.nombre}
              <span className='rs'> · Qué detecta y cuándo conviene</span>
            </span>
            <span>{m.code === 'Espesores' ? 'Metrología' : m.code}</span>
          </div>
          <h2 id='titulo-detecta' className='h-display h2' style={{ marginTop: 24 }}>
            {p.h2} <em>{p.h2em}</em>
          </h2>
          <div className='tabla' style={{ marginTop: 32 }}>
            {filas.map((f) => (
              <div className='tr dos' key={f.t}>
                <h3 className='nom'>{f.t}</h3>
                <p style={{ marginTop: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='sec paper' aria-labelledby='titulo-normas'>
        <div className='w'>
          <div className='rail'>
            <span className='ra'>
              Normas<span className='rs'> · Referencias habituales</span>
            </span>
            <span>{p.normas.length} referencias</span>
          </div>
          <div className='sec-head'>
            <h2 id='titulo-normas' className='h-display h2'>
              La norma la pone tu proyecto, <em>no el método.</em>
            </h2>
            <p className='lead'>
              Estas son las referencias que más se usan para {m.nombre.toLowerCase()}. Antes del ensayo
              acordamos cuál aplica y con qué criterio de aceptación.
            </p>
          </div>
          <div className='tabla' style={{ marginTop: 32 }}>
            {p.normas.map((n) => (
              <div className='tr dos' key={n.codigo}>
                <h3 className='nom norma'>{n.codigo}</h3>
                <p style={{ marginTop: 0 }}>{n.cubre}</p>
              </div>
            ))}
          </div>
          {codigo && (
            <p className='nota-link'>
              <Link href={`/notas/${codigo.slug}/`}>Nota técnica: {codigo.titulo}</Link>
            </p>
          )}
        </div>
      </section>

      <section className='sec' aria-labelledby='titulo-recibes'>
        <div className='w'>
          <div className='rail'>
            <span className='ra'>
              Qué recibes<span className='rs'> · De la visita al certificado</span>
            </span>
            <span>{PASOS.length} pasos</span>
          </div>
          <div className='sec-head'>
            <h2 id='titulo-recibes' className='h-display h2'>
              Un informe que dice <em>si la pieza pasa.</em>
            </h2>
            <p className='lead'>
              Con la norma, el procedimiento y el criterio de aceptación escritos, y las fotos de terreno
              asociadas a la orden.
            </p>
          </div>
          <ol className='ruta'>
            {PASOS.map((s, i) => (
              <li key={s.t}>
                <span className='paso'>Paso {i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
          {cit && (
            <Link href={`/notas/${cit.slug}/`} className='btn ghost' style={{ marginTop: 32 }}>
              Qué tiene que responder el certificado
              <Ic name='arrow' />
            </Link>
          )}
        </div>
      </section>

      <section className='sec paper' aria-labelledby='titulo-notas-metodo'>
        <div className='w'>
          <div className='rail'>
            <span className='ra'>
              Notas técnicas<span className='rs'> · {delMetodo.length > 0 ? m.nombre : 'Antes del ensayo'}</span>
            </span>
            <span>
              {notas.length} {notas.length === 1 ? 'nota' : 'notas'}
            </span>
          </div>
          <h2 id='titulo-notas-metodo' className='h-display h2' style={{ marginTop: 24 }}>
            {delMetodo.length > 0 ? (
              <>
                {m.nombre}, <em>explicado por quienes inspeccionan.</em>
              </>
            ) : (
              <>
                Lo que conviene saber <em>antes de pedir el ensayo.</em>
              </>
            )}
          </h2>
          <nav className='notas-lista' aria-label={`Notas técnicas sobre ${m.nombre.toLowerCase()}`}>
            {notas.map((n) => (
              <Link key={n.slug} href={`/notas/${n.slug}/`}>
                <span className='f'>{fechaCorta(n.fecha)}</span>
                <span className='p'>{n.pilar}</span>
                <span className='t'>{n.titulo}</span>
                <Ic name='arrow' />
              </Link>
            ))}
          </nav>

          <nav className='otros-metodos' aria-label='Otros métodos'>
            <span className='lab'>Otros métodos</span>
            <div className='chips'>
              {otros.map((o) => {
                const om = METODOS.find((x) => x.code === o.code)
                return (
                  <Link key={o.slug} href={`/servicios/${o.slug}/`} className='chip'>
                    {om?.nombre ?? o.code}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </section>

      <Contacto />
    </main>
  )
}
