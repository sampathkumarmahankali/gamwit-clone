import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Company Info */}
          <div className="space-y-8">
            {/* Logo & Tagline */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-blue-500 rounded flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-white">G</span>
                  <span className="text-2xl font-bold text-green-400">A</span>
                  <span className="text-2xl font-bold text-white">MWIT</span>
                </div>
              </div>
              <p className="text-slate-300 text-lg font-medium">Predict. Personalize. Visualize</p>
              <p className="text-slate-400 max-w-md">
                Advanced AI-powered analytics platform designed specifically for gaming and casino businesses worldwide.
              </p>
            </div>

            {/* Powered By BizAcuity */}
            <div className="pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm">Powered By BizAcuity</p>
            </div>
          </div>

          {/* Right side - Contact & Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-200">Contact Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-slate-300">info@gamwit.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-slate-300">support@gamwit.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-6 border-t border-slate-700">
              <h4 className="font-semibold text-slate-200 mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© 2025 BizAcuity Solutions Pvt. Ltd. All Rights Reserved</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
