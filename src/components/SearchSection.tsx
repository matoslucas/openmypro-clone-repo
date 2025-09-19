import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Users, Clock, CheckCircle, ArrowRight, Star, MapPin } from "lucide-react"

const specialties = [
  { name: "Cardiology", count: "45+ Specialists", color: "red" },
  { name: "Dermatology", count: "38+ Specialists", color: "blue" },
  { name: "Orthopedics", count: "52+ Specialists", color: "green" },
  { name: "Pediatrics", count: "67+ Specialists", color: "purple" },
  { name: "Neurology", count: "29+ Specialists", color: "orange" },
  { name: "Oncology", count: "33+ Specialists", color: "pink" },
  { name: "Psychiatry", count: "41+ Specialists", color: "indigo" },
  { name: "Endocrinology", count: "26+ Specialists", color: "teal" },
  { name: "Gastroenterology", count: "34+ Specialists", color: "yellow" },
  { name: "Rheumatology", count: "18+ Specialists", color: "gray" },
  { name: "Urology", count: "31+ Specialists", color: "cyan" },
  { name: "Ophthalmology", count: "42+ Specialists", color: "emerald" },
  { name: "ENT", count: "39+ Specialists", color: "violet" },
  { name: "Pulmonology", count: "28+ Specialists", color: "rose" },
  { name: "Nephrology", count: "22+ Specialists", color: "amber" },
  { name: "Hematology", count: "19+ Specialists", color: "lime" },
  { name: "Infectious Disease", count: "24+ Specialists", color: "sky" },
  { name: "Allergy & Immunology", count: "35+ Specialists", color: "fuchsia" },
  { name: "Geriatrics", count: "27+ Specialists", color: "slate" },
  { name: "Sports Medicine", count: "43+ Specialists", color: "zinc" },
  { name: "Pain Management", count: "36+ Specialists", color: "neutral" },
  { name: "Sleep Medicine", count: "21+ Specialists", color: "stone" },
  { name: "Rehabilitation Medicine", count: "48+ Specialists", color: "red" },
  { name: "Preventive Medicine", count: "32+ Specialists", color: "blue" },
  { name: "Occupational Medicine", count: "25+ Specialists", color: "green" },
  { name: "Addiction Medicine", count: "30+ Specialists", color: "purple" },
  { name: "Forensic Medicine", count: "15+ Specialists", color: "orange" },
  { name: "Aerospace Medicine", count: "12+ Specialists", color: "pink" },
  { name: "Undersea Medicine", count: "8+ Specialists", color: "indigo" },
  { name: "Hyperbaric Medicine", count: "14+ Specialists", color: "teal" },
  { name: "Nuclear Medicine", count: "20+ Specialists", color: "yellow" },
  { name: "Radiation Oncology", count: "23+ Specialists", color: "gray" },
  { name: "Pathology", count: "37+ Specialists", color: "cyan" },
  { name: "Radiology", count: "44+ Specialists", color: "emerald" },
  { name: "Anesthesiology", count: "40+ Specialists", color: "violet" },
  { name: "Emergency Medicine", count: "46+ Specialists", color: "rose" },
  { name: "Family Medicine", count: "58+ Specialists", color: "amber" },
  { name: "Internal Medicine", count: "62+ Specialists", color: "lime" },
  { name: "Obstetrics & Gynecology", count: "49+ Specialists", color: "sky" },
  { name: "General Surgery", count: "51+ Specialists", color: "fuchsia" },
  { name: "Plastic Surgery", count: "29+ Specialists", color: "slate" },
  { name: "Neurosurgery", count: "17+ Specialists", color: "zinc" },
  { name: "Thoracic Surgery", count: "16+ Specialists", color: "neutral" },
  { name: "Vascular Surgery", count: "18+ Specialists", color: "stone" },
  { name: "Cardiac Surgery", count: "13+ Specialists", color: "red" },
  { name: "Transplant Surgery", count: "11+ Specialists", color: "blue" },
  { name: "Trauma Surgery", count: "19+ Specialists", color: "green" },
  { name: "Pediatric Surgery", count: "21+ Specialists", color: "purple" },
  { name: "Orthopedic Surgery", count: "47+ Specialists", color: "orange" },
  { name: "Otolaryngology", count: "33+ Specialists", color: "pink" },
  { name: "Ophthalmology Surgery", count: "28+ Specialists", color: "indigo" },
  { name: "Urological Surgery", count: "24+ Specialists", color: "teal" },
  { name: "Colorectal Surgery", count: "22+ Specialists", color: "yellow" },
  { name: "Hepatobiliary Surgery", count: "15+ Specialists", color: "gray" },
  { name: "Endocrine Surgery", count: "14+ Specialists", color: "cyan" },
  { name: "Surgical Oncology", count: "26+ Specialists", color: "emerald" },
  { name: "Minimally Invasive Surgery", count: "31+ Specialists", color: "violet" },
  { name: "Robotic Surgery", count: "20+ Specialists", color: "rose" },
  { name: "Laparoscopic Surgery", count: "35+ Specialists", color: "amber" },
  { name: "Endoscopic Surgery", count: "29+ Specialists", color: "lime" },
  { name: "Microsurgery", count: "18+ Specialists", color: "sky" },
  { name: "Hand Surgery", count: "25+ Specialists", color: "fuchsia" },
  { name: "Foot & Ankle Surgery", count: "23+ Specialists", color: "slate" },
  { name: "Spine Surgery", count: "27+ Specialists", color: "zinc" },
  { name: "Joint Replacement Surgery", count: "32+ Specialists", color: "neutral" },
  { name: "Sports Medicine Surgery", count: "24+ Specialists", color: "stone" },
  { name: "Arthroscopic Surgery", count: "30+ Specialists", color: "red" },
  { name: "Reconstructive Surgery", count: "26+ Specialists", color: "blue" },
  { name: "Cosmetic Surgery", count: "34+ Specialists", color: "green" },
  { name: "Aesthetic Surgery", count: "28+ Specialists", color: "purple" },
  { name: "Breast Surgery", count: "31+ Specialists", color: "orange" },
  { name: "Body Contouring", count: "22+ Specialists", color: "pink" },
  { name: "Facial Surgery", count: "19+ Specialists", color: "indigo" },
  { name: "Rhinoplasty", count: "17+ Specialists", color: "teal" },
  { name: "Liposuction", count: "21+ Specialists", color: "yellow" },
  { name: "Tummy Tuck", count: "16+ Specialists", color: "gray" },
  { name: "Breast Augmentation", count: "18+ Specialists", color: "cyan" },
  { name: "Breast Reduction", count: "15+ Specialists", color: "emerald" },
  { name: "Breast Lift", count: "14+ Specialists", color: "violet" },
  { name: "Blepharoplasty", count: "13+ Specialists", color: "rose" },
  { name: "Facelift", count: "12+ Specialists", color: "amber" },
  { name: "Brow Lift", count: "11+ Specialists", color: "lime" },
  { name: "Neck Lift", count: "10+ Specialists", color: "sky" },
  { name: "Hair Transplant", count: "20+ Specialists", color: "fuchsia" },
  { name: "Scar Revision", count: "17+ Specialists", color: "slate" },
  { name: "Skin Grafting", count: "16+ Specialists", color: "zinc" },
  { name: "Burn Surgery", count: "9+ Specialists", color: "neutral" },
  { name: "Craniofacial Surgery", count: "8+ Specialists", color: "stone" },
  { name: "Maxillofacial Surgery", count: "19+ Specialists", color: "red" },
  { name: "Oral Surgery", count: "25+ Specialists", color: "blue" },
  { name: "Dental Surgery", count: "38+ Specialists", color: "green" },
  { name: "Periodontal Surgery", count: "21+ Specialists", color: "purple" },
  { name: "Endodontic Surgery", count: "18+ Specialists", color: "orange" },
  { name: "Prosthodontics", count: "24+ Specialists", color: "pink" },
  { name: "Orthodontics", count: "33+ Specialists", color: "indigo" },
  { name: "Pediatric Dentistry", count: "27+ Specialists", color: "teal" },
  { name: "Geriatric Dentistry", count: "16+ Specialists", color: "yellow" },
  { name: "Cosmetic Dentistry", count: "29+ Specialists", color: "gray" },
  { name: "Restorative Dentistry", count: "35+ Specialists", color: "cyan" },
  { name: "Preventive Dentistry", count: "42+ Specialists", color: "emerald" },
  { name: "Community Dentistry", count: "23+ Specialists", color: "violet" },
  { name: "Public Health Dentistry", count: "20+ Specialists", color: "rose" },
  { name: "Forensic Dentistry", count: "7+ Specialists", color: "amber" },
  { name: "Military Dentistry", count: "12+ Specialists", color: "lime" },
  { name: "Hospital Dentistry", count: "15+ Specialists", color: "sky" },
  { name: "Special Needs Dentistry", count: "18+ Specialists", color: "fuchsia" },
  { name: "Sedation Dentistry", count: "22+ Specialists", color: "slate" },
  { name: "Sleep Dentistry", count: "14+ Specialists", color: "zinc" },
  { name: "Laser Dentistry", count: "26+ Specialists", color: "neutral" },
  { name: "Digital Dentistry", count: "31+ Specialists", color: "stone" },
  { name: "Implant Dentistry", count: "28+ Specialists", color: "red" },
  { name: "Full Mouth Reconstruction", count: "13+ Specialists", color: "blue" },
  { name: "Smile Design", count: "25+ Specialists", color: "green" },
  { name: "Teeth Whitening", count: "37+ Specialists", color: "purple" },
  { name: "Veneers", count: "30+ Specialists", color: "orange" },
  { name: "Crowns & Bridges", count: "39+ Specialists", color: "pink" },
  { name: "Dentures", count: "32+ Specialists", color: "indigo" },
  { name: "Root Canal Therapy", count: "36+ Specialists", color: "teal" },
  { name: "Gum Treatment", count: "34+ Specialists", color: "yellow" },
  { name: "Tooth Extraction", count: "41+ Specialists", color: "gray" },
  { name: "Wisdom Tooth Removal", count: "29+ Specialists", color: "cyan" },
  { name: "TMJ Treatment", count: "24+ Specialists", color: "emerald" },
  { name: "Sleep Apnea Treatment", count: "21+ Specialists", color: "violet" },
  { name: "Snoring Treatment", count: "19+ Specialists", color: "rose" },
  { name: "Bruxism Treatment", count: "26+ Specialists", color: "amber" },
  { name: "Mouth Guard Therapy", count: "23+ Specialists", color: "lime" },
  { name: "Orthodontic Treatment", count: "40+ Specialists", color: "sky" },
  { name: "Invisalign", count: "33+ Specialists", color: "fuchsia" },
  { name: "Braces", count: "38+ Specialists", color: "slate" },
  { name: "Retainers", count: "27+ Specialists", color: "zinc" },
  { name: "Space Maintainers", count: "16+ Specialists", color: "neutral" },
  { name: "Palatal Expanders", count: "18+ Specialists", color: "stone" },
  { name: "Headgear", count: "14+ Specialists", color: "red" },
  { name: "Functional Appliances", count: "20+ Specialists", color: "blue" },
  { name: "Myofunctional Therapy", count: "17+ Specialists", color: "green" },
  { name: "Speech Therapy", count: "28+ Specialists", color: "purple" },
  { name: "Swallowing Therapy", count: "22+ Specialists", color: "orange" },
  { name: "Voice Therapy", count: "25+ Specialists", color: "pink" },
  { name: "Hearing Therapy", count: "19+ Specialists", color: "indigo" },
  { name: "Balance Therapy", count: "15+ Specialists", color: "teal" },
  { name: "Vestibular Therapy", count: "13+ Specialists", color: "yellow" },
  { name: "Cognitive Therapy", count: "31+ Specialists", color: "gray" },
  { name: "Behavioral Therapy", count: "35+ Specialists", color: "cyan" },
  { name: "Physical Therapy", count: "48+ Specialists", color: "emerald" },
  { name: "Occupational Therapy", count: "42+ Specialists", color: "violet" },
  { name: "Respiratory Therapy", count: "29+ Specialists", color: "rose" },
  { name: "Music Therapy", count: "24+ Specialists", color: "amber" },
  { name: "Art Therapy", count: "21+ Specialists", color: "lime" },
  { name: "Dance Therapy", count: "18+ Specialists", color: "sky" },
  { name: "Drama Therapy", count: "16+ Specialists", color: "fuchsia" },
  { name: "Recreation Therapy", count: "23+ Specialists", color: "slate" },
  { name: "Aquatic Therapy", count: "19+ Specialists", color: "zinc" },
  { name: "Equine Therapy", count: "14+ Specialists", color: "neutral" },
  { name: "Pet Therapy", count: "17+ Specialists", color: "stone" },
  { name: "Horticultural Therapy", count: "12+ Specialists", color: "red" },
  { name: "Wilderness Therapy", count: "10+ Specialists", color: "blue" },
  { name: "Adventure Therapy", count: "11+ Specialists", color: "green" },
  { name: "Expressive Therapy", count: "20+ Specialists", color: "purple" },
  { name: "Sensory Integration Therapy", count: "26+ Specialists", color: "orange" },
  { name: "Developmental Therapy", count: "28+ Specialists", color: "pink" },
  { name: "Early Intervention", count: "32+ Specialists", color: "indigo" },
  { name: "Pediatric Therapy", count: "37+ Specialists", color: "teal" },
  { name: "Geriatric Therapy", count: "25+ Specialists", color: "yellow" },
  { name: "Women's Health Therapy", count: "30+ Specialists", color: "gray" },
  { name: "Men's Health Therapy", count: "22+ Specialists", color: "cyan" },
  { name: "LGBTQ+ Health Therapy", count: "18+ Specialists", color: "emerald" },
  { name: "Cultural Therapy", count: "16+ Specialists", color: "violet" },
  { name: "Spiritual Therapy", count: "24+ Specialists", color: "rose" },
  { name: "Religious Therapy", count: "19+ Specialists", color: "amber" },
  { name: "Holistic Therapy", count: "33+ Specialists", color: "lime" },
  { name: "Alternative Therapy", count: "27+ Specialists", color: "sky" },
  { name: "Complementary Therapy", count: "29+ Specialists", color: "fuchsia" },
  { name: "Integrative Therapy", count: "31+ Specialists", color: "slate" },
  { name: "Functional Medicine", count: "34+ Specialists", color: "zinc" },
  { name: "Regenerative Medicine", count: "21+ Specialists", color: "neutral" },
  { name: "Precision Medicine", count: "26+ Specialists", color: "stone" },
  { name: "Personalized Medicine", count: "28+ Specialists", color: "red" },
  { name: "Telemedicine", count: "45+ Specialists", color: "blue" },
  { name: "Digital Health", count: "38+ Specialists", color: "green" },
  { name: "Health Technology", count: "42+ Specialists", color: "purple" },
  { name: "Medical Devices", count: "23+ Specialists", color: "orange" },
  { name: "Biomedical Engineering", count: "17+ Specialists", color: "pink" },
  { name: "Clinical Research", count: "35+ Specialists", color: "indigo" },
  { name: "Medical Writing", count: "29+ Specialists", color: "teal" },
  { name: "Medical Education", count: "33+ Specialists", color: "yellow" },
  { name: "Medical Training", count: "27+ Specialists", color: "gray" },
  { name: "Medical Consulting", count: "31+ Specialists", color: "cyan" },
  { name: "Healthcare Administration", count: "39+ Specialists", color: "emerald" },
  { name: "Healthcare Management", count: "36+ Specialists", color: "violet" },
  { name: "Healthcare Policy", count: "24+ Specialists", color: "rose" },
  { name: "Healthcare Economics", count: "20+ Specialists", color: "amber" },
  { name: "Healthcare Quality", count: "28+ Specialists", color: "lime" },
  { name: "Healthcare Safety", count: "25+ Specialists", color: "sky" },
  { name: "Healthcare Informatics", count: "32+ Specialists", color: "fuchsia" },
  { name: "Healthcare Analytics", count: "26+ Specialists", color: "slate" },
  { name: "Healthcare Innovation", count: "30+ Specialists", color: "zinc" },
  { name: "Healthcare Entrepreneurship", count: "22+ Specialists", color: "neutral" },
  { name: "Healthcare Investment", count: "18+ Specialists", color: "stone" },
  { name: "Healthcare Marketing", count: "34+ Specialists", color: "red" },
  { name: "Healthcare Communication", count: "37+ Specialists", color: "blue" },
  { name: "Healthcare Media", count: "29+ Specialists", color: "green" },
  { name: "Healthcare Journalism", count: "21+ Specialists", color: "purple" },
  { name: "Healthcare Advocacy", count: "33+ Specialists", color: "orange" },
  { name: "Healthcare Ethics", count: "26+ Specialists", color: "pink" },
  { name: "Healthcare Law", count: "24+ Specialists", color: "indigo" },
  { name: "Healthcare Compliance", count: "31+ Specialists", color: "teal" },
  { name: "Healthcare Risk Management", count: "27+ Specialists", color: "yellow" },
  { name: "Healthcare Insurance", count: "35+ Specialists", color: "gray" },
  { name: "Healthcare Finance", count: "28+ Specialists", color: "cyan" },
  { name: "Healthcare Accounting", count: "23+ Specialists", color: "emerald" },
  { name: "Healthcare Auditing", count: "19+ Specialists", color: "violet" },
  { name: "Healthcare Tax", count: "16+ Specialists", color: "rose" },
  { name: "Healthcare Legal", count: "25+ Specialists", color: "amber" },
  { name: "Healthcare Regulatory", count: "30+ Specialists", color: "lime" },
  { name: "Healthcare Standards", count: "32+ Specialists", color: "sky" },
  { name: "Healthcare Certification", count: "28+ Specialists", color: "fuchsia" },
  { name: "Healthcare Accreditation", count: "24+ Specialists", color: "slate" },
  { name: "Healthcare Licensing", count: "26+ Specialists", color: "zinc" },
  { name: "Healthcare Credentialing", count: "29+ Specialists", color: "neutral" },
  { name: "Healthcare Privileging", count: "22+ Specialists", color: "stone" },
  { name: "Healthcare Credentialing", count: "27+ Specialists", color: "red" },
  { name: "Healthcare Privileging", count: "20+ Specialists", color: "blue" },
  { name: "Healthcare Credentialing", count: "25+ Specialists", color: "green" },
  { name: "Healthcare Privileging", count: "18+ Specialists", color: "purple" },
  { name: "Healthcare Credentialing", count: "23+ Specialists", color: "orange" },
  { name: "Healthcare Privileging", count: "17+ Specialists", color: "pink" },
  { name: "Healthcare Credentialing", count: "21+ Specialists", color: "indigo" },
  { name: "Healthcare Privileging", count: "15+ Specialists", color: "teal" },
  { name: "Healthcare Credentialing", count: "19+ Specialists", color: "yellow" },
  { name: "Healthcare Privileging", count: "14+ Specialists", color: "gray" },
  { name: "Healthcare Credentialing", count: "16+ Specialists", color: "cyan" },
  { name: "Healthcare Privileging", count: "13+ Specialists", color: "emerald" },
  { name: "Healthcare Credentialing", count: "12+ Specialists", color: "violet" },
  { name: "Healthcare Privileging", count: "11+ Specialists", color: "rose" },
  { name: "Healthcare Credentialing", count: "10+ Specialists", color: "amber" },
  { name: "Healthcare Privileging", count: "9+ Specialists", color: "lime" },
  { name: "Healthcare Credentialing", count: "8+ Specialists", color: "sky" },
  { name: "Healthcare Privileging", count: "7+ Specialists", color: "fuchsia" },
  { name: "Healthcare Credentialing", count: "6+ Specialists", color: "slate" },
  { name: "Healthcare Privileging", count: "5+ Specialists", color: "zinc" },
  { name: "Healthcare Credentialing", count: "4+ Specialists", color: "neutral" },
  { name: "Healthcare Privileging", count: "3+ Specialists", color: "stone" },
  { name: "Healthcare Credentialing", count: "2+ Specialists", color: "red" },
  { name: "Healthcare Privileging", count: "1+ Specialists", color: "blue" }
]

export default function SearchSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
                <div className="text-sm text-gray-600">New Pros Added</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">48hrs</div>
                <div className="text-sm text-gray-600">Average Verification</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Search Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Search by Specialty</h3>
            
            {/* Search Input */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search specialties..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            {/* Popular Specialties */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Popular Specialties</h4>
              <div className="grid grid-cols-2 gap-3">
                {specialties.slice(0, 8).map((specialty, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <span className="text-sm font-medium text-gray-700">{specialty.name}</span>
                    <Badge className={`bg-${specialty.color}-100 text-${specialty.color}-700 hover:bg-${specialty.color}-100 text-xs`}>
                      {specialty.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white">
              Browse All Specialties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Specialties Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Browse All Specialties</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive directory of medical specialties and find the right professional for your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md hover:border-teal-300 transition-all duration-200">
                  <div className="text-center">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                      {specialty.name}
                    </h4>
                    <Badge className={`bg-${specialty.color}-100 text-${specialty.color}-700 hover:bg-${specialty.color}-100 text-xs`}>
                      {specialty.count}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Network</h3>
            <p className="text-lg mb-6 opacity-90">
              Help us expand our directory by adding trusted professionals in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-lg font-medium">
                Add Professional
                <Plus className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-3 rounded-lg font-medium">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
