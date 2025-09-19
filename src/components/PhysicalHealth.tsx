import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"

export default function PhysicalHealth() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Activity className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Physical Health, Sports Medicine & Rehabilitation
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Expert care for injury prevention, treatment, and recovery with Blossend's network of certified physical health professionals.
          </p>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium">
            See All Physical Health & Rehabilitation Services
          </Button>
        </div>
      </div>
    </section>
  )
}
