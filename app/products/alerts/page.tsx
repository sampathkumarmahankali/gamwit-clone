import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, Bell, Smartphone, Settings, Layers, Smartphone as SmartphoneIcon, Monitor, Zap as ZapIcon, Shield as ShieldIcon, Database as DatabaseIcon, Smartphone as MobileIcon, Sparkles, Rocket } from "lucide-react"

export default function Alerts() {
  const benefits = [
    {
      icon: ZapIcon,
      title: "Boost Response Times and Minimize Losses",
      description: "With timely alerts from KPI alerts platform, you can stop wasting time hunting down performance issues. Our system ensures you're notified the moment a KPI falls out of range, so your team can step in quickly and effectively.",
      subDescription: "Faster responses mean fewer losses, less downtime, and happier customers.",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
    },
    {
      icon: Target,
      title: "Prioritize What Matters Most",
      description: "In today's data-heavy world, it's easy to feel overwhelmed. Our KPI alerts cut through the noise, spotlighting the metrics that truly impact your business goals.",
      subDescription: "This helps your team focus on what drives results, right where it matters most.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: Settings,
      title: "Optimize Resources and Reduce Risks",
      description: "With clear insights from our iGaming KPI alerts, you'll know exactly where your resources are needed.",
      subDescription: "This targeted approach helps you allocate resources more effectively and reduce operational risks.",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
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
                <pattern id="neural-alerts" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-alerts)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <Bell className="mr-2 h-4 w-4 animate-pulse" />
              Real-time Monitoring
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                ALERTS
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Track KPIs and business drivers in real time. With Alerts, you're always one step ahead.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Alerts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Monitoring Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg">
              <AlertTriangle className="mr-2 h-4 w-4 animate-pulse" />
              Proactive Monitoring
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Identify and address business issues{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                before they even become Problems
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-blue-400">GAMWIT proactively monitors your business drivers, so you can stay ahead</h3>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <p className="text-xl text-slate-300 leading-relaxed">
              GAMWIT keeps an eye on your business drivers, so you're always ahead of the curve. Why wait for a quarterly report to find out your sales are slipping or costs are soaring? Our iGaming KPI alerts notify you instantly when a critical metric veers off track, empowering you to act fast and make smarter, data-driven decisions.
            </p>
            <p className="text-lg text-slate-300">
              This proactive approach stops small problems from turning into big setbacks.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
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
                  <p className="text-slate-300 group-hover:text-slate-200 transition-all duration-300 ease-out">
                    {benefit.subDescription}
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium shadow-lg">
              <Star className="mr-2 h-4 w-4 animate-pulse" />
              Value Proposition
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              In a world where every minute counts and every decision shapes your bottom line,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                staying informed is essential.
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-blue-400">
              That's where GAMWIT's KPI Alerts step in.
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Experience a smarter way to manage your business with our advanced, intuitive solution, designed to keep you ahead of the curve at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
              <Settings className="mr-2 h-4 w-4 animate-pulse" />
              Key Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Key{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Features
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bell,
                title: "Real-time Alerts",
                description: "Get instant notifications when KPIs fall out of range",
                gradient: "from-red-500 via-pink-500 to-red-600",
                bgGradient: "from-red-500/10 via-pink-500/10 to-red-600/10",
                borderGradient: "from-red-400 to-pink-400",
              },
              {
                icon: Smartphone,
                title: "Mobile Notifications",
                description: "Stay informed on the go with mobile alerts",
                gradient: "from-blue-500 via-cyan-500 to-blue-600",
                bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
                borderGradient: "from-blue-400 to-cyan-400",
              },
              {
                icon: Settings,
                title: "Customizable Thresholds",
                description: "Set your own alert thresholds and conditions",
                gradient: "from-green-500 via-emerald-500 to-green-600",
                bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
                borderGradient: "from-green-400 to-emerald-400",
              },
              {
                icon: Users,
                title: "Team Notifications",
                description: "Alert specific team members based on their roles",
                gradient: "from-purple-500 via-violet-500 to-purple-600",
                bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
                borderGradient: "from-purple-400 to-violet-400",
              },
              {
                icon: BarChart3,
                title: "KPI Tracking",
                description: "Monitor multiple KPIs simultaneously",
                gradient: "from-indigo-500 via-blue-500 to-indigo-600",
                bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-600/10",
                borderGradient: "from-indigo-400 to-blue-400",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and uptime",
                gradient: "from-yellow-500 via-orange-500 to-yellow-600",
                bgGradient: "from-yellow-500/10 via-orange-500/10 to-yellow-600/10",
                borderGradient: "from-yellow-400 to-orange-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 space-y-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                    <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
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
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-12 border border-red-500/30 hover:border-red-400/30 transition-all duration-500">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-full text-sm font-medium shadow-lg mb-6">
                <Bell className="mr-2 h-4 w-4 animate-pulse" />
                Get Started
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Stay Ahead with Real-time Alerts?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Start monitoring your KPIs in real-time with GAMWIT's advanced alert system.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Alerts
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