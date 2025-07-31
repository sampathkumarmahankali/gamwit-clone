import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone, Sparkles, Rocket } from "lucide-react"

export default function RiskIntelligence() {
  const aiModels = [
    {
      icon: Shield,
      title: "Bonus Abuse",
      description: "Detect and prevent bonus abuse patterns with advanced machine learning algorithms",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      bgGradient: "from-orange-500/10 via-amber-500/10 to-orange-600/10",
      borderGradient: "from-orange-400 to-amber-400",
      href: "/products/ai-models/bonus-abuse",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Advanced AI models detect and prevent fraudulent activities in real-time, protecting your business from financial losses.",
      gradient: "from-red-500 via-pink-500 to-red-600",
      bgGradient: "from-red-500/10 via-pink-500/10 to-red-600/10",
      borderGradient: "from-red-400 to-pink-400",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation and scoring to identify potential threats before they impact your business.",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      bgGradient: "from-orange-500/10 via-amber-500/10 to-orange-600/10",
      borderGradient: "from-orange-400 to-amber-400",
    },
    {
      icon: Lock,
      title: "Compliance Monitoring",
      description: "Ensure regulatory compliance with automated monitoring and reporting capabilities.",
      gradient: "from-yellow-500 via-orange-500 to-yellow-600",
      bgGradient: "from-yellow-500/10 via-orange-500/10 to-yellow-600/10",
      borderGradient: "from-yellow-400 to-orange-400",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural-risk" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-red-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-red-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-red-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-risk)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <Shield className="mr-2 h-4 w-4 animate-pulse" />
              Risk Intelligence
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                RISK
              </span>{" "}
              INTELLIGENCE
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Safeguard your business and minimize risks with our advanced Risk Intelligence tools.
            </p>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Get actionable, real-time insights to stay ahead of potential threats and keep your competitive edge intact.
            </p>
            <div className="animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-red-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-full text-sm font-medium shadow-lg">
              <Brain className="mr-2 h-4 w-4 animate-pulse" />
              AI Models
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Advanced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                AI Models
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Advanced AI models designed specifically for risk detection and fraud prevention.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {aiModels.map((model, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${model.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${model.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${model.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 space-y-4">
                  <div className="text-center space-y-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${model.gradient} rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                      <model.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">{model.title}</h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-all duration-300 ease-out">{model.description}</p>
                    <Link 
                      href={model.href} 
                      className="inline-flex items-center text-red-400 hover:text-red-300 text-sm font-medium group-hover:scale-105 transition-all duration-300 ease-out"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                    </Link>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-full text-sm font-medium shadow-lg">
              <Star className="mr-2 h-4 w-4 animate-pulse" />
              Key Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Risk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Benefits
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                      <benefit.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">{benefit.title}</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out">
                    {benefit.description}
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/2 right-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-12 border border-red-500/30 hover:border-red-400/30 transition-all duration-500">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-full text-sm font-medium shadow-lg mb-6">
                <Shield className="mr-2 h-4 w-4 animate-pulse" />
                Get Started
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Business?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Start leveraging AI-powered risk intelligence to safeguard your business from threats.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 