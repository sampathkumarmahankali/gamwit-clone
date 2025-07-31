"use client"

import { useState, useEffect, useRef } from "react"
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Target, BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight, Eye, Download, Share2, Settings } from "lucide-react"

export default function DashboardMockup() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [chartData, setChartData] = useState({
    revenue: [65, 72, 68, 85, 92, 88, 95, 98, 102, 105, 108, 112],
    users: [1200, 1350, 1420, 1580, 1650, 1720, 1800, 1880, 1950, 2020, 2100, 2180],
    conversion: [2.1, 2.3, 2.5, 2.8, 3.1, 3.4, 3.7, 4.0, 4.3, 4.6, 4.9, 5.2]
  })
  const [progressValues, setProgressValues] = useState({
    retention: 78,
    engagement: 92,
    satisfaction: 85,
    performance: 96
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => ({
        revenue: prev.revenue.map(val => val + Math.random() * 10 - 5),
        users: prev.users.map(val => val + Math.random() * 50 - 25),
        conversion: prev.conversion.map(val => val + Math.random() * 0.2 - 0.1)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const metrics = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Active Users",
      value: "45.2K",
      change: "+8.3%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Conversion Rate",
      value: "4.8%",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Avg. Session",
      value: "24m",
      change: "+5.7%",
      trend: "up",
      icon: Activity,
      color: "from-orange-500 to-red-500"
    }
  ]

  const chartTabs = [
    { name: "Revenue", icon: TrendingUp },
    { name: "Users", icon: Users },
    { name: "Conversion", icon: Target }
  ]

  const generateChartPath = (data: number[], width: number, height: number) => {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min || 1
    
    return data.map((value, index) => {
      const x = (index / (data.length - 1)) * width
      const y = height - ((value - min) / range) * height
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ')
  }

  const getChartData = () => {
    switch (activeTab) {
      case 0: return chartData.revenue
      case 1: return chartData.users
      case 2: return chartData.conversion
      default: return chartData.revenue
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium shadow-lg">
            <BarChart3 className="mr-2 h-4 w-4 animate-pulse" />
            Live Analytics
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Interactive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-time insights with animated charts and interactive data visualization
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Key Metrics */}
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredMetric(index)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]`}>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl`}></div>
              </div>

              {/* Background Pattern */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${metric.color.replace('500', '500/10')} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <metric.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    <span>{metric.change}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-slate-300 text-sm font-medium mb-1">{metric.title}</h3>
                  <p className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </p>
                </div>

                {/* Floating Tooltip */}
                {hoveredMetric === index && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-slate-800/95 backdrop-blur-xl px-3 py-2 rounded-lg border border-slate-700/50 text-xs text-slate-300 shadow-2xl animate-fade-in-up">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                      <span>Live data updating</span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-slate-800/95 rotate-45 border-r border-b border-slate-700/50"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-[2px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl"></div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Performance Analytics</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300">
                    <Eye className="h-4 w-4 text-slate-300" />
                  </button>
                  <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300">
                    <Download className="h-4 w-4 text-slate-300" />
                  </button>
                  <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300">
                    <Share2 className="h-4 w-4 text-slate-300" />
                  </button>
                </div>
              </div>

              {/* Chart Tabs */}
              <div className="flex space-x-2 mb-6">
                {chartTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.name}</span>
                  </button>
                ))}
              </div>

              {/* Animated Chart */}
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 400 160">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <g className="text-slate-600">
                    {[0, 1, 2, 3, 4].map(i => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 40}
                        x2="400"
                        y2={i * 40}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    ))}
                  </g>

                  {/* Chart Area */}
                  <path
                    d={generateChartPath(getChartData(), 400, 160)}
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="3"
                    className="animate-pulse"
                  />

                  {/* Data Points */}
                  {getChartData().map((value, index) => {
                    const x = (index / (getChartData().length - 1)) * 400
                    const max = Math.max(...getChartData())
                    const min = Math.min(...getChartData())
                    const range = max - min || 1
                    const y = 160 - ((value - min) / range) * 160
                    
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#3b82f6"
                        className="hover:r-6 transition-all duration-300 cursor-pointer"
                      />
                    )
                  })}
                </svg>

                {/* Floating Tooltip */}
                <div className="absolute top-4 right-4 bg-slate-800/95 backdrop-blur-xl px-3 py-2 rounded-lg border border-slate-700/50 text-xs text-slate-300 shadow-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                    <span>Real-time updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Metrics */}
          <div className="space-y-6">
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4">Key Metrics</h3>
                
                <div className="space-y-4">
                  {Object.entries(progressValues).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300 capitalize">{key}</span>
                        <span className="text-sm font-medium text-white">{value}%</span>
                      </div>
                      <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 group/btn">
                    <span className="text-sm text-slate-300 group-hover/btn:text-white transition-colors">Export Report</span>
                    <Download className="h-4 w-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 group/btn">
                    <span className="text-sm text-slate-300 group-hover/btn:text-white transition-colors">Share Dashboard</span>
                    <Share2 className="h-4 w-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 group/btn">
                    <span className="text-sm text-slate-300 group-hover/btn:text-white transition-colors">Settings</span>
                    <Settings className="h-4 w-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-4">Traffic Sources</h3>
              
              <div className="flex items-center justify-center h-48">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="75.36"
                      className="animate-pulse"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="125.6"
                      className="animate-pulse delay-500"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="200.96"
                      className="animate-pulse delay-1000"
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">85%</div>
                      <div className="text-xs text-slate-300">Total</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-slate-300">Direct</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-xs text-slate-300">Organic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-slate-300">Referral</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
              
              <div className="space-y-4">
                {[
                  { action: "New user registered", time: "2 min ago", type: "success" },
                  { action: "Payment processed", time: "5 min ago", type: "info" },
                  { action: "Report generated", time: "8 min ago", type: "warning" },
                  { action: "System backup", time: "12 min ago", type: "success" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer group/item">
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === 'success' ? 'bg-green-400' :
                      item.type === 'info' ? 'bg-blue-400' :
                      item.type === 'warning' ? 'bg-orange-400' : 'bg-slate-400'
                    } animate-pulse`}></div>
                    <div className="flex-1">
                      <div className="text-sm text-white group-hover/item:text-slate-100 transition-colors">{item.action}</div>
                      <div className="text-xs text-slate-400">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 