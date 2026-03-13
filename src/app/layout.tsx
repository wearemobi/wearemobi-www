import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const syne = Syne({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
  variable: '--font-syne',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wearemobi.com'),
  title: 'We Are Mobi — Transforming ideas into high-impact digital solutions',
  description: 'AI-native nearshore software development. Mobile, web & AI solutions.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'We Are Mobi',
    description: 'AI-native software development from Costa Rica.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>{children}</body>
    </html>
  )
}
