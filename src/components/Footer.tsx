import { Heart } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start gap-4 mb-8">
              <Image
                src="/images/logo.png"
                alt="Kannur Gardens"
                width={112}
                height={112}
                className="h-28 w-auto object-contain"
              />
              <span className="font-heading text-3xl tracking-wide text-background">Kannur Gardens</span>
            </div>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Luxury Event Venue in Kannur, Kerala. Creating timeless celebrations since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-background/40 mb-4">Quick Links</p>
            <div className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Venues", href: "#spaces" },
                { label: "Amenities", href: "#amenities" },
                { label: "Gallery", href: "#gallery" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-body text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-background/40 mb-4">Contact</p>
            <div className="space-y-3 font-body text-sm text-background/70">
              <p>Thekilepeedika, Thazhe Chovva, Kannur 670007</p>
              <a href="tel:+919074771838" className="block hover:text-primary transition-colors">+91 90747 71838</a>
              <a href="mailto:kannurgardens@gmail.com" className="block hover:text-primary transition-colors">kannurgardens@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background/40">
            © 2026 Kannur Gardens. All rights reserved.
          </p>
          <p className="font-body text-xs text-background/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
