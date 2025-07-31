"use client"

import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaGlobe } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,153,255,0.1),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50 delay-500"></div>
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-30 delay-1500"></div>
      
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent opacity-30 animate-pulse"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Section - Company Information & Navigation */}
          <div className="space-y-10">
            {/* Logo and Tagline */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <img
                    src="/gamwit-logo.png"
                    alt="GAMWIT Logo"
                    className="h-14 w-auto filter drop-shadow-[0_0_10px_rgba(0,255,136,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,136,0.8)] transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-logo') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="flex items-center space-x-1 fallback-logo" style={{ display: 'none' }}>
                    <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">G</span>
                    <span className="text-4xl font-bold text-green-400">A</span>
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MWIT</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Predict. Personalize. Visualize
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                  Transforming gaming operations with AI-powered analytics and predictive intelligence.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider text-green-400">Company</h4>
                <div className="space-y-4">
                  <Link href="/about" className="block text-slate-300 hover:text-green-400 transition-all duration-300 text-sm group">
                    <span className="relative">
                      About GAMWIT
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                  <Link href="/contact" className="block text-slate-300 hover:text-green-400 transition-all duration-300 text-sm group">
                    <span className="relative">
                      Contact Us
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                  <Link href="/careers" className="block text-slate-300 hover:text-green-400 transition-all duration-300 text-sm group">
                    <span className="relative">
                      Careers
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider text-blue-400">Resources</h4>
                <div className="space-y-4">
                  <Link href="/resources/blogs" className="block text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm group">
                    <span className="relative">
                      Blogs
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                  <Link href="/documentation" className="block text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm group">
                    <span className="relative">
                      Documentation
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                  <Link href="/support" className="block text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm group">
                    <span className="relative">
                      Support
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider text-purple-400">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-300 hover:text-green-400 transition-all duration-300 group">
                  <div className="relative p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 group-hover:border-green-400/50 group-hover:bg-slate-800/70 transition-all duration-300">
                    <FaTwitter size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-300 hover:text-blue-400 transition-all duration-300 group">
                  <div className="relative p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 group-hover:border-blue-400/50 group-hover:bg-slate-800/70 transition-all duration-300">
                    <FaGithub size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-300 hover:text-purple-400 transition-all duration-300 group">
                  <div className="relative p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 group-hover:border-purple-400/50 group-hover:bg-slate-800/70 transition-all duration-300">
                    <FaLinkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">© 2025 BizAcuity Solutions Pvt. Ltd. All Rights Reserved</p>
            </div>
          </div>

          {/* Right Section - Global Presence */}
          <div className="space-y-10">
            {/* Interactive World Map */}
            <div className="relative">
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src="/map-with-pin.png" 
                    alt="World Map with Location Pins" 
                    className="relative w-full max-w-lg h-auto rounded-3xl shadow-2xl border border-slate-600/50 group-hover:border-green-400/50 transition-all duration-500 group-hover:scale-105 backdrop-blur-sm"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-map') as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="fallback-map bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-16 text-center border border-slate-600/50 shadow-2xl" style={{ display: 'none' }}>
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-pulse">
                      <FaGlobe className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-slate-200 text-xl font-bold mb-2">Global Presence</p>
                    <p className="text-slate-400 text-sm">Worldwide offices and support</p>
                  </div>
                  
                  {/* Animated Location Pins */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75 delay-1000"></div>
                  <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-75 delay-500"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-75 delay-1500"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div className="space-y-8">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Global Offices
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:bg-slate-800/50 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-slate-200 font-semibold group-hover:text-green-400 transition-colors duration-300">Hyderabad</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-slate-800/50 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-slate-200 font-semibold group-hover:text-blue-400 transition-colors duration-300">Bengaluru</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-800/50 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-slate-200 font-semibold group-hover:text-purple-400 transition-colors duration-300">USA</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300 hover:bg-slate-800/50 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-slate-200 font-semibold group-hover:text-orange-400 transition-colors duration-300">Australia</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-6 pt-8 border-t border-slate-700/50">
              <div className="space-y-4">
                <p className="text-slate-300 text-lg font-medium">Ready to transform your gaming operations?</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <Link href="/contact" 
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <FaMapMarkerAlt className="mr-2" />
                    Get in Touch
                  </Link>
                  <Link href="/demo" 
                        className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-slate-600 text-slate-300 font-semibold rounded-full hover:border-green-400 hover:text-green-400 transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

