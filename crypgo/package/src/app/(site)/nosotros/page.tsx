import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import Nosotros from '@/components/Home/nosotros'
import TimeLine from '@/components/Home/timeline'
import Clientes from '@/components/Home/clientes'
import Contacto from '@/components/Home/contacto'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Nosotros - INSTEC | Más de 30 años de experiencia',
  description: 'Conoce la historia de INSTEC, nuestra trayectoria de más de 30 años en inspección técnica y ensayos no destructivos. Nuestro equipo y valores.',
  path: '/nosotros',
})

export default function NosotrosPage() {
  return (
    <main>
      <HeroSub 
        title="Acerca de Nosotros"
        subtitle="Más de 30 años de experiencia en inspección técnica y ensayos no destructivos, comprometidos con la calidad y la excelencia"
        breadcrumb="Nosotros"
      />
      <Nosotros />
      <TimeLine />
      <Clientes />
      <Contacto />
    </main>
  )
}