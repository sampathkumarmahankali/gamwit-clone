import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, BarChart3, Bell, Database, Users, Target, Shield, TrendingUp, AlertTriangle, Eye, Search, Sparkles, Rocket } from "lucide-react"
import Link from "next/link"

export default function Products() {
  const productCategories = [
    {
      title: "AI Models",
      description: "Advanced machine learning models designed specifically for gaming analytics",
      icon: Brain,
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
      items: [
        { name: "Player Churn", description: "Predict and prevent player churn with AI", href: "/products/ai-models/player-churn" },
        { name: "Player Lifetime Value", description: "Calculate and optimize player LTV", href: "/products/ai-models/player-lifetime-value" },
        { name: "Early VIP", description: "Identify high-value players early", href: "/products/ai-models/early-vip" },
        { name: "Responsible Gaming", description: "Monitor and promote responsible gaming", href: "/products/ai-models/responsible-gaming" },
        { name: "Bonus Abuse", description: "Detect and prevent bonus abuse", href: "/products/ai-models/bonus-abuse" },
        { name: "Player Frequency", description: "Analyze player engagement patterns", href: "/products/ai-models/player-frequency" },
        { name: "Anti Money Laundering", description: "Comprehensive AML monitoring", href: "/products/ai-models/anti-money-laundering" },
      ]
    },
  ]

  const features = [
    { 
      icon: Brain, 
      title: "AI-Powered", 
      description: "Advanced machine learning algorithms",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
    },
    { 
      icon: TrendingUp, 
      title: "Real-time", 
      description: "Live data processing and insights",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
    },
    { 
      icon: Shield, 
      title: "Secure", 
      description: "Enterprise-grade security and compliance",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
    },
    { 
      icon: Users, 
      title: "User-Friendly", 
      description: "Intuitive interface for all skill levels",
      gradient: "from-indigo-500 via-blue-500 to-indigo-600",
      bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-600/10",
      borderGradient: "from-indigo-400 to-blue-400",
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
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural-products" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-products)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <Rocket className="mr-2 h-4 w-4 animate-pulse" />
              Our Products
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Products
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Comprehensive suite of AI-powered analytics tools designed specifically for the gaming industry
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              From predictive AI models to real-time dashboards, discover how GAMWIT can transform your gaming operations
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                    <p className="text-slate-300 mt-2">{category.description}</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu hover:scale-105 animate-fade-in-up animate-card-enter"
                      style={{ animationDelay: `${(categoryIndex * 200) + (itemIndex * 100)}ms` }}
                    >
                      {/* Animated Border */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                      </div>

                      {/* Background Pattern */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                      {/* Content Container */}
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">
                            {item.name}
                          </h3>
                          <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-all duration-300 ease-out">
                          {item.description}
                        </p>
                      </div>

                      {/* Morphing Shapes */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 ease-out"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full group-hover:scale-150 group-hover:-rotate-180 transition-all duration-700 ease-out delay-200"></div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white animate-fade-in-up">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                GAMWIT Products?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto animate-pulse shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                    <feature.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">{feature.title}</h3>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-all duration-300 ease-out">{feature.description}</p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
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
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/2 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 hover:border-blue-400/30 transition-all duration-500">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg mb-6">
                <BarChart3 className="mr-2 h-4 w-4 animate-pulse" />
                Get Started
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Explore Our Products?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Discover how GAMWIT's AI-powered products can transform your gaming operations and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
                >
                  Try for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent px-8 py-4 rounded-full font-bold backdrop-blur-xl"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 