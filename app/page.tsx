import Header from "@/components/Header"
import HeroSection from "@/sections/HeroSection"
import FeaturesSection from "@/sections/FeaturesSection"
import AboutSection from "@/sections/AboutSection"
import SpecsSection from "@/sections/SpecsSection"
import GallerySection from "@/sections/GallerySection"
import ProcessSection from "@/sections/ProcessSection"
import CTASection from "@/sections/CTASection"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <SpecsSection />
        <GallerySection />
        <ProcessSection />
        <CTASection />
      </main>
    </>
  )
}
