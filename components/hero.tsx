"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, TrendingUp, Shield, Users, Sparkles, Play, Zap, Target, Brain } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)

  const words = ["Predict.", "Personalize.", "Visualize."]

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return

    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (typewriterText.length < currentWord.length) {
        setTypewriterText(currentWord.slice(0, typewriterText.length + 1))
      } else {
        setTimeout(() => {
          setIsTyping(false)
          setTimeout(() => {
            setTypewriterText("")
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
            setIsTyping(true)
          }, 1000)
        }, 2000)
      }
    }, 150)

    return () => clearTimeout(timeout)
  }, [typewriterText, currentWordIndex, isTyping, words])

  // Scroll animations
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
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-float-slow"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000 opacity-40"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-500 opacity-50"></div>
        <div className="absolute bottom-64 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-1500 opacity-30"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 scroll-animate opacity-0">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              Advanced Gaming Analytics Platform
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Your Gaming Operations with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Get real-time insights, player behavior analysis, and predictive intelligence to maximize revenue and ensure regulatory compliance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-700/50">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">500+</div>
                <div className="text-sm text-slate-400">Gaming Operators</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">99.9%</div>
                <div className="text-sm text-slate-400">Uptime SLA</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">50M+</div>
                <div className="text-sm text-slate-400">Data Points</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">24/7</div>
                <div className="text-sm text-slate-400">Support</div>
              </div>
            </div>
          </div>

          {/* Floating Dashboard Mockup */}
          <div className="relative scroll-animate opacity-0">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main Dashboard */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">GAMWIT Analytics Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-600"></div>
                    </div>
                  </div>

                  {/* Interactive Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-2xl border border-blue-500/30 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <BarChart3 className="h-6 w-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
                        <span className="text-xs text-blue-300 font-medium animate-pulse">+12%</span>
                      </div>
                      <div className="text-sm font-medium text-slate-300">Total Revenue</div>
                      <div className="text-xl font-bold text-blue-300">$2.4M</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm p-4 rounded-2xl border border-green-500/30 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <TrendingUp className="h-6 w-6 text-green-300 group-hover:text-green-200 transition-colors" />
                        <span className="text-xs text-green-300 font-medium animate-pulse">+23%</span>
                      </div>
                      <div className="text-sm font-medium text-slate-300">Player Growth</div>
                      <div className="text-xl font-bold text-green-300">15.2K</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-2xl border border-purple-500/30 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <Shield className="h-6 w-6 text-purple-300 group-hover:text-purple-200 transition-colors" />
                        <span className="text-xs text-purple-300 font-medium animate-pulse">100%</span>
                      </div>
                      <div className="text-sm font-medium text-slate-300">Compliance</div>
                      <div className="text-xl font-bold text-purple-300">Secure</div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm p-4 rounded-2xl border border-orange-500/30 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <Users className="h-6 w-6 text-orange-300 group-hover:text-orange-200 transition-colors" />
                        <span className="text-xs text-orange-300 font-medium animate-pulse">+8%</span>
                      </div>
                      <div className="text-sm font-medium text-slate-300">Active Players</div>
                      <div className="text-xl font-bold text-orange-300">8.7K</div>
                    </div>
                  </div>

                  {/* Animated Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-300">Player Engagement</span>
                        <span className="text-sm font-bold text-white">87%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out animate-pulse"
                          style={{ width: "87%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-300">Risk Score</span>
                        <span className="text-sm font-bold text-white">Low</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out animate-pulse"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-600/30">
                    <div className="flex items-center space-x-3 mb-2">
                      <Brain className="h-5 w-5 text-purple-400 animate-pulse" />
                      <span className="text-sm font-medium text-slate-300">AI Insights</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Player churn risk: <span className="text-green-400 font-medium">Low</span> • 
                      VIP potential: <span className="text-blue-400 font-medium">High</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full animate-float-slow"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
