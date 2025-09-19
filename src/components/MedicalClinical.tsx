import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Shield, Activity, Users, Star, CheckCircle, ArrowRight } from "lucide-react"

const medicalServices = [
  {
    name: "Clinical Services",
    description: "Medical diagnostics and treatment",
    icon: Stethoscope,
    color: "blue"
  },
  {
    name: "Emergency Care",
    description: "Urgent medical attention",
    icon: Shield,
    color: "red"
  },
  {
    name: "Diagnostic Tests",
    description: "Medical testing and imaging",
    icon: Activity,
    color: "green"
  },
  {
    name: "Specialized Care",
    description: "Advanced medical treatments",
    icon: Users,
    color: "purple"
  }
]

export default function MedicalClinical() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Stethoscope className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Medical & Clinical: Healthcare Professionals & Clinical Services
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              Access comprehensive medical care with licensed healthcare professionals, clinical services, and specialized medical treatments.
            </p>
            <p className="text-lg text-teal-600 font-semibold">
              Book appointments with board-certified physicians and clinical specialists.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">2,000+</div>
              <div className="w-12 h-1 bg-blue-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Medical Doctors</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-200">500+</div>
              <div className="w-12 h-1 bg-red-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Specialists</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">100+</div>
              <div className="w-12 h-1 bg-green-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Clinical Centers</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-200">4.9★</div>
              <div className="w-12 h-1 bg-purple-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {medicalServices.map((service, index) => (
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
                  Schedule Now
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Medical Center */}
        <Card className="bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Center Icon */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Center Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium px-3 py-1">
                    Medical Center
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 font-medium px-3 py-1">
                    <Star className="mr-1 h-3 w-3" />
                    Board Certified
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Austin Medical Center
                </h3>
                <p className="text-lg text-gray-600 mb-4">Comprehensive Medical & Clinical Services</p>

                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-600">Emergency Services Available</span>
                </div>

                <p className="text-gray-500 text-sm max-w-md">
                  Full-service medical facility offering primary care, specialty services, diagnostic testing, and emergency medical care.
                </p>
              </div>

              {/* Center Stats */}
              <div className="flex-shrink-0 text-center lg:text-right">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Expert Physicians</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <Star className="h-4 w-4" />
                    <span>4.9 Rating</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-xs text-gray-500">Medical Specialties</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Access Quality Medical Care</h3>
            <p className="text-lg mb-6 opacity-90">
              Connect with licensed medical professionals and receive the clinical care you need.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-lg font-medium">
              Find Medical Professionals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}