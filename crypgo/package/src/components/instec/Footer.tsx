import Link from 'next/link'
import { APP_URL } from '@/lib/appUrl'
import { SITE, whatsappURL } from '@/lib/site'
import { NAV } from '@/lib/nav'

const Footer = () => (
  <footer id='pie-sitio' className='site-footer'>
    <div className='w'>
      <div className='cols'>
        <div>
          <Link href='/' className='mark' aria-label='INSTEC Ltda., inicio'>
            <b>INSTEC</b>
            <span>LTDA</span>
          </Link>
          <p style={{ marginTop: 18, maxWidth: '38ch', fontSize: 15, lineHeight: 1.55 }}>
            Ingeniería e Inspecciones Técnicas. Ensayos no destructivos, control de calidad y
            metrología en terreno y en taller, desde Santiago.
          </p>
        </div>
        <div>
          <h4>Sitio</h4>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <h4>Contacto</h4>
          <a href={whatsappURL()} target='_blank' rel='noopener noreferrer'>
            WhatsApp {SITE.contact.phonePrimary}
          </a>
          <a href={`tel:${SITE.contact.phoneSecondary.replace(/\s/g, '')}`}>{SITE.contact.phoneSecondary}</a>
          <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          <span style={{ display: 'block', padding: '4px 0', fontSize: 15 }}>{SITE.contact.address}</span>
        </div>
        <div>
          <h4>Más</h4>
          <a href={SITE.social.linkedin} target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
          <a href={APP_URL} target='_blank' rel='noopener'>
            Portal de clientes
          </a>
        </div>
      </div>
      <div className='legal'>
        <span>© {new Date().getFullYear()} INSTEC Ltda. · Ingeniería e Inspecciones Técnicas</span>
        <span>instecltda.cl</span>
      </div>
    </div>
  </footer>
)

export default Footer
