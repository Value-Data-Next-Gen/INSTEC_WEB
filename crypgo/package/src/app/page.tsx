import React from 'react'
import Hero from '@/components/Home/Hero'
import NosotrosCompact from '@/components/Home/nosotros/compact'
import Work from '@/components/Home/work'
import Galeria from '@/components/Home/galeria'
import Portal from '@/components/Home/portal'
import Clientes from '@/components/Home/clientes'
import Contacto from '@/components/Home/contacto'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'INSTEC - Ingeniería e Inspecciones Técnicas | Ensayos No Destructivos',
  description: 'Más de 30 años ofreciendo servicios de inspección técnica, ensayos no destructivos y control de calidad en Chile. Ultrasonido, radiografía, partículas magnéticas y más.',
  path: '/',
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Galeria />
      <Clientes />
      <NosotrosCompact />
      <Portal />
      <Contacto />
    </main>
  )
}
