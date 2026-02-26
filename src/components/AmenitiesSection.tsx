"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Flower2, UtensilsCrossed, CalendarCheck, Car, Music, Camera, Sparkles, Shield } from "lucide-react";

const amenities = [
  { icon: Flower2, title: "In-House Decor", desc: "Elegant, customizable setups with floral arrangements and themed styling to match your vision." },
  { icon: UtensilsCrossed, title: "In-House Catering", desc: "A carefully curated multi-cuisine menu, crafted by expert chefs for a delightful dining experience." },
  { icon: CalendarCheck, title: "In-House Event Planning", desc: "Dedicated team ensuring a seamless, stress-free celebration with meticulous attention to detail." },
  { icon: Car, title: "Ample Parking", desc: "Spacious parking facilities accommodating up to 200 cars for your guests' convenience." },
  { icon: Music, title: "Sound & Lighting", desc: "State-of-the-art audio-visual systems for a spectacular celebration." },
  { icon: Camera, title: "Photography Spots", desc: "Curated scenic backdrops perfect for stunning wedding photography." },
  { icon: Sparkles, title: "Bridal Suite", desc: "Luxurious preparation rooms for the bride and groom's party." },
  { icon: Shield, title: "Easy Accessibility", desc: "Located in the heart of Kannur with easy access from town and railway station." },
];

const AmenitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="amenities" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Amenities</p>
          <h2 className="section-title mb-4">Everything You Need, Elevated</h2>
          <div className="gold-separator mb-6" />
          <p className="section-subtitle mx-auto">
            A seamless luxury experience with every convenience at your fingertips.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <div
              key={item.title}
              className={`group p-8 text-center rounded-sm border border-border bg-card hover:bg-primary/5 transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
