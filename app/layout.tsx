import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Buy Kaspa - KAS Cryptocurrency',
  description: 'Buy Kaspa (KAS) - The fastest cryptocurrency with instant transactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-rubik bg-black min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
