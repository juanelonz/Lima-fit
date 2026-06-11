import type { Metadata } from 'next'
import Script from 'next/script'
import { Anek_Latin, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const anekLatin = Anek_Latin({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-anek-latin',
})
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'limafit - Equipos de pilates',
  description:
    'lima diseña y fabrica pilates reformers con ingenieria y diseño, construidos con presicion para un funcionamiento silencioso.',
  generator: 'v0.app',
  icons: {
    icon: '/Logotipo_Limafit_--54.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${anekLatin.variable} ${geistMono.variable}`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D7CDFL01Y9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D7CDFL01Y9');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1690671288505049');
            fbq('track', 'PageView');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1690671288505049&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
