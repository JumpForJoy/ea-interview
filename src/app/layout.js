import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import { inter, poppins } from '@/styles/fonts'

import '@/styles/reset.css'
import '@/styles/globals.css'

export const metadata = {
  title: 'EA Trading Academy',
  description: 'EA Trading Academy'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
