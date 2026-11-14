import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'
import PageHead from '@/components/instec/PageHead'
import Proceso from '@/components/instec/Proceso'
import { Clientes, Contacto, NotasRecientes } from '@/components/instec/Cierre'

export const metadata: Metadata = pageMetadata({
  title: 'Nosotros: más de 30 años en inspección técnica',
  description:
    'INSTEC Ltda., Ingeniería e Inspecciones Técnicas: más de 30 años y más de 500 proyectos de ensayos no destructivos y control de calidad, desde Santiago.',
  path: '/nosotros/',
})

// Solo datos confirmados (PRODUCT.md, 2026-11-13).
const DATOS: [string, string][] = [
  ['Razón social', 'INSTEC Ltda. · Ingeniería e Inspecciones Técnicas'],
  ['Trayectoria', 'Más de 30 años'],
  ['Proyectos', 'Más de 500'],
  ['Clientes activos', 'Más de 14'],
  ['Satisfacción', '95 % de los clientes'],
  ['Personal', 'Inspectores certificados ISO 9712'],
  ['Entregable', 'Certificado de inspección técnica (CIT) digital, con fotos de terreno'],
  ['Base', SITE.contact.address],
]

export default function NosotrosPage() {
  return (
    <main>
      <PageHead
        rail={['Nosotros · Datos de la empresa', 'Santiago · Chile']}
        title={
          <>
            Inspección técnica, <em>hace más de 30 años.</em>
          </>
        }
        lead='Somos una empresa chilena de ensayos no destructivos y control de calidad para metalmecánica, maestranzas, estructuras y equipos industriales. Trabajamos en terreno y en taller.'
        fotoId='rodete-francis'>
        <dl className='datos-empresa'>
          {DATOS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </PageHead>
      <Proceso />
      <Clientes />
      <NotasRecientes max={3} />
      <Contacto />
    </main>
  )
}
