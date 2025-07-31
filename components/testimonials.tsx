"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Zap, Database, Layers, Settings, DollarSign, Brain, Award, Sparkles, Target, Shield, Rocket } from "lucide-react"

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    )

    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const advantages = [
    {
      icon: Clock,
      title: "Intel When It Matters Most",
      description: "GAMWIT's predictions let you take action before problems arise. Whether it's for revenue generation, managing risks, ensuring compliance, or enhancing the gaming experience, you'll always be one step ahead.",
      color: "blue",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
      category: "Intelligence"
    },
    {
      icon: Zap,
      title: "Plug and Play Solution",
      description: "Building an AI model from scratch can take over 16 weeks. But with GAMWIT, you're ready to go in just 2-3 weeks. Our pre-built models integrate quickly with your data, customizing insights to match your specific needs — fast and efficiently.",
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
      category: "Speed"
    },
    {
      icon: Database,
      title: "Works With Varied Data Types and Sources",
      description: "No matter what kind of data you have, GAMWIT works seamlessly with it. Whether you're using a consolidated data platform or pulling from multiple sources like gaming platforms, sports betting feeds, or other sources, our game analytics tools work seamlessly with your data to provide valuable insights.",
      color: "purple",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
      category: "Compatibility"
    },
    {
      icon: Layers,
      title: "One Stop Solution For Multiple AI Use Cases",
      description: "With GAMWIT, you get access to a variety of AI-based gaming analytics models for gaming analytics under one platform. This saves you the hassle of setting them up individually or dealing with multiple vendors — all while cutting down your costs.",
      color: "indigo",
      gradient: "from-indigo-500 via-blue-500 to-indigo-600",
      bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-600/10",
      borderGradient: "from-indigo-400 to-blue-400",
      category: "Unified"
    },
    {
      icon: Settings,
      title: "Minimal Intervention From Your Team",
      description: "GAMWIT is fully automated! Once it's set up, it works on its own, providing you with actionable insights so you can focus on running and growing your business.",
      color: "orange",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      bgGradient: "from-orange-500/10 via-amber-500/10 to-orange-600/10",
      borderGradient: "from-orange-400 to-amber-400",
      category: "Automation"
    },
    {
      icon: DollarSign,
      title: "Huge Cost Savings",
      description: "Setting up a system like GAMWIT would normally require a team of data scientists, analysts, engineers, and business experts. With GAMWIT, you save up to 85% on setup costs and up to 50% on ongoing expenses.",
      color: "red",
      gradient: "from-red-500 via-pink-500 to-red-600",
      bgGradient: "from-red-500/10 via-pink-500/10 to-red-600/10",
      borderGradient: "from-red-400 to-pink-400",
      category: "Savings"
    },
    {
      icon: Brain,
      title: "Expertise in Data Analytics",
      description: "GAMWIT is built on decades of experience from our parent company, BizAcuity, in the gaming industry. Our models are powered by over 500 proprietary variables, ensuring highly accurate predictions from day one. You get the benefit of all this expertise right from the start.",
      color: "yellow",
      gradient: "from-yellow-500 via-orange-500 to-yellow-600",
      bgGradient: "from-yellow-500/10 via-orange-500/10 to-yellow-600/10",
      borderGradient: "from-yellow-400 to-orange-400",
      category: "Expertise"
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    setHoveredCard(null)
  }

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#neural)"/>
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
            Why Choose GAMWIT
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white animate-fade-in-up animation-delay-200">
            Why GAMWIT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Stands Out
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Discover the cutting-edge features that make GAMWIT the ultimate choice for gaming analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionProperty: "opacity, transform, box-shadow",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${advantage.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r ${advantage.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl"></div>
              </div>

              {/* Background Pattern */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${advantage.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              {/* Content Container */}
              <div className="relative z-10 space-y-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${advantage.gradient} text-white shadow-lg`}>
                    {advantage.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Animated Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${advantage.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 ${
                    visibleCards.includes(index) ? "animate-fade-in-up" : ""
                  }`}
                  style={{ 
                    animationDelay: `${index * 150 + 200}ms`,
                    animationDuration: "800ms",
                    animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  >
                    <advantage.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105 ${
                    visibleCards.includes(index) ? "animate-fade-in-up" : ""
                  }`}
                  style={{ 
                    animationDelay: `${index * 150 + 300}ms`,
                    animationDuration: "800ms",
                    animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  >
                    {advantage.title}
                  </h3>
                  <p className={`text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out ${
                    visibleCards.includes(index) ? "animate-fade-in-up" : ""
                  }`}
                  style={{ 
                    animationDelay: `${index * 150 + 400}ms`,
                    animationDuration: "800ms",
                    animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  >
                    {advantage.description}
                  </p>
                </div>

                {/* Interactive Elements */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-600"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Morphing Shapes */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 ease-out"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full group-hover:scale-150 group-hover:-rotate-180 transition-all duration-700 ease-out delay-200"></div>

              {/* Hover Tooltip */}
              {hoveredCard === index && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-slate-800/95 backdrop-blur-xl px-3 py-2 rounded-lg border border-slate-700/50 text-xs text-slate-300 shadow-2xl animate-fade-in-up">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                    <span>Proven Results</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-800/95 rotate-45 border-r border-b border-slate-700/50"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-400">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 rounded-full text-sm font-medium shadow-lg mb-8">
            <Award className="mr-2 h-4 w-4 animate-pulse" />
            Industry Recognition
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Awards and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Recognition
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-slate-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-700 hover:scale-105 animate-fade-in-up animation-delay-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/awards/esr-b2b-award.png" 
                    alt="ESR B2B Award"
                    className="h-20 w-auto object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <Award className="h-10 w-10 text-blue-400 fallback-icon" style={{ display: 'none' }} />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">ESR B2B Award</h4>
                <p className="text-sm text-slate-300 leading-relaxed">Nominated as Data and AI Partner in 2022 and 2023</p>
              </div>
            </div>
            <div className="group relative bg-slate-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-700 hover:scale-105 animate-fade-in-up animation-delay-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/awards/vixio-finalist-2024.png" 
                    alt="Vixio Finalist 2024"
                    className="h-20 w-auto object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <Award className="h-10 w-10 text-green-400 fallback-icon" style={{ display: 'none' }} />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">Vixio Finalist 2024</h4>
                <p className="text-sm text-slate-300 leading-relaxed">Finalist in the Compliance Innovator of the Year 2024 category</p>
              </div>
            </div>
            <div className="group relative bg-slate-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-700 hover:scale-105 animate-fade-in-up animation-delay-1000 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/awards/esr-north-america-2024.png" 
                    alt="ESR North America 2024"
                    className="h-20 w-auto object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <Award className="h-10 w-10 text-purple-400 fallback-icon" style={{ display: 'none' }} />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">ESR North America 2024</h4>
                <p className="text-sm text-slate-300 leading-relaxed">Nominated as Compliance Technology Provider in 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
