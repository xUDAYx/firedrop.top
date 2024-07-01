import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Language } from '@/components/languages'
import { PricingCard } from '@/components/pricing-card'
import { Testimonials } from '@/components/testimonials'
import { Body } from '@/components/body';

export default function Home() {
  return (
    <>
      <main className="w-full max-w-6xl px-6 space-y-40">
        <Header />
        {/* <Language /> */}
        {/* <PricingCard /> */}
        {/* <Testimonials /> */}
        <Body />
      </main>
      <Footer />
    </>
  )
}
