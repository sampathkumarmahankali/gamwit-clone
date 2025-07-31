"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isAiModelsOpen, setIsAiModelsOpen] = useState(false)
  
  const productsRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close products dropdown
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
        setIsAiModelsOpen(false)
      }
      
      // Close solutions dropdown
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false)
      }
      
      // Close resources dropdown
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false)
      }
      
      // Close mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
        setIsAiModelsOpen(false)
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside)
    
    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-slate-700 text-white shadow-sm border-b border-slate-700">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/gamwit-logo.png" 
                alt="GAMWIT Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* About Link */}
              <Link
                href="/about"
                className="text-white hover:text-slate-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-700 rounded-md"
              >
                About
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="text-white hover:text-slate-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-700 rounded-md"
                >
                  <span>Products</span>
                </button>
                
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                    <div className="p-4 space-y-4">
                      {Object.entries(products).map(([category, items]) => (
                        <div key={category}>
                          {category === "AI Models" ? (
                            <div>
                              <button
                                onClick={() => setIsAiModelsOpen(!isAiModelsOpen)}
                                className="flex items-center justify-between w-full text-sm font-semibold text-slate-900 mb-2 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
                              >
                                <span>{category}</span>
                                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isAiModelsOpen ? 'rotate-90' : ''}`} />
                              </button>
                              {isAiModelsOpen && (
                                <div className="space-y-1 ml-4">
                                  {items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
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
                              <h3 className="text-sm font-semibold text-slate-900 mb-2">{category}</h3>
                              {items.length > 0 && (
                                <div className="space-y-1">
                                  {items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
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
                  className="text-white hover:text-slate-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-700 rounded-md"
                >
                  <span>Solutions</span>
                </button>
                
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                    <div className="p-4 space-y-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
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
                  className="text-white hover:text-slate-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-700 rounded-md"
                >
                  <span>Resources</span>
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 z-50">
                    <div className="p-4 space-y-2">
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-md transition-colors"
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
                className="text-white hover:text-slate-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-700 rounded-md"
              >
                FAQs
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-white hover:text-slate-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-700 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-slate-200 hover:bg-slate-700">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                Try for Free
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-slate-200 p-2 rounded-md hover:bg-slate-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" ref={mobileMenuRef}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-700 bg-slate-700">
              {/* About Link */}
              <Link
                href="/about"
                className="text-white hover:text-slate-200 block px-3 py-2 text-base font-medium rounded-md hover:bg-slate-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Products Menu */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-white px-3 py-2">Products</h3>
                {Object.entries(products).map(([category, items]) => (
                  <div key={category} className="pl-4">
                    {category === "AI Models" ? (
                      <div>
                        <button
                          onClick={() => setIsAiModelsOpen(!isAiModelsOpen)}
                          className="flex items-center justify-between w-full text-xs font-medium text-slate-300 px-3 py-1 hover:bg-slate-600 rounded-md transition-colors"
                        >
                          <span>{category}</span>
                          <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isAiModelsOpen ? 'rotate-90' : ''}`} />
                        </button>
                        {isAiModelsOpen && (
                          <div className="ml-4">
                            {items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-slate-200 block px-3 py-2 text-sm rounded-md hover:bg-slate-600 transition-colors"
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
                        <h4 className="text-xs font-medium text-slate-300 px-3 py-1">{category}</h4>
                        {items.length > 0 && (
                          items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="text-white hover:text-slate-200 block px-3 py-2 text-sm rounded-md hover:bg-slate-600 transition-colors"
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
                <h3 className="text-sm font-semibold text-white px-3 py-2">Solutions</h3>
                <div className="pl-4">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-slate-200 block px-3 py-2 text-sm rounded-md hover:bg-slate-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources Menu */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-white px-3 py-2">Resources</h3>
                <div className="pl-4">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-slate-200 block px-3 py-2 text-sm rounded-md hover:bg-slate-600 transition-colors"
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
                className="text-white hover:text-slate-200 block px-3 py-2 text-base font-medium rounded-md hover:bg-slate-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="text-white hover:text-slate-200 block px-3 py-2 text-base font-medium rounded-md hover:bg-slate-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 space-y-2">
                <Link href="/login">
                  <Button variant="ghost" className="w-full text-white hover:text-slate-200 hover:bg-slate-600">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">Try for Free</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
