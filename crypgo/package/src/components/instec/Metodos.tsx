import Link from 'next/link'
import { METODOS } from '@/lib/metodos'
import { NOTAS } from '@/content/notas'
import { CotizarWhatsApp } from './Tracked'

// Nota técnica que explica mejor cada método (si existe).
const NOTA_POR_METODO: Record<string, string> = {
  UT: 'como-ve-un-ultrasonido-una-falla',
  RT: 'radiografia-o-ultrasonido',
  MT: 'particulas-magneticas',
  PT: 'tintas-penetrantes-en-6-pasos',
  VT: 'socavacion-en-soldadura',
}

const Metodos = () => (
  <section id='metodos' className='sec' aria-labelledby='titulo-metodos'>
    <div className='w'>
      <div className='rail'>
        <span>Métodos · Qué detecta cada ensayo</span>
        <span>{METODOS.length} servicios</span>
      </div>
      <div className='sec-head'>
        <h2 id='titulo-metodos' className='h-display h2'>
          Cada ensayo ve una cosa. <em>Elegimos el que responde tu pregunta.</em>
        </h2>
        <p className='lead'>
          Se elige según el defecto que más preocupa, el espesor, el acceso y lo que pide el código.
          Si no sabes cuál pedir, te asesoramos.
        </p>
      </div>

      <div className='tabla' role='table' aria-label='Métodos de ensayo'>
        <div className='tr th' role='row'>
          <span role='columnheader'>Método</span>
          <span role='columnheader'>Qué detecta</span>
          <span role='columnheader'>Ten en cuenta</span>
          <span role='columnheader' className='sr-only'>
            Cotizar
          </span>
        </div>
        {METODOS.map((m) => {
          const nota = NOTAS.find((n) => n.slug === NOTA_POR_METODO[m.code])
          return (
            <div className='tr' role='row' key={m.code}>
              <span role='cell' className={`code${m.code.length > 3 ? ' long' : ''}`}>
                {m.code}
              </span>
              <div role='cell'>
                <h3 className='nom'>{m.nombre}</h3>
                <p>{m.detecta}</p>
                {nota && (
                  <p style={{ marginTop: 8 }}>
                    <Link href={`/notas/${nota.slug}/`} style={{ color: 'var(--g7)', fontWeight: 700 }}>
                      Nota técnica: {nota.titulo}
                    </Link>
                  </p>
                )}
              </div>
              <p role='cell' className='cuidado'>
                {m.cuidado}
              </p>
              <div role='cell' className='go'>
                <CotizarWhatsApp
                  className='btn ghost sm'
                  donde='tabla_metodos'
                  solicitud={{ metodo: m.code, nombreMetodo: m.nombre }}>
                  Cotizar {m.code === 'Espesores' ? 'medición' : m.code}
                </CotizarWhatsApp>
              </div>
            </div>
          )
        })}
      </div>

      <p className='otros'>
        <span>
          También: <b>control de calidad y asesorías</b> en normas ASME, ASTM, AWS e ISO
        </span>
        <span>
          <b>auditorías</b>
        </span>
        <span>
          <b>capacitación</b> de equipos de calidad
        </span>
      </p>
    </div>
  </section>
)

export default Metodos
