import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import '/app/animations.css'
import '/app/scroll-animation.css'
import '/app/button.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Navbar } from '@/components/navbar'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import { AlertDemo } from '@/components/alert'
import { Footer } from '@/components/footer'
import ScrollUp from '@/components/ui/scroll-up'
import favicon from 'public/favicon.png' // Import the favicon image
import NextTopLoader from 'nextjs-toploader';

const inter = Bricolage_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Firedrop',
  description: 'Make Your Projects in Days, Not Weeks | FireDrop',
  icons: {
    icon: '/favicon.png', // Set the favicon path
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >


            <NextTopLoader
              color='linear-gradient(to right, #f97316, #9333ea, #db2777)'
              height={6}
            />
            <ToastProvider />
            <AlertDemo />
            <Navbar />
            <ScrollUp />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
