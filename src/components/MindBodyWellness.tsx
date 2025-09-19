import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Brain, Leaf, Sparkles, Heart } from "lucide-react"

const wellnessServices = [
  {
    name: "Lotus Healing Center",
    type: "Meditation",
    description: "Mindfulness, meditation, and holistic therapies for body and soul",
    icon: Brain,
    color: "purple"
  },
  {
    name: "Soul Balance Studio",
    type: "Yoga",
    description: "Yoga, breathwork, and energy balancing for holistic wellness",
    icon: Leaf,
    color: "green"
  },
  {
    name: "Radiant Spirit Wellness",
    type: "Spiritual",
    description: "Spiritual guidance, reiki, and alternative therapies",
    icon: Sparkles,
    color: "purple"
  },
  {
    name: "Harmony Mind & Body",
    type: "Mind-Body",
    description: "Integrative mind-body practices for total wellbeing",
    icon: Heart,
    color: "orange"
  }
]

export default function MindBodyWellness() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Icon and Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Brain className="h-8 w-8 text-purple-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mind & Body Wellness: IVs, Therapists & Mental Health Specialists, Holistic, Alternative & Spiritual Experts
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-600">
              Experience transformative healing and balance with Blossend's curated network of holistic and spiritual wellness experts.
            </p>
            <p className="text-teal-600 font-medium">
              Book holistic therapies, meditation, and spiritual guidance for mind and body wellness.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">4+</div>
              <div className="text-sm text-gray-600">Holistic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">30+</div>
              <div className="text-sm text-gray-600">Practitioners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">800+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Wellness Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {wellnessServices.map((service, index) => {
            const IconComponent = service.icon
            const colorClasses = {
              purple: "bg-purple-100 text-purple-600 border-purple-200",
              green: "bg-green-100 text-green-600 border-green-200",
              orange: "bg-orange-100 text-orange-600 border-orange-200"
            }

            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-purple-300">
                <CardContent className="p-6">
                  {/* Service Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className={colorClasses[service.color as keyof typeof colorClasses]}>
                      {service.type}
                    </Badge>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>

                  {/* Service Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Service Info */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center space-x-2 pt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 font-medium">Active Partner</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium">
            See All Holistic & Spiritual Services
          </Button>
        </div>
      </div>
    </section>
  )
}
