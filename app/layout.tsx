import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HAKTL — Österreichs Premium Lernplattform',
  description: 'Die beste Lernplattform für HTL & HAK Schüler' ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
