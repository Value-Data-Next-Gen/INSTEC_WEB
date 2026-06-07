'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const NosotrosCompact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="nicepage-section bg-white" id="nosotros">
      <div className="nicepage-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6"
              >
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-primary">
                  Sobre INSTEC
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{color: 'var(--color-text-primary)'}}
              >
                Más de{' '}
                <span className="relative">
                  <span style={{color: 'var(--color-primary)'}}>
                    30 años
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
                    <path d="M5 6C50 1 150 1 295 6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30"/>
                  </svg>
                </span>{' '}
                de excelencia
              </motion.h2>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg leading-relaxed"
                style={{color: 'var(--color-text-secondary)'}}
              >
                INSTEC es una empresa líder en <strong>inspección técnica</strong> y{' '}
                <strong>ensayos no destructivos</strong>, comprometida con la calidad y la seguridad 
                industrial desde hace más de tres décadas.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm font-medium text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm font-medium text-gray-600">Proyectos completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm font-medium text-gray-600">Certificado</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <img
                src="/images/documentation/ndt-particulas-magneticas-yugo.jpg"
                alt="Equipo INSTEC realizando inspección técnica"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-primary">ISO 9001</div>
                    <div className="text-sm text-gray-600">Certificado</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NosotrosCompact