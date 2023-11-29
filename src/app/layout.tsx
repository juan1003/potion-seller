import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juan De Jesus | Web',
  description: 'This is Juan\'s presentation card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
