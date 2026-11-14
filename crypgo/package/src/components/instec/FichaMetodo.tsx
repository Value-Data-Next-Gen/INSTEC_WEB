'use client'
import { useRef, useState } from 'react'
import { mailtoCotizacion, whatsappCotizacion } from '@/lib/cotizacion'
import { trackFormStart, trackLead, trackWhatsAppClick } from '@/lib/analytics'
import { Ic } from './Icons'

/**
 * Ficha de cotización compacta de una página de método: el método ya viene
 * elegido; solo se pide la pieza y el lugar. generate_lead solo al enviar.
 */
const FichaMetodo = ({ code, nombre, piezaEj }: { code: string; nombre: string; piezaEj: string }) => {
  const [pieza, setPieza] = useState('')
  const [lugar, setLugar] = useState('')
  const empezado = useRef(false)
  const solicitud = { metodo: code, nombreMetodo: nombre, pieza, lugar }

  const empezar = () => {
    if (empezado.current) return
    empezado.current = true
    trackFormStart()
  }

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    trackWhatsAppClick('pagina_metodo')
    trackLead({ canal: 'whatsapp', metodo: code, origen: 'pagina_metodo' })
    window.open(whatsappCotizacion(solicitud), '_blank', 'noopener,noreferrer')
  }

  return (
    <form id='cotizar' className='ficha' onSubmit={enviar} aria-label={`Cotizar ${nombre.toLowerCase()}`}>
      <div className='row'>
        <div className='k'>MÉTODO</div>
        <div className='v fijo'>
          <span className='chip on'>{code}</span>
          <span>{nombre}</span>
        </div>
      </div>
      <div className='row'>
        <label className='k' htmlFor='m-pieza'>
          PIEZA
        </label>
        <div className='v'>
          <input
            id='m-pieza'
            name='pieza'
            autoComplete='off'
            placeholder={piezaEj}
            value={pieza}
            onFocus={empezar}
            onChange={(e) => setPieza(e.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <label className='k' htmlFor='m-lugar'>
          LUGAR
        </label>
        <div className='v'>
          <input
            id='m-lugar'
            name='lugar'
            autoComplete='address-level2'
            placeholder='Terreno o taller · ciudad'
            value={lugar}
            onFocus={empezar}
            onChange={(e) => setLugar(e.target.value)}
          />
        </div>
      </div>
      <div className='act'>
        <button type='submit' className='btn'>
          <Ic name='whatsapp' />
          Cotizar por WhatsApp
        </button>
        <span className='alt'>
          o{' '}
          <a
            href={mailtoCotizacion(solicitud)}
            onClick={() => trackLead({ canal: 'email', metodo: code, origen: 'pagina_metodo' })}>
            por correo
          </a>
        </span>
      </div>
      <p className='hint'>Se abre WhatsApp con el método, la pieza y el lugar ya escritos.</p>
    </form>
  )
}

export default FichaMetodo
