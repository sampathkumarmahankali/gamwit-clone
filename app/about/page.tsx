import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Brain, Users, Target, Award, Globe, Shield, TrendingUp, Zap, Database, Clock, Sparkles, Rocket, BarChart3 } from "lucide-react"

export default function About() {
  const leadership = [
    {
      name: "Aditya",
      role: "Co-Founder",
      image: "/aditya.jpg",
      bio: "Established BizAcuity in 2011 with a vision for data-driven business solutions.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
    },
    {
      name: "Sudhir",
      role: "Co-Founder",
      image: "/sudhir.jpg",
      bio: "Pioneering gaming analytics and AI solutions for the industry.",
      gradient: "from-green-500 via-emerald-500 to-green-600",
    },
    {
      name: "Nishant",
      role: "Co-Founder",
      image: "/nishant.jpg",
      bio: "Driving innovation in gaming technology and business intelligence.",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
    },{
  "name": "Rakesh Rajalwal",
  "role": "Chief Architect",
  "image": "/rakesh.jpg",
  "bio": "17+ years in scalable systems, Data Management, BI, big data, AI/ML.",
  "gradient": "from-blue-500 via-cyan-500 to-blue-600"
},{
  "name": "Rahul Jain",
  "role": "Head of Delivery",
  "image": "/rahul.jpg",
  "bio": "Rahul leads project delivery, ensuring quality. Expertise in data, analytics, data warehousing, and AI/ML.",
  "gradient": "from-green-500 via-emerald-500 to-green-600"
},


  ]

  const companyValues = [
    {
      icon: Brain,
      title: "Powerful & Scalable",
      description: "AI-driven business intelligence solutions that grow with your business.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-600/10",
      borderGradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Intuitive interfaces designed for gaming professionals at all levels.",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-green-600/10",
      borderGradient: "from-green-400 to-emerald-400",
    },
    {
      icon: Target,
      title: "Swift & Cost-Effective",
      description: "Rapid implementation with significant cost savings for our clients.",
      gradient: "from-purple-500 via-violet-500 to-purple-600",
      bgGradient: "from-purple-500/10 via-violet-500/10 to-purple-600/10",
      borderGradient: "from-purple-400 to-violet-400",
    },
    {
      icon: Shield,
      title: "Comprehensive Insights",
      description: "Deep operational insights that drive informed, data-driven decisions.",
      gradient: "from-indigo-500 via-blue-500 to-indigo-600",
      bgGradient: "from-indigo-500/10 via-blue-500/10 to-indigo-600/10",
      borderGradient: "from-indigo-400 to-blue-400",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-red-400/10 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Neural Network Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural-about" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-400 animate-pulse"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#neural-about)"/>
            </svg>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
              <Brain className="mr-2 h-4 w-4 animate-pulse" />
              About GAMWIT
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse border border-blue-500/30">
              <Brain className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                GAMWIT
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              GAMWIT is the brainchild of BizAcuity, built with over decades of gaming experience and specifically designed for the Gaming/Casino industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
                <Rocket className="mr-2 h-4 w-4 animate-pulse" />
                Our Foundation
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                BizAcuity Foundation
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                BizAcuity is a data analytics and IT services company, established in 2011 by Aditya, Sudhir, and Nishant with one end goal: enabling businesses with actionable insights that drive real impact.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our goal is to offer powerful, scalable, user-friendly, and adaptable AI-driven business intelligence solutions that are swift and cost-effective. We aim to empower our clients by providing comprehensive insights into their operations, facilitating informed, data-driven, and rapid decision-making that boosts overall corporate performance.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                By leveraging advanced solutions, our clients gain a competitive advantage through enhanced operational efficiency, improved strategic planning, and greater agility in responding to market changes. As our clients thrive and achieve greater success, we too benefit and grow, creating a mutually enriching relationship that drives continued innovation and excellence.
              </p>
            </div>

            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">BizAcuity Analytics</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-xl p-8 border-2 border-dashed border-blue-400/50 hover:border-blue-300/50 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse border border-blue-400/30">
                        <TrendingUp className="w-8 h-8 text-blue-400" />
                      </div>
                      <p className="text-blue-300 font-medium">Analytics Platform</p>
                      <p className="text-sm text-blue-400 mt-1">Add your analytics screenshot here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse animate-float-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full animate-pulse delay-1000 animate-float-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Genesis of GAMWIT */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              Our Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white animate-fade-in-up">
              Genesis of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                GAMWIT
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up animation-delay-200">
            <p className="text-lg text-slate-300 leading-relaxed">
              Our innovative AI Analytical Platform for the Gaming, Casino, and igaming industry, can be traced back to a serendipitous meeting of enigmatic, passionately driven individuals who first crossed paths while working on projects for a gaming organization. Initially, our founders established themselves as a service organization, consulting for and solving complex problems faced by many prominent casinos and gaming industry leaders.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              This hands-on experience not only honed their expertise but also illuminated significant opportunities within the market. Their collective knowledge and deep industry understanding allowed them to pinpoint critical gaps in data utilization and operational efficiency. Recognizing the potential for transformative solutions, they created GAMWIT.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Today, this platform stands as a testament to their vision, offering advanced AI analytics that empower gaming professionals to make data-driven decisions, streamline operations, and enhance customer experiences. The continued partnership with our initial clients from the gaming industry, who have trusted and valued our services since our consulting days, has been instrumental in the evolution of GAMWIT. The insights and learnings from these long-term relationships have multiplied manifold.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              GAMWIT represents a seamless integration of these learnings and the identified gaps in the market, ensuring it remains at the forefront of industry innovation and continues to deliver exceptional business outcomes across the gaming sector.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 rounded-full text-sm font-medium shadow-lg">
              <Target className="mr-2 h-4 w-4 animate-pulse" />
              Our Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white animate-fade-in-up">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Values
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700/50 hover:border-slate-600/50 transform-gpu animate-fade-in-up animate-card-enter"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.borderGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                {/* Content Container */}
                <div className="relative z-10 space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                    <value.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300 ease-out" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-all duration-300 ease-out group-hover:scale-105">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-300 ease-out">{value.description}</p>
                  </div>

                  {/* Interactive Elements */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-300"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-600"></div>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Morphing Shapes */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 ease-out"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full group-hover:scale-150 group-hover:-rotate-180 transition-all duration-700 ease-out delay-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-300 rounded-full text-sm font-medium shadow-lg">
              <Award className="mr-2 h-4 w-4 animate-pulse" />
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white animate-fade-in-up">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Leadership
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up animate-card-enter border border-slate-700/50 hover:border-slate-600/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 space-y-6">
                  <div className={`w-24 h-24 flex items-center justify-center mx-auto overflow-hidden`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover object-top w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400 font-semibold">{member.role}</p>
                    <p className="text-slate-300 text-sm mt-2">{member.bio}</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/2 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 hover:border-blue-400/30 transition-all duration-500">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg mb-6">
                <BarChart3 className="mr-2 h-4 w-4 animate-pulse" />
                Get Started
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience GAMWIT?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Join the gaming operators who trust our AI-powered platform to drive growth, ensure compliance, and deliver exceptional player experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 border-0"
                >
                  Try for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent px-8 py-4 rounded-full font-bold backdrop-blur-xl"
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

