"use client";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  // Show after scrolling 300px
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop pulsing after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsPulsing(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/919074771838?text=Hello!%20I%20am%20interested%20in%20booking%20Kannur%20Gardens%20for%20my%20event."
      target="_blank"
      rel="noopener noreferrer"
      id="floating-whatsapp-btn"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 group ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      aria-label="Chat on WhatsApp for wedding booking"
    >
      {/* Pulse ring */}
      {isPulsing && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      )}

      {/* Icon */}
      <span className="relative w-14 h-14 flex items-center justify-center">
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </span>

      {/* Label — visible on hover (desktop) */}
      <span className="hidden md:block max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap font-body text-sm tracking-wide pr-0 group-hover:pr-5">
        Book on WhatsApp
      </span>
    </a>
  );
};

export default FloatingCTA;
