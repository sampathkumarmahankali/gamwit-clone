"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText } from "lucide-react"

export default function ResponsibleGaming() {
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
                <pattern id="neural-rg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-rg)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <Brain className="mr-2 h-4 w-4 animate-pulse" />
              AI MODEL
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Responsible{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Gaming
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Spot risky behavior early and ensure your players stay engaged responsibly. Our Responsible Gaming Model predicts the possibility of player addiction so you can intervene before it becomes a problem—while staying fully compliant with regulations.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Responsible Gaming AI Model
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ignoring Problem Gambling Section */}
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
              Legal Risk
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ignoring Problem Gambling Can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Cost You Big Time
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-red-500/30">
                  <AlertCircle className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Legal Penalties and Fines</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                In 2022, a major UK gambling operator faced a staggering £17 million fine for "widespread and alarming" failures in social responsibility.
              </p>
              <p className="text-slate-300">
                Non-compliance with responsible gaming initiatives is expensive. Depending on your jurisdiction, operators can face millions in fines or, worse, lose their gaming license altogether. Don't let it come to that.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <Scale className="h-16 w-16 text-red-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">£17 Million Fine</h3>
                <p className="text-slate-300">Major UK operator penalty for social responsibility failures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial and Reputational Burden Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Financial and Reputational Burden of Problem Gambling
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$14 Billion/yr", label: "The estimated annual social cost of problem gambling in the US as of December 2023.", color: "red" },
              { value: "63%", label: "Participants in Nevada believe the gambling industry should do more to address gambling addiction.", color: "orange" },
              { value: "2.5 million", label: "The number of U.S. adults (1% of the population) struggling with severe gambling problems every year.", color: "purple" },
              { value: "Over 60%", label: "NCPG survey respondents say sports betting operators must prioritize responsible gambling measures.", color: "blue" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500 opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${stat.color}-500/10 via-${stat.color}-600/10 to-${stat.color}-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 text-center space-y-4">
                  <div className={`text-3xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                  <p className="text-slate-300 text-sm">{stat.label}</p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Early Identification Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Why Identifying Problem Gamblers Early Is Essential
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                At first glance, problem gamblers can seem like high-value players, generating substantial revenue. But their eventual financial instability means they won't stick around—and you lose them as long-term, loyal customers.
              </p>
              <p className="text-lg text-slate-300">
                With tools like Self-Exclusion, Time Limits, Deposit Caps, and Gaming Reality Checks—part of a comprehensive responsible gaming platform—you can intervene early to protect their mental and financial well-being.
              </p>
              <p className="text-lg text-slate-300">
                Additional tools like Cooling-Off Periods, Gameplay Reminders, Anonymous Play, and Social Interaction Monitoring make the gaming experience safer and more responsible. It's a win-win: your players are supported, and your business builds trust and achieves sustained success.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <Shield className="h-16 w-16 text-green-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Remember</h3>
                <p className="text-slate-300">Normal and problem gambling behaviors often look the same at first glance. Early identification makes all the difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Challenges in Identifying Problem Gamblers
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Behaviors are Complex */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-orange-500/30">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Behaviors are Complex</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Problem gambling isn't one-size-fits-all. Different players show different signs, and not everyone exhibits the same behaviors. This makes identification tricky. Some common indicators include:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Frequent and Intense Gambling Sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Chasing Losses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Emotional Distress</span>
                </div>
              </div>
            </div>

            {/* Lack of Disclosure */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-red-500/30">
                  <Eye className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Lack of Disclosure</h3>
              </div>
              <p className="text-slate-300">
                Many problem gamblers go to great lengths to hide their struggles, fearing they'll be blocked or restricted. Others may not even realize they have a problem, so they don't seek help or acknowledge their behavior.
              </p>
            </div>

            {/* Limited and Complex Data */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-500/30">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Limited and Complex Data</h3>
              </div>
              <p className="text-slate-300">
                Tracking problem gambling isn't easy when you're working with incomplete data. Often, operators lack access to detailed player information that could reveal key behavioral patterns. Even when data is available, interpreting it to spot early warning signs can be a complex, time-consuming task.
              </p>
            </div>

            {/* Regulatory Limitations */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-500/30">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Regulatory Limitations</h3>
              </div>
              <p className="text-slate-300">
                Privacy laws and data protection regulations add another layer of complexity. While these regulations are necessary, they can limit how much you can monitor and analyze player behavior, restricting your ability to intervene.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <p className="text-lg text-slate-300">
              Overall, identifying problem gamblers isn't straightforward. It demands a mix of behavioral monitoring, data analysis, and human judgment—all of which come with their own challenges.
            </p>
          </div>
        </div>
      </section>

      {/* GAMWIT's Approach Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Establish and maintain trust throughout your player's lifecycle with GAMWIT's AI.
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Addressing complex and challenging issues like responsible gaming and addiction requires collaboration between gaming operators and predictive AI models like GAMWIT, paving the way for ethical and responsible marketing strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-400">Proactive Responsible Gaming Measures</h3>
              </div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400">Player Protection</h3>
              </div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-400">
              <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400">Sustained Business</h3>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              GAMWIT's Approach to help you with Player Protection
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Behavior Based - Not Rule Based */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white">Behavior Based - Not Rule Based</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Traditional, rule-based methods can miss the mark. GAMWIT's Responsible Gaming Model uses advanced AI/ML algorithms to analyze behavioral patterns and detect early signs of problem gambling.
              </p>
              <p className="text-slate-300">
                By comparing a player's current behavior with their past patterns and with other players' behavior, GAMWIT identifies anomalies before they escalate into real problems. Instead of using rule based methods, GAMWIT uses advanced AI/ML algorithms to identify behavioral patterns of potential Problem Gamblers. This can help operators intervene even before the gambler's behavior becomes problematic.
              </p>
            </div>

            {/* Multiple Harm Markers */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-white">Multiple Harm Markers for Accurate Identification</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                GAMWIT uses a trusted framework of Markers of Harm—behavioral signals that indicate the risk of gambling addiction. Any deviation in these markers serves as an early warning system, helping you intervene at the right time.
              </p>
            </div>

            {/* Instant Analysis */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-white">Instant Analysis of Large Datasets</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                GAMWIT processes vast datasets instantly, uncovering patterns in player betting, gaming, and non-gaming interactions. Powered by our in-house Proprietary Feature Factory, our responsible gaming platform delivers unmatched prediction accuracy.
              </p>
            </div>

            {/* Dynamic Risk Assessment */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-white">Dynamic Risk Assessment</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Every gambler is unique, and their risk profile evolves over time. GAMWIT continuously updates personalized risk scores based on behavioral changes and new data, giving you a dynamic, real-time view of player activity.
              </p>
            </div>

            {/* Automated Interventions */}
            <div className="space-y-6 animate-fade-in-up animation-delay-800">
              <h3 className="text-2xl font-bold text-white">Automated Interventions</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                GAMWIT doesn't just identify risks—it enables action. High-risk gamblers are automatically flagged for review, or our insights can trigger direct interventions by your customer support team.
              </p>
              <p className="text-slate-300">
                You can send personalized messages to warn players about risky behavior and encourage responsible gaming.
              </p>
            </div>

            {/* Seamless Regulatory Compliance */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1000">
              <h3 className="text-2xl font-bold text-white">Seamless Regulatory Compliance</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                GAMWIT automates reporting of suspicious activities and ensures consistent capture and analysis of all relevant data. This keeps you aligned with regulatory standards and ready for audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Behavior Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Player Behavior Is Always Changing
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                It varies across:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Game to Game</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Company to Company</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Demography to Demography</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Geography to Geography</h4>
                </div>
              </div>
              <p className="text-lg text-slate-300">
                What flags a "problem gambler" on one platform might not apply to yours. GAMWIT's Responsible Gaming Model trains on your data, delivering insights that are highly specific and relevant to your players.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-white mb-4">GAMWIT's AI Adapts Dynamically</h3>
              <p className="text-lg text-slate-300 mb-6">
                GAMWIT's AI evolves with your players. Its advanced cognitive capabilities detect changes in player behavior over time, especially among problem gamblers.
              </p>
              <p className="text-slate-300">
                The AI then adjusts its model to improve prediction accuracy—constantly learning and adapting in ways no human could achieve without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Business Benefits for Proactive Responsible Gaming Initiatives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "When you put player well-being first, they're more likely to stay loyal, boosting long-term retention.", color: "blue" },
              { icon: Shield, title: "Stay ahead of penalties, fines, or even loss of your gaming license.", color: "green" },
              { icon: FileText, title: "Proactive measures help you meet regulatory requirements effortlessly.", color: "purple" },
              { icon: Star, title: "Strengthen community relations and make a meaningful contribution to social welfare.", color: "orange" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${benefit.color}-400 to-${benefit.color}-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${benefit.color}-400 to-${benefit.color}-500 opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${benefit.color}-500/10 via-${benefit.color}-600/10 to-${benefit.color}-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 text-center space-y-4">
                  <div className={`w-16 h-16 bg-${benefit.color}-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto border border-${benefit.color}-500/30`}>
                    <benefit.icon className={`h-8 w-8 text-${benefit.color}-400`} />
                  </div>
                  <p className="text-slate-300 text-sm">{benefit.title}</p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plug and Play Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Plug and Play Solution - No Technical Expertise Necessary!
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              GAMWIT's Responsible Gaming Model is ready to go—right out of the box. Your Marketing, Finance, Risk, and Compliance teams can use it effortlessly, with zero technical skills or analytics expertise required.
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              This means you can quickly identify and categorize potential problem gamers early in your risk and mitigation programs—saving valuable time and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Data Formats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Works with All Data Formats
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                No matter where or how you collect or store your gaming data, our team of experts ensures seamless integration with GAMWIT. We handle the complexities so you don't have to.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <Database className="h-16 w-16 text-green-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Seamless Integration</h3>
                <p className="text-slate-300">Compatible with all major data formats and systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Runs Automatically, So You Can Focus on Growth!
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Once GAMWIT is up and running, it works automatically. It delivers player-specific predictions straight to your Risk, Marketing, and Customer Assistance teams—scientifically, consistently, and without human bias or guesswork.
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              With GAMWIT, everything is data-driven and tailored to your business. Need it integrated with your CRM systems? We've got that covered too.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Protect Your Players?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Start identifying and protecting at-risk players with GAMWIT's AI-powered Responsible Gaming solution.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Responsible Gaming AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 