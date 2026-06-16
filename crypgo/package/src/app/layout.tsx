import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import FloatingContact from '@/components/floating-contact'
import Analytics from '@/components/Analytics'
import Aoscompo from '@/utils/aos'
import { SITE } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
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
    images: [{ url: '/images/og-default.png', width: 1200, height: 630, alt: SITE.legalName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INSTEC - Ingeniería e Inspecciones Técnicas',
    description: SITE.description,
    images: ['/images/og-default.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.legalName,
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
    <html lang='es' suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute='class'
          enableSystem={true}
          defaultTheme='system'>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
          <FloatingContact />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
