"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Venues", href: "#spaces" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] ${isMobileOpen
        ? "bg-[#fdfbf7] border-none"
        : "transition-all duration-300 " + (isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent border-transparent")
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-24">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 md:gap-4 group relative z-[110]">
          <Image
            src="/images/logo.png"
            alt="Kannur Gardens"
            width={80}
            height={80}
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="font-heading text-xl md:text-3xl tracking-wide text-foreground">
            Kannur Gardens
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919074771838"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-foreground relative z-[110] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#fdfbf7] md:hidden flex flex-col pt-24"
          >
            {/* Nav links centered */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 pb-20">
              <div className="flex flex-col items-center gap-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (i + 1) }}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-heading text-4xl text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto p-10 pb-20 space-y-8 bg-secondary/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="tel:+919074771838"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
