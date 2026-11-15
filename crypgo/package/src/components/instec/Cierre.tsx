import Link from 'next/link'
import { NOTAS } from '@/content/notas'
import { APP_URL } from '@/lib/appUrl'
import { SITE } from '@/lib/site'
import { mailtoCotizacion } from '@/lib/cotizacion'
import { CotizarWhatsApp, TrackedLink } from './Tracked'
import { Ic } from './Icons'

/** Clientes confirmados (2026-11-13). */
export const CLIENTES = ['ANDRITZ', 'Revesol', 'Maestranza Diesel']

const fechaCorta = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' })

export const Clientes = () => (
  <section className='sec' aria-labelledby='titulo-clientes' style={{ paddingBottom: 0 }}>
    <div className='w'>
      <div className='rail'>
        <span className='ra'>Clientes<span className='rs'> · Trabajan con INSTEC</span></span>
        <span>14+ clientes</span>
      </div>
      <h2 id='titulo-clientes' className='sr-only'>
        Clientes
      </h2>
      <div className='clientes'>
        {CLIENTES.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <p className='lead' style={{ marginTop: 18 }}>
        Más de 30 años y más de 500 proyectos de inspección en metalmecánica, maestranzas y equipos
        industriales.
      </p>
    </div>
  </section>
)

export const NotasRecientes = ({ max = 5 }: { max?: number }) => (
  <section className='sec' aria-labelledby='titulo-notas'>
    <div className='w'>
      <div className='rail'>
        <span className='ra'>Notas técnicas<span className='rs'> · Publicadas en LinkedIn</span></span>
        <span>{NOTAS.length} notas</span>
      </div>
      <div className='sec-head'>
        <h2 id='titulo-notas' className='h-display h2'>
          Norma y método, <em>explicados por quienes inspeccionan.</em>
        </h2>
        <p className='lead'>
          Cada semana publicamos una norma explicada, un método, un defecto y cómo trabajamos. Acá
          quedan completas.
        </p>
      </div>
      <nav className='notas-lista' aria-label='Notas técnicas recientes'>
        {NOTAS.slice(0, max).map((n) => (
          <Link key={n.slug} href={`/notas/${n.slug}/`}>
            <span className='f'>{fechaCorta(n.fecha)}</span>
            <span className='p'>{n.pilar}</span>
            <span className='t'>{n.titulo}</span>
            <Ic name='arrow' />
          </Link>
        ))}
      </nav>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
        <Link href='/notas/' className='btn'>
          Ver las {NOTAS.length} notas técnicas
          <Ic name='arrow' />
        </Link>
        <TrackedLink href={SITE.social.linkedin} label='linkedin_seguir' donde='notas_home' className='btn ghost' external>
          <Ic name='linkedin' />
          Seguir a INSTEC en LinkedIn
        </TrackedLink>
      </div>
    </div>
  </section>
)

export const Contacto = () => (
  <section id='contacto' className='sec night' aria-labelledby='titulo-contacto'>
    <div className='w'>
      <div className='rail'>
        <span className='ra'>Contacto<span className='rs'> · Cotización</span></span>
        <span>Santiago · Chile</span>
      </div>
      <div className='contacto' style={{ marginTop: 28 }}>
        <div>
          <h2 id='titulo-contacto' className='h-display' style={{ fontSize: 'clamp(38px, 4.4vw, 64px)' }}>
            ¿Qué hay que <em>inspeccionar?</em>
          </h2>
          <p className='lead' style={{ marginTop: 18 }}>
            Cuéntanos la pieza, el método si ya lo sabes y dónde está. Te contactamos para definir el
            alcance y la cotización.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
            <CotizarWhatsApp donde='contacto' solicitud={{}}>
              Escribir por WhatsApp
            </CotizarWhatsApp>
            <a className='btn ghost' href={mailtoCotizacion({})}>
              <Ic name='mail' />
              Escribir un correo
            </a>
          </div>
        </div>
        <div className='datos'>
          <CotizarWhatsApp donde='contacto_datos' className='' solicitud={{}}>
            <span className='lab'>WhatsApp</span>
            <span>{SITE.contact.phonePrimary}</span>
          </CotizarWhatsApp>
          <a href={`tel:${SITE.contact.phoneSecondary.replace(/\s/g, '')}`}>
            <span className='lab'>Teléfono</span>
            <span>{SITE.contact.phoneSecondary}</span>
          </a>
          <a href={`mailto:${SITE.contact.email}`}>
            <span className='lab'>Correo</span>
            <span>{SITE.contact.email}</span>
          </a>
          <div>
            <span className='lab'>Ubicación</span>
            <span>{SITE.contact.address}</span>
          </div>
          <TrackedLink href={APP_URL} label='portal_clientes' donde='contacto' external>
            <span className='lab'>Clientes</span>
            <span>Portal de certificados →</span>
          </TrackedLink>
          <TrackedLink href={SITE.social.linkedin} label='linkedin' donde='contacto' external>
            <span className='lab'>LinkedIn</span>
            <span>INSTEC LTDA →</span>
          </TrackedLink>
        </div>
      </div>
    </div>
  </section>
)
