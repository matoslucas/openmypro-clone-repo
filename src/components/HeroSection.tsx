'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Star, QrCode, X, Smartphone } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative gradient-hero overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-blue-200 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-200 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-pink-200 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-balance">
                <span className="text-gray-900 block">Your</span>
                <span className="text-gray-900 block">Wellness</span>
                <span className="text-gray-900 block">Journey</span>
                <span className="text-teal-600 block">Starts Here</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                Connect with top professionals, book appointments instantly, and take charge of your personal care journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started Now
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>

              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="btn-outline text-lg px-8 py-4"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Get App
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md bg-white">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-8 w-8 p-0 hover:bg-gray-100"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>

                    <div className="text-center space-y-6 pt-6">
                      <div className="section-icon bg-teal-100 mx-auto">
                        <Smartphone className="h-8 w-8 text-teal-600" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get the OpenMyPro app</h3>
                        <p className="text-gray-600">Scan the QR code to download the app now</p>
                      </div>

                      <div className="flex justify-center space-x-4">
                        <div className="w-24 h-24 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                          <QrCode className="h-12 w-12 text-gray-400" />
                        </div>
                        <div className="w-24 h-24 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                          <QrCode className="h-12 w-12 text-gray-400" />
                        </div>
                      </div>

                      <p className="text-sm text-gray-500">Or check it out in the app stores</p>

                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
                          <span className="text-sm">App Store</span>
                        </Button>
                        <Button variant="outline" className="flex items-center justify-center space-x-2 h-12">
                          <span className="text-sm">Google Play</span>
                        </Button>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsModalOpen(false)}
                        className="text-gray-500"
                      >
                        Remind me later
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">Verified Pros</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Preview */}
          <div className="relative lg:ml-8">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Healthcare Professional Placeholder */}
                  <div className="text-center space-y-6 relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-gray-900">Healthcare Professionals</div>
                      <div className="text-lg text-gray-600">Ready to serve you instantly</div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Available Now
                      </Badge>
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-teal-400 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 border-2 border-blue-400 rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-4 h-4 border-2 border-purple-400 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-pink-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">15K+</div>
                  <div className="text-xs text-gray-600">Happy Clients</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
