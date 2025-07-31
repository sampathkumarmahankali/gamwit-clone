import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, BarChart3, Bell, Database, Users, Target, Shield, TrendingUp, AlertTriangle, Eye, Search } from "lucide-react"
import Link from "next/link"

export default function Products() {
  const productCategories = [
    {
      title: "AI Models",
      description: "Advanced machine learning models designed specifically for gaming analytics",
      icon: Brain,
      color: "blue",
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      red: "from-red-50 to-red-100 border-red-200 text-red-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              Our <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">Products</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Comprehensive suite of AI-powered analytics tools designed specifically for the gaming industry
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              From predictive AI models to real-time dashboards, discover how GAMWIT can transform your gaming operations
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(category.color)} rounded-2xl flex items-center justify-center border transition-all duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
                    <p className="text-slate-600 mt-2">{category.description}</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:scale-105 animate-fade-in-up animate-card-enter"
                      style={{ animationDelay: `${(categoryIndex * 200) + (itemIndex * 100)}ms` }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors group-hover:scale-105">
                            {item.name}
                          </h3>
                          <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl scale-110"></div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
              Why Choose GAMWIT Products?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "AI-Powered", description: "Advanced machine learning algorithms" },
              { icon: TrendingUp, title: "Real-time", description: "Live data processing and insights" },
              { icon: Shield, title: "Secure", description: "Enterprise-grade security and compliance" },
              { icon: Users, title: "User-Friendly", description: "Intuitive interface for all skill levels" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Explore Our Products?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Discover how GAMWIT's AI-powered products can transform your gaming operations and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
                >
                  Try for Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 rounded-full font-bold"
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