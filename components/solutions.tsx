import { TrendingUp, Shield, DollarSign, Users, Brain, Target, Zap, Award } from "lucide-react"

export default function Solutions() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "GAMWIT helps boost your revenue (NGR, GGR) by increasing active players, average revenue per player, and player lifetime value.",
      color: "green",
    },
    {
      icon: Shield,
      title: "Slash Risk Costs",
      description: "GAMWIT's bonus abuse model helps you lower the risks and costs associated with fraud and other business threats.",
      color: "red",
    },
    {
      icon: DollarSign,
      title: "Cut Marketing Costs",
      description: "Cut down your spending on bonuses, promotions, and affiliates by targeting your efforts more effectively, removing guesswork, and minimizing human bias.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Reduced Compliance Cost",
      description: "Stay compliant with regulations at minimal cost thanks to our responsible gaming and anti-money laundering models.",
      color: "purple",
    },
    {
      icon: Brain,
      title: "Data-Driven Decision-Making",
      description: "Make smart, strategic decisions based on accurate, real-time gaming data analytics — no more relying on guesswork.",
      color: "indigo",
    },
    {
      icon: Users,
      title: "Safe, Fair Gaming Environment",
      description: "Our gaming analytics AI models for anti-money laundering, bonus abuse, and responsible gaming help create a secure, fair gaming environment, building player trust.",
      color: "green",
    },
    {
      icon: Target,
      title: "Maximize Player Retention",
      description: "Keep players engaged and coming back for more with personalized experiences and rewards that speak to their needs.",
      color: "orange",
    },
    {
      icon: Zap,
      title: "Unmatched Player Experiences",
      description: "GAMWIT's predictive insights offer tailored recommendations and campaigns that enhance your players' experience, encouraging them to return.",
      color: "pink",
    },
    {
      icon: Award,
      title: "Stay Ahead of the Competition",
      description: "Outpace the competition with GAMWIT's targeted insights, ensuring you're always one step ahead of market trends.",
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      red: "from-red-50 to-red-100 border-red-200 text-red-600",
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600",
      orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600",
      pink: "from-pink-50 to-pink-100 border-pink-200 text-pink-600",
      yellow: "from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
            The Edge GAMWIT Brings to You
          </h2>
        </div>

        {/* Image Placeholder */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-200">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-12 border-2 border-dashed border-slate-300 hover:border-slate-400 transition-all duration-500 hover:scale-105 animate-float">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-blue-600 font-medium">Benefits Image Placeholder</p>
              <p className="text-sm text-slate-500 mt-1">Add your benefits illustration here</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:scale-105 animate-fade-in-up animate-card-enter"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(benefit.color)} rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <benefit.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors group-hover:scale-105">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors">{benefit.description}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl scale-110"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
