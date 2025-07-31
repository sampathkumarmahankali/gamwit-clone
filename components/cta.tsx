"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Search, Filter, Sparkles, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { useState, useMemo } from "react"

export default function CTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const faqs = [
    {
      id: 1,
      category: "general",
      question: "What is GAMWIT and how does it help gaming operators?",
      answer: "GAMWIT is an AI-powered gaming analytics platform that provides real-time insights, player behavior analysis, and predictive intelligence. It helps gaming operators maximize revenue, ensure regulatory compliance, and make data-driven decisions through advanced machine learning algorithms and comprehensive dashboards."
    },
    {
      id: 2,
      category: "technical",
      question: "How does GAMWIT's AI technology work?",
      answer: "GAMWIT uses advanced machine learning algorithms to analyze vast amounts of gaming data in real-time. Our AI models can predict player churn, identify VIP players early, detect bonus abuse, and ensure responsible gaming compliance. The system continuously learns and improves from new data patterns."
    },
    {
      id: 3,
      category: "features",
      question: "What are the key features of GAMWIT's analytics platform?",
      answer: "GAMWIT offers comprehensive analytics including Player Churn Prediction, Player Lifetime Value Analysis, Early VIP Detection, Responsible Gaming Monitoring, Bonus Abuse Prevention, Player Frequency Analysis, and Anti-Money Laundering Detection. All features are available through intuitive dashboards and real-time alerts."
    },
    {
      id: 4,
      category: "integration",
      question: "How easy is it to integrate GAMWIT with existing gaming systems?",
      answer: "GAMWIT is designed for seamless integration with existing gaming platforms. We provide comprehensive APIs, SDKs, and documentation to ensure smooth implementation. Our team offers full support during the integration process, typically completing setup within 2-4 weeks depending on system complexity."
    },
    {
      id: 5,
      category: "security",
      question: "How does GAMWIT ensure data security and compliance?",
      answer: "GAMWIT implements enterprise-grade security measures including end-to-end encryption, SOC 2 Type II compliance, GDPR adherence, and regular security audits. All data is processed in secure, certified data centers with strict access controls and comprehensive backup systems."
    },
    {
      id: 6,
      category: "pricing",
      question: "What pricing models does GAMWIT offer?",
      answer: "GAMWIT offers flexible pricing models including subscription-based plans, usage-based pricing, and enterprise custom solutions. We provide transparent pricing with no hidden fees, and offer free trials and demos to help you find the perfect plan for your gaming operation."
    },
    {
      id: 7,
      category: "support",
      question: "What kind of support does GAMWIT provide?",
      answer: "GAMWIT provides 24/7 technical support, dedicated account managers, comprehensive documentation, video tutorials, and regular training sessions. We also offer custom onboarding programs and ongoing optimization services to ensure you get maximum value from our platform."
    },
    {
      id: 8,
      category: "performance",
      question: "What is GAMWIT's uptime and performance guarantee?",
      answer: "GAMWIT guarantees 99.9% uptime SLA with real-time monitoring and automatic failover systems. Our platform is built for high performance, handling millions of data points with sub-second response times. We provide detailed performance metrics and proactive alerting."
    }
  ]

  const categories = [
    { id: "all", name: "All Questions", count: faqs.length },
    { id: "general", name: "General", count: faqs.filter(f => f.category === "general").length },
    { id: "technical", name: "Technical", count: faqs.filter(f => f.category === "technical").length },
    { id: "features", name: "Features", count: faqs.filter(f => f.category === "features").length },
    { id: "integration", name: "Integration", count: faqs.filter(f => f.category === "integration").length },
    { id: "security", name: "Security", count: faqs.filter(f => f.category === "security").length },
    { id: "pricing", name: "Pricing", count: faqs.filter(f => f.category === "pricing").length },
    { id: "support", name: "Support", count: faqs.filter(f => f.category === "support").length },
    { id: "performance", name: "Performance", count: faqs.filter(f => f.category === "performance").length }
  ]

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, activeCategory])

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section id="faqs" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
            FAQ Section
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white animate-fade-in-up animation-delay-200">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Everything you need to know about GAMWIT's AI-powered gaming analytics platform
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-slate-400 hover:bg-white/20"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="relative">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 backdrop-blur-sm text-slate-300 hover:bg-white/20 border border-slate-700/50"
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === category.id
                      ? "bg-blue-600/50 text-white"
                      : "bg-slate-700/50 text-slate-400"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Sliding Indicator */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                 style={{
                   width: `${100 / categories.length}%`,
                   transform: `translateX(${categories.findIndex(c => c.id === activeCategory) * 100}%)`
                 }}>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="group bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards"
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group-hover:bg-white/5"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        faq.category === "general" ? "bg-blue-500/20 text-blue-300" :
                        faq.category === "technical" ? "bg-purple-500/20 text-purple-300" :
                        faq.category === "features" ? "bg-green-500/20 text-green-300" :
                        faq.category === "integration" ? "bg-orange-500/20 text-orange-300" :
                        faq.category === "security" ? "bg-red-500/20 text-red-300" :
                        faq.category === "pricing" ? "bg-yellow-500/20 text-yellow-300" :
                        faq.category === "support" ? "bg-indigo-500/20 text-indigo-300" :
                        "bg-slate-500/20 text-slate-300"
                      }`}>
                        {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500/20 ${
                      openFaq === faq.id ? "bg-blue-500/20" : ""
                    }`}>
                      {openFaq === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-blue-300 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 group-hover:text-blue-300 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </button>
                
                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="border-t border-slate-700/50 pt-4">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-800/50 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No questions found</h3>
              <p className="text-slate-400">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-400">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-8 max-w-md mx-auto">
              Can't find what you're looking for? Our team is here to help you get the most out of GAMWIT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Contact Support
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              </button>
              <button className="group border-2 border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
