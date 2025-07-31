import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Sparkles, Rocket } from "lucide-react"

export default function PlayerChurn() {
  const benefits = [
    { icon: TrendingUp, title: "Increased player retention", gradient: "from-blue-500 via-cyan-500 to-blue-600", bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10", borderGradient: "from-blue-400 to-cyan-400" },
    { icon: DollarSign, title: "Significant cost savings", gradient: "from-green-500 via-emerald-500 to-green-600", bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10", borderGradient: "from-green-400 to-emerald-400" },
    { icon: Target, title: "Higher ROI on campaigns", gradient: "from-purple-500 via-violet-500 to-purple-600", bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10", borderGradient: "from-purple-400 to-violet-400" },
    { icon: Users, title: "Happier, loyal players", gradient: "from-pink-500 via-rose-500 to-pink-600", bgGradient: "from-pink-500/10 via-rose-500/10 to-pink-600/10", borderGradient: "from-pink-400 to-rose-400" },
    { icon: Star, title: "More word-of-mouth referrals", gradient: "from-yellow-500 via-orange-500 to-yellow-600", bgGradient: "from-yellow-500/10 via-orange-500/10 to-yellow-600/10", borderGradient: "from-yellow-400 to-orange-400" },
    { icon: BarChart3, title: "Growth in NGR, GGR, and hold percentages", gradient: "from-indigo-500 via-blue-500 to-indigo-600", bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-600/10", borderGradient: "from-indigo-400 to-blue-400" },
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
                <pattern id="neural-churn" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-churn)"/>
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
              Player{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Churn
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Our Player Churn prediction model predicts which players are likely to leave your platform, so you can proactively target them with the right promotional offers.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Player Churn Prediction Model
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Cost Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-full text-sm font-medium shadow-lg">
              <AlertTriangle className="mr-2 h-4 w-4 animate-pulse" />
              Hidden Cost
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Player Churn: A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Hidden Cost
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Acquiring a new player costs five times more than retaining an existing one. Don't let player churn drain your resources.
            </p>
          </div>
        </div>
      </section>

      {/* Retained Players Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
                <TrendingUp className="mr-2 h-4 w-4 animate-pulse" />
                Retention Strategy
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Retained Players Drive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Loyalty and Profit
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                With the right retention strategies at the right time, you can keep players engaged, building loyalty and boosting your bottom line. Loyal players tend to make repeat deposits, spend more time, explore new games, and refer friends through word-of-mouth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-blue-400">5%</h3>
                <p className="text-lg text-slate-300">increase in player retention</p>
                <h4 className="text-2xl font-bold text-green-400">95%</h4>
                <p className="text-lg text-slate-300">boost in profits</p>
                <p className="text-sm text-slate-400">*Source: Harvard Business Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Most companies identify their Churners based on transactions.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Most Companies */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Most Companies</h3>
                <div className="bg-red-500/10 backdrop-blur-xl p-6 rounded-3xl border border-red-500/30">
                  <h4 className="text-xl font-bold text-red-400 mb-4">Transaction-Based Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">Takes time to identify churners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">Players often churn before they're detected</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">Blanket retention campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">Expensive and ineffective campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-slate-300">Prone to human bias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GAMWIT */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">GAMWIT</h3>
                <div className="bg-green-500/10 backdrop-blur-xl p-6 rounded-3xl border border-green-500/30">
                  <h4 className="text-xl font-bold text-green-400 mb-4">Behaviour-Based Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Identify churn risk in just a few days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Retain players with timely, targeted programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Focused retention campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Highly effective campaigns at fraction of cost</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span className="text-slate-300">Data-driven decision-making</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Model Description */}
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
              <Brain className="mr-2 h-4 w-4 animate-pulse" />
              AI Model
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              GAMWIT's Player Churn AI Model can predict your churners based on their behavior, and not solely on transactions.
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Unlike traditional methods, GAMWIT predicts churn based on player behavior—not just transactions. With over 500 refined variables developed from decades of expertise, our Proprietary Feature Factory enhances the accuracy of churn predictions.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Behavior Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg">
                <Zap className="mr-2 h-4 w-4 animate-pulse" />
                Dynamic Behavior
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Player Behavior is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Dynamic
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                They vary from:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/10 backdrop-blur-xl p-4 rounded-xl border border-blue-500/30">
                  <h4 className="font-bold text-blue-400">Game to Game</h4>
                </div>
                <div className="bg-blue-500/10 backdrop-blur-xl p-4 rounded-xl border border-blue-500/30">
                  <h4 className="font-bold text-blue-400">Company to Company</h4>
                </div>
                <div className="bg-blue-500/10 backdrop-blur-xl p-4 rounded-xl border border-blue-500/30">
                  <h4 className="font-bold text-blue-400">Demography to Demography</h4>
                </div>
                <div className="bg-blue-500/10 backdrop-blur-xl p-4 rounded-xl border border-blue-500/30">
                  <h4 className="font-bold text-blue-400">Geography to Geography</h4>
                </div>
              </div>
              <p className="text-lg text-slate-300">
                The behaviors that lead to churn on your platform might be completely different from those on another platform. Since our AI churn prediction model is trained on your data, it identifies the unique behaviors that matter most to your players.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/30 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-white mb-4">GAMWIT's AI Adapts Dynamically</h3>
              <p className="text-lg text-slate-300 mb-6">
                GAMWIT's AI continuously detects shifts in churn behavior and adjusts the model to improve churn predictions.
              </p>
              <p className="text-slate-300">
                This dynamic adaptability is something humans simply can't replicate without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentation Section */}
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
              <Target className="mr-2 h-4 w-4 animate-pulse" />
              Segmentation
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Predicting Churners, Segmented for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Optimized Marketing Campaigns
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Once trained, GAMWIT's model predicts which players are likely to churn as soon as their behavior signals it. Plus, it classifies churners based on their likelihood of churning and their predicted Lifetime Value (LTV). This allows you to run highly targeted campaigns for different segments of churners, prioritizing those who are both likely to churn and valuable to retain.
            </p>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
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
              Business Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Benefits
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                    <benefit.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">{benefit.title}</h3>
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
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 rounded-full text-sm font-medium shadow-lg">
              <Zap className="mr-2 h-4 w-4 animate-pulse" />
              Easy Setup
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Plug and Play Solution -{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                No Technical Expertise Necessary!
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              GAMWIT's Player Churn AI Model is a simple plug-and-play solution that your Retention, Marketing, and Customer Service teams can use with no prior experience in data analytics or technical skills.
            </p>
          </div>
        </div>
      </section>

      {/* Data Formats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
                <Database className="mr-2 h-4 w-4 animate-pulse" />
                Data Integration
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Works with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  all Data Formats
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Our expert team ensures seamless integration of your gaming data with GAMWIT, no matter how or in what format you're collecting or storing it.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 animate-fade-in-up animation-delay-200">
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
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg">
              <Zap className="mr-2 h-4 w-4 animate-pulse" />
              Automation
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Runs Automatically, so you can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Focus on Growth!
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Once integrated, GAMWIT runs on autopilot, delivering churn predictions for individual players directly to your Retention, Marketing, and Customer Service teams – consistently and scientifically.
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We can also integrate GAMWIT with your CRM systems, eliminating guesswork and human bias with data-driven insights tailored to your needs!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/2 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 hover:border-blue-400/30 transition-all duration-500">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg mb-6">
                <Brain className="mr-2 h-4 w-4 animate-pulse" />
                Get Started
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Predict Player Churn?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Start predicting and preventing player churn with GAMWIT's AI-powered solution.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
              >
                Try Player Churn Prediction Model
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