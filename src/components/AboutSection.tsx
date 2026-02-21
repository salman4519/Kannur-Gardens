import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery3 from "@/assets/gallery-3.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              <img
                src={gallery3}
                alt="Kannur Gardens aerial view"
                className="w-full h-[500px] object-cover rounded-sm"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-sm hidden lg:block" />
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About Us
            </p>
            <h2 className="section-title mb-6">
              Where Dreams Find Their Perfect Setting
            </h2>
            <div className="gold-separator mb-8 mx-0" />
            <p className="section-subtitle mb-6">
              Kannur Gardens is a luxury wedding and event venue nestled in the heart of Kannur, Kerala.
              With sprawling indoor and outdoor spaces, we offer the perfect canvas for traditional ceremonies,
              modern celebrations, and destination weddings alike.
            </p>
            <p className="section-subtitle mb-8">
              Our venue combines the natural beauty of Kerala's tropical landscape with world-class
              amenities, creating an unforgettable experience for you and your guests.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Events Hosted" },
                { number: "1000", label: "Guest Capacity" },
                { number: "5★", label: "Rated Venue" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-heading text-2xl md:text-3xl text-primary font-medium">{stat.number}</p>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
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
