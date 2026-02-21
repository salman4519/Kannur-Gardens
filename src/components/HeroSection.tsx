import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-5"
            >
              Luxury Event Venue • Kannur, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-tight mb-6"
            >
              Best Wedding Venue in Kannur for Grand &{" "}
              <span className="text-primary italic">Elegant</span> Celebrations
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="origin-left w-20 h-[2px] bg-primary mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10"
            >
              Nestled amidst lush tropical gardens, Kannur Gardens offers an unparalleled backdrop
              for your most cherished celebrations — where luxury meets natural beauty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3 border border-border text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-accent transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 border border-border text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-accent transition-all duration-300"
              >
                <CalendarDays className="w-4 h-4" />
                Book Visit
              </a>
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-[0_25px_80px_-20px_hsl(var(--primary)/0.25)]">
              <img
                src={heroImg}
                alt="Kannur Gardens luxury wedding venue with lush tropical gardens"
                className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Decorative frame accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
