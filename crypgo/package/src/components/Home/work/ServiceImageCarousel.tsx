'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ServiceImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const serviceImages = [
    {
      src: '/images/documentation/ndt-ultrasonido-omniscan.jpg',
      alt: 'Ensayo de ultrasonido con equipo OmniScan - INSTEC',
      title: 'Ultrasonido (UT)',
      overlay: 'rgba(29, 174, 97, 0.8)'
    },
    {
      src: '/images/documentation/ndt-particulas-magneticas-yugo.jpg',
      alt: 'Ensayo de partículas magnéticas con yugo - INSTEC',
      title: 'Partículas Magnéticas (MT)',
      overlay: 'rgba(29, 174, 97, 0.75)'
    },
    {
      src: '/images/documentation/ndt-particulas-magneticas-yugo-2.jpg',
      alt: 'Inspección por partículas magnéticas en soldadura - INSTEC',
      title: 'Líquidos Penetrantes (PT)',
      overlay: 'rgba(7, 56, 42, 0.75)'
    },
    {
      src: '/images/documentation/ndt-inspeccion-planta.jpg',
      alt: 'Inspección técnica en planta industrial - INSTEC',
      title: 'Inspección en Terreno',
      overlay: 'rgba(16, 185, 129, 0.75)'
    },
    {
      src: '/images/documentation/ndt-inspeccion-terreno.jpg',
      alt: 'Inspección de ensayos no destructivos en terreno - INSTEC',
      title: 'Control de Calidad',
      overlay: 'rgba(29, 174, 97, 0.8)'
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [serviceImages.length])

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          {/* Service Image */}
          <motion.img
            src={serviceImages[currentIndex].src}
            alt={serviceImages[currentIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ 
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Dynamic Color Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: serviceImages[currentIndex].overlay }}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.5, 0.7] }}
            transition={{ 
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Service Title Overlay */}
          <motion.div
            className="absolute bottom-8 left-8 right-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
              <motion.h4
                className="text-white font-bold text-lg md:text-xl"
                animate={{ 
                  textShadow: [
                    '0px 0px 10px rgba(255,255,255,0.3)',
                    '0px 0px 20px rgba(255,255,255,0.6)',
                    '0px 0px 10px rgba(255,255,255,0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {serviceImages[currentIndex].title}
              </motion.h4>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute top-6 right-6 flex gap-2">
        {serviceImages.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-white' 
                : 'w-4 bg-white/50'
            }`}
            animate={{
              scaleX: index === currentIndex ? [0, 1] : 1
            }}
            transition={{
              duration: index === currentIndex ? 4 : 0.3
            }}
          />
        ))}
      </div>

      {/* Service Counter */}
      <motion.div
        className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-white font-semibold text-sm"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {String(currentIndex + 1).padStart(2, '0')} / {String(serviceImages.length).padStart(2, '0')}
      </motion.div>
    </div>
  )
}

export default ServiceImageCarousel