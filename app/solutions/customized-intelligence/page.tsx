import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone } from "lucide-react"

export default function CustomizedIntelligence() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent animate-gradient">CUSTOMIZED</span> INTELLIGENCE
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Managing multiple departments and need a tailored AI-powered analytics solution?
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              With GAMWIT, you get a seamless, customized approach designed to fit your unique business needs.
            </p>
            <div className="animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
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
              <Brain className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">AI Models</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Custom AI models tailored to your specific business requirements and departmental needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {/* Custom AI Models */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <Settings className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Custom AI Models</h3>
                  <p className="text-slate-600">Tailored machine learning models designed specifically for your business processes and requirements</p>
                  <Link href="/products/ai-models" className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BarChart3 className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">Dashboards</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Custom dashboards designed to meet your specific departmental and organizational requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Custom Dashboard Solutions</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tailored dashboards that align with your business processes, KPIs, and departmental workflows. 
                Custom visualizations and metrics designed specifically for your organization's unique needs.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border-2 border-dashed border-purple-300">
                <div className="text-center space-y-4">
                  <BarChart className="h-16 w-16 text-purple-600 mx-auto" />
                  <p className="text-slate-600">Custom Intelligence Dashboard</p>
                  <p className="text-sm text-slate-500">Tailored analytics and insights for your business</p>
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
              <AlertCircle className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">Alerts</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Custom alert systems designed to notify the right people at the right time based on your business rules.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-dashed border-orange-300">
                <div className="text-center space-y-4">
                  <AlertTriangle className="h-16 w-16 text-orange-600 mx-auto" />
                  <p className="text-slate-600">Custom Alert System</p>
                  <p className="text-sm text-slate-500">Tailored notifications for your business processes</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Smart Custom Alerts</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Configure alerts based on your specific business rules, thresholds, and departmental requirements. 
                Ensure the right stakeholders are notified at the right time with relevant information.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Service BI Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Database className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">Self Service BI</h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Custom self-service BI tools designed to empower your teams with data-driven insights tailored to your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Custom Intelligence Platform</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Enable your teams to create custom reports, analyze data, and generate insights 
                without technical expertise. Tailored interface designed specifically for your business processes and workflows.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium">
                  Try for Free
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-medium">
                  Know More
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border-2 border-dashed border-purple-300">
                <div className="text-center space-y-4">
                  <DatabaseIcon className="h-16 w-16 text-purple-600 mx-auto" />
                  <p className="text-slate-600">Custom Self-Service BI</p>
                  <p className="text-sm text-slate-500">Tailored reports and analytics for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Customized Intelligence?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tailored solutions designed to fit your unique business requirements and departmental needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                    <Settings className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Tailored Solutions</h3>
                  <p className="text-sm text-slate-600">Custom-built features designed specifically for your business processes and requirements</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Multi-Department Support</h3>
                  <p className="text-sm text-slate-600">Seamless integration across all departments with unified data and insights</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in-up animation-delay-400">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-200">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Scalable Architecture</h3>
                  <p className="text-sm text-slate-600">Flexible platform that grows with your business and adapts to changing needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Ready for Your Custom Solution?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get a seamless, customized approach designed to fit your unique business needs with GAMWIT's tailored intelligence platform.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
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