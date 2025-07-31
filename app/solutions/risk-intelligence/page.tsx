import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone } from "lucide-react"

export default function RiskIntelligence() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              <span className="text-red-600 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent animate-gradient">RISK</span> INTELLIGENCE
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Safeguard your business and minimize risks with our advanced Risk Intelligence tools.
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Get actionable, real-time insights to stay ahead of potential threats and keep your competitive edge intact.
            </p>
            <div className="animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
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
              <Brain className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold text-slate-900">AI Models</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced AI models designed specifically for risk detection and fraud prevention.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* Bonus Abuse */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Bonus Abuse</h3>
                  <p className="text-slate-600">Detect and prevent bonus abuse patterns with advanced machine learning algorithms</p>
                  <Link href="/products/ai-models/bonus-abuse" className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BarChart3 className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold text-slate-900">Dashboards</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive risk management dashboards providing real-time threat monitoring and risk assessment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Risk Management Dashboard</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Monitor risk metrics, fraud patterns, and security threats in real-time. 
                Track risk scores, suspicious activities, and compliance violations with intuitive visualizations.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-dashed border-red-300">
                <div className="text-center space-y-4">
                  <BarChart className="h-16 w-16 text-red-600 mx-auto" />
                  <p className="text-slate-600">Risk Intelligence Dashboard</p>
                  <p className="text-sm text-slate-500">Real-time risk monitoring and threat assessment</p>
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
              <AlertCircle className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold text-slate-900">Alerts</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Proactive risk alerts and notifications to keep your security team informed of potential threats and vulnerabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-dashed border-orange-300">
                <div className="text-center space-y-4">
                  <AlertTriangle className="h-16 w-16 text-orange-600 mx-auto" />
                  <p className="text-slate-600">Risk Alert System</p>
                  <p className="text-sm text-slate-500">Real-time notifications for security threats and risks</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Smart Risk Alerts</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Get instant notifications for suspicious activities, fraud attempts, compliance violations, 
                and security breaches. Stay ahead with proactive risk intelligence.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Service BI Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Database className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold text-slate-900">Self Service BI</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Empower your risk management team with self-service business intelligence tools for data-driven security decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Risk Intelligence Platform</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Enable your security team to create custom risk reports, analyze threat patterns, and generate insights 
                without technical expertise. Drag-and-drop interface for easy risk data exploration and visualization.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-dashed border-red-300">
                <div className="text-center space-y-4">
                  <DatabaseIcon className="h-16 w-16 text-red-600 mx-auto" />
                  <p className="text-slate-600">Self-Service Risk BI</p>
                  <p className="text-sm text-slate-500">Custom reports and analytics for risk management teams</p>
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
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Safeguard your business and minimize risks with our advanced Risk Intelligence tools designed to keep you ahead of threats.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
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