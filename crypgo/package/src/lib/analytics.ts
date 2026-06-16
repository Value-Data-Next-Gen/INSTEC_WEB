/**
 * Capa de analítica del sitio INSTEC.
 *
 * Envuelve Google Analytics 4 (gtag) y expone helpers para los eventos clave
 * de conversión. Es seguro llamar a estos helpers aunque GA no esté
 * configurado: simplemente no hacen nada. (Mismo patrón que el resto de los
 * sitios de ValueData.)
 *
 * Configurable con la variable de entorno `NEXT_PUBLIC_GA_ID` (ej. G-XXXXXXX).
 */
import { getUtmParams } from './utm'

export const GA_ID: string | undefined = process.env.NEXT_PUBLIC_GA_ID

type GtagParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/** Envía un evento a GA4 (no-op si no hay gtag cargado). */
export const trackEvent = (name: string, params: GtagParams = {}): void => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, { ...getUtmParams(), ...params })
}

/** Click en cualquier botón de WhatsApp (origen identifica el lugar). */
export const trackWhatsAppClick = (location: string): void =>
  trackEvent('whatsapp_click', { location })

/** Click en un CTA genérico. */
export const trackCtaClick = (label: string, location: string): void =>
  trackEvent('cta_click', { label, location })

/** Primer foco en el formulario de contacto. */
export const trackFormStart = (): void => trackEvent('form_start')

/** Envío de formulario / lead generado. */
export const trackLead = (params: GtagParams = {}): void =>
  trackEvent('generate_lead', params)
