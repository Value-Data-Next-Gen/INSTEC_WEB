'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
  {
    src: '/images/documentation/ndt-inspeccion-planta.jpg',
    label: 'Inspección en planta',
    alt: 'Inspección técnica en planta industrial - INSTEC',
  },
  {
    src: '/images/documentation/ndt-ultrasonido-omniscan.jpg',
    label: 'Ultrasonido (UT)',
    alt: 'Ensayo de ultrasonido con equipo OmniScan en terreno - INSTEC',
  },
  {
    src: '/images/documentation/ndt-inspeccion-terreno.jpg',
    label: 'Inspección en terreno',
    alt: 'Inspección de ensayos no destructivos en terreno - INSTEC',
  },
  {
    src: '/images/documentation/ndt-particulas-magneticas-yugo.jpg',
    label: 'Partículas magnéticas (MT)',
    alt: 'Ensayo de partículas magnéticas con yugo - INSTEC',
  },
  {
    src: '/images/documentation/ndt-trabajo-terreno.jpg',
    label: 'Control de soldaduras',
    alt: 'Trabajo de inspección técnica en terreno - INSTEC',
  },
]

const ImageCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] ring-1 ring-black/5 shadow-2xl bg-gray-950 sm:aspect-[4/3] lg:aspect-square">
        {/* Blurred ambient backdrop (same image, filling the frame) */}
        <AnimatePresence>
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={images[index].src}
              alt=""
              fill
              className="scale-125 object-cover blur-2xl brightness-75 saturate-150"
              sizes="700px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Foreground image (full photo, centered over the blur) */}
        <AnimatePresence>
          <motion.div
            key={`fg-${index}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              priority={index === 0}
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft bottom gradient for legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        {/* Current method label + progress dots */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(29,174,97,0.6)]" />
              <span className="text-white font-semibold text-sm md:text-base drop-shadow">
                {images[index].label}
              </span>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ver imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-6 bg-primary' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
