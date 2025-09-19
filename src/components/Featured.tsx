import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Heart, TrendingUp, Award, CheckCircle } from "lucide-react"

export default function Featured() {
  return (
    <section className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Icon and Title */}
        <div className="text-center mb-16">
          <div className="section-icon bg-yellow-100 mx-auto">
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-xl text-gray-600">
              Discover highly-rated professionals ready to provide expert care, just a click away!
            </p>
            <p className="text-lg text-teal-600 font-semibold">
              Join thousands of clients who trust our featured network.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="stats-card mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">30+</div>
                <div className="w-12 h-1 bg-blue-600 mx-auto mb-2 rounded-full"></div>
              </div>
              <div className="text-sm font-medium text-gray-600">Featured Pros</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">100+</div>
                <div className="w-12 h-1 bg-green-600 mx-auto mb-2 rounded-full"></div>
              </div>
              <div className="text-sm font-medium text-gray-600">Wellness Experts</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-200">15K+</div>
                <div className="w-12 h-1 bg-purple-600 mx-auto mb-2 rounded-full"></div>
              </div>
              <div className="text-sm font-medium text-gray-600">Clients Served</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-200">98%</div>
                <div className="w-12 h-1 bg-orange-600 mx-auto mb-2 rounded-full"></div>
              </div>
              <div className="text-sm font-medium text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Featured Partner */}
        <Card className="bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Partner Icon */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Partner Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 font-medium px-3 py-1">
                    Featured Partner
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 font-medium px-3 py-1">
                    <Award className="mr-1 h-3 w-3" />
                    Top Rated
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Livestrong
                </h3>
                <p className="text-lg text-gray-600 mb-4">Doctors from Livestrong</p>

                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-600">Active Partner</span>
                </div>

                <p className="text-gray-500 text-sm max-w-md">
                  Trusted healthcare network providing exceptional medical services with verified professionals.
                </p>
              </div>

              {/* Partner Stats */}
              <div className="flex-shrink-0 text-center lg:text-right">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Professional Network</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>Growing Partnership</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">Healthcare Providers</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-primary text-lg px-10 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            See All Featured Centers & Wellness Professionals
          </Button>
        </div>
      </div>
    </section>
  )
}
