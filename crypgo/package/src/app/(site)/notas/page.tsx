import type { Metadata } from 'next'
import Link from 'next/link'
import { NOTAS, type Pilar } from '@/content/notas'
import { pageMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'
import { Ic } from '@/components/instec/Icons'
import { TrackedLink } from '@/components/instec/Tracked'
import { Contacto } from '@/components/instec/Cierre'

export const metadata: Metadata = pageMetadata({
  title: 'Notas técnicas de ensayos no destructivos',
  description:
    'ISO 9712, ASME V, ISO 5817, ultrasonido, radiografía, partículas magnéticas, tintas penetrantes y defectos de soldadura, explicados por inspectores de INSTEC.',
  path: '/notas/',
})

const PILARES: Pilar[] = ['Norma explicada', 'Método', 'Defecto de la semana', 'Cómo trabajamos']

const fecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' })

export default function NotasPage() {
  return (
    <main>
      <section className='sec paper' style={{ paddingBottom: 48 }}>
        <div className='w'>
          <div className='rail'>
            <span className='ra'>Notas técnicas<span className='rs'> · Publicadas en LinkedIn</span></span>
            <span>{NOTAS.length} notas</span>
          </div>
          <div className='sec-head'>
            <h1 className='h-display' style={{ fontSize: 'clamp(40px, 4.6vw, 68px)', marginTop: 24 }}>
              Norma y método, <em>explicados por quienes inspeccionan.</em>
            </h1>
            <div>
              <p className='lead'>
                Lo que publicamos en LinkedIn, completo y ordenado: normas explicadas, métodos, el defecto
                de la semana y cómo trabajamos.
              </p>
              <TrackedLink
                href={SITE.social.linkedin}
                label='linkedin_seguir'
                donde='notas_indice'
                className='btn ghost sm'
                external>
                <Ic name='linkedin' />
                Seguir en LinkedIn
              </TrackedLink>
            </div>
          </div>
          <nav aria-label='Pilares' style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
            {PILARES.map((p) => (
              <a key={p} className='chip' href={`#${p.toLowerCase().replace(/\s+/g, '-')}`}>
                {p} · {NOTAS.filter((n) => n.pilar === p).length}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className='sec' style={{ paddingTop: 24 }}>
        <div className='w'>
          {PILARES.map((p) => {
            const lista = NOTAS.filter((n) => n.pilar === p)
            if (!lista.length) return null
            return (
              <div key={p} id={p.toLowerCase().replace(/\s+/g, '-')} style={{ marginTop: 48 }}>
                <h2 className='lab' style={{ fontSize: 13 }}>
                  {p}
                </h2>
                <ul className='notas-idx'>
                  {lista.map((n) => (
                    <li key={n.slug}>
                      <Link href={`/notas/${n.slug}/`}>
                        <img src={n.portada} alt='' loading='lazy' width={90} height={112} />
                        <span className='meta'>
                          <span className='f'>{fecha(n.fecha)}</span>
                          <span className='t'>{n.titulo}</span>
                          <span className='d'>{n.descripcion}</span>
                          {(n.metodos.length > 0 || n.normas.length > 0) && (
                            <span className='tags'>
                              {[...n.metodos, ...n.normas].map((x) => (
                                <span key={x}>{x}</span>
                              ))}
                            </span>
                          )}
                        </span>
                        <Ic name='arrow' />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
      <Contacto />
    </main>
  )
}
