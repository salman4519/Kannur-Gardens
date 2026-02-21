import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users } from "lucide-react";
import orchidHall from "@/assets/orchid-hall.jpg";
import jasmineLawn from "@/assets/jasmine-lawn.jpg";
import lotusPavilion from "@/assets/lotus-pavilion.jpg";

const spaces = [
  {
    name: "Orchid Hall",
    image: orchidHall,
    capacity: "Up to 250 Guests",
    description: "An elegant AC banquet hall with crystal chandeliers, perfect for intimate wedding receptions and formal celebrations.",
  },
  {
    name: "Jasmine Lawn",
    image: jasmineLawn,
    capacity: "600–800 Guests",
    description: "A sprawling outdoor garden venue under the open sky, ideal for grand wedding ceremonies surrounded by tropical beauty.",
  },
  {
    name: "Lotus Pavilion",
    image: lotusPavilion,
    capacity: "Up to 1000 Guests",
    description: "A customisable grand event area that adapts to your vision — from traditional mandaps to modern stage setups.",
  },
];

const SpacesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="spaces" className="section-padding bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Spaces</p>
          <h2 className="section-title mb-4">Venues Crafted for Grandeur</h2>
          <div className="gold-separator mb-6" />
          <p className="section-subtitle mx-auto">
            Three distinctive spaces, each designed to create magical moments for your special day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space, i) => (
            <div
              key={space.name}
              className={`luxury-card group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading text-2xl font-medium text-foreground mb-2">{space.name}</h3>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Users className="w-4 h-4" />
                  <span className="font-body text-sm tracking-wide">{space.capacity}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
