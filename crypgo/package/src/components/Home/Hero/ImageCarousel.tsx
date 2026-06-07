'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: '/images/documentation/ndt-ultrasonido-omniscan.jpg',
      alt: 'Ensayo de ultrasonido con equipo OmniScan en terreno - INSTEC'
    },
    {
      src: '/images/documentation/ndt-inspeccion-planta.jpg',
      alt: 'Inspección técnica en planta industrial - INSTEC'
    },
    {
      src: '/images/documentation/ndt-particulas-magneticas-yugo.jpg',
      alt: 'Ensayo de partículas magnéticas con yugo - INSTEC'
    },
    {
      src: '/images/documentation/ndt-particulas-magneticas-yugo-2.jpg',
      alt: 'Inspección por partículas magnéticas en soldadura - INSTEC'
    },
    {
      src: '/images/documentation/ndt-inspeccion-terreno.jpg',
      alt: 'Inspección de ensayos no destructivos en terreno - INSTEC'
    },
    {
      src: '/images/documentation/ndt-trabajo-terreno.jpg',
      alt: 'Trabajo de inspección técnica en terreno - INSTEC'
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full">
      {/* Main carousel container */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm"
          aria-label="Imagen anterior"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm"
          aria-label="Imagen siguiente"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 rounded-full text-white text-sm font-medium backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="text-sm font-medium" style={{color: 'var(--color-text-primary)'}}>
          Proyectos de Inspección NDT
        </p>
        <p className="text-xs mt-1" style={{color: 'var(--color-text-muted)'}}>
          Experiencia en diversas industrias y aplicaciones
        </p>
      </div>
    </div>
  )
}

export default ImageCarousel