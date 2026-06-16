import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import TimeLine from '@/components/Home/timeline'
import Work from '@/components/Home/work'
import Contacto from '@/components/Home/contacto'
import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Servicios - INSTEC | Ensayos No Destructivos, Metrología e Inspecciones',
  description: 'Servicios completos: ensayos no destructivos, metrología, metodología de inspección, ultrasonido, radiografía industrial y más. +30 años de experiencia.',
  path: '/servicios',
})

export default function ServiciosPage() {
  return (
    <main>
      <HeroSub 
        title="Nuestros Servicios Integrales"
        subtitle="Ensayos no destructivos, metrología, metodología de inspección y servicios técnicos especializados"
        breadcrumb="Servicios"
      />
      
      <Work />
      
      {/* Metrología Section */}
      <section className="nicepage-section bg-gradient-to-br from-gray-50 to-[#eef7f1]">
        <div className="nicepage-container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm ring-1 ring-gray-100 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-semibold text-primary">
                Metrología y Mediciones
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>
              Precisión en Cada{' '}
              <span style={{color: 'var(--color-primary)'}}>Medición</span>
            </h2>
            <p className="text-xl text-gray-600">
              Servicios especializados en mediciones de precisión y control dimensional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div data-aos="fade-up" className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-100 hover:shadow-xl hover:ring-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Medición de Espesores</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ultrasonido de alta precisión</li>
                <li>• Medición sin daño al material</li>
                <li>• Reportes certificados</li>
                <li>• Trazabilidad completa</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-100 hover:shadow-xl hover:ring-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94C19.73,12.94 20.2,12.47 20.2,11.88C20.2,11.29 19.73,10.82 19.14,10.82C18.55,10.82 18.08,11.29 18.08,11.88C18.08,12.47 18.55,12.94 19.14,12.94Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Control Dimensional</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mediciones tridimensionales</li>
                <li>• Control de tolerancias</li>
                <li>• Certificación ISO</li>
                <li>• Análisis estadístico</li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-gray-100 hover:shadow-xl hover:ring-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,6V4C12,3.45 11.55,3 11,3H5C4.45,3 4,3.45 4,4V6C4,6.55 4.45,7 5,7H11C11.55,7 12,6.55 12,6Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Calibración de Equipos</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Calibración certificada</li>
                <li>• Trazabilidad internacional</li>
                <li>• Mantenimiento preventivo</li>
                <li>• Documentación completa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología de Inspección Section */}
      <section className="nicepage-section bg-gradient-to-br from-green-50 to-teal-50">
        <div className="nicepage-container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-600">
                Metodología de Inspección
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>
              Protocolos{' '}
              <span style={{color: 'var(--color-primary)'}}>Certificados</span>
            </h2>
            <p className="text-xl text-gray-600">
              Metodologías estandarizadas y procedimientos certificados para inspecciones técnicas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Planificación y Análisis</h3>
                    <p className="text-gray-600">Evaluación detallada de requisitos técnicos y selección de metodologías apropiadas.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Preparación y Setup</h3>
                    <p className="text-gray-600">Preparación de equipos, calibración de instrumentos y configuración del área de trabajo.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ejecución de Inspección</h3>
                    <p className="text-gray-600">Aplicación de técnicas NDT siguiendo estándares internacionales y protocolos certificados.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Análisis y Reporte</h3>
                    <p className="text-gray-600">Evaluación de resultados, análisis técnico y elaboración de reportes certificados.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-teal-600/90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Certificaciones</h3>
                    <div className="space-y-2 text-lg">
                      <p>• ASME Sección V</p>
                      <p>• ASTM Standards</p>
                      <p>• ISO 9712</p>
                      <p>• AWS D1.1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TimeLine />
      <Contacto />
    </main>
  )
}