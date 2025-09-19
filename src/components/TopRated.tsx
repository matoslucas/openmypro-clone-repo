import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

const topRatedPros = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Internal Medicine",
    location: "Austin, TX",
    rating: 5.0,
    reviewCount: 127,
    experience: "15 years",
    verified: true
  },
  {
    name: "Maria Rodriguez",
    specialty: "Physical Therapy",
    location: "Austin, TX",
    rating: 5.0,
    reviewCount: 89,
    experience: "12 years",
    verified: true
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    location: "Austin, TX",
    rating: 5.0,
    reviewCount: 156,
    experience: "18 years",
    verified: true
  },
  {
    name: "Lisa Thompson",
    specialty: "Mental Health Counseling",
    location: "Austin, TX",
    rating: 5.0,
    reviewCount: 203,
    experience: "10 years",
    verified: true
  }
]

export default function TopRated() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
            <Award className="h-8 w-8 text-yellow-600" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Top Rated: Highest-Rated Professionals & Centers
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our highest-rated professionals and wellness centers, recognized for exceptional service and client satisfaction.
            </p>
            <p className="text-lg text-teal-600 font-semibold">
              Book with confidence knowing you're choosing from the best-rated professionals in your area.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-600 mb-2 group-hover:scale-110 transition-transform duration-200">500+</div>
              <div className="w-12 h-1 bg-yellow-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">5-Star Professionals</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-200">50,000+</div>
              <div className="w-12 h-1 bg-orange-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Client Reviews</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-200">98%</div>
              <div className="w-12 h-1 bg-red-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">4.9★</div>
              <div className="w-12 h-1 bg-green-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Top Rated Professionals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {topRatedPros.map((pro, index) => (
            <Card key={index} className="professional-card group">
              <CardContent className="p-6">
                {/* Professional Avatar */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-white text-xl font-bold">
                      {pro.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                      {pro.name}
                    </h3>
                    <p className="text-sm text-gray-600 capitalize">
                      {pro.specialty}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{pro.location}</span>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{pro.rating}</span>
                    <span className="text-xs text-gray-500">({pro.reviewCount})</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 text-xs">
                    <Award className="mr-1 h-3 w-3" />
                    Top Rated
                  </Badge>
                </div>

                {/* Experience */}
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">{pro.experience} experience</span>
                </div>

                {/* Verification */}
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">Verified Professional</span>
                </div>

                {/* Book Button */}
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 group-hover:shadow-lg">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Excellence Center */}
        <Card className="bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Center Icon */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Center Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 font-medium px-3 py-1">
                    Excellence Center
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 font-medium px-3 py-1">
                    <Star className="mr-1 h-3 w-3" />
                    5.0 Rating
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  Premier Wellness Center
                </h3>
                <p className="text-lg text-gray-600 mb-4">Award-Winning Healthcare & Wellness Services</p>

                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-600">Certified Excellence</span>
                </div>

                <p className="text-gray-500 text-sm max-w-md">
                  Recognized for outstanding patient care, innovative treatments, and exceptional service quality across all specialties.
                </p>
              </div>

              {/* Center Stats */}
              <div className="flex-shrink-0 text-center lg:text-right">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Expert Team</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>Growing Reputation</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">1,000+</div>
                  <div className="text-xs text-gray-500">Happy Clients</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Experience Excellence in Care</h3>
            <p className="text-lg mb-6 opacity-90">
              Connect with our highest-rated professionals and experience the difference that excellence makes.
            </p>
            <Button className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-lg font-medium">
              View All Top Rated Professionals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}