import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2 } from "lucide-react"

export default function BonusAbuse() {
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
              BONUS <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">ABUSE</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Our Bonus Abuse prevention model identifies players who are likely to abuse bonuses, allowing you to cut back on offers proactively. This ensures you're targeting the right audience and protecting your platform from misuse.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Bonus Abuse AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Misuse of Bonuses Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              MISUSE OF BONUSES
            </h2>
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-red-600 mb-4">50% of all frauds</h3>
              <p className="text-xl text-slate-700">in the iGaming, Online Casinos and Sports Betting businesses involve Bonus Abuse.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bonus abuse disrupts the intended benefits of your promotions and impacts your bottom line.",
                icon: AlertTriangle,
                color: "red"
              },
              {
                title: "Unfair advantages: Bonus abuse leads to a distorted playing field, affecting game integrity and diminishing the overall player experience.",
                icon: Scale,
                color: "orange"
              },
              {
                title: "Strain on resources: Managing and mitigating bonus abuse requires significant operational effort, with fraud management often consuming up to one-tenth of an operator's revenue.",
                icon: DollarSign,
                color: "yellow"
              },
              {
                title: "Risk of financial and reputational damage: Abused bonuses leave you exposed to financial loss and harm to your brand's reputation.",
                icon: Shield,
                color: "blue"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                  </div>
                </div>
                <p className="text-slate-600">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Abusers Are Shrewd Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              BONUS ABUSERS ARE SHREWD
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { value: "Over 90%", label: "of bonus abusers have never been part of a data breach.", color: "red" },
              { value: "Most", label: "of bonus abusers rely on free email provider", color: "orange" },
              { value: "Harder to track", label: "They tend not to have any social media presence linked to their email address, making them harder to track.", color: "purple" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">A major issue for iGaming operators</h3>
              <p className="text-xl text-slate-700">bonus abuse typically costs around <span className="font-bold text-red-600">15% of annual gross revenues</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Challenges Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Identifying bonus abusers requires a concerted effort across multiple teams
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Including Marketing, Promotions, Customer Service, Risk & Compliance, Legal, and Business Intelligence.
              </p>
              <p className="text-lg text-slate-600">
                However, relying on these teams can slow down the process of efficiently analyzing large data sets, making it harder to quickly and accurately spot bonus abusers. Some challenges that contribute to this include:
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <div className="space-y-4">
                {[
                  "Coordination Delays",
                  "Knowledge Silos",
                  "Resource Allocation Issues",
                  "Collaboration Complexity",
                  "Inconsistent Data Handling",
                  "Accountability Gaps",
                  "Higher Risk of Errors"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Not Flagging Genuine Players Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Importance of Not Flagging Genuine Players as Bonus Abusers
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-xl text-slate-600 leading-relaxed">
                Incorrectly labeling legitimate players as bonus abusers can severely damage their experience and trust, ultimately hurting your business reputation and revenue.
              </p>
              <p className="text-lg text-slate-600">
                It's essential to differentiate between genuine gaming activity and fraudulent exploitation of promotions. By making this distinction, you ensure that real players aren't harmed by overly strict anti-fraud measures.
              </p>
            </div>
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <p className="text-lg text-slate-600">
                With precise targeting of fraudulent behavior, iGaming, online casinos, and sports betting operators can protect their reputation and financial health while maintaining a positive player experience, building trust, and enhancing the effectiveness of marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAMWIT's Approach Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              GAMWIT's Approach to Solve These Complex Challenges
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Behavior Based - Not Rule Based */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Behavior Based - Not Rule Based</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Rather than relying on rigid, rule-based systems, GAMWIT uses advanced AI and ML algorithms to detect the behavioral patterns that indicate bonus abuse.
              </p>
            </div>

            {/* Multiple Iterations For Accuracy */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Multiple Iterations For Accuracy</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our Bonus Abuse prevention platform goes a step further by running multiple checks to ensure that only genuine cases of abuse are flagged, preventing you from mistakenly labeling legitimate players as abusers.
              </p>
            </div>

            {/* Instant Analysis */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900">Instant Analysis of Large Volumes of Data</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT quickly analyzes large sets of player data, including variations in withdrawals, deposits, betting patterns, and activity levels. All this is powered by a set of proprietary features developed from decades of experience in the iGaming industry.
              </p>
            </div>

            {/* Specific and Targeted Predictions */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-slate-900">Specific and Targeted Predictions Without the Need for PII</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Thanks to its focus on player behavior and game-specific patterns, GAMWIT can accurately identify bonus abusers without requiring any Personally Identifiable Information (PII). This means you get precise predictions while protecting your players' privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Behaviors Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Player Behaviors are Dynamic
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                It varies across:
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
                What signals a 'Bonus Abuser' on your platform might look completely different on another platform. Because GAMWIT's model is trained on your unique data, it accurately detects behaviors that are specific and relevant to your players.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GAMWIT's AI Adapts Dynamically</h3>
              <p className="text-lg text-slate-600 mb-6">
                GAMWIT's AI is designed to quickly detect changes in bonus abuser behavior over time. As these shifts happen, the AI adjusts the model to improve prediction accuracy.
              </p>
              <p className="text-slate-600">
                This dynamic adaptability is something that would be nearly impossible for a human to replicate without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Business Benefits
            </h2>
            <h3 className="text-2xl font-bold text-green-600">No more free rides for bonus abusers!</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Protect against bonus bagging, bonus hunting, bonus duping, multi-accounting, arbitrage betting, and chip dumping.", color: "blue" },
              { icon: DollarSign, title: "Cut down on unnecessary bonus spend.", color: "green" },
              { icon: TrendingUp, title: "Enjoy massive cost savings.", color: "purple" },
              { icon: Target, title: "Achieve a higher ROI on your campaigns.", color: "orange" },
              { icon: BarChart3, title: "See a boost in NGR and hold percentage.", color: "indigo" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-${benefit.color}-100 rounded-xl flex items-center justify-center mx-auto`}>
                    <benefit.icon className={`h-8 w-8 text-${benefit.color}-600`} />
                  </div>
                  <p className="text-slate-600 text-sm">{benefit.title}</p>
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
              GAMWIT's Bonus Abuse prevention model is a simple plug-and-play solution, ready for use by your Marketing, Finance, Risk, and Compliance teams—no data analytics or technical expertise needed.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              This means you can quickly identify and categorize potential bonus abusers early in your risk and mitigation process, saving valuable time and resources.
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
                Works with All Data Formats
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Our expert team ensures seamless integration of your gaming data with GAMWIT, no matter how or in what format it's collected or stored.
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
              Runs Automatically, So You Can Focus on Growth!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Once integrated, GAMWIT runs automatically, delivering individual player predictions directly to your Risk, Marketing, and Customer Assistance teams—scientifically and consistently.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We can even help you integrate GAMWIT with your CRM systems, removing any guesswork and eliminating human bias. The result? Data-driven insights, tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Stop Bonus Abuse?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Start protecting your platform from bonus abuse with GAMWIT's AI-powered prevention solution.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Bonus Abuse AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 