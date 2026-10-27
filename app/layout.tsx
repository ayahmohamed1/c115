import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'A Special Gift For You 🎁',
  description: 'A heartfelt birthday message just for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Cinzel:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
