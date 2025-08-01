"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Crown, Eye, Search } from "lucide-react"

export default function EarlyVip() {
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
                <pattern id="neural-vip" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-vip)"/>
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
              Early{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                VIP
              </span>{" "}
              Prediction
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Spot your next VIP player early! Our Early VIP prediction model analyzes a player's activity within a few days of their first deposit to predict if they're on the path to becoming a VIP. Use this insight to offer personalized deals and services that keep them engaged and loyal.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Early VIP AI Model
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Challenges Section */}
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
              VIP Challenge
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Finding VIPs in iGaming, Casino, and Sports Betting Is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                No Easy Task
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-xl text-slate-300 leading-relaxed">
                High rollers are not just elusive—they're also incredibly hard to retain without offering a truly hyper-personalized VIP experience.
              </p>
              <p className="text-lg text-slate-300">
                The cost of acquiring new VIPs can skyrocket, ranging anywhere from 5 to 2500 times more than what it takes to keep your current VIPs happy.
              </p>
              <p className="text-lg text-slate-300">
                Many companies struggle to accurately identify VIPs, often mistaking regular players for VIPs. This misstep inflates the cost of running a VIP program and reduces its effectiveness.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <Crown className="h-16 w-16 text-blue-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">To thrive, you need a solid VIP program</h3>
                <p className="text-slate-300">One that identifies your VIPs accurately and on time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Are VIPs Identified Section */}
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
              How Are VIPs Identified?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Most Companies */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Most Companies</h3>
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-red-500/30">
                  <h4 className="text-xl font-bold text-red-400 mb-4">Transaction-Based Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">Takes too long</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">VIPs often churn before being identified</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">"Once a VIP, always a VIP" mindset</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">Expensive and Ineffective</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GAMWIT */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">GAMWIT</h3>
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-green-500/30">
                  <h4 className="text-xl font-bold text-green-400 mb-4">Behavior-Based Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Identifies VIPs within days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Retains VIPs with personalized programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Dynamic, accurate classification of VIPs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Targeted, cost-effective spending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMWIT's Early VIP Model Section */}
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
              GAMWIT's Early VIP prediction Model predicts your VIPs in just a few days by analyzing their behavior, not just their transactions.
            </h2>
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
                Player Behavior Is Dynamic. It Changes Across:
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Games</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Companies</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Demographies</h4>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400">Geographies</h4>
                </div>
              </div>
              <p className="text-lg text-slate-300">
                The behaviors that indicate a player will become a VIP on your platform aren't the same for every platform. That's why GAMWIT's model trains on your data. It uncovers the specific, relevant patterns unique to your players giving you insights that truly matter.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-white mb-4">GAMWIT Adapts Dynamically</h3>
              <p className="text-lg text-slate-300 mb-6">
                GAMWIT's cognitive AI system keeps pace with your VIPs, detecting shifts in their behavior and adapting the model to meet their ever-changing demands.
              </p>
              <p className="text-slate-300">
                This level of precision is nearly impossible for humans to achieve without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spot Your VIPs Section */}
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
              Spot Your VIPs Early—With Precision!
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Once trained, the Early VIP Prediction platform identifies your future VIPs within just a few days of their registration, based on the behaviors they exhibit.
            </p>
          </div>
        </div>
      </section>

      {/* Save Big Section */}
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
                Save Big, Keep VIPs Happy, and Spark Buzz
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                By identifying the right players early, you can add them to your VIP program without incurring the hefty cost of acquiring new VIPs.
              </p>
              <p className="text-lg text-slate-300">
                Happy VIPs mean stronger satisfaction and positive word-of-mouth, which naturally builds brand loyalty. The outcome? A direct lift to your GGR, NGR, and Hold Percentage.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <TrendingUp className="h-16 w-16 text-green-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Increased Revenue</h3>
                <p className="text-slate-300">Direct impact on GGR, NGR, and Hold Percentage</p>
              </div>
            </div>
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
              Plug and Play Solution - No Technical Skills Needed!
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our Early VIP prediction Model is ready to use right out of the box. Your VIP team can start leveraging it immediately—no technical expertise or data analytics experience required.
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
                Our expert team ensures your gaming data integrates seamlessly with GAMWIT—no matter where, how, or in what format it's stored.
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
              Once integrated, GAMWIT takes over, providing your team with precise predictions from the Early VIP Prediction platform—consistently and scientifically.
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We also help integrate GAMWIT with your CRM systems, ensuring a smooth, data-driven process that completely eliminates human bias or guesswork. All the insights are tailored to your data!
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
              <h3 className="text-3xl font-bold mb-4">Ready to Spot Your VIPs Early?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Start identifying your future VIP players with GAMWIT's AI-powered Early VIP prediction solution.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Early VIP AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 