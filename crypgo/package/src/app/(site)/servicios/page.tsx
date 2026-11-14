import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import PageHead from '@/components/instec/PageHead'
import Metodos from '@/components/instec/Metodos'
import Proceso from '@/components/instec/Proceso'
import { Contacto } from '@/components/instec/Cierre'
import { CotizarWhatsApp } from '@/components/instec/Tracked'

export const metadata: Metadata = pageMetadata({
  title: 'Servicios: ensayos no destructivos, control de calidad y metrología',
  description:
    'Ultrasonido (incluido phased array), radiografía, partículas magnéticas, tintas penetrantes, corrientes de Eddy, inspección visual, espesores y asesoría en normas ASME, ASTM, AWS e ISO.',
  path: '/servicios/',
})

const OTROS = [
  {
    t: 'Control de calidad y asesorías',
    d: 'Asesoría en normas ASME, ASTM, AWS e ISO: qué ensayo pedir, con qué procedimiento y bajo qué criterio de aceptación.',
  },
  {
    t: 'Auditorías',
    d: 'Auditorías de calidad según la norma o el código que aplica.',
  },
  {
    t: 'Capacitación',
    d: 'Formación para equipos de calidad y mantención en ensayos y normas.',
  },
  {
    t: 'Metrología',
    d: 'Medición de espesores de pared y de recubrimiento, control dimensional y evaluación estructural.',
  },
]

export default function ServiciosPage() {
  return (
    <main>
      <PageHead
        rail={['Servicios · Ficha completa', 'Terreno y taller']}
        title={
          <>
            Ensayos no destructivos, <em>control de calidad y metrología.</em>
          </>
        }
        lead='Seis métodos de ensayo, medición de espesores y asesoría en normas. En terreno o en taller, con inspectores certificados ISO 9712 y certificado con fotos de terreno.'
        fotoId='inspeccion-planta'>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
          <CotizarWhatsApp donde='servicios_head' solicitud={{}}>
            Pedir cotización por WhatsApp
          </CotizarWhatsApp>
          <a className='btn ghost' href='#metodos'>
            Ver métodos
          </a>
        </div>
      </PageHead>

      <Metodos />

      <section className='sec paper' aria-labelledby='titulo-otros' style={{ paddingTop: 0 }}>
        <div className='w'>
          <div className='rail' style={{ paddingTop: 64 }}>
            <span>Además del ensayo</span>
            <span>{OTROS.length} servicios</span>
          </div>
          <h2 id='titulo-otros' className='h-display h2'>
            Antes y después del ensayo, <em>la norma también se trabaja.</em>
          </h2>
          <div className='tabla' style={{ marginTop: 32 }}>
            {OTROS.map((o) => (
              <div className='tr dos' key={o.t}>
                <h3 className='nom'>{o.t}</h3>
                <p style={{ marginTop: 0 }}>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Proceso />
      <Contacto />
    </main>
  )
}
