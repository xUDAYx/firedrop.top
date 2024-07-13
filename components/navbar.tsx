import Link from 'next/link'
import Image from 'next/image'
import { UserButton } from '@/components/user-button'
import { MobileSidebar } from '@/components/mobile-sidebar'
import { FiredropLogo } from '@/components/icons'
import fireGif from '@/public/fire.gif'
import firelogo from '@/public/favicon.png' 
export const navPages = [
  {
    title: 'PROJECTS',
    link: '/projects'
  },
  {
    title: 'PAPERS',
    link: '/papers'
  }
]

export const Navbar = () => {
  return (
    <nav className="top-0 w-full z-50 transition">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* <MobileSidebar /> */}
          {/* Logo */}
          <a
            className="flex justify-center items-center text-center w-12 h-12 logo-gif"
            href="/"
          >
            <FiredropLogo />
            {/* <img
              className="relative bottom-2 left-[-1px]"
              id="logoBg"
              src={fireGif.src}
              alt="fire background"
              width="48"
              height="48"
            /> */}
          </a>
          {/* Links, Theme, & User */}
          <div className="sm:flex h-[40px] items-center text-lg md:text-lg font-medium transition-all">
            <div className="flex items-center h-full text-base gap-4 font-bold">
              {navPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  className={`flex items-center gradient-slide:hover hover:scale-105 h-full transition duration-300 px-4 rounded-md ${
                    page.title === 'PROJECTS'
                      ? 'font-display text-base font-bold text-green-500 border-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.9)] hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.9)] animate-bounce-medium'
                      : ''
                  }`}
                  
                >
                  {page.title}
                </Link>
              ))}
              <div className="flex h-full m-0 md:ml-6">
                {/* <ModeToggle /> */}
                <UserButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
