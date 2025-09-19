import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function BeautyAesthetics() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Beauty & Aesthetics: Nail Salons, Dental, Hair & Skin Care
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover premium nail salons, cosmetics, hair care, and facial services through OpenMyPro's trusted beauty network.
          </p>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-medium">
            See All Beauty & Aesthetics Services
          </Button>
        </div>
      </div>
    </section>
  )
}
