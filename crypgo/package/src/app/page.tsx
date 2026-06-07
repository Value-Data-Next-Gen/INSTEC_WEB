import React from 'react'
import Hero from '@/components/Home/Hero'
import NosotrosCompact from '@/components/Home/nosotros/compact'
import Work from '@/components/Home/work'
import Portal from '@/components/Home/portal'
import Clientes from '@/components/Home/clientes'
import Contacto from '@/components/Home/contacto'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'INSTEC - Ingeniería e Inspecciones Técnicas | Ensayos No Destructivos',
  description: 'Más de 30 años ofreciendo servicios de inspección técnica, ensayos no destructivos y control de calidad en Chile. Ultrasonido, radiografía, partículas magnéticas y más.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <NosotrosCompact />
      <Work />
      <Portal />
      <Clientes />
      <Contacto />
    </main>
  )
}
