import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity, Lock, Gavel, AlertCircle as AlertCircleIcon } from "lucide-react"

export default function AntiMoneyLaundering() {
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
              ANTI - MONEY <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">LAUNDERING</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Stay one step ahead of money launderers. Our anti-money laundering AI model predicts the likelihood of suspicious player activity, helping you blacklist offenders and sidestep regulatory trouble.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try AML AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Penalties Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Money Laundering is A Serious Threat to Online Gaming Operators
            </h2>
            <h3 className="text-2xl font-bold text-red-600">Legal Penalties</h3>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <p className="text-xl text-slate-600 leading-relaxed">
              Online gaming operators operate under strict scrutiny when it comes to anti-money laundering (AML) regulations. Whether it's the EU's AML directives or the Bank Secrecy Act in the U.S., the rules are clear: implement robust monitoring systems, report suspicious activity, follow strict KYC (Know Your Customer) protocols.
            </p>
            <p className="text-lg text-slate-600">
              Failing to comply isn't just risky—it's costly. The consequences range from heavy fines to revoked gaming licenses and, in severe cases, criminal charges against executives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { amount: "£6M", description: "fine was imposed on a major gaming operator for AML breaches.", color: "red" },
              { amount: "€386,000", description: "penalty was issued to an operator for failing to address money laundering risks.", color: "orange" },
              { amount: "€67,000", description: "fine was handed out by Malta's AML Unit to a gaming company for non-compliance.", color: "purple" },
            ].map((penalty, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className={`text-2xl font-bold text-${penalty.color}-600`}>{penalty.amount}</div>
                  <p className="text-slate-600 text-sm">{penalty.description}</p>
                  <p className="text-xs text-slate-500">(Source)</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ignoring AML regulations can do more than hurt your bottom line—it can shut you down entirely.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation Damage Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Being Involved in Money Laundering, Whether Knowingly or Unknowingly, Can Damage Your Reputation
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Loss of Revenue and Increased Costs */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Loss of Revenue and Increased Costs</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Laundered money often involves fraudulent or stolen funds, which can lead to chargebacks and a loss of legitimate revenue.
              </p>
              <p className="text-slate-600">
                Dealing with these fraudulent accounts also drives up operational costs, as you'll need to invest time and resources in investigations and remediation.
              </p>
            </div>

            {/* Decreased User Engagement */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Decreased User Engagement</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                If your platform becomes a conduit for money laundering, it can damage the integrity of your games, creating an unfair experience that drives honest players away.
              </p>
              <p className="text-slate-600">
                Legitimate players may also face inconvenience due to added security measures—transaction delays, identity verifications, or even wrongful account freezes—frustrating the gaming experience.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
              <p className="text-xl text-slate-700">
                Money laundering puts your business at risk, impacting everything from regulatory compliance and financial stability to your reputation and player trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Challenges in Addressing Money Laundering Issues
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Player Anonymity */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Player Anonymity</h3>
              </div>
              <p className="text-slate-600">
                Gaming platforms often let players create accounts with minimal personal information, making it easier for criminals to hide their true identities.
              </p>
              <p className="text-slate-600">
                Cryptocurrencies, which some platforms accept, provide even greater anonymity, making it harder to trace transactions and complicating efforts to track illicit activity.
              </p>
              <p className="text-xs text-slate-500">(Source)</p>
            </div>

            {/* Lack of Standardization */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Lack of Standardization</h3>
              </div>
              <p className="text-slate-600">
                AML regulations are enforced differently across countries, which leads to inconsistencies and opens the door for money laundering in less-regulated regions.
              </p>
              <p className="text-slate-600">
                Operators may also adopt varying levels of security and compliance measures, leaving gaps that criminals can exploit.
              </p>
            </div>

            {/* Evolving Techniques */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Evolving Techniques and Technology</h3>
              </div>
              <p className="text-slate-600">
                Criminals are constantly refining their methods to stay ahead of detection. They may combine deposits, player-to-player collusion, and withdrawals to launder money, making it difficult to trace.
              </p>
            </div>

            {/* Player Privacy Concerns */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Player Privacy Concerns</h3>
              </div>
              <p className="text-slate-600">
                To stay compliant with AML regulations, you may need to collect and analyze a significant amount of player data—an effort that could raise privacy concerns.
              </p>
              <p className="text-slate-600">
                Players may resist extended verification processes, potentially leading to a loss of customers. This creates a balancing act between maintaining a smooth user experience and meeting strict AML requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAMWIT's Approach Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              GAMWIT's Approach to Combating Money Laundering
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Behavior Based - Not Rule Based */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Behavior Based - Not Rule Based</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Instead of relying on rigid, rule-based methods, GAMWIT leverages advanced AI/ML algorithms to identify the subtle and complex behavioral patterns of money launderers—patterns that might be missed by manual detection.
              </p>
              <p className="text-slate-600">
                With real-time transaction monitoring, GAMWIT flags suspicious activities as they happen, enabling operators to take immediate action, such as freezing accounts or blocking transactions, to stop laundering in its tracks.
              </p>
            </div>

            {/* Large Datasets Analyzed Instantly */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Large Datasets Analyzed Instantly</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT processes massive volumes of data to analyze player-specific betting patterns, gaming activities, and non-gaming interactions.
              </p>
              <p className="text-slate-600">
                Our in-house Proprietary Feature Factory, backed by decades of gaming industry experience, ensures highly accurate predictions for better risk management.
              </p>
            </div>

            {/* Dynamic Risk Assessment */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900">Dynamic Risk Assessment</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT assesses each player's risk level dynamically by analyzing their transaction history and behavioral patterns through our Proprietary Feature Factory.
              </p>
              <p className="text-slate-600">
                This enables operators to prioritize actions effectively, ensuring that high-risk activities are addressed first.
              </p>
            </div>

            {/* Enhanced User Experience */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-slate-900">Enhanced User Experience</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                With better detection accuracy, GAMWIT reduces the risk of mistakenly flagging legitimate players as suspicious.
              </p>
              <p className="text-slate-600">
                This creates a smoother, more secure experience for your players while helping you target potential laundering activities with precision.
              </p>
            </div>

            {/* Enhanced Reporting */}
            <div className="space-y-6 animate-fade-in-up animation-delay-800">
              <h3 className="text-2xl font-bold text-slate-900">Enhanced Reporting</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT generates detailed, accurate reports for regulatory bodies, ensuring full documentation of suspicious activities and compliance with AML regulations.
              </p>
              <p className="text-slate-600">
                These reports help you stay on top of your regulatory obligations with minimal hassle.
              </p>
            </div>

            {/* Fraud Detection and Prevention */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1000">
              <h3 className="text-2xl font-bold text-slate-900">Fraud Detection and Prevention</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Using predictive analytics, GAMWIT anticipates potential laundering activities based on historical data and trends.
              </p>
              <p className="text-slate-600">
                This allows operators to implement preemptive measures, stopping money laundering before it even begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Behavior Section */}
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
                What flags a player as a "Money Launderer" on your platform may not be the same on another. Since our model learns from your data, it identifies behaviors that are unique and relevant to your players, giving you the insights that matter most.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GAMWIT's AI Adapts Dynamically</h3>
              <p className="text-lg text-slate-600 mb-6">
                GAMWIT's AI continuously monitors and detects changes in the behavior of money launderers, adapting in real time.
              </p>
              <p className="text-slate-600 mb-6">
                As behaviors shift, the model adjusts to improve its predictions with greater accuracy.
              </p>
              <p className="text-slate-600">
                The cognitive capabilities of the GAMWIT system detects any change in VIP behavior and adjusts the model to adapt to these ever changing demands of your VIPs.
              </p>
              <p className="text-slate-600 mt-4">
                This level of dynamic adaptation is almost impossible for humans to achieve without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Business Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Lower risk of legal or financial penalties and protection against fraud, helping create a safer gaming environment.", color: "blue" },
              { icon: Gavel, title: "Seamless compliance with varying standards and regulations.", color: "green" },
              { icon: DollarSign, title: "Long-term financial stability for your business.", color: "purple" },
              { icon: BarChart3, title: "Increased operational efficiency across your teams.", color: "orange" },
              { icon: Lock, title: "Enhanced data security and privacy protection for your players.", color: "indigo" },
              { icon: Star, title: "Strengthened reputation and trust among your player community", color: "yellow" },
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Plug and Play Solution - No Technical Expertise Required!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our Anti-Money Laundering AI Model is a plug-and-play solution that your Marketing, Finance, Risk, and Compliance teams can easily use—without the need for any technical expertise or data analytics skills.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              This makes it simple to identify and categorize potential money laundering activities early in your risk management program, saving both time and resources.
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
                Works with Any Data Format
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                No matter how or where you store your gaming data, our expert team ensures seamless integration with GAMWIT. We handle the technical details, so you don't have to.
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
              Runs Automatically, so you can Focus on Growth!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Once integrated, GAMWIT runs automatically, delivering player-specific predictions directly to your teams—scientifically and consistently.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We can even help you integrate GAMWIT with your CRM systems. By using data-driven insights tailored specifically to your business, you can eliminate human bias and guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Combat Money Laundering?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Start protecting your platform from money laundering with GAMWIT's AI-powered AML solution.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try AML AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 