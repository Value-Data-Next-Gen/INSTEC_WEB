'use client'
import { trackCtaClick, trackLead, trackWhatsAppClick } from '@/lib/analytics'
import { whatsappCotizacion, type Solicitud } from '@/lib/cotizacion'
import { whatsappURL } from '@/lib/site'
import { Ic } from './Icons'

/** Botón de WhatsApp con mensaje de cotización (y evento de conversión). */
export const CotizarWhatsApp = ({
  solicitud,
  donde,
  className = 'btn',
  children,
}: {
  solicitud?: Solicitud
  donde: string
  className?: string
  children: React.ReactNode
}) => (
  <a
    className={className}
    href={solicitud ? whatsappCotizacion(solicitud) : whatsappURL()}
    target='_blank'
    rel='noopener noreferrer'
    onClick={() => {
      trackWhatsAppClick(donde)
      if (solicitud?.metodo) trackLead({ canal: 'whatsapp', metodo: solicitud.metodo, origen: donde })
    }}>
    <Ic name='whatsapp' />
    {children}
  </a>
)

/** Enlace externo o interno con evento de CTA. */
export const TrackedLink = ({
  href,
  label,
  donde,
  className,
  external,
  children,
}: {
  href: string
  label: string
  donde: string
  className?: string
  external?: boolean
  children: React.ReactNode
}) => (
  <a
    href={href}
    className={className}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    onClick={() => trackCtaClick(label, donde)}>
    {children}
  </a>
)
