import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { RocketIcon } from 'lucide-react'

export function AlertDemo() {
  return (
    <div className="w-full max-w-6xl px-6 py-4">
      <Alert className="px-6 rounded-xl border-0 ring ring-red-400/20 ring-inset text-secondary bg-orange-500/15 text-black dark:text-white cursor-default">
        <AlertTitle className="flex gap-1">
          <RocketIcon className="h-4 w-4" />
           Launch Offer!
        </AlertTitle>
        <AlertDescription>
          50% Off for the First 100 Students!{' '}
          <a
            className="text-primary transition duration-300"
            href="/price"
            // target="_blank"
          >
            here
          </a>
        </AlertDescription>
      </Alert>
    </div>
  )
}
