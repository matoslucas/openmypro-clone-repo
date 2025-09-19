'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, User, Heart, Clock, Star, Bell, ChevronDown, Stethoscope, Brain, Dumbbell, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWellnessMenuOpen, setIsWellnessMenuOpen] = useState(false)
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  Open<span className="text-teal-600">MyPro</span>
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <DropdownMenu onOpenChange={setIsWellnessMenuOpen}>
                <DropdownMenuTrigger className="dropdown-trigger flex items-center text-gray-700 hover:text-teal-600 bg-transparent border-0 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Wellness Pro
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isWellnessMenuOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dropdown-content w-64 mt-1">
                  <DropdownMenuItem className="dropdown-item flex items-center group">
                    <div className="dropdown-item-icon w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                      <Heart className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <div className="font-medium">Mental Health</div>
                      <div className="text-xs text-gray-500">Therapy & counseling</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dropdown-item flex items-center group">
                    <div className="dropdown-item-icon w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                      <Stethoscope className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Physical Therapy</div>
                      <div className="text-xs text-gray-500">Recovery & rehabilitation</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dropdown-item flex items-center group">
                    <div className="dropdown-item-icon w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                      <Star className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Nutrition</div>
                      <div className="text-xs text-gray-500">Diet & wellness coaching</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dropdown-item flex items-center group">
                    <div className="dropdown-item-icon w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium">Beauty Services</div>
                      <div className="text-xs text-gray-500">Spa & aesthetic treatments</div>
                    </div>
                  </DropdownMenuItem>
                  <div className="border-t border-gray-100 my-2"></div>
                  <DropdownMenuItem className="dropdown-item flex items-center group">
                    <div className="dropdown-item-icon w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors">
                      <Dumbbell className="h-4 w-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-medium">View All Services</div>
                      <div className="text-xs text-gray-500">Explore all wellness categories</div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search Pro Name"
                className="pl-10 pr-4 py-2.5 w-full border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Company Menu */}
          <DropdownMenu onOpenChange={setIsCompanyMenuOpen}>
            <DropdownMenuTrigger className="dropdown-trigger flex items-center text-gray-700 hover:text-teal-600 bg-transparent border-0 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Company
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isCompanyMenuOpen ? 'rotate-180' : ''}`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dropdown-content w-48 mt-1">
              <DropdownMenuItem className="dropdown-item flex items-center group">
                <div className="dropdown-item-icon w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">About</div>
                  <div className="text-xs text-gray-500">Our story & mission</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="dropdown-item flex items-center group">
                <div className="dropdown-item-icon w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">Privacy Policy</div>
                  <div className="text-xs text-gray-500">Your data protection</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="dropdown-item flex items-center group">
                <div className="dropdown-item-icon w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                  <Star className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">Terms of Service</div>
                  <div className="text-xs text-gray-500">Legal terms & conditions</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="btn-outline">
              Sign In
            </Button>
            <Button size="sm" className="btn-primary">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Status Banner */}
      <div className="bg-gradient-to-r from-teal-50 to-green-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center text-sm text-teal-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <Bell className="h-4 w-4 mr-2" />
              <span className="font-medium">Wellness Pros Available Now</span>
              <Badge className="ml-3 bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                Live
              </Badge>
            </div>
            <Button variant="ghost" size="sm" className="text-teal-700 hover:text-teal-900 hover:bg-teal-100">
              ×
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50">
                <Heart className="mr-3 h-4 w-4" />
                Wellness Pro
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50">
                <User className="mr-3 h-4 w-4" />
                Company
              </Button>
            </div>
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <Button variant="outline" className="w-full btn-outline">
                Sign In
              </Button>
              <Button className="w-full btn-primary">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
