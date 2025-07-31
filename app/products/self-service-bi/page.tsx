import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone, Sparkles, Rocket, BarChart3 as BarChart3Icon2 } from "lucide-react"

export default function SelfServiceBI() {
  const problems = [
    {
      icon: Database,
      title: "Data Access Bottlenecks",
      description: "Relying heavily on IT or specialized data teams for reports creates frustrating delays. Waiting on IT for data access means missed opportunities and slower decision-making.",
      gradient: "from-red-500 via-pink-500 to-red-600",
      bgGradient: "from-red-500/10 via-pink-500/10 to-red-600/10",
      borderGradient: "from-red-400 to-pink-400",
    },
    {
      icon: Clock,
      title: "Long Time to Get Desired Insight",
      description: "Traditional BI processes can take days or weeks to deliver insights. This slow turnaround time prevents timely decision-making and reduces business agility.",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      bgGradient: "from-orange-500/10 via-amber-500/10 to-orange-600/10",
      borderGradient: "from-orange-400 to-amber-400",
    },
    {
      icon: Users,
      title: "Limited User Autonomy",
      description: "Business users are dependent on technical teams for every report or analysis. This creates a bottleneck and reduces the ability to explore data independently.",
      gradient: "from-yellow-500 via-orange-500 to-yellow-600",
      bgGradient: "from-yellow-500/10 via-orange-500/10 to-yellow-600/10",
      borderGradient: "from-yellow-400 to-orange-400",
    },
    {
      icon: AlertTriangle,
      title: "Inconsistent Data Quality",
      description: "Multiple data sources and manual processes lead to inconsistencies. Different teams may work with different versions of the same data.",
      gradient: "from-red-500 via-rose-500 to-red-600",
      bgGradient: "from-red-500/10 via-rose-500/10 to-red-600/10",
      borderGradient: "from-red-400 to-rose-400",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Instant Data Access",
      description: "Get immediate access to your data without waiting for IT teams. Self-service capabilities empower business users to explore data independently.",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
    },
    {
      icon: TrendingUp,
      title: "Faster Insights",
      description: "Reduce time-to-insight from days to minutes. Create reports and dashboards on-demand without technical dependencies.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: Target,
      title: "User Empowerment",
      description: "Enable business users to create their own reports and analyses. Reduce dependency on technical teams and increase productivity.",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
    },
    {
      icon: Shield,
      title: "Data Governance",
      description: "Maintain data quality and security while enabling self-service. Built-in governance ensures consistent and reliable insights.",
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
                <pattern id="neural-bi" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-bi)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <BarChart3Icon2 className="mr-2 h-4 w-4 animate-pulse" />
              Business Intelligence
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              SELF-SERVICE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                BUSINESS INTELLIGENCE
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Take control of your data. Tailor insights to match your unique business needs.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Self-Service BI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
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
              <AlertTriangle className="mr-2 h-4 w-4 animate-pulse" />
              The Problem
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Traditional BI systems often slow you down, making it harder to make informed decisions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                when every moment counts.
              </span>
            </h2>
            <h3 className="text-2xl font-bold text-blue-400">Typical Workflow of Data to Insight</h3>
          </div>

          {/* Traditional Workflow Diagram */}
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">Standard Reports/ Dashboards</h4>
                    <p className="text-blue-200 text-sm">Limited Views Limited Insights</p>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">Business User/ Decision Maker</h4>
                    {/* Right arrow */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">Analytical Insights (Excel/PPT)</h4>
                    {/* Right arrow */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Center Column */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">Analyst</h4>
                    {/* Right arrow */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Left arrow */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">IT Department</h4>
                    {/* Left arrow */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Up arrow */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M17 14l-5-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">Multiple Databases</h4>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Left arrow */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">Collating Processing Massaging</h4>
                    {/* Up arrow */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M17 14l-5-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Distribution */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm p-4 rounded-lg border border-red-500/30">
                  <h4 className="font-bold text-lg text-white">80%</h4>
                  <p className="text-sm text-red-200">of time spent by business users/ analysts</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-4 rounded-lg border border-green-500/30">
                  <h4 className="font-bold text-lg text-white">20%</h4>
                  <p className="text-sm text-green-200">of time spent by business users/ analysts</p>
                </div>
              </div>

              {/* Arrows and Labels */}
              <div className="mt-6 text-center">
                <p className="text-blue-300 text-sm">Precanned/ BAU Analytics • Ad-hoc analysis • Prone to mismatches in expected insights vs received insights • Prone to communication errors of expectations</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Traditional BI Systems are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Slow, Inaccurate and Unreliable.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Traditional BI Problems Grid */}
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
              <AlertTriangle className="mr-2 h-4 w-4 animate-pulse" />
              Common Problems
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Traditional BI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Problems
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${problem.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${problem.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${problem.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                      <problem.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">{problem.title}</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out">
                    {problem.description}
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMWIT Advantage Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              GAMWIT Advantage
            </div>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-400">INSTANT</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-400">ACCURATE</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">RELIABLE</h3>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              With GAMWIT's Self-Service BI, you and your team can define process-specific KPIs and effortlessly customize dashboards with drag-and-drop functionality to meet your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                unique business needs.
              </span>
            </h2>
          </div>

          {/* GAMWIT Solution Diagram */}
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">
                How <span className="text-green-400">GAMWIT</span> solves it
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                {/* Left Side - User Interaction */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-blue-500/30">
                    <h4 className="font-bold mb-2 text-white">GAMWIT Standard Dashboards</h4>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-green-500/30">
                    <h4 className="font-bold mb-2 text-white">Business User/ Decision Maker</h4>
                    {/* Right arrow */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-purple-500/30">
                    <h4 className="font-bold mb-2 text-white">Custom Dashboards & Reports</h4>
                    {/* Right arrow */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Side - Data Flow */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-indigo-500/30">
                    <h4 className="font-bold mb-2 text-white">GAMWIT Data Engine</h4>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {/* Left arrow */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm p-4 rounded-lg relative border border-cyan-500/30">
                    <h4 className="font-bold mb-2 text-white">Multiple Data Sources</h4>
                    {/* Up arrow */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                        <path d="M17 14l-5-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Distribution */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-4 rounded-lg border border-green-500/30">
                  <h4 className="font-bold text-lg text-white">80%</h4>
                  <p className="text-sm text-green-200">of time spent on analysis & insights</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-bold text-lg text-white">20%</h4>
                  <p className="text-sm text-blue-200">of time spent on data preparation</p>
                </div>
              </div>

              {/* Arrows and Labels */}
              <div className="mt-6 text-center">
                <p className="text-green-300 text-sm">Self-Service Analytics • Real-time insights • Custom dashboards • No technical dependencies • Instant data access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <Star className="mr-2 h-4 w-4 animate-pulse" />
              Key Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Self-Service BI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Benefits
              </span>
            </h2>
          </div>

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
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/2 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-indigo-500/30 hover:border-indigo-400/30 transition-all duration-500">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-300 rounded-full text-sm font-medium shadow-lg mb-6">
                <BarChart3Icon2 className="mr-2 h-4 w-4 animate-pulse" />
                Get Started
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Data?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Start building custom dashboards and reports with GAMWIT's self-service BI platform.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Self-Service BI
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