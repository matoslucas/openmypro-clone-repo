import { Button } from "@/components/ui/button"
import { Stethoscope } from "lucide-react"

export default function MedicalClinical() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Stethoscope className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Medical & Clinical Services: Healthcare Facilities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trusted healthcare networks and institutions collaborating with Blossend to provide exceptional care.
          </p>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium">
            See All Partner Organizations & Health Networks
          </Button>
        </div>
      </div>
    </section>
  )
}
