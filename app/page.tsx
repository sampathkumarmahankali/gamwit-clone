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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
