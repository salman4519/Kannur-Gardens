import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold-light mb-6"
        >
          Luxury Event Venue • Kannur, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-ivory leading-tight mb-6"
        >
          Best Wedding Venue in Kannur for Grand & Elegant Celebrations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-base md:text-lg text-ivory/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Nestled amidst lush tropical gardens, Kannur Gardens offers an unparalleled backdrop
          for your most cherished celebrations — where luxury meets natural beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-ivory/40 text-ivory font-body text-sm tracking-widest uppercase rounded-sm hover:bg-ivory/10 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-ivory/40 text-ivory font-body text-sm tracking-widest uppercase rounded-sm hover:bg-ivory/10 transition-all duration-300"
          >
            <CalendarDays className="w-4 h-4" />
            Book Visit
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-ivory/40 relative overflow-hidden">
          <div className="w-full h-4 bg-gold animate-[slide-down_2s_ease-in-out_infinite] absolute top-0"
            style={{ animation: "slideDown 2s ease-in-out infinite" }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
