import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buy Kaspa (KAS) - Fast & Secure Cryptocurrency',
  description: 'Buy Kaspa (KAS) cryptocurrency on trusted exchanges. The fastest, most scalable blockDAG with 1-second confirmation times.',
  keywords: 'kaspa, kas, cryptocurrency, buy kaspa, blockchain, blockdag, crypto exchange',
  openGraph: {
    title: 'Buy Kaspa (KAS) - Fast & Secure Cryptocurrency',
    description: 'Buy Kaspa (KAS) cryptocurrency on trusted exchanges. The fastest, most scalable blockDAG with 1-second confirmation times.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}