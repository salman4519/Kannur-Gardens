"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              <Image
                src="/images/gallery-3.jpg"
                alt="Aerial view of Kannur Gardens wedding venue with landscaped lawns and traditional Kerala architecture"
                width={700}
                height={500}
                className="w-full h-[500px] object-cover rounded-sm"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-sm hidden lg:block" />
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 text-center lg:text-left ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About Kannur Gardens
            </p>
            <h2 className="section-title mb-6 mx-auto lg:mx-0">
              The Premier Wedding & Event Venue in Kannur
            </h2>
            <div className="gold-separator mb-8 lg:mx-0" />
            <p className="section-subtitle mb-6 mx-auto lg:mx-0">
              Kannur Gardens is one of the most sought-after wedding venues in Kannur, offering a perfect combination of luxury, space, and natural beauty. Designed for both intimate ceremonies and large-scale celebrations, our venue features an elegant AC banquet hall, a beautifully landscaped garden lawn, and a grand customised event area.
            </p>
            <p className="section-subtitle mb-8 mx-auto lg:mx-0">
              Whether you are planning a traditional wedding, a modern reception, or a destination-style celebration, Kannur Gardens provides a stunning backdrop, premium facilities, and a seamless event experience in the heart of Kerala.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              {[
                { label: "Largest Venue in Kannur" },
                { label: "Indoor & Outdoor Options" },
                { label: "Parking for 200+ Cars" },
                { label: "Traditional & Modern" },
                { label: "Easy Town Access" },
                { label: "Premium Facilities" },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 justify-center lg:justify-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  <p className="font-body text-xs md:text-sm tracking-wide uppercase text-foreground/80">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
