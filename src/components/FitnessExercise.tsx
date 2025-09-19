import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export default function FitnessExercise() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Dumbbell className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fitness & Exercise: Nutrition Coaches, Personal Trainers, Gyms
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Unlock your full potential with Blossend's exclusive network of fitness, sports medicine, and wellness experts.
          </p>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium">
            See All Fitness & Sports Medicine Services
          </Button>
        </div>
      </div>
    </section>
  )
}
