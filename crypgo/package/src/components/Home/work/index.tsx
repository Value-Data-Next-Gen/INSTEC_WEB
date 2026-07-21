'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ServiceImageCarousel from './ServiceImageCarousel'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
        </svg>
      ),
      title: 'Ensayos No Destructivos',
      description: 'Ultrasonido, radiografía, partículas magnéticas, líquidos penetrantes y más.',
      features: ['Ultrasonido (UT)', 'Radiografía (RT)', 'Partículas Magnéticas (MT)', 'Líquidos Penetrantes (PT)']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 6V4C12 3.45 11.55 3 11 3H5C4.45 3 4 3.45 4 4V6C4 6.55 4.45 7 5 7H11C11.55 7 12 6.55 12 6ZM20 8H18V6C18 5.45 17.55 5 17 5H13C12.45 5 12 5.45 12 6V8H4C3.45 8 3 8.45 3 9S3.45 10 4 10H20C20.55 10 21 9.55 21 9S20.55 8 20 8ZM20 12H4C3.45 12 3 12.45 3 13S3.45 14 4 14H20C20.55 14 21 13.55 21 13S20.55 12 20 12ZM20 16H12C11.45 16 11 16.45 11 17S11.45 18 12 18H20C20.55 18 21 17.55 21 17S20.55 16 20 16Z"/>
        </svg>
      ),
      title: 'Control de Calidad y Asesorías',
      description: 'Servicios integrales de control de calidad y consultoría técnica especializada.',
      features: ['Auditorías de Calidad', 'Consultoría Técnica', 'Certificaciones', 'Normativas ASME/ASTM']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19.14,12.94C19.73,12.94 20.2,12.47 20.2,11.88C20.2,11.29 19.73,10.82 19.14,10.82C18.55,10.82 18.08,11.29 18.08,11.88C18.08,12.47 18.55,12.94 19.14,12.94ZM19.14,9.94C20.18,9.94 21.03,10.79 21.03,11.83C21.03,12.87 20.18,13.72 19.14,13.72C18.1,13.72 17.25,12.87 17.25,11.83C17.25,10.79 18.1,9.94 19.14,9.94ZM12,2L13.09,8.26L12,14L10.91,8.26L12,2ZM12,22L10.91,15.74L12,10L13.09,15.74L12,22ZM19.14,14.12C19.73,14.12 20.2,14.59 20.2,15.18C20.2,15.77 19.73,16.24 19.14,16.24C18.55,16.24 18.08,15.77 18.08,15.18C18.08,14.59 18.55,14.12 19.14,14.12Z"/>
        </svg>
      ),
      title: 'Mediciones y Metrología',
      description: 'Mediciones precisas de espesores, dimensiones y evaluación de integridad estructural.',
      features: ['Medición de Espesores', 'Análisis Dimensional', 'Inspección Visual', 'Evaluación Estructural']
    }
  ]

  return (
    <section className="nicepage-section nicepage-bg-pattern" id="work">
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
              <span className="text-sm font-semibold" style={{color: 'var(--color-text-secondary)'}}>
                Nuestros <span style={{color: 'var(--color-primary)'}} className="font-bold">servicios</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{color: 'var(--color-text-primary)'}}
            >
              Soluciones integrales en{' '}
              <span className="relative">
                <span style={{color: 'var(--color-primary)'}}>
                  Control de Calidad
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
                  <path d="M5 6C50 1 150 1 295 6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30"/>
                </svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{color: 'var(--color-text-secondary)'}}
            >
              Ofrecemos servicios especializados de <strong style={{color: 'var(--color-text-primary)'}}>inspección técnica</strong> y 
              <strong style={{color: 'var(--color-text-primary)'}}> ensayos no destructivos</strong> con más de 30 años de experiencia.
            </motion.p>
          </div>

          {/* Large Image Section with Dynamic Transitions */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-16 group"
          >
            {/* Dynamic Service Image Carousel (provides its own imagery, blur & tint) */}
            <ServiceImageCarousel />

            {/* Floating Geometric Shapes */}
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-16 h-16 bg-white/15 rounded-lg rotate-45"
              animate={{
                y: [10, -10, 10],
                x: [5, -5, 5],
                rotate: [45, 90, 45]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/20 rounded-full"
              animate={{
                y: [-15, 15, -15],
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Content with Advanced Animations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl">
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Tecnología de{' '}
                  <motion.span
                    animate={{ 
                      textShadow: [
                        '0px 0px 10px rgba(255,255,255,0.5)',
                        '0px 0px 20px rgba(255,255,255,0.8)',
                        '0px 0px 10px rgba(255,255,255,0.5)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Vanguardia
                  </motion.span>
                </motion.h3>
                <motion.p 
                  className="text-lg md:text-xl opacity-90 max-w-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Equipos de última generación para garantizar la máxima precisión en nuestros servicios
                </motion.p>
                
                {/* Animated CTA Button */}
                <motion.a
                  href="#galeria"
                  className="mt-8 inline-block px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(255,255,255,0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver nuestro trabajo
                </motion.a>
              </div>
            </div>

            {/* Animated Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-white/20"
              animate={{
                borderColor: [
                  'rgba(255,255,255,0.2)',
                  'rgba(255,255,255,0.6)',
                  'rgba(255,255,255,0.2)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                animate={inView ? { y: 0, opacity: 1, scale: 1 } : { y: 60, opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + (index * 0.15),
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="nicepage-card group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="text-center space-y-6 relative z-10">
                  <motion.div
                    className="nicepage-icon-large mx-auto relative"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                    {/* Icon glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </motion.div>
                  
                  <div className="space-y-4">
                    <motion.h3
                      className="text-xl font-semibold group-hover:text-primary transition-colors duration-300"
                      style={{color: 'var(--color-text-primary)'}}
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p
                      className="nicepage-text"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0.9 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>
                        Servicios incluidos:
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-3 justify-center"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <motion.div
                              className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"
                              animate={{
                                scale: [1, 1.2, 1]
                              }}
                              transition={{
                                duration: 2,
                                delay: featureIndex * 0.2,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            />
                            <span className="nicepage-text-small text-center">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover action button */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <motion.a
                      href="#contacto"
                      className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Más información
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="nicepage-card-feature max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold" style={{color: 'var(--color-text-primary)'}}>¿Necesitas una cotización personalizada?</h3>
                  <p className="nicepage-text text-left">
                    Nuestro equipo de expertos está listo para evaluar tu proyecto y ofrecerte 
                    la solución más adecuada para tus necesidades específicas.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 text-sm" style={{color: 'var(--color-text-muted)'}}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Respuesta en 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Evaluación gratuita</span>
                    </div>
                  </div>
                  <a href="#contacto" className="nicepage-btn nicepage-btn-primary nicepage-btn-large">
                    Solicitar Cotización
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

export default Work