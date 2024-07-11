import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import ImgReveal from '@/components/ui/img-reveal'
import AvatarCircles from '@/components/ui/user-avatar-card'
import '/app/animations.css'

export const Header = () => {
  return (
    <div className="whitespace-y-20 mt-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center text-center lg:text-left ">
        <h1 className="font-extrabold  text-5xl md:text-6xl tracking-tight md:-mb-4">
          <div className="min-[414px]:whitespace-nowrap">Get your</div>
          <span className="relative whitespace-nowrap leading-relaxed">
            <span className="absolute bg-neutral -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
            <span className="relative text-neutral-content inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul
                className="block animate-text-slide-8 text-center lg:text-left leading-tight [&_li]:block"
                style={{ color: '#12181b' }}
              >
                <li>Project</li>
                <li>Research Paper</li>
                <li>Project</li>
                <li>Research Paper</li>
                <li>Project</li>
                <li>Research Paper</li>
                <li>Project</li>
                <li>Research Paper</li>
                <li aria-hidden="true">Project</li>
              </ul>
            </span>
          </span>
          <div className="min-[414px]:whitespace-nowrap">
            in a <span className="line-through font-normal">month</span> day!
          </div>
        </h1>
          <p className="mt-10 text-lg text-foreground text-slate-400">
            Firedrop provides <ImgReveal src='/img/chad.png'><span className='text-yellow font-bold cursor-pointer'>pre-built</span></ImgReveal>  && <ImgReveal src='/img/polishedbold.png'><span className='text-pink font-bold cursor-pointer'>polished</span></ImgReveal>  project, so you can enjoy a joint instead of debugging.
          </p>
          {/* <div className="text-foreground mt-9 py-0 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Personalized your project</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Publishable Research Paper</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                <span>Plagarism check</span>
              </li>
            </ul>
          </div> */}
          <div className="flex justify-center lg:justify-start items-center mt-9 br">
            <Link href="/projects">
              <Button className="gap-2 btn-green rounded-none px-14 py-6">
                <Sparkles className="h-5 w-5" />
                <span>Get Project</span>
              </Button>
            </Link>
          </div>
          <AvatarCircles />
        </div>
        {/* <div className="flex items-center justify-center rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/Q6jDdtbkMIU?si=YtgU89RhYiwt5-U5"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full max-w-2xl h-auto aspect-video"
          ></iframe>
        </div> */}
        <div>
          <img className='flex items-center justify-center rounded-lg overflow-hidden ' src="/img/demo.webp" alt="webiste" />
        </div>
      </div>
    </div>
  )
}
