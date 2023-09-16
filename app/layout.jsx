import Header from '@/components/Header'
import './globals.scss'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MuzikArt',
  description: 'Favorite Album Art Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main style={{minHeight: '60vh'}}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
