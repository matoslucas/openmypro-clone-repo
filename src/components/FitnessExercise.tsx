import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Activity, Users, Trophy, Star, CheckCircle, ArrowRight } from "lucide-react"

const fitnessServices = [
  {
    name: "Personal Training",
    description: "One-on-one fitness coaching",
    icon: Dumbbell,
    color: "orange"
  },
  {
    name: "Group Classes",
    description: "Fitness classes and workouts",
    icon: Users,
    color: "blue"
  },
  {
    name: "Sports Training",
    description: "Athletic performance coaching",
    icon: Trophy,
    color: "green"
  },
  {
    name: "Rehabilitation",
    description: "Physical therapy and recovery",
    icon: Activity,
    color: "purple"
  }
]

export default function FitnessExercise() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <Dumbbell className="h-8 w-8 text-orange-600" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fitness & Exercise: Personal Trainers, Group Classes & Sports Training
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              Achieve your fitness goals with certified personal trainers, group fitness classes, and specialized sports training programs.
            </p>
            <p className="text-lg text-teal-600 font-semibold">
              Book sessions with experienced fitness professionals and transform your health.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-200">800+</div>
              <div className="w-12 h-1 bg-orange-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Fitness Trainers</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">200+</div>
              <div className="w-12 h-1 bg-blue-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Group Classes</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="w-12 h-1 bg-green-600 mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-medium text-gray-600">Sports Programs</div>
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
          {fitnessServices.map((service, index) => (
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
                  Book Session
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Fitness Center */}
        <Card className="bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 group mb-16">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Center Icon */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Center Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 font-medium px-3 py-1">
                    Fitness Center
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 font-medium px-3 py-1">
                    <Star className="mr-1 h-3 w-3" />
                    Certified Trainers
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  FitLife Austin
                </h3>
                <p className="text-lg text-gray-600 mb-4">Premium Fitness Training & Group Classes</p>

                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-green-600">New Member Special</span>
                </div>

                <p className="text-gray-500 text-sm max-w-md">
                  State-of-the-art fitness facility with certified personal trainers, group classes, and specialized sports training programs.
                </p>
              </div>

              {/* Center Stats */}
              <div className="flex-shrink-0 text-center lg:text-right">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>Expert Trainers</span>
                  </div>
                  <div className="flex items-center lg:justify-end space-x-2 text-sm text-gray-500">
                    <Star className="h-4 w-4" />
                    <span>5.0 Rating</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">30+</div>
                  <div className="text-xs text-gray-500">Fitness Programs</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Start Your Fitness Journey Today</h3>
            <p className="text-lg mb-6 opacity-90">
              Connect with certified fitness professionals and achieve your health and wellness goals.
            </p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-lg font-medium">
              Find Fitness Professionals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}