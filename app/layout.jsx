import './globals.scss'
import { Inter } from 'next/font/google'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MuzikArt',
  description: 'Favorite Album Art Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main style={{minHeight: '60dvh'}}>
          {children}
          <ToastContainer />
        </main>
      </body>
    </html>
  )
}
