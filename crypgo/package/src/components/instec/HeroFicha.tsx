'use client'
import { useEffect, useRef, useState } from 'react'
import { METODOS, NO_SE } from '@/lib/metodos'
import { foto, fotoSrc } from '@/lib/terreno'
import { mailtoCotizacion, whatsappCotizacion } from '@/lib/cotizacion'
import { trackFormStart, trackLead, trackWhatsAppClick } from '@/lib/analytics'
import { Ic } from './Icons'

const OPCIONES = [...METODOS.map((m) => ({ code: m.code, nombre: m.nombre, foto: m.foto })), NO_SE]
const FOTO_INICIAL = 'ultrasonido-omniscan'

const HeroFicha = () => {
  const [metodo, setMetodo] = useState<string>('UT')
  const [pieza, setPieza] = useState('')
  const [lugar, setLugar] = useState('')
  const [fotoId, setFotoId] = useState(FOTO_INICIAL)
  const [anterior, setAnterior] = useState<string | null>(null)
  const empezado = useRef(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const empezar = () => {
    if (empezado.current) return
    empezado.current = true
    trackFormStart()
  }

  const elegir = (code: string) => {
    empezar()
    setMetodo(code)
    const sig = OPCIONES.find((o) => o.code === code)?.foto
    // La figura solo cambia cuando hay una foto real de ese método.
    if (sig && sig !== fotoId) {
      setAnterior(fotoId)
      setFotoId(sig)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setAnterior(null), 950)
    }
  }

  const opcion = OPCIONES.find((o) => o.code === metodo)
  const solicitud = { metodo, nombreMetodo: opcion?.nombre, pieza, lugar }
  const f = foto(fotoId)

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    trackWhatsAppClick('ficha')
    trackLead({ canal: 'whatsapp', metodo })
    window.open(whatsappCotizacion(solicitud), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className='ficha-hero' aria-labelledby='titulo-home'>
      <div className='izq paper'>
        <div className='rail'>
          <span>Ficha de servicio · Ensayos no destructivos</span>
          <span>Santiago · Chile</span>
        </div>
        <h1 id='titulo-home' className='h-display'>
          Inspección con norma, método y <em>criterio de aceptación.</em>
        </h1>
        <p className='lead'>
          Ultrasonido, radiografía, partículas magnéticas, tintas penetrantes y más, en terreno o en
          taller. Inspectores certificados ISO 9712 y certificado con fotos de terreno.
        </p>

        <form className='ficha' onSubmit={enviar} aria-label='Solicitud de cotización'>
          <fieldset className='row' style={{ border: 0, margin: 0, padding: 0, minWidth: 0 }}>
            <legend className='sr-only'>Método</legend>
            <div className='k' aria-hidden='true'>
              MÉTODO
            </div>
            <div className='v'>
              <div className='chips'>
                {OPCIONES.map((o) => (
                  <button
                    key={o.code}
                    type='button'
                    className='chip'
                    aria-pressed={metodo === o.code}
                    title={o.nombre}
                    onClick={() => elegir(o.code)}>
                    {o.code}
                  </button>
                ))}
              </div>
            </div>
          </fieldset>
          <div className='row'>
            <label className='k' htmlFor='f-pieza'>
              PIEZA
            </label>
            <div className='v'>
              <input
                id='f-pieza'
                name='pieza'
                autoComplete='off'
                placeholder='Soldadura, eje, rodete, estanque…'
                value={pieza}
                onFocus={empezar}
                onChange={(e) => setPieza(e.target.value)}
              />
            </div>
          </div>
          <div className='row'>
            <label className='k' htmlFor='f-lugar'>
              LUGAR
            </label>
            <div className='v'>
              <input
                id='f-lugar'
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
              Pedir cotización por WhatsApp
            </button>
            <span className='alt'>
              o{' '}
              <a
                href={mailtoCotizacion(solicitud)}
                onClick={() => trackLead({ canal: 'email', metodo })}>
                por correo
              </a>
            </span>
          </div>
          <p className='hint'>
            {metodo === NO_SE.code
              ? 'Cuéntanos la pieza y el defecto que te preocupa; te recomendamos el ensayo.'
              : `Se abre WhatsApp con el método, la pieza y el lugar ya escritos.`}
          </p>
        </form>

        <div className='ind' aria-label='INSTEC en cifras'>
          <div>
            <b>30+</b>
            <small>años</small>
          </div>
          <div>
            <b>500+</b>
            <small>proyectos</small>
          </div>
          <div>
            <b>14+</b>
            <small>clientes activos</small>
          </div>
          <div>
            <b>95 %</b>
            <small>satisfacción</small>
          </div>
        </div>
      </div>

      <figure className={`figura${anterior ? ' scanning' : ''}`} style={{ margin: 0 }} aria-live='polite'>
        {anterior && <img src={fotoSrc(anterior)} alt='' aria-hidden='true' />}
        <img
          key={fotoId}
          className={anterior ? 'new' : undefined}
          src={fotoSrc(fotoId)}
          alt={f.alt}
          fetchPriority='high'
        />
        <div className='shade' />
        <div className='ticks' />
        <div className='scan' />
        <span className='tag'>
          <i />
          Fig. {f.fig} · {f.tag}
        </span>
        <figcaption className='pie'>
          <div>
            <div className='lab'>{f.lugar}</div>
            <p>{f.pie}</p>
          </div>
          <span className='mark sm' aria-hidden='true'>
            <b>INSTEC</b>
            <span>LTDA</span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}

export default HeroFicha
