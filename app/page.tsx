import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import Testimonials from "@/components/testimonials"
import DashboardMockup from "@/components/dashboard-mockup"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Testimonials />
      <DashboardMockup />
      <CTA />
      <Footer />
    </main>
  )
}
