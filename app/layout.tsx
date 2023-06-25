import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

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
        <main className="py-5 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
