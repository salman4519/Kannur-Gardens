import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";
import orchidHall from "@/assets/orchid-hall.jpg";
import jasmineLawn from "@/assets/jasmine-lawn.jpg";
import lotusPavilion from "@/assets/lotus-pavilion.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: heroImg, alt: "Grand outdoor wedding setup" },
  { src: orchidHall, alt: "Orchid Hall banquet" },
  { src: gallery1, alt: "Elegant dinner reception" },
  { src: gallery2, alt: "Traditional mandap decoration" },
  { src: jasmineLawn, alt: "Jasmine Lawn ceremony" },
  { src: gallery4, alt: "Floral entrance archway" },
  { src: gallery3, alt: "Aerial venue view" },
  { src: lotusPavilion, alt: "Lotus Pavilion stage" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Gallery</p>
          <h2 className="section-title mb-4">Moments of Grandeur</h2>
          <div className="gold-separator mb-6" />
          <p className="section-subtitle mx-auto">
            A glimpse into the celebrations that have graced our venue.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`break-inside-avoid cursor-pointer group overflow-hidden rounded-sm transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
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
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
