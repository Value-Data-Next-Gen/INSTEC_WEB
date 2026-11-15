import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import HeroFicha from '@/components/instec/HeroFicha'
import Metodos from '@/components/instec/Metodos'
import Terreno from '@/components/instec/Terreno'
import Proceso from '@/components/instec/Proceso'
import { Clientes, Contacto, NotasRecientes } from '@/components/instec/Cierre'
import { BrochureBanda } from '@/components/instec/Empresa'

export const metadata: Metadata = pageMetadata({
  title: 'Ensayos no destructivos en Chile | INSTEC Ltda.',
  description:
    'Ultrasonido, radiografía, partículas magnéticas, tintas penetrantes y más, con norma y criterio de aceptación. Más de 30 años en terreno y taller. Cotiza por WhatsApp.',
  path: '/',
})

export default function Home() {
  return (
    <main>
      <HeroFicha />
      <Metodos />
      <Terreno />
      <Proceso />
      <Clientes />
      <NotasRecientes />
      <BrochureBanda donde='home' />
      <Contacto />
    </main>
  )
}
