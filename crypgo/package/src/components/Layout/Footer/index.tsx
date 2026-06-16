import React, { FC } from 'react'
import Link from 'next/link'
import { headerData } from '../Header/Navigation/menuData'
import { footerlabels } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { SITE, whatsappURL } from '@/lib/site'

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-darkmode'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:gap-20 md:gap-8 gap-8 pb-16'>
          <div className='lg:col-span-4 md:col-span-6 col-span-1'>
            <Logo />
            <p className='text-muted/80 text-16 mt-6 leading-relaxed'>
              Más de 30 años ofreciendo servicios de ingeniería, inspecciones técnicas 
              y ensayos no destructivos con los más altos estándares de calidad.
            </p>
            <div className='flex gap-6 items-center mt-8 relative z-1'>
              <Link href={SITE.social.facebook} target='_blank' rel='noopener noreferrer' className='group' aria-label='Facebook'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary transition-colors'
                />
              </Link>
              <Link href={SITE.social.linkedin} target='_blank' rel='noopener noreferrer' className='group' aria-label='LinkedIn'>
                <Icon
                  icon='fa6-brands:linkedin-in'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary transition-colors'
                />
              </Link>
              <Link href={whatsappURL()} target='_blank' rel='noopener noreferrer' className='group' aria-label='WhatsApp'>
                <Icon
                  icon='fa6-brands:whatsapp'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary transition-colors'
                />
              </Link>
            </div>
            <div className='mt-8'>
              <h3 className='text-white text-lg font-medium mb-2'>
                © 2025 INSTEC
              </h3>
              <p className='text-muted/60 text-sm'>
                Ingeniería e Inspecciones Técnicas
              </p>
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-1'>
            <h4 className='text-white mb-6 font-medium text-lg'>Servicios</h4>
            <ul>
              <li className='pb-3'>
                <Link href='/#work' className='text-muted/80 hover:text-primary text-sm transition-colors'>
                  Inspecciones Técnicas
                </Link>
              </li>
              <li className='pb-3'>
                <Link href='/#portfolio' className='text-muted/80 hover:text-primary text-sm transition-colors'>
                  Ensayos No Destructivos
                </Link>
              </li>
              <li className='pb-3'>
                <Link href='/#work' className='text-muted/80 hover:text-primary text-sm transition-colors'>
                  Control de Calidad
                </Link>
              </li>
              <li className='pb-3'>
                <Link href='/#timeline' className='text-muted/80 hover:text-primary text-sm transition-colors'>
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-3 col-span-1'>
            <h4 className='text-white mb-6 font-medium text-lg'>Información</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className='pb-3'>
                  <Link
                    href={item.herf}
                    className='text-muted/80 hover:text-primary text-sm transition-colors'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-6 col-span-1'>
            <h3 className='text-white text-lg font-medium mb-6'>Contacto</h3>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <Icon
                  icon='tabler:phone'
                  width='20'
                  height='20'
                  className='text-primary mt-1 flex-shrink-0'
                />
                <div>
                  <p className='text-muted/80 text-sm'>{SITE.contact.phonePrimary}</p>
                  <p className='text-muted/80 text-sm'>{SITE.contact.phoneSecondary}</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Icon
                  icon='tabler:mail'
                  width='20'
                  height='20'
                  className='text-primary mt-1 flex-shrink-0'
                />
                <p className='text-muted/80 text-sm'>instec@instec.cl</p>
              </div>
              <div className='flex items-start gap-3'>
                <Icon
                  icon='tabler:map-pin'
                  width='20'
                  height='20'
                  className='text-primary mt-1 flex-shrink-0'
                />
                <p className='text-muted/80 text-sm'>
                  Santiago, Chile<br />
                  Zona Industrial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
