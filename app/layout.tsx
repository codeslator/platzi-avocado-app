import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './layout/components/navbar/Navbar'
import Footer from './layout/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Codeslator Store',
  description: 'Platzi NextJS Course Practice',
}

export default function RootLayout({
children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
