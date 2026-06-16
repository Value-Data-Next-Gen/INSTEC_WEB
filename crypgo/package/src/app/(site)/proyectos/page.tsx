import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import Trabajos from '@/components/Home/trabajos'
import Clientes from '@/components/Home/clientes'
import Contacto from '@/components/Home/contacto'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Proyectos y Clientes - INSTEC | Portfolio y Casos de Éxito',
  description: 'Portfolio completo de proyectos, trabajos realizados y clientes satisfechos en inspección técnica y ensayos no destructivos. +30 años de experiencia.',
  path: '/proyectos',
})

export default function ProyectosPage() {
  return (
    <main>
      <HeroSub 
        title="Proyectos y Clientes"
        subtitle="Portfolio completo de trabajos realizados y clientes satisfechos en más de 30 años de experiencia"
        breadcrumb="Proyectos y Clientes"
      />
      
      {/* Portfolio Section */}
      <section className="nicepage-section">
        <div className="nicepage-container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">
                Portfolio de Trabajos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>
              Casos de{' '}
              <span style={{color: 'var(--color-primary)'}}>Éxito</span>
            </h2>
            <p className="text-xl text-gray-600">
              Más de 500 proyectos completados exitosamente en diversas industrias
            </p>
          </div>
        </div>
      </section>

      <Trabajos />
      
      {/* Clientes Section with enhanced design */}
      <section className="nicepage-section bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="nicepage-container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-secondary">
                Clientes Satisfechos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>
              Empresas que{' '}
              <span style={{color: 'var(--color-primary)'}}>Confían</span> en Nosotros
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con las principales empresas del sector industrial
            </p>
          </div>
        </div>
      </section>

      <Clientes />

      {/* Statistics Section */}
      <section className="nicepage-section bg-primary text-white">
        <div className="nicepage-container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Proyectos Completados</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Clientes Satisfechos</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <div className="text-lg opacity-90">Años de Experiencia</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-lg opacity-90">Métodos NDT</div>
            </div>
          </div>
        </div>
      </section>

      <Contacto />
    </main>
  )
}