import type { Metadata } from 'next'
import { Bricolage_Grotesque  } from 'next/font/google'
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
  



const inter = Bricolage_Grotesque ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Firedrop',
  description: 'Make Your Projects in Days, Not Weeks | FireDrop'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ToastProvider />
            <AlertDemo /> {/*add alert*/}
            <Navbar />
            <ScrollUp />
            {children}
          </ThemeProvider>

        </body>
      </html>
    </SessionProvider>
  )
}
