"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Shield, DollarSign, Users, Brain, Target, Zap, Award, Sparkles, ArrowRight } from "lucide-react"

export default function Solutions() {
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "GAMWIT helps boost your revenue (NGR, GGR) by increasing active players, average revenue per player, and player lifetime value.",
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
      metric: "+45%",
      metricLabel: "Revenue Increase"
    },
    {
      icon: Shield,
      title: "Slash Risk Costs",
      description: "GAMWIT's bonus abuse model helps you lower the risks and costs associated with fraud and other business threats.",
      color: "red",
      gradient: "from-red-500 via-pink-500 to-red-600",
      bgGradient: "from-red-500/10 via-pink-500/10 to-red-600/10",
      borderGradient: "from-red-400 to-pink-400",
      metric: "-78%",
      metricLabel: "Risk Reduction"
    },
    {
      icon: DollarSign,
      title: "Cut Marketing Costs",
      description: "Cut down your spending on bonuses, promotions, and affiliates by targeting your efforts more effectively, removing guesswork, and minimizing human bias.",
      color: "blue",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
      metric: "-62%",
      metricLabel: "Cost Savings"
    },
    {
      icon: Shield,
      title: "Reduced Compliance Cost",
      description: "Stay compliant with regulations at minimal cost thanks to our responsible gaming and anti-money laundering models.",
      color: "purple",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
      metric: "-85%",
      metricLabel: "Compliance Cost"
    },
    {
      icon: Brain,
      title: "Data-Driven Decision-Making",
      description: "Make smart, strategic decisions based on accurate, real-time gaming data analytics — no more relying on guesswork.",
      color: "indigo",
      gradient: "from-indigo-500 via-blue-500 to-indigo-600",
      bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-600/10",
      borderGradient: "from-indigo-400 to-blue-400",
      metric: "100%",
      metricLabel: "Data Accuracy"
    },
    {
      icon: Users,
      title: "Safe, Fair Gaming Environment",
      description: "Our gaming analytics AI models for anti-money laundering, bonus abuse, and responsible gaming help create a secure, fair gaming environment, building player trust.",
      color: "green",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
      metric: "99.9%",
      metricLabel: "Security Score"
    },
    {
      icon: Target,
      title: "Maximize Player Retention",
      description: "Keep players engaged and coming back for more with personalized experiences and rewards that speak to their needs.",
      color: "orange",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      bgGradient: "from-orange-500/10 via-amber-500/10 to-orange-600/10",
      borderGradient: "from-orange-400 to-amber-400",
      metric: "+73%",
      metricLabel: "Retention Rate"
    },
    {
      icon: Zap,
      title: "Unmatched Player Experiences",
      description: "GAMWIT's predictive insights offer tailored recommendations and campaigns that enhance your players' experience, encouraging them to return.",
      color: "pink",
      gradient: "from-pink-500 via-rose-500 to-pink-600",
      bgGradient: "from-pink-500/10 via-rose-500/10 to-pink-600/10",
      borderGradient: "from-pink-400 to-rose-400",
      metric: "+89%",
      metricLabel: "Player Satisfaction"
    },
    {
      icon: Award,
      title: "Stay Ahead of the Competition",
      description: "Outpace the competition with GAMWIT's targeted insights, ensuring you're always one step ahead of market trends.",
      color: "yellow",
      gradient: "from-yellow-500 via-orange-500 to-yellow-600",
      bgGradient: "from-yellow-500/10 via-orange-500/10 to-yellow-600/10",
      borderGradient: "from-yellow-400 to-orange-400",
      metric: "3x",
      metricLabel: "Faster Insights"
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
            Competitive Advantage
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white animate-fade-in-up animation-delay-200">
            The Edge{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
              GAMWIT
            </span>{" "}
            Brings to You
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Discover how our AI-powered platform transforms gaming operations with measurable results
          </p>
        </div>

        {/* Interactive Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-700 ease-out overflow-hidden ${
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
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
              </div>

              {/* Background Pattern */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Header with Metric */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <benefit.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                      {benefit.metric}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {benefit.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105 ${
                    visibleCards.includes(index) ? "animate-fade-in-up" : ""
                  }`}
                  style={{ 
                    animationDelay: `${index * 150 + 200}ms`,
                    animationDuration: "800ms",
                    animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  >
                    {benefit.title}
                  </h3>
                  <p className={`text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out ${
                    visibleCards.includes(index) ? "animate-fade-in-up" : ""
                  }`}
                  style={{ 
                    animationDelay: `${index * 150 + 300}ms`,
                    animationDuration: "800ms",
                    animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Interactive Elements */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-600"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
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

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-400">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Gaming Operations?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of gaming operators who trust GAMWIT's AI-powered platform to drive growth and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Start Free Trial
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              </button>
              <button className="group border-2 border-slate-600 text-slate-300 hover:border-green-400 hover:text-green-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <Target className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
