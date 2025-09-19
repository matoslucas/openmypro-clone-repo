import { Button } from "@/components/ui/button"
import { Smartphone, MessageCircle, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                alt="OpenMyPro Logo"
                width="40"
                height="40"
                className="rounded-lg"
                src="/assets/images/OMDLogo.png"
              />
              <div>
                <h3 className="text-xl font-bold text-white">OpenMyPro</h3>
                <p className="text-sm text-gray-400">by Blossend</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-white">About:</strong> OpenMyPro app by Blossend is a teleservices platform offering streamlined, optimized, & automated Pro-To-Consumer real-time, 24/7 online scheduling — redefining how professionals & consumers connect to make their services more accessible & efficient.
              </p>

              <p className="text-sm text-gray-300">
                Our solution ensures a seamless, accurate, & personalized discovery & booking experience — enabling anyone to effortlessly find & book the right appointment in under 3 clicks & 33 seconds, worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Download Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Download</h3>
            <div className="space-y-4">
              <a href="https://apps.apple.com/us/app/open-my-doctor-doctor-finder/id6737090324" target="_blank" rel="noopener noreferrer">
                <img
                  alt="Download on the App Store"
                  width="150"
                  height="50"
                  className="hover:opacity-80 transition-opacity"
                  src="/assets/images/appstore.png"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.blossend.omd" target="_blank" rel="noopener noreferrer">
                <img
                  alt="Get it on Google Play"
                  width="150"
                  height="50"
                  className="hover:opacity-80 transition-opacity"
                  src="/assets/images/googleplay.png"
                />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Useful Links</h3>
            <div className="space-y-3">
              <a href="https://www.openmypro.com/help" className="block text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                Help & Support
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a href="https://www.openmypro.com/settings" className="block text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                Settings
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a href="https://www.blossend.com/about" className="block text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                About Blossend
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a href="https://www.openmypro.com/privacy" className="block text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                Privacy Policy
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a href="https://www.openmypro.com/Terms&Conditions" className="block text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                Terms of Service
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">Austin, TX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">support@blossend.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-white">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>Copyright © 2024 Blossend. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <a href="https://www.openmypro.com/Terms&Conditions" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="https://www.openmypro.com/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-400">
              <p>Powered by AI/ML precision for intelligent teleservices access</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}