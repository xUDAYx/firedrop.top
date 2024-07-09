'use client'
import { Check, Croissant, Sparkle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCurrentUser } from '@/hooks/use-current-user'

const ProMembership: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const session = useCurrentUser()
  const router = useRouter()

  const onClick = async () => {
    if (!session) {
      toast('👇 Sign in to purchase!')
      router.push('/login')
      return
    }

    try {
      setIsLoading(true)

      // Your payment processing logic here

    } catch (error) {
      console.error(error)
      toast.error('An error occurred! Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='container prose dark:prose-invert p-8'>
      <header className="text-center max-w-lg mx-auto">
        <h1 className='font-extrabold text-[40px] leading-10 mb-10 text-slate-100'>
          BECOME AN <span className="gradient-text-pink">AWESOME</span> DEVELOPER
        </h1>
        <p className="text-lg text-gray-400 mb-5">
          Learn the essential skills for modern fullstack app development while having <span className='text-green-400 font-black underline cursor-pointer'>tons of fun</span> in the process.
        </p>
      </header>

      <div className="flex flex-col md:flex-row md:items-stretch text-center justify-center items-center mx-auto">
        <div className="flex flex-col items-center justify-center bg-[#2a2e35] rounded-xl shadow-xl border-y-8 border-orange-500 p-6 w-full md:w-1/3 m-2 max-w-md">
          <h5 className="text-orange-500 font-bold text-lg">CUSTOM PROJECT</h5>
          <h5 className="text-[15px] font-light">starting from</h5>
          <div>
            <span className="text-3xl font-light">&#8377;</span>
            <span className="text-6xl font-display gradient-text font-bold">199</span>
          </div>
          <ul className="list-none text-left py-2 p-0 w-xl my-auto">
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              2-3 days develivery time 
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Free Resources PPT
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Invite to private Whatsapp chat
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Unlimited Reviews
            </li>
            
            
            <li className="flex items-center gap-2 mb-2">
              <X className="text-red-500" size={16} />
              Research Paper 
            </li>
          </ul>
          <Button 
          onClick={() =>
            {
              if (!session) {
                toast('👇 Sign in to purchase!')
                router.push('/login')
                return
              }
              window.location.href = '/paymentgatway'}}
            >
            {isLoading ? (
              <>
                <Sparkle className="mr-2 animate-spin" size={16} />
                Loading...
              </>
            ) : (
              <>
                Buy Custom 
                <Sparkle className="ml-2" size={16} />
              </>
            )}
          </Button>
        </div>

        {/* Add additional pricing plans here */}
        <div className="flex flex-col items-center justify-center bg-[#2a2e35] rounded-xl shadow-xl border-y-8 border-blue-500 p-6 w-full md:w-1/3 m-2 max-w-md mt-5 md:mt-2">
          <h5 className="text-blue-300 font-bold text-lg">RESEARCH PAPER</h5>
          <div>
            <span className="text-3xl font-light">&#8377;</span>
            <span className="text-6xl font-display text-blue-500 font-bold">399</span>
          </div>
          <ul className="list-none text-left p-0 w-xl my-auto">
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Research Paper Latex
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
               Plagiarism Report <span className='text-blue-300'>Turnitin</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Zero AI
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Invite to private Whatsapp chat
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              2 Reviews
            </li>
          </ul>
          <Button className='btn-blue' style={{ color: 'black' }} onClick={onClick} disabled={isLoading}>
            {isLoading ? (
              <>
                <Sparkle className="mr-2 animate-spin" size={16} />
                Loading...
              </>
            ) : (
              <>
                Buy Paper
                <Sparkle className="ml-2" size={16} />
              </>
            )}
          </Button>
        </div>

        
      </div>

      <div className="flex flex-col text-center justify-center items-center mx-auto">
        <h1 className='font-extrabold text-[30px] leading-10 mt-10 mb-8 text-slate-100' >LEVEL UP YOUR PAPER</h1>
        <p className="text-lg text-gray-400 max-w-lg pb-5">
        Get Plagiarism and AI Reports for Your Research Papers. Big discount with bulk orders.
        {/* Make your research paper plagiarism-free and 100% humanized! Get a big discount with Bulk orders */}
        </p>

        <div className="flex flex-col items-center justify-center bg-[#2a2e35] rounded-xl shadow-xl border-y-8 border-green-500 p-6 w-full md:w-1/3 m-2 max-w-md">
          <h5 className="text-green-300 font-bold">CHECKUP</h5>
          <div>
            <span className="text-3xl font-light">&#8377;</span>
            <span className="text-6xl font-bold text-green-500">149</span>
            <span>/paper</span>
          </div>
          <ul className="list-none text-left py-4 p-0 w-xl">
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Plagiarism Report <span className='text-green-500'>Turnitin</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              Better bulk pricing
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              AI Report
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="text-green-500" size={16} />
              2 paper minimum purchase
            </li>
          </ul>

          {/* Replace this with the appropriate component or button */}
          <div><Button  className='btn-green' style={{ color: 'black' }} onClick={onClick} disabled={isLoading}>
            {isLoading ? (
              <>
                <Sparkle className="mr-2 animate-spin" size={16} />
                Loading...
              </>
            ) : (
              <>
                Check Now
                <Sparkle className="ml-2 " size={16} />
              </>
            )}
          </Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export { ProMembership }
