import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maths for Data science',
  description: "Welcome to your introduction to the maths behind data science! This blog is designed for beginners who want to build a solid foundation in key mathematical concepts like algebra, calculus, probability, and statistics.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
