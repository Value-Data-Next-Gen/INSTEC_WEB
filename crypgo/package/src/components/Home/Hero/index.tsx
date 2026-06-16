'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import { whatsappURL } from '@/lib/site'
import { trackWhatsAppClick, trackCtaClick } from '@/lib/analytics'

const stats = [
  { value: '30+', label: 'Años de experiencia' },
  { value: '6', label: 'Métodos NDT' },
  { value: '500+', label: 'Proyectos' },
]

const Hero = () => {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-28 pb-20 md:pt-32 lg:min-h-screen lg:pb-0"
      id="main-banner"
    >
      {/* Background: clean light base + subtle grid + green glow */}
      <div className="absolute inset-0 -z-10 bg-[#f7faf8]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(29,174,97,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,174,97,0.06) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 70% 30%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 70% 30%, black 30%, transparent 75%)',
        }}
      />
      <div className="absolute -top-32 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute bottom-0 -left-24 -z-10 h-[360px] w-[360px] rounded-full bg-secondary/10 blur-[120px]" />

      <div className="nicepage-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Ensayos No Destructivos · Chile
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Garantizamos la integridad de tus{' '}
              <span style={{ color: 'var(--color-primary)' }}>activos industriales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed lg:mx-0 lg:text-xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Más de 30 años entregando inspección técnica, ensayos no destructivos y
              control de calidad con personal certificado y estándares internacionales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-col flex-wrap gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href={whatsappURL()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d] hover:shadow-xl"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106" />
                </svg>
                Cotizar por WhatsApp
              </a>
              <Link
                href="/#work"
                onClick={() => trackCtaClick('Ver servicios', 'hero')}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-4 text-base font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                Ver nuestros servicios
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex items-center justify-center divide-x divide-gray-200 lg:justify-start"
            >
              {stats.map((s) => (
                <div key={s.label} className="px-6 first:pl-0">
                  <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - premium image presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Decorative gradient frame behind */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-primary/5 to-transparent blur-md" />

            <ImageCarousel />

            {/* Floating certification badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur md:-left-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Personal certificado
                </div>
                <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  ASME · ISO 9712 · AWS
                </div>
              </div>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              className="absolute -right-3 bottom-10 rounded-2xl bg-primary px-5 py-4 text-white shadow-xl md:-right-6"
            >
              <div className="text-2xl font-bold leading-none">+30</div>
              <div className="mt-1 text-xs font-medium opacity-90">años en terreno</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
