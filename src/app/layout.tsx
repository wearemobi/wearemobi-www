import type { Metadata } from 'next'
import { Urbanist, Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
  variable: '--font-urbanist',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wearemobi.com'),
  title: 'M.O.B.I.™ - Transforming ideas into high-impact digital solutions',
  description: 'M.O.B.I.™ (Machine Oriented Brilliant Ideas™) — Transforming ideas into high-impact digital solutions. We build sustainable mobile, web, and agentic AI solutions for high-impact digital transformation.',
  icons: {
    icon: [{ url: '/icon-light.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'M.O.B.I.™ - Transforming ideas into high-impact digital solutions',
    description: 'M.O.B.I.™ (Machine Oriented Brilliant Ideas™) — Transforming ideas into high-impact digital solutions. We build sustainable mobile, web, and agentic AI solutions for high-impact digital transformation.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${urbanist.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              var stored = localStorage.getItem('theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (stored === 'dark' || (!stored && prefersDark)) {
                document.documentElement.classList.add('dark');
              }
            })();`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
