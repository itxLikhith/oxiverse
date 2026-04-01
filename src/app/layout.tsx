import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ToastProvider } from '@/lib/providers/ToastProvider'
import { AuthProvider } from '@/lib/providers/AuthProvider'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import { SmoothScrollProvider } from '@/lib/providers/SmoothScrollProvider'
import { Background3DProvider } from '@/components/3d/Background3DProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://oxiverse.io'),
  title: {
    default: 'Oxiverse - Explore • Connect • Create',
    template: '%s | Oxiverse',
  },
  description: 'A privacy-first ecosystem with search, browser, download manager, productivity suite, and more. Built for developers, researchers, and privacy-conscious users.',
  keywords: ['search engine', 'privacy', 'open source', 'browser', 'productivity', 'developer tools', 'intent engine', 'intentforge'],
  authors: [{ name: 'Likhith', url: 'https://github.com/itxLikhith' }],
  openGraph: {
    title: 'Oxiverse - Explore • Connect • Create',
    description: 'A privacy-first ecosystem with search, browser, download manager, productivity suite, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://oxiverse.io',
    siteName: 'Oxiverse',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxiverse - Explore • Connect • Create',
    description: 'A privacy-first ecosystem with search, browser, download manager, productivity suite, and more.',
    creator: '@oxiverse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Oxiverse',
    url: 'https://oxiverse.io',
    description: 'The next generation of privacy-first infrastructure. A secure, decentralized ecosystem for pioneers of the open internet.',
    logo: 'https://oxiverse.io/apple-touch-icon.png',
    sameAs: [
      'https://github.com/oxiverse-labs',
      'https://twitter.com/oxiverse'
    ]
  }

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-950 antialiased selection:bg-primary-500/30">
        <noscript>
          <div id="content-fallback" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Oxiverse</h1>
            <p>IntentForge — An intent-first discovery engine. Autonomous, self-healing search technology.</p>
            <p>A privacy-first ecosystem with search, browser, download manager, productivity suite, and more.</p>
            <a href="#platform">Platform</a> | <a href="#ecosystem">Ecosystem</a> | <a href="/blog">Blog</a>
          </div>
        </noscript>
        <ScrollProgressBar />
        <div className={`${inter.className} ${spaceGrotesk.variable}`}>
          <AuthProvider>
            <ToastProvider>
              <SmoothScrollProvider>
                <Background3DProvider>
                  {children}
                </Background3DProvider>
              </SmoothScrollProvider>
            </ToastProvider>
          </AuthProvider>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
