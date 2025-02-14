import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js ChatGPT App',
  description: 'Chat with an AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className='flex justify-start p-5 gap-8 bg-gray-800 text-white'>
          <Link href='/'>ChatGPT</Link>
          <Link href='/about'>About</Link>
        </nav>
        <div className='p-5'>{children}</div>
      </body>
    </html>
  )
}
