"use client"

import { Play, ArrowRight, BarChart3, Shield, Brain, Settings, Zap, Target, Sparkles, Loader2, Eye, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export default function Features() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({})
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({})
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const solutions = [
    {
      icon: BarChart3,
      title: "Marketing Intelligence",
      description: "Boost your revenue, cut down costs, and enhance player experience and retention — all with data-driven insights from gaming data analytics.",
      backDescription: "Advanced analytics for player behavior, churn prediction, and revenue optimization with real-time dashboards and automated insights.",
      color: "blue",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
      demoUrl: "/demos/marketing-intelligence",
      features: ["Player Segmentation", "Churn Prediction", "Revenue Analytics", "A/B Testing"],
      image: "/demos/marketing-demo.png"
    },
    {
      icon: Shield,
      title: "Risk Intelligence",
      description: "Minimize business risks by spotting bonus abusers and duplicate accounts with the power of AI-powered gaming analytics before they become a problem.",
      backDescription: "AI-powered fraud detection, bonus abuse prevention, and risk scoring with real-time alerts and automated blocking systems.",
      color: "red",
      gradient: "from-red-500 via-pink-500 to-red-600",
      bgGradient: "from-red-500/10 via-pink-500/10 to-red-600/10",
      borderGradient: "from-red-400 to-pink-400",
      demoUrl: "/demos/risk-intelligence",
      features: ["Fraud Detection", "Bonus Abuse Prevention", "Risk Scoring", "Real-time Alerts"],
      image: "/demos/risk-demo.png"
    },
    {
      icon: Brain,
      title: "Compliance Intelligence",
      description: "Stay ahead of regulations by using AI-powered gaming analytics to identify potential money laundering and player addiction risks early on.",
      backDescription: "Regulatory compliance monitoring, anti-money laundering detection, and responsible gaming analytics with automated reporting.",
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
      demoUrl: "/demos/compliance-intelligence",
      features: ["AML Detection", "Responsible Gaming", "Regulatory Reporting", "Audit Trails"],
      image: "/demos/compliance-demo.png"
    },
    {
      icon: Settings,
      title: "Customized Intelligence",
      description: "Build tailored dashboards and alerts that fit your team's needs, giving them the tools to work smarter and faster.",
      backDescription: "Custom dashboard creation, personalized alerts, and white-label solutions with flexible API integration and custom branding.",
      color: "purple",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
      demoUrl: "/demos/customized-intelligence",
      features: ["Custom Dashboards", "Personalized Alerts", "White-label Solutions", "API Integration"],
      image: "/demos/customized-demo.png"
    },
  ]

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const handleDemoClick = (index: number) => {
    setLoadingStates(prev => ({ ...prev, [index]: true }))
    
    // Simulate loading
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [index]: false }))
      // Here you would navigate to the demo URL
      console.log(`Navigating to: ${solutions[index].demoUrl}`)
    }, 2000)
  }

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated AI-themed Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        
        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
        
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
        {/* See GAMWIT in Action */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
            See GAMWIT in Action
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white animate-fade-in-up animation-delay-200">
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              AI-Powered
            </span>{" "}
            Analytics
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Watch how GAMWIT transforms raw gaming data into actionable intelligence
          </p>
          
          {/* Enhanced Video Embed */}
          <div className="max-w-4xl mx-auto mt-12 animate-fade-in-up animation-delay-600">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-slate-700/50">
                <iframe
                  src="https://www.youtube.com/embed/39jCz7GtSDw?si=bRdxYOx9LvrInBRB"
                  title="GAMWIT Demo Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                
                {/* Floating Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our AI Solutions */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
            <Brain className="mr-2 h-4 w-4 animate-pulse" />
            AI Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white animate-fade-in-up animation-delay-200">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              AI Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Discover how our AI-powered solutions transform gaming analytics
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group relative h-96 perspective-1000"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.includes(index) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden">
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${solution.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${solution.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                    </div>

                    {/* Background Pattern */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                        {/* Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          <solution.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>

                        {/* Title and Description */}
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                            {solution.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-6">
                        <Button
                          onClick={() => handleCardFlip(index)}
                          className="group/btn relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center">
                            <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                            Learn More
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                        </Button>

                        <Button
                          onClick={() => handleDemoClick(index)}
                          disabled={loadingStates[index]}
                          className="group/btn relative bg-transparent border-2 border-slate-600 text-slate-300 hover:border-green-400 hover:text-green-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          {loadingStates[index] ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <span className="flex items-center">
                              <Play className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                              Try Demo
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 ease-out"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full group-hover:scale-150 group-hover:-rotate-180 transition-all duration-700 ease-out delay-200"></div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="relative h-full bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 overflow-hidden">
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.bgGradient} opacity-50`}></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="space-y-6">
                        {/* Demo Preview */}
                        <div className="relative">
                          {!imageLoaded[index] && (
                            <div className="w-full h-32 bg-slate-800 rounded-xl animate-pulse flex items-center justify-center">
                              <Loader2 className="h-8 w-8 text-slate-400 animate-spin" />
                            </div>
                          )}
                          <img
                            src={solution.image}
                            alt={`${solution.title} Demo`}
                            className={`w-full h-32 object-cover rounded-xl shadow-lg transition-opacity duration-500 ${
                              imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => handleImageLoad(index)}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback-demo') as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="fallback-demo w-full h-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl flex items-center justify-center" style={{ display: 'none' }}>
                            <Code className="h-8 w-8 text-slate-400" />
                          </div>
                        </div>

                        {/* Features List */}
                <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {solution.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-slate-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Back Action Buttons */}
                      <div className="flex items-center justify-between pt-6">
                        <Button
                          onClick={() => handleCardFlip(index)}
                          className="group/btn relative bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <span className="flex items-center">
                            <ArrowRight className="mr-2 h-4 w-4 group-hover/btn:rotate-180 transition-transform duration-300" />
                            Back
                          </span>
                        </Button>

                        <Button
                          onClick={() => handleDemoClick(index)}
                          disabled={loadingStates[index]}
                          className="group/btn relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
                        >
                          {loadingStates[index] ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <span className="relative z-10 flex items-center">
                              <Zap className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                              Launch Demo
                            </span>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-400">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Gaming Analytics?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of gaming operators who trust GAMWIT's AI-powered platform to drive growth and ensure compliance.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Start Free Trial
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              </Button>
              <Button variant="outline" className="group border-2 border-slate-600 text-slate-300 hover:border-green-400 hover:text-green-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <Target className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Schedule Demo
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
