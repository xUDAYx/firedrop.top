import { Check, Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useCurrentUser } from '@/hooks/use-current-user'

interface PricingCardProps {
  title: string
  price: number
  features: string[]
  borderColor: string
  textColor: string
  onClick: () => void
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  borderColor,
  textColor,
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const session = useCurrentUser()
  const router = useRouter()

  const handleClick = async () => {
    if (!session) {
      toast('👇 Sign in to purchase!')
      router.push('/login')
      return
    }

    try {
      setIsLoading(true)
      onClick()
    } catch (error) {
      console.error(error)
      toast.error('An error occurred! Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#2a2e35] rounded-xl shadow-xl border-y-8 border-${borderColor} p-6 w-full md:w-1/3 m-2 max-w-md`}
    >
      <h5 className={`${textColor} font-bold text-lg`}>{title}</h5>
      <div>
        <span className="text-3xl font-light">&#8377;</span>
        <span className="text-6xl font-display gradient-text font-bold">
          {price}
        </span>
      </div>
      <ul className="list-none text-left p-0 w-xl my-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 mb-2">
            <Check className="text-green-500" size={16} />
            {feature}
          </li>
        ))}
      </ul>
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? (
          <>
            <Sparkle className="mr-2 animate-spin" size={16} />
            Loading...
          </>
        ) : (
          <>
            Buy {title}
            <Sparkle className="ml-2" size={16} />
          </>
        )}
      </Button>
    </div>
  )
}

export default PricingCard
