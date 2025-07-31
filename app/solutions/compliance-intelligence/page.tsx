import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone } from "lucide-react"

export default function ComplianceIntelligence() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              <span className="text-green-600 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">COMPLIANCE</span> INTELLIGENCE
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Safeguard your organization from legal and financial risks with our comprehensive Compliance Intelligence solutions. Proactively meet regulatory requirements using predictive analytics designed to keep you ahead of the curve.
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Gain real-time, actionable insights that not only protect your revenue but also enhance your organization's value. Empower your team to make informed, timely decisions that uphold gaming compliance standards and drive long-term success.
            </p>
            <div className="animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
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
              <Brain className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-slate-900">AI Models</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Advanced AI models designed specifically for compliance monitoring and regulatory adherence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Responsible Gaming */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Responsible Gaming</h3>
                  <p className="text-slate-600">Monitor and promote responsible gaming practices with AI-powered detection</p>
                  <Link href="/products/ai-models/responsible-gaming" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Anti-Money Laundering */}
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-red-100 rounded-xl flex items-center justify-center mx-auto">
                    <Lock className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Anti-Money Laundering</h3>
                  <p className="text-slate-600">Detect and prevent money laundering activities with advanced compliance algorithms</p>
                  <Link href="/products/ai-models/anti-money-laundering" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BarChart3 className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-slate-900">Dashboards</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive compliance dashboards providing real-time regulatory monitoring and audit trails.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Compliance Management Dashboard</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Monitor compliance metrics, regulatory violations, and audit requirements in real-time. 
                Track compliance scores, regulatory changes, and enforcement actions with intuitive visualizations.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-dashed border-green-300">
                <div className="text-center space-y-4">
                  <BarChart className="h-16 w-16 text-green-600 mx-auto" />
                  <p className="text-slate-600">Compliance Intelligence Dashboard</p>
                  <p className="text-sm text-slate-500">Real-time compliance monitoring and regulatory tracking</p>
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
              <AlertCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-slate-900">Alerts</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Proactive compliance alerts and notifications to keep your legal team informed of regulatory changes and violations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-dashed border-orange-300">
                <div className="text-center space-y-4">
                  <AlertTriangle className="h-16 w-16 text-orange-600 mx-auto" />
                  <p className="text-slate-600">Compliance Alert System</p>
                  <p className="text-sm text-slate-500">Real-time notifications for regulatory changes and violations</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Smart Compliance Alerts</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Get instant notifications for regulatory changes, compliance violations, audit requirements, 
                and enforcement actions. Stay ahead with proactive compliance intelligence.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Service BI Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Database className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-slate-900">Self Service BI</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Empower your compliance team with self-service business intelligence tools for data-driven regulatory decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Compliance Intelligence Platform</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Enable your legal team to create custom compliance reports, analyze regulatory data, and generate insights 
                without technical expertise. Drag-and-drop interface for easy compliance data exploration and visualization.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-dashed border-green-300">
                <div className="text-center space-y-4">
                  <DatabaseIcon className="h-16 w-16 text-green-600 mx-auto" />
                  <p className="text-slate-600">Self-Service Compliance BI</p>
                  <p className="text-sm text-slate-500">Custom reports and analytics for compliance teams</p>
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
              Ready to Ensure Compliance Excellence?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Safeguard your organization from legal and financial risks with our comprehensive Compliance Intelligence solutions designed to keep you ahead of regulatory requirements.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
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