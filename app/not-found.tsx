import { Error404 } from '@/components/icons'
import Bug404 from '@/public/bug.gif'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <main className="prose dark:prose-invert min-w-full text-center">
        <h1 className="text-5xl mt-12">404 Not Found</h1>

        <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>

        <p className='my-4'>Congrats, you just found the bongo moth!</p>

        <img className="mx-auto" src={Bug404.src} alt="bongo moth" />

        <a href="/" className="btn bg-green-400">
          Go Home
        </a>
      </main>
      <Footer />
    </>
  )
}
