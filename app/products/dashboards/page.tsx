import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Sparkles, Rocket } from "lucide-react"

export default function Dashboards() {
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
                <pattern id="neural-dashboards" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-dashboards)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <BarChart3 className="mr-2 h-4 w-4 animate-pulse" />
              Analytics Platform
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              GAMWIT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                DASHBOARDS
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Get a Holistic View of Your Business
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Dashboards
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Visuals Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
              <Eye className="mr-2 h-4 w-4 animate-pulse" />
              Customizable Views
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Tailored Visuals for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Every Business Level
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              GAMWIT's dashboards are fully customizable to fit the needs of every team—whether you're an executive, manager, or part of an operational team. Each level gets relevant insights, presented in a way that makes decision-making easier.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Strategic Dashboards */}
            <div className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                  <BarChart className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">Strategic Dashboards</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out">
                Get a high-level overview of your business goals, current progress, and future opportunities with forecasts and projections. Examples include:
              </p>
              <ul className="space-y-2 text-slate-300 mt-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Executive Summary</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Revenue Dashboard</span>
                </li>
              </ul>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
            </div>

            {/* Tactical Dashboards */}
            <div className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                  <PieChart className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">Tactical Dashboards</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out">
                Spot issues in real-time with dynamic visualizations. Analyze trends, plan resources, and optimize product placement with historical and current data. Examples include:
              </p>
              <ul className="space-y-2 text-slate-300 mt-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Host Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Campaign Performance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Player & Product Summary</span>
                </li>
              </ul>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
            </div>

            {/* Operational Dashboards */}
            <div className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                  <LineChart className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">Operational Dashboards</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out">
                Keep your operations on track by monitoring performance metrics for specific business areas. Some of the dashboard examples are:
              </p>
              <ul className="space-y-2 text-slate-300 mt-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Slots: Revenue & Activity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Table Games: Revenue & Activity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Floor Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Player Behavior</span>
                </li>
              </ul>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping delay-1000 opacity-75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              In today's fast-paced iGaming and casino industry, businesses face challenges like:
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge 1 */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Data Integration</h3>
              </div>
              <p className="text-slate-600">
                Pulling together scattered data from different systems to create a unified view for meaningful insights.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Layers className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Multiple Data Sources</h3>
              </div>
              <p className="text-slate-600">
                Handling multiple data sources efficiently without losing valuable information.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Quick Decisions</h3>
              </div>
              <p className="text-slate-600">
                Making quick, data-driven decisions, often hindered by limited data granularity and a lack of drill-down capabilities.
              </p>
            </div>

            {/* Challenge 4 */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Player Behavior</h3>
              </div>
              <p className="text-slate-600">
                Understanding player behavior to enhance the player experience and retain high-value players.
              </p>
            </div>

            {/* Challenge 5 */}
            <div className="space-y-6 animate-fade-in-up animation-delay-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Forecasting & Optimization</h3>
              </div>
              <p className="text-slate-600">
                Forecasting trends and optimizing operations without the flexibility to slice and analyze data effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Platform Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Our advanced analytics platform gives you the edge to thrive in a competitive landscape with:
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Seamless data integration",
                description: "to unify all your data sources effortlessly.",
                icon: Database,
                color: "blue"
              },
              {
                title: "Actionable insights",
                description: "that empower quick, data-driven decisions with dynamic drill-down capabilities.",
                icon: Eye,
                color: "green"
              },
              {
                title: "Player analytics",
                description: "for targeted engagement and personalized experiences.",
                icon: Users,
                color: "purple"
              },
              {
                title: "Real-time & predictive analytics",
                description: "to optimize operations and stay ahead of the curve.",
                icon: ActivityIcon,
                color: "orange"
              }
            ].map((feature, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMWIT Advantage Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              The GAMWIT Advantage
            </h2>
            <h3 className="text-2xl font-bold text-blue-600">Traditional Dashboards vs GAMWIT</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-6 font-bold text-slate-900">Features</th>
                  <th className="text-left p-6 font-bold text-red-600">Traditional Dashboards</th>
                  <th className="text-left p-6 font-bold text-green-600">GAMWIT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Resources",
                    traditional: "Large team of developers, data engineers, and consultants",
                    gamwit: "Minimized technical involvement—business users can easily manage them"
                  },
                  {
                    feature: "Development Cost",
                    traditional: "Involve high costs due to complex customization and integration",
                    gamwit: "Reduce costs with predefined integrations and industry-specific solutions"
                  },
                  {
                    feature: "Data Integration & Enrichment",
                    traditional: "Time-consuming, often relying on manual effort or third-party tools",
                    gamwit: "Provide seamless data flow without manual intervention"
                  },
                  {
                    feature: "Customization & Predefined Metrics",
                    traditional: "Need significant setup and ongoing customization",
                    gamwit: "Deliver customizable, ready-to-use dashboards tailored for iGaming"
                  },
                  {
                    feature: "Data Granularity & Drill-down",
                    traditional: "Limited functionality, often requiring extra configurations to meet specific needs",
                    gamwit: "Dynamic drill-downs and deep insights across various metrics"
                  },
                  {
                    feature: "Role-based and Region-based Access",
                    traditional: "Lack role-based or region-based customization, limiting adaptability",
                    gamwit: "Role-based and region-based access for better decisions, security, and compliance"
                  },
                  {
                    feature: "User Experience",
                    traditional: "Complex interfaces that make it harder for non-technical users to gain insights",
                    gamwit: "Intuitive, user-friendly interfaces designed for business users"
                  },
                  {
                    feature: "Maintenance",
                    traditional: "High maintenance, leading to increased costs over time",
                    gamwit: "Low maintenance with automated updates, saving time and resources"
                  },
                  {
                    feature: "Timeline",
                    traditional: "Long deployment times due to iterative cycles and custom requirements",
                    gamwit: "Fast deployment with ready-to-use dashboards and quicker insights"
                  }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-semibold text-slate-900">{row.feature}</td>
                    <td className="p-6 text-slate-600">{row.traditional}</td>
                    <td className="p-6 text-slate-600">{row.gamwit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Key Benefits
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Fast, Tailored iGaming Dashboards with Proprietary KPIs",
                description: "Gain fast, accurate insights with auto-calculated KPIs and customizable visuals designed to meet your specific business needs.",
                icon: BarChart3,
                color: "blue"
              },
              {
                title: "Dynamic Drill Downs",
                description: "Easily navigate between macro trends and micro insights with drill-downs across Time, Geography, Product, and Player Segments.",
                icon: Eye,
                color: "green"
              },
              {
                title: "Customized KPIs for your Business",
                description: "Track gaming-specific KPIs, including player behavior, product performance, and campaigns—all tailored to your unique goals.",
                icon: Target,
                color: "purple"
              },
              {
                title: "Seamless Integration",
                description: "Integrates effortlessly with your workflows, delivering real-time insights to enhance productivity and decision-making.",
                icon: Settings,
                color: "orange"
              },
              {
                title: "Works with all Data Formats",
                description: "No matter where or how your gaming data is stored, our experts ensure seamless integration with GAMWIT.",
                icon: Database,
                color: "indigo"
              },
              {
                title: "Role & Region Based Access",
                description: "Ensure secure, compliant decision-making with data access tailored by role and region.",
                icon: Shield,
                color: "red"
              },
              {
                title: "Visuals for Every Business Levels",
                description: "Empower teams with iGaming dashboards designed for executive overviews, tactical planning, and real-time operational insights.",
                icon: Layers,
                color: "yellow"
              }
            ].map((benefit, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center`}>
                    <benefit.icon className={`h-6 w-6 text-${benefit.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                </div>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Image Placeholders */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Dashboard Visualizations
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience the power of GAMWIT's advanced analytics with our comprehensive dashboard suite
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Strategic Dashboard Placeholder */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Strategic Dashboard</h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-dashed border-blue-300">
                <div className="text-center space-y-4">
                  <BarChart className="h-16 w-16 text-blue-600 mx-auto" />
                  <p className="text-slate-600">Executive Summary Dashboard</p>
                  <p className="text-sm text-slate-500">High-level business overview with KPIs and forecasts</p>
                </div>
              </div>
            </div>

            {/* Tactical Dashboard Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Tactical Dashboard</h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-dashed border-green-300">
                <div className="text-center space-y-4">
                  <PieChart className="h-16 w-16 text-green-600 mx-auto" />
                  <p className="text-slate-600">Campaign Performance Dashboard</p>
                  <p className="text-sm text-slate-500">Real-time campaign analytics and optimization insights</p>
                </div>
              </div>
            </div>

            {/* Operational Dashboard Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900">Operational Dashboard</h3>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border-2 border-dashed border-purple-300">
                <div className="text-center space-y-4">
                  <LineChart className="h-16 w-16 text-purple-600 mx-auto" />
                  <p className="text-slate-600">Player Behavior Dashboard</p>
                  <p className="text-sm text-slate-500">Detailed player analytics and engagement metrics</p>
                </div>
              </div>
            </div>

            {/* Analytics Dashboard Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-slate-900">Analytics Dashboard</h3>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-dashed border-orange-300">
                <div className="text-center space-y-4">
                  <ActivityIcon className="h-16 w-16 text-orange-600 mx-auto" />
                  <p className="text-slate-600">Real-time Analytics Dashboard</p>
                  <p className="text-sm text-slate-500">Live data visualization and predictive analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Analytics?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the power of GAMWIT's advanced dashboard solutions designed specifically for the iGaming industry.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Dashboards
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 