import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'chevp – Penguin Projects',
  description: 'Personal DevOps Projects | Arctic Code Adventures 🐧',
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/78725490?v=4',
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}