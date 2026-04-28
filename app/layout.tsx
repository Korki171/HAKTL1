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
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
