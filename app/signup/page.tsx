"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  ArrowLeft,
  Shield,
  Zap,
  BarChart3,
  Brain,
  Target,
  Users,
  TrendingUp,
  Lock,
  Mail,
  User,
  Phone,
  Building,
  Globe,
  Star,
  Sparkles,
  Rocket
} from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

interface ValidationErrors {
  [key: string]: string
}

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/[a-z]/.test(password)) strength += 25
    if (/[A-Z]/.test(password)) strength += 25
    if (/[0-9]/.test(password)) strength += 25
    return strength
  }

  // Real-time password strength update
  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(formData.password))
  }, [formData.password])

  // 3D Dashboard Animation
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
    }> = []

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(30, 41, 59, 0.8)')
      gradient.addColorStop(1, 'rgba(88, 28, 135, 0.8)')
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
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - distance / 300})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })
      })

      // Draw dashboard mockup
      const time = Date.now() * 0.001
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Animated charts
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(Math.sin(time * 0.5) * 0.1)

      // Chart bars
      for (let i = 0; i < 8; i++) {
        const height = 30 + Math.sin(time + i) * 10
        ctx.fillStyle = `rgba(59, 130, 246, ${0.6 + Math.sin(time + i) * 0.2})`
        ctx.fillRect(i * 40 - 140, -height / 2, 30, height)
      }

      // Line chart
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.8)'
      ctx.lineWidth = 3
      for (let i = 0; i < 10; i++) {
        const x = (i - 5) * 30
        const y = Math.sin(time + i * 0.5) * 20
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

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {}

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
        if (!formData.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email"
        }
        break
      case 2:
        if (!formData.company.trim()) newErrors.company = "Company name is required"
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        break
      case 3:
        if (!formData.password) {
          newErrors.password = "Password is required"
        } else if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters"
        }
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = "Please confirm your password"
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match"
        }
        if (!formData.agreeToTerms) {
          newErrors.agreeToTerms = "You must agree to the terms"
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setIsSuccess(true)
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "text-red-400"
    if (passwordStrength <= 50) return "text-orange-400"
    if (passwordStrength <= 75) return "text-yellow-400"
    return "text-green-400"
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return "Weak"
    if (passwordStrength <= 50) return "Fair"
    if (passwordStrength <= 75) return "Good"
    return "Strong"
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 text-center border border-slate-700/50 max-w-md w-full">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Welcome to GAMWIT!</h2>
          <p className="text-slate-300 mb-8">
            Your account has been created successfully. We've sent a verification email to your inbox.
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Left Side - 3D Dashboard Mockup */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg mb-6">
              <Rocket className="mr-2 h-4 w-4 animate-pulse" />
              Join the Future of Gaming Analytics
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                GAMWIT
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-md">
              Transform your gaming platform with AI-powered analytics and predictive insights
            </p>
          </div>

          {/* Feature Showcase */}
          <div className="grid grid-cols-2 gap-6 max-w-lg">
            {[
              { icon: Brain, title: "AI-Powered", desc: "Advanced machine learning algorithms" },
              { icon: BarChart3, title: "Real-time", desc: "Live analytics and insights" },
              { icon: Shield, title: "Secure", desc: "Enterprise-grade security" },
              { icon: TrendingUp, title: "Scalable", desc: "Grows with your business" }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <feature.icon className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg mb-6">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              Create Your Account
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Join GAMWIT</h2>
            <p className="text-slate-300">Start your analytics journey today</p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                    step < currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : step === currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-white placeholder-transparent peer transition-all duration-300 ${
                        errors.firstName ? 'border-red-500' : 'border-slate-600/50 focus:border-blue-500'
                      }`}
                      placeholder="First Name"
                    />
                    <label className="absolute left-4 top-3 text-slate-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-blue-400 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                      First Name
                    </label>
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-white placeholder-transparent peer transition-all duration-300 ${
                        errors.lastName ? 'border-red-500' : 'border-slate-600/50 focus:border-blue-500'
                      }`}
                      placeholder="Last Name"
                    />
                    <label className="absolute left-4 top-3 text-slate-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-blue-400 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                      Last Name
                    </label>
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
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
                    Email
                  </label>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-white placeholder-transparent peer transition-all duration-300 ${
                      errors.company ? 'border-red-500' : 'border-slate-600/50 focus:border-blue-500'
                    }`}
                    placeholder="Company Name"
                  />
                  <label className="absolute left-4 top-3 text-slate-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-blue-400 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Company Name
                  </label>
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-white placeholder-transparent peer transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-slate-600/50 focus:border-blue-500'
                    }`}
                    placeholder="Phone Number"
                  />
                  <label className="absolute left-4 top-3 text-slate-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-blue-400 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Phone Number
                  </label>
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
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
                  
                  {/* Password Strength Meter */}
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Password strength</span>
                      <span className={getPasswordStrengthColor()}>{getPasswordStrengthText()}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          passwordStrength <= 25 ? 'bg-red-400' :
                          passwordStrength <= 50 ? 'bg-orange-400' :
                          passwordStrength <= 75 ? 'bg-yellow-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${passwordStrength}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-xl border rounded-lg text-white placeholder-transparent peer transition-all duration-300 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-slate-600/50 focus:border-blue-500'
                    }`}
                    placeholder="Confirm Password"
                  />
                  <label className="absolute left-4 top-3 text-slate-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-blue-400 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm">
                    Confirm Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 bg-white/10 border-slate-600/50 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-slate-300">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-red-400 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.agreeToTerms}
                  </p>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button
                  onClick={prevStep}
                  variant="ghost"
                  className="text-slate-300 hover:text-white hover:bg-white/10"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
              )}
              
              {currentStep < 3 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg ml-auto"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg ml-auto disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-slate-300">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400 hover:text-blue-300 underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 