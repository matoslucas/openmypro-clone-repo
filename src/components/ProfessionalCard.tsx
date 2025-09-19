import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar } from "lucide-react"

interface ProfessionalCardProps {
  name: string
  specialty: string
  location?: string
  price: string
  rating: number
  reviewCount: number
  image?: string
  featured?: boolean
  available?: boolean
}

export default function ProfessionalCard({
  name,
  specialty,
  location,
  price,
  rating,
  reviewCount,
  image,
  featured = false,
  available = false
}: ProfessionalCardProps) {
  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Generate professional placeholder image with different gradients
  const getGradientClass = (name: string) => {
    const gradients = [
      'from-teal-400 to-teal-600',
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600',
      'from-pink-400 to-pink-600',
      'from-orange-400 to-orange-600'
    ]
    const index = name.charCodeAt(0) % gradients.length
    return gradients[index]
  }

  return (
    <Card className="professional-card group">
      <CardContent className="p-0">
        {/* Professional Image Section */}
        <div className="relative">
          <div className="aspect-[4/3] bg-gray-50 rounded-t-xl overflow-hidden relative">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="absolute top-4 left-4 w-6 h-6 bg-teal-100 rounded-full opacity-60"></div>
                  <div className="absolute top-8 right-6 w-4 h-4 bg-blue-100 rounded-full opacity-40"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-purple-100 rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 right-4 w-5 h-5 bg-pink-100 rounded-full opacity-60"></div>
                </div>

                {/* Professional Avatar */}
                <div className="relative z-10">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getGradientClass(name)} flex items-center justify-center shadow-lg border-4 border-white`}>
                    <span className="text-white text-2xl font-bold">
                      {getInitials(name)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Status Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {featured && (
              <Badge className="bg-purple-600 text-white hover:bg-purple-600 text-xs">
                Featured
              </Badge>
            )}
            {available && (
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Available
              </Badge>
            )}
          </div>

          {/* Rating Badge */}
          {rating > 0 && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 shadow-sm">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium text-gray-900">{rating}</span>
            </div>
          )}
        </div>

        {/* Professional Info */}
        <div className="p-5 space-y-4">
          {/* Name and Specialty */}
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-gray-600 capitalize line-clamp-2 leading-relaxed">
              {specialty}
            </p>
          </div>

          {/* Location */}
          {location && (
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="line-clamp-1">{location}</span>
            </div>
          )}

          {/* Price and Rating Row */}
          <div className="flex items-center justify-between pt-1">
            <div className="text-sm">
              <span className="font-bold text-lg text-gray-900">{price}</span>
              <span className="text-gray-500 text-sm">/visit*</span>
            </div>

            {rating > 0 && (
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900">{rating}</span>
                <span className="text-xs text-gray-500">({reviewCount})</span>
              </div>
            )}
          </div>

          {/* Book Now Button */}
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 group-hover:shadow-lg"
            size="sm"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
