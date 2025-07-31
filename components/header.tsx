"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, Zap, Brain, Target, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isAiModelsOpen, setIsAiModelsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePage, setActivePage] = useState("home")
  
  const productsRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { name: "About", href: "/about", icon: Target },
    { name: "Contact", href: "/contact", icon: Globe },
  ]

  const products = {
    "AI Models": [
      { name: "Player Churn", href: "/products/ai-models/player-churn" },
      { name: "Player Lifetime Value", href: "/products/ai-models/player-lifetime-value" },
      { name: "Early VIP", href: "/products/ai-models/early-vip" },
      { name: "Responsible Gaming", href: "/products/ai-models/responsible-gaming" },
      { name: "Bonus Abuse", href: "/products/ai-models/bonus-abuse" },
      { name: "Player Frequency", href: "/products/ai-models/player-frequency" },
      { name: "Anti Money Laundering", href: "/products/ai-models/anti-money-laundering" },
    ],
    "Dashboards": [
      { name: "Analytics Dashboards", href: "/products/dashboards" },
    ],
    "Alerts": [
      { name: "Real-time Alerts", href: "/products/alerts" },
    ],
    "Self-Service BI": [
      { name: "Business Intelligence", href: "/products/self-service-bi" },
    ],
  }

  const solutions = [
    { name: "Marketing Intelligence", href: "/solutions/marketing-intelligence" },
    { name: "Risk Intelligence", href: "/solutions/risk-intelligence" },
    { name: "Compliance Intelligence", href: "/solutions/compliance-intelligence" },
    { name: "Customized Intelligence", href: "/solutions/customized-intelligence" },
  ]

  const resources = [
    { name: "Blogs", href: "/resources/blogs" },
  ]

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
        setIsAiModelsOpen(false)
      }
      
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false)
      }
      
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false)
      }
      
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
        setIsAiModelsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl" 
        : "bg-transparent"
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-6 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000 opacity-40"></div>
      
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Animated Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/gamwit-logo.png" 
                  alt="GAMWIT Logo" 
                  className="h-10 w-auto filter drop-shadow-[0_0_10px_rgba(0,255,136,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,136,0.8)] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">G</span>
                <span className="text-2xl font-bold text-green-400 group-hover:text-blue-400 transition-colors duration-300">A</span>
                <span className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">MWIT</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* About Link */}
              <Link
                href="/about"
                className="relative text-white hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {activePage === "about" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400 animate-pulse"></div>
                )}
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="relative text-white hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    <Brain className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Products
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 z-50 animate-fade-in-up">
                    <div className="p-6 space-y-4">
                      {Object.entries(products).map(([category, items]) => (
                        <div key={category}>
                          {category === "AI Models" ? (
                            <div>
                              <button
                                onClick={() => setIsAiModelsOpen(!isAiModelsOpen)}
                                className="flex items-center justify-between w-full text-sm font-semibold text-white mb-3 hover:text-green-400 px-3 py-2 rounded-lg transition-all duration-300 group"
                              >
                                <span className="flex items-center">
                                  <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                                  {category}
                                </span>
                                <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isAiModelsOpen ? 'rotate-90' : ''}`} />
                              </button>
                              {isAiModelsOpen && (
                                <div className="space-y-1 ml-4 animate-fade-in-up">
                                  {items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block text-sm text-slate-300 hover:text-green-400 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all duration-300"
                                      onClick={() => {
                                        setIsProductsOpen(false)
                                        setIsAiModelsOpen(false)
                                      }}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div>
                              <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                                <Target className="mr-2 h-4 w-4" />
                                {category}
                              </h3>
                              {items.length > 0 && (
                                <div className="space-y-1">
                                  {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                                      className="block text-sm text-slate-300 hover:text-green-400 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all duration-300"
                                      onClick={() => setIsProductsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative" ref={solutionsRef}>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="relative text-white hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    <Target className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Solutions
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 z-50 animate-fade-in-up">
                    <div className="p-6 space-y-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-slate-300 hover:text-green-400 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all duration-300"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative" ref={resourcesRef}>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="relative text-white hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    <Globe className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    Resources
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 z-50 animate-fade-in-up">
                    <div className="p-6 space-y-2">
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-slate-300 hover:text-green-400 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all duration-300"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* FAQs Link */}
              <Link
                href="/#faqs"
                className="relative text-white hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">FAQs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="relative text-white hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              Log in
            </Button>
            </Link>
            <Link href="/signup">
              <Button className="group relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Try for Free
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
            </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-white hover:text-green-400 p-3 rounded-lg hover:bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 group"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" ref={mobileMenuRef}>
            <div className="px-4 pt-4 pb-6 space-y-4 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 rounded-b-2xl shadow-2xl animate-fade-in-up">
              {/* About Link */}
              <Link
                href="/about"
                className="text-white hover:text-green-400 block px-4 py-3 text-base font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Products Menu */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-white px-4 py-2 flex items-center">
                  <Brain className="mr-2 h-4 w-4" />
                  Products
                </h3>
                {Object.entries(products).map(([category, items]) => (
                  <div key={category} className="pl-4">
                    {category === "AI Models" ? (
                      <div>
                        <button
                          onClick={() => setIsAiModelsOpen(!isAiModelsOpen)}
                          className="flex items-center justify-between w-full text-sm font-medium text-slate-300 px-4 py-2 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                        >
                          <span className="flex items-center">
                            <Zap className="mr-2 h-4 w-4" />
                            {category}
                          </span>
                          <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isAiModelsOpen ? 'rotate-90' : ''}`} />
                        </button>
                        {isAiModelsOpen && (
                          <div className="ml-4 space-y-1 animate-fade-in-up">
                            {items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="text-slate-300 hover:text-green-400 block px-4 py-2 text-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setIsAiModelsOpen(false)
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 px-4 py-2 flex items-center">
                          <Target className="mr-2 h-4 w-4" />
                          {category}
                        </h4>
                        {items.length > 0 && (
                          items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="text-slate-300 hover:text-green-400 block px-4 py-2 text-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Solutions Menu */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-white px-4 py-2 flex items-center">
                  <Target className="mr-2 h-4 w-4" />
                  Solutions
                </h3>
                <div className="pl-4">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-slate-300 hover:text-green-400 block px-4 py-2 text-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources Menu */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-white px-4 py-2 flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Resources
                </h3>
                <div className="pl-4">
                  {resources.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                      className="text-slate-300 hover:text-green-400 block px-4 py-2 text-sm rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
                </div>
              </div>

              {/* Mobile FAQs Link */}
              <Link
                href="/#faqs"
                className="text-white hover:text-green-400 block px-4 py-3 text-base font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-white hover:text-green-400 block px-4 py-3 text-base font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 space-y-3">
                <Link href="/login">
                  <Button variant="ghost" className="w-full text-white hover:text-green-400 hover:bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                  Log in
                </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Zap className="mr-2 h-4 w-4" />
                    Try for Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
