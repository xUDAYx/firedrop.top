import Link from 'next/link'
import { TwitterIcon } from '@/components/icons'
import { YoutubeIcon } from '@/components/icons'
import { GitHubIcon } from '@/components/icons'
import { DiscordIcon } from '@/components/icons'
export const Footer = () => {
  return (
    <footer className="container text-center my-6 p-8 text-gray3">
      <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>  

      <div className="pt-10">
        Find an issue with this page?{' '}
        <a className="text-blue-500" href="https://github.com/your-repo/your-repo/blob/main/path/to/file.tsx">
          Fix it on GitHub
        </a>
      </div>

      <div className="py-4">
        Need help? Email{' '}
        <a href="mailto:jawheriuday@gmail.com">
          <h1 className="text-white font-bold">firedop@hello.com</h1>
        </a>
      </div>

      <div className="flex justify-center items-center my-2">
        <a href="https://www.youtube.com/channel/your-channel">
          <i className="w-6 inline-block mx-2">
            <YoutubeIcon />
          </i>
        </a>

        <a href="https://twitter.com/your-twitter">
          <i className="w-6 inline-block mx-2">
            <TwitterIcon />
          </i>
        </a>

        <a href="https://github.com/your-github">
          <i className="w-6 inline-block mx-2">
            <GitHubIcon />
          </i>
        </a>

        <a href="https://discord.gg/your-discord-invite">
          <i className="w-6 inline-block mx-2">
            <DiscordIcon />
          </i>
        </a>
      </div>

      <h6>Helpful Links</h6>

      <div className="py-3">
        <Link href="/Project"> Project </Link> |
        <Link href="/Papers"> Research Paper </Link> |
        <Link href="/tags"> Tags </Link> |
        <Link href="/privacy"> Privacy </Link> |
        <Link href="/terms"> Terms </Link>
      </div>

      <div className="text-xs">
        Copyright © {new Date().getFullYear()} Firedrop <br />
      </div>
    </footer>
  )
}
