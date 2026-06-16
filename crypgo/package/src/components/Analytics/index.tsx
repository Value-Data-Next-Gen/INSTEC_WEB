'use client'
import Script from 'next/script'
import { useEffect } from 'react'
import { GA_ID } from '@/lib/analytics'
import { captureUtmParams } from '@/lib/utm'

/**
 * Inyecta Google Analytics 4 (si NEXT_PUBLIC_GA_ID está definido) y captura los
 * parámetros UTM al cargar. Pensado para montarse una vez en el layout raíz.
 */
const Analytics = () => {
  useEffect(() => {
    captureUtmParams()
  }, [])

  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy='afterInteractive'
      />
      <Script id='ga-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}

export default Analytics
