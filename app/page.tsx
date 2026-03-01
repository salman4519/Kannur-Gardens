import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import AboutSection from "@/components/AboutSection";
import SpacesSection from "@/components/SpacesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
// TODO: Uncomment when venue is open and reviews are available
// import TestimonialsSection from "@/components/TestimonialsSection";
import OpeningSoonBanner from "@/components/OpeningSoonBanner";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <HeroSection />

                <AboutSection />
                <SpacesSection />
                <AmenitiesSection />
                <GallerySection />
                {/* TODO: Uncomment when venue is open */}
                {/* <TestimonialsSection /> */}
                <OpeningSoonBanner />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    );
}
