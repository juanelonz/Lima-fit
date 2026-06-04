import type { Metadata } from 'next'
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
  title: 'lima fit - Pilates Equipment',
  description:
    'lima diseña y fabrica reformers de Pilates premium. Equipo de precisión construido para estudios y hogares.',
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
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
