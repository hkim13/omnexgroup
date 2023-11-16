import { Inter } from 'next/font/google'
import LinkBar from '@/components/LinkBar';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout({ showLinkBar, children }) {
    return (
      <html lang="en">
         <body className={`bg-gray-200 flex flex-col min-h-screen ${inter.className}`}>
            {showLinkBar && <LinkBar/>}
              <NavBar/>
          <main className='bg-gray-300 flex justify-center grow'>
            <div className='bg-gray-400 w-full max-w-screen-2xl mx-auto p-6'>
              {children}
            </div>
          </main>
          <footer className='flex'>
            <Footer/>
          </footer>
        </body>
      </html>
    )
  }
  