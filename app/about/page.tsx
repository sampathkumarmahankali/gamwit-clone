import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Users, Target, Award, Globe, Shield, TrendingUp, Zap, Database, Clock } from "lucide-react"

export default function About() {
  const leadership = [
    {
      name: "Aditya",
      role: "Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Established BizAcuity in 2011 with a vision for data-driven business solutions.",
    },
    {
      name: "Sudhir",
      role: "Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Pioneering gaming analytics and AI solutions for the industry.",
    },
    {
      name: "Nishant",
      role: "Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Driving innovation in gaming technology and business intelligence.",
    },
  ]

  const companyValues = [
    {
      icon: Brain,
      title: "Powerful & Scalable",
      description: "AI-driven business intelligence solutions that grow with your business.",
      color: "blue",
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Intuitive interfaces designed for gaming professionals at all levels.",
      color: "green",
    },
    {
      icon: Target,
      title: "Swift & Cost-Effective",
      description: "Rapid implementation with significant cost savings for our clients.",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Comprehensive Insights",
      description: "Deep operational insights that drive informed, data-driven decisions.",
      color: "indigo",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Brain className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900">
              About <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">GAMWIT</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              GAMWIT is the brainchild of BizAcuity, built with over decades of gaming experience and specifically designed for the Gaming/Casino industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                BizAcuity Foundation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                BizAcuity is a data analytics and IT services company, established in 2011 by Aditya, Sudhir, and Nishant with one end goal: enabling businesses with actionable insights that drive real impact.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our goal is to offer powerful, scalable, user-friendly, and adaptable AI-driven business intelligence solutions that are swift and cost-effective. We aim to empower our clients by providing comprehensive insights into their operations, facilitating informed, data-driven, and rapid decision-making that boosts overall corporate performance.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By leveraging advanced solutions, our clients gain a competitive advantage through enhanced operational efficiency, improved strategic planning, and greater agility in responding to market changes. As our clients thrive and achieve greater success, we too benefit and grow, creating a mutually enriching relationship that drives continued innovation and excellence.
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200 hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">BizAcuity Analytics</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-dashed border-blue-200 hover:border-blue-300 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <TrendingUp className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-blue-600 font-medium">Analytics Platform</p>
                      <p className="text-sm text-blue-500 mt-1">Add your analytics screenshot here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse animate-float-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-pulse delay-1000 animate-float-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Genesis of GAMWIT */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
              Genesis of GAMWIT
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up animation-delay-200">
            <p className="text-lg text-slate-600 leading-relaxed">
              Our innovative AI Analytical Platform for the Gaming, Casino, and igaming industry, can be traced back to a serendipitous meeting of enigmatic, passionately driven individuals who first crossed paths while working on projects for a gaming organization. Initially, our founders established themselves as a service organization, consulting for and solving complex problems faced by many prominent casinos and gaming industry leaders.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              This hands-on experience not only honed their expertise but also illuminated significant opportunities within the market. Their collective knowledge and deep industry understanding allowed them to pinpoint critical gaps in data utilization and operational efficiency. Recognizing the potential for transformative solutions, they created GAMWIT.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, this platform stands as a testament to their vision, offering advanced AI analytics that empower gaming professionals to make data-driven decisions, streamline operations, and enhance customer experiences. The continued partnership with our initial clients from the gaming industry, who have trusted and valued our services since our consulting days, has been instrumental in the evolution of GAMWIT. The insights and learnings from these long-term relationships have multiplied manifold.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              GAMWIT represents a seamless integration of these learnings and the identified gaps in the market, ensuring it remains at the forefront of industry innovation and continues to deliver exceptional business outcomes across the gaming sector.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:scale-105 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(value.color)} rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <value.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors group-hover:scale-105">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{value.description}</p>
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

      {/* Leadership Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
              Our Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto border-4 border-slate-200 group-hover:border-blue-300 transition-colors animate-pulse">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold">{member.role}</p>
                    <p className="text-slate-600 text-sm mt-2">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience GAMWIT?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join the gaming operators who trust our AI-powered platform to drive growth, ensure compliance, and deliver exceptional player experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
                >
                  Try for Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 rounded-full font-bold"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
