'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Clock, Star, Users, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchCategory, setSearchCategory] = useState("wellness-pro")

  return (
    <section className="relative gradient-hero overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Pro
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Book trusted health, wellness, and beauty professionals instantly. 
            From medical appointments to spa treatments, we connect you with the best.
          </p>

          {/* Search Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
              <div className="flex flex-col md:flex-row gap-2">
                {/* Category Dropdown */}
                <div className="relative">
                  <select 
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="bg-white border-r border-gray-200 px-4 py-3 rounded-l-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="wellness-pro">Wellness Pro</option>
                    <option value="symptoms">Symptoms</option>
                    <option value="speciality">Speciality</option>
                    <option value="location">Location</option>
                  </select>
                </div>

                {/* Search Input */}
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Pro Name"
                    className="w-full px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none"
                  />
                </div>

                {/* Search Button */}
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-r-xl font-medium">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-600">Verified Pros</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Booking</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9★</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-sm font-medium">Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-sm font-medium">Instant Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-sm font-medium">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-teal-300 rounded-full opacity-30 animate-bounce"></div>
    </section>
  )
}