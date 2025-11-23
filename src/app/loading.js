'use client'

import { useEffect, useState } from 'react'

export default function DotsLoading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 300)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="flex flex-col items-center justify-center gap-8 h-full min-h-screen bg-white"
      role="status"
      aria-live="polite"
      aria-label="Loading application"
      aria-busy="true"
    >
      {/* Main Loading Container */}
      <div className="text-center space-y-8">
        
        {/* Animated Logo/Icon */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-blue-100 animate-float">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 w-16 h-16 border-2 border-blue-200 rounded-2xl animate-ping-ring mx-auto"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Tax & Trade Solutions
          </h1>
          <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
            Streamlining your tax compliance and international trade operations
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-bounce-smooth shadow-md"
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 font-medium">
            {Math.min(100, Math.round(progress))}% Complete
          </p>
        </div>

        {/* Status Messages */}
        <div className="text-sm text-gray-500 space-y-1">
          <p className="animate-pulse">Initializing secure connection...</p>
          <p className="text-xs text-gray-400">This may take a few moments</p>
        </div>
      </div>

      {/* Accessibility */}
      <span className="sr-only">
        Tax & Trade Solutions is loading. Current progress: {Math.min(100, Math.round(progress))} percent.
        Please wait while we prepare your secure dashboard.
      </span>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes ping-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes bounce-smooth {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-ping-ring {
          animation: ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-bounce-smooth {
          animation: bounce-smooth 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}