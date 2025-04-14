import dynamic from 'next/dynamic'
import Hero from "@/components/hero"

// Dynamically import components with loading priority
// Hero is kept static for immediate loading
const AboutUs = dynamic(() => import('@/components/about-us'), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})

const Services = dynamic(() => import('@/components/services'), {
  ssr: true,
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />
})

const Team = dynamic(() => import('@/components/team'), {
  ssr: false, // Load client-side only
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})

const Testimonials = dynamic(() => import('@/components/testimonials'), {
  ssr: false, // Load client-side only
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />
})

const Journey = dynamic(() => import('@/components/journey'), {
  ssr: false, // Load client-side only
  loading: () => <div className="min-h-[400px] bg-gray-50 animate-pulse" />
})

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Testimonials />
      <Journey />
    </>
  )
}

// Add metadata to improve SEO and caching
export const metadata = {
  alternates: {
    canonical: '/',
  }
}

