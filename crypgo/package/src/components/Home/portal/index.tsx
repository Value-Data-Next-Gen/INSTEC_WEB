'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { APP_URL } from '@/lib/appUrl'

const features = [
  {
    title: 'Seguimiento de órdenes',
    description:
      'Revisa el estado de tus órdenes de trabajo en tiempo real, desde el ingreso hasta la entrega del informe.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Informes y certificados (CIT)',
    description:
      'Descarga tus informes técnicos y Certificados de Inspección Técnica en PDF cuando los necesites.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Estado de pagos',
    description:
      'Consulta en línea el estado de tus pagos, facturas y documentos asociados a cada servicio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
]

const Portal = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="nicepage-section nicepage-bg-pattern" id="portal">
      <div className="nicepage-container">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
                Portal de <span style={{ color: 'var(--color-primary)' }} className="font-bold">Clientes</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Toda tu información{' '}
              <span className="relative">
                <span style={{ color: 'var(--color-primary)' }}>en línea</span>
                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
                  <path d="M5 6C50 1 150 1 295 6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30" />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Desde nuestro portal puedes <strong style={{ color: 'var(--color-text-primary)' }}>seguir tus órdenes de trabajo</strong>,
              descargar informes y certificados, y revisar el estado de tus pagos en cualquier momento.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                animate={inView ? { y: 0, opacity: 1, scale: 1 } : { y: 60, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="nicepage-card group text-center space-y-6"
              >
                <div className="nicepage-icon-large mx-auto">{feature.icon}</div>
                <div className="space-y-3">
                  <h3
                    className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="nicepage-text">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="nicepage-card-feature max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  Accede al portal de clientes INSTEC
                </h3>
                <p className="nicepage-text text-lg">
                  Ingresa con tus credenciales para gestionar tus órdenes, descargar tus
                  certificados y consultar el estado de tus pagos de forma segura.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener"
                    className="nicepage-btn nicepage-btn-primary nicepage-btn-large inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Acceder al portal
                  </a>
                  <a href="#contacto" className="nicepage-btn nicepage-btn-secondary nicepage-btn-large">
                    ¿Necesitas ayuda?
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portal
