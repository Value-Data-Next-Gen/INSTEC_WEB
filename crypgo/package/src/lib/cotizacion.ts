import { SITE, whatsappURL } from './site'

export type Solicitud = { metodo?: string; nombreMetodo?: string; pieza?: string; lugar?: string }

/** Mensaje de cotización legible para WhatsApp o correo. */
export const mensajeCotizacion = ({ metodo, nombreMetodo, pieza, lugar }: Solicitud): string => {
  const lineas = ['Hola INSTEC, quiero cotizar una inspección.']
  if (metodo) lineas.push(`Método: ${nombreMetodo ? `${metodo} (${nombreMetodo})` : metodo}`)
  if (pieza?.trim()) lineas.push(`Pieza: ${pieza.trim()}`)
  if (lugar?.trim()) lineas.push(`Lugar: ${lugar.trim()}`)
  lineas.push('(Enviado desde instecltda.cl)')
  return lineas.join('\n')
}

export const whatsappCotizacion = (s: Solicitud): string => whatsappURL(mensajeCotizacion(s))

export const mailtoCotizacion = (s: Solicitud): string =>
  `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
    `Cotización${s.metodo ? ` ${s.metodo}` : ''} desde instecltda.cl`
  )}&body=${encodeURIComponent(mensajeCotizacion(s))}`
