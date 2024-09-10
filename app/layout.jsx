import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MuzikArt',
  description: 'Favorite Album Art Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main style={{minHeight: '60dvh'}}>{children}</main>
      </body>
    </html>
  )
}
