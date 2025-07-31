import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone, Sparkles, Rocket } from "lucide-react"

export default function CustomizedIntelligence() {
  const aiModels = [
    {
      icon: Settings,
      title: "Custom AI Models",
      description: "Tailored machine learning models designed specifically for your business processes and requirements",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
      href: "/products/ai-models",
    },
  ]

  const benefits = [
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Custom AI models and dashboards designed specifically for your unique business requirements and workflows.",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
    },
    {
      icon: Users,
      title: "Departmental Focus",
      description: "Specialized solutions for different departments including marketing, operations, finance, and customer service.",
      gradient: "from-indigo-500 via-blue-500 to-indigo-600",
      bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-600/10",
      borderGradient: "from-indigo-400 to-blue-400",
    },
    {
      icon: Target,
      title: "Scalable Architecture",
      description: "Flexible and scalable solutions that grow with your business and adapt to changing requirements.",
      gradient: "from-pink-500 via-rose-500 to-pink-600",
      bgGradient: "from-pink-500/10 via-rose-500/10 to-pink-600/10",
      borderGradient: "from-pink-400 to-rose-400",
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
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-violet-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural-customized" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-purple-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-purple-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-purple-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-customized)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <Settings className="mr-2 h-4 w-4 animate-pulse" />
              Customized Intelligence
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400">
                CUSTOMIZED
              </span>{" "}
              INTELLIGENCE
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Managing multiple departments and need a tailored AI-powered analytics solution?
            </p>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              With GAMWIT, you get a seamless, customized approach designed to fit your unique business needs.
            </p>
            <div className="animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
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
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-violet-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium shadow-lg">
              <Brain className="mr-2 h-4 w-4 animate-pulse" />
              AI Models
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Custom{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                AI Models
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Custom AI models tailored to your specific business requirements and departmental needs.
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
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium group-hover:scale-105 transition-all duration-300 ease-out"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                    </Link>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
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
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-violet-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium shadow-lg">
              <Star className="mr-2 h-4 w-4 animate-pulse" />
              Key Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Customized{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
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
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
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
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/2 right-1/4 w-24 h-24 bg-violet-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 hover:border-purple-400/30 transition-all duration-500">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium shadow-lg mb-6">
                <Settings className="mr-2 h-4 w-4 animate-pulse" />
                Get Started
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Customize Your Intelligence?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Start building tailored AI solutions that perfectly fit your unique business requirements.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
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