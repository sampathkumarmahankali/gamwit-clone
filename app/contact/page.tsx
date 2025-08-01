'use client'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Sparkles, Send, MessageSquare, Clock, Globe } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Contact() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const animatedElements = heroRef.current?.querySelectorAll(".scroll-animate")
    animatedElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float"></div>
          
          {/* Particle Effects */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-64 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000 opacity-40"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-500 opacity-50"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 scroll-animate opacity-0">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg">
              <MessageSquare className="mr-2 h-4 w-4 animate-pulse" />
              Let's Connect & Transform Your Business
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your gaming analytics? Contact our team to learn more about our AI-powered platform and
              schedule a personalized demo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              {/* Enhanced Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
              
              <div className="relative p-8 lg:p-10">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium mb-4 shadow-lg">
                      <Send className="mr-2 h-4 w-4 animate-pulse" />
                      Send us a message
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Let's Start a Conversation</h2>
                    <p className="text-slate-300 text-lg">We'll get back to you within 24 hours with personalized insights.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-semibold text-slate-200">
                          First Name
                        </label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-200 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-semibold text-slate-200">
                          Last Name
                        </label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-200 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@company.com" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-200 backdrop-blur-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-200">
                        Company
                      </label>
                      <Input 
                        id="company" 
                        placeholder="Your Company" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-200 backdrop-blur-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-200">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        rows={6} 
                        placeholder="Tell us about your analytics needs and how we can help transform your gaming operations..." 
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-200 resize-none backdrop-blur-sm"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-blue-400/20">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="text-center lg:text-left mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-green-600 rounded-full text-sm font-medium mb-4">
                    <Globe className="mr-2 h-4 w-4" />
                    Multiple ways to reach us
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Contact Information</h2>
                  <p className="text-slate-600 text-lg">Choose the best way to connect with our team</p>
                </div>
                
                <div className="space-y-6">
                  {/* Email Card */}
                  <div className="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Email Us</h3>
                        <div className="space-y-1">
                          <p className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer transition-colors">contact@gamwit.com</p>
                          <p className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer transition-colors">support@gamwit.com</p>
                        </div>
                        <p className="text-slate-500 text-sm mt-2">Get a response within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="group relative bg-gradient-to-br from-white to-green-50/50 rounded-2xl p-6 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                        <Phone className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Call Us</h3>
                        <div className="space-y-1">
                          <p className="text-green-600 font-medium hover:text-green-700 cursor-pointer transition-colors">+1 (555) 123-4567</p>
                          <p className="text-green-600 font-medium hover:text-green-700 cursor-pointer transition-colors">+91 40 1234 5678</p>
                        </div>
                        <p className="text-slate-500 text-sm mt-2">Available during business hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="group relative bg-gradient-to-br from-white to-purple-50/50 rounded-2xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg mb-2">Visit Our Offices</h3>
                        <div className="space-y-1">
                          <p className="text-purple-600 font-medium">San Francisco, CA</p>
                          <p className="text-purple-600 font-medium">Hyderabad, India</p>
                          <p className="text-purple-600 font-medium">Sydney, Australia</p>
                        </div>
                        <p className="text-slate-500 text-sm mt-2">Schedule an in-person meeting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">Business Hours</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <span className="text-slate-300 font-medium">Monday - Friday</span>
                      <span className="text-white font-semibold">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <span className="text-slate-300 font-medium">Saturday</span>
                      <span className="text-white font-semibold">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-300 font-medium">Sunday</span>
                      <span className="text-slate-400 font-semibold">Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <p className="text-blue-200 text-sm">
                      <Sparkles className="inline h-4 w-4 mr-2" />
                      Need urgent support? Our emergency line is available 24/7 for enterprise clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
