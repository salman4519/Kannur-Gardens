"use client";

import { Phone, CalendarDays, Snowflake, Trees, Car } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import OpeningSoonModal from "./OpeningSoonModal";

const highlights = [
  { icon: Snowflake, label: "Indoor AC Banquet Hall" },
  { icon: Trees, label: "Outdoor Garden Wedding Space" },
  { icon: Car, label: "Parking for 200+ Cars" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <OpeningSoonModal />

      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-4"
            >
              Premium Event Venue • Kannur, Kerala
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-tight mb-6"
            >
              Luxury Wedding &{" "}
              <span className="text-primary italic">Event Venue</span> in Kannur
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="origin-left w-20 h-[2px] bg-primary mb-6 mx-auto lg:mx-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-6 mx-auto lg:mx-0"
            >
              One of the most sought-after wedding venues in Kannur, offering a perfect combination
              of luxury, space, and natural beauty for up to 1000 guests.
            </motion.p>

            {/* Highlight Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 border border-primary/15 rounded-full"
                >
                  <h.icon className="w-4 h-4 text-primary" />
                  <span className="font-body text-xs md:text-sm tracking-wide text-foreground/80">
                    {h.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 lg:flex lg:flex-row items-center lg:items-start gap-3 w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
              <a
                href="tel:+919074771838"
                id="hero-call-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-body text-xs sm:text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 w-full lg:w-auto shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919074771838?text=Hello!%20I%20am%20interested%20in%20booking%20Kannur%20Gardens%20for%20my%20event."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white font-body text-xs sm:text-sm tracking-widest uppercase rounded-sm hover:bg-[#20bd5a] transition-all duration-300 w-full lg:w-auto shadow-md hover:shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                WhatsApp
              </a>
              <a
                href="#contact"
                id="hero-book-btn"
                className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-accent transition-all duration-300"
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
              <Image
                src="/images/hero-wedding.jpg"
                alt="Kannur Gardens luxury wedding venue with decorated outdoor garden setup and floral mandap in Kannur Kerala"
                width={800}
                height={600}
                className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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
