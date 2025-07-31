import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Eye, Search, AlertCircle, Scale, FileText, Mail, UserCheck, Users2, Calendar, Activity } from "lucide-react"

export default function PlayerFrequency() {
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
              Player <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">Frequency</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Imagine knowing exactly how often a player will return and how much revenue they'll generate in a given time frame. With this insight, you can create laser-focused promotional campaigns to keep them coming back—or even increase their visits.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Player Frequency AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Predicting Player Frequency can give your company an edge
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* More Engagement, Reduced Churn */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">More Engagement, Reduced Churn</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Player Frequency analysis tells you how often players log in during a specific period. Accurately predicting their activity lets you create strategies to boost retention and foster a thriving player community. The more often players log in, the more likely they are to stay loyal, which directly cuts down churn.
              </p>
            </div>

            {/* Smart Player Segmentation */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Smart Player Segmentation for Targeted Campaigns</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Knowing player frequency helps you identify and prioritize your core audience—the players who truly matter for your game's success. By segmenting these groups, your campaigns can hit the mark while keeping costs in check.
              </p>
            </div>

            {/* Streamlined Infrastructure */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Streamlined Infrastructure and Resource Planning</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Accurate predictions mean no surprises when it comes to player traffic. You can plan server capacity and other infrastructure needs to ensure a seamless gaming experience. With smarter resource allocation, you're always ready for what's next.
              </p>
            </div>

            {/* Better Financial Planning */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Better Financial Planning</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                When you understand player behavior, you can craft more effective marketing strategies. Focus on the players who engage the most—they're often the ones who spend more, too. Frequent players are the backbone of your revenue, and predicting their behavior keeps your financial planning sharp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Challenges in Predicting Player Frequency
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Complex Player Behavior */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Complex Player Behavior</h3>
              </div>
              <p className="text-slate-600">
                Players are a diverse bunch. Some dive into your game daily, while others pop in occasionally. Predicting how often each type will engage is no easy feat. Their motivations? Those can shift too—driven by personal interests, in-game experiences, or even social connections, all of which are tough to pin down.
              </p>
              <p className="text-slate-600">
                Then there's the unpredictability of real life. Holidays, major new game releases, or personal events can shake up player frequency in ways no algorithm can fully anticipate.
              </p>
            </div>

            {/* Data Limitations */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Data Limitations and Technological Constraints</h3>
              </div>
              <p className="text-slate-600">
                Player data isn't always straightforward. Players might jump between devices, create multiple accounts, or run into connectivity issues, leaving gaps in the data.
              </p>
              <p className="text-slate-600">
                New games or features add another layer of complexity. Without historical data to fall back on, predictions can feel more like guesswork. And processing massive amounts of player data in real-time? That's a technical mountain to climb.
              </p>
            </div>

            {/* Player Privacy Concerns */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Player Privacy Concerns</h3>
              </div>
              <p className="text-slate-600">
                Balancing personalization with privacy is critical. While predictions can elevate the player experience, there's always the risk of crossing the line into exploitative monetization tactics.
              </p>
              <p className="text-slate-600">
                Add to that the legal side of things—privacy regulations often limit how much data you can gather, leaving you to work within boundaries while respecting player trust.
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
              GAMWIT's Approach in predicting Player Frequency better
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Behavior Based - Not Rule Based */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Behavior Based - Not Rule Based</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Why rely on rigid rules when player behavior is so dynamic? GAMWIT leverages advanced AI/ML algorithms to uncover the subtle patterns in how players engage with your platform—patterns that are too complex to predict manually.
              </p>
              <p className="text-slate-600">
                Our model learns directly from player behaviors and game interactions without needing any Personally Identifiable Information (PII).
              </p>
            </div>

            {/* Real-Time Data Processing */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Real-Time Data Processing</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT continuously monitors player activity and sends alerts to your team if it spots signs of a potential drop in engagement.
              </p>
              <p className="text-slate-600">
                By processing data in real time, GAMWIT lets you act immediately—whether it's sending a timely push notification or offering an in-game reward to keep players engaged when their activity dips.
              </p>
            </div>

            {/* Smart Data Analysis */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900">Smart Data Analysis and Pattern Recognition</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                With GAMWIT, you can dive deep into massive datasets to uncover trends and behaviors you might have missed. Our machine learning models, trained on historical data, deliver accurate predictions about future player frequency.
              </p>
              <p className="text-slate-600">
                GAMWIT automatically extracts meaningful features—like time spent in-game or specific gameplay patterns—to fine-tune predictions and improve accuracy.
              </p>
            </div>

            {/* Monetization Strategies */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-slate-900">Monetization Strategies and PLTV</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT forecasts which players are likely to spend more based on their predicted frequency, enabling you to design personalized offers, promotions, and subscription models that match their habits.
              </p>
              <p className="text-slate-600">
                It doesn't stop there. By correlating frequency with spending patterns, GAMWIT helps you predict a player's lifetime value (LTV), so you can optimize marketing budgets and player acquisition strategies.
              </p>
            </div>

            {/* Boosting Player Retention */}
            <div className="space-y-6 animate-fade-in-up animation-delay-800">
              <h3 className="text-2xl font-bold text-slate-900">Boosting Player Retention</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Retention is key, and GAMWIT helps you get it right. By spotting subtle shifts in engagement patterns, it identifies players who are at risk of leaving. Early detection means you can step in with tailored strategies—like special incentives—to keep them coming back.
              </p>
            </div>

            {/* Efficient Infrastructure Management */}
            <div className="space-y-6 animate-fade-in-up animation-delay-1000">
              <h3 className="text-2xl font-bold text-slate-900">Efficient Infrastructure Management</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Anticipate demand before it happens. GAMWIT predicts when and where player activity will spike, allowing you to manage traffic seamlessly and scale resources efficiently. Your players get a smooth gaming experience, and you get peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Behavior Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
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
                What makes someone a "Frequent Player" on your platform might look entirely different on another. That's why GAMWIT trains on your data, identifying the behaviors that matter most to your players.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GAMWIT's AI Adapts Dynamically</h3>
              <p className="text-lg text-slate-600 mb-6">
                Player behaviors evolve, and GAMWIT evolves with them. Its advanced AI continuously detects changes in player patterns and adjusts the model to stay accurate and relevant.
              </p>
              <p className="text-slate-600">
                This kind of unbiased adaptability is almost impossible to achieve manually, but GAMWIT handles it seamlessly to keep your predictions sharp.
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Increased player retention and Player Lifetime Value (LTV)", color: "blue" },
              { icon: Database, title: "Optimized Resource Allocation", color: "green" },
              { icon: Target, title: "Drive effective marketing and growth strategies", color: "purple" },
              { icon: Users2, title: "Better Community Building", color: "orange" },
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
              Our Player Frequency AI Model is designed to be effortless. It's a true plug-and-play solution that your Retention, Marketing, and Customer Service teams can use without needing any background in data analytics or technical skills. You'll quickly identify and categorize frequent players, saving both time and resources.
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
                Compatible with Any Data Format
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                No matter how or where you collect and store your gaming data, our team of experts will seamlessly integrate it with GAMWIT. We handle all formats so you can focus on what matters—your players.
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
              Automatic Insights Let You Focus on Growth
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Once GAMWIT is set up, it works on its own! It delivers accurate, player-specific churn predictions to your teams with scientific precision and consistency.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Need GAMWIT to work with your CRM system? We can take care of that too. With a fully data-driven approach tailored to your platform, you eliminate guesswork and human bias—leaving you free to focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Predict Player Frequency?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Start predicting player behavior and optimizing your campaigns with GAMWIT's AI-powered Player Frequency solution.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Player Frequency AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 