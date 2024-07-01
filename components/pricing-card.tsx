'use client'
import { Check, Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useCurrentUser } from '@/hooks/use-current-user'
import { useRouter } from 'next/navigation'

// Update Tiers Here
export const tiers = [
  {
    name: 'Your Competitor Name',
    price: '18.99',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5',
      'Feature 6',
      'Feature 7',
      'Feature 8',
      'Feature 9',
      'Feature 10'
    ],
    cta: 'Get Started',
    yourProduct: false
  },
  {
    name: 'Your Product Name',
    priceBefore: '$19.99',
    price: '8.99',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5',
      'Feature 6',
      'Feature 7',
      'Feature 8',
      'Feature 9',
      'Feature 10'
    ],
    cta: 'Get Started',
    yourProduct: true
  }
]

export const PricingCard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const session = useCurrentUser()

  const router = useRouter();

  const onClick = async () => {
    if (!session) {
      toast('👇 Sign in to purchase!')
      router.push('/login')
      return
    }
    try {
      setIsLoading(true)
      const response = await axios.post('/api/checkout')
      window.location.href = response.data.url
    } catch (error) {
      toast.error('An error occured! Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section id="pricing" className="scroll-mt-4">
      {/* Title */}
      <div className="mx-auto flex flex-col items-center pb-8">
      <h1 className='font-extrabold text-[40px] leading-10 mb-10'>
          BECOME AN <span className="gradient-text-pink">AWESOME</span> DEVELOPER
        </h1>
        <p className="text-lg text-gray-400 mb-5">
          Learn the essential skills for modern fullstack app development while having <span className='text-green-400 font-black underline cursor-pointer'>tons of fun</span> in the process.
        </p>
      </div>
      {/* Pricing Card Display */}
      <div className="flex flex-col sm:place-items-center md:flex-row items-center justify-center gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col p-6 shadow-lg rounded-lg justify-between ring-2 ring-inset w-full max-w-[550px]  ${
              tier.yourProduct
                ? 'bg-primary/10 ring-primary/50'
                : 'bg-secondary ring-foreground/10'
            }`}
          >
            {tier.yourProduct && (
              <div className="px-3 py-1 text-primary-foreground text-sm bg-primary rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Popular
              </div>
            )}
            {/* Pricing */}
            <div>
              <h3
                className={`text-lg font-semibold ${
                  tier.yourProduct ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {tier.name}
              </h3>
              <div
                className={`mt-4 ${
                  tier.yourProduct ? 'text-foreground/90' : 'text-foreground/70'
                }`}
              >
                {tier.priceBefore ? (
                  <span className="font-semibold mr-2 line-through text-lg opacity-75">
                    {tier.priceBefore}
                  </span>
                ) : null}
                <span className="text-4xl font-bold">${tier.price}</span> /month
              </div>
              <ul className="mt-4 space-y-2.5">
                {tier.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-foreground/90 gap-2"
                  >
                    <Check
                      className={`h-6 w-6 rounded-full ${
                        tier.yourProduct ? 'text-primary' : 'text-foreground/70'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Button */}
            <div className="mt-6">
              <Button
                disabled={!tier.yourProduct}
                onClick={onClick}
                className={`w-full ${tier.yourProduct && 'hover:-translate-y-1'}`}
              >
                {tier.cta}
                <Sparkle className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
