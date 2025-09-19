'use client'

import { useState, useEffect } from "react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="max-h-[30rem] w-full" style={{backgroundImage: 'radial-gradient(140% 70% at 50% -20%, rgb(169, 232, 229), transparent)'}} aria-hidden="true" inert="">
        <div className="flex items-center justify-center min-h-screen container min-w-full -mt-20">
          <svg 
            x="0px" 
            y="0px" 
            viewBox="0 0 50 31.25" 
            height="31.25" 
            width="50" 
            preserveAspectRatio="xMidYMid meet" 
            className="container"
          >
            <path 
              strokeWidth="2" 
              fill="none" 
              pathLength="100" 
              d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" 
              className="track stroke-gray-300"
            />
            <path 
              strokeWidth="2" 
              fill="none" 
              pathLength="100" 
              d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25" 
              className="car stroke-teal-600 animate-pulse"
              style={{
                strokeDasharray: '100',
                strokeDashoffset: '100',
                animation: 'drawPath 2s ease-in-out forwards'
              }}
            />
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  )
}
