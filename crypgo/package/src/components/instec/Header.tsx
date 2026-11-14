'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { APP_URL } from '@/lib/appUrl'
import { SITE, whatsappURL } from '@/lib/site'
import { trackCtaClick, trackWhatsAppClick } from '@/lib/analytics'
import { Ic } from './Icons'
import { NAV } from '@/lib/nav'


const Header = () => {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className='site-header'>
      <div className='in'>
        <Link href='/' className='mark' aria-label={`${SITE.legalName}, inicio`}>
          <b>INSTEC</b>
          <span>LTDA</span>
        </Link>

        <nav className='site-nav' aria-label='Principal'>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className='site-actions'>
          <a
            href={APP_URL}
            target='_blank'
            rel='noopener'
            className='btn ghost sm hide-m'
            onClick={() => trackCtaClick('portal_clientes', 'header')}>
            <Ic name='login' />
            Portal clientes
          </a>
          <a
            href={whatsappURL()}
            target='_blank'
            rel='noopener noreferrer'
            className='btn sm'
            onClick={() => trackWhatsAppClick('header')}>
            <Ic name='whatsapp' />
            <span className='hide-m'>WhatsApp</span>
            <span className='sr-only'>Escribir por WhatsApp</span>
          </a>
          <button
            type='button'
            className='menu-btn'
            aria-expanded={open}
            aria-controls='menu-movil'
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((o) => !o)}>
            <Ic name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <div id='menu-movil' className='mobile-panel night'>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className='nav' onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
            <a href={APP_URL} target='_blank' rel='noopener' className='btn ghost'>
              <Ic name='login' />
              Portal clientes
            </a>
            <a
              href={whatsappURL()}
              target='_blank'
              rel='noopener noreferrer'
              className='btn'
              onClick={() => trackWhatsAppClick('menu_movil')}>
              <Ic name='whatsapp' />
              {SITE.contact.phonePrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
