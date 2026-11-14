import Link from 'next/link'
import { NOTAS } from '@/content/notas'
import { Ic } from './Icons'

const PASOS = [
  {
    t: 'Visita previa',
    d: 'Evaluamos en terreno y definimos el alcance, el procedimiento y el criterio de aceptación.',
  },
  {
    t: 'Ejecución de ensayos',
    d: 'Aplicamos el método según las normas ASME y ASTM, con personal certificado.',
  },
  {
    t: 'Informe y certificado',
    d: 'Resultados, interpretación y recomendaciones, con las fotos de terreno asociadas a la orden.',
  },
  {
    t: 'Seguimiento',
    d: 'Entrega formal, explicación de resultados y soporte después de la inspección.',
  },
]

const cit = NOTAS.find((n) => n.slug === 'certificado-de-inspeccion-tecnica-cit')
const PREGUNTAS = cit?.secciones.find((s) => s.lista)?.lista ?? []

const Proceso = () => (
  <section id='proceso' className='sec paper' aria-labelledby='titulo-proceso'>
    <div className='w'>
      <div className='rail'>
        <span className='ra'>Cómo trabajamos<span className='rs'> · De la visita al certificado</span></span>
        <span>{PASOS.length} pasos</span>
      </div>
      <div className='sec-head'>
        <h2 id='titulo-proceso' className='h-display h2'>
          Un informe sin norma ni criterio <em>no dice si la pieza pasa.</em>
        </h2>
        <p className='lead'>
          Por eso el criterio se acuerda antes de llegar a terreno. Si se acuerda después del ensayo,
          lo que se negocia es el resultado.
        </p>
      </div>

      <ol className='ruta'>
        {PASOS.map((p, i) => (
          <li key={p.t}>
            <span className='paso'>Paso {i + 1}</span>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </li>
        ))}
      </ol>

      {PREGUNTAS.length > 0 && (
        <div className='cit'>
          <div>
            <h3 className='h-display'>
              El certificado responde lo que tu mandante <em>va a preguntar.</em>
            </h3>
            <p className='lead' style={{ marginTop: 16 }}>
              En INSTEC el certificado de inspección técnica (CIT) sale digital: la foto de terreno queda
              asociada a la orden de trabajo, y el inspector revisa y firma antes de emitirlo en PDF.
            </p>
            {cit && (
              <Link href={`/notas/${cit.slug}/`} className='btn ghost' style={{ marginTop: 24 }}>
                Las 8 preguntas, explicadas
                <Ic name='arrow' />
              </Link>
            )}
          </div>
          <div className='cit-hoja' aria-label='Qué responde un certificado de inspección técnica'>
            <div className='top'>
              <span>CIT · Certificado de inspección técnica</span>
              <span>{PREGUNTAS.length} campos</span>
            </div>
            <ul style={{ margin: 0, padding: 0 }}>
              {PREGUNTAS.map((q) => (
                <li key={q}>
                  <Ic name='check' />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  </section>
)

export default Proceso
