"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Brain,
  BarChart3,
  Shield,
  Zap,
  Sparkles,
  Rocket,
  Star
} from "lucide-react"

interface FormData {
  email: string
  password: string
  rememberMe: boolean
}

interface ValidationErrors {
  [key: string]: string
}

export default function LoginPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberMe: false
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  // Animated Background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2)
      gradient.addColorStop(0, 'rgba(30, 41, 59, 0.8)')
      gradient.addColorStop(0.5, 'rgba(88, 28, 135, 0.6)')
      gradient.addColorStop(1, 'rgba(30, 41, 59, 0.8)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 - distance / 750})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })
      })

      // Draw subtle analytics visualizations
      const time = Date.now() * 0.001
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Animated line chart
      ctx.save()
      ctx.translate(centerX - 200, centerY + 100)
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.3)'
      ctx.lineWidth = 2
      for (let i = 0; i < 8; i++) {
        const x = i * 50
        const y = Math.sin(time + i * 0.5) * 15
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()
      ctx.restore()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Logo animation
  useEffect(() => {
    if (logoRef.current) {
      const logo = logoRef.current
      logo.style.transform = 'rotate(360deg)'
      logo.style.transition = 'transform 2s ease-in-out'
      
      setTimeout(() => {
        logo.style.transform = 'rotate(0deg)'
        logo.style.transition = 'transform 0.5s ease-out'
      }, 2000)
    }
  }, [])

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 text-center border border-slate-700/50 max-w-md w-full">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Welcome Back!</h2>
          <p className="text-slate-300 mb-8">
            You have been successfully logged in to your GAMWIT dashboard.
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg">
            Continue to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Animated Logo */}
        <div className="text-center mb-8">
          <div
            ref={logoRef}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl border border-blue-500/30 mb-6"
          >
            <Rocket className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00ff88] via-[#0099ff] to-[#a259ff] bg-clip-text text-transparent shadow-glow drop-shadow-lg animate-gradient-x">
              GAMWIT
            </span>
      <style jsx>{`
        .shadow-glow {
          text-shadow: 0 0 16px #00ff88, 0 0 8px #0099ff;
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
          </h1>
          <p className="text-slate-300">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-white placeholder-transparent peer transition-all duration-300 ${
                  errors.email ? 'border-red-500' : 'border-slate-600/50 focus:border-blue-500'
                }`}
                placeholder="Email"
              />
              <label className="absolute left-4 top-3 text-slate-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-blue-400 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-xl border rounded-lg text-white placeholder-transparent peer transition-all duration-300 ${
                  errors.password ? 'border-red-500' : 'border-slate-600/50 focus:border-blue-500'
                }`}
                placeholder="Password"
              />
              <label className="absolute left-4 top-3 text-slate-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-blue-400 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-slate-600/50 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-slate-300">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 underline">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </form>

          {/* Signup Link */}
          <div className="text-center mt-6">
            <p className="text-slate-300">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300 underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: Brain, title: "AI-Powered", color: "text-blue-400" },
            { icon: BarChart3, title: "Analytics", color: "text-purple-400" },
            { icon: Shield, title: "Secure", color: "text-green-400" }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className={`h-6 w-6 mx-auto mb-2 ${feature.color}`} />
              <p className="text-xs text-slate-300">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-1000 opacity-75"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping delay-500 opacity-75"></div>
    </div>
  )
} 