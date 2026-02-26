"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya & Arjun",
    event: "Wedding Reception",
    rating: 5,
    image: "/images/gallery-1.jpg",
    text: "Kannur Gardens made our dream wedding a reality. The Orchid Hall was breathtaking, and the team ensured every detail was perfect. Our guests still talk about the beautiful ambience and the amazing food!",
    location: "Kannur",
  },
  {
    name: "Meera & Rahul",
    event: "Traditional Wedding",
    rating: 5,
    image: "/images/gallery-2.jpg",
    text: "The Jasmine Lawn was the perfect setting for our traditional ceremony. The natural beauty of the venue added a magical touch that no amount of decoration could replicate. Best garden wedding venue in Kannur!",
    location: "Thalassery",
  },
  {
    name: "Anjali & Deepak",
    event: "Grand Celebration",
    rating: 5,
    image: "/images/gallery-4.jpg",
    text: "From the moment we walked in, we knew this was the one. The Lotus Pavilion accommodated our 800+ guests effortlessly. Truly a world-class wedding venue in Kannur. The parking facility was a huge plus!",
    location: "Kannur",
  },
  {
    name: "Fathima & Ashraf",
    event: "Nikah Ceremony",
    rating: 5,
    image: null,
    text: "We hosted our Nikah ceremony at the Orchid Hall and it was absolutely perfect. The AC hall, elegant decor, and the professional staff made everything seamless. Highly recommended!",
    location: "Payyanur",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Reviews & Testimonials
          </p>
          <h2 className="section-title mb-4">
            What Our Clients Say About Kannur Gardens
          </h2>
          <div className="gold-separator mb-6" />
          <p className="section-subtitle mx-auto">
            Real stories from real families who celebrated their happiest moments with us.
          </p>
        </div>

        {/* Featured Reviews with Photos */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {testimonials.slice(0, 2).map((t, i) => (
            <div
              key={t.name}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card transition-all duration-1000 hover:-translate-y-1 hover:shadow-lg ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
            >
              {/* Wedding Photo */}
              {t.image && (
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={`${t.name} wedding celebration at Kannur Gardens ${t.event}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
              )}
              <div className="p-8">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>
                <p className="font-heading text-lg text-foreground">
                  {t.name}
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  {t.event} • {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Reviews */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(2).map((t, i) => (
            <div
              key={t.name}
              className={`p-8 bg-card border border-border rounded-sm transition-all duration-1000 hover:-translate-y-1 hover:shadow-lg ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{
                transitionDelay: isVisible ? `${(i + 2) * 200}ms` : "0ms",
              }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="font-heading text-lg text-foreground">{t.name}</p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                {t.event} • {t.location}
              </p>
            </div>
          ))}
        </div>

        {/* Aggregate Rating Note */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 border border-primary/10 rounded-full">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 text-primary fill-primary"
                />
              ))}
            </div>
            <span className="font-body text-sm text-foreground/80">
              Rated 5/5 by 100+ happy families
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
