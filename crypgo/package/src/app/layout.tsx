import type { Metadata } from 'next'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import '@/styles/instec.css'
import Header from '@/components/instec/Header'
import Footer from '@/components/instec/Footer'
import WhatsAppFloat from '@/components/instec/WhatsAppFloat'
import { ThemeProvider } from 'next-themes'
import Analytics from '@/components/Analytics'
import Aoscompo from '@/utils/aos'
import { SITE } from '@/lib/site'

// Tipografías de las piezas de INSTEC en LinkedIn, autoalojadas por next/font.
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-archivo',
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'INSTEC - Ingeniería e Inspecciones Técnicas | Ensayos No Destructivos',
    template: '%s | INSTEC',
  },
  description: SITE.description,
  keywords: [
    'ensayos no destructivos',
    'inspecciones técnicas',
    'control de calidad',
    'ultrasonido',
    'radiografía industrial',
    'partículas magnéticas',
    'líquidos penetrantes',
    'INSTEC',
    'Chile',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE.url,
    siteName: SITE.name,
    title: 'INSTEC - Ingeniería e Inspecciones Técnicas',
    description: SITE.description,
    images: [{ url: '/images/og-instec.jpg', width: 1200, height: 630, alt: SITE.legalName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INSTEC - Ingeniería e Inspecciones Técnicas',
    description: SITE.description,
    images: ['/images/og-instec.jpg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#organizacion`,
  name: SITE.legalName,
  alternateName: ['INSTEC', 'INSTEC Ltda.'],
  logo: `${SITE.url}/images/logo/instec-logo.png`,
  image: `${SITE.url}/images/og-instec.jpg`,
  sameAs: [SITE.social.linkedin],
  description: SITE.description,
  url: SITE.url,
  email: SITE.contact.email,
  telephone: SITE.contact.phonePrimary,
  areaServed: 'CL',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  knowsAbout: [
    'Ensayos No Destructivos',
    'Ultrasonido',
    'Radiografía Industrial',
    'Partículas Magnéticas',
    'Líquidos Penetrantes',
    'Control de Calidad',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className={`${archivo.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className='instec' suppressHydrationWarning>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href='#contenido' className='sr-only focus:not-sr-only'>
          Saltar al contenido
        </a>
        <div className='ruler' aria-hidden='true' />
        {/* Sitio de un solo tema: la ficha mezcla zonas claras y oscuras por diseño. */}
        <ThemeProvider attribute='class' forcedTheme='light' enableSystem={false}>
          <Aoscompo>
            <Header />
            <div id='contenido'>{children}</div>
            <Footer />
          </Aoscompo>
          <WhatsAppFloat />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
