"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import Image from "next/image";

const images = [
  { src: "/images/hero-wedding.jpg", alt: "Grand outdoor wedding decoration setup at Kannur Gardens venue in Kannur Kerala" },
  { src: "/images/orchid-hall.jpg", alt: "Orchid Hall AC banquet hall with elegant lighting and stage at Kannur Gardens" },
  { src: "/images/gallery-1.jpg", alt: "Luxury dinner reception with floral table decorations at Kannur Gardens wedding venue" },
  { src: "/images/gallery-2.jpg", alt: "Traditional Hindu wedding mandap decoration at Kannur Gardens Kerala" },
  { src: "/images/jasmine-lawn.jpg", alt: "Jasmine Lawn outdoor garden wedding ceremony at Kannur Gardens with lush greenery" },
  { src: "/images/gallery-4.jpg", alt: "Floral entrance archway and pathway decoration at Kannur Gardens event venue" },
  { src: "/images/gallery-3.jpg", alt: "Aerial view of Kannur Gardens wedding venue with lush green lawns and Kerala-style buildings" },
  { src: "/images/lotus-pavilion.jpg", alt: "Lotus Pavilion grand event stage setup for large wedding at Kannur Gardens" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Gallery</p>
          <h2 className="section-title mb-4">Real Weddings at Kannur Gardens</h2>
          <div className="gold-separator mb-6" />
          <p className="section-subtitle mx-auto">
            A glimpse into the stunning celebrations that have graced our venue.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`break-inside-avoid cursor-pointer group overflow-hidden rounded-sm transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-ivory hover:text-primary transition-colors"
            aria-label="Close gallery lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[85vh] object-contain rounded-sm animate-scale-in"
            sizes="95vw"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
