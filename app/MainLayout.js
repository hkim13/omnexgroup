import { Inter } from 'next/font/google'
import LinkBar from '@/components/LinkBar';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout({ showLinkBar, children }) {
    return (
      <html lang="en">
         <body className={`flex flex-col min-h-screen ${inter.className}`}>
            {showLinkBar && <LinkBar/>}
            <NavBar/>
          <main className='flex grow'>
            {children}
          </main>
          <footer className='flex'>
            <Footer/>
          </footer>
        </body>
      </html>
    )
  }
  