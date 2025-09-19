import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Plus, Users, Clock, TrendingUp } from "lucide-react"

const specialties = [
  {
    name: "Spine/Bone",
    description: "Orthopedic specialists for bone, joint, and spine care",
    icon: "🦴",
    count: "150+ Specialists",
    color: "orange"
  },
  {
    name: "Oral",
    description: "Dental and oral health professionals",
    icon: "🦷",
    count: "200+ Specialists",
    color: "blue"
  },
  {
    name: "Skin",
    description: "Dermatology and skin care experts",
    icon: "🌸",
    count: "120+ Specialists",
    color: "pink"
  },
  {
    name: "Natural",
    description: "Holistic and naturopathic medicine",
    icon: "🌿",
    count: "80+ Specialists",
    color: "green"
  },
  {
    name: "Internal",
    description: "Internal medicine and primary care",
    icon: "🫀",
    count: "300+ Specialists",
    color: "purple"
  },
  {
    name: "Mental Health",
    description: "Psychology and psychiatric care",
    icon: "🧠",
    count: "110+ Specialists",
    color: "yellow"
  },
  {
    name: "Women's Health",
    description: "Specialized care for women's health needs",
    icon: "👩‍⚕️",
    count: "85+ Specialists",
    color: "pink"
  },
  {
    name: "Cardiovascular",
    description: "Heart and vascular system specialists",
    icon: "❤️",
    count: "95+ Specialists",
    color: "red"
  }
]

export default function SearchSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Can't Find Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Can't find your <span className="text-teal-600">Pro or Wellness Center</span> in our directory?
            </h2>

            <p className="text-gray-600 text-lg">
              Help us grow our network by adding your trusted professional. We'll verify their credentials and make them available to our community.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Quick verification process
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Credential verification included
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Available to community within 48 hours
              </li>
            </ul>

            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium">
              <Plus className="mr-2 h-5 w-5" />
              Add my Pro or Wellness Center
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-500">Pros Added</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-500">Avg. Approval</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Search */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Pro or Wellness Center Not Found?
                </h3>
                <p className="text-gray-600">
                  Can't find your professional? Help us grow our network by adding your trusted health, wellness, or lifestyle professional.
                </p>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Searching ..."
                  className="pl-10 pr-4 py-3 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium">
                <Plus className="mr-2 h-5 w-5" />
                Click to add Pro or Wellness Center
              </Button>
            </div>
          </div>
        </div>

        {/* Find by Specialty Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find a <span className="text-teal-600">Wellness Pro</span> by specialty
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connect with world-class specialists across health, wellness, and lifestyle services. Our curated network ensures you receive exceptional care from highly qualified professionals.
          </p>
        </div>

        {/* Specialty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-200 hover:border-teal-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {specialty.description}
                </p>
                <div className="flex items-center justify-center text-sm font-medium text-teal-600">
                  <Users className="h-4 w-4 mr-1" />
                  {specialty.count}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
