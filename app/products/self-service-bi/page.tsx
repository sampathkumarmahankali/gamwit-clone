import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, BarChart, PieChart, LineChart, Activity as ActivityIcon, Settings, Layers, Database as DatabaseIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Smartphone } from "lucide-react"

export default function SelfServiceBI() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              SELF-SERVICE <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">BUSINESS INTELLIGENCE</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Take control of your data. Tailor insights to match your unique business needs.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Self-Service BI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Traditional BI systems often slow you down, making it harder to make informed decisions when every moment counts.
            </h2>
            <h3 className="text-2xl font-bold text-blue-600">Typical Workflow of Data to Insight</h3>
          </div>

          {/* Traditional Workflow Diagram */}
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-slate-800 rounded-2xl p-8 text-white relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Standard Reports/ Dashboards</h4>
                    <p className="text-blue-200 text-sm">Limited Views Limited Insights</p>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Business User/ Decision Maker</h4>
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
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Analytical Insights (Excel/PPT)</h4>
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
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Analyst</h4>
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
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">IT Department</h4>
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
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Multiple Databases</h4>
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
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Collating Processing Massaging</h4>
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
                <div className="bg-red-600 p-4 rounded-lg">
                  <h4 className="font-bold text-lg">80%</h4>
                  <p className="text-sm">of time spent by business users/ analysts</p>
                </div>
                <div className="bg-green-600 p-4 rounded-lg">
                  <h4 className="font-bold text-lg">20%</h4>
                  <p className="text-sm">of time spent by business users/ analysts</p>
                </div>
              </div>

              {/* Arrows and Labels */}
              <div className="mt-6 text-center">
                <p className="text-blue-300 text-sm">Precanned/ BAU Analytics • Ad-hoc analysis • Prone to mismatches in expected insights vs received insights • Prone to communication errors of expectations</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Traditional BI Systems are Slow, Inaccurate and Unreliable.
            </h2>
          </div>
        </div>
      </section>

      {/* Traditional BI Problems Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Data Access Bottlenecks */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Data Access Bottlenecks</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Relying heavily on IT or specialized data teams for reports creates frustrating delays. Waiting on IT for data access means missed opportunities and slower decision-making.
              </p>
            </div>

            {/* Long Time to Get Desired Insight */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Long Time to Get Desired Insight</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Traditional BI can't keep up with your pace. Complex queries, tedious data processing, and multiple report iterations often slow things down, leaving you waiting for critical insights.
              </p>
            </div>

            {/* Prone to Human Error */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Prone to Human Error</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Manual processes are rife with risks—from miscommunications to costly human errors. Decisions based on flawed insights can lead to disastrous outcomes.
              </p>
            </div>

            {/* Data Silos and Fragmentation */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Data Silos and Fragmentation</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                With data scattered across departments, getting a comprehensive view of your business feels impossible. Fragmented data leads to incomplete analyzes and poor decision-making.
              </p>
            </div>

            {/* Lack of Scalability and Flexibility */}
            <div className="space-y-6 animate-fade-in-up animation-delay-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Lack of Scalability and Flexibility</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                As your business evolves, traditional BI systems often fail to keep up. Predefined reports limit your ability to explore data freely, keeping you stuck in a rigid framework.
              </p>
            </div>

            {/* Limited Tools Stifle Productivity */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Limited Tools Stifle Productivity</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                When business users are stuck with Excel and PowerPoint for analysis, innovation takes a back seat. Limited tools mean fewer insights and a significant loss in productivity.
              </p>
            </div>

            {/* High Costs and Resource Demands */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">High Costs and Resource Demands</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Centralized BI teams are expensive and resource-intensive, especially when all you need is a quick, ad-hoc report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAMWIT Advantage Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">INSTANT</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-600">ACCURATE</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600">RELIABLE</h3>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              With GAMWIT's Self-Service BI, you and your team can define process-specific KPIs and effortlessly customize dashboards with drag-and-drop functionality to meet your unique business needs.
            </h2>
          </div>

          {/* GAMWIT Solution Diagram */}
          <div className="mb-16 animate-fade-in-up">
            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">
                How <span className="text-green-400">GAMWIT</span> solves it
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                {/* Left Side - User Interaction */}
                <div className="space-y-6">
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">GAMWIT Standard Dashboards</h4>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Business User/Decision Maker</h4>
                    {/* Right arrow to GAMWIT process */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

                {/* Right Side - GAMWIT Process */}
                <div className="space-y-6">
                  <div className="bg-green-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">GAMWIT's Enriched Data Layer</h4>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-green-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Data Extracts/Cubes with pre defined business KPIs</h4>
                    {/* Down arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-400">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-green-600 p-4 rounded-lg relative">
                    <h4 className="font-bold mb-2">Analytical Insights</h4>
                    {/* Left arrow back to user */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Arrows */}
              <div className="mt-6 text-center">
                <p className="text-blue-300 text-sm">Pre-canned/BAU Analytics • Ad-hoc analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMWIT Solutions Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Zero Reliance On IT Teams */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Zero Reliance On IT Teams</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Take control of your data. Access, analyze, and visualize it independently—no IT assistance required. Say goodbye to delays and make faster, smarter decisions.
              </p>
            </div>

            {/* Scalable and Flexible */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Scalable and Flexible</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Stay agile with a system that scales with your business. Quickly create custom reports and dashboards to adapt to changing market conditions and evolving requirements.
              </p>
            </div>

            {/* Breaks Data Silos and Fragmentation */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Breaks Data Silos and Fragmentation</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT's expertly designed Gaming KPI framework unifies data from multiple sources, eliminating silos. Gain a comprehensive view of your business to make well-informed decisions.
              </p>
            </div>

            {/* Cost and Resource Efficiency */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Cost and Resource Efficiency</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Free your analysts to do what they do best—analyze. By enabling self-service reporting, GAMWIT minimizes dependency on specialized BI teams, cutting costs and optimizing resources.
              </p>
            </div>

            {/* Multiple Views with Drag-and-Drop Features */}
            <div className="space-y-6 animate-fade-in-up animation-delay-800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Multiple Views with Drag-and-Drop Features</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Empower your team with an intuitive interface and a robust library of charts and graphs. Non-technical users can explore data, ask questions, and uncover insights on their own—driving productivity and better decisions.
              </p>
            </div>

            {/* Real Time Insights */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Activity className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Real Time Insights</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Engage with your data in real-time. GAMWIT's dynamic tools deliver faster insights, helping you respond swiftly to business challenges.
              </p>
            </div>

            {/* Completely Automated Insights - Accurate & Instant */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Completely Automated Insights - Accurate & Instant</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                No more waiting or second-guessing. GAMWIT provides instant, precise insights so you can act with confidence.
              </p>
            </div>

            {/* Plug-and-Play Solution—No Technical Expertise Needed! */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Plug-and-Play Solution—No Technical Expertise Needed!</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Simple, seamless, and ready to use. GAMWIT empowers your Marketing, Finance, Risk, and Compliance teams to leverage data without any prior analytics experience.
              </p>
            </div>

            {/* Works with all Data Formats */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Works with all Data Formats</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                No matter where or how your gaming data is stored, GAMWIT integrates it effortlessly. Our experts ensure a smooth setup, handling everything for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BI Visualization Placeholders */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Self-Service BI Interface
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience GAMWIT's comprehensive self-service business intelligence platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Dashboard Builder Placeholder */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Dashboard Builder</h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-dashed border-blue-300">
                <div className="text-center space-y-4">
                  <BarChart className="h-16 w-16 text-blue-600 mx-auto" />
                  <p className="text-slate-600">Drag-and-Drop Dashboard Creator</p>
                  <p className="text-sm text-slate-500">Intuitive interface for building custom dashboards</p>
                </div>
              </div>
            </div>

            {/* Data Explorer Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Data Explorer</h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-dashed border-green-300">
                <div className="text-center space-y-4">
                  <DatabaseIcon className="h-16 w-16 text-green-600 mx-auto" />
                  <p className="text-slate-600">Interactive Data Discovery</p>
                  <p className="text-sm text-slate-500">Explore and analyze data with powerful tools</p>
                </div>
              </div>
            </div>

            {/* Report Designer Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900">Report Designer</h3>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border-2 border-dashed border-purple-300">
                <div className="text-center space-y-4">
                  <FileText className="h-16 w-16 text-purple-600 mx-auto" />
                  <p className="text-slate-600">Advanced Report Creation</p>
                  <p className="text-sm text-slate-500">Design professional reports and presentations</p>
                </div>
              </div>
            </div>

            {/* Analytics Hub Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-slate-900">Analytics Hub</h3>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-dashed border-orange-300">
                <div className="text-center space-y-4">
                  <TrendingUpIcon className="h-16 w-16 text-orange-600 mx-auto" />
                  <p className="text-slate-600">Advanced Analytics Suite</p>
                  <p className="text-sm text-slate-500">Predictive analytics and statistical modeling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Try Self-Service BI
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 