'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { SITE, whatsappURL } from '@/lib/site'
import { trackLead, trackFormStart, trackWhatsAppClick } from '@/lib/analytics'

const Contacto = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const formStarted = useRef(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const servicios = [
    'Ultrasonido (UT)',
    'Radiografía (RT)',
    'Partículas Magnéticas (MT)',
    'Líquidos Penetrantes (PT)',
    'Corrientes Eddy (ET)',
    'Inspección Visual (VT)',
    'Control de Calidad',
    'Consultoría Técnica'
  ]

  const buildMessage = () =>
    [
      `Nombre: ${formData.nombre}`,
      formData.empresa && `Empresa: ${formData.empresa}`,
      `Email: ${formData.email}`,
      formData.telefono && `Teléfono: ${formData.telefono}`,
      `Servicio: ${formData.servicio}`,
      `Mensaje: ${formData.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Solicitud de Cotización - ${formData.servicio}`
    const mailto = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage())}`

    trackLead({ servicio: formData.servicio, channel: 'form' })
    window.location.href = mailto
    setSubmitted(true)
  }

  const handleSendWhatsApp = () => {
    // Usa la validación nativa del formulario para mostrar qué falta.
    if (formRef.current && !formRef.current.reportValidity()) {
      return
    }
    trackWhatsAppClick('contacto-form')
    trackLead({ servicio: formData.servicio, channel: 'whatsapp' })
    window.open(whatsappURL(`Hola INSTEC, quiero solicitar una cotización.\n\n${buildMessage()}`), '_blank')
    setSubmitted(true)
  }

  const resetForm = () => {
    setFormData({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' })
    setSubmitted(false)
    formStarted.current = false
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormFocus = () => {
    if (!formStarted.current) {
      formStarted.current = true
      trackFormStart()
    }
  }

  return (
    <section className="nicepage-section nicepage-bg-pattern relative overflow-hidden" id="contacto">
      {/* Blurred industrial backdrop with a frosted light wash for legibility */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <img
          src="/images/documentation/ndt-ultrasonido-eje.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-110 saturate-125"
        />
        <div className="absolute inset-0 bg-[#f7faf8]/90" />
        <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="nicepage-container relative z-10">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="nicepage-card-minimal inline-flex items-center gap-3 px-6 py-3 mb-6">
              <div className="nicepage-icon w-8 h-8 p-1.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
              </div>
              <span className="nicepage-text-small font-semibold">
                Contáctanos
              </span>
            </div>
            <h2 className="nicepage-heading-lg mb-6">
              ¿Necesitas servicios de <span style={{color: 'var(--color-primary)'}}>inspección técnica</span>?
            </h2>
            <p className="nicepage-text text-lg max-w-3xl mx-auto">
              Solicita tu cotización personalizada. Nuestro equipo de expertos te contactará para
              evaluar tus necesidades específicas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Formulario de Contacto */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="nicepage-card">
                <h3 className="nicepage-heading-md mb-6">Solicitar Cotización</h3>
                <form ref={formRef} onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                        placeholder="+56 9 xxxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block nicepage-text-small font-medium mb-2">
                      Servicio Requerido *
                    </label>
                    <select
                      name="servicio"
                      required
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map((servicio) => (
                        <option key={servicio} value={servicio}>
                          {servicio}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block nicepage-text-small font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                      placeholder="Describe tu proyecto y requerimientos específicos..."
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      className="nicepage-btn nicepage-btn-primary w-full py-4"
                    >
                      Enviar por email
                    </button>
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106" />
                      </svg>
                      WhatsApp
                    </button>
                  </div>

                  {submitted && (
                    <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">¡Listo! Estamos procesando tu solicitud.</p>
                        <p className="text-gray-600">
                          Se abrió tu app de correo/WhatsApp para completar el envío. Si no se abrió,
                          escríbenos a {SITE.contact.email}.{' '}
                          <button type="button" onClick={resetForm} className="font-medium text-primary underline">
                            Enviar otra
                          </button>
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Información de Contacto */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Información General */}
              <div className="nicepage-card">
                <h3 className="nicepage-heading-md mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="nicepage-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="nicepage-subheading font-semibold mb-1">Dirección</h4>
                      <p className="nicepage-text">
                        Santiago, Región Metropolitana<br />
                        Chile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="nicepage-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="nicepage-subheading font-semibold mb-1">Email</h4>
                      <p className="nicepage-text">
                        {SITE.contact.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="nicepage-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="nicepage-subheading font-semibold mb-1">Teléfono</h4>
                      <p className="nicepage-text">
                        {SITE.contact.phonePrimary}<br />
                        {SITE.contact.phoneSecondary}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('contacto')}
                  className="mt-8 w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
                  </svg>
                  Escríbenos por WhatsApp
                </a>
              </div>

              {/* Horario de Atención */}
              <div className="nicepage-card">
                <h3 className="nicepage-heading-md mb-6">Horario de Atención</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="nicepage-text font-medium">Lunes - Viernes</span>
                    <span className="nicepage-text">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="nicepage-text font-medium">Sábados</span>
                    <span className="nicepage-text">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="nicepage-text font-medium">Domingos</span>
                    <span className="nicepage-text text-red-400">Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Emergencias */}
              <div className="nicepage-card bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30">
                <h3 className="nicepage-heading-md mb-4 text-red-400">Servicios de Emergencia</h3>
                <p className="nicepage-text mb-4">
                  Para inspecciones urgentes y servicios fuera del horario normal, contáctanos:
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-400">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold">{SITE.contact.phonePrimary}</p>
                    <p className="nicepage-text-small">24 horas / 7 días</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto