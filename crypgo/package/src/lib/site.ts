/**
 * Configuración central del sitio INSTEC.
 *
 * Datos de contacto, redes y textos reutilizables en un solo lugar para que
 * footer, formularios, botón de WhatsApp y metadatos apunten siempre al mismo
 * destino. (Mismo patrón que el resto de los sitios de ValueData.)
 */
export const SITE = {
  name: 'INSTEC',
  legalName: 'INSTEC - Ingeniería e Inspecciones Técnicas',
  description:
    'Más de 30 años ofreciendo servicios de inspección técnica, ensayos no destructivos y control de calidad en Chile.',
  url: 'https://www.instec.cl',

  contact: {
    email: 'instec@instec.cl',
    // Número principal (también usado para WhatsApp).
    phonePrimary: '+56 9 9997 2647',
    phoneSecondary: '+56 9 5758 9575',
    address: 'Santiago, Región Metropolitana, Chile',
  },

  whatsapp: {
    // Solo dígitos con código de país, sin "+", para wa.me.
    number: '56999972647',
    defaultMessage:
      'Hola INSTEC, me interesa conocer más sobre sus servicios de inspección técnica y ensayos no destructivos.',
  },

  social: {
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const

/** URL de WhatsApp lista para usar (con mensaje por defecto opcional). */
export const whatsappURL = (message: string = SITE.whatsapp.defaultMessage): string => {
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${SITE.whatsapp.number}${text}`
}
