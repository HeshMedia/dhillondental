import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import Team from "@/components/team"
import Statistics from "@/components/statistics"
import Testimonials from "@/components/testimonials"
import Journey from "@/components/journey"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Testimonials />
      <Journey />
    </main>
  )
}

