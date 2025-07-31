import { Play, ArrowRight, BarChart3, Shield, Brain, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Features() {
  const solutions = [
    {
      icon: BarChart3,
      title: "Marketing Intelligence",
      description: "Boost your revenue, cut down costs, and enhance player experience and retention — all with data-driven insights from gaming data analytics.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Risk Intelligence",
      description: "Minimize business risks by spotting bonus abusers and duplicate accounts with the power of AI-powered gaming analytics before they become a problem.",
      color: "red",
    },
    {
      icon: Brain,
      title: "Compliance Intelligence",
      description: "Stay ahead of regulations by using AI-powered gaming analytics to identify potential money laundering and player addiction risks early on.",
      color: "green",
    },
    {
      icon: Settings,
      title: "Customized Intelligence",
      description: "Build tailored dashboards and alerts that fit your team's needs, giving them the tools to work smarter and faster.",
      color: "purple",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      red: "from-red-50 to-red-100 border-red-200 text-red-600",
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* See GAMWIT in Action */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
            See GAMWIT in Action
          </h2>
          
          {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto mt-12 animate-fade-in-up animation-delay-200">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float">
              <iframe
                src="https://www.youtube.com/embed/39jCz7GtSDw?si=bRdxYOx9LvrInBRB"
                title="GAMWIT Demo Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Our AI Solutions */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
            Our AI Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 bg-white hover:bg-slate-50 animate-fade-in-up hover:scale-105 animate-card-enter"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(solution.color)} rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <solution.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors group-hover:scale-105">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{solution.description}</p>
                  
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent group-hover:translate-x-2 transition-all duration-300">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
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
