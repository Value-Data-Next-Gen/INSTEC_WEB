'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FOTOS, foto, fotoSrc } from '@/lib/terreno'
import { Ic } from './Icons'

// Composición de la home: una figura grande, una media, una ancha y cuatro chicas.
const LAYOUT: { id: string; size: 'big' | 'mid' | 'tall' | 'sm' }[] = [
  { id: 'molino-inspeccion', size: 'big' },
  { id: 'particulas-magneticas-turbina', size: 'mid' },
  { id: 'inspeccion-planta', size: 'tall' },
  { id: 'ultrasonido-barra', size: 'sm' },
  { id: 'equipo-inspeccion', size: 'sm' },
  { id: 'rodete-francis', size: 'sm' },
  { id: 'trabajo-terreno', size: 'sm' },
]

const Terreno = () => {
  const dlg = useRef<HTMLDialogElement>(null)
  const [idx, setIdx] = useState<number | null>(null)

  const abrir = (id: string) => {
    setIdx(FOTOS.findIndex((f) => f.id === id))
    dlg.current?.showModal()
  }
  const mover = useCallback(
    (d: number) => setIdx((i) => (i === null ? i : (i + d + FOTOS.length) % FOTOS.length)),
    []
  )

  useEffect(() => {
    const el = dlg.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (!el.open) return
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    const onClose = () => setIdx(null)
    window.addEventListener('keydown', onKey)
    el.addEventListener('close', onClose)
    return () => {
      window.removeEventListener('keydown', onKey)
      el.removeEventListener('close', onClose)
    }
  }, [mover])

  const actual = idx === null ? null : FOTOS[idx]

  return (
    <section id='terreno' className='sec night' aria-labelledby='titulo-terreno'>
      <div className='w'>
        <div className='rail'>
          <span>Terreno · Fotos de trabajos de INSTEC</span>
          <span>{FOTOS.length} figuras</span>
        </div>
        <div className='sec-head'>
          <h2 id='titulo-terreno' className='h-display h2'>
            Lo que hacemos, <em>en fotos reales de terreno y taller.</em>
          </h2>
          <p className='lead'>
            Rodetes Francis, molinos, ejes, soldaduras y fundiciones. Cada figura indica el método y la
            pieza que se ve.
          </p>
        </div>

        <div className='terreno'>
          {LAYOUT.map(({ id, size }) => {
            const f = foto(id)
            return (
              <button
                key={id}
                type='button'
                className={`figura ${size}`}
                onClick={() => abrir(id)}
                aria-label={`Ampliar figura ${f.fig}: ${f.pie}`}>
                <img src={fotoSrc(id, size === 'big' ? 'full' : '960')} alt={f.alt} loading='lazy' />
                <span className='shade' />
                <span className='tag'>
                  <i />
                  Fig. {f.fig}
                  <span className='tt'> · {f.tag}</span>
                </span>
                <span className='cap'>
                  <b>{f.lugar}</b>
                  {f.pie}
                </span>
                {size === 'big' && (
                  <span className='mark sm' aria-hidden='true'>
                    <b>INSTEC</b>
                    <span>LTDA</span>
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <p className='nota-fotos'>
            Fotos de trabajos de INSTEC, retocadas en luz y nitidez con IA, sin cambios de contenido.
          </p>
          <button type='button' className='btn ghost sm' onClick={() => abrir(FOTOS[0].id)}>
            Ver las {FOTOS.length} figuras
          </button>
        </div>
      </div>

      <dialog ref={dlg} className='lightbox' aria-label='Figuras de terreno'>
        {actual && (
          <>
            <div className='figura' style={{ background: 'var(--deep)' }}>
              <img src={fotoSrc(actual.id)} alt={actual.alt} />
              <span className='tag'>
                <i />
                Fig. {actual.fig} · {actual.tag}
              </span>
            </div>
            <div className='bar'>
              <p>
                <span className='lab' style={{ color: 'var(--g)', marginRight: 10 }}>
                  {actual.lugar}
                </span>
                {actual.pie}
              </p>
              <div className='nav'>
                <button type='button' className='ic' onClick={() => mover(-1)} aria-label='Figura anterior'>
                  <Ic name='prev' />
                </button>
                <button type='button' className='ic' onClick={() => mover(1)} aria-label='Figura siguiente'>
                  <Ic name='next' />
                </button>
                <button type='button' className='ic' onClick={() => dlg.current?.close()} aria-label='Cerrar'>
                  <Ic name='close' />
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}

export default Terreno
