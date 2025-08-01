"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-br from-[#0a0f1c] via-[#1a223a] to-[#0a0f1c] text-white overflow-hidden">
      {/* Animated floating particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 w-32 h-32 bg-[#00ff88]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-40 h-40 bg-[#0099ff]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute left-1/2 top-1/2 w-24 h-24 bg-[#a259ff]/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Branding & Navigation */}
          <div className="space-y-10 flex flex-col justify-between">
            {/* Logo & Tagline */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src="/gamwit-logo.png"
                  alt="GAMWIT Logo"
                  className="h-14 w-auto drop-shadow-lg select-none shadow-glow"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-logo') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <span className="fallback-logo hidden text-4xl font-extrabold bg-gradient-to-r from-[#00ff88] via-[#0099ff] to-[#a259ff] bg-clip-text text-transparent tracking-tight select-none shadow-glow">
                  GAMWIT
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold bg-gradient-to-r from-[#00ff88] via-[#0099ff] to-[#a259ff] bg-clip-text text-transparent animate-gradient-x">Predict. Personalize. Visualize</p>
                <p className="text-slate-300 text-sm max-w-xs">Transforming gaming operations with AI-powered analytics and predictive intelligence.</p>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter" className="group">
                <svg className="w-6 h-6 text-[#0099ff] group-hover:text-[#00ff88] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082 4.48 4.48 0 00-7.635 4.085A12.72 12.72 0 013.11 4.86a4.48 4.48 0 001.388 5.976 4.44 4.44 0 01-2.03-.561v.057a4.48 4.48 0 003.594 4.393 4.5 4.5 0 01-2.025.077 4.48 4.48 0 004.184 3.11A8.98 8.98 0 012 19.54a12.67 12.67 0 006.88 2.018c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.1 9.1 0 0024 4.59a8.94 8.94 0 01-2.54.697z" /></svg>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub" className="group">
                <svg className="w-6 h-6 text-[#00ff88] group-hover:text-[#0099ff] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.42-.012 2.75 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className="group">
                <svg className="w-6 h-6 text-[#a259ff] group-hover:text-[#00ff88] transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" /></svg>
              </a>
            </div>
            {/* Copyright */}
            <div className="pt-8 border-t border-slate-800/60">
              <p className="text-slate-400 text-xs">© 2025 BizAcuity Solutions Pvt. Ltd. All Rights Reserved</p>
            </div>
          </div>
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 glassmorphism rounded-2xl p-8 shadow-xl border border-slate-800/60 backdrop-blur-md bg-white/5">
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h4>
              <div className="space-y-3">
                <Link href="/about" className="block text-slate-300 hover:text-[#00ff88] transition-colors duration-200 text-sm font-medium">About GAMWIT</Link>
                <Link href="/contact" className="block text-slate-300 hover:text-[#00ff88] transition-colors duration-200 text-sm font-medium">Contact Us</Link>
                <Link href="/careers" className="block text-slate-300 hover:text-[#00ff88] transition-colors duration-200 text-sm font-medium">Careers</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Resources</h4>
              <div className="space-y-3">
                <Link href="/resources/blogs" className="block text-slate-300 hover:text-[#0099ff] transition-colors duration-200 text-sm font-medium">Blogs</Link>
                <Link href="/documentation" className="block text-slate-300 hover:text-[#0099ff] transition-colors duration-200 text-sm font-medium">Documentation</Link>
                <Link href="/support" className="block text-slate-300 hover:text-[#0099ff] transition-colors duration-200 text-sm font-medium">Support</Link>
              </div>
            </div>
          </div>
          {/* Global Offices & Map */}
          <div className="flex flex-col items-center space-y-8">
            {/* Interactive Map */}
            <div className="relative w-full max-w-xs mx-auto">
              <img
                src="/map-with-pin.png"
                alt="World Map with Location Pins"
                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-slate-700/80 glassmorphism group-hover:border-[#00ff88] transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.fallback-map') as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="fallback-map bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-center border-2 border-slate-700 shadow-2xl absolute inset-0 flex flex-col items-center justify-center" style={{ display: 'none' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-lg font-medium">Global Presence</p>
                <p className="text-slate-400 text-sm mt-2">Worldwide offices and support</p>
              </div>
            </div>
            {/* Office Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="glassmorphism rounded-xl p-4 border border-slate-700/80 hover:border-[#00ff88] transition-all duration-300 hover:bg-white/10 flex items-center space-x-3">
                <span className="w-3 h-3 bg-[#00ff88] rounded-full shadow-glow" />
                <span className="text-slate-200 font-medium">Hyderabad</span>
              </div>
              <div className="glassmorphism rounded-xl p-4 border border-slate-700/80 hover:border-[#0099ff] transition-all duration-300 hover:bg-white/10 flex items-center space-x-3">
                <span className="w-3 h-3 bg-[#0099ff] rounded-full shadow-glow" />
                <span className="text-slate-200 font-medium">Bengaluru</span>
              </div>
              <div className="glassmorphism rounded-xl p-4 border border-slate-700/80 hover:border-[#a259ff] transition-all duration-300 hover:bg-white/10 flex items-center space-x-3">
                <span className="w-3 h-3 bg-[#a259ff] rounded-full shadow-glow" />
                <span className="text-slate-200 font-medium">USA</span>
              </div>
              <div className="glassmorphism rounded-xl p-4 border border-slate-700/80 hover:border-[#ffb300] transition-all duration-300 hover:bg-white/10 flex items-center space-x-3">
                <span className="w-3 h-3 bg-[#ffb300] rounded-full shadow-glow" />
                <span className="text-slate-200 font-medium">Australia</span>
              </div>
            </div>
            {/* Call to Action */}
            <div className="text-center space-y-4 pt-6 w-full">
              <p className="text-slate-300 text-sm">Ready to transform your gaming operations?</p>
              <div className="flex justify-center space-x-4">
                <Link href="/contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00ff88] to-[#0099ff] text-slate-900 font-bold shadow-lg hover:from-[#0099ff] hover:to-[#00ff88] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00ff88] animate-shimmer">Get in Touch</Link>
                <Link href="/demo" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0099ff] to-[#a259ff] text-white font-bold shadow-lg hover:from-[#a259ff] hover:to-[#0099ff] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0099ff] animate-shimmer">Request Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom styles for glassmorphism, glow, shimmer, and gradient animation */}
      <style jsx>{`
        .glassmorphism {
          background: rgba(24, 32, 54, 0.35);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #00ff88) drop-shadow(0 0 2px #0099ff);
        }
        .shadow-glow {
          box-shadow: 0 0 8px 2px #00ff88, 0 0 2px #0099ff;
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: left center; }
          50% { background-position: right center; }
        }
      `}</style>
    </footer>
  )
}

