import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Nexora AI - Hire Your First AI Employee',
  description: 'AI Employees that answer customers, qualify leads, and schedule appointments 24/7.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="https://a.lovart.ai/artifacts/agent/DCP2Eu60C6FIigGt.png" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}
