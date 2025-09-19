import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AvailableNow from '@/components/AvailableNow'
import Featured from '@/components/Featured'
import MindBodyWellness from '@/components/MindBodyWellness'
import PhysicalHealth from '@/components/PhysicalHealth'
import FitnessExercise from '@/components/FitnessExercise'
import BeautyAesthetics from '@/components/BeautyAesthetics'
import MedicalClinical from '@/components/MedicalClinical'
import TopRated from '@/components/TopRated'
import SearchSection from '@/components/SearchSection'
import Footer from '@/components/Footer'
import LoadingAnimation from '@/components/LoadingAnimation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LoadingAnimation />
      <Header />
      <HeroSection />
      <AvailableNow />
      <Featured />
      <MindBodyWellness />
      <PhysicalHealth />
      <FitnessExercise />
      <BeautyAesthetics />
      <MedicalClinical />
      <TopRated />
      <SearchSection />
      <Footer />
    </div>
  );
}
