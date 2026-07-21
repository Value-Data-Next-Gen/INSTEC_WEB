'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ServiceImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const serviceImages = [
    {
      src: '/images/documentation/ndt-ultrasonido-barra.jpg',
      alt: 'Ensayo de ultrasonido con detector de fallas en barra de acero - INSTEC',
      title: 'Ultrasonido (UT)',
    },
    {
      src: '/images/documentation/ndt-particulas-magneticas-turbina.jpg',
      alt: 'Ensayo de partículas magnéticas con yugo sobre rodete de turbina - INSTEC',
      title: 'Partículas Magnéticas (MT)',
    },
    {
      src: '/images/documentation/ndt-ultrasonido-rodete.jpg',
      alt: 'Inspección ultrasónica sobre rodete de bomba - INSTEC',
      title: 'Líquidos Penetrantes (PT)',
    },
    {
      src: '/images/documentation/ndt-molino-inspeccion.jpg',
      alt: 'Inspección técnica de molino en planta industrial - INSTEC',
      title: 'Inspección en Terreno',
    },
    {
      src: '/images/documentation/ndt-rodete-francis.jpg',
      alt: 'Control dimensional de rodete Francis en taller - INSTEC',
      title: 'Control de Calidad',
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceImages.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [serviceImages.length])

  return (
    <div className="absolute inset-0 bg-gray-950">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Blurred ambient backdrop fills the frame regardless of photo ratio */}
          <img
            src={serviceImages[currentIndex].src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl brightness-[0.6] saturate-150"
          />

          {/* Foreground photo with a slow Ken Burns push */}
          <motion.img
            src={serviceImages[currentIndex].src}
            alt={serviceImages[currentIndex].alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          />

          {/* Brand tint + legibility gradient (kept subtle so the photo reads) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(7,56,42,0.35) 0%, rgba(7,56,42,0.15) 45%, rgba(4,20,15,0.72) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      {/* Active service label */}
      <div className="absolute bottom-8 left-8 right-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-2xl bg-black/35 px-4 py-3 backdrop-blur-md ring-1 ring-white/15"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_2px_rgba(29,174,97,0.7)]" />
            <h4 className="text-lg font-bold text-white drop-shadow md:text-xl">
              {serviceImages[currentIndex].title}
            </h4>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicators */}
      <div className="absolute top-6 right-6 flex gap-2">
        {serviceImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver servicio ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Service counter */}
      <div className="absolute top-6 left-6 rounded-full bg-black/40 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/15">
        {String(currentIndex + 1).padStart(2, '0')} / {String(serviceImages.length).padStart(2, '0')}
      </div>
    </div>
  )
}

export default ServiceImageCarousel
