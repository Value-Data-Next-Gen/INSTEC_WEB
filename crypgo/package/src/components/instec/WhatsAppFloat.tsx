'use client'
import { useEffect, useState } from 'react'
import { whatsappURL } from '@/lib/site'
import { trackWhatsAppClick } from '@/lib/analytics'
import { Ic } from './Icons'

/** Aparece al dejar atrás la primera pantalla (ahí ya están la ficha y el header). */
const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a
      className='wa-float'
      data-oculto={!visible}
      tabIndex={visible ? undefined : -1}
      aria-hidden={!visible}
      href={whatsappURL()}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Escribir a INSTEC por WhatsApp'
      onClick={() => trackWhatsAppClick('floating')}>
      <span className='i'>
        <Ic name='whatsapp' />
      </span>
      <span className='t'>Cotizar por WhatsApp</span>
    </a>
  )
}

export default WhatsAppFloat
