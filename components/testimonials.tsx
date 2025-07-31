"use client"

import { Clock, Zap, Database, Layers, Settings, DollarSign, Brain, Award } from "lucide-react"

export default function Testimonials() {
  const advantages = [
    {
      icon: Clock,
      title: "Intel When It Matters Most",
      description: "GAMWIT's predictions let you take action before problems arise. Whether it's for revenue generation, managing risks, ensuring compliance, or enhancing the gaming experience, you'll always be one step ahead.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Plug and Play Solution",
      description: "Building an AI model from scratch can take over 16 weeks. But with GAMWIT, you're ready to go in just 2-3 weeks. Our pre-built models integrate quickly with your data, customizing insights to match your specific needs — fast and efficiently.",
      color: "green",
    },
    {
      icon: Database,
      title: "Works With Varied Data Types and Sources",
      description: "No matter what kind of data you have, GAMWIT works seamlessly with it. Whether you're using a consolidated data platform or pulling from multiple sources like gaming platforms, sports betting feeds, or other sources, our game analytics tools work seamlessly with your data to provide valuable insights.",
      color: "purple",
    },
    {
      icon: Layers,
      title: "One Stop Solution For Multiple AI Use Cases",
      description: "With GAMWIT, you get access to a variety of AI-based gaming analytics models for gaming analytics under one platform. This saves you the hassle of setting them up individually or dealing with multiple vendors — all while cutting down your costs.",
      color: "indigo",
    },
    {
      icon: Settings,
      title: "Minimal Intervention From Your Team",
      description: "GAMWIT is fully automated! Once it's set up, it works on its own, providing you with actionable insights so you can focus on running and growing your business.",
      color: "orange",
    },
    {
      icon: DollarSign,
      title: "Huge Cost Savings",
      description: "Setting up a system like GAMWIT would normally require a team of data scientists, analysts, engineers, and business experts. With GAMWIT, you save up to 85% on setup costs and up to 50% on ongoing expenses.",
      color: "red",
    },
    {
      icon: Brain,
      title: "Expertise in Data Analytics",
      description: "GAMWIT is built on decades of experience from our parent company, BizAcuity, in the gaming industry. Our models are powered by over 500 proprietary variables, ensuring highly accurate predictions from day one. You get the benefit of all this expertise right from the start.",
      color: "yellow",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
      green: "from-green-50 to-green-100 border-green-200 text-green-600",
      purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-600",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-600",
      orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-600",
      red: "from-red-50 to-red-100 border-red-200 text-red-600",
      yellow: "from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 animate-fade-in-up">
            Why GAMWIT Stands Out
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:scale-105 animate-fade-in-up animate-card-enter"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(advantage.color)} rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <advantage.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors group-hover:scale-105">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors">{advantage.description}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl scale-110"></div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-400">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Awards and Recognition</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-600 group">
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/awards/esr-b2b-award.png" 
                  alt="ESR B2B Award"
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <Award className="h-8 w-8 text-blue-400 fallback-icon" style={{ display: 'none' }} />
              </div>
              <h4 className="font-bold text-white mb-2">ESR B2B Award</h4>
              <p className="text-sm text-slate-300">Nominated as Data and AI Partner in 2022 and 2023</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-800 group">
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/awards/vixio-finalist-2024.png" 
                  alt="Vixio Finalist 2024"
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <Award className="h-8 w-8 text-green-400 fallback-icon" style={{ display: 'none' }} />
              </div>
              <h4 className="font-bold text-white mb-2">Vixio Finalist 2024</h4>
              <p className="text-sm text-slate-300">Finalist in the Compliance Innovator of the Year 2024 category</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-1000 group">
              <div className="flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/awards/esr-north-america-2024.png" 
                  alt="ESR North America 2024"
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <Award className="h-8 w-8 text-purple-400 fallback-icon" style={{ display: 'none' }} />
              </div>
              <h4 className="font-bold text-white mb-2">ESR North America 2024</h4>
              <p className="text-sm text-slate-300">Nominated as Compliance Technology Provider in 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
