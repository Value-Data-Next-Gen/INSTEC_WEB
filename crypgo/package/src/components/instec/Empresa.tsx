import Link from 'next/link'
import {
  MISION,
  POLITICA_AREAS,
  POLITICA_FIRMA,
  POLITICA_INTRO,
  POLITICA_REVISION,
  VALORES,
  VISION,
} from '@/content/empresa'
import { BROCHURE_PDF } from '@/lib/site'
import { TrackedLink } from './Tracked'
import { Ic } from './Icons'

/** Misión y visión como fichas oscuras con borde verde, y los valores en una regla. */
export const MisionVision = () => (
  <section id='mision' className='sec' aria-labelledby='titulo-mision'>
    <div className='w'>
      <div className='rail'>
        <span className='ra'>
          Empresa<span className='rs'> · Misión, visión y valores</span>
        </span>
        <span>{VALORES.length} valores</span>
      </div>
      <h2 id='titulo-mision' className='h-display h2'>
        Para qué existe INSTEC <em>y cómo trabajamos.</em>
      </h2>
      <div className='mv-fichas'>
        <article className='mv-ficha'>
          <span className='mv-k'>Misión</span>
          <p>{MISION}</p>
        </article>
        <article className='mv-ficha'>
          <span className='mv-k'>Visión</span>
          <p>{VISION}</p>
        </article>
      </div>
      <dl className='valores-regla'>
        {VALORES.map((v, k) => (
          <div key={v.t}>
            <dt>
              <span className='n'>{String(k + 1).padStart(2, '0')}</span>
              {v.t}
            </dt>
            <dd>{v.d}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
)

/** Política integrada por área, como documento con firma. */
export const Politica = () => (
  <section id='politica' className='sec paper' aria-labelledby='titulo-politica'>
    <div className='w'>
      <div className='rail'>
        <span className='ra'>
          Política<span className='rs'> · Calidad, SSO y medio ambiente</span>
        </span>
        <span>{POLITICA_AREAS.reduce((n, a) => n + a.items.length, 0)} compromisos</span>
      </div>
      <div className='sec-head'>
        <h2 id='titulo-politica' className='h-display h2'>
          Política de calidad, <em>SSO y medio ambiente.</em>
        </h2>
        <p className='lead'>{POLITICA_INTRO}</p>
      </div>
      <div className='pol-doc'>
        {POLITICA_AREAS.map((a) => (
          <section key={a.area} className='pol-area' aria-label={a.area}>
            <h3>{a.area}</h3>
            <ul>
              {a.items.map((i) => (
                <li key={i}>
                  <Ic name='check' />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <footer className='pol-firma'>
          <b>{POLITICA_FIRMA}</b>
          <span>{POLITICA_REVISION}</span>
          <TrackedLink
            href={BROCHURE_PDF}
            label='brochure_pdf'
            donde='politica'
            className='btn ghost sm'>
            <Ic name='download' />
            Descargar en el brochure (PDF)
          </TrackedLink>
        </footer>
      </div>
    </div>
  </section>
)

/** Franja de descarga del brochure corporativo. */
export const BrochureBanda = ({ donde }: { donde: string }) => (
  <section className='sec night' aria-labelledby='titulo-brochure'>
    <div className='w'>
      <div className='rail'>
        <span className='ra'>
          Brochure<span className='rs'> · PDF para compartir</span>
        </span>
        <span>10 páginas</span>
      </div>
      <div className='sec-head'>
        <h2 id='titulo-brochure' className='h-display h2'>
          INSTEC en un documento: <em>servicios, normas, terreno y política.</em>
        </h2>
        <div>
          <p className='lead'>
            Para registrar a INSTEC como proveedor o para mostrarlo a tu equipo: métodos, normas de
            referencia, fotos de terreno, cómo trabajamos, clientes y la política integrada.
          </p>
          <div className='bb-acc'>
            <TrackedLink href={BROCHURE_PDF} label='brochure_pdf' donde={donde} className='btn'>
              <Ic name='download' />
              Descargar brochure (PDF)
            </TrackedLink>
            <Link className='btn ghost' href='/brochure/'>
              Verlo en el navegador
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)
