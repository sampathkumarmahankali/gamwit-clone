import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, DollarSign, Target, Shield, Zap, CheckCircle, XCircle, BarChart3, Clock, AlertTriangle, Star, Award, Database, Network, Layers, Cpu } from "lucide-react"

export default function PlayerLifetimeValue() {
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
              Player <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">Lifetime Value</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Predict Player Lifetime Value at any stage of the player lifecycle, enabling you to optimize the cost of retention and promotions.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Player LTV AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Strategic Advantages of Accurately Forecasting Player LTV
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Marketing Efficiency */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Marketing Efficiency</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Segmenting players into low, medium, and high-value categories helps you focus your marketing efforts where they'll make the most impact. Personalized offers and promotions tailored to predicted Lifetime Value can boost engagement and spending.
              </p>
              <p className="text-slate-600">
                Even low-value players can surprise you—they might not spend much upfront but can grow into medium or high-value players with the right nurturing and campaigns.
              </p>
            </div>

            {/* Improved Monetization */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Improved Monetization</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Predictive PLTV empowers you to design and optimize your platform with confidence. From pricing tiers to premium content, every decision can align with players' predicted value.
              </p>
              <p className="text-slate-600">
                These insights help you fine-tune your approach to pricing and ensure your content offerings resonate with your audience.
              </p>
            </div>

            {/* Churn Prevention */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Churn Prevention</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Spotting a low-value player at risk of churning gives you a chance to act. By offering rewards or running targeted engagement campaigns, you can keep them active and engaged.
              </p>
              <p className="text-slate-600">
                Predictive LTV predictions also help craft loyalty programs that reward players based on their potential value, encouraging long-term connections with your platform.
              </p>
            </div>

            {/* Product Development */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Product Development</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your development efforts can be laser-focused on creating features that appeal to high-value players, ensuring resources are used wisely.
              </p>
              <p className="text-slate-600">
                By leveraging Player LTV insights, you can balance gameplay to maximize enjoyment while strategically encouraging spending.
              </p>
            </div>
          </div>

          {/* ROI Formula */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl text-center animate-fade-in-up">
            <p className="text-lg text-slate-600 mb-4">
              When these strategies come together—efficient player acquisition, effective monetization, proactive churn prevention, and product enhancements—you'll see a noticeable boost in ROI for your gaming business.
            </p>
            <div className="bg-white p-6 rounded-xl inline-block">
              <p className="text-2xl font-bold text-slate-900">
                ROI = <span className="text-blue-600">(Player Lifetime Spend - Player Acquisition Cost)</span> ÷ <span className="text-green-600">Player Acquisition Cost</span> × 100
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
              Challenges in Predicting Player Lifetime Value
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Varied Player Behavior */}
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Varied Player Behavior</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Every player is unique—some enjoy a casual spin while others dive in headfirst, engaging deeply with the game. This diversity makes it nearly impossible to rely on a one-size-fits-all prediction model.
              </p>
              <p className="text-slate-600">
                On top of that, players' preferences and engagement levels can shift without warning. A new game update, changes in their personal lives, or trends sweeping through the gaming community can all throw a wrench into prediction efforts.
              </p>
            </div>

            {/* Privacy and Data Regulations */}
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up animation-delay-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Privacy and Data Regulations</h3>
              </div>
              <p className="text-slate-600 mb-4">
                With regulations like GDPR tightening the reins on data collection, the ability to gather and use detailed player information is shrinking. The result? Less data for predictive modeling and a hit to the accuracy of Player LTV predictions.
              </p>
            </div>

            {/* Modelling Difficulties */}
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up animation-delay-400">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Modelling Difficulties</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Player behavior is anything but linear. The connection between early actions and long-term value is often complex, making it tricky to model effectively.
              </p>
              <p className="text-slate-600">
                Then there's the challenge of the high-value player segment—it's small but critical. Sparse data from this group can make generalizing for predictive models feel like solving a puzzle with missing pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAMWIT Solutions Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              GAMWIT Keeps PLTV Predictions Accurate, Even as Player Behavior Evolves
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Handling Data Complexity */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-900">Handling Data Complexity and Volume</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT does the heavy lifting for you, automatically uncovering subtle patterns in massive datasets—patterns so nuanced they'd be nearly impossible to spot manually. It doesn't stop there. GAMWIT learns in real time, continuously adapting as players interact with your game. This means your predictions stay sharp, no matter how behaviors change.
              </p>
            </div>

            {/* Proprietary Feature Factory */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900">Our Proprietary Feature Factory</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our Proprietary Feature Factory, built on decades of iGaming expertise, doesn't just look at what players do—it predicts when their LTV might drop. This gives you the chance to act fast and keep your players engaged before their value declines. It's the edge you need to stay ahead.
              </p>
            </div>

            {/* Advanced Player Segmentation */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h3 className="text-2xl font-bold text-slate-900">Advanced Player Segmentation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Not all players are the same, and GAMWIT gets that. Using advanced AI and machine learning, it identifies the non-linear relationships between player actions and their potential value. By segmenting players into precise groups based on their behaviors and traits, GAMWIT helps you deliver tailored strategies that resonate. The result? A deeper understanding of your audience and more accurate value predictions.
              </p>
            </div>

            {/* Privacy Compliance */}
            <div className="space-y-6 animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold text-slate-900">Enhancing Compliance with Privacy and Data Regulations</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                GAMWIT is built with privacy in mind. It trains on behavior patterns and game data, so there's no need for Personally Identifiable Information (PII). It also works to detect and eliminate biases in your data and models, ensuring fair and ethical predictions. Plus, with explainable predictions, you'll maintain trust with players and regulators alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Techniques Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              GAMWIT uses advanced techniques to predict PLTV, helping you leverage complex data patterns for accurate player forecasts, targeted marketing, and revenue optimization.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Network, title: "Neural Networks", color: "blue" },
              { icon: Layers, title: "Ensemble Methods", color: "green" },
              { icon: Users, title: "Clustering and Segmentation", color: "purple" },
              { icon: Brain, title: "Deep Learning", color: "indigo" },
            ].map((technique, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-${technique.color}-100 rounded-xl flex items-center justify-center mx-auto`}>
                    <technique.icon className={`h-8 w-8 text-${technique.color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{technique.title}</h3>
                </div>
              </div>
            ))}
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
                What makes a player a "High Lifetime Value Player" on your platform might not hold true for others. But since GAMWIT trains on your specific data, it focuses on the behaviors that matter most to your players, giving you a more tailored and accurate prediction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">GAMWIT's AI Adapts Dynamically</h3>
              <p className="text-lg text-slate-600 mb-6">
                GAMWIT's AI doesn't just track player behavior—it understands how it changes over time. As behaviors shift, the AI quickly adapts the model to keep your predictions accurate and efficient.
              </p>
              <p className="text-slate-600">
                This level of dynamic adjustment is virtually impossible for humans to replicate without bias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Business Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Optimized customer acquisition by identifying profitable channels", color: "blue" },
              { icon: TrendingUp, title: "Maximized marketing efficiency to get more from every dollar spent", color: "green" },
              { icon: DollarSign, title: "Increased monetization and revenue through accurate player value predictions", color: "purple" },
              { icon: Shield, title: "Better retention and lower churn by targeting high-value players early", color: "red" },
              { icon: Star, title: "Effective cross-promotion and upselling to boost player lifetime value", color: "yellow" },
              { icon: Users, title: "Improved support and loyalty by understanding player needs", color: "indigo" },
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Plug and Play Solution - No Technical Expertise Needed!
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              GAMWIT's Player LTV prediction model is designed to be a plug-and-play solution that anyone on your Marketing, Finance, Risk, or Compliance teams can use—no technical skills required.
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
                No matter how or where you're collecting or storing your gaming data, GAMWIT integrates seamlessly. Our expert team will ensure a smooth setup, so you don't have to worry about compatibility.
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
              Once integrated, GAMWIT runs on its own, delivering individual player predictions to your Risk, Marketing, and Customer Support teams with scientific accuracy.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              You can even integrate GAMWIT with your CRM systems for a complete, data-driven solution. Eliminate human bias and guesswork—everything is based on your specific data and tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Predict Player Lifetime Value?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Start predicting and optimizing player lifetime value with GAMWIT's AI-powered solution.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Try Player LTV AI Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 