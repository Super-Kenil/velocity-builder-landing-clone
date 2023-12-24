import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
  title: 'CBuilder.io Velocity',
  description: 'AI Launch Event',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#111]`}>{children}</body>
    </html>
  )
}
