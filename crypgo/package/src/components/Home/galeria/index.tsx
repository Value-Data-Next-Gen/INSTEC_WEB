'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

type Foto = {
  src: string
  titulo: string
  metodo: string
}

const fotos: Foto[] = [
  { src: '/images/documentation/ndt-molino-inspeccion.jpg', titulo: 'Inspección de molino en planta', metodo: 'Inspección en terreno' },
  { src: '/images/documentation/ndt-ultrasonido-barra.jpg', titulo: 'Ultrasonido en barra de acero', metodo: 'Ultrasonido (UT)' },
  { src: '/images/documentation/ndt-particulas-magneticas-turbina.jpg', titulo: 'Partículas magnéticas en álabe', metodo: 'Partículas Magnéticas (MT)' },
  { src: '/images/documentation/ndt-ultrasonido-eje.jpg', titulo: 'Medición de espesores por UT', metodo: 'Metrología' },
  { src: '/images/documentation/ndt-rodete-francis.jpg', titulo: 'Control dimensional de rodete Francis', metodo: 'Control de Calidad' },
  { src: '/images/documentation/ndt-ultrasonido-rodete.jpg', titulo: 'Ultrasonido en rodete de bomba', metodo: 'Ultrasonido (UT)' },
  { src: '/images/documentation/ndt-ejes-mecanizados.jpg', titulo: 'Ejes mecanizados para inspección', metodo: 'Inspección dimensional' },
  { src: '/images/documentation/ndt-rodete-francis-2.jpg', titulo: 'Rodete Francis mecanizado', metodo: 'Control de Calidad' },
  { src: '/images/documentation/ndt-tambor-taller.jpg', titulo: 'Estructura en taller', metodo: 'Inspección estructural' },
]

const Galeria = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activa, setActiva] = useState<Foto | null>(null)

  return (
    <section className="nicepage-section bg-white" id="galeria">
      <div className="nicepage-container">
        <div ref={ref} className="space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">Nuestro trabajo en terreno</span>
            </motion.div>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Ensayos reales, <span style={{ color: 'var(--color-primary)' }}>resultados reales</span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Una muestra de nuestras inspecciones y ensayos no destructivos en plantas,
              talleres y terreno con equipos y personal certificado.
            </motion.p>
          </div>

          {/* Masonry grid */}
          <div className="[column-count:1] sm:[column-count:2] lg:[column-count:3] gap-5 [column-gap:1.25rem]">
            {fotos.map((foto, i) => (
              <motion.button
                key={foto.src}
                type="button"
                onClick={() => setActiva(foto)}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.6, delay: 0.1 + (i % 3) * 0.08 }}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <img
                  src={foto.src}
                  alt={`${foto.titulo} - ${foto.metodo} - INSTEC`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Legibility gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-90" />
                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {foto.metodo}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white drop-shadow md:text-base">
                    {foto.titulo}
                  </p>
                </div>
                {/* Hover zoom hint */}
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6M18 11a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {activa && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiva(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiva(null)}
            aria-label="Cerrar"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.figure
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-gray-950"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activa.src} alt={`${activa.titulo} - ${activa.metodo} - INSTEC`} className="max-h-[76vh] w-full object-contain" />
            <figcaption className="flex items-center gap-3 border-t border-white/10 p-4">
              <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                {activa.metodo}
              </span>
              <span className="text-sm font-medium text-white">{activa.titulo}</span>
            </figcaption>
          </motion.figure>
        </div>
      )}
    </section>
  )
}

export default Galeria
