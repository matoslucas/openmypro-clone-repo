import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Zap, Users, Star, CheckCircle, ArrowRight } from "lucide-react"

const wellnessServices = [
  {
    name: "IV Therapy",
    description: "Hydration and nutrient therapy",
    icon: Heart,
    color: "teal"
  },
  {
    name: "Mental Health",
    description: "Therapists and counselors",
    icon: Brain,
    color: "purple"
  },
  {
    name: "Holistic Healing",
    description: "Alternative medicine",
    icon: Zap,
    color: "green"
  },
  {
    name: "Spiritual Guidance",
    description: "Meditation and mindfulness",
    icon: Heart,
    color: "blue"
  }
]

export default function MindBodyWellness() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <Brain className="h-8 w-8 text-purple-600" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mind & Body Wellness: IVs, Therapists & Mental Health Specialists, Holistic, Alternative & Spiritual Experts
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience transformative healing and balance with OpenMyPro's curated network of holistic and spiritual wellness experts.
            </p>
            <p className="text-lg text-teal-600 font-semibold">
              Book holistic therapies, meditation, and spiritual guidance for mind and body wellness.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-200">500+</div>
              <div className="w-12 h-1 bg-purple-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Wellness Experts</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-200">50+</div>
              <div className="w-12 h-1 bg-teal-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">IV Therapists</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">200+</div>
              <div className="w-12 h-1 bg-blue-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Mental Health Pros</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">4.9★</div>
              <div className="w-12 h-1 bg-green-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {wellnessServices.map((service, index) => (
            <Card key={index} className="professional-card group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <Badge className={`bg-${service.color}-100 text-${service.color}-700 hover:bg-${service.color}-100`}>
                  Available Now
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Wellness Center */}
        <Card className="bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Center Icon */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Center Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 font-medium px-3 py-1">
                    Featured Center
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 font-medium px-3 py-1">
                    <Star className="mr-1 h-3 w-3" />
                    Top Rated
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Wellness Hub Austin
                </h3>
                <p className="text-lg text-gray-600 mb-4">Holistic Wellness & Mental Health Center</p>

                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-600">Accepting New Clients</span>
                </div>

                <p className="text-gray-500 text-sm max-w-md">
                  Comprehensive wellness services including IV therapy, mental health counseling, and holistic healing treatments.
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
                    <Star className="h-4 w-4" />
                    <span>5.0 Rating</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-xs text-gray-500">Wellness Services</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Wellness Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Connect with certified wellness professionals and begin your path to better health today.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-lg font-medium">
              Explore Wellness Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}