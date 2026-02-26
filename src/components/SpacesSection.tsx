"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Snowflake, TreePine, Star, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";

const venues = [
  {
    name: "Wedding Venue in Kannur",
    subtitle: "The Orchid Hall + Jasmine Lawn",
    image: "/images/orchid-hall.jpg",
    icon: Star,
    capacity: "250 – 1000 Guests",
    features: [
      "Elegant AC banquet hall for receptions",
      "Beautiful garden lawn for ceremonies",
      "Professional stage & mandap setup",
      "Dedicated dining area with multi-cuisine catering",
      "In-house decor & event planning team",
    ],
    description:
      "Kannur Gardens is the top-rated wedding venue in Kannur, offering both indoor and outdoor spaces. From intimate engagement ceremonies to grand wedding receptions, our venue provides a stunning backdrop for every milestone celebration.",
    alt: "Kannur Gardens wedding venue indoor banquet hall with elegant stage setup and floral decorations in Kannur Kerala",
  },
  {
    name: "Banquet Hall in Kannur",
    subtitle: "The Orchid Hall – AC Indoor Venue",
    image: "/images/lotus-pavilion.jpg",
    icon: Snowflake,
    capacity: "Up to 250 Guests",
    features: [
      "Fully air-conditioned luxury banquet hall",
      "Elegant stage with customisable backdrops",
      "Comfortable seating arrangements",
      "Modern sound & lighting systems",
      "Bridal suite & groom's preparation room",
    ],
    description:
      "Our AC banquet hall in Kannur is perfect for intimate weddings, engagement ceremonies, and corporate events. The Orchid Hall features premium interiors, state-of-the-art audio-visual systems, and a dedicated dining zone.",
    alt: "Air-conditioned banquet hall interior at Kannur Gardens with stage setup and comfortable seating in Kannur Kerala",
  },
  {
    name: "Garden Wedding Venue",
    subtitle: "Jasmine Lawn – Outdoor Paradise",
    image: "/images/jasmine-lawn.jpg",
    icon: TreePine,
    capacity: "600 – 800 Guests",
    features: [
      "Scenic open-air garden lawn",
      "Magical night wedding ambience",
      "Destination-style wedding experience",
      "Perfect for Mehendi, Sangeet & receptions",
      "Curated photography backdrops",
    ],
    description:
      "Experience the charm of an outdoor garden wedding in Kannur. The Jasmine Lawn at Kannur Gardens offers a lush, landscaped setting ideal for day weddings, night celebrations, and destination-style events under the stars.",
    alt: "Outdoor garden wedding venue Jasmine Lawn at Kannur Gardens with lush greenery and night wedding decoration in Kannur Kerala",
  },
];

const SpacesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="spaces" className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Our Venue Spaces
          </p>
          <h2 className="section-title mb-4">
            Premium Wedding & Event Venues in Kannur
          </h2>
          <div className="gold-separator mb-6" />
          <p className="section-subtitle mx-auto">
            Three distinctive spaces designed to create magical moments — from
            intimate gatherings to grand celebrations of 1000+ guests.
          </p>
        </div>

        {/* Venue Cards */}
        <div className="space-y-16">
          {venues.map((venue, i) => (
            <div
              key={venue.name}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
            >
              {/* Image — alternating sides */}
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-sm overflow-hidden shadow-lg group">
                  <Image
                    src={venue.image}
                    alt={venue.alt}
                    width={700}
                    height={400}
                    className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                  {/* Capacity badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">
                      {venue.capacity}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/15 rounded-sm -z-10 hidden lg:block" />
              </div>

              {/* Text Content */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <venue.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary">
                    {venue.subtitle}
                  </p>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4">
                  {venue.name}
                </h3>

                <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                  {venue.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {venue.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm text-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+919074771838"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Book Now
                  </a>
                  <a
                    href="https://wa.me/919074771838?text=Hello!%20I%20am%20interested%20in%20the%20venue%20spaces%20at%20Kannur%20Gardens."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:bg-accent transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
