import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon, Bell, Smartphone, Settings, Layers, Smartphone as SmartphoneIcon, Monitor, Zap as ZapIcon, Shield as ShieldIcon, Database as DatabaseIcon, Smartphone as MobileIcon } from "lucide-react"

export default function Alerts() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">ALERTS</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Track KPIs and business drivers in real time. With Alerts, you're always one step ahead.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Alerts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Monitoring Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Identify and address business issues before they even become Problems
            </h2>
            <h3 className="text-2xl font-bold text-blue-600">GAMWIT proactively monitors your business drivers, so you can stay ahead</h3>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <p className="text-xl text-slate-600 leading-relaxed">
              GAMWIT keeps an eye on your business drivers, so you're always ahead of the curve. Why wait for a quarterly report to find out your sales are slipping or costs are soaring? Our iGaming KPI alerts notify you instantly when a critical metric veers off track, empowering you to act fast and make smarter, data-driven decisions.
            </p>
            <p className="text-lg text-slate-600">
              This proactive approach stops small problems from turning into big setbacks.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Boost Response Times */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <ZapIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Boost Response Times and Minimize Losses</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                With timely alerts from KPI alerts platform, you can stop wasting time hunting down performance issues. Our system ensures you're notified the moment a KPI falls out of range, so your team can step in quickly and effectively.
              </p>
              <p className="text-slate-600">
                Faster responses mean fewer losses, less downtime, and happier customers.
              </p>
            </div>

            {/* Prioritize What Matters */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Prioritize What Matters Most</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                In today's data-heavy world, it's easy to feel overwhelmed. Our KPI alerts cut through the noise, spotlighting the metrics that truly impact your business goals.
              </p>
              <p className="text-slate-600">
                This helps your team focus on what drives results, right where it matters most.
              </p>
            </div>

            {/* Optimize Resources */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Optimize Resources and Reduce Risks</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                With clear insights from our iGaming KPI alerts, you'll know exactly where your resources are needed.
              </p>
              <p className="text-slate-600">
                Spotting underperformance early lets you reallocate effectively, reduce risks, and save both time and money.
              </p>
            </div>

            {/* Enhance Accountability */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Enhance Accountability and Drive Performance</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Custom iGaming alerts ensure everyone on your team knows how they're performing in real time. This builds accountability, fosters continuous improvement, and keeps your team aligned with your strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              In a world where every minute counts and every decision shapes your bottom line, staying informed is essential.
            </h2>
            <h3 className="text-2xl font-bold text-blue-600">
              That's where GAMWIT's KPI Alerts step in.
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience a smarter way to manage your business with our advanced, intuitive solution, designed to keep you ahead of the curve at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Key Features of GAMWIT's KPI Alerts
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Almost Real-Time Monitoring and Alerts",
                description: "Keep your finger on the pulse of your business with near real-time KPI monitoring. GAMWIT sends instant alerts when a metric hits a predefined threshold or deviates from expectations.",
                subDescription: "Get multi-channel alerts where it matters—email, app notifications, or SMS. Rest assured, the right people are informed promptly, every time.",
                icon: Bell,
                color: "blue"
              },
              {
                title: "Customizable Alert Settings",
                description: "Track even the most granular KPIs across multiple dimensions of your business. Set custom thresholds tailored to your unique needs and risk tolerance.",
                subDescription: "GAMWIT lets you define conditions, like alerting you if a KPI falls below 80% for more than two hours, ensuring you're in control.",
                icon: Settings,
                color: "green"
              },
              {
                title: "User-Friendly Interface",
                description: "Navigate with ease using GAMWIT's intuitive interface. Get a snapshot of all critical KPIs and their statuses at a glance. Setup is simple and designed even for non-technical users.",
                icon: Monitor,
                color: "purple"
              },
              {
                title: "Alerts Management and Escalation Workflow",
                description: "Turn iGaming alerts into action. GAMWIT's workflow helps you generate, manage, and resolve alerts seamlessly. Unaddressed alerts are escalated automatically, ensuring no critical issue goes unnoticed.",
                icon: Layers,
                color: "orange"
              },
              {
                title: "Integration with Other Tools and Data Sources",
                description: "Connect the dots with seamless integrations to your CRM, ERP, BI tools, databases, or spreadsheets. Import and export data effortlessly in the formats you need.",
                icon: DatabaseIcon,
                color: "indigo"
              },
              {
                title: "Role-Based Access and Permissions",
                description: "Control who sees what with role-based access. Collaborate efficiently by sharing dashboards, reports, and alerts with your team.",
                icon: ShieldIcon,
                color: "red"
              },
              {
                title: "Support and Documentation",
                description: "Get the most out of GAMWIT with detailed tutorials, FAQs, guides, and robust customer support. Regular updates keep you ahead with the latest technology.",
                icon: FileText,
                color: "yellow"
              },
              {
                title: "Plug-and-Play Simplicity",
                description: "No tech skills? No problem. GAMWIT's plug-and-play solution is designed for your Marketing, Finance, Risk, and Compliance teams—no data analytics expertise required.",
                icon: Zap,
                color: "emerald"
              },
              {
                title: "Works with all Data Formats",
                description: "No matter where or how you store your gaming data, GAMWIT integrates seamlessly. Our experts handle it all.",
                icon: Database,
                color: "cyan"
              },
              {
                title: "Data Security and Compliance",
                description: "Protect your data with industry-standard security protocols like GDPR and CCPA compliance. Maintain accountability with detailed logs and audit trails for every action.",
                icon: Lock,
                color: "slate"
              },
              {
                title: "Scalability and Performance",
                description: "Whether you're tracking a handful of KPIs or thousands, GAMWIT scales with your business needs without breaking a sweat.",
                icon: TrendingUp,
                color: "violet"
              },
              {
                title: "Mobile Access",
                description: "Stay connected on the go. Monitor KPIs and receive alerts through GAMWIT's mobile-friendly interface or dedicated app.",
                icon: MobileIcon,
                color: "pink"
              }
            ].map((feature, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600">{feature.description}</p>
                {feature.subDescription && (
                  <p className="text-slate-600 text-sm">{feature.subDescription}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert Visualization Placeholders */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Alert Management Interface
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience GAMWIT's comprehensive alert monitoring and management system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Real-time Monitoring Placeholder */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Real-time Monitoring</h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-dashed border-blue-300">
                <div className="text-center space-y-4">
                  <Bell className="h-16 w-16 text-blue-600 mx-auto" />
                  <p className="text-slate-600">Live KPI Monitoring Dashboard</p>
                  <p className="text-sm text-slate-500">Real-time alerts and threshold monitoring</p>
                </div>
              </div>
            </div>

            {/* Mobile Alerts Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Mobile Alerts</h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-dashed border-green-300">
                <div className="text-center space-y-4">
                  <SmartphoneIcon className="h-16 w-16 text-green-600 mx-auto" />
                  <p className="text-slate-600">Mobile Alert Interface</p>
                  <p className="text-sm text-slate-500">Push notifications and mobile monitoring</p>
                </div>
              </div>
            </div>

            {/* Alert Management Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900">Alert Management</h3>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border-2 border-dashed border-purple-300">
                <div className="text-center space-y-4">
                  <Settings className="h-16 w-16 text-purple-600 mx-auto" />
                  <p className="text-slate-600">Alert Configuration Panel</p>
                  <p className="text-sm text-slate-500">Custom thresholds and escalation rules</p>
                </div>
              </div>
            </div>

            {/* Multi-channel Alerts Placeholder */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-slate-900">Multi-channel Alerts</h3>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-dashed border-orange-300">
                <div className="text-center space-y-4">
                  <Mail className="h-16 w-16 text-orange-600 mx-auto" />
                  <p className="text-slate-600">Email & SMS Alerts</p>
                  <p className="text-sm text-slate-500">Multi-channel notification system</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Stay on top of your performance metrics with robust, flexible, and efficient monitoring. Make informed decisions fast and keep your business ahead.
            </h2>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Try Alerts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 