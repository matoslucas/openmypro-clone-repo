import { Button } from "@/components/ui/button"
import ProfessionalCard from "./ProfessionalCard"
import { Trophy } from "lucide-react"

const topRatedPros = [
  {
    name: "Maasai Musurpei",
    specialty: "nutrition",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 1
  },
  {
    name: "Jackline Mwangi",
    specialty: "nurse practitioner",
    location: "NYERI, NYERI COUNTY",
    price: "$0.00",
    rating: 0.0,
    reviewCount: 0
  },
  {
    name: "Alyssa Cappelletti",
    specialty: "chiropractic",
    location: "AUSTIN, TX",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 2
  },
  {
    name: "Tom Darilek",
    specialty: "undefined non-physician type (specify)",
    location: "AUSTIN, TX",
    price: "$0.00",
    rating: 5.0,
    reviewCount: 1
  }
]

export default function TopRated() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-teal-600">Top 10 Pros Recommended by Blossend:</span><br />
            <span>Most Popular & Highly Rated</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Verified top-performing professionals selected by Blossend's quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {topRatedPros.map((pro, index) => (
            <ProfessionalCard
              key={index}
              name={pro.name}
              specialty={pro.specialty}
              location={pro.location}
              price={pro.price}
              rating={pro.rating}
              reviewCount={pro.reviewCount}
              featured={index < 2}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50">
            See all
          </Button>
        </div>
      </div>
    </section>
  )
}
