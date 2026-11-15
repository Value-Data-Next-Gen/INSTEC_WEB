import type { Metadata } from 'next'
import '@/styles/brochure.css'
import { METODOS } from '@/lib/metodos'
import { PAGINAS_METODO } from '@/content/metodos-paginas'
import { FOTOS } from '@/lib/terreno'
import { SITE } from '@/lib/site'
import {
  MISION,
  POLITICA_AREAS,
  POLITICA_FIRMA,
  POLITICA_INTRO,
  POLITICA_REVISION,
  VALORES,
  VISION,
} from '@/content/empresa'
import { PASOS } from '@/components/instec/Proceso'
import { CLIENTES } from '@/components/instec/Cierre'

/**
 * Brochure corporativo de INSTEC: 10 páginas de 1280 × 720 px que se imprimen a PDF con
 * `npm run brochure` (scripts/brochure-pdf.js). Formato de los brochures de Value Data
 * (barra superior, etiqueta de sección, títulos grandes, tarjetas con cifras y número de
 * página) con el sistema visual de INSTEC. Mismos datos que el sitio.
 */
export const metadata: Metadata = {
  title: 'Brochure corporativo',
  description:
    'Brochure corporativo de INSTEC Ltda.: servicios de ensayos no destructivos, normas, fotos de terreno, cómo trabajamos, clientes y política integrada.',
  robots: { index: false, follow: false },
}

const TOTAL = 10
/** JPEG livianos solo para el PDF (public/brochure/img/). */
const img = (id: string) => `/brochure/img/${id}.jpg`
const foto = (id: string) => FOTOS.find((f) => f.id === id)!
const pagina = (code: string) => PAGINAS_METODO.find((p) => p.code === code)

/** Cifras confirmadas por INSTEC (PRODUCT.md, 2026-11-13). */
const CIFRAS = [
  { n: '30+', u: 'años', d: 'de trayectoria en inspección técnica' },
  { n: '500+', u: 'proyectos', d: 'de ensayos y control de calidad' },
  { n: '14+', u: 'clientes activos', d: 'en metalmecánica e industria' },
  { n: '95 %', u: 'satisfacción', d: 'de los clientes' },
]

const Marca = ({ claro = false }: { claro?: boolean }) => (
  <span className={`ib-marca${claro ? ' claro' : ''}`}>
    <b>INSTEC</b>
    <span>LTDA</span>
  </span>
)

const Cab = ({ n, seccion }: { n: number; seccion: string }) => (
  <header className='ib-cab'>
    <Marca />
    <span className='ib-pill'>{seccion}</span>
    <span className='ib-num'>
      {String(n).padStart(2, '0')} / {TOTAL}
    </span>
  </header>
)

const Pie = () => (
  <footer className='ib-pie'>
    <span>INSTEC Ltda. · Ingeniería e Inspecciones Técnicas</span>
    <span>instecltda.cl</span>
  </footer>
)

const Fig = ({ id, className = '' }: { id: string; className?: string }) => {
  const f = foto(id)
  return (
    <figure className={`ib-fig ${className}`}>
      <img src={img(id)} alt='' />
      <figcaption>
        <span className='t'>
          Fig. {f.fig} · {f.tag}
        </span>
      </figcaption>
      <Marca claro />
    </figure>
  )
}

const Ficha = ({ code }: { code: string }) => {
  const m = METODOS.find((x) => x.code === code)!
  const p = pagina(code)
  return (
    <article className='ib-ficha'>
      <div className='ib-ficha-cab'>
        {m.foto && <img src={img(m.foto)} alt='' />}
        <span className='ib-code'>{code === 'Espesores' ? 'ESP' : code}</span>
        <h3>{m.nombre}</h3>
      </div>
      <dl>
        <dt>Qué detecta</dt>
        <dd>{m.detecta}</dd>
        {p && (
          <>
            <dt>Cuándo conviene</dt>
            <dd>{p.conviene}</dd>
          </>
        )}
        <dt>Ten en cuenta</dt>
        <dd>{m.cuidado}</dd>
        {p && (
          <>
            <dt>Normas</dt>
            <dd className='ib-normas'>
              {p.normas.map((n) => (
                <span key={n.codigo}>{n.codigo}</span>
              ))}
            </dd>
          </>
        )}
      </dl>
    </article>
  )
}

export default function BrochurePage() {
  return (
    <main className='brochure ib'>
      {/* 1 · Portada */}
      <section className='pg ib-portada'>
        <img className='ib-fondo' src={img('molino-inspeccion')} alt='' />
        <div className='ib-portada-in'>
          <Marca claro />
          <span className='ib-pill oscuro'>Brochure corporativo · Ensayos no destructivos</span>
          <h1>
            Inspección con norma, método y <em>criterio de aceptación.</em>
          </h1>
          <p>
            Ensayos no destructivos, inspección técnica, metrología y control de calidad para
            metalmecánica, maestranzas, minería y energía. En terreno y en taller, desde Santiago.
          </p>
        </div>
        <ul className='ib-cifras'>
          {CIFRAS.map((c) => (
            <li key={c.u}>
              <b>{c.n}</b>
              <span className='u'>{c.u}</span>
              <span className='d'>{c.d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 2 · Empresa */}
      <section className='pg'>
        <Cab n={2} seccion='Empresa' />
        <h2 className='ib-h2'>
          Para qué existe INSTEC <em>y cómo trabajamos.</em>
        </h2>
        <div className='ib-empresa'>
          <div className='ib-mv'>
            <div className='ib-oscura'>
              <span className='ib-k'>Misión</span>
              <p>{MISION}</p>
            </div>
            <div className='ib-oscura'>
              <span className='ib-k'>Visión</span>
              <p>{VISION}</p>
            </div>
          </div>
          <dl className='ib-datos'>
            <dt>Razón social</dt>
            <dd>INSTEC Ltda. · Ingeniería e Inspecciones Técnicas</dd>
            <dt>Base</dt>
            <dd>{SITE.contact.address}</dd>
            <dt>Personal</dt>
            <dd>Inspectores certificados ISO 9712</dd>
            <dt>Modalidad</dt>
            <dd>Terreno y taller</dd>
          </dl>
        </div>
        <ul className='ib-valores'>
          {VALORES.map((v, k) => (
            <li key={v.t}>
              <span className='n'>{String(k + 1).padStart(2, '0')}</span>
              <b>{v.t}</b>
              <span>{v.d}</span>
            </li>
          ))}
        </ul>
        <Pie />
      </section>

      {/* 3 · Servicios */}
      <section className='pg'>
        <Cab n={3} seccion='Servicios' />
        <h2 className='ib-h2'>
          Siete métodos de ensayo <em>y el control de calidad que los rodea.</em>
        </h2>
        <div className='ib-servicios'>
          <ul className='ib-lista'>
            {METODOS.map((m) => (
              <li key={m.code}>
                <span className='ib-code'>{m.code === 'Espesores' ? 'ESP' : m.code}</span>
                <b>{m.nombre}</b>
                <span>{m.detecta}</span>
              </li>
            ))}
          </ul>
          <div className='ib-otros'>
            <div className='ib-oscura'>
              <span className='ib-k'>Además</span>
              <ul>
                <li>
                  <b>Control de calidad y asesorías</b> en normas ASME, ASTM, AWS e ISO.
                </li>
                <li>
                  <b>Auditorías</b> de calidad y <b>capacitación</b> de equipos.
                </li>
                <li>
                  <b>Metrología:</b> espesores, control dimensional y evaluación estructural.
                </li>
              </ul>
            </div>
            <Fig id='ultrasonido-omniscan' className='ib-fig-serv' />
          </div>
        </div>
        <Pie />
      </section>

      {/* 4–5 · Fichas técnicas */}
      {[
        ['UT', 'RT', 'MT', 'PT'],
        ['VT', 'ET', 'Espesores'],
      ].map((grupo, g) => (
        <section className='pg' key={g}>
          <Cab n={4 + g} seccion={`Ficha técnica · ${g + 1} de 2`} />
          <h2 className='ib-h2'>
            {g === 0 ? (
              <>
                Qué ve cada ensayo, <em>cuándo conviene y con qué norma.</em>
              </>
            ) : (
              <>
                Superficie, conductores <em>y espesores.</em>
              </>
            )}
          </h2>
          <div className={`ib-fichas n${grupo.length}`}>
            {grupo.map((c) => (
              <Ficha key={c} code={c} />
            ))}
          </div>
          <Pie />
        </section>
      ))}

      {/* 6 · Terreno */}
      <section className='pg'>
        <Cab n={6} seccion='Terreno y taller' />
        <h2 className='ib-h2'>
          Fotos reales <em>de trabajos de INSTEC.</em>
        </h2>
        <div className='ib-galeria'>
          <Fig id='molino-inspeccion' className='g-a' />
          <Fig id='particulas-magneticas-turbina' className='g-b' />
          <Fig id='rodete-francis' className='g-c' />
          <Fig id='ultrasonido-rodete' className='g-d' />
          <Fig id='inspeccion-terreno' className='g-e' />
          <Fig id='tambor-taller' className='g-f' />
        </div>
        <Pie />
      </section>

      {/* 7 · Cómo trabajamos */}
      <section className='pg'>
        <Cab n={7} seccion='Cómo trabajamos' />
        <h2 className='ib-h2'>
          De la visita previa <em>al certificado.</em>
        </h2>
        <ol className='ib-ruta'>
          {PASOS.map((p, k) => (
            <li key={p.t}>
              <span className='n'>Paso {String(k + 1).padStart(2, '0')}</span>
              <b>{p.t}</b>
              <span>{p.d}</span>
            </li>
          ))}
        </ol>
        <div className='ib-entrega'>
          <Fig id='particulas-magneticas-yugo' />
          <div className='ib-oscura'>
            <span className='ib-k'>Qué recibes</span>
            <ul className='ib-check'>
              <li>Alcance, procedimiento y criterio de aceptación definidos antes del ensayo.</li>
              <li>Ejecución según las normas ASME y ASTM, con personal certificado.</li>
              <li>Resultados, interpretación y recomendaciones por zona ensayada.</li>
              <li>Fotos de terreno asociadas a la orden de trabajo.</li>
              <li>Entrega formal y explicación de los resultados.</li>
            </ul>
          </div>
        </div>
        <Pie />
      </section>

      {/* 8 · Clientes */}
      <section className='pg'>
        <Cab n={8} seccion='Clientes y trayectoria' />
        <h2 className='ib-h2'>
          Más de 30 años <em>inspeccionando para la industria.</em>
        </h2>
        <div className='ib-clientes'>
          <div>
            <span className='ib-lab'>Trabajan con INSTEC</span>
            <ul className='ib-logos'>
              {CLIENTES.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <span className='ib-lab' style={{ marginTop: 26 }}>
              Sectores
            </span>
            <ul className='ib-sectores'>
              {['Metalmecánica', 'Maestranzas', 'Montaje de estructuras', 'Minería', 'Energía'].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <ul className='ib-cifras claro'>
            {CIFRAS.map((c) => (
              <li key={c.u}>
                <b>{c.n}</b>
                <span className='u'>{c.u}</span>
                <span className='d'>{c.d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='ib-tira'>
          <Fig id='ejes-mecanizados' />
          <Fig id='rodete-francis-2' />
          <Fig id='ultrasonido-eje' />
        </div>
        <Pie />
      </section>

      {/* 9 · Política */}
      <section className='pg'>
        <Cab n={9} seccion='Política integrada' />
        <h2 className='ib-h2 sm'>
          Política de calidad, seguridad, <em>salud ocupacional y medio ambiente.</em>
        </h2>
        <p className='ib-intro'>{POLITICA_INTRO}</p>
        <div className='ib-politica'>
          {POLITICA_AREAS.map((a) => (
            <div key={a.area}>
              <span className='ib-lab'>{a.area}</span>
              <ul>
                {a.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className='ib-firma'>
          <b>{POLITICA_FIRMA}</b> {POLITICA_REVISION}
        </p>
        <Pie />
      </section>

      {/* 10 · Contacto */}
      <section className='pg ib-cierre'>
        <img className='ib-fondo' src={img('ultrasonido-barra')} alt='' />
        <div className='ib-cierre-in'>
          <Marca claro />
          <h2>
            Cuéntanos la pieza y la norma. <em>Te cotizamos el ensayo.</em>
          </h2>
          <dl className='ib-contacto'>
            <dt>WhatsApp</dt>
            <dd>{SITE.contact.phonePrimary}</dd>
            <dt>Teléfono</dt>
            <dd>{SITE.contact.phoneSecondary}</dd>
            <dt>Correo</dt>
            <dd>{SITE.contact.email}</dd>
            <dt>Sitio web</dt>
            <dd>instecltda.cl</dd>
            <dt>LinkedIn</dt>
            <dd>linkedin.com/company/instec-ltda</dd>
            <dt>Base</dt>
            <dd>{SITE.contact.address}</dd>
          </dl>
        </div>
        <footer className='ib-pie claro'>
          <span>INSTEC Ltda. · Ingeniería e Inspecciones Técnicas</span>
          <span>
            {TOTAL} / {TOTAL}
          </span>
        </footer>
      </section>
    </main>
  )
}
