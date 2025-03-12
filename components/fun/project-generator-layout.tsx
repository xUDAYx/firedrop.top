"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Twitter, Lightbulb } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface ProjectGeneratorLayoutProps {
  children: React.ReactNode
}

export default function ProjectGeneratorLayout({ children }: ProjectGeneratorLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Custom Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full"
              >
                <Lightbulb className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Project Generator</span>
              </motion.div>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Custom Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Firedrop Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-sm font-medium">Firedrop</span>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Find your next academic project with our interactive generator
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                Contact
              </Link>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 