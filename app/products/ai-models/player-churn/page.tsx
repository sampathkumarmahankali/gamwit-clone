import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database } from "lucide-react"

export default function PlayerChurn() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">AI MODEL</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              Player <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">Churn</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Our Player Churn prediction model predicts which players are likely to leave your platform, so you can proactively target them with the right promotional offers.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Player Churn Prediction Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Cost Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Player Churn: A Hidden Cost
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Acquiring a new player costs five times more than retaining an existing one. Don't let player churn drain your resources.
            </p>
          </div>
        </div>
      </section>

      {/* Retained Players Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Retained Players Drive Loyalty and Profit
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                With the right retention strategies at the right time, you can keep players engaged, building loyalty and boosting your bottom line. Loyal players tend to make repeat deposits, spend more time, explore new games, and refer friends through word-of-mouth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-blue-600">5%</h3>
                <p className="text-lg text-slate-600">increase in player retention</p>
                <h4 className="text-2xl font-bold text-green-600">95%</h4>
                <p className="text-lg text-slate-600">boost in profits</p>
                <p className="text-sm text-slate-500">*Source: Harvard Business Review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Most companies identify their Churners based on transactions.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Most Companies */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Most Companies</h3>
                <div className="bg-red-50 p-6 rounded-2xl">
                  <h4 className="text-xl font-bold text-red-600 mb-4">Transaction-Based Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">Takes time to identify churners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">Players often churn before they're detected</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">Blanket retention campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">Expensive and ineffective campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">Prone to human bias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GAMWIT */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">GAMWIT</h3>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <h4 className="text-xl font-bold text-green-600 mb-4">Behaviour-Based Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Identify churn risk in just a few days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Retain players with timely, targeted programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Focused retention campaigns</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Highly effective campaigns at fraction of cost</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Data-driven decision-making</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Model Description */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              GAMWIT's Player Churn AI Model can predict your churners based on their behavior, and not solely on transactions.
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Unlike traditional methods, GAMWIT predicts churn based on player behavior—not just transactions. With over 500 refined variables developed from decades of expertise, our Proprietary Feature Factory enhances the accuracy of churn predictions.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Behavior Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Player Behavior is Dynamic
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                They vary from:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Game to Game</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Company to Company</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Demography to Demography</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Geography to Geography</h4>
                </div>
              </div>
              <p className="text-lg text-slate-600">
                The behaviors that lead to churn on your platform might be completely different from those on another platform. Since our AI churn prediction model is trained on your data, it identifies the unique behaviors that matter most to your players.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GAMWIT's AI Adapts Dynamically</h3>
              <p className="text-lg text-slate-600 mb-6">
                GAMWIT's AI continuously detects shifts in churn behavior and adjusts the model to improve churn predictions.
              </p>
              <p className="text-slate-600">
                This dynamic adaptability is something humans simply can't replicate without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentation Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Predicting Churners, Segmented for Optimized Marketing Campaigns
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Once trained, GAMWIT's model predicts which players are likely to churn as soon as their behavior signals it. Plus, it classifies churners based on their likelihood of churning and their predicted Lifetime Value (LTV). This allows you to run highly targeted campaigns for different segments of churners, prioritizing those who are both likely to churn and valuable to retain.
            </p>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Business Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Increased player retention", color: "blue" },
              { icon: DollarSign, title: "Significant cost savings", color: "green" },
              { icon: Target, title: "Higher ROI on campaigns", color: "purple" },
              { icon: Users, title: "Happier, loyal players", color: "pink" },
              { icon: Star, title: "More word-of-mouth referrals", color: "yellow" },
              { icon: BarChart3, title: "Growth in NGR, GGR, and hold percentages", color: "indigo" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center`}>
                    <benefit.icon className={`h-6 w-6 text-${benefit.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plug and Play Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Plug and Play Solution - No Technical Expertise Necessary!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              GAMWIT's Player Churn AI Model is a simple plug-and-play solution that your Retention, Marketing, and Customer Service teams can use with no prior experience in data analytics or technical skills.
            </p>
          </div>
        </div>
      </section>

      {/* Data Formats Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Works with all Data Formats
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Our expert team ensures seamless integration of your gaming data with GAMWIT, no matter how or in what format you're collecting or storing it.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <Database className="h-16 w-16 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Seamless Integration</h3>
                <p className="text-slate-600">Compatible with all major data formats and systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Runs Automatically, so you can Focus on Growth!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Once integrated, GAMWIT runs on autopilot, delivering churn predictions for individual players directly to your Retention, Marketing, and Customer Service teams – consistently and scientifically.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We can also integrate GAMWIT with your CRM systems, eliminating guesswork and human bias with data-driven insights tailored to your needs!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Predict Player Churn?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Start predicting and preventing player churn with GAMWIT's AI-powered solution.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Player Churn Prediction Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 