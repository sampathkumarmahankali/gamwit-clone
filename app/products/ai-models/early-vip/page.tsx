import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Crown, Eye, Search } from "lucide-react"

export default function EarlyVip() {
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
              Early <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">VIP</span> Prediction
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Spot your next VIP player early! Our Early VIP prediction model analyzes a player's activity within a few days of their first deposit to predict if they're on the path to becoming a VIP. Use this insight to offer personalized deals and services that keep them engaged and loyal.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Early VIP AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Challenges Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Finding VIPs in iGaming, Casino, and Sports Betting Is No Easy Task
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-xl text-slate-600 leading-relaxed">
                High rollers are not just elusive—they're also incredibly hard to retain without offering a truly hyper-personalized VIP experience.
              </p>
              <p className="text-lg text-slate-600">
                The cost of acquiring new VIPs can skyrocket, ranging anywhere from 5 to 2500 times more than what it takes to keep your current VIPs happy.
              </p>
              <p className="text-lg text-slate-600">
                Many companies struggle to accurately identify VIPs, often mistaking regular players for VIPs. This misstep inflates the cost of running a VIP program and reduces its effectiveness.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <Crown className="h-16 w-16 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">To thrive, you need a solid VIP program</h3>
                <p className="text-slate-600">One that identifies your VIPs accurately and on time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Are VIPs Identified Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              How Are VIPs Identified?
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
                      <span className="text-slate-700">Takes too long</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">VIPs often churn before being identified</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">"Once a VIP, always a VIP" mindset</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <XCircle className="h-6 w-6 text-red-500" />
                      <span className="text-slate-700">Expensive and Ineffective</span>
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
                  <h4 className="text-xl font-bold text-green-600 mb-4">Behavior-Based Approach</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Identifies VIPs within days</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Retains VIPs with personalized programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Dynamic, accurate classification of VIPs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-slate-700">Targeted, cost-effective spending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMWIT's Early VIP Model Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              GAMWIT's Early VIP prediction Model predicts your VIPs in just a few days by analyzing their behavior, not just their transactions.
            </h2>
          </div>
        </div>
      </section>

      {/* Player Behavior Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Player Behavior Is Dynamic. It Changes Across:
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Games</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Companies</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Demographies</h4>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-bold text-blue-600">Geographies</h4>
                </div>
              </div>
              <p className="text-lg text-slate-600">
                The behaviors that indicate a player will become a VIP on your platform aren't the same for every platform. That's why GAMWIT's model trains on your data. It uncovers the specific, relevant patterns unique to your players giving you insights that truly matter.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GAMWIT Adapts Dynamically</h3>
              <p className="text-lg text-slate-600 mb-6">
                GAMWIT's cognitive AI system keeps pace with your VIPs, detecting shifts in their behavior and adapting the model to meet their ever-changing demands.
              </p>
              <p className="text-slate-600">
                This level of precision is nearly impossible for humans to achieve without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spot Your VIPs Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Spot Your VIPs Early—With Precision!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Once trained, the Early VIP Prediction platform identifies your future VIPs within just a few days of their registration, based on the behaviors they exhibit.
            </p>
          </div>
        </div>
      </section>

      {/* Save Big Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Save Big, Keep VIPs Happy, and Spark Buzz
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                By identifying the right players early, you can add them to your VIP program without incurring the hefty cost of acquiring new VIPs.
              </p>
              <p className="text-lg text-slate-600">
                Happy VIPs mean stronger satisfaction and positive word-of-mouth, which naturally builds brand loyalty. The outcome? A direct lift to your GGR, NGR, and Hold Percentage.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <div className="text-center space-y-4">
                <TrendingUp className="h-16 w-16 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Increased Revenue</h3>
                <p className="text-slate-600">Direct impact on GGR, NGR, and Hold Percentage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plug and Play Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Plug and Play Solution - No Technical Skills Needed!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our Early VIP prediction Model is ready to use right out of the box. Your VIP team can start leveraging it immediately—no technical expertise or data analytics experience required.
            </p>
          </div>
        </div>
      </section>

      {/* Data Formats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Works with All Data Formats
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Our expert team ensures your gaming data integrates seamlessly with GAMWIT—no matter where, how, or in what format it's stored.
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Runs Automatically, So You Can Focus on Growth!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Once integrated, GAMWIT takes over, providing your team with precise predictions from the Early VIP Prediction platform—consistently and scientifically.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We also help integrate GAMWIT with your CRM systems, ensuring a smooth, data-driven process that completely eliminates human bias or guesswork. All the insights are tailored to your data!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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