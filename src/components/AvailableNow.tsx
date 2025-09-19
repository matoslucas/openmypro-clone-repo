import { Button } from "@/components/ui/button"
import ProfessionalCard from "./ProfessionalCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const availablePros = [
  {
    name: "Maasai Musurpei",
    specialty: "nutrition",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 1,
    available: true
  },
  {
    name: "Jackline Mwangi",
    specialty: "nurse practitioner",
    location: "NYERI, NYERI COUNTY",
    price: "$0.00",
    rating: 0.0,
    reviewCount: 0,
    available: true
  },
  {
    name: "Alyssa Cappelletti",
    specialty: "chiropractic",
    location: "AUSTIN, TX",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 2,
    available: true
  },
  {
    name: "Tom Darilek",
    specialty: "non-physician wellness specialist",
    location: "AUSTIN, TX",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 1,
    available: true
  },
  {
    name: "Mihael Rosano",
    specialty: "internal medicine",
    location: "TLALPAN, CDMX",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 1,
    available: true
  },
  {
    name: "Rehan Shah",
    specialty: "addiction medicine",
    location: "NY",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 1,
    available: true
  }
]

export default function AvailableNow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="text-teal-600">Available Now</span>
            </h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-600">Live</span>
            </div>
          </div>
          <Button variant="outline" className="btn-outline self-start">
            See all
          </Button>
        </div>

        {/* Description */}
        <div className="mb-12 text-center lg:text-left">
          <p className="text-lg text-gray-600 max-w-3xl">
            Find and book appointments with top professionals that are accepting clients right now!
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            disabled
          >
            <ChevronLeft className="h-5 w-5 text-gray-400" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 hover:text-teal-600" />
          </Button>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {availablePros.map((pro, index) => (
            <ProfessionalCard
              key={index}
              name={pro.name}
              specialty={pro.specialty}
              location={pro.location}
              price={pro.price}
              rating={pro.rating}
              reviewCount={pro.reviewCount}
              available={pro.available}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Showing professionals available for immediate booking</span>
          </div>
        </div>
      </div>
    </section>
  )
}
