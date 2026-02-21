import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun",
    event: "Wedding Reception",
    text: "Kannur Gardens made our dream wedding a reality. The Orchid Hall was breathtaking, and the team ensured every detail was perfect. Our guests still talk about it!",
  },
  {
    name: "Meera & Rahul",
    event: "Traditional Wedding",
    text: "The Jasmine Lawn was the perfect setting for our traditional ceremony. The natural beauty of the venue added a magical touch that no amount of decoration could replicate.",
  },
  {
    name: "Anjali & Deepak",
    event: "Grand Celebration",
    text: "From the moment we walked in, we knew this was the one. The Lotus Pavilion accommodated our 800+ guests effortlessly. Truly a world-class venue in Kannur.",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
          <h2 className="section-title mb-4">Words from Our Families</h2>
          <div className="gold-separator mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 bg-card border border-border rounded-sm transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="font-heading text-lg text-foreground">{t.name}</p>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">{t.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
