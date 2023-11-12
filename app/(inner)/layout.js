import MainLayout from "@/MainLayout"
import '@/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}
