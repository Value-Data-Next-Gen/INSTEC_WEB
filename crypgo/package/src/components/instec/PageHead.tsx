import { foto, fotoSrc } from '@/lib/terreno'

/** Encabezado de página interior: ficha a la izquierda, figura real a la derecha. */
const PageHead = ({
  rail,
  title,
  lead,
  fotoId,
  children,
}: {
  rail: [string, string]
  title: React.ReactNode
  lead: string
  fotoId: string
  children?: React.ReactNode
}) => {
  const f = foto(fotoId)
  return (
    <section className='ficha-hero interior'>
      <div className='izq paper'>
        <div className='rail'>
          <span className='ra'>
            {rail[0].split(' · ')[0]}
            {rail[0].includes(' · ') && <span className='rs'> · {rail[0].split(' · ').slice(1).join(' · ')}</span>}
          </span>
          <span>{rail[1]}</span>
        </div>
        <h1 className='h-display'>{title}</h1>
        <p className='lead'>{lead}</p>
        {children}
      </div>
      <figure className='figura' style={{ margin: 0 }}>
        <img src={fotoSrc(fotoId)} alt={f.alt} fetchPriority='high' />
        <div className='shade' />
        <div className='ticks' />
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

export default PageHead
