import { Button } from "@/components/ui/button"
import { Smartphone, MessageCircle, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>About:</strong> OpenMyPro app by Blossend is a teleservices platform offering streamlined, optimized, & automated Pro-To-Consumer real-time, 24/7 online scheduling — redefining how professionals & consumers connect to make their services more accessible & efficient. Our solution ensures a seamless, accurate, & personalized discovery & booking experience — enabling anyone to effortlessly find & book the right appointment in under 3 clicks & 33 seconds, worldwide.
              </p>

              <p className="text-sm text-gray-600">
                Powered by AI/ML precision, we address the urgent need for instant, intelligent teleservices access. We empower solo skilled pros & businesses with exposure, client acquisition, & streamlined operations — reducing customer leakage, no-shows, administrative overhead, & automating workflows, while solving everyday Pro-to-Consumer challenges & boosting their solo or large business centers.
              </p>
            </div>
          </div>

          {/* Download Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Download</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Smartphone className="mr-2 h-4 w-4" />
                Download on the App Store
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Smartphone className="mr-2 h-4 w-4" />
                Get it on Google Play
              </Button>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Useful Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 hover:text-teal-600 transition-colors">
                Help & Support
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-teal-600 transition-colors">
                Settings
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Blossend</p>
              <p className="text-sm text-gray-600">Austin, TX</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Copyright © 2024 Blossend. All rights reserved.</span>
              <a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-600">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-600">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-teal-600">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
