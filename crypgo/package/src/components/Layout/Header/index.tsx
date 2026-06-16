'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import { APP_URL } from '@/lib/appUrl'

const Header: React.FC = () => {
  const pathUrl = usePathname()

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        sticky 
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-100 py-2 md:py-3' 
          : 'bg-transparent py-4 md:py-6 lg:py-8'
      }`}
      style={{
        boxShadow: sticky ? 'var(--shadow-nicepage-soft)' : 'none'
      }}
    >
      <div className="nicepage-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contacto"
              className="nicepage-btn nicepage-btn-secondary px-6 py-2.5 text-sm font-medium"
            >
              Contactar
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="nicepage-btn nicepage-btn-primary px-6 py-2.5 text-sm font-medium inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Iniciar sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="lg:hidden relative w-11 h-11 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center transition-all duration-300 hover:bg-gray-200"
            aria-label="Abrir menú"
            aria-expanded={navbarOpen}
          >
            <div className="flex flex-col gap-1.5 text-gray-900">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  navbarOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  navbarOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  navbarOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-40" />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          boxShadow: 'var(--shadow-nicepage-large)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-2">
              {headerData.map((item, index) => (
                <MobileHeaderLink key={index} item={item} />
              ))}
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="p-6 border-t border-gray-100 space-y-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setNavbarOpen(false)}
              className="nicepage-btn nicepage-btn-primary w-full justify-center inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Iniciar sesión
            </a>
            <a
              href="#contacto"
              onClick={() => setNavbarOpen(false)}
              className="nicepage-btn nicepage-btn-secondary w-full justify-center"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header