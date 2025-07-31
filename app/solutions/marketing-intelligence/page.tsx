import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, TrendingDown, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone, Crown } from "lucide-react"

export default function MarketingIntelligence() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">MARKETING</span> INTELLIGENCE
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Empower your marketing team with invaluable insights. With our curated suite of tools, you can cut marketing costs while boosting your topline and enhancing customer experiences.
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Stay ahead of the competition by giving your team the insights they need, exactly when they need them. Now, they can make strategic decisions rooted in accurate, real-time data—no more guesswork.
            </p>
            <div className="animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try for Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">AI Models</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced AI models designed specifically for marketing intelligence and customer behavior analysis.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Player Churn */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto">
                    <TrendingDown className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Player Churn</h3>
                  <p className="text-sm text-slate-600">Predict and prevent customer churn with advanced analytics</p>
                  <Link href="/products/ai-models/player-churn" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Player Lifetime Value */}
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Player Lifetime Value</h3>
                  <p className="text-sm text-slate-600">Maximize customer value with predictive modeling</p>
                  <Link href="/products/ai-models/player-lifetime-value" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Player Frequency */}
            <div className="space-y-4 animate-fade-in-up animation-delay-400">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Activity className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Player Frequency</h3>
                  <p className="text-sm text-slate-600">Analyze engagement patterns and optimize retention</p>
                  <Link href="/products/ai-models/player-frequency" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Early VIP */}
            <div className="space-y-4 animate-fade-in-up animation-delay-600">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <Crown className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Early VIP</h3>
                  <p className="text-sm text-slate-600">Identify high-value customers early in their journey</p>
                  <Link href="/products/ai-models/early-vip" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bonus Abuse */}
            <div className="space-y-4 animate-fade-in-up animation-delay-800">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Bonus Abuse</h3>
                  <p className="text-sm text-slate-600">Detect and prevent bonus abuse patterns</p>
                  <Link href="/products/ai-models/bonus-abuse" className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Dashboards</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive marketing dashboards providing real-time insights and performance metrics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Marketing Performance Dashboard</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Track key marketing metrics, campaign performance, and customer acquisition costs in real-time. 
                Monitor ROI, conversion rates, and customer lifetime value with intuitive visualizations.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-dashed border-blue-300">
                <div className="text-center space-y-4">
                  <BarChart className="h-16 w-16 text-blue-600 mx-auto" />
                  <p className="text-slate-600">Marketing Intelligence Dashboard</p>
                  <p className="text-sm text-slate-500">Real-time marketing metrics and performance analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertCircle className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Alerts</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Proactive alerts and notifications to keep your marketing team informed of critical events and opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-dashed border-orange-300">
                <div className="text-center space-y-4">
                  <AlertTriangle className="h-16 w-16 text-orange-600 mx-auto" />
                  <p className="text-slate-600">Marketing Alert System</p>
                  <p className="text-sm text-slate-500">Real-time notifications for marketing events and opportunities</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Smart Marketing Alerts</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Get instant notifications for customer churn risks, high-value opportunities, campaign performance drops, 
                and market trend changes. Stay ahead with proactive marketing intelligence.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Service BI Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Database className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Self Service BI</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Empower your marketing team with self-service business intelligence tools for data-driven decision making.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Marketing Intelligence Platform</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Enable your marketing team to create custom reports, analyze customer data, and generate insights 
                without technical expertise. Drag-and-drop interface for easy data exploration and visualization.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-dashed border-green-300">
                <div className="text-center space-y-4">
                  <DatabaseIcon className="h-16 w-16 text-green-600 mx-auto" />
                  <p className="text-slate-600">Self-Service Marketing BI</p>
                  <p className="text-sm text-slate-500">Custom reports and analytics for marketing teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Ready to Transform Your Marketing Intelligence?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cut marketing costs while boosting your topline and enhancing customer experiences with our comprehensive suite of tools.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 